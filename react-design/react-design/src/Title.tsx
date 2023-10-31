type Props = {
  item: string;
};

export function Title({ item }: Props) {
  return (
    <div>
      <p>{item}</p>
    </div>
  );
}
