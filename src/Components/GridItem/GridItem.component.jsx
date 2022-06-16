import { Grid } from "@mui/material";
import MissionCard from "../Card/MissionCard.component";

const GridItem = ({ mission_name, mission_image, mission_details, all }) => {
  return (
    <Grid item xs={12} md={3} lg={3} sx={{ mt: 3, height: "60vh" }}>
      <MissionCard
        image={mission_image}
        title={mission_name}
        details={mission_details}
        allInformations={all}
      />
    </Grid>
  );
};

export default GridItem;
