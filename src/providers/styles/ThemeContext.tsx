import { createContext } from 'react'
import { IContext } from './models';

export const ThemeContext = createContext<IContext>({
    theme: 'light',
    setTheme: (theme: 'light' | 'dark') => { },
});
