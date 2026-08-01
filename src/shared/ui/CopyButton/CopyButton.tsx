import { useEffect, useState } from 'react'
import CopyIcon from './icons/CopyIcon';
import CheckIcon from './icons/CheckIcon';

import './CopyButton.styles.css'
import ErrorIcon from './icons/ErrorIcon';

export type AnimationState =
  | "copy"
  | "copy-leaving"
  | "check-entering"
  | "check"
  | "check-leaving"
  | "copy-entering"
  | "error-entering";

const transitions: Partial<Record<AnimationState, AnimationState>> = {
  "copy-leaving": "check-entering",
  "check-entering": "check",
  "check-leaving": "copy-entering",
  "copy-entering": "copy",
}

export default function CopyButton() {

  const [animationState, setAnimationState] = useState<AnimationState>("copy-entering");

  const handleCopy = async () => {
    try{
      setAnimationState("copy-leaving");
      await window.navigator.clipboard.writeText(window.location.href);
      
    } catch(err) {
      console.log(err)
      setAnimationState("error-entering")
    }

  };

  useEffect(() => {
    if(animationState !== "check") return;

    const id = setTimeout(() => {
      setAnimationState("check-leaving")
    }, 3000)

    return () => clearTimeout(id)
  }, [animationState])

  const handleAnimation = () => {
    setAnimationState(prev => transitions[animationState] || prev)
  }

  return (
    <button 
      type='button'
      className={
        animationState === "check-entering" ||
        animationState === "check" ? 
          "copy-icon__button copy-icon__button--clicked" : 
          "copy-icon__button"
      } 
      onClick={handleCopy}
    >
      <CopyIcon animationState={animationState} handleAnimation={handleAnimation} />
      <CheckIcon animationState={animationState} handleAnimation={handleAnimation} />
      <ErrorIcon animationState={animationState} handleAnimation={handleAnimation} />
    </button>
  )
}