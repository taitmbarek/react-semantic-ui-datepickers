import React from 'react';
import { Form, FormInputProps } from 'semantic-ui-react';

type InputProps = FormInputProps & {
  isClearIconVisible: boolean;
};

const CustomInput = ({
  icon,
  isClearIconVisible,
  onClear,
  onClick,
  value,
  ...rest
}: InputProps) => (
  <Form.Input
    data-testid="datepicker-input"
    {...rest}
    onClick={onClick}
    value={value}
  />
);

CustomInput.defaultProps = {
  icon: null,
};

export default CustomInput;
