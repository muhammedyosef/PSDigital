// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';


import Layout from '../component/Layout';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
      return( 
        <Provider store={store}>
      <Layout>
    <Component {...pageProps} />

  </Layout>
    </Provider>)
}

export default MyApp
