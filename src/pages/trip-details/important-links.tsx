import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";
import { CreateLinkModal } from "./create-link-modal";

export function ImportantLinks() {
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  function openCreateLinkModal() {
    setIsCreateLinkModalOpen(true);
  }

  function closeCreateLinkModal() {
    setIsCreateLinkModalOpen(false);
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Important Link</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 ">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Airbnb Reserve
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://airbnb.com.br/rooms/10470001133488488448449494902302302303203030032
            </a>
          </div>
          <Link2 className="text-zinc-500 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4 ">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Airbnb Reserve
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://airbnb.com.br/rooms/10470001133488488448449494902302302303203030032
            </a>
          </div>
          <Link2 className="text-zinc-500 size-5" />
        </div>
      </div>
      <Button variant="secondary" onClick={openCreateLinkModal}>
        <Plus className="size-5" />
        Register new link
      </Button>
      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
      )}
    </div>
  );
}
