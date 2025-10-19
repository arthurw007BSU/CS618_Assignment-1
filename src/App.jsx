import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PropTypes from 'prop-types'
//import { Blog } from './pages/Blog.jsx'
//import { Signup } from './pages/Signup.jsx'
//import { Login } from './pages/Login.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

//import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

export function App({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProvider>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}
