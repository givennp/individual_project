import {
  Box,
  Text,
  Button,
  Stack,
  Collapse,
  Icon,
  Center,
  Avatar,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiCorn } from "react-icons/gi";
import { IoIosNotifications, IoMdChatbubbles } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user_types from "../../redux/reducers/types/user";

const Navbar = () => {
  const userSelector = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutButtonHandler = () => {
    dispatch({
      type: user_types.LOGOUT_USER,
    });

    localStorage.removeItem("user_data");
  };

  return (
    <Box
      color="white"
      display="flex"
      justifyContent="space-between"
      borderBottom="1px"
      paddingX="15vh"
      position="sticky"
      top="0"
    >
      <Box display="flex" fontSize="24px" fontWeight="medium" width="50%">
        <Center>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <Icon
                margin="15px"
                as={GiCorn}
                boxSize="30px"
                display="flex"
                alignItem="center"
                _hover={{
                  color: "#a6a6a6",
                }}
              />
            </Box>
          </Link>
          <Text padding="15px">Shuffle</Text>
          <Text padding="15px">Donate</Text>
          <Text padding="15px">Trending</Text>
        </Center>
      </Box>
      <Box display="flex" flexDirection="row">
        <Center>
          <Icon padding="3px" boxSize="9" as={AiOutlineSearch} />
          <Icon padding="3px" boxSize="9" as={IoIosNotifications} />
          <Icon padding="3px" boxSize="9" as={IoMdChatbubbles} />
          {userSelector.id ? (
            <Menu>
              <MenuButton>
                <Avatar
                  marginLeft="20px"
                  src="https://miro.medium.com/max/1000/1*tv9pIQPhwumDnYBfCoapYg.jpeg"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </MenuButton>
              <MenuList color="black">
                {userSelector.id ? (
                  <>
                    <Link to="/profile">
                      <MenuItem>Profile</MenuItem>
                    </Link>
                    <MenuItem onClick={logoutButtonHandler}>Logout</MenuItem>
                    
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <MenuItem>Login</MenuItem>
                    </Link>
                  </>
                )}
              </MenuList>
            </Menu>
          ) : (
            <Link to="/login">
              <Button colorScheme="green" marginLeft="20px">
                Login
              </Button>
            </Link>
          )}
          <Button
            marginLeft="15px"
            borderRadius="50px"
            backgroundColor="#217aff"
            fontSize="20px"
            fontWeight="bold"
            height="70%"
          >
            <Icon marginRight="15px" backgroundColor="inherit" as={BsPlusLg} />
            Upload
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Navbar;
