export function getSuccessMessage(message: string) {
  return message
  .split(".")
  .slice(1)
  .map(message => message.trim())
  .filter(Boolean)
  .map((message, id) => ({id, message}))
}