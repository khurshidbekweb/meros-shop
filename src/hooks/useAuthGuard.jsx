let token = window.localStorage.getItem("token")

export  const authGourd = () =>{
    if(!token){
           
        return false
    }
    return true
}