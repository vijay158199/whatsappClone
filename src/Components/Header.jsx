import { Box } from "@mui/material";
import React from "react";
import { Contacts } from "./Contacts";
import { useState } from "react";
import { Message } from "@mui/icons-material";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import Users from "../User.js";
import { Top } from "./Top";
import Status from "./Status";
import Calls from "./Calls";
function Header() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState("");
  const [open, setOpen] = useState(false);
  const Mode = useSelector((state) => state.mode.value);
  function add() {
    if (id !== 0 && name !== "" && message !== "") {
      Users.push({
        id: id,
        name: name,
        message: message,
        avatar: avatar,
      });
    } else {
      alert("Enter all values");
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
      }}
    >
      <Top></Top>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        {Mode === "chats" ? <Contacts></Contacts> : null}
        {Mode === "status" ? <Status></Status> : null}
        {Mode === "calls" ? <Calls></Calls> : null}
      </Box>
      <Box
        sx={{
          position: { xs: "fixed", sm: "absolute", lg: "absolute" },
          bottom: "100px",
          right: { xs: "30px", sm: "40px", lg: "60px" },
          backgroundColor: "#075E54",
          borderRadius: "50px",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Message
          sx={{ color: "white", fontSize: "40px", padding: "3px" }}
          onClick={() => setOpen(true)}
        ></Message>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-describedby="dialog-title"
        >
          <DialogTitle id="dialog-title" sx={{}}>
            <h3>Add New One</h3>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Hello My Name Is Vijay
            </DialogContentText>
            <Box>
              <Box sx={{ marginBottom: "2px" }}>
                <input
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  type="text"
                  placeholder="id"
                ></input>
              </Box>

              <br></br>
              <Box sx={{ marginBottom: "2px" }}>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="name"
                ></input>
              </Box>

              <br></br>
              <Box sx={{ marginBottom: "2px" }}>
                {" "}
                <input
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type="text"
                  placeholder="message"
                ></input>
              </Box>

              <br></br>
              <Box sx={{ marginBottom: "2px" }}>
                <input
                  onChange={(e) => {
                    setAvatar(e.target.value);
                  }}
                  type="text"
                  placeholder="avatarlink"
                ></input>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              autoFocus
              onClick={() => {
                add();
                setOpen(false);
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Header;
