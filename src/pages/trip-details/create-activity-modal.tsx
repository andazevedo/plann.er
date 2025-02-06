import { Calendar, Tag } from "lucide-react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { Input } from "../../components/input";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const occursAt = data.get("occurs-at")?.toString();

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at: occursAt,
    });

    closeCreateActivityModal();
    // Reload the activities list to reflect the new activity
    window.document.location.reload();
  }

  return (
    <Modal
      title="Register Activity"
      subtitle={
        <p className="text-sm text-zinc-400">
          All guests can view the activities.
        </p>
      }
      closeModal={closeCreateActivityModal}
    >
      <form onSubmit={createActivity} action="" className="space-y-3">
        <Input type="text" name="title" placeholder="What is the activity?">
          <Tag className="size-5 text-zinc-400" />
        </Input>

        <div className="flex items-center gap-2">
          <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs-at"
              placeholder="DATE AND TIME OF ACTIVITY"
              className="bg-transparent text-lg placeholder:text-zinc-400  outline-none flex-1 [color-scheme:dark]"
            />
          </div>
        </div>
        <Button variant="primary" type="submit" size="full">
          Save activity
        </Button>
      </form>
    </Modal>
  );
}
