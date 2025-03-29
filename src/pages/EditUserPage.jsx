import { useState } from "react";
import { updateUser } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";

const EditUserPage = () => {
  const location = useLocation();
  const user = location.state.user;
  const [formData, setFormData] = useState(user);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, formData);
      alert("User Updated Successfully");
      navigate("/users");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required />
      <input type="text" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} required />
      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUserPage;
