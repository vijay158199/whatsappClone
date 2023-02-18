import { Box } from "@mui/material";
import React from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { setmode } from "../modeSlice";
import { useDispatch } from "react-redux";

export const Top = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: { xs: "100vw", sm: "30vw", lg: "30vw" } }}>
      <Box
        sx={{
          height: "90px",
          backgroundColor: "#075E54",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <Box sx={{ marginLeft: "10px" }}>
            <h4>WhatsApp</h4>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "40%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <PhotoCameraIcon></PhotoCameraIcon>
            </Box>
            <Box>
              <SearchIcon></SearchIcon>
            </Box>
            <Box>
              <MoreVertIcon></MoreVertIcon>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "25px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "30%",
              "&:hover": { borderBottom: "3px solid white" },
              textAlign: "center",
              paddingBottom: "5px",
              transition: "1",
            }}
            onClick={() => {
              dispatch(setmode("chats"));
            }}
          >
            <h5>CHATS</h5>
          </Box>
          <Box
            sx={{
              width: "30%",
              "&:hover": { borderBottom: "3px solid white" },
              textAlign: "center",
              paddingBottom: "5px",
              transition: "1",
            }}
            onClick={() => {
              dispatch(setmode("status"));
            }}
          >
            <h5>STATUS</h5>
          </Box>
          <Box
            sx={{
              width: "30%",
              paddingBottom: "5px",
              "&:hover": { borderBottom: "3px solid white" },
              textAlign: "center",
              transition: "1",
            }}
            onClick={() => {
              dispatch(setmode("calls"));
            }}
          >
            <h5>CALLS</h5>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
