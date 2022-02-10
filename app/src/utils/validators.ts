import { ValidatorFn } from './../models/control';

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
export const emailValidator: ValidatorFn<string> = (control) => {
  if (emailPattern.test(control.value)) return null;

  return {
    error: 'Enter a valid email address',
  };
};

export const requiredValidator =
  (errorMessage: string = 'Enter a value.'): ValidatorFn<any> =>
  (control) => {
    if (control.value) return null;

    return {
      error: errorMessage,
    };
  };

export const defaultRequiredValidator = requiredValidator();
