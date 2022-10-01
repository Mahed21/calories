// import React from "react";
// import { useQuery } from "react-query";
// import UseAuth from "../../Context/UseAuth";
// import CalorieCard from "./CalorieCard";

// const RecentCalories = () => {
//   const { user } = UseAuth();
//   const email = user?.email;

//   const {
//     data: calories,
//     isLoading,
//     refetch,
//   } = useQuery("calories", () =>
//     fetch(`http://localhost:5000/calories/${email}`).then((res) => res.json())
//   );

//   if (isLoading) {
//     return <div>Loading</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <div className="m-3">
//         <div className="row">
//           {email || calories ? (
//             calories
//               ?.slice(0, 4)
//               .reverse()
//               .map((calorie, index) => (
//                 <CalorieCard
//                   key={calorie._id}
//                   calorie={calorie}
//                   refetch={refetch}
//                 ></CalorieCard>
//               ))
//           ) : (
//             <div>Login to View Data</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default RecentCalories;
