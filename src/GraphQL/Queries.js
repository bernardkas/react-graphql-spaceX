// Appolo
import { gql } from "@apollo/client";

export const GET_ALL_LAUNCHES = gql`
  query {
    launchesPast {
      mission_name
      launch_date_local
      launch_date_utc
      launch_date_unix
      launch_site {
        site_name_long
      }
      details
      links {
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
        first_stage {
          cores {
            flight
          }
        }
        rocket {
          company
          country
          description
          diameter {
            meters
          }
          engines {
            version
            type
            thrust_vacuum {
              lbf
              kN
            }
            thrust_to_weight
            thrust_sea_level {
              kN
              lbf
            }
            propellant_2
            propellant_1
            number
            layout
            engine_loss_max
          }
          height {
            meters
          }
          mass {
            kg
          }
          name
          wikipedia
          cost_per_launch
        }
      }
    }
  }
`;
