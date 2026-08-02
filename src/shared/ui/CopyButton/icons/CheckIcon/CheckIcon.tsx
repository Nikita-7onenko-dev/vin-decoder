import type { IconProps } from "../../CopyButton.types"

import "./CheckIcon.styles.css"

const classNames = {
  "check": "copy-button__check-icon copy-button__check-icon--visible",
  "check-entering": "copy-button__check-icon copy-button__check-icon--entering",
  "check-leaving": "copy-button__check-icon copy-button__check-icon--leaving",
  "copy": "display-none",
  "copy-entering": "display-none",
  "copy-leaving:success": "display-none",
  "copy-leaving:error": "display-none",
  "error-entering" : "display-none",
  "error": "display-none",
  "error-leaving" : "display-none"
}

export default function CheckIcon({ animationState, handleAnimation }: IconProps) {

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