import { Link, NavLink } from "react-router-dom";


export default function Header(): React.JSX.Element {
  return (
    <header>
      <h1 className="header__logo"><Link to="/">VIN Decoder</Link></h1>
      <nav className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/variables">Variables</NavLink>
      </nav>
    </header>
  )
}