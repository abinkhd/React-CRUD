import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  function getCurrentUser() {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (error) {
      return null;
    }
  }
  return getCurrentUser();
};

export default useAuth;
