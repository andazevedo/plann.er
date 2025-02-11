import { Hash, Link } from "lucide-react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { Input } from "../../components/input";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
interface linkProps {
  closeCreateLinkModal: () => void;
}

export function CreateLinkModal({ closeCreateLinkModal }: linkProps) {
  const { tripId } = useParams();

  async function createLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const url = data.get("url")?.toString();

    await api.post(`/trips/${tripId}/links`, {
      title,
      url,
    });

    closeCreateLinkModal();
    // Reload the activities list to reflect the new activity
    window.document.location.reload();
  }

  return (
    <Modal
      title="Register New Link"
      subtitle={
        <p className="text-sm text-zinc-400">
          Add important links to your trip.
        </p>
      }
      closeModal={closeCreateLinkModal}
    >
      <form onSubmit={createLink} action="" className="space-y-3">
        <Input type="text" name="title" placeholder="ex: Airbnb house">
          <Hash className="size-5 text-zinc-400" />
        </Input>

        <div className="flex items-center gap-2">
          <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Link className="size-5 text-zinc-400" />
            <input
              type="text"
              name="url"
              placeholder="ex: www.airbnb.com"
              className="bg-transparent text-lg placeholder:text-zinc-400  outline-none flex-1"
            />
          </div>
        </div>
        <Button variant="primary" type="submit" size="full">
          Register Link
        </Button>
      </form>
    </Modal>
  );
}
