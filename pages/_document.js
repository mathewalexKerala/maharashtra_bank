// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html lang="en"
  className=" js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths">
    <Head>
    
    </Head>
    <body className="dark" data-aos-easing="ease-in-out-sine" data-aos-duration="400"
    data-aos-delay="0">
      <noscript>
        <iframe
          src="//www.googletagmanager.com/ns.html?id=GTM-WT4GMP3"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <input type="hidden" value="/" id="hdnUrl" />
      <input type="hidden" value="https://bankofmaharashtra.in/" id="hdnbaseUrl" />
      <div className="dvAudioBtn">
        <button id="audioplay" className="btn-audio">
          <i className="fa fa-volume-up fa-lg"></i>
        </button>
        <button id="audiopause" className="btn-audio" style={{ display: 'none' }}>
          <i className="fa fa-pause fa-lg"></i>
        </button>
      </div>
      
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
