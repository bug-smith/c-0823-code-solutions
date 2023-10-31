type Props = {
  onPrev: () => void;
};
export function PreviousButton({ onPrev }: Props) {
  return <button onClick={onPrev}>Prev</button>;
}
