import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </td>
              <td>
                <Button variant="contained">Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
