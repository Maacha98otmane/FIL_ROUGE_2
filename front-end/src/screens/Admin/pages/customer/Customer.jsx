import {
CalendarToday,
LocationSearching,
MailOutline,
PermIdentity,
PhoneAndroid,
Publish,
} from "@material-ui/icons";
import { Link,useParams } from "react-router-dom";
import { getCustomer } from "../../../../helpers/api/customer";
import {useQuery, useMutation} from "react-query"; // get data && use mutation => post request
import {useQueryClient} from "react-query";
import "./customer.css";

export default function Customer() {
const params = useParams();
const queryClient = useQueryClient();
const Id = params.userId;

const {
data=[],
} = useQuery(['customer', Id],() => {
const response = getCustomer(Id)
return response
})
console.log(data);

return (
<div className="user">
  <div className="userTitleContainer">
    <h1 className="userTitle">Edit Customer</h1>
    <Link to="/newCustomer">
    <button className="userAddButton">Create</button>
    </Link>
  </div>
  <div className="userContainer">
    <div className="userShow">
      {data.map((item, index) => (
        <>
      <div className="userShowTop">
        <img
          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="" className="userShowImg" />
        <div className="userShowTopTitle">
          <span className="userShowUsername">{item.user.firstName} {item.user.lastName}</span>
          <span className="userShowUserTitle">Software Engineer</span>
        </div>
      </div>
      <div className="userShowBottom">
        <span className="userShowTitle">Account Details</span>
        <div className="userShowInfo">
          <PermIdentity className="userShowIcon" />
          <span className="userShowInfoTitle">{item.user.firstName}@{item.user.lastName}</span>
        </div>
        <div className="userShowInfo">
          <CalendarToday className="userShowIcon" />
          <span className="userShowInfoTitle">10.12.1999</span>
        </div>
        <span className="userShowTitle">Contact Details</span>
        <div className="userShowInfo">
          <PhoneAndroid className="userShowIcon" />
          <span className="userShowInfoTitle">{item.user.phone}</span>
        </div>
        <div className="userShowInfo">
          <MailOutline className="userShowIcon" />
          <span className="userShowInfoTitle">{item.user.email}</span>
        </div>
        <div className="userShowInfo">
          <LocationSearching className="userShowIcon" />
          <span className="userShowInfoTitle">Safi | Maroc</span>
        </div>
      </div>
      </>
      ))}
    </div>
    <div className="userUpdate">
      <span className="userUpdateTitle">Edit</span>
      <form className="userUpdateForm">
        <div className="userUpdateLeft">
          <div className="userUpdateItem">
            <label>Username</label>
            <input type="text" placeholder="annabeck99" className="userUpdateInput" />
          </div>
          <div className="userUpdateItem">
            <label>Full Name</label>
            <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
          </div>
          <div className="userUpdateItem">
            <label>Email</label>
            <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput" />
          </div>
          <div className="userUpdateItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 67" className="userUpdateInput" />
          </div>
          <div className="userUpdateItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" className="userUpdateInput" />
          </div>
        </div>
        <div className="userUpdateRight">
          <div className="userUpdateUpload">
            <img className="userUpdateImg"
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" />
            <label htmlFor="file">
              <Publish className="userUpdateIcon" />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <button className="userUpdateButton">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
);
}