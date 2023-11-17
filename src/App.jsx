// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home  from './pages/Home'
import Login from './pages/Login'
import Erorr from './pages/Erorr'
import { Route, Routes } from 'react-router-dom'


function App() {     


    return(
      <>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='*' element= {<Erorr/>} />            
          </Routes>
        </main>
        <Footer/>
      </>
    )
}

export default App
