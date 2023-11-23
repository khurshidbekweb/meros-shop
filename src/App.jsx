// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home  from './pages/Home'
import Login from './pages/Login'
import Erorr from './pages/Erorr'
import { Route, Routes } from 'react-router-dom'
import Basket from './pages/Basket'
import Favorites from './pages/Favorites'
import SingUp from './pages/SingUp'


function App() {     


    return(
      <>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='register' element={<SingUp/>}/>              
            <Route path='/bookmark' element={<Favorites/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='*' element= {<Erorr/>} />            
          </Routes>          
        </main>
        <Footer/>
      </>
    )
}

export default App
