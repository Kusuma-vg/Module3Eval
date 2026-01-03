import { useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";
import RestaurantForm from "../components/RestaurantForm";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [parking, setParking] = useState("");

  const refresh = () => setData(getRestaurants());

  useEffect(refresh, []);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete?")) return;
    const updated = data.filter((r) => r.restaurantID !== id);
    saveRestaurants(updated);
    alert("Deleted Successfully");
    setData(updated);
  };

  const filtered = data.filter((r) =>
    r.restaurantName.toLowerCase().includes(search.toLowerCase()) &&
    (!type || r.type === type) &&
    (!parking || String(r.parkingLot) === parking)
  );

  return (
    <>
      <Navbar setSearch={setSearch} setType={setType} setParking={setParking} />
      <RestaurantForm refresh={refresh} />
      {filtered.map((r) => (
        <RestaurantCard key={r.restaurantID} data={r} isAdmin onDelete={handleDelete} />
      ))}
    </>
  );
};

export default AdminDashboard;