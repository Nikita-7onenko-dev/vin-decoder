import { useEffect, useState } from 'react'
import CopyIcon from './icons/CopyIcon/CopyIcon';
import CheckIcon from './icons/CheckIcon/CheckIcon';
import ErrorIcon from './icons/ErrorIcon/ErrorIcon';

import type { AnimationState } from './CopyButton.types';

import './CopyButton.styles.css'

const transitions: Partial<Record<AnimationState, AnimationState>> = {
  "copy-leaving:success": "check-entering",
  "check-entering": "check",
  "check-leaving": "copy-entering",
  "copy-entering": "copy",
  "copy-leaving:error": "error-entering",
  "error-entering": "error",
  "error": "error-leaving",
  "error-leaving": "copy-entering",
}

export default function CopyButton() {

  const [animationState, setAnimationState] = useState<AnimationState>("copy-entering");

  const handleCopy = async () => {
    try{
      await window.navigator.clipboard.writeText(window.location.href);
      
      setAnimationState("copy-leaving:success");
    } catch(err) {
      console.log(err)
      setAnimationState("copy-leaving:error")
    }

  };

  useEffect(() => {
    if(animationState !== "check" && animationState !== "error") return;

    const id = setTimeout(() => {
      setAnimationState(`${animationState}-leaving`)
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
        animationState === "check" ||
        animationState === "error" ? 
          "copy-button__button copy-button__button--clicked" : 
          "copy-button__button"
      } 
      onClick={handleCopy}
    >
      <CopyIcon animationState={animationState} handleAnimation={handleAnimation} />
      <CheckIcon animationState={animationState} handleAnimation={handleAnimation} />
      <ErrorIcon animationState={animationState} handleAnimation={handleAnimation} />
    </button>
  )
}