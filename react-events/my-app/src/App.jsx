import './App.css';
import CustomButton from './Components/CustomButton';

function App() {
  const handleCustomClick = (color, text) => {
    window.alert(`Clicked ${color} ${text}`);
  };
  return (
    <>
      <CustomButton
        color="red"
        style="background-blue"
        text="Fancy"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="green"
        text="Leaf"
        onCustomClick={handleCustomClick}
      />
      <CustomButton color="blue" text="Ice" onCustomClick={handleCustomClick} />
    </>
  );
}

export default App;
