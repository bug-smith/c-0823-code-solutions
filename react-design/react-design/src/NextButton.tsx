type Props = {
  onNext: () => void;
};
export function NextButton({ onNext }: Props) {
  return <button onClick={onNext}>Next</button>;
}
