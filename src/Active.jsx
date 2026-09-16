import { useState, Activity } from "react";
import Home from "./Home";
import Form from "./Form";

function Active() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Activity in react</h1>
      <button onClick={() => setShow(true)}>Home</button>
      <br></br>
      <button onClick={() => setShow(false)}>Form</button>
      <br></br>
      {/* {show ? <Home /> : <Form />} */}
      <Activity mode={show ? "visible" : "hidden"}>
        <Home />
      </Activity>
      <Activity mode={!show ? "visible" : "hidden"}>
        <Form />
      </Activity>
    </>
  );
}

export default Active;
