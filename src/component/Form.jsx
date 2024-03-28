import { useRef, useState } from "react";
import Input from "./Input";
import DefaultTable from "./DefaultTable";
import { Button, Paper } from "@mui/material";

const paperStyle = {
  height: "400px",
  width: "400px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};
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

  const [isUpdate, setIsUpdate] = useState(false);

  // try to handleChange get the value from event and update it to ref
  const handleOnChange = (e) => {
    const value = e.currentTarget.value;
    setUser({ ...user, [e.currentTarget.id]: value });
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
    } else {
      setUserData(
        userData.map((prev) =>
          prev.id === user.id
            ? {
                ...prev,
                ...user,
              }
            : prev
        )
      );
    }
    setUser({ id: "", name: "", age: "", phone: "", email: "" });
  };

  const handleUpdateClick = (id) => {
    setUser(userData.find((user) => user.id === id));
    setIsUpdate(true);
  };
  const handleDelete = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="form">
        <Paper elevation={10} square={false} style={paperStyle}>
          <form onSubmit={handleSubmit} className="form">
            <h3>Add Users</h3>
            <Input
              label={"Name"}
              value={user.name}
              id={"name"}
              onChange={handleOnChange}
            />
            <Input
              label={"Age"}
              id={"age"}
              value={user.age}
              onChange={handleOnChange}
              inputProps={{ maxLength: 2, max: 99 }}
            />
            <Input
              label={"Phone"}
              id={"phone"}
              value={user.phone}
              m
              onChange={handleOnChange}
              inputProps={{ maxLength: 10, max: 9999999999 }}
            />
            <Input
              label={"Email"}
              id={"email"}
              type={"email"}
              value={user.email}
              onChange={handleOnChange}
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
