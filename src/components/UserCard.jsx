import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={user.avatar} alt={user.first_name} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate("/edit", { state: { user } })}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
