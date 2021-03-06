import React, { useState } from "react";
import logo from "../assets/images/logo4.png";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useStateValue } from "../ContextAPI/StateProvider";
import { useRouter } from 'next/router'

export default function Home() {

  const [ loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [{ response }, dispatch] = useStateValue();
  const router = useRouter()

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
});
// console.log( response);

function handleChange(e){
  setData({...data, [e.target.name]: e.target.value});
}

function submit(e){
  e.preventDefault()
console.log(data.firstName, data.lastName, data.email);
// console.log(`heyy`);

setLoading(true)
fetch("https://linkages-profiling-api.herokuapp.com/api/v1/auth/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName:data.firstName,
    lastName:data.lastName,
    email:data.email,
    password:data.password

  }),
})
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);
    if (res.user) {
      dispatch({
        type: "SET_RES",
        response:{
          user: res.user,
          token: res.accessToken
        },
      })
      setError(res.message);
      setLoading(false);
      router.push("/profileform")
      return;
    }
    // setUser(res.user);
    // localStorage.setItem("user", JSON.stringify(res));
    setLoading(false);
  })
  .catch((err) => {
    console.log(err);
    // setError(err.msg)
  });
}

  return (
    <div className={styles.container}>
      <div className=" d-flex justify-content-center align-items-center flex-column shadow-lg p-3 mb-5 bg-body rounded p-4">
        <Image src={logo} alt="logo" height="50" width="50" />
        <span style={{ color: "#04739B" }} className="h5 ">
          Sign up
        </span>
        <form onSubmit={submit}>
          <div className="mb-2">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <input
            type="submit"
            value={loading ? "loging in..." : "Login"}
            onChange={handleChange}
            style={{ backgroundColor: "#04739B" }}
            className="btn  rounded-0 border-0 w-100 text-light my-2"
          />
        </form>
        <span>{error}</span>
        <span>
          Already have an account{" "}
          <Link href="/logIn">
            <a>Log in</a>
          </Link>
        </span>
      </div>
    </div>
  );
}
