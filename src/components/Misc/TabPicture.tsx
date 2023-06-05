export enum TabPictureType {
  DEFAULT = 'default',
  ADD = 'add',
}

type Props = {
  type: TabPictureType;
  text: string;
  onClick: () => void;
};

const TabPicture = (props: Props) => {
  const { type, text, onClick } = props;

  const tabClassObject = {
    default: 'bg-gray-brand',
    add: 'bg-gray-brand-300',
  };

  return (
    <button
      className={` min-h-[36px] w-max min-w-[36px] rounded-lg p-[10px] text-base font-bold text-white-brand ${tabClassObject[type]}`}
      onClick={onClick}
    >
      {type === TabPictureType.ADD ? '+' : text}
    </button>
  );
};

export default TabPicture;
