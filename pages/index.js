import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import MiddleSection from "@/components/middleSection";
import BottomSection from "@/components/BottomSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
   <Head>


   <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>project clone </title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      {/* Add script tags */}
      <script async src="https://www.clarity.ms/s/0.7.32/clarity.js"></script>
      
      <script async src="https://connect.facebook.net/en_US/fbevents.js"></script>
      {/* Add other script tags */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js" integrity="sha512-jNDtFf7qgU0eH/+Z42FG4fw3w7DM/9zbgNPe3wfJlCylVDTT3IgKW5r92Vy9IHa6U50vyMz5gRByIu4YIXFtaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.js" integrity="sha512-FwqNPb8ENFXApJKNgRgYq5ok7VoOf5ImaOdzyF/xe/T5jdd/S0xq0CXBLDhpzaemxpQ61X3nLVln6KaczwhKgA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

      

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
      {/* Add other script tags */}


      {/* jquery fancybox */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js" integrity="sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" integrity="sha512-nNlU0WK2QfKsuEmdcTwkeh+lhGs6uyOxuUs+n+0oXSYDok5qy0EI0lt01ZynHq6+p/tbgpZ7P+yUb+r71wqdXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js" integrity="sha512-j7/1CJweOskkQiS5RD9W8zhEG9D9vpgByNGxPIqkO5KrXrwyDAroM9aQ9w8J7oRqwxGyz429hPVk/zR6IOMtSA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha512-H9jrZiiopUdsLpg94A333EfumgUBpO9MdbxStdeITo+KEIMaNfHNvwyjjDJb+ERPaRS6DpyRlKbvPUasNItRyw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     
     {/* jquery menu aim */}
      <script type="module"
src= 'https://cdn.jsdelivr.net/npm/menu-aim@0.0.5/+esm'>
</script>

{/* swiper script */}

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css" integrity="sha512-rd0qOHVMOcez6pLWPVFIv7EfSdGKLt+eafXh4RO/12Fgr41hDQxfGvoi1Vy55QIVcQEujUE1LQrATCLl2Fs+ag==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js" integrity="sha512-Ysw1DcK1P+uYLqprEAzNQJP+J4hTx4t/3X2nbVwszao8wD+9afLjBQYjz7Uk4ADP+Er++mJoScI42ueGtQOzEA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>




{/* 
Modernizr */}

<script src="https://cdn.jsdelivr.net/npm/modernizr@3.13.0/lib/cli.min.js"></script>



  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            function checkIEBrowser() {
              var userAgentString = navigator.userAgent;
              if (userAgentString.indexOf("Firefox") > -1) {
                return false;
              } else if (userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1) {
                return true;
              } else {
                return false;
              }
            }
          `,
        }}
      ></script>

     
      <style dangerouslySetInnerHTML={{ __html: `
        * {
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
          user-select: text !important;
        }
      `}} />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
      {/* Add other stylesheet links */}

      {/* Local CSS */}
     
   </Head>
   <div className="outerWrap">


      <Header/>
      <div className="floverlay"></div>
      <MiddleSection/>
      <BottomSection/>
   </div>

    </>
  );
}
