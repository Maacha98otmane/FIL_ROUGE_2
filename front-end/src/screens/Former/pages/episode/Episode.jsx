import { useParams } from "react-router-dom";
import "./episode.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import {useQuery, useMutation} from "react-query"; // get data && use mutation => post request
import {useQueryClient} from "react-query";
import { Publish } from "@material-ui/icons";
import { getCourse } from "../../../../helpers/api/course";

export default function Episode() {
const params = useParams();
const queryClient = useQueryClient();
const Id = params.productId;

const {
data=[],
} = useQuery(['course', Id],() => {
const response = getCourse(Id)
return response
})
console.log(data);
return (
<div className="product">
    {data.map((item, index) => (
    <>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={item.photo} alt="" className="productInfoImg" />
                    <span className="productName">{item.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">{item._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">24</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">Yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Price:</span>
                        <span className="productInfoValue">{item.price}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Course Name</label>
                    <input type="text" placeholder={item.title} />
                    <label>Course Slug</label>
                    <input type="text" placeholder={item.slug} />
                    <label>Course Level</label>
                    <input type="text" placeholder={item.level} />
                    <label>Course Description</label>
                    <input type="text" placeholder={item.description} />
                    <label>Course Price</label>
                    <input type="text" placeholder={item.price} />
                    <label>Category</label>
                    <select name="inStock" id="idStock">
                        <option value={122341}>Dev</option>
                        <option value={9871239}>Marketing</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={item.photo}
                            alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish />
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </>
    ))}
</div>
);
}