import React, { lazy, useMemo, Suspense } from 'react';
import { PickerProps } from '../types';
import Calendar from './calendar';

function Picker({
  date,
  dayzedProps,
  filterDate,
  onChange,
  pointing,
  selected,
  type,
  ...rest
}: PickerProps) {
  const Component = useMemo(() => lazy(() => import(`../pickers/${type}`)), [
    type,
  ]);

  return (
    <Suspense fallback={null}>
      <Component
        {...dayzedProps}
        monthsToDisplay={type === 'range' ? 2 : 1}
        onChange={onChange}
        selected={selected}
        date={date}
      >
        {props => <Calendar {...dayzedProps} {...props} {...rest} />}
      </Component>
    </Suspense>
  );
}

export default Picker;
