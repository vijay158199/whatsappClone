import { Call, KeyboardBackspace, Mic, MoreVert } from "@mui/icons-material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Avatar, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../counterSlice";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Message() {
  const dispatch = useDispatch();
  const [umessage, setUmessage] = useState("");
  const divRef = useRef(null);
  const my = useSelector((state) => state.user.value);
  function fun() {
    divRef.current.scrollTo(0, divRef.current.scrollHeight + 25);
  }
  useEffect(() => {
    divRef.current.scrollTo(0, divRef.current.scrollHeight + 25);
  });
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
    <>
      <Box
        sx={{
          backgroundImage: {
            xs: `url("https://i.pinimg.com/originals/3d/8c/2f/3d8c2f2c82c1c9ef1e27be645cd1aa17.jpg")`,
            sm: `url("https://media.istockphoto.com/id/483731108/photo/technology-and-coffee-on-a-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=_CO1HjY597xwNn7SASXmYE92TMKHcSGC-A-ORKY0uOE=")`,
            lg: `url("https://media.istockphoto.com/id/483731108/photo/technology-and-coffee-on-a-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=_CO1HjY597xwNn7SASXmYE92TMKHcSGC-A-ORKY0uOE=")`,
          },
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          objectFit: "cover",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "100vw", sm: "71%", lg: "71%" },
            height: "64px",
            position: "fixed",
            top: "0",
            backgroundColor: "#075E54",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: "1",
            color: "white",
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            <Link to={"/"}>
              <KeyboardBackspace
                sx={{
                  display: { xs: "block", sm: "none", lg: "none" },
                  color: "white",
                }}
              ></KeyboardBackspace>
            </Link>
            <Avatar src={my.avatar}>
              {my.avatar ? "" : my.name.charAt(0)}
            </Avatar>
            <Box sx={{ paddingLeft: "10px" }}>
              <Box>
                <h4>{my.name}</h4>
              </Box>
              <Box>last seen recently</Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <Box sx={{ paddingLeft: "20px" }}>
              <Call></Call>
            </Box>
            <Box sx={{ paddingLeft: "20px", paddingRight: "10px" }}>
              <MoreVert></MoreVert>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "fixed",
            marginRight: { xs: "5%", sm: "5%", lg: "5%" },
            marginLeft: { xs: "5%", sm: "5%", lg: "5%" },
            top: "64px",
            height: `${window.innerHeight - 64 - 60 + "px"}`,
            width: { xs: "90vw", sm: "60%", lg: "60%" },
            paddingTop: "4px",
            overflow: "auto",
          }}
          ref={divRef}
          id={divRef}
        >
          <Sidebar></Sidebar>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginLeft: { xs: "0%", sm: "42%", lg: "40%" },
          }}
        >
          <Box
            sx={{
              height: "50px",
              width: { xs: "90%", sm: "100%", lg: "100%" },
              position: "fixed",
              bottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                width: { xs: "100%", sm: "40%", lg: "40%" },
                height: "50px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    dispatch(
                      incrementByAmount({
                        jc: "flex-start",
                        umessage: umessage,
                        time: formatAMPM(new Date()),
                        ustyle: {
                          backgroundColor: "white",
                          borderRadius: "40px 40px 40px 0px",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                          display: "flex",
                          flexDirection: "row",
                        },
                      })
                    );
                    setUmessage("");
                    fun();
                  }}
                >
                  <SentimentSatisfiedAltIcon
                    sx={{ fontSize: "30px", opacity: "0.5" }}
                  ></SentimentSatisfiedAltIcon>
                </Box>
                <input
                  type="text"
                  placeholder="Message"
                  style={{
                    border: "none",
                    height: "100%",
                    fontSize: "15px",
                    width: "100%",
                  }}
                  onChange={(e) => {
                    setUmessage(e.target.value);
                  }}
                  onBlur={(e) => {
                    e.target.value = "";
                    e.target.focus();
                  }}
                ></input>
              </Box>
              <Box
                sx={{
                  opacity: "0.5",
                  right: "15px",
                  marginTop: "8px",
                  transform: "rotate(40deg) ",
                  position: "absolute",
                }}
                onClick={() => {
                  dispatch(incrementByAmount(""));

                  fun();
                }}
              >
                <AttachFileIcon></AttachFileIcon>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                width: "50px",
                marginLeft: "10px",
                borderRadius: "50%",
                height: "50px",
              }}
              onClick={() => {
                dispatch(
                  incrementByAmount({
                    jc: "flex-end",
                    umessage: umessage,
                    time: formatAMPM(new Date()),
                    ustyle: {
                      backgroundColor: "#93fd84",
                      borderRadius: "40px 40px 0px 40px",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      display: "flex",
                      flexDirection: "row",
                    },
                  })
                );
                setUmessage("");
                fun();
              }}
            >
              <Mic></Mic>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Message;
