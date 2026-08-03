import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "./Tooltip.styles.css"
import { getTooltipCoords } from "./lib/getTooltipCoords";

type Props = {
  message: string;
  refTarget: React.RefObject<HTMLElement | null>
}

export default function Tooltip({ message, refTarget }: Props) {

  const overlayRoot = document.getElementById("overlay-root");

  const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);
  const refMessage = useRef<HTMLParagraphElement>(null);
  const timeoutRef = useRef<number>(null);

  const onPointerEnter = (e: PointerEvent) => {
    if(e.pointerType !== "touch") setIsShowTooltip(true);
  };

  const onPointerLeave = (e: PointerEvent) => {
    if(e.pointerType !== "touch") setIsShowTooltip(false);
  };

  const onPointerDown = (e: PointerEvent) => {
    if(e.pointerType !== "touch")  return;
    
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsShowTooltip(true);

    timeoutRef.current = setTimeout(() => {
      setIsShowTooltip(false);
      timeoutRef.current = null;
    }, 3000);
  };

  useEffect(() => {
    if(!refTarget.current) return;
    const target = refTarget.current;

    target.addEventListener("pointerenter", onPointerEnter);
    target.addEventListener("pointerleave", onPointerLeave);
    target.addEventListener("pointerdown", onPointerDown);

    return () => {
      target.removeEventListener("pointerenter", onPointerEnter);
      target.removeEventListener("pointerdown", onPointerDown);
      target.removeEventListener("pointerleave", onPointerLeave);
    }
  }, []);

  useLayoutEffect(() => {
    if(!refTarget.current || !refMessage.current) return;
    if(!isShowTooltip) return;
    
    const target = refTarget.current;
    const tooltip = refMessage.current;

    tooltip.style.left = "0px";
    tooltip.style.top = "0px";
    const targetRect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    const { left, top } = getTooltipCoords(targetRect, tooltipRect);

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
    
  }, [message, isShowTooltip])

  if(!overlayRoot) return;

  return( 
    <>
      {isShowTooltip && createPortal(
        <p 
          ref={refMessage} 
          className="tooltip__message" 
          >
            {message}
        </p>,
        overlayRoot
      )}
    </>
  )
}