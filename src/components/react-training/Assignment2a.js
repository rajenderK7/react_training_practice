import { useState } from "react";
import "./Assignment2a.css";
import NestedExampCont from "./NestedExampCont";

const Assignment2a = () => {
  const [enteredString, setEnteredString] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredObject, setEnteredObject] = useState("");
  const changeStringHandler = (event) => {
    setEnteredString(event.target.value);
  };
  const changeNumberHandler = (event) => {
    setEnteredNumber(event.target.value);
  };
  const changeObjectHandler = (event) => {
    setEnteredObject(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredString.trim().length === 0 ||
      enteredNumber.trim().length === 0 ||
      enteredObject.length === 0
    ) {
      return;
    }
    let formObject = {
      string: enteredString,
      number: enteredNumber,
      id: enteredObject,
    };
    console.log(enteredNumber, enteredString, formObject);
    setEnteredString("");
    setEnteredNumber("");
    setEnteredObject("");
  };

  return (
    <div className="my-form container w-75 my-3 rounded shadow border border-secondary">
      <form className="p-2" onSubmit={formSubmitHandler}>
        <div>
          <h1>State Examples</h1>
        </div>
        <div className="container">
          <label className="row form-label">String</label>
          <input
            type="text"
            onChange={changeStringHandler}
            className="row form-control"
            value={enteredString}
          ></input>
        </div>
        <div className="container">
          <label className="row form-label">Number</label>
          <input
            type="number"
            onChange={changeNumberHandler}
            className="row form-control"
            value={enteredNumber}
          ></input>
        </div>
        <div className="container">
          <label className="row form-label">Unique ID</label>
          <input
            type="text"
            onChange={changeObjectHandler}
            className="row form-control"
            value={enteredObject}
            placeholder="#78i"
          ></input>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mt-2 mb-1">
            Create
          </button>
        </div>
      </form>
      <div>
        {/* This is nested component */}
        <NestedExampCont></NestedExampCont>
      </div>
    </div>
  );
};

export default Assignment2a;
