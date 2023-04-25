import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames';

import { RoutesManager } from '../../routesManager'
import { Logo } from '../../ui-base/logo/Logo'

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
    </header>
  )
}
