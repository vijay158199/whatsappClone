import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Box, Card } from "@mui/material";

export default function Status() {
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + "" + ampm;
    return strTime;
  }
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "100vw", sm: "30vw", lg: "30vw" },
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          width: "95%",
          padding: "5px",
          marginTop: "5px",
          "&:hover": { backgroundColor: "#eaebe6" },
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{
              border: "3px",
              borderStyle: "solid",
              borderColor: "lightgreen",
              width: "50px",
              height: "50px",
            }}
            alt="Remy Sharp"
            src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg"
          />
          <Box>
            <Box sx={{ paddingTop: "5px" }}>
              <h5>Virat</h5>
            </Box>
            <Box sx={{ color: "gray", fontSize: "10px" }}>
              {" "}
              Today,{formatAMPM(new Date())}
            </Box>
          </Box>
        </Stack>
      </Card>
      <Card
        sx={{
          width: "95%",
          padding: "5px",
          marginTop: "5px",
          "&:hover": { backgroundColor: "#eaebe6" },
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{
              border: "3px",
              borderStyle: "solid",
              borderColor: "lightgreen",
              width: "50px",
              height: "50px",
            }}
            alt="Travis Howard"
            src="https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/09/Virat-Kohli-T20I-Century.png?w=1200&ssl=1"
          />
          <Box>
            <Box sx={{ paddingTop: "5px" }}>
              <h5>Vijay</h5>
            </Box>
            <Box sx={{ color: "gray", fontSize: "10px" }}>
              {" "}
              Today,{formatAMPM(new Date())}
            </Box>
          </Box>
        </Stack>
      </Card>
      <Card
        sx={{
          width: "95%",
          padding: "5px",
          marginTop: "5px",
          "&:hover": { backgroundColor: "#eaebe6" },
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{
              border: "3px",
              borderStyle: "solid",
              borderColor: "lightgreen",
              width: "50px",
              height: "50px",
            }}
            alt="Remy Sharp"
            src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c244975/kl-rahul.jpg"
          />
          <Box>
            <Box sx={{ paddingTop: "5px" }}>
              <h5>Rahul</h5>
            </Box>
            <Box sx={{ color: "gray", fontSize: "10px" }}>
              {" "}
              Today,{formatAMPM(new Date())}
            </Box>
          </Box>
        </Stack>
      </Card>
      <Card
        sx={{
          width: "95%",
          padding: "5px",
          marginTop: "5px",
          "&:hover": { backgroundColor: "#eaebe6" },
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{
              border: "3px",
              borderStyle: "solid",
              borderColor: "lightgreen",
              width: "50px",
              height: "50px",
            }}
            alt="Travis Howard"
            src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c244982/rohit-sharma.jpg"
          />
          <Box>
            <Box sx={{ paddingTop: "5px" }}>
              <h5>Rohit</h5>
            </Box>
            <Box sx={{ color: "gray", fontSize: "10px" }}>
              {" "}
              Today,{formatAMPM(new Date())}
            </Box>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}
