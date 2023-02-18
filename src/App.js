import { Box, Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Message from "./Components/Message";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Stack direction="row">
                <Header></Header>
                <Box
                  sx={{
                    backgroundImage: `url("https://media.istockphoto.com/id/483731108/photo/technology-and-coffee-on-a-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=_CO1HjY597xwNn7SASXmYE92TMKHcSGC-A-ORKY0uOE=")`,
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    width: "100%",
                    height: "100vh",
                    display: { xs: "none", sm: "block", lg: "block" },
                  }}
                ></Box>
              </Stack>
            }
          />
          <Route
            path="/:User"
            element={
              <Stack direction="row">
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Header></Header>
                </Box>
                <Message></Message>
              </Stack>
            }
          />
          <Route path="/*" element={<h1>404 page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
