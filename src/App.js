import { Box, Center, Container } from "@chakra-ui/react";
import HomePage from "./pages/home";
import style from "./App.css";
import ProfilePage from "./pages/profile";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useDispatch} from 'react-redux'
import SideBar from "./components/SideBar";
import { useState, useEffect } from "react";
import user_types from "./redux/reducers/types/user";
import LoginPage from "./pages/login";

function App() {
  const [isAuthCheked, setIsAuthChecked] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const savedUserData = localStorage.getItem("user_data")

    if(savedUserData){
      const parsedUsedData = JSON.parse(savedUserData)
      dispatch({
        type: user_types.LOGIN_USER,
        payload: parsedUsedData
      })
    }

    setIsAuthChecked(true)
  },[])

  if(!isAuthCheked){
    return <div>Loading...</div>
  }

  return (
    <Box paddingX="16">
      <BrowserRouter>
        <NavBar />
          {/* <SideBar/> */}
        <Center>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage/>} />
            {/* <Route path="/contentDetail" element={<ContentDetailPage />} /> */}
          </Routes>
        </Center>
      </BrowserRouter>
    </Box>
  );
}

export default App;
