import type { AnimationState } from "../CopyButton";

type Props = {
  animationState: AnimationState;
  handleAnimation: () => void;
};

const lineClassNames: Record<AnimationState, string> = {
  check: "display-none",
  "check-entering": "display-none",
  "check-leaving": "display-none",

  copy: "display-none",
  "copy-entering": "display-none",
  "copy-leaving": "display-none",

  "error-entering": "error-icon-1 error-entering",
};

const dotClassNames: Record<AnimationState, string> = {
  check: "display-none",
  "check-entering": "display-none",
  "check-leaving": "display-none",

  copy: "display-none",
  "copy-entering": "display-none",
  "copy-leaving": "display-none",

  "error-entering": "error-icon-2 error-entering",
};

const circleClassNames: Record<AnimationState, string> = {
  check: "display-none",
  "check-entering": "display-none",
  "check-leaving": "display-none",

  copy: "display-none",
  "copy-entering": "display-none",
  "copy-leaving": "display-none",

  "error-entering": "error-icon-3 error-entering",
};

export default function ErrorIcon({
  animationState,
  handleAnimation,
}: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        className={lineClassNames[animationState]}
        onAnimationEnd={handleAnimation}
        d="M12 8V13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <line
        className={dotClassNames[animationState]}
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
        className={circleClassNames[animationState]}
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