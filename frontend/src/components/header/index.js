import"./style.css"
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <header>
        <div className="header_left">

        </div>
        <div className="header_middle">
            <Link to="/"></Link>
        </div>
        <div className="header_right">

        </div>
    </header>
  )
}
