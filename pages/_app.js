import '../styles/globals.css';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
// import { positions, transitions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'

import {StateProvider} from "../ContextAPI/StateProvider";
import reducer,{initialState} from "../ContextAPI/Reducer";

// const options = {
//   timeout: 5000,
//   position: positions.TOP_CENTER,
//   transition: transitions.SCALE,
// }
function MyApp({ Component, pageProps }) { 
    
    return (
      <>
       <StateProvider initialState={initialState} reducer={reducer}>

       <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout>
      {/* <AlertProvider template={AlertTemplate} {...options}> */}
        <Component {...pageProps} />
        {/* </AlertProvider> */}
      </Layout>

      </StateProvider>
      </>
    );
 
}

export default MyApp
