import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from './layout/Layout'
import { AuthProvider } from './providers/api/AuthProvider'
import { ScrollToTop } from './providers/scrollRestoration/ScrollToTop'
import { routes, RoutesManager } from './routesManager'
import { ThemeContext } from './providers/styles/ThemeContext'
import { Theme } from './types/theme/theme'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 20,
    },
  },
})

export const App = () => {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches
  const getDefaultTheme = (): Theme => {
    const localStorageTheme = localStorage.getItem('theme') as Theme | null
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light'
    return localStorageTheme || browserDefault
  }
  const [theme, setTheme] = useState(getDefaultTheme())


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <div className={`theme-${theme}`}>
              <div className='app'>
                <Layout>
                  <ScrollToTop>
                    <Routes>
                      <Route
                        path="*"
                        element={<Navigate to={RoutesManager.home.root.getURL()} replace />}
                      />
                      {routes.map(({ component, path }) => (
                        <Route path={path} element={component} key={path} />
                      ))}
                    </Routes>
                  </ScrollToTop>
                </Layout>
              </div>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeContext.Provider>
  )
}
