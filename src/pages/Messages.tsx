import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Message {
  id: string;
  content: string;
  sender_id: string;
  created_at: string;
  profiles: {
    full_name: string;
  };
}

interface Conversation {
  id: string;
  participant_1: string;
  participant_2: string;
  job_id?: string;
  updated_at: string;
  jobs?: {
    title: string;
  };
  profiles: {
    full_name: string;
  }[];
}

const Messages = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchConversations();
  }, [user, navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!selectedConversation) return;

    // Set up real-time subscription for messages
    const channel = supabase
      .channel('messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${selectedConversation}`,
        },
        (payload) => {
          fetchMessages(selectedConversation);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedConversation]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchConversations = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('conversations')
        .select(`
          *,
          jobs(title),
          profiles!conversations_participant_1_fkey(full_name),
          profiles!conversations_participant_2_fkey(full_name)
        `)
        .or(`participant_1.eq.${user.id},participant_2.eq.${user.id}`)
        .order('updated_at', { ascending: false });

      if (error) throw error;

      // Transform data to include both participants
      const transformedData = data?.map(conv => ({
        ...conv,
        profiles: [
          conv.profiles.full_name ? { full_name: conv.profiles.full_name } : null,
          // We need to fetch the other participant separately due to foreign key constraints
        ].filter(Boolean)
      })) || [];

      setConversations(transformedData);
    } catch (error: any) {
      toast({
        title: "Error loading conversations",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (conversationId: string) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select(`
          *,
          profiles(full_name)
        `)
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading messages",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const sendMessage = async () => {
    if (!user || !selectedConversation || !newMessage.trim()) return;

    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          conversation_id: selectedConversation,
          sender_id: user.id,
          content: newMessage.trim(),
        });

      if (error) throw error;

      setNewMessage("");
      // Update conversation timestamp
      await supabase
        .from('conversations')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', selectedConversation);
        
    } catch (error: any) {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getOtherParticipantName = (conversation: Conversation) => {
    const otherParticipantId = conversation.participant_1 === user?.id 
      ? conversation.participant_2 
      : conversation.participant_1;
    
    // This is a simplified approach - in a real app, you'd properly join the data
    return conversation.profiles?.[0]?.full_name || "Unknown User";
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold">VocConnect</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/jobs" className="text-foreground hover:text-primary transition-colors">Find Jobs</Link>
            <Link to="/messages" className="text-foreground hover:text-primary transition-colors">Messages</Link>
            <Link to="/profile" className="text-foreground hover:text-primary transition-colors">My Profile</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Messages
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {loading ? (
                <div className="space-y-4 p-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-muted rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-muted rounded w-3/4 mb-1"></div>
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : conversations.length === 0 ? (
                <div className="text-center py-8 px-4">
                  <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No conversations yet</p>
                  <p className="text-sm text-muted-foreground">Apply to jobs to start messaging!</p>
                </div>
              ) : (
                <div className="max-h-[500px] overflow-y-auto">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedConversation === conversation.id ? 'bg-muted' : ''
                      }`}
                      onClick={() => {
                        setSelectedConversation(conversation.id);
                        fetchMessages(conversation.id);
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {getOtherParticipantName(conversation).charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">
                            {getOtherParticipantName(conversation)}
                          </p>
                          {conversation.jobs?.title && (
                            <Badge variant="secondary" className="text-xs mt-1">
                              {conversation.jobs.title}
                            </Badge>
                          )}
                          <p className="text-xs text-muted-foreground">
                            {new Date(conversation.updated_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Messages Area */}
          <Card className="lg:col-span-2">
            {selectedConversation ? (
              <>
                <CardContent className="flex-1 p-0">
                  <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender_id === user.id ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.sender_id === user.id
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender_id === user.id
                                ? 'text-primary-foreground/70'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {new Date(message.created_at).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </CardContent>
                
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Select a conversation to start messaging</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;