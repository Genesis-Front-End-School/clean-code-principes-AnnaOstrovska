import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { Logo } from 'wisey-components-library'
import 'wisey-components-library/dist/style.css'

import { RoutesManager } from '../../routesManager'
import { ThemeToggleButton } from '../../ui-base/themeToggleButton/ThemeToggleButton'

import './Header.styled.scss'

export const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = () => {
    navigate(RoutesManager.home.root.getURL())
  }

  return (
    <header className="container">
      <Logo />

      <div className="contentWrapper">
        <div className="buttonsWrapper">
          <button
            className={classNames({
              'active': pathname === '/home',
            })}
            onClick={handleClick}
          >
            Home
          </button>
        </div>
        <ThemeToggleButton />
      </div>
    </header>
  )
}
