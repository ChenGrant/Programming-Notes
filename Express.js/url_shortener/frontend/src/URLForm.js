import React, { useState } from "react";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ListURLs from "./ListURLs";

const URLForm = () => {
  const [url, setURL] = useState("");
  const [sendingFormData, setSendingFormData] = useState(false);
  const [urlIsInvalid, setUrlIsInvalid] = useState(false);
  const [urlsHaveChanged, setUrlsHaveChanged] = useState(true);

  const validURL = (str) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const sendFormData = async (e) => {
    e.preventDefault();
    if (!validURL(url)) {
      setUrlIsInvalid(true);
      return;
    }
    setSendingFormData(true);
    setUrlIsInvalid(false);
    const response = await fetch("/urls/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url }),
    });

    const responseData = await response.json();
    setUrlsHaveChanged(true);

    if (url === responseData.url) {
      console.log("POST request success");
      setURL("");
      setUrlIsInvalid(false);
      setSendingFormData(false);
      return;
    }
    console.log("POST request failure");
    setUrlIsInvalid(true);
    setSendingFormData(false);
  };

  return (
    <Box p={5}>
      <Typography>URL Shortener</Typography>
      <form onSubmit={sendFormData}>
        <Box display="flex" gap={2} alignItems="center">
          <Box width="400px">
            <TextField
              label="URL"
              variant="outlined"
              fullWidth
              onChange={(e) => setURL(e.target.value)}
              value={url}
            />
          </Box>
          {sendingFormData ? (
            <CircularProgress />
          ) : (
            <Button type="submit" variant="contained" sx={{ height: "56px" }}>
              Shorten URL
            </Button>
          )}
        </Box>
      </form>
      {urlIsInvalid && (
        <Typography sx={{ color: "red" }}>Invalid URL</Typography>
      )}
      <ListURLs
        urlsHaveChanged={urlsHaveChanged}
        setUrlsHaveChanged={setUrlsHaveChanged}
      />
    </Box>
  );
};

export default URLForm;
