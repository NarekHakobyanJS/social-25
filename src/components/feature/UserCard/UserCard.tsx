import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import type { IUser } from "../../../types/userTypes"
import userImg from '../../../assets/user.jpg'

type UserCardPropsType = {
    user : IUser
}

function UserCard({user} : UserCardPropsType) {
  return (
    <Card sx={{ width: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={user?.photos?.large === null ? userImg : user?.photos?.large}
          alt={user?.name}
        />
        <CardContent>
          <Typography sx={{textAlign : 'center'}} gutterBottom variant="h5" component="div">
            {user?.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Follow
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard