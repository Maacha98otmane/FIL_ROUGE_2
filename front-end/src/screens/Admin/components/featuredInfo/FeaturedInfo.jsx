import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

// import { countFormers } from "../../../../helpers/api/former";
// import { countCustomers } from "../../../../helpers/api/customer";
// import {useQuery} from "react-query"; // get data && use mutation => post request

export default function FeaturedInfo() {
  // const {
  //   isError,
  //   data,
  // } = useQuery('countFormers', countFormers);
  // const {
  //   isError: isErrorCustomers,
  //   data: dataCustomers,
  // } = useQuery('countCustomers', countCustomers);
  // console.log(dataCustomers);
  // console.log(data);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Customers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {/* { isErrorCustomers ? (
              9999
            ) : (
              dataCustomers.count
            )} */}
            9
          </span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Formers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {/* { isError ? (
              9999
            ) : (
              data.count
            )} */}
            17          </span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">25</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
