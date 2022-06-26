import React from "react";
import { useForm } from "react-hook-form";
import {addCustomer} from "../../../../helpers/api/customer";
import {useMutation} from "react-query"; // get data && use mutation => post request 
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./newFormer.css";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NewFormer() {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const addCustomerMutation = useMutation(addCustomer, {
    onSuccess: () => {
      setOpen(true);
    }
  });

  const onSubmit = (data) => {
    addCustomerMutation.mutate(data)
    reset();
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Customer added successfully
        </Alert>
      </Snackbar>
    <div className="newUser">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="newUserItem">
          <label htmlFor="FirstName">FirstName</label>
          <input type="text" placeholder="john" {...register("firstName", { required: true })} />
          {errors.firstName?.type === 'required' && "First name is required"}
        </div>
        <div className="newUserItem">
          <label htmlFor="LastName">LastName</label>
          <input type="text" placeholder="John Smith" {...register("lastName", { required: true })} />
          {errors.lastName?.type === 'required' && "First name is required"}
        </div>
        <div className="newUserItem">
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="john@gmail.com" {...register("email", { required: true })} />
          {errors.email?.type === 'required' && "Email is required"}
        </div>
        <div className="newUserItem">
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="password" {...register("password", { required: true })} />
        </div>
        <div className="newUserItem">
          <label htmlFor="Phone">Phone</label>
          <input type="text" placeholder="+1 123 456 78" {...register("phone", { required: true })} />
        </div>
        <div className="newUserItem">
          <label htmlFor="Address">Address</label>
          <input type="text" placeholder="New York | USA" {...register("address", { required: true })} />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
    </>
  );
}
