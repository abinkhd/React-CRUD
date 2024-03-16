import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <button
      className="btn btn-link"
      onClick={handleLogout}
      style={{ marginRight: 20, paddingTop: 15, color: "white" }}
    >
      Logout
    </button>
  );
};
