import { useRef, useState } from "react";
import Input from "./Input";

const Form = () => {
  const user = useRef({
    userID: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.current.name) return alert("Enter name");
    if (!user.current.age) return alert("Enter age");
    if (!user.current.phone) return alert("Enter Phone number");
    if (!user.current.email) return alert("Enter Email");
    const id = Math.ceil(Math.random() * 1000);
    setUserData([...userData, { ...user.current, userID: id }]);
  };

  // try to handleChange get the value from event and update it to ref
  const handleOnInputChange = (e) => {
    const value = e.currentTarget.value;
    user.current[e.currentTarget.id] = value;
  };

  const handleClick = (id) => {
    setSelectedUser(userData.find((user) => user.userID === id));
    console.log(selectedUser);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          label={"Name"}
          name={"name"}
          defaultValue={selectedUser.name}
          onInputChange={handleOnInputChange}
        />
        <Input
          label={"Age"}
          name={"age"}
          type={"number"}
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
          defaultValue={selectedUser.email}
          onInputChange={handleOnInputChange}
        />
        <div className="form">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {userData.map((user) => (
          <li onClick={() => handleClick(user.userID)} key={user.userID}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Form;
