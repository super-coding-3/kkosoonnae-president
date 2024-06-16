"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "lib/utils";
import { Button } from "../shard_ui/button";
import { Calendar } from "../shard_ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../shard_ui/popover";
interface DatePickerProps {
  placeholder: string;
}

export function DatePicker({ placeholder }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-96 h-10 rounded-md justify-start text-left font-normal border-COMMONN_BORDER_GRAY",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
