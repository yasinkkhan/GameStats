import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks';
import { setSelectedDate } from '@/store/slices/sportsSlice';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DatePickerProps {
  firstSelectableDate: Date;
  lastSelectableDate: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ firstSelectableDate, lastSelectableDate }): JSX.Element => {
  const [date, setDate] = React.useState<Date>();

  const dispatch = useAppDispatch();

  // TO DO
  // You're getting some error here to do with typing
  useEffect(() => {
    if (date) {
      dispatch(setSelectedDate(date.toISOString()));
    }
  }, [date]);

  // TO DO
  // The calendar does not close after a date has been selected
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          defaultMonth={firstSelectableDate}
          fromDate={firstSelectableDate}
          toDate={lastSelectableDate}
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
