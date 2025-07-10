
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

interface AddLicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (license: any) => void;
}

const AddLicenseModal = ({ isOpen, onClose, onSave }: AddLicenseModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    issuingBody: "",
    licenseNumber: "",
    expiryDate: ""
  });

  const handleSave = () => {
    onSave(formData);
    setFormData({ name: "", issuingBody: "", licenseNumber: "", expiryDate: "" });
    onClose();
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="sm:max-w-[600px]">
        <ModalHeader>
          <ModalTitle>Add License</ModalTitle>
          <ModalDescription>
            Add your professional licenses and registrations.
          </ModalDescription>
        </ModalHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="licenseName">License Name</Label>
            <Input
              id="licenseName"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Licensed Professional Counselor"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="licensingBody">Issuing Body</Label>
            <Input
              id="licensingBody"
              value={formData.issuingBody}
              onChange={(e) => setFormData({ ...formData, issuingBody: e.target.value })}
              placeholder="e.g. State Board of Professional Counselors"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="licenseNumber">License Number</Label>
            <Input
              id="licenseNumber"
              value={formData.licenseNumber}
              onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
              placeholder="e.g. LPC-12345"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
            />
          </div>
        </div>
        
        <ModalFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save License
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddLicenseModal;
