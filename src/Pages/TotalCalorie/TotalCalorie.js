import { useAuth0 } from "@auth0/auth0-react";
import { format } from "date-fns";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import TotalCalorieRow from "./TotalCalorieRow";

const TotalCalorie = () => {
  const { user } = useAuth0()
  const email = user?.email;
  let arrayList = [];

  const [selected, setSelected] = useState(new Date());
  const [calories, setCalories] = useState([]);
  let searchDate = moment(selected).format("MMM Do YY");
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>you picked {format(selected, "PP")}.</p>;
  }

  useEffect(() => {
    fetch(`https://newcalorie.onrender.com/calories/${email}`).then((res) =>
      res.json().then((data) => {
        arrayList = data.filter((data) => data.date === searchDate);
        setCalories(arrayList);
        // console.log("after filter", arrayList);
        // console.log("after filter length", arrayList.length);
      })
    );
  }, [searchDate, calories]);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-2">All Calorie Intakes</h3>
      <div className="d-flex justify-content-center">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </div>

      <div className="m-3">
        <div className="row ">
          {email ? (
            calories?.map((calorie, index) => (
              <TotalCalorieRow
                key={calorie._id}
                calorie={calorie}
              ></TotalCalorieRow>
            ))
          ) : (
            <div>Login to view Data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalCalorie;
