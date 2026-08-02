
const PADDING = 10

export function getTooltipCoords(target: DOMRect, tooltip: DOMRect) {
  
  const viewportWidth = document.documentElement.clientWidth;

  let left = target.left + target.width / 2 - tooltip.width / 2;
  let top = (target.top - tooltip.height - PADDING) + window.scrollY;
  
  if(left < PADDING) left = PADDING;


  if(left + tooltip.width > viewportWidth - PADDING) {
    left = viewportWidth - tooltip.width - PADDING;
  }

  if(top < window.scrollY) top = target.bottom  + PADDING + window.scrollY;

  return { left, top }
}