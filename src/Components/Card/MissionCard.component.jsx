// React Router
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MissionCard = ({ image, title, details, allInformations }) => {
  const { company, cost_per_launch, country, description, name, wikipedia } =
    allInformations.rocket.rocket;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={{
            pathname: "/details",
            state: {
              all: allInformations,
              image: image,
              company,
              cost_per_launch,
              country,
              description,
              name,
              wikipedia,
              launch_date_unix: allInformations.launch_date_unix,
              mission_name: title,
            },
          }}
        >
          <Button size="small" variant="outlined">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MissionCard;
