import type { IconProps, AnimationState } from "../../CopyButton.types";

import "./ErrorIcon.styles.css"

const getErrorIconClass = (element: "line" | "dot" | "circle", animationState: AnimationState) => {
  const classNames = {
    "check": "display-none",
    "check-entering": "display-none",
    "check-leaving": "display-none",

    "copy": "display-none",
    "copy-entering": "display-none",
    "copy-leaving": "display-none",
    "copy-leaving:success": "display-none",
    "copy-leaving:error": "display-none",



    "error-entering": element === "dot" ? 
      `copy-button__error-icon-${element} visible` : 
      `copy-button__error-icon-${element} error-entering`,

    "error": `copy-button__error-icon-${element} visible`,

    "error-leaving" : element === "dot" ? 
      "display-none" : 
      `copy-button__error-icon-${element} error-leaving`
  };
  return classNames[animationState]
}

export default function ErrorIcon({ animationState, handleAnimation, }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        className={getErrorIconClass("line", animationState)}
        onAnimationEnd={handleAnimation}
        d="M12 8V13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <line
        className={getErrorIconClass("dot", animationState)}
        onAnimationEnd={handleAnimation}
        x1={12}
        y1={16}
        x2={12}
        y2={16}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        className={getErrorIconClass("circle", animationState)}
        onAnimationEnd={handleAnimation}
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}