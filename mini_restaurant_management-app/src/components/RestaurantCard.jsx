import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ data, isAdmin, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={data.image} width="150" />
      <h3>{data.restaurantName}</h3>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>

      {isAdmin && (
        <>
          <button onClick={() => navigate(`/admin/restaurants/update/${data.restaurantID}`)}>
            Update
          </button>
          <button onClick={() => onDelete(data.restaurantID)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default RestaurantCard;