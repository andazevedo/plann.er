import { X, AtSign, Plus } from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailToInvite: (email: string) => void;
}

export function InviteGuestsModal({
  emailsToInvite,
  addEmailToInvite,
  removeEmailToInvite,
  ...props
}: InviteGuestsModalProps) {
  return (
    <Modal
      title="Select Guests"
      closeModal={props.closeGuestsModal}
      subtitle={
        <p className="text-sm text-zinc-400">
          The guests will receive emails to confirm participation on the trip.
        </p>
      }
    >
      <div className="flex flex-wrap gap-2">
        {emailsToInvite.map((email) => {
          return (
            <div
              key={email}
              className="px-1.5 py-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button type="button">
                <X
                  onClick={() => removeEmailToInvite(email)}
                  className="size-5 text-zinc-400"
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full h-px bg-zinc-800" />
      <form
        onSubmit={addEmailToInvite}
        action=""
        className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
      >
        <div className="px-2 flex items-center flex-1 gap-2">
          <AtSign className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="Enter the guest email"
            className="bg-transparent text-lg placeholder:text-zinc-400  outline-none flex-1"
          />
        </div>
        <Button variant="primary" type="submit">
          Invite
          <Plus className="size-5 text-zinc-950 " />
        </Button>
      </form>
    </Modal>
  );
}
