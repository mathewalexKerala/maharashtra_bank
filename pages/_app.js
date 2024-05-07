// pages/_app.js

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/style1.css';
import '../styles/mystyle.css';
import '../styles/main.css';




function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('../public/projectfiles/bomlayoutcontainer/default/js/mymain').then((module) => {
      // Module loaded successfully, you can perform additional initialization here if needed
      AOS.init();
    }).catch((error) => {
      console.error('Error loading script:', error);
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;