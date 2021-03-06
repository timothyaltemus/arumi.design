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

const phoneNumberRegex = /^[+]*[(]?[0-9]*[)]?[-\s./0-9]*(ext[.]?)?\s?[0-9]*$/;
export const phoneNumberValidator: ValidatorFn<string> = (control) => {
  if (phoneNumberRegex.test(control.value)) return null;

  return {
    error: 'Enter a valid phone number.',
  };
};
