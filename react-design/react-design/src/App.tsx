import './App.css';
import RotatingBanner from './RotatingBanner';
export type Items = string[];

const items: Items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return <RotatingBanner items={items} />;
}

export default App;
