import type { IconProps } from "../../CopyButton.types"
import "./CopyIcon.styles.css"

const classNames = {
  "check": "display-none",
  "check-entering": "display-none",
  "check-leaving": "display-none",
  "copy": "copy-button__copy-icon",
  "copy-entering": "copy-button__copy-icon copy-button__copy-icon--entering",
  "copy-leaving:success": "copy-button__copy-icon copy-button__copy-icon--leaving",
  "copy-leaving:error": "copy-button__copy-icon copy-button__copy-icon--leaving",
  "error-entering" : "display-none",
  "error": "display-none",
  "error-leaving" : "display-none"
}

export default function CopyIcon({ animationState, handleAnimation }: IconProps) {

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ transform: "scaleX(-1)" }}
    >
      <path
        className={classNames[animationState]}
        onAnimationEnd={handleAnimation}
        d="M9 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V9M11 21H19C20.1046 21 21 20.1046 21 19V11C21 9.89543 20.1046 9 19 9H11C9.89543 9 9 9.89543 9 11V19C9 20.1046 9 21 11 21Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}