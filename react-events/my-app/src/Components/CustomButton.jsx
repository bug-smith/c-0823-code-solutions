import './ButtonStyles.css';

export default function CustomButton({ text, color, onCustomClick }) {
  const handleClick = () => {
    onCustomClick(text, color);
  };
  return (
    <button onClick={handleClick} className={color}>
      {text}
    </button>
  );
}
