export default function Buttons() {
  return (
    <div className="flex center">
      <CustomButton text="I" className="red" />
      <CustomButton text="Know" className="blue" />
      <CustomButton text="React" className="green" />
    </div>
  );
}

function CustomButton({ text, className }) {
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  );
}
