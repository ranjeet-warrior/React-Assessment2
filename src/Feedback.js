import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Submits from './Submit';
function Feedback() {
  const [user, setUser] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState();
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([{ name: user, dept: department, rate: rating, id: uuidv1()}, ...data]);
        setUser('');
        setDepartment('');
        setRating();
  };
  return (
    <React.Fragment>
      <div className="feedback__container">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form action="" onSubmit={submitHandler}>

          <div className="input__container">
                <label htmlFor="">Name - </label>
                <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required/>
          </div>

          <div className="input__container">
                <label htmlFor="">Department -</label>
                <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required/>
          </div>

          <div className="input__container">
                <label htmlFor="">Rating -</label>
                <input
                type="number"
                value={rating}
                max={10}
                min={0}
                onChange={(e) => setRating(e.target.value)}
                required/>
          </div>

          <input type="submit" className="submitbtn" />
        </form>
      </div>
      <Submits submitData={data}/>
    </React.Fragment>
  );
}

export default Feedback;