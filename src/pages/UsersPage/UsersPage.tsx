import { useEffect } from "react"
import { getAllUsers } from "../../store/slices/usersSlice"
import { useAppDispatch } from "../../store/hooks"

const UsersPage = () => {
    
    const disaptch = useAppDispatch()
    useEffect(() => {
        disaptch(getAllUsers())
    }, [])

  return (
    <>

    </>
  )
}

export default UsersPage