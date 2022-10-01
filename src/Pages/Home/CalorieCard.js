// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Sample from "../../Assets/Images/sample.jpg";

// const CalorieCard = ({ calorie, refetch }) => {
//   const navigate = useNavigate();

//   const { _id, name, quantity, calorieCount, img, totalCalorieCount } = calorie;

//   const handleUpdate = (_id) => {
//     navigate(`/updateCalorie/${_id}`);
//   };
//   const handleDelete = (id) => {
//     //console.log(id);

//     const url = `https://calories-new-server-8v018vu3g-7rahib.vercel.app/${id}`;
//     fetch(url, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount > 0) {
//           alert("deleted successfully");
//           refetch();
//         }
//       });
//   };

//   return (
//     <div className="col col-12 col-md-12 col-lg-6 my-3">
//       <div class="card float-right mb-2">
//         <div class="row">
//           <div class="col-sm-5">
//             {calorie?.img ? (
//               <img
//                 class="d-block img-fluid"
//                 width={250}
//                 height={200}
//                 src={img}
//                 alt=""
//               />
//             ) : (
//               <img
//                 class="d-block img-fluid"
//                 src={Sample}
//                 width={250}
//                 height={200}
//                 alt=""
//               />
//             )}
//           </div>
//           <div class="col-sm-7 pt-2 pb-2">
//             <div class="card-block">
//               <p className="fw-semibold fs-5">{name}</p>
//               <p>Calorie(per serving): {calorieCount}</p>
//               <p>Quantity: {quantity}</p>
//               <p>Total Calorie: {totalCalorieCount}</p>
//               <br />
//               <button
//                 onClick={() => handleUpdate(_id)}
//                 class="loginBtn ps-3 pe-3 pt-1 pb-1"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={() => handleDelete(_id)}
//                 class="loginBtn ps-3 pe-3 pt-1 pb-1 ms-2"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalorieCard;
