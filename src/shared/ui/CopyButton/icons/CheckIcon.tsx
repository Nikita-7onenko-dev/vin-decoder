import type { AnimationState } from "../CopyButton"

type Props = {
  animationState: AnimationState
  handleAnimation: () => void
}

const classNames = {
  "check": "check check-visible",
  "check-entering": "check check-entering",
  "check-leaving": "check check-leaving",
  "copy": "display-none",
  "copy-entering": "display-none",
  "copy-leaving": "display-none",
  "error-entering" : "display-none"
}

export default function CheckIcon({ animationState, handleAnimation }: Props) {

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        className={classNames[animationState]}
        onAnimationEnd={handleAnimation}
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}