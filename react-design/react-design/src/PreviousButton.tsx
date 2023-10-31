type Props = {
  onPrev: () => void;
  text: string;
};
export function PreviousButton({ onPrev, text }: Props) {
  return <button onClick={onPrev}>{text}</button>;
}
