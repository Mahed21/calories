import { format } from "date-fns";
import moment from "moment/moment";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useQuery } from "react-query";
import UseAuth from "../../Context/UseAuth";
import TotalCalorieRow from "./TotalCalorieRow";

const TotalCalorie = () => {
  const user = UseAuth();
  const email = user?.user?.email;

  const [selected, setSelected] = useState(new Date());
  console.log(moment(selected).format("MMM Do YY"));
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  const {
    data: calories,
    isLoading,
    refetch,
  } = useQuery("calories", () =>
    fetch(`http://localhost:5000/calories/${email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h3 className="text-center">All Calorie Intakes</h3>
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
            calories.map((calorie, index) => (
              <TotalCalorieRow
                key={calorie._id}
                calorie={calorie}
                refetch={refetch}
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
