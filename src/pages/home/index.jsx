import { useState, useEffect } from "react";
import ContentCard from "../../components/ContentCard";
import axios from "axios";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { API_URL } from "../../configs/api";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";

const HomePage = () => {
  const [contentList, setContentList] = useState([]);
  const [isLoading, setIsLoading] = useState("")

  const fetchContentList = () => {
    axios.get(`${API_URL}/posts`).then((res) => {
      setContentList(res.data);
    });
  };

  const renderContentList = () => {
    return contentList.map((val) => {
      return (
        <ContentCard
          username={val.username}
          caption={val.caption}
          imageUrl={val.image_url}
          location={val.location}
          numberOfLikes={val.number_of_likes}
          id={val.id}
        />
      );
    });
  };

  useEffect(() => {
    fetchContentList()

  } , [])

  return (
    <Box paddingY="8">
      {renderContentList()}
    </Box>
  );
};

export default HomePage;
