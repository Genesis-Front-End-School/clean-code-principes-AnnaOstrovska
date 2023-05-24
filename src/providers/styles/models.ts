import { Theme } from '../../types/theme/theme';

export interface IContext {
    theme: Theme
    setTheme: (theme: Theme) => void
}
