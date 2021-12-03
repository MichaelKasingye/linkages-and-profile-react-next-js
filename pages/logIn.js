import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo4.png";
import Image from "next/image";
import Link from "next/link";
import { useStateValue } from "../ContextAPI/StateProvider";
import { useRouter } from 'next/router'

import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {

  const [ loading, setLoading] = useState(false);
  const [{ response }, dispatch] = useStateValue();
  const [error, setError] = useState("");
  const router = useRouter()
  const [infoData, setInfoData] = useState("");
  const [info, setInfo] = useState("");

  const [data, setData] = useState({
    email:"",
    password:""
});

function handleChange(e){
  setData({...data, [e.target.name]: e.target.value});
}
// console.log( typeof response.token);

function submit(e){
  e.preventDefault()
// console.log( data.email, data.password);
// console.log(`heyy`);

setLoading(true)
fetch("https://linkages-profiling-api.herokuapp.com/api/v1/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email:data.email,
    password:data.password
  }),
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
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
      // router.push("/profileform")
      return;
    }
    // setUser(res.user);
    setLoading(false);
  })
  .catch((err) => {
    console.log(err);
    // setError(err.msg)
  });
}

useEffect(() => {
  if(response){

  axios.get(`https://linkages-profiling-api.herokuapp.com/api/v1/userProfile`)
    .then((res) => {
      const userInfo = res.data.filter(data => data.user.email == response.user.email)
      setInfo(userInfo);
      console.log(response);
      console.log(userInfo);

      if (res.data) {
        // setInfoData(res.data)

      return;
      }
    })
  }
}, [response])

console.log(info[0]);
  return (
    <div className={styles.container}>
      <div className=" d-flex justify-content-center align-items-center flex-column shadow-lg p-3 mb-5 bg-body rounded p-4">
        <Image src={logo} alt="logo" height="50" width="50" />
        <span style={{ color: "#04739B" }} className="h5">
          Sign up
        </span>
        <form onSubmit={submit}>
          <div className="mb-2">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
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
              id="exampleInputPassword1"
              required
            />
          </div>

          <input
            type="submit"
            value={loading ? "logingin..." : "Login"}
            style={{ backgroundColor: "#04739B" }}
            className="btn  rounded-0 border-0 w-100 text-light my-2"
          />
        </form>
        {response && 
        <span>Welcome {response.user.firstName}</span>
        }
        {info[0] && 
           <Link href="/userProfile/[editprofileId]" as={`/userProfile/${info[0]._id}`} passHref>
           <a className="text-info border btn">View your profile</a>
         </Link>
        }
        <span>
          I do not have an account{" "}
          <Link href="/">
            <a className="text-info btn">Sign Up</a>
          </Link>
        </span>
      </div>
    </div>
  );
}
