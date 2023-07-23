import React from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
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

  const setSelectedDateHandler = (selectedDate: Date) => {
    dispatch(setSelectedDate(selectedDate));
  };

  if (date) {
    setSelectedDateHandler(date);
  }

  const selectedDate = useAppSelector((state) => {
    return state.sports.selectedDate;
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !selectedDate && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {/* Use ternary operator to conditionally set the selected and onSelect props */}
        {selectedDate !== null ? (
          <Calendar
            mode="single"
            defaultMonth={firstSelectableDate}
            fromDate={firstSelectableDate}
            toDate={lastSelectableDate}
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        ) : (
          <Calendar
            mode="single"
            defaultMonth={firstSelectableDate}
            fromDate={firstSelectableDate}
            toDate={lastSelectableDate}
            initialFocus
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
