import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "./../../Redux/news/actions";
import CardReader from "./Card";
import { Box } from "@mui/material";

function Body() {
  const URL = process.env.REACT_APP_API_KEY;
  const state = useSelector((state) => state.newsReducer);
  console.log(state, "state");
  const dispatch = useDispatch();
  const value = "top-headlines";
  const params = {
    from: new Date().toLocaleDateString(),
    country: "in",
    sortBy: "popularity",
    apiKey: URL,
  };

  // useEffect(()=>{
  //   dispatch(getAllNews(value, params));
  // },[])
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 68px)",
        justifyContent: "center",
        display: "flex",
        alignItems:"center",
      }}
    >
      <CardReader />
    </Box>
  );
}

export default Body;
