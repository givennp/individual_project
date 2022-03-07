import {
  Box,
  Text,
  Button,
  Stack,
  Collapse,
  Icon,
  Center,
  Avatar
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiCorn } from "react-icons/gi"
import { IoIosNotifications, IoMdChatbubbles } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs"
import { Link } from "react-router-dom";


const Navbar = () => {
    
    return (
      <Box
        color="white"
        display="flex"
        justifyContent="space-between"
        borderBottom="1px"
        paddingX="15vh"
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
              <Icon
                margin="15px"
                as={GiCorn}
                boxSize="30px"
                _hover={{
                  color: "#a6a6a6",
                }}
              />
            </Link>
            <Text margin="15px">Shuffle</Text>
            <Text margin="15px">Donate</Text>
            <Text>Trending</Text>
          </Center>
        </Box>
        <Box display="flex" flexDirection="row">
          <Center>
            <Icon marginLeft="15px" boxSize="7" as={AiOutlineSearch} />
            <Icon marginLeft="15px" boxSize="7" as={IoIosNotifications} />
            <Icon marginLeft="15px" boxSize="7" as={IoMdChatbubbles} />
            <Link to="/profile">
              <Avatar
                marginLeft="20px"
                src="https://miro.medium.com/max/1000/1*tv9pIQPhwumDnYBfCoapYg.jpeg"
                _hover={{
                  cursor: "pointer",
                }}
              />
            </Link>
            <Button
              marginLeft="15px"
              borderRadius="50px"
              backgroundColor="#217aff"
              fontSize="20px"
              fontWeight="bold"
              height="70%"
            >
              <Icon
                marginRight="15px"
                backgroundColor="inherit"
                as={BsPlusLg}
              />
              Upload
            </Button>
          </Center>
        </Box>
      </Box>
    );
}

export default Navbar;