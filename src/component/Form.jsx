import { useRef, useState, useEffect } from "react";

const Form = () => {
  const user = useRef({
    id: "",
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.current.name) return alert("Enter name");
    if (!user.current.age) return alert("Enter age");
    if (!user.current.phone) return alert("Enter Phone number");
    if (!user.current.email) return alert("Enter Email");
    const id = Math.ceil(Math.random() * 1000);
    setData([...data, { ...user.current, id: id }]);
  };

  // try to handleChange get the value from event and update it to ref
  const handleOnChange = (e, id) => {
    const value = e.currentTarget.value;
    user.current[id] = value;
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form">
          <label>Fname</label>
          <input
            id="name"
            type="text"
            onChange={(e) => handleOnChange(e, e.currentTarget.id)}
          />
        </div>
        <div className="form">
          <label>Age</label>
          <input
            id="age"
            type="number"
            onChange={(e) => handleOnChange(e, e.currentTarget.id)}
          />
        </div>
        <div className="form">
          <label>Phone</label>
          <input
            id="phone"
            type="number"
            onChange={(e) => handleOnChange(e, e.currentTarget.id)}
          />
        </div>
        <div className="form">
          <label>Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => handleOnChange(e, e.currentTarget.id)}
          />
        </div>
        <div className="form">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Form;
