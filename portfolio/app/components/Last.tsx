"use client";
import React from "react";
import { TextRevealCardTitle, TextRevealCard,TextRevealCardDescription } from "./ui/Brbd";
export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-black-100 h-[40rem] rounded-2xl w-full " id="testimonials">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Let me built an amazing website for you
        </TextRevealCardTitle>
        {/* <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}
