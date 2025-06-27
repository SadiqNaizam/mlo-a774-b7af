"use client"

import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  onDateChange?: (range: DateRange | undefined) => void;
  initialDate?: DateRange;
}

export default function DateRangePicker({
  className,
  onDateChange,
  initialDate,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(initialDate)
  const [isOpen, setIsOpen] = React.useState(false)

  console.log("DateRangePicker loaded");

  React.useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date, onDateChange]);

  const setPresetDate = (preset: 'today' | '7days' | '30days' | 'this_month' | 'last_month') => {
    const now = new Date();
    let fromDate: Date;
    let toDate: Date = now;

    switch (preset) {
      case 'today':
        fromDate = new Date();
        toDate = new Date();
        break;
      case '7days':
        fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        break;
      case '30days':
        fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30);
        break;
      case 'this_month':
        fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
        toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        break;
      case 'last_month':
        fromDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        toDate = new Date(now.getFullYear(), now.getMonth(), 0);
        break;
    }
    setDate({ from: fromDate, to: toDate });
    setIsOpen(false);
  }
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {formatDate(date.from)} - {formatDate(date.to)}
                </>
              ) : (
                formatDate(date.from)
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex" align="start">
          <div className="flex flex-col space-y-1 p-2 border-r">
              <Button onClick={() => setPresetDate('today')} variant="ghost" className="justify-start">Today</Button>
              <Button onClick={() => setPresetDate('7days')} variant="ghost" className="justify-start">Last 7 Days</Button>
              <Button onClick={() => setPresetDate('30days')} variant="ghost" className="justify-start">Last 30 Days</Button>
              <Button onClick={() => setPresetDate('this_month')} variant="ghost" className="justify-start">This Month</Button>
              <Button onClick={() => setPresetDate('last_month')} variant="ghost" className="justify-start">Last Month</Button>
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(newDate) => {
                setDate(newDate);
                if (newDate?.from && newDate?.to) {
                    setIsOpen(false);
                }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}