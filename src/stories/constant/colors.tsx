export enum ColorsVariant {
  Dark = 'dark',
  Gray = 'gray',
  Gray_300 = 'gray-300',
  White = 'white',
}

type Props = { label: ColorsVariant };

export const Colors = ({ label }: Props) => {
  const colorVariants = {
    dark: 'bg-dark-brand',
    gray: 'bg-gray-brand',
    'gray-300': 'bg-gray-brand-300',
    white: 'bg-white-brand',
  };
  return <div className={`${colorVariants[label]} w-full p-12`}></div>;
};
