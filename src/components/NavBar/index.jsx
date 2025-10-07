import React from "react"
import { FaBars, FaReact } from "react-icons/fa"
import { HiX } from "react-icons/hi"
import { Link } from "react-router-dom"
const data = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Resume", to: "/resume" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
]
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = React.useState(false)
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon)
    const menu = document.querySelector(".navbar__container__menu")
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <FaReact size={30} style={{ color: "#61DBFB" }} />
          </Link>
        </div>
        <ul className="navbar__container__menu">
          {data.map((item, index) => (
            <li key={index} className="navbar__container__menu__item">
              <Link
                to={item.to}
                className="navbar__container__menu__item__link"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
