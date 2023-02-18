import { Avatar, Box, Card } from "@mui/material";
import React from "react";
import Users from "../User.js";
import { setuser } from "../userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

export const Contacts = () => {
  const dispatch = useDispatch();

  return (
    <>
      {Users.map((User, index) => (
        <Link
          to={`/${User.name}`}
          style={{ textDecoration: "inherit", color: "inherit" }}
          key={index}
        >
          <Card
            onClick={function () {
              dispatch(setuser(User));
            }}
            key={index}
            sx={{
              width: { xs: "95vw", sm: "27vw", lg: "27vw" },
              display: "flex",
              alignItems: "center",
              marginLeft: { xs: "2.5vw", sm: "1.5vw", lg: "1.5vw" },
              marginBottom: "10px",
              cursor: "pointer",
              transition: 0.9,
              padding: "5px",
              "&:hover": { backgroundColor: "#eaebe6" },
            }}
          >
            <Box>
              <Avatar
                src={User.avatar}
                sx={{ width: 50, height: 50, marginRight: "10px" }}
              >
                {User.avatar ? "" : User.name.charAt(0)}
              </Avatar>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box key={User.id}>
                {" "}
                <h4>{User.name}</h4>
              </Box>
              <Box>
                {" "}
                <p>{date}</p>{" "}
              </Box>
              <Box sx={{ flexBasis: "100%", height: "0" }}>
                <p>{User.message}</p>
              </Box>
            </Box>
          </Card>
        </Link>
      ))}
    </>
  );
};
