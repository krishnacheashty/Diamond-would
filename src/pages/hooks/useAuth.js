import { useContext } from "react"
import { AuthContext } from "../contaxt/AuthContext";



const useAuth=()=>{
    return useContext(AuthContext)
}



export default useAuth;