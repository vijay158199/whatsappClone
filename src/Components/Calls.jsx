import { Call } from "@mui/icons-material";
import { Avatar, Box, Card, Stack } from "@mui/material";
import React from "react";

const Calls = () => {
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
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
            }}
            alt="Remy Sharp"
            src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg"
          />
          <Box sx={{ flexWrap: "wrap", flexBasis: "100%" }}>
            <Box sx={{ paddingTop: "5px" }}>
              <h5>Virat</h5>
            </Box>
            <Box sx={{ color: "gray", fontSize: "10px" }}>
              {" "}
              Today,{formatAMPM(new Date())}
            </Box>
          </Box>
          <Box>
            <Call></Call>
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
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
            }}
            alt="Remy Sharp"
            src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c170660/shikhar-dhawan.jpg"
          />
          <Box sx={{ flexWrap: "wrap", flexBasis: "100%" }}>
            <Box sx={{ paddingTop: "5px" }}>
              <h5>Dhawan</h5>
            </Box>
            <Box sx={{ color: "gray", fontSize: "10px" }}>
              {" "}
              Today,{formatAMPM(new Date())}
            </Box>
          </Box>
          <Box>
            <Call></Call>
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
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
            }}
            alt="Remy Sharp"
            src="https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/09/Virat-Kohli-T20I-Century.png?w=1200&ssl=1"
          />
          <Box sx={{ flexWrap: "wrap", flexBasis: "100%" }}>
            <Box sx={{ paddingTop: "5px" }}>
              <h5>Vijay</h5>
            </Box>
            <Box sx={{ color: "gray", fontSize: "10px" }}>
              {" "}
              Today,{formatAMPM(new Date())}
            </Box>
          </Box>
          <Box>
            <Call></Call>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default Calls;
