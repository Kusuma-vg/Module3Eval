import { useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

const RestaurantForm = ({ refresh }) => {
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "Rajasthani",
    parkingLot: true,
    image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e"
  });

  const handleAdd = () => {
    if (!form.restaurantName || !form.address) {
      alert("Empty form not allowed");
      return;
    }

    const data = getRestaurants();
    data.push({ ...form, restaurantID: Date.now() });
    saveRestaurants(data);
    alert("Restaurant Added");
    refresh();
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />
      <input placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default RestaurantForm;