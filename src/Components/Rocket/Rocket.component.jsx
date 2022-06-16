import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import Moment from "react-moment";

const Rocket = ({
  image,
  company,
  cost_per_launch,
  country,
  description,
  name,
  launch_date_unix,
  wikipedia,
  mission_name,
  _blank,
}) => {
  return (
    <Card sx={{ maxWidth: 600, mb: 6 }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt="rocket" />
        <CardContent>
          <Typography gutterBottom component="div">
            <h5 style={{ display: "inline-block", margin: "0 10px 0 0" }}>
              Mission Name:
            </h5>
            {mission_name}
          </Typography>
          <Typography gutterBottom component="div">
            <h5 style={{ display: "inline-block", margin: "0 10px 0 0" }}>
              Rocket Name:
            </h5>
            {name}
          </Typography>
          <Typography gutterBottom component="div">
            <h5 style={{ display: "inline-block", margin: "0 10px 0 0" }}>
              Cost per launch:
            </h5>
            ${cost_per_launch}
          </Typography>
          <Typography gutterBottom component="div">
            <h5 style={{ display: "inline-block", margin: "0 10px 0 0" }}>
              Company:
            </h5>
            {company}
          </Typography>
          <Typography gutterBottom component="div">
            <h5 style={{ display: "inline-block", margin: "0 10px 0 0" }}>
              Country:
            </h5>
            {country}
          </Typography>
          <Typography gutterBottom component="div">
            <h5 style={{ display: "inline-block", margin: "0 10px 0 0" }}>
              Launch Date:
            </h5>
            <Moment unix>{launch_date_unix}</Moment>
          </Typography>
          <Typography gutterBottom component="div">
            <h5 style={{ display: "inline-block", margin: "0 10px 0 0" }}>
              Wikipedia URL:
            </h5>
            <Link href={wikipedia} underline="none" target={_blank}>
              {wikipedia}
            </Link>
          </Typography>
          <Typography gutterBottom component="div">
            <h5>Description:</h5>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Rocket;
