import { useEffect, useState } from "react";
import { getRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  useEffect(() => setData(getRestaurants()), []);

  const filtered = data.filter((r) =>
    r.restaurantName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar setSearch={setSearch} setType={setType} setParking={setParking} />
      {filtered.map((r) => (
        <RestaurantCard key={r.restaurantID} data={r} />
      ))}
    </>
  );
};

export default CustomerDashboard;