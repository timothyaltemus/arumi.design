import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Control, ValidatorFn } from '../../../models/control';

export type TextAreaProps = {
  cols: number;
  name: string;
  placeholder: string;
  rows: number;
  setValue: Dispatch<SetStateAction<{ value: string; valid: boolean }>>;
  validators: ValidatorFn<string>[];
  value: string;
};

const TextArea = ({
  cols,
  name,
  placeholder,
  rows,
  setValue,
  validators,
  value,
}: TextAreaProps) => {
  const [control, setControl] = useState(new Control(name, value, validators));
  const [dirty, setDirty] = useState(false);
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    control.onChange(event.target.value);
    setControl(control);
    setValue({ value: event.target.value, valid: control.valid! });
  };

  const onFocus = () => {
    if (!dirty) {
      setDirty(true);
    }
  };

  return (
    <div className="form-group">
      <textarea
        cols={cols}
        rows={rows}
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

export default TextArea;
