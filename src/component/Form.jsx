import { useRef, useState } from "react";
import Input from "./Input";
import DefaultTable from "./DefaultTable";
import { Button, FormControl, Paper } from "@mui/material";

const Form = () => {
  const user = useRef({
    id: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const [isUpdate, setIsUpdate] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate === false) {
      if (!user.current.name) return alert("Enter name");
      if (!user.current.age) return alert("Enter age");
      if (!user.current.phone) return alert("Enter Phone number");
      if (!user.current.email) return alert("Enter Email");
      const randomUserId = Math.ceil(Math.random() * 1000);
      user.current.id = randomUserId;
      setUserData([...userData, { ...user.current }]);
    } else {
      setUserData(
        userData.map((prev) =>
          prev.id === selectedUser.id
            ? {
                ...prev,
                ...user.current,
              }
            : prev
        )
      );
    }
  };

  // try to handleChange get the value from event and update it to ref
  const handleOnInputChange = (e) => {
    const value = e.currentTarget.value;
    user.current[e.currentTarget.id] = value;
  };

  const handleUpdateClick = (id) => {
    user.current.id = id;
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
          <FormControl onSubmit={(e) => handleSubmit(e)} className="form">
            <Input
              label={"Name"}
              name={"name"}
              defaultValue={selectedUser.name}
              onInputChange={handleOnInputChange}
            />
            <Input
              label={"Age"}
              name={"age"}
              maxLength="2"
              defaultValue={selectedUser.age}
              onInputChange={handleOnInputChange}
            />
            <Input
              label={"Phone"}
              name={"phone"}
              type={"number"}
              defaultValue={selectedUser.phone}
              onInputChange={handleOnInputChange}
            />
            <Input
              label={"Email"}
              name={"email"}
              type={"email"}
              defaultValue={selectedUser.email}
              onInputChange={handleOnInputChange}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              type="submit"
              className="TextField"
            >
              {isUpdate ? "Update" : "Submit"}
            </Button>
          </FormControl>
        </Paper>
      </div>
      {userData && (
        <DefaultTable
          rowHeader={["User ID", "Name", "Age", "Phone", "Email"]}
          rows={userData}
          userObj={user}
          onUpdateClick={handleUpdateClick}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Form;
