import { User } from "@/models/user";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

type UserCardType = {
  user: User;
};

const UserCard = (props: UserCardType) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "300px",
        marginBottom: "5px",
        marginTop: "5px",
        transition: 'all .2s ease-in-out',
        ':hover':{
            transform:'scale(1.01)'
        }
      }}
    >
      <CardActionArea href={`/${props.user.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={props.user.image}
          alt={props.user.maidenName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.user.firstName} {props.user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.user.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
