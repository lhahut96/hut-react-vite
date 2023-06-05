import { useState } from 'react';

export enum InputType {
  DEFAULT = 'default',
  ERROR = 'error',
  VALIDATE = 'validate',
  DISABLED = 'disabled',
  PASSWORD = 'password',
}

export type Props = {
  type: InputType;
  placeholder?: string;
  errorMessage?: string;
};

const Input = (props: Props) => {
  const { type, placeholder, errorMessage } = props;

  const [showPassword, setShowPassword] = useState(false);

  const inputObject = {
    [InputType.DEFAULT]: 'border-dark-brand',
    [InputType.ERROR]: 'border-error text-error placeholder:text-error',
    [InputType.VALIDATE]: 'border-validate text-validate placeholder:text-validate',
    [InputType.DISABLED]: 'border-gray-500 opacity-50',
    [InputType.PASSWORD]: 'border-dark-brand',
  };
  return (
    <div className="flex flex-col">
      <div className="relative w-max">
        <input
          className={`rounded-lg border-[3px] border-dark-brand p-3 ${inputObject[type]}`}
          type={type === InputType.PASSWORD && !showPassword ? 'password' : 'text'}
          placeholder={placeholder || 'Place holder text'}
        />
        {type === InputType.PASSWORD ? (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-1 top-1/2 -translate-y-1/2"
          >
            show
          </span>
        ) : (
          ''
        )}
      </div>
      {type === InputType.ERROR ? (
        <span className="mt-1 pl-[15px] text-error">
          {errorMessage || 'This is a Errror'}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
