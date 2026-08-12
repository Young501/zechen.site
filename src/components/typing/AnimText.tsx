"use client";

import RedoAnimText from "./RedoAnimText";
import CursorBlinker from "./CursorBlinker";

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  return (
    <span>
      <RedoAnimText delay={delay} />
      <CursorBlinker />
    </span>
  );
}
