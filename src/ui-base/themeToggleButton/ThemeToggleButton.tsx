import { useContext } from 'react'

import { ThemeContext } from '../../providers/styles/ThemeContext'
import { SunSvg } from '../svg/Sun'
import { MoonSvg } from '../svg/Moon'

import './ThemeToggleButton.scss'

export const ThemeToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark'
        setTheme(isCurrentDark ? 'light' : 'dark')
        localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark')
    }

    return (
        <label>
            <input className='toggle-checkbox' type='checkbox' onClick={handleThemeChange} defaultChecked={theme === 'dark'} />
            <div className='toggle-slot'>
                <div className='sun-icon-wrapper'>
                    <SunSvg />
                </div>
                <div className='toggle-button'></div>
                <div className='moon-icon-wrapper'>
                    <MoonSvg />
                </div>
            </div>
        </label>
    )
}
