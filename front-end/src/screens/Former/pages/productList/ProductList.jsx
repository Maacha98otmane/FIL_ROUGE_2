import "./productList.css";
import React from 'react'
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import {useQuery} from "react-query"; // get data && use mutation => post request
import { getAllCourses } from "../../../../helpers/api/course";
import { Button, ButtonGroup } from "@material-ui/core";
import VisibilityIcon from '@mui/icons-material/Visibility';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProductList() {
  const classes = useStyles();

  const { 
    isLoading, 
    isError, 
    data=[],
  } = useQuery('courseList', getAllCourses);
  console.log(data);

  return (
    <div className={classes.root}>
    <Container className={classes.container} maxWidth="lg">    
      <Paper className={classes.paper}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Courses List
            </Typography>
          </Box>
          <Link to="/newproduct">
          <Button variant="contained" color="primary">
                CREATE
          </Button>
          </Link>
        </Box>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Slug</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {isLoading ? <CircularProgress align="center" /> : isError ? <Alert align="center" severity="error">This is an error message!</Alert>:
            data.map((course) => (
              <TableRow key={course._id}>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Avatar src={course.photo} />
                  </Box>
                </TableCell>
                <TableCell align="left">{course.title}</TableCell>
                <TableCell align="left">{course.slug}</TableCell> 
                <TableCell align="left">{course.description}</TableCell> 
                <TableCell align="left">{course.price}</TableCell> 
                <TableCell align="center">
                  <ButtonGroup  color="primary" aria-label="outlined primary button group">
                  <Link to={"/product/" + course._id}>
                    <VisibilityIcon />
                  </Link>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </Container>
      </div>
  );
}
