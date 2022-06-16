import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { GET_ALL_LAUNCHES } from "../../GraphQL/Queries";
import GridItem from "../GridItem/GridItem.component";

const Main = () => {
  const [apiData, setApiData] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_LAUNCHES);

  useEffect(() => {
    if (data) {
      setApiData(data.launchesPast);
    }
  }, [data]);

  return (
    <>
      <h1 style={{ color: "white" }}>Past SpaceX missions</h1>
      <Grid container align="center" sx={{ pt: 6 }}>
        {apiData.map((mission, index) => (
          <GridItem
            mission_name={mission.mission_name}
            mission_image={
              mission.links.flickr_images.length > 0
                ? mission.links.flickr_images[0]
                : "https://www.arubatoday.com/wp-content/uploads/2018/02/6FALCON.jpg"
            }
            mission_details={
              mission.details !== null ? mission.details : "No info"
            }
            all={mission}
            key={index}
          />
        ))}
      </Grid>
    </>
  );
};

export default Main;
