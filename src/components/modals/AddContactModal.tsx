
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

interface AddContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (contact: any) => void;
}

const AddContactModal = ({ isOpen, onClose, onSave }: AddContactModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    preferredMethod: "email"
  });

  const handleSave = () => {
    onSave(formData);
    setFormData({
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      preferredMethod: "email"
    });
    onClose();
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="sm:max-w-[600px]">
        <ModalHeader>
          <ModalTitle>Add Contact</ModalTitle>
          <ModalDescription>
            Add a key contact person for your organization.
          </ModalDescription>
        </ModalHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Smith"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              id="jobTitle"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              placeholder="e.g. HR Director"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john.smith@company.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div className="space-y-3">
            <Label>Preferred Contact Method</Label>
            <RadioGroup 
              value={formData.preferredMethod}
              onValueChange={(value) => setFormData({ ...formData, preferredMethod: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-method" />
                <Label htmlFor="email-method">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-method" />
                <Label htmlFor="phone-method">Phone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="platform" id="platform-method" />
                <Label htmlFor="platform-method">In-platform Message</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        <ModalFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Contact
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddContactModal;
