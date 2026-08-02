export type AnimationState =
  | "copy-entering"
  | "copy"
  | "copy-leaving:success"
  | "copy-leaving:error"
  | "check-entering"
  | "check"
  | "check-leaving"
  | "error-entering"
  | "error"
  | "error-leaving";

export type IconProps = {
  animationState: AnimationState;
  handleAnimation: () => void;
};