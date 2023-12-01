import { NavLink } from "react-router-dom"

function SingUp() {
  return (
    <div className="login">
        <div className="container">
            <div className="login--wrapper w-[554px] border p-[50px] mx-auto mt-[50px] shadow">
              <h2 className="text-[28px] font-bold">Авторизация</h2>
              <form>
                <label className="text-[16px] font-medium mt-4 block"> Name
                  <input type="text" className="block rounded px-4 py-3 mt-2 w-[100%] border" />
                </label>
                <label className="text-[16px] font-medium mt-1 block"> Email
                  <input type="email"  className="block rounded px-4 py-3 mt-2 w-[100%] border" />
                </label>
                <label className="text-[16px] font-medium mt-1 block"> User name
                  <input type="text" className="block rounded px-4 py-3 mt-2 w-[100%] border" />
                </label>
                <label className="text-[16px] font-medium mt-1 block"> Password
                  <input type="password"  className="block rounded px-4 py-3 mt-2 w-[100%] border" />
                </label>
                <div className="text-[16px] font-medium mt-2 mb-2 flex items-center gap-5"> Gender:
                    <label className="flex items-center">
                        Male 
                    <input type="radio" name="gender"  className="block rounded px-4 py-3 ml-2 mt-2 w-[100%] border" />
                    </label>
                    <label className="flex items-center">
                        Women 
                    <input type="radio" name="gender" className="block text-[22px] ml-2 rounded px-4 py-3 mt-2 w-[100%] border" />
                    </label>
                </div>
                <button className="btn-group rounded text-[22px] text-white font-bold block px-4 py-3 mt-10 shadow w-[100%] border bg-green-600">LOG UP</button>
                <NavLink to="/login" className="text-[18px] text-center block mt-2 font-medium text-red-400">Sing In</NavLink>
              </form>
            </div>            
        </div>
    </div>  
  )
}

export default SingUp