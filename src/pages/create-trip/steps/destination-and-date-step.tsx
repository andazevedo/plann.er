import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { Modal } from "../../../components/modal";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/style.css";
interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void;
  eventStartAndDates: DateRange | undefined;
  setEventStartAndDates: (dates: DateRange | undefined) => void;
}
export function DestinationAndDateStep({
  closeGuestsInput,
  openGuestsInput,
  isGuestsInputOpen,
  setDestination,
  eventStartAndDates,
  setEventStartAndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const displayedDate =
    eventStartAndDates && eventStartAndDates.from && eventStartAndDates.to
      ? format(eventStartAndDates.from, " LLL',' d")
          .concat(" to ")
          .concat(format(eventStartAndDates.to, " LLL',' d"))
      : null;

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }
  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center flex-1 gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Where do you want to go?"
          className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>
      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 outline-none text-left w-[235px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className=" text-lg text-zinc-400 w-40 outline-none flex-1">
          {displayedDate || "When?"}
        </span>
      </button>
      {isDatePickerOpen && (
        <Modal title="Select the Date" closeModal={closeDatePicker} size="auto">
          <DayPicker
            mode="range"
            //showOutsideDays
            selected={eventStartAndDates}
            onSelect={setEventStartAndDates}
            classNames={{
              today: `text-lime-300`, // Add a border to today's date
              selected: `text-black`, // Highlight the selected day
              //root: `${defaultClassNames.root} shadow-lg p-2`, // Add a shadow to the root element
              chevron: `fill-lime-300`, // Change the color of the chevron
              day_button: `hover:text-lime-300`,
            }}
          />
        </Modal>
      )}

      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Change location/date
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continue
          <ArrowRight className="size-5 text-zinc-950 " />
        </Button>
      )}
    </div>
  );
}
