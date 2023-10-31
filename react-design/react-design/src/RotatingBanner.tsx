import { Title } from './Title';
import Selections from './Selections';
import { PreviousButton } from './PreviousButton';
import { Button } from './Button';
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
  console.log(items[index]);
  return (
    <div>
      <Title item={items[index]} />
      <Button onClick={handlePrevButton} text="Prev" />
      <Selections onSelection={handleSelection} items={items} current={index}/>
      <Button onClick={handleNextButton} text="Next" />
    </div>
  );
}
