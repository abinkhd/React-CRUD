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

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.current.name) return alert("Enter name");
    if (!user.current.age) return alert("Enter age");
    if (!user.current.phone) return alert("Enter Phone number");
    if (!user.current.email) return alert("Enter Email");
    const id = Math.ceil(Math.random() * 1000);
    setData([...data, { ...user.current, userID: id }]);
    console.log(data);
  };

  // try to handleChange get the value from event and update it to ref
  const handleOnInputChange = (e) => {
    const value = e.currentTarget.value;
    user.current[e.currentTarget.id] = value;
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          label={"Name"}
          name={"name"}
          onInputChange={handleOnInputChange}
        />
        <Input
          label={"Age"}
          name={"age"}
          type={"number"}
          onInputChange={handleOnInputChange}
        />
        <Input
          label={"Phone"}
          name={"phone"}
          type={"number"}
          onInputChange={handleOnInputChange}
        />
        <Input
          label={"Email"}
          name={"email"}
          onInputChange={handleOnInputChange}
        />
        <div className="form">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {data.map((user) => (
          <li key={user.userID}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Form;
