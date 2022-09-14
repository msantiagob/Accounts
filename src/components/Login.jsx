import { useNavigate } from "react-router-dom";
import React from "react";

const Login = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      console.log("error");
      return;
    }
    if (email === "challenge@alkemy.org" && password === "asd") {
      sessionStorage.setItem("token", email);
      return navigate("/main/accounts");
    }
  };
  return (
    <div className="container ">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label ">
            Email address
          </label>
          <input
            type="email"
            className="form-control "
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
