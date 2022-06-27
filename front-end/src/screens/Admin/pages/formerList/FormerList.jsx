import React from 'react'
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useQuery, useMutation} from "react-query"; // get data && use mutation => post request
import {useQueryClient} from "react-query"; 
import { getAllFormers,deleteFormer } from "../../../../helpers/api/former";


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

export default function FormerList() {
  const classes = useStyles();
  const queryClient = useQueryClient();

  const { 
    isLoading, 
    isError, 
    data=[],
  } = useQuery('formerList', getAllFormers);

  const removeFormerMutation = useMutation(deleteFormer, {
  onSuccess: () => {
      queryClient.invalidateQueries('formerList');
  }
  });

  return (
    <div className={classes.root}>
    <Container className={classes.container} maxWidth="lg">    
      <Paper className={classes.paper}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Formers List
            </Typography>
          </Box>
          <Link to="/newFormer">
          <Button variant="contained" color="primary">
                CREATE
          </Button>
          </Link>
        </Box>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Rating</TableCell>
              <TableCell align="left">createdAt</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {isLoading ? <CircularProgress /> : isError ? <Alert severity="error">This is an error message!</Alert>:
            data.map((former) => (
              <TableRow key={former._id}>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Avatar src={former.avatar} />
                  </Box>
                </TableCell>
                <TableCell align="left">{former.user.firstName} {former.user.lastName}</TableCell>
                <TableCell align="left">{former.user.email}</TableCell> 
                <TableCell align="left">{former.rating} <StarIcon sx={{color:"#FFD700"}}/></TableCell> 
                <TableCell align="left">{former.user.createdAt}</TableCell> 
                <TableCell align="center">
                  <ButtonGroup  color="primary" aria-label="outlined primary button group">
                  <Button variant="text">
                  <Link to={"/former/" + former._id}>
                    <EditIcon/>
                  </Link>
                  </Button>  
                  <Button variant="text">
                    <DeleteIcon onClick={() => removeFormerMutation.mutate({id:former._id})} >Del</DeleteIcon>
                  </Button>
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
