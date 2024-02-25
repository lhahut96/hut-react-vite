import { ButtonTypeProps } from './ButtonConstant.ts';
import youtubeSvg from '@/assets/images/icons/Youtube.svg';
import instagramSvg from '@/assets/images/icons/Instagram.svg';
import viteSvg from '@/assets/images/icons/vite.svg';

type Props = {
  type: ButtonTypeProps;
  link?: string;
  icon?: string;
  newTab?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { type, link, icon, newTab, onClick } = props;

  const svgSourceObject: { [key: string]: string } = {
    youtube: youtubeSvg,
    instagram: instagramSvg,
    vite: viteSvg,
  };

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
      {icon ? (
        <img className="fill-blue-port " src={svgSourceObject[icon]}></img>
      ) : (
        'Button with link'
      )}
    </a>
  ) : (
    <button className={buttonClassName} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
