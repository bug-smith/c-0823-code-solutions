import { Title } from "./Title"
import Selections from "./Selections"
import { PreviousButton } from "./PreviousButton"
import { NextButton } from "./NextButton"
import React from 'react';


export default function RotatingBanner ({items}) {
return (
  <div>
    <Title item={items[0]}/>
    <PreviousButton />
    <Selections />
    <NextButton />
  </div>
);
}
