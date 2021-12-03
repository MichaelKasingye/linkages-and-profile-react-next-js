import React, { useState } from 'react'
import axios from 'axios';
// import { ButtonFilled, ButtonOutlined } from '../../components/Button/Button'
// import Image from "next/image";
import styles from "./ProjectCard.module.css"
import { useStateValue } from "../../ContextAPI/StateProvider";
// import Avatar from '@mui/material/Avatar';


export function UpLoadProfileImage() {
 // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [{ response }, dispatch] = useStateValue();
  const [error, setError] = useState("");

// console.log( response);

// console.log( selectedFile);


  const config = {
    headers: {
      // Authorization:response.token,
    },
  };


  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", selectedFile);

     axios({
        method: "post",
        url: "https://linkages-profiling-api.herokuapp.com/imageUpload",
        data: formData,
        // headers: { "Content-Type": "multipart/form-data" }, 
        // headers: {Authorization : response.token}, 

      })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          console.log(res);
          // setError(res.message);
          setLoading(false);
          router.push("/profileform")
          return;
        }
        // setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
        // setError(err.msg)
      });
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }


    return (
      <form onSubmit={handleSubmit}>
      <div  className={styles.avatar}>
                      {/* <Avatar src="" sx={{ width: 76, height: 76 }} /> */}
                      </div>
      
                  <div className="d-flex d-flex justify-content-start align-items-center ">
                  <div className="mb-2">
                    <label className="form-label">Attach Image </label>
                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      onChange={handleFileSelect}
                      required
                    />

                  </div>
                  <input
                      type="submit"

                      value= "Submit Image"
                      style={{backgroundColor:'#096691', border:'none'}}
                      className="rounded-0 text-light m-2 p-2"
                      
                    />
                  {/* <ButtonFilled text="Submit Image"/> */}
                  </div>
      
              </form>
    )
}

