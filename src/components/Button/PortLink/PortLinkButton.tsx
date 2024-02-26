import { ButtonTypeProps } from '../ButtonConstant.ts';
import YoutubeSvg from '@/assets/images/icons/youtube.svg?react';
import InstagramSvg from '@/assets/images/icons/instagram.svg?react';
import ViteSvg from '@/assets/images/icons/vite.svg?react';
import { ReactNode } from 'react';
import './styles.scss';

type Props = {
  type: ButtonTypeProps;
  link?: string;
  icon?: string;
  text?: string;
  newTab?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { type, link, icon, text, newTab, onClick } = props;

  const colorObject = {
    primary:
      'bg-transparent hover:bg-blue-port text-blue-port hover:text-white border-blue-port border-[2px] w-full',
    text: 'bg-transparent text-blue-port hover:text-blue-500',
  };

  const svgClassName = 'fill-blue-port size-8';

  const svgSourceObject: {
    [key: string]: ReactNode;
  } = {
    youtube: <YoutubeSvg className={svgClassName} />,
    instagram: <InstagramSvg className={svgClassName} />,
    vite: <ViteSvg className={svgClassName} />,
  };

  const buttonClassName = `rounded-lg p-4 leading-normal font-medium transition ease-in-out ${colorObject[type]} `;

  if (icon) {
    return (
      <a
        className="inline-block hover:scale-105"
        href={link}
        target={newTab ? '_blank' : ''}
      >
        {svgSourceObject[icon]}
      </a>
    );
  }

  return link ? (
    <a
      className={`${buttonClassName} inline-block text-center`}
      href={link}
      target={newTab ? '_blank' : ''}
    >
      {text ? text : 'Button'}
    </a>
  ) : (
    <button className={buttonClassName} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
