// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImage =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

      const notFoundClass = isDarkTheme
        ? 'darkThemeNotFound'
        : 'lightThemeNotFound'

      return (
        <>
          <Navbar />
          <div className={notFoundClass}>
            <img src={notFoundImage} alt="not found" />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
