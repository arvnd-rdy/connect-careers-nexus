
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

interface AddEducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (education: any) => void;
}

const AddEducationModal = ({ isOpen, onClose, onSave }: AddEducationModalProps) => {
  const [formData, setFormData] = useState({
    degree: "",
    institution: "",
    graduationYear: "",
    description: ""
  });

  const handleSave = () => {
    onSave(formData);
    setFormData({ degree: "", institution: "", graduationYear: "", description: "" });
    onClose();
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="sm:max-w-[600px]">
        <ModalHeader>
          <ModalTitle>Add Education</ModalTitle>
          <ModalDescription>
            Add your educational background and qualifications.
          </ModalDescription>
        </ModalHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="degree">Degree Title</Label>
            <Input
              id="degree"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              placeholder="e.g. Bachelor of Science in Psychology"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              placeholder="e.g. University of Toronto"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="graduationYear">Graduation Year</Label>
            <Input
              id="graduationYear"
              value={formData.graduationYear}
              onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
              placeholder="e.g. 2020"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description / Key Coursework (Optional)</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Relevant coursework, honors, achievements..."
              rows={3}
            />
          </div>
        </div>
        
        <ModalFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Education
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddEducationModal;
