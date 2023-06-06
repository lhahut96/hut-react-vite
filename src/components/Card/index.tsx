import tickLogo from '@/assets/images/tick.svg';

export enum CardType {
  PRIMARY = 'primary',
  TEXT = 'text',
}

export enum CardLabelColor {
  DARK = 'dark',
  WHITE = 'white',
}

export interface LabelCard {
  text?: string;
  color?: CardLabelColor;
}

export interface CheckList {
  all: number; // 0 - 100
  done: number; // 0 - 100
}

type Props = {
  type: CardType;
  label?: LabelCard;
  checkList?: CheckList;
  imageUrl?: string;
};

const Card = (props: Props) => {
  const { type, label, checkList, imageUrl } = props;

  const colorObject = {
    primary: 'bg-white-brand',
    text: 'bg-white-brand',
  };

  const labelColorObject = {
    dark: 'bg-dark-brand',
    white: 'bg-white-brand',
  };

  const checkListDiv = () =>
    checkList?.all ? (
      <div className="flex items-center text-xs text-gray-brand">
        <img src={tickLogo} className="mr-1 fill-gray-brand stroke-gray-brand" />
        <span>{`${checkList?.done}/${checkList?.all}`}</span>
      </div>
    ) : (
      ''
    );

  const labelColor = () =>
    label?.color ? (
      <div
        className={`mb-1 min-h-[8px] w-fit min-w-[24px] rounded-sm ${
          labelColorObject[label.color]
        }`}
      ></div>
    ) : (
      ''
    );

  const image = () => {
    const imageClass = 'h-[100px] rounded-t-lg w-full object-cover';

    return imageUrl ? (
      <img
        className={imageClass}
        src={imageUrl === 'test' ? 'https://picsum.photos/400' : imageUrl}
        alt="random"
      />
    ) : (
      ''
    );
  };
  return (
    <div className={`w-fit min-w-[224px] rounded-lg ${colorObject[type]}`}>
      {image()}
      <div className="p-[10px]">
        {labelColor()}
        <p className="text-sm">{'Test title'}</p>
        <p className="text-sm"></p>
        {checkListDiv()}
      </div>
    </div>
  );
};

export default Card;
