import { Box, Center, Container } from "@chakra-ui/react";
import HomePage from "./pages/home";
import style from "./App.css"
import ProfilePage from "./pages/profile"
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box paddingX="16">
      <BrowserRouter>
        <NavBar />
        <Center>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route path="/contentDetail" element={<ContentDetailPage />} /> */}
          </Routes>
        </Center>
      </BrowserRouter>
    </Box>
  );
}

export default App;
