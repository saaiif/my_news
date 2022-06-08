import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Detail from "./Detail";
import Pagination from "../Pagination/Pagination";
import useWindowDimensions from "./WindowDimensions";
import { useSelector } from "react-redux";
import SnackbarMessage from "../../Snackbar/Snackbar";
import { checkEmptyArray } from "../../Utils/Common";

export default function CardReader() {
  const { newsdetails, searchValue } = useSelector(
    (state) => state.newsReducer ?? {}
  );
  const { width } = useWindowDimensions();
  // let pageSize = 3;
  const arr = Array.from(Array(6));
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [detailsData, setDetailsData] = React.useState({});
  const [pageSize, setPageSize] = React.useState(12);
  const [currentPage, setCurrentPage] = React.useState(1);

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize]);

  const searchMode = () => {
    const newData = [...newsdetails];
    if (searchValue) {
      const filterData = newData?.filter((el) =>
        Object.values(el)
          .join("")
          ?.toLowerCase()
          .includes(searchValue?.toLowerCase())
      );
      return setData(filterData);
    } else {
      return setData(newData);
    }
  };

  React.useEffect(() => {
    searchMode();
  }, [searchValue]);

  React.useEffect(() => {
    if (width <= 600) {
      setPageSize(1);
    } else {
      setPageSize(12);
    }
    return () => window.removeEventListener("resize", useWindowDimensions);
  }, [width]);

  const handleClickOpen = (e, data) => {
    e.preventDefault();
    setOpen(true);
    setDetailsData(data);
  };
  const handleClose = () => {
    setOpen(false);
    setDetailsData({});
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: "50px 60px",
      }}
      className='card_wrapper'
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {checkEmptyArray(currentTableData)
          ? currentTableData?.map((el, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card
                  className='animate fadeInDown one'
                  sx={{ boxShadow: "0px 0px 15px 1px #9eb23b" }}
                >
                  <CardMedia
                    component='img'
                    height='180'
                    image={el.urlToImage}
                    alt='green iguana'
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        width: "100%",
                        height: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      gutterBottom
                      variant='h5'
                      component='div'
                    >
                      {el.title}
                    </Typography>
                    {/* <Typography variant='body2' color='text.secondary'>
                  {el.description}
                </Typography> */}
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    {/* <Button size='small'>Share</Button> */}
                    <Button
                      sx={{ color: "#9EB23B" }}
                      onClick={(e) => handleClickOpen(e, el)}
                    >
                      Details
                    </Button>
                    <Button sx={{ color: "#9EB23B" }}>
                      {/* Published At:<br></br> */}
                      {new Date(el.publishedAt)?.toLocaleString()}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : checkEmptyArray(newsdetails)
          ? "No Records Found"
          : "Loading.."}
      </Grid>
      <Pagination
        className='course_card_pagination_bar'
        currentPage={currentPage}
        totalCount={data?.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {open && (
        <Detail
          data={detailsData}
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      )}
      <SnackbarMessage />
    </Box>
  );
}
