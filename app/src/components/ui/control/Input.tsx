import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Control, ValidatorFn } from '../../../models/control';

export type InputProps = {
  name: string;
  placeholder: string;
  setValue: Dispatch<SetStateAction<{ value: string; valid: boolean }>>;
  type: 'email' | 'number' | 'password' | 'text' | 'url' | 'textarea';
  validators: ValidatorFn<string>[];
  value: string;
};

const Input = ({
  name,
  placeholder,
  setValue,
  type,
  validators,
  value,
}: InputProps) => {
  const [control, setControl] = useState(new Control(name, value, validators));
  const [dirty, setDirty] = useState(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    control.onChange(event.target.value);
    setControl(control);
    setValue({ value: event.target.value, valid: control.valid! });
  };

  const onFocus = () => {
    if (!dirty) {
      setDirty(true);
    }
  };

  console.log(dirty, control.valid, control.invalid);
  return (
    <div className="form-group">
      <input
        type={type}
        name={control.name}
        className={`form-control ${
          !dirty || control.valid ? '' : 'is-invalid'
        }`}
        placeholder={placeholder}
        value={control.value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {dirty && control.invalid ? (
        <div className={'invalid-feedback'}>{control.errors[0]}</div>
      ) : null}
    </div>
  );
};

export default Input;
