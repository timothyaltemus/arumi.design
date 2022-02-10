export class Control<T> {
  private _errors: string[] = [];
  private _name: string;
  private _isValid?: boolean;
  private _value: T;
  private _validators: ValidatorFn<T>[];
  constructor(name: string, value: T, validators: ValidatorFn<T>[] = []) {
    this._name = name;
    this._value = value;
    this._validators = validators;
    this.validate();
  }

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
  }

  get valid() {
    return this._isValid;
  }

  get invalid() {
    return !this._isValid;
  }

  get errors() {
    return this._errors;
  }

  onChange(value: T) {
    this._value = value;
    this.validate();
  }

  private validate() {
    this._errors = [];
    this._isValid = true;
    for (const validator of this._validators) {
      const error = validator(this);
      if (error) {
        this._isValid = false;
        this._errors.push(error.error);
      }
    }
  }
}

export type ValidatorFnResult = {
  error: string;
};

export type ValidatorFn<T> = (control: Control<T>) => ValidatorFnResult | null;
