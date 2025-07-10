
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

interface AddExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (experience: any) => void;
}

const AddExperienceModal = ({ isOpen, onClose, onSave }: AddExperienceModalProps) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    organization: "",
    startDate: "",
    endDate: "",
    isCurrent: false,
    responsibilities: ""
  });

  const handleSave = () => {
    onSave(formData);
    setFormData({
      jobTitle: "",
      organization: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      responsibilities: ""
    });
    onClose();
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="sm:max-w-[600px]">
        <ModalHeader>
          <ModalTitle>Add Work Experience</ModalTitle>
          <ModalDescription>
            Add your professional work experience and achievements.
          </ModalDescription>
        </ModalHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="jobTitle">Job Title / Role</Label>
            <Input
              id="jobTitle"
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              placeholder="e.g. Vocational Rehabilitation Counselor"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="organization">Organization Name</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. Rehabilitation Services Inc."
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="month"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="month"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                disabled={formData.isCurrent}
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="current"
                  checked={formData.isCurrent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, isCurrent: !!checked, endDate: checked ? "" : formData.endDate })
                  }
                />
                <Label htmlFor="current" className="text-sm">I currently work here</Label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="responsibilities">Key Responsibilities & Achievements</Label>
            <Textarea
              id="responsibilities"
              value={formData.responsibilities}
              onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              placeholder="• Conducted vocational assessments for individuals with disabilities&#10;• Developed personalized rehabilitation plans&#10;• Coordinated with healthcare providers and employers"
              rows={4}
            />
          </div>
        </div>
        
        <ModalFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Experience
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddExperienceModal;
