import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balao de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        // Passa a funcao "setFeedbackType" do "useState" pela propriedade "onFeedbackTypeChanged" para o componente <FeedbackTypeStep />
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} />
      )}

      <footer className="text-xs text-neutral-400">
        Design by
        <a
          className="underline underline-offset-2"
          href="https://github.com/ppconrado/"
        >
          Jose Paulo
        </a>
      </footer>
    </div>
  );
}

// Object.entries(feedbackTypes) =>
/* [
  ['BUG', {...}],
  [],
  []
 ]

*/
