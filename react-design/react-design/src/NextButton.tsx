type Props = {
  onNext: () => void;
  text: string;
};
export function NextButton({ onNext, text }: Props) {
  return <button onClick={onNext}>{text}</button>;
}
