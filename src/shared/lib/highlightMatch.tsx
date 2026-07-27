export const highlightMatch = (target: string, search: string): React.ReactNode => {
  if(!search) return target;

  const regExp = new RegExp(`(${search})`, "gi");

  const parts = target.split(regExp);

  return parts.map((part, i) => part.toLowerCase() === search ? 
    <span key={i} style={{color: "#fff"}}>{part}</span> : part)
}