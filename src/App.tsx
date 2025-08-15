
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Layout from './components/feature/Layout/Layout'
import { useEffect } from 'react'
import UsersPage from './pages/UsersPage/UsersPage'



function App() {
  useEffect(() => {
    
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout /> }>
          <Route index element={<HomePage /> }/>
          <Route path='/api/users' element={<UsersPage /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App
