import { Title } from './Title';
import Selections from './Selections';
import { PreviousButton } from './PreviousButton';
import { NextButton } from './NextButton';
import { useState } from 'react';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);
  console.log(index);
  const handlePrevButton = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNextButton = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleSelection = (selectedItem: string) => {
    const selectedIndex = items.indexOf(selectedItem);
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Title item={items[index]} />
      <PreviousButton onPrev={handlePrevButton} />
      <Selections onSelection={handleSelection} items={items} />
      <NextButton onNext={handleNextButton} />
    </div>
  );
}
