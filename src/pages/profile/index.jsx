import { Avatar, defaultStandaloneParam, Text, Box, Center, Icon } from "@chakra-ui/react";
import {BsThreeDots} from "react-icons/bs"
import { IconBase } from "react-icons/lib";


const ProfilePage = () => {
    return (
      <Box display="flex" flexDirection="column" color="white" width="70vh">
        <Box display="flex">
          <Center>
            <Avatar
              margin="25px 25px 25px 0px"
              boxSize="130px"
              src="https://miro.medium.com/max/1000/1*tv9pIQPhwumDnYBfCoapYg.jpeg"
            />
            <Box>
              <Text fontSize="32px" fontWeight="bold">
                Kunyit
              </Text>
              <Text color="grey" fontSize="16px">
                Email123@gmail.com
              </Text>
            </Box>
          </Center>
        </Box>
        <Text fontSize="24px">My Collection</Text>
        <Box
          fontSize="20px"
          fontWeight="bold"
          display="flex"
          marginTop="8"
          borderBottom="1px"
          justifyContent="space-between"
        >
          <Box display="flex" color="#a6a6a6">
            <Text
              margin="15px"
              _hover={{
                color: "white",
                cursor: "pointer",
              }}
            >
              Home
            </Text>
            <Text
              margin="15px"
              _hover={{
                color: "white",
                cursor: "pointer",
              }}
            >
              Posts
            </Text>
            <Text
              margin="15px"
              _hover={{
                color: "white",
                cursor: "pointer",
              }}
            >
              Comments
            </Text>
            <Text
              margin="15px"
              _hover={{
                color: "white",
                cursor: "pointer",
              }}
            >
              Upvotes
            </Text>
            <Text
              margin="15px"
              _hover={{
                color: "white",
                cursor: "pointer",
              }}
            >
              Saved
            </Text>
          </Box>
          <Box margin="15px">
            <Icon
              color="#a6a6a6"
              boxSize="7"
              as={BsThreeDots}
              _hover={{
                color: "white",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>
    );
}

export default ProfilePage;