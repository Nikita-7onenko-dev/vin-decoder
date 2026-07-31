import StatusMessage from "@/shared/ui/StatusMessage/StatusMessage";
import { Link } from "react-router-dom";

export default function PageNotFound() {

  return (
    <StatusMessage 
      title="404 Page not found" 
      details={[
        { id: 1, message: "Looks like this page took a wrong turn." }, 
        { id: 2, message: "Let's get you back on track." },
        { id: 3, message: <Link to={'/'} >Go Home</Link> }
      ]} 
      variant="error" />
  )
}