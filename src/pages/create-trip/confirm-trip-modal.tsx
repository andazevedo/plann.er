import { User, Mail } from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { Input } from "../../components/input";

interface confirmTripModalProps {
  closeConfirmTripModal: () => void;
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (ownerName: string) => void;
  setOwnerEmail: (ownerEmail: string) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: confirmTripModalProps) {
  return (
    <Modal
      title="Confirm Trip Creation"
      subtitle={
        <p className="text-sm text-zinc-400">
          To conclude the creation of the trip to{" "}
          <span className="font-semibold text-zinc-100">Florianópolis</span>,
          Brazil on August{" "}
          <span className="font-semibold text-zinc-100">16-27, 2024</span> Fill
          in the fields below.
        </p>
      }
      closeModal={closeConfirmTripModal}
    >
      <form onSubmit={createTrip} action="" className="space-y-2">
        <Input
          name="name"
          type="text"
          placeholder="Your full name"
          onChange={(event) => setOwnerName(event.target.value)}
        >
          <User className="size-5 text-zinc-400" />
        </Input>

        <Input
          name="email"
          type="email"
          placeholder="Your personal email"
          onChange={(event) => setOwnerEmail(event.target.value)}
        >
          <Mail className="size-5 text-zinc-400" />
        </Input>

        <Button type="submit" variant="primary" size="full">
          Confirm Travel Creation
        </Button>
      </form>
    </Modal>
  );
}
