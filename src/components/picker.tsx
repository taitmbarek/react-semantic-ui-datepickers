import React from 'react';
import { RangeDatePicker, BasicDatePicker } from '../pickers';
import { PickerProps } from '../types';
import Calendar from './calendar';

function Picker({
  date,
  dayzedProps,
  filterDate,
  isRangeInput,
  onChange,
  pointing,
  selected,
  ...rest
}: PickerProps) {
  const Component: React.ElementType = isRangeInput
    ? RangeDatePicker
    : BasicDatePicker;

  return (
    <Component
      {...dayzedProps}
      monthsToDisplay={isRangeInput ? 2 : 1}
      onChange={onChange}
      selected={selected}
      date={date}
    >
      {props => <Calendar {...dayzedProps} {...props} {...rest} />}
    </Component>
  );
}

export default Picker;
