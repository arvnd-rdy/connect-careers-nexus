
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

interface AddCertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (certification: any) => void;
}

const AddCertificationModal = ({ isOpen, onClose, onSave }: AddCertificationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    issuingBody: "",
    yearObtained: "",
    credentialUrl: ""
  });

  const handleSave = () => {
    onSave(formData);
    setFormData({ name: "", issuingBody: "", yearObtained: "", credentialUrl: "" });
    onClose();
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="sm:max-w-[600px]">
        <ModalHeader>
          <ModalTitle>Add Certification</ModalTitle>
          <ModalDescription>
            Add your professional certifications and credentials.
          </ModalDescription>
        </ModalHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="certName">Certification Name</Label>
            <Input
              id="certName"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Certified Rehabilitation Counselor (CRC)"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="issuingBody">Issuing Body</Label>
            <Input
              id="issuingBody"
              value={formData.issuingBody}
              onChange={(e) => setFormData({ ...formData, issuingBody: e.target.value })}
              placeholder="e.g. Commission on Rehabilitation Counselor Certification"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="yearObtained">Year Obtained</Label>
            <Input
              id="yearObtained"
              value={formData.yearObtained}
              onChange={(e) => setFormData({ ...formData, yearObtained: e.target.value })}
              placeholder="e.g. 2022"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="credentialUrl">Credential URL (Optional)</Label>
            <Input
              id="credentialUrl"
              value={formData.credentialUrl}
              onChange={(e) => setFormData({ ...formData, credentialUrl: e.target.value })}
              placeholder="https://example.com/verify-credential"
            />
          </div>
        </div>
        
        <ModalFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Certification
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCertificationModal;
