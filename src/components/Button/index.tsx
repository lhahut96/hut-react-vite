export enum TypeProps {
  PRIMARY = 'primary',
  TEXT = 'text',
}

type Props = {
  type: TypeProps;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { type, onClick } = props;

  const colorObject = {
    primary:
      'bg-dark-brand hover:bg-white-brand text-white-brand hover:text-dark-brand border-dark-brand border-[3px]',
    text: 'bg-transparent text-dark-brand hover:text-blue-500',
  };

  const buttonClassName = `rounded-lg p-3 transition ease-in-out ${colorObject[type]}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
