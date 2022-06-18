import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ListURLs = ({ urlsHaveChanged, setUrlsHaveChanged }) => {
  const [allUrls, setAllUrls] = useState([]);

  useEffect(() => {
    const getAllURLs = async () => {
      const response = await fetch("/urls");
      const data = await response.json();
      setAllUrls(data);
    };
    if (urlsHaveChanged) {
      getAllURLs();
      setUrlsHaveChanged(false);
    }
  });

  return (
    <Box>
      {allUrls.map((url) => {
        return (
          <Box key={url.id} py={2}>
            <Typography>ID: {url.id}</Typography>
            <Typography>Original URL: {url.url}</Typography>
            <Typography>CreatedAt: {Date(url.createdAt)}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ListURLs;
