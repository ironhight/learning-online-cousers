import { errorMessage } from './messages.util';

export enum RuleEnums {
  Required,
  Email,
  Password,
  Other,
}

type InputHandlers = {
  message: string;
  min: number;
  max: number;
};

export const ruleFactory = (type: RuleEnums) => {
  const rules: any = { message: '' };
  return function (opts: { message: string; min?: number; max?: number }) {
    switch (type) {
      case RuleEnums.Required:
        rules['required'] = true;
        rules['message'] = opts.message;
        return rules;
      case RuleEnums.Email:
        rules['type'] = 'email';
        rules['message'] = opts.message;
        return rules;
      case RuleEnums.Password:
        rules['pattern'] = '^(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$';
        rules['message'] = opts.message;
        return rules;

      case RuleEnums.Other:
        rules['message'] = opts.message;
        return rules;
      default:
        return rules;
    }
  };
};

const rules = {
  email: [
    ruleFactory(RuleEnums.Email)({ message: errorMessage.email }),
    ruleFactory(RuleEnums.Required)({ message: errorMessage.required }),
  ],
  password: [
    ruleFactory(RuleEnums.Required)({ message: errorMessage.required }),
  ],
  /* handlers */
  input: ({ message, min, max }: InputHandlers) => {
    return [
      ruleFactory(RuleEnums.Required)({ message: errorMessage.required }),
    ];
  },
  number: ({ message, min, max }: InputHandlers) => {
    return [
      () => ({
        validator(value: any) {
          const regex = new RegExp(/\D+/g);
          if (value) {
            if (!regex.test(value)) {
              //don't have a number
              return Promise.resolve();
            }
            return Promise.reject(errorMessage.number);
          }
          return Promise.reject();
        },
      }),
      ...rules.input({ message, min, max }),
    ];
  },
};

export default rules;
