import { useEffect, useRef, useState } from "react";
import Input from "./Input";

const DemoForm = () => {
  const user = useRef({
    userID: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const [userData, setUserData] = useState([]);
  const [userID, setUserID] = useState("");
  const [selectedData, setSelectedData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  console.log(selectedData);

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
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    user.current[e.currentTarget.id] = value;
  };

  const handleClick = (id) => {
    setUserID(id);
    // console.log(userID);
    // console.log(userData.find((user) => user.userID === selectedUser.userID));
    console.log(userData.find((user) => user.userID === userID));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form">
          <label>Name</label>
          <input
            id="name"
            type="text"
            defaultValue={selectedData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label>Age</label>
          <input id="age" type="number" onChange={handleChange} />
        </div>
        <div className="form">
          <label>Phone</label>
          <input id="phone" type="number" onChange={handleChange} />
        </div>
        <div className="form">
          <label>Email</label>
          <input id="email" type="text" onChange={handleChange} />
        </div>
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

export default DemoForm;
