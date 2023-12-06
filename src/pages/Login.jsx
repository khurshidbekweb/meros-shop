
import { useState } from "react";
import { Link,  Outlet, useNavigate } from "react-router-dom";
import {custumAxios} from '../service/LoginAuth'


function Login() {
  const [user, setUser] = useState(0);
  const [password, setPassword] = useState(0);
  const dashNavigate = useNavigate()

  const userLogin = (e) =>{
    e.preventDefault();
    const userInfo = {
      username: user,
      password: password
    }
    
    if(userInfo.username.length===0 || userInfo.password.length===0){
      alert("enter tehr user name or password")
    }else{
      custumAxios.auth(userInfo).then(res=> {
        if(res.status===200){
          localStorage.setItem("token", res.data.token)
          dashNavigate("/dashboard")
        }
      })
      
    }
  }
  
  return (
    <div className="login">
        <div className="container">
            <div className="login--wrapper w-[554px] border p-[50px] mx-auto mt-[50px] shadow">
              <h2 className="text-[28px] font-bold">Авторизация</h2>
              <form>
                <label className="text-[16px] font-medium mt-6 block"> User name
                  <input onChange={(e)=> setUser(e.target.value)} type="text" className="block rounded px-4 py-3 mt-5 w-[100%] border" />
                </label>
                <label className="text-[16px] font-medium mt-6 block"> Password
                  <input onChange={(e)=> setPassword(e.target.value)} type="password"  className="block rounded px-4 py-3 mt-5 w-[100%] border" />
                </label>
                <button onClick={(e)=> userLogin(e)} className="btn-group rounded text-[22px] text-white font-bold block px-4 py-3 mt-10 shadow w-[100%] border bg-green-600">LOG IN</button>
                <div className="btn flex">
                <Link to="/register" className="btn-group rounded text-[14px] text-center text-purple-700 font-bold block px-4 py-3 mt-4 w-[100%]">LOG UP</Link>
                <Link to="/" className="btn-group rounded text-[14px] text-center text-red-700 font-bold block px-4 py-3 mt-4 w-[100%]">LOG OUT</Link>
                </div>
              </form>
            </div>       
        </div>   
        <Outlet/>     
    </div>
  )
}

export default Login