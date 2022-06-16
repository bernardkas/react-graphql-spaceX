// React Router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rocket from "../Rocket/Rocket.component";
import Box from "@mui/material/Box";

const Details = () => {
  const location = useLocation();
  const {
    image,
    company,
    cost_per_launch,
    country,
    description,
    name,
    launch_date_unix,
    wikipedia,
    mission_name,
  } = location.state;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ pt: 6 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          m: 1,
        }}
      >
        <Box sx={{ p: 1 }}>
          <Link
            to={{
              pathname: "/",
            }}
          >
            <ArrowBackIcon fontSize="large" />
          </Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <h1>Rocket Details</h1>
        </Box>
      </Box>
      <Rocket
        image={
          image
            ? image
            : "https://www.arubatoday.com/wp-content/uploads/2018/02/6FALCON.jpg"
        }
        company={company}
        cost_per_launch={cost_per_launch}
        country={country}
        description={description}
        name={name}
        launch_date_unix={launch_date_unix}
        wikipedia={wikipedia}
        mission_name={mission_name}
      />
    </Grid>
  );
};

export default Details;
