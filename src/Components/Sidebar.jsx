import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
export const Sidebar = () => {
  const my = useSelector((state) => state.counter.value);

  const myChat = my
    ? my.map((msg, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: msg.jc,
              marginBottom: "5px",
            }}
          >
            <Box style={msg.ustyle}>
              <Box>{msg.umessage}</Box>
              <Box
                sx={{
                  fontSize: "10px",
                  width: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    paddingTop: "10px",

                    opacity: "0.5",
                  }}
                >
                  {msg.time}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))
    : null;
  return <div>{myChat}</div>;
};
