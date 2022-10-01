import React from "react";
import { useQuery } from "react-query";
import UseAuth from "../../Context/UseAuth";
import CalorieCard from "./CalorieCard";

const RecentCalories = () => {
  // const user = UseAuth();
  // const email = user?.user?.email;

  // const { data: calories, isLoading, refetch } = useQuery('calories', () => fetch(`http://localhost:5000/calories/${email}`).then(res => res.json()))

  // if (isLoading) {
  //     return <div>Loading</div>
  // }

  // console.log(calories);
  return (
    <div>
      {/* <h3 className='text-center'>All Calorie Intakes</h3>
            <div className='m-3'>
                <div className='row'>
                    {
                        email ?
                            calories.slice(0, 4).map((calorie, index) => <CalorieCard
                                key={calories._id}
                                calorie={calorie}
                                refetch={refetch}
                            ></CalorieCard>)
                            : <div>
                                Login to View Data
                            </div>
                    }
                </div>
            </div> */}
    </div>
  );
};
export default RecentCalories;
