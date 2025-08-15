import { Navigate } from "react-router-dom"
import Login from "../../components/feature/Login/Login"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useAppSelector } from "../../store/hooks"

const HomePage = () => {
  const {userId} = useAppSelector((state) => state.auth)
  const {hasToken, id} = useLocalStorage(userId)
  console.log(id);
  
  if(hasToken){
    return <Navigate to={`/user/profile/${id}`}/>
  }

  return (
    <div>
      <Login />
    </div>
  )
}

export default HomePage