export default function CustomButton({ text, style, className }) {
  return (
    <div>
      <button style={style} className={className}>
        {text}
      </button>
    </div>
  );
}
