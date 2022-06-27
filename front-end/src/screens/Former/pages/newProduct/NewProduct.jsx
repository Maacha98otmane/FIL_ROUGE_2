import "./newProduct.css";
import React,{useState} from "react";
import {useMutation} from "react-query"; // get data && use mutation => post request 
import { useForm } from "react-hook-form";
import {addCourse} from "../../../../helpers/api/course";
import {storage} from "../../../../helpers/firebase";
import {Redirect} from "react-router-dom";
import { FilePond,registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
import MuiAlert from '@mui/material/Alert';
import {ref, uploadBytesResumable, getDownloadURL} from "@firebase/storage";
import { LinearProgress } from "@material-ui/core";
import { Typography } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function NewProduct() {
  const [files, setFiles] = useState  ([]);
  const [progress, setProgress] = useState  (0);
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const addCourseMutation = useMutation(addCourse, {
    onSuccess: () => {
    }
  });
  const onSubmit = async (data) => {
    const storageRef = ref(storage, `/file/${files[0].file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, files[0].file)

    
    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100)
      setProgress(prog)
    }, (err) => console.log(err), () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        data.photo = url
        console.log(data);
        addCourseMutation.mutate(data)
          setFiles([])
         reset()
         setProgress(0)
        })
      })
  };


  if (addCourseMutation.isSuccess) {
    return <Redirect to="/products" />};

  return (
    <>
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="addProductItem">
        <label className="" htmlFor="firstName">
            Image
          </label>
          <FilePond
              files={files}
              onupdatefiles={setFiles}
              required
              name = 'photo'
              labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
            />    
            <br/>
            <LinearProgress variant="determinate" value={progress} />
            <Typography  variant = "body2">
              {progress}%
            </Typography>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Apple Airpods" {...register("title", { required: true })} />
        </div>
        <div className="addProductItem">
          <label>Slug</label>
          <input type="text" placeholder="123" {...register("slug", { required: true })} />
        </div>
        <div className="addProductItem">
          <label>Level</label>
          <input type="text" placeholder="123" {...register("level", { required: true })} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="123" {...register("description", { required: true })} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="123" {...register("price", { required: true })} />
        </div>
        <div className="addProductItem">
          <label>Hours</label>
          <input type="number" placeholder="123" {...register("hours", { required: true })} />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <select defaultValue="" {...register("category", { required: true })}>
            <option value="" disabled>Select Category</option>
            <option value={122341}>Dev</option>
            <option value={9871239}>Marketing</option>
          </select>
        </div>
        <button className="addProductButton" disabled={progress>0}>Create</button>
      </form>
    </div>
    </>
  );
}
