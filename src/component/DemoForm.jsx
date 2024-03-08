import { useEffect, useRef, useState, useCallback } from "react";

const DemoForm = () => {
  const user = useRef({
    userID: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const [userData, setUserData] = useState([]);
  const [selectedData, setSelectedData] = useState({
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
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    user.current[e.currentTarget.id] = value;
  };
  const handleClick = (id) => {
    setSelectedData(userData.find((user) => user.userID === id));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form">
          <label>Name</label>
          <input
            id="name"
            type="text"
            key={selectedData.name}
            defaultValue={selectedData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label>Age</label>
          <input
            id="age"
            type="number"
            key={selectedData.age}
            defaultValue={selectedData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label>Phone</label>
          <input
            contentEditable="true"
            id="phone"
            key={selectedData.phone}
            defaultValue={selectedData.phone}
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label>Email</label>
          <input
            id="email"
            type="text"
            key={selectedData.email}
            defaultValue={selectedData.email}
            onChange={handleChange}
          />
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
