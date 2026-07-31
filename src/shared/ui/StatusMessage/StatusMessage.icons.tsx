export const statusIcons = {
  warning: (
    <svg
      width="clamp(28px, 5.2vw, 38px)"
      height="clamp(28px, 5.2vw, 38px)"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" />
      <path d="M12 9V13" />
      <path d="M12 17.02V17" />
    </svg>
  ),

  error: (
  <svg
    width="clamp(28px, 5vw, 38px)"
    height="clamp(28px, 5vw, 38px)"
    viewBox="0 0 321 321"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M160.5 0C72 0 0 72 0 160.5S72 321 160.5 321 321 249 321 160.5 249 0 160.5 0Zm0 291C88.542 291 30 232.458 30 160.5S88.542 30 160.5 30 291 88.542 291 160.5 232.458 291 160.5 291Z" />
    <path d="M82.504 140.5h155.992v40H82.504z" />
  </svg>
  ),
};