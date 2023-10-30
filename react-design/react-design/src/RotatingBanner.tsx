import { Title } from "./Title"
import Selections from "./Selections"
import { PreviousButton } from "./PreviousButton"
import { NextButton } from "./NextButton"

export default function RotatingBanner ({items}) {
return (
  <div>
    <Title />
    <PreviousButton />
    <Selections />
    <NextButton />
  </div>
);
}
