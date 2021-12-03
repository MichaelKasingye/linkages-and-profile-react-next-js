// import { Divider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Border from '../../components/Border/Border'
import Heading from '../../components/Heading/Heading'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import {ParagraphBasic} from '../../components/Paragraph/Paragraph'
import Tags from '../../components/Tags/Tag'
import ProfileCard from '../../components/ProjectCard/ProjectCard'
import {ButtonOutlined} from '../../components/Button/Button'
import Link from "next/link";

import axios from "axios";


export default function Profile(article) {

    const router = useRouter();
    const Id = router.query.profileId;
    
    const [data, setData] = useState("");
    // console.log(data);

    useEffect(() => {
    axios
    .get(`https://linkages-profiling-api.herokuapp.com/api/v1/userProfile/${Id}` )
    .then((res) => {
      // setInfo(res.data);
      if (res.data) {
        setData(res.data)
    // console.log(res.data);

        // dispatch({
        //   type: "SET_DATA",
        //   userData:{
        //     user: res.data,
        //   },
        // })
        // // router.push("/profile")
      return;
      }
    })
      .catch((err) => {
        console.log(err);
        // setError(err.msg)
      });

}, [Id])


  // const info = if(data) { return data}
    console.log(data[0])
    return (
      
        <div style={{maxWidth:'1000px', margin:'auto auto'}}>
          { typeof data[0] != "undefined"?
          <>
           <ProfileHeader info = {data}/>
            <Heading title="Bio"/>
            <ParagraphBasic text={data[0].bio}/>
            <Border/>

            <Heading title="Technical Skills"/>
            <Tags text1={data[0].technicalSkills1} text2={data[0].technicalSkills2} text3={data[0].technicalSkills3}/>
            
            <Border/>

            <Heading title="Other Skills"/>
            <Tags text1={data[0].otherSkills1} text2={data[0].otherSkills2} text3={data[0].otherSkills3}/>
            <Border/>

            <Heading title="Projects"/>
            <ProfileCard
            projectTitle1={data[0].projectTitle1}
            projectDescription1={data[0].projectDescription1}
            projectLink1={data[0].projectLink1}

            projectTitle2={data[0].projectTitle2}
            projectDescription2={data[0].projectDescription2}
            projectLink2={data[0].projectLink2}

            projectTitle3={data[0].projectTitle3}
            projectDescription3={data[0].projectDescription3}
            projectLink3={data[0].projectLink3}
            />
            <Border/>

            <Heading title="Resume"/>
            <ButtonOutlined text="View Resume" url={data[0].resumeURL}/>
          </>:"loading..."}
           
          {/* {userData && */}
        <>
{/* <span className="h4">{userData.user.message}</span> */}
        
        <button className="btn border">
        <Link href="/editUserProfile/[profileId]" as={`/editUserProfile/${Id}`} passHref>
          <a>
Edit profile
          </a>
        </Link>
        </button>
        </>
        {/* } */}
        </div>
    )
}

// export default profile

// export const getServeSideProps = async (context) => {
//     console.log("context");
//     const res = await fetch(`https://linkages-profiling-api.herokuapp.com/api/v1/userProfile/${context.params.id}`)
  
//     const article = await res.json()
//     return {
//       props: {
//         article,
//       },
//     }
//   }
  
//   export const getStaticPaths = async () => {
//     const res = await fetch(`https://linkages-profiling-api.herokuapp.com/api/v1/userProfile/`)
  
//     const articles = await res.json()
  
//     const ids = articles.map((article) => article.id)
//     const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
//     return {
//       paths,
//       fallback: false,
//     }
//   }