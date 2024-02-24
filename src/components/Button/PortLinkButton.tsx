import { ButtonTypeProps } from './ButtonConstant.ts';

type Props = {
  type: ButtonTypeProps;
  link?: string;
  newTab?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { type, link, newTab, onClick } = props;

  const colorObject = {
    primary:
      'bg-transparent hover:bg-blue-port text-blue-port hover:text-white border-blue-port border-[2px] w-full',
    text: 'bg-transparent text-blue-port hover:text-blue-500',
  };

  const buttonClassName = `rounded-lg p-4 leading-normal font-medium transition ease-in-out ${colorObject[type]} `;

  return link ? (
    <a
      className={`${buttonClassName} inline-block text-center`}
      href={link}
      target={newTab ? '_blank' : ''}
    >
      Button with link
    </a>
  ) : (
    <button className={buttonClassName} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
