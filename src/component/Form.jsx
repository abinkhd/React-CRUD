import { useEffect, useRef, useState, useCallback } from "react";
import DefaultInput from "./DefaultInput";
import DefaultTable from "./DefaultTable";
import { Button, FormControl, Paper } from "@mui/material";

const Form = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const button = useRef(null);

  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const [isUpdate, setIsUpdate] = useState(false);

  // try to handleChange get the value from event and update it to ref
  const handleOnInputChange = (e) => {
    const value = e.currentTarget.value;
    user[e.currentTarget.id] = value;
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name) return alert("Enter name");
    if (!user.age) return alert("Enter age");
    if (!user.phone) return alert("Enter Phone number");
    if (!user.email) return alert("Enter Email");
    if (isUpdate === false) {
      const randomUserId = Math.ceil(Math.random() * 1000);
      user.id = randomUserId;
      setUserData([...userData, { ...user }]);
      setSelectedUser({
        id: null,
        name: null,
        age: null,
        phone: null,
        email: null,
      });
      setUser({
        id: "",
        name: "",
        age: "",
        phone: "",
        email: "",
      });
    } else {
      setUserData(
        userData.map((prev) =>
          prev.id === selectedUser.id
            ? {
                ...prev,
                ...user,
              }
            : prev
        )
      );
    }
  };

  const handleUpdateClick = (id) => {
    user.id = id;
    setUser(userData.find((user) => user.id === id));
    setSelectedUser(userData.find((user) => user.id === id));
    console.log(selectedUser);
    setIsUpdate(true);
  };
  const handleDelete = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="form">
        <Paper
          elevation={10}
          square={false}
          style={{
            height: "400px",
            width: "400px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit} className="form">
            <DefaultInput
              label={"Name"}
              defaultValue={selectedUser.name}
              name={"name"}
              onInputChange={handleOnInputChange}
            />
            <DefaultInput
              label={"Age"}
              name={"age"}
              maxLength="2"
              defaultValue={selectedUser.age}
              onInputChange={handleOnInputChange}
            />
            <DefaultInput
              label={"Phone"}
              name={"phone"}
              type={"number"}
              defaultValue={selectedUser.phone}
              onInputChange={handleOnInputChange}
            />
            <DefaultInput
              label={"Email"}
              name={"email"}
              type={"email"}
              defaultValue={selectedUser.email}
              onInputChange={handleOnInputChange}
            />
            <Button
              ref={button}
              variant="contained"
              type="submit"
              className="TextField"
            >
              {isUpdate ? "Update" : "Submit"}
            </Button>
          </form>
        </Paper>
      </div>
      {userData.length > 0 ? (
        <DefaultTable
          rowHeader={["User ID", "Name", "Age", "Phone", "Email"]}
          rows={userData}
          userObj={user}
          onUpdateClick={handleUpdateClick}
          onDelete={handleDelete}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Form;
