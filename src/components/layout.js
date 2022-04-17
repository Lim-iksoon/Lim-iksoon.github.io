import * as React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from 'prop-types'
import ThemeContext from '../context/ThemeContext'
import Header from './header'
import '../styles/layout.css'
import Button from './buttons'
import Bio from "./bio"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  // const [theme, themeToggler] = useTheme();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // const {theme, toggleTheme} = useDarkMode();

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <div className={theme.dark ? 'dark' : 'light'}>
            <Header></Header>
              <div
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 0,
                }}
              >
            <header className="global-header">{header}</header>
            <Button primary onClick={()=>{navigate("/general")}}>투자 일반</Button>
            <Button primary onClick={()=>{navigate("/investment_diary")}}>투자 일지</Button>
            <Button primary onClick={()=>{navigate("/stock_analysis")}}>종목 분석</Button>
            <Button primary onClick={()=>{navigate("/quant_analysis")}}>퀀트 분석</Button>
            <main>{children}</main>
            {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer> */}
          </div>
          </div>
        </div>
        
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
