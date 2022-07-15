import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const  navigate = useNavigate()
  const handleLoign = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
     
    fetch('http://localhost:5000/login', {
      method: 'POST', 
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.success){
        const accessToken = data.accessToken;
        localStorage.setItem('accessToken', accessToken)
        navigate('/order')
      }
    })

    event.target.reset();
  };


  // style
  const a = { width: "75%", fontSize: "19px" };
  return (
    <div style={{ width: "700px", margin: "auto", textAlign: "center" }}>
      <form onSubmit={handleLoign}>
        <br />
        <input
          style={a}
          type=""
          name="email"
          id=""
          placeholder="User-Email"
          required
        />
        <br />
        <br />
        <input
          style={a}
          type="password"
          name="password"
          placeholder="User-password"
          id=""
        />{" "}
        <br /> <br />
        <input
          style={{
            width: "150px",
            textAlign: "center",
            padding: "8px",
            background: "black",
            color: "white",
          }}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
