// Components
import Home  from './pages/Home'
import Login from './pages/Login'
import Erorr from './pages/Erorr'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Basket from './pages/Basket'
import Favorites from './pages/Favorites'
import SingUp from './pages/SingUp'
import Dashboard from './pages/Dashboard'
import { authGourd } from './hooks/useAuthGuard'
import { useEffect } from 'react'
import View from './pages/View'


function App() {     

  const isAuth = authGourd();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
  }, [])

    return(
      <>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='register' element={<SingUp/>}/>              
            <Route path='/bookmark' element={<Favorites/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/view' element={<View/>}/>
            <Route path='*' element= {<Erorr/>} />            
          </Routes>
      </>
    )
}

export default App
