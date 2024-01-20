// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeButton = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeButtonImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navClass = isDarkTheme ? 'darkThemeClass' : 'lightThemeClass'

      const linkClass = isDarkTheme
        ? 'darkThemeClassLink'
        : 'lightThemeClassLink'

      return (
        <navbar className={navClass}>
          <img src={websiteLogo} alt="website logo" />
          <ul className="menu-cont">
            <li>
              <Link to="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass}>
                About
              </Link>
            </li>
          </ul>
          <button
            className="theme-butt"
            type="button"
            onClick={onClickThemeButton}
            data-testid="theme"
          >
            <img src={themeButtonImage} alt="theme" />
          </button>
        </navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
