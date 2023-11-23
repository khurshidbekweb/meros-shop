import { useRef } from "react";
import { Link,  Outlet } from "react-router-dom";

function Login() {
  const name = useRef()
  const password = useRef()

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
  }
  return (
    <div className="login">
        <div className="container">
            <div className="login--wrapper w-[554px] border p-[50px] mx-auto mt-[50px] shadow">
              <h2 className="text-[28px] font-bold">Авторизация</h2>
              <form>
                <label className="text-[16px] font-medium mt-6 block"> User name
                  <input ref={name} type="text" className="block rounded px-4 py-3 mt-5 w-[100%] border" />
                </label>
                <label className="text-[16px] font-medium mt-6 block"> Password
                  <input ref={password} type="password"  className="block rounded px-4 py-3 mt-5 w-[100%] border" />
                </label>
                <button onClick={handleSubmit} className="btn-group rounded text-[22px] text-white font-bold block px-4 py-3 mt-10 shadow w-[100%] border bg-green-600">LOG UP</button>
                <Link to="/register" className="btn-group rounded text-[14px] text-center text-purple-700 font-bold block px-4 py-3 mt-4 w-[100%]">LOG UP</Link>
              </form>
            </div>       
        </div>   
        <Outlet/>     
    </div>
  )
}

export default Login