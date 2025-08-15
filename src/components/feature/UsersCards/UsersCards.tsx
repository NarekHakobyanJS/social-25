import { Card } from "@mui/material";
import { useAppSelector } from "../../../store/hooks"
import UserCard from "../UserCard/UserCard";
import UserSkeleton from "../../ui/UserSkeleton/UserSkeleton";

const UsersCards = () => {
  const {items} = useAppSelector((state) => state.usersPage);
  return (
     <Card sx={{display : 'flex', flexWrap : 'wrap', gap : '15px', justifyContent : 'space-between'}}>
      {
        items.length ?
        items.map((user) => <UserCard key={user.id} user={user}/>)
        :
        Array.from(new Array(50)).map((s, i) =>  <UserSkeleton key={i}/>)
      }
    </Card>
  )
}

export default UsersCards