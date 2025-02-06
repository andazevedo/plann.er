import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsProps {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  openGuestsModal,
  openConfirmTripModal,
  emailsToInvite,
}: InviteGuestsProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center flex-1 gap-2 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg">
            {emailsToInvite.length} guest person (s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg">
            Who will be on the trip?
          </span>
        )}
      </button>

      <Button variant="primary" onClick={openConfirmTripModal}>
        Confirm trip
        <ArrowRight className="size-5 text-zinc-950 " />
      </Button>
    </div>
  );
}
