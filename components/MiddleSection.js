
import Image from "next/image";

import { useState, useEffect } from "react";
const MiddleSection = () =>{

    const [showPlaceholder, setShowPlaceholder] = useState(true);

    useEffect(() => {
      // Set a timeout to switch to the actual image after 10 seconds
      const timer = setTimeout(() => {
        setShowPlaceholder(false);
      }, 5000);
  
      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }, [])

return(
<>
    <div className="d-none d-md-block">
    <div className="floatingIcons">
        
        
    
        
        <Image src="/projectfiles/bomlayoutcontainer/default/images/icons/beti1.png"
        className="loading" alt="Beti Bachao Beti Padhao " title=" Beti Bachao Beti Padhao"
                 width={50} height={50}
        style={{ margin: "0 0 7px 15px", maxWidth: "64px !important" }} fetchPriority='high'
        />
        
        
        <div className="col aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
            data-aos-offset="-250" data-aos-delay="300"><a href="" target="_blank"
            className="flIcon" title="Internet Banking">
                                  {
       showPlaceholder ? (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/internet-banking.svg"
      width={50}
      height={50}
    // Adjusted marginRight to 50px
      className="loadimg"
      alt="Internet Banking"
      title="Internet Banking"
      priority={true}
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/internet-banking.svg"
      width={50}
      height={50} 
      className="loadimg"
      alt="Internet Banking"
      title="Internet Banking"
      priority={true}
    />
  )
}
                
               
                <p className="name">Internet Banking</p>
            </a></div>
        <div className="col dropleft aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
            data-aos-offset="-250" data-aos-delay="400">
            <div className="flIcon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" title="Interest Rates" role="button" >
                  {
  showPlaceholder ? (
    <Image
      src="/writereaddata/defaultimages/loader.svg"
      width={50}
      height={50} 
      className="loadimg"
      alt="check Interest Rates"
      title="Interest Rates"
      priority={true}
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/percentage.svg"
      width={50}
      height={50} 
      className="loadimg"
      alt="check Interest Rates"
      title="Interest Rates"
    priority={true}
    />
  )
}

                    
                  
                <p className="name">Interest Rates</p>
            </div>
            {/* <div className="flContent dropdown-menu">
                <div className="row intlist custscrollA">
                    <div className="col">
                        <div className="content">
                        {
  showPlaceholder ? (
    <Image
      src="/writereaddata/defaultimages/loader.svg"
      width={50}
      height={50} 
      className="loadimg" alt="Home Loan" title="Housing Loan" 
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/loans/house.png"
      width={50}
      height={50} 
      className="loadimg" alt="Home Loan" title="Housing Loan" 
    />
  )
}  
                            
                            
                            
                           
                            <h4>Housing Loan</h4><span className="rate">8.35<span>% P.A</span></span> <a
                                href="" target="_blank"
                                className="btn btn-primary">Apply Now!</a> <a
                                href="/personal-banking/loans/home-loan" className="btn btn-outline-secondary"><span
                                className="far fa-eye"></span></a>
                        </div>
                    </div>
                    <div classNameName="col">
                        <div className="content"><img 
                                src="/projectfiles/bomlayoutcontainer/default/images/loans/car.png"
                                className="loadimg" alt="Car Loan" title="Car Loan"/>
                            <h4>Car Loan</h4><span className="rate">8.70<span>% P.A*</span></span> <a
                                href="//digiloans.bankofmaharashtra.in/apply/vehicleloan?bom" target="_blank"
                                className="btn btn-primary">Apply Now!</a> <a
                                href="/personal-banking/loans/car-loan" className="btn btn-outline-secondary"><span
                                className="far fa-eye"></span></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content"><img 
                                src="/projectfiles/bomlayoutcontainer/default/images/loans/gold-loan.png"
                                className="loadimg" alt="Gold Loan" title="Gold Loan"/>
                            <h4>Gold Loan</h4><span className="rate">9.30<span>% P.A</span></span> <a 
                                href="//digiloans.bankofmaharashtra.in/apply/goldloan?bom" target="_blank"
                                className="btn btn-primary">Apply Now!</a> <a href="/gold-loan"
                                className="btn btn-outline-secondary"><span className="far fa-eye"></span></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content"><img
                        
                                src="/projectfiles/bomlayoutcontainer/default/images/loans/piggy.png"
                                className="loadimg" alt="Deposit Schemes" title="Deposit Schemes"/>
                            <h4>Deposit Schemes</h4><span className="rate">6.50<span>% P.A*</span></span> <a
                                href="/domestic-term-deposits" className="btn btn-primary">Know More</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content"><img 
                                data-src="/projectfiles/bomlayoutcontainer/default/images/loans/personal.png"
                                className="loadimg" alt="Loan Schemes" title="Loan Schemes"/>
                            <h4>Loan Schemes</h4><span className="rate">8.35<span>% P.A*</span></span> <a
                                href="/advances" className="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="col dropleft aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
            data-aos-offset="-250" data-aos-delay="500">
            <div className="flIcon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" title="Apply Online" role="button">
                    
                    
                  {  showPlaceholder ? (
    <Image
      src="/writereaddata/defaultimages/loader.svg"
      width={50}
      height={50}
 
      className="loadimg"
      alt="Apply Online"
      title="Apply Online"
      
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/apply.svg"
      width={50}
      height={50} 
      className="loadimg"
      alt="click to Apply Online" title="Apply Online"
    />
  )
}
      
                    
                    
                    
                <p className="name">Apply Online</p>
            </div>
            {/* <div className="flContent dropdown-menu">
                <div className="row intlist custscrollA">
                    <div className="col">
                        <div className="onlineacc"><img src="/writereaddata/defaultimages/loader.svg"
                                data-src="/projectfiles/bomlayoutcontainer/default/images/loans/house.png"
                                className="loadimg" alt="Home Loan" title="Housing Loan"/>
                            <h4>Housing Loan</h4><a href="//digiloans.bankofmaharashtra.in/apply/homeloan?bom"
                                target="_blank" className="btn btn-primary">Apply Now!</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="onlineacc"><img src="/writereaddata/defaultimages/loader.svg"
                                data-src="/projectfiles/bomlayoutcontainer/default/images/loans/car.png"
                                className="loadimg" alt="Car Loan" title="Car Loan"/>
                            <h4>Car Loan</h4><a href="//digiloans.bankofmaharashtra.in/apply/vehicleloan?bom"
                                target="_blank" className="btn btn-primary">Apply Now!</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="onlineacc"><img src="/writereaddata/defaultimages/loader.svg"
                                data-src="/projectfiles/bomlayoutcontainer/default/images/loans/sale.svg"
                                className="loadimg" alt="Personal Loan" title="Personal Loan"/>
                            <h4>Personal Loan</h4><a
                                href="//digiloans.bankofmaharashtra.in/apply/personalloan?bom" target="_blank"
                                className="btn btn-primary">Apply Now!</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="onlineacc"><img src="/writereaddata/defaultimages/loader.svg"
                                data-src="/projectfiles/bomlayoutcontainer/default/images/loans/gold-loan.png"
                                className="loadimg" alt="Gold Loan" title="Gold Loan"/>
                            <h4>Gold Loan</h4><a href="//digiloans.bankofmaharashtra.in/apply/goldloan?bom"
                                target="_blank" className="btn btn-primary">Apply Now!</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="onlineacc"><img src="/writereaddata/defaultimages/loader.svg"
                                data-src="/projectfiles/bomlayoutcontainer/default/images/loans/personal.png"
                                className="loadimg" alt="Loan Schemes" title="Loan Schemes"/>
                            <h4>Loan Schemes</h4><a href="//bomloans.com/" target="_blank"
                                className="btn btn-primary">Apply Now!</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="onlineacc"><img src="/writereaddata/defaultimages/loader.svg"
                                data-src="/projectfiles/bomlayoutcontainer/default/images/loans/piggy.png"
                                className="loadimg" alt="Online SB A/C" title="Online SB A/C"/>
                            <h4>Online SB A/C</h4><a
                                href="//onlinebanking.bankofmaharashtra.in/VKYC/#/digitalAccount?pri=bom"
                                className="btn btn-primary">Open Now!</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="col aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
            data-aos-offset="-250" data-aos-delay="600"><a href="/downloads" className="flIcon" title="Downloads">
                                  {
       showPlaceholder ? (
    <Image
      src="/writereaddata/defaultimages/loader.svg"
      width={50}
      height={50}
    // Adjusted marginRight to 50px
    className="loadimg" alt="click for downloads" title="Downloads"
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/downloads.svg"
      width={50}
      height={50} 
      className="loadimg" alt="click for downloads" title="Downloads"
    />
  )
}
                
             

                <p className="name">Downloads</p>
            </a></div>
        <div className="col aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
            data-aos-offset="-250" data-aos-delay="300"><a href="/calculators" className="flIcon"
                title="Calculators">
                        {
       showPlaceholder ? (
    <Image
      src="/writereaddata/defaultimages/loader.svg"
      width={50}
      height={50}
    // Adjusted marginRight to 50px
   className="loadimg" alt="Check EMI on calculators" title="Calculators"
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/calculator.svg"
      width={50}
      height={50} 
      className="loadimg" alt="Check EMI on calculators" title="Calculators"
    />
  )
}
                
             
                    
                    
                    
                    
                    
                <p className="name">Calculators</p>
            </a></div>
    </div>
</div>
<div className="floatBtns-wrap d-md-none">
    <div className="floatBtns popup-ani">
        <div className="floatingIcons"><img 
              src="/projectfiles/bomlayoutcontainer/default/images/icons/beti1.png" className="loadimg fade"
                alt="Beti Bachao Beti Padhao" title="Beti Bachao Beti Padhao" style={{margin:'0 5px 7px 5px'}}/>
            <div className="col aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
                data-aos-offset="-250" data-aos-delay="300"><a href="//www.mahaconnect.in/" target="_blank"
                className="flIcon" title="Internet Banking">
                                {
       showPlaceholder ? (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/internet-banking.svg"
      width={50}
      height={50}
    // Adjusted marginRight to 50px
    
      className="loadimg fade" alt="Easy access of internet banking" title="Internet Banking"
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/internet-banking.svg"
      width={50}
      height={50} 
      className="loadimg fade" alt="Easy access of internet banking" title="Internet Banking"
      
    />
  )
}
                    
                
                    <p className="name">Internet Banking</p>
                </a></div>
            <div className="col dropleft aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
                data-aos-offset="-250" data-aos-delay="400">
                <div className="flIcon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false" title="Interest Rates" role="button">
                        
                        {
       showPlaceholder ? (
    <Image
      src="/writereaddata/defaultimages/loader.svg"
      width={50}
      height={50}
    // Adjusted marginRight to 50px
    
    className="loadimg fade" alt="Easy access of Interest Rates" title="Interest Rates"
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/percentage.svg"
      width={40}
      height={40} 
      className="loadimg fade" alt="Easy access of Interest Rates" title="Interest Rates"
      
    />
  )
}
                        
                        
                       
                    <p className="name">Interest Rates</p>
                </div>
                <div className="flContent dropdown-menu">
                    <div className="row intlist custscrollA">
                        <div className="col">
                            <div className="content">
                                
                                <Image src="/projectfiles/bomlayoutcontainer/default/images/loans/house.png"

width={50} height={50}
                                className="loadimg" alt="Housing Loan" title="Housing Loan" 
                                
                                
                                
                                
                                />
                                
                              
                                <h4>Housing Loan</h4><span className="rate">8.35<span>% P.A</span></span> <a
                                    href="" target="_blank"
                                    className="btn btn-primary">Apply Now!</a> <a
                                    href="n"
                                    className="btn btn-outline-secondary"><span className="far fa-eye"></span></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="content">

                                <Image src="/projectfiles/bomlayoutcontainer/default/images/loans/car.png"
                                width={50} height={50} className="loadimg" alt="Car Loan" title="Car Loan"/>
                               
                                <h4>Car Loan</h4><span className="rate">8.70<span>% P.A*</span></span> <a
                                    href=""
                                    target="_blank" className="btn btn-primary">Apply Now!</a> <a
                                    href="/personal-banking/loans/car-loan"
                                    className="btn btn-outline-secondary"><span className="far fa-eye"></span></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="content">
                                
                                
                                
                                
                                <img 
                                    src="/projectfiles/bomlayoutcontainer/default/images/loans/gold-loan.png"
                                    className="loadimg" alt="Gold Loan" title="Gold Loan"/>
                                <h4>Gold Loan</h4><span className="rate">9.30<span>% P.A</span></span> <a
                                    href="" target="_blank"
                                    className="btn btn-primary">Apply Now!</a> <a href="/gold-loan"
                                    className="btn btn-outline-secondary"><span className="far fa-eye"></span></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="content"><img 
                                    src="/projectfiles/bomlayoutcontainer/default/images/loans/piggy.png"
                                    className="loadimg" alt="Deposit Schemes" title="Deposit Schemes"/>
                                <h4>Deposit Schemes</h4><span className="rate">6.50<span>% P.A*</span></span> <a
                                    href="/domestic-term-deposits" className="btn btn-primary">Know More</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="content"><img 
                                 src="/projectfiles/bomlayoutcontainer/default/images/loans/personal.png"
                                    className="loadimg" alt="Loan Schemes" title="Loan Schemes"/>
                                <h4>Loan Schemes</h4><span className="rate">8.35<span>% P.A*</span></span> <a
                                    href="/advances" className="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col dropleft aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
                data-aos-offset="-250" data-aos-delay="500">
                <div className="flIcon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false" title="Apply Online" role="button">
                        
                          
                  {  showPlaceholder ? (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/apply.svg"
      width={50}
      height={50} 
      className="loadimg" alt="Easy access to Apply Online" title="Apply Online"
    />
  ) : (
    <Image
      src="/projectfiles/bomlayoutcontainer/default/images/icons/apply.svg"
      width={50}
      height={50} 
      className="loadimg" alt="Easy access to Apply Online" title="Apply Online"
    />
  )
}
                        
                        
                       
                    <p className="name">Apply Online</p>
                </div>
                <div className="flContent dropdown-menu">
                    <div className="row intlist custscrollA">
                        <div className="col">
                            <div className="onlineacc"><Image width={20} height={20}
                                    src="/projectfiles/bomlayoutcontainer/default/images/loans/house.png"
                                    className="loadimg" alt="Housing Loan" title="Housing Loan"/>
                                <h4>Housing Loan</h4><a
                                    href="" target="_blank"
                                    className="btn btn-primary">Apply Now!</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="onlineacc"><img 
                                    src="/projectfiles/bomlayoutcontainer/default/images/loans/car.png"
                                    className="loadimg" alt="Car Loan" title="Car Loan"/>
                                <h4>Car Loan</h4><a
                                    href="//digiloans.bankofmaharashtra.in/apply/vehicleloan?bom"
                                    target="_blank" className="btn btn-primary">Apply Now!</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="onlineacc"><img 
                                  src="/projectfiles/bomlayoutcontainer/default/images/loans/sale.svg"
                                    className="loadimg" alt="Personal Loan" title="Personal Loan"/>
                                <h4>Personal Loan</h4><a
                                    href="//digiloans.bankofmaharashtra.in/apply/homeloan?bom" target="_blank"
                                    className="btn btn-primary">Apply Now!</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="onlineacc"><img src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/loans/gold-loan.png"
                                    className="loadimg" alt="Gold Loan" title="Gold Loan"/>
                                <h4>Gold Loan</h4><a href="//digiloans.bankofmaharashtra.in/apply/goldloan?bom"
                                    target="_blank" className="btn btn-primary">Apply Now!</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="onlineacc"><img 
                                    src="/projectfiles/bomlayoutcontainer/default/images/loans/personal.png"
                                    className="loadimg" alt="Loan Schemes" title="Loan Schemes"/>
                                <h4>Loan Schemes</h4><a href="//bomloans.com/" target="_blank"
                                    className="btn btn-primary">Apply Now!</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="onlineacc">
                                
                                <img 
                                    src="/projectfiles/bomlayoutcontainer/default/images/loans/piggy.png"
                                    className="loadimg" alt="Online SB Account" title="Online SB Account"/>
                                <h4>Online SB Account</h4><a
                                    href=""
                                    className="btn btn-primary">Open Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
                data-aos-offset="-250" data-aos-delay="600"><a href="/downloads" className="flIcon"
                    title="Downloads"> 
                     {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      width={50}
                                      height={50}
                                      className="loadimg fade" alt="Easy access of Downloads" title="Downloads"
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/icons/downloads.svg"
                                      width={50}
                                      height={50}
                                      className="loadimg fade" alt="Easy access of Downloads" title="Downloads"
                                    />
                                  )}
                    
                    
                    
                    
                    
                 
                    <p className="name">Downloads</p>
                </a></div>
            <div className="col aos-init aos-animate" data-aos="slide-left" data-aos-duration="600"
                data-aos-offset="-250" data-aos-delay="300"><a href="/calculators" className="flIcon"
                    title="Calculators"> 
                    
                    {showPlaceholder ? (
                                    <Image
                                    width={50}
                                    height={50}
                                      src="/writereaddata/defaultimages/loader.svg"
                                      className="loadimg fade" alt="Go to Calculators" title="Calculators"
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/icons/calculator.svg"
                                      width={50}
                                      height={50}
                                      className="loadimg fade" alt="Go to Calculators" title="Calculators"
                                    />
                                  )}
                    
                    
                    
                    
                    
                    <p className="name">Calculators</p>
                </a></div>
        </div>
    </div>
    <div className="floatBtns-fab">
        <div className="wrap">
            <div className="img-fab img"></div>
        </div>
    </div>
</div>
<div className="homesocial aos-init aos-animate" data-aos="slide-right" data-aos-duration="600"
    data-aos-offset="-500" data-aos-delay="500">
    <ul className="social">
        <li><a href="//api.whatsapp.com/"
                target="_blank" data-toggle="tooltip" title="" data-original-title="Whatsapp"
                aria-label="Whatsapp"><span className="fab fa-whatsapp"></span></a></li>
        <li><a href="//www.facebook.com/" target="_blank" data-toggle="tooltip" title=""
                data-original-title="Facebook" aria-label="Facebook"><span className="fab fa-facebook-f"></span></a>
        </li>
        <li><a href="//www.instagram.com/" target="_blank" data-toggle="tooltip" title=""
                data-original-title="Instagram" aria-label="Instagram"><span
                className="fab fa-instagram"></span></a></li>
        <li><a href="//www.twitter.com/" target="_blank" data-toggle="tooltip" title=""
                data-original-title="Twitter" aria-label="Twitter"> <span className="fab x-twitter"> <img
                        src="/projectfiles/bomlayoutcontainer/default/images/icons/x-twitter.svg" alt="Twitter"
                        title="Twitter"/> </span> </a></li>
        <li><a href="//www.linkedin.com/company/" target="_blank" data-toggle="tooltip" title=""
                data-original-title="Linkedin" aria-label="Linkedin"><span className="fab fa-linkedin"></span></a>
        </li>
        <li><a href="//in.pinterest.com/" target="_blank" data-toggle="tooltip" title=""
                data-original-title="Pinterest" aria-label="Pinterest"><span
                className="fab fa-pinterest"></span></a></li>
        <li><a href="//www.youtube.com/channel/" target="_blank" data-toggle="tooltip"
                title="" data-original-title="Youtube" aria-label="Youtube"><span
                className="fab fa-youtube"></span></a></li>
    </ul>
</div>
<div className="dvMainBodyCLS">
    <div className="container-fluid px-0">
        <div
            className="swiper-container homeslider swiper-container-fade swiper-container-initialized swiper-container-horizontal">
            <div className="swiper-wrapper" style={{ transitionDuration: "0ms" }}>
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="4"
                    style={{ width: "750px", transitionDuration: "0ms", opacity: 1, transform: "translate3d(0px, 0px, 0px)" }}>
                    <a href="#" title="Reserve Bank of India" className="banner_link">
                        <div className="slide desktop"
                           style={{ 

                            backgroundImage: "url(../..//writereaddata/bannerimage/ea5e4fb3-d7fb-472e-93c3-c8c6e698485a.webp)",
                            backgroundPosition: "65% center"
                        
                            
                          }}>
                        </div>
                    </a><a href="#" title="Reserve Bank of India" className="banner_link">
                        <div className="slide responsive"
                           style={{ 
                            backgroundImage: "url(../..//writereaddata/bannerimage/e4cbd66a-b75f-4c3a-a0bc-d82313b817e6.webp)",
                            backgroundPosition: "center 20%"
                          }}>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0"
                    style={{
                        width: "750px",
                        transitionDuration: "0ms",
                        opacity: "1",
                        transform: "translate3d(-750px, 0px, 0px)"
                      }}>
                    <a href="//bankofmaharashtra.in/online-loans" title="Home Loan ROI - 8.35 Car Loan 8.70 "
                        className="banner_link" target="_blank" rel="noopener noreferrer">
                        <div className="slide desktop"
style={{
backgroundImage: "url(../..//writereaddata/bannerimage/be7e1f0b-d687-4110-9781-a3a049233e5b.webp)",
backgroundPosition: "65% center"
}}>
                        </div>
                    </a><a href="//bankofmaharashtra.in/online-loans"
                        title="Home Loan ROI - 8.35 Car Loan 8.70 " className="banner_link" target="_blank"
                        rel="noopener noreferrer">
                        <div className="slide responsive"
                           style={{
                            backgroundImage: "url(../..//writereaddata/bannerimage/e26eded6-ca84-45c5-beb3-88caa9a1227d.webp)",
                            backgroundPosition: "center 20%"
                          }}>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1"
styles={{
width: "750px",
transitionDuration: "0ms",
opacity: "0",
transform: "translate3d(-1500px, 0px, 0px)"
}}>
                    <a href="#" title="vote " className="banner_link">
                        <div className="slide desktop"
                             styles={{
                                backgroundImage: "url(../..//writereaddata/bannerimage/8f6c1509-f1aa-4b8c-b4d8-a87c2b441b02.webp)",
                                backgroundPosition: "65% center"
                              }}>
                        </div>
                    </a><a href="#" title="vote " className="banner_link">
                        <div className="slide responsive"
                           styles={{
                            backgroundImage: "url(../..//writereaddata/bannerimage/d32fa808-f245-49e8-9dd8-7e77fe044f9e.webp)",
                            backgroundPosition: "center 20%"
                          }}>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="2"
                    styles={{
                        width: "750px",
                        transitionDuration: "0ms",
                        opacity: "0",
                        transform: "translate3d(-2250px, 0px, 0px)"
                      }}>
                    <a href="#" title="PM SURYA GHAR MUFT BIJLI YOJNA" className="banner_link">
                        <div className="slide desktop"
                             styles={{
                                backgroundImage: "url(../..//writereaddata/bannerimage/da6c2837-12e2-4127-afc2-656991e897b5.webp)",
                                backgroundPosition: "65% center"
                              }}>
                        </div>
                    </a><a href="#" title="PM SURYA GHAR MUFT BIJLI YOJNA" className="banner_link">
                        <div className="slide responsive"
                            styles={{
                                backgroundImage: "url(../..//writereaddata/bannerimage/9af94858-5b10-4a35-89a3-082132850834.webp)",
                                backgroundPosition: "center 20%"
                              }}>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="3"
                 styles={{
                    width: "750px",
                    transitionDuration: "0ms",
                    opacity: 0,
                    transform: "translate3d(-3000px, 0px, 0px)"
                  }}>
                    <a href="#" title="PIDPI 01092023" className="banner_link">
                        <div className="slide desktop"
                            styles={{ 
                                backgroundImage: "url(../..//writereaddata/bannerimage/3ceab4a4-7985-4ebd-8648-3d465be4de2e.webp)",
                                backgroundPosition: "65% center"
                              }}>
                        </div>
                    </a><a href="#" title="PIDPI 01092023" className="banner_link">
                        <div className="slide responsive"
styles={{ 
backgroundImage: "url(../..//writereaddata/bannerimage/90ffed28-3dc1-43e5-b51d-c6eb10853e88.webp)",
backgroundPosition: "center 20%"
}}>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="4"
                   styles={{ 
                    width: "750px",
                    transitionDuration: "0ms",
                    opacity: 0,
                    transform: "translate3d(-3750px, 0px, 0px)"
                  }}>
                    <a href="#" title="Reserve Bank of India" className="banner_link">
                        <div class="slide desktop"
                             styles={{ 
                                backgroundImage: "url(../..//writereaddata/bannerimage/ea5e4fb3-d7fb-472e-93c3-c8c6e698485a.webp)",
                                backgroundPosition: "65% center"
                              }}>
                        </div>
                    </a><a href="#" title="Reserve Bank of India" className="banner_link">
                        <div className="slide responsive"
styles={{ 
backgroundImage: "url(../..//writereaddata/bannerimage/e4cbd66a-b75f-4c3a-a0bc-d82313b817e6.webp)",
backgroundPosition: "center 20%"
}}>
                        </div>
                    </a>
                </div>
                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="0"
                    styles={{ 
                        width: "750px",
                        transitionDuration: "0ms",
                        opacity: 0,
                        transform: "translate3d(-4500px, 0px, 0px)"
                      }}>
                    <a href="//bankofmaharashtra.in/online-loans" title="Home Loan ROI - 8.35 Car Loan 8.70 "
                        className="banner_link" target="_blank" rel="noopener noreferrer">
                        <div className="slide desktop"
styles={{
backgroundImage: "url(../..//writereaddata/bannerimage/be7e1f0b-d687-4110-9781-a3a049233e5b.webp)",
backgroundPosition: "65% center"
}}
>
                        </div>
                    </a><a href="//bankofmaharashtra.in/online-loans"
                        title="Home Loan ROI - 8.35 Car Loan 8.70 " className="banner_link" target="_blank"
                        rel="noopener noreferrer">
                        <div className="slide responsive"
                           styles={{
                            backgroundImage: "url(../..//writereaddata/bannerimage/e26eded6-ca84-45c5-beb3-88caa9a1227d.webp)",
                            backgroundPosition: "center 20%"
                          }}
                          >
                        </div>
                    </a>
                </div>
            </div>
            <div
                className="swiper-pagination slider-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0"
                    role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet"
                    tabindex="0" role="button" aria-label="Go to slide 2"></span><span
                    className="swiper-pagination-bullet" tabindex="0" role="button"
                    aria-label="Go to slide 3"></span><span className="swiper-pagination-bullet" tabindex="0"
                    role="button" aria-label="Go to slide 4"></span><span className="swiper-pagination-bullet"
                    tabindex="0" role="button" aria-label="Go to slide 5"></span>
            </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
    </div>
    <div className="container-fluid iconhome">
        <ul className="homeicons">
            <li><a href="//bankofmaharashtra.in/vcip" className="flIconSpec"> Online SB Account </a></li>
            <li><a href="/online-loans"> Online Loans </a></li>
            <li><a href="/toll-free-numbers"> Helpline </a></li>
            <li><a href="/qualified-institutional-placement"> Investor Relation </a></li>
            <li><a href="//branch-atm-locator.bankofmaharashtra.in/" target="_blank"> Branch/ATM Locator </a>
            </li>
        </ul>
    </div>
    <div className="newsbox aos-init" data-aos="zoom-in-up" data-aos-duration="600" data-aos-offset="0"
        data-aos-delay="500"><a href="/news" title="Latest News" className="newsbox-a">
            <h4>What's new!</h4>
        </a>
        <div className="news-container">
            <ul class="newslist custscroll" id="whatsnew">
                <li><a href="/forex-queries" target="_blank">Forex Card Rates</a></li>
                <li><a href="//bankofmaharashtra.in/coca/caconfirmpage.aspx" target="_blank">Online Applications
                        for Empanelment of Chartered Accountants as Concurrent/ Revenue Auditors for the year
                        2024-25 </a></li>
                <li><a href="/writereaddata/documentlibrary/43d53809-cd79-4692-b17d-b289f602cf1d.pdf"
                        target="_blank">PRESS RELEASE -FINANCIAL RESULTS FOR THE QUARTER AND YEAR ENDED 31st
                        March 2023</a></li>
                <li><a href="/writereaddata/documentlibrary/7d0d2341-9770-4b1f-ba62-7385d95490e0.pdf"
                        target="_blank">Frequently Asked Questions - Rs-2000 Denomination Bank notes</a></li>
                <li><a href="/writereaddata/documentlibrary/20a3e14c-cf70-4cac-b2ae-eb09662ef220.pdf"
                        target="_blank">PRESS RELEASE -FINANCIAL RESULTS FOR THE QUARTER ENDED 30th June
                        2023</a></li>
                <li><a href="/writereaddata/documentlibrary/c34282ac-cebe-458a-970f-fa6ca276084d.pdf"
                        target="_blank">VACANCY OF SCA FOR FY 2023-24</a></li>
                <li><a href="#" target="_blank">Taxpayers paying ADVANCE TAX payment through NEFT/RTGS/Over the
                        Bank Counter(OTC) mode are required to generate Mandate/Challan form using E-pay tax
                        facility on e-Filing portal of the Income-tax Department</a></li>
                <li><a href="/writereaddata/documentlibrary/40054458-4fc0-44f4-a3eb-02f5459fe197.pdf"
                        target="_blank">PRESS RELEASE -FINANCIAL RESULTS FOR THE QUARTER ENDED 30th SEPTEMBER
                        2023</a></li>
                <li><a href="/writereaddata/documentlibrary/71295d50-70e8-4a5b-8209-af72bb1e8e11.pdf"
                        target="_blank">PRESS RELEASE -FINANCIAL RESULTS FOR THE QUARTER AND YEAR ENDED 31st
                        MARCH 2024</a></li>
                <li><a href="//bomdigitalloans.bankofmaharashtra.in/eots/#/e-ots-login"
                        target="_blank">e-OTS</a></li>
                <li><a href="//www.jansamarth.in/home/bom" target="_blank">KCC Jansamarth</a></li>
                <li><a href="//cybercrime.gov.in" target="_blank">For reporting incidents post cyber frauds,
                        Dial 1930 or report cybercrime at https://cybercrime.gov.in.</a></li>
                <li><a href="//bankofmaharashtra.in/properties-for-sale-details?q=pVAqRMg6ciSXLa59IWX1ngmc1OD3J%2fR1vmETpyQmAJc%3d"
                        target="_blank">Sale of Non-Performing Assets (NPAs) account named ASIAN HOTELS (NORTH)
                        LIMITED with total outstanding of our share Rs. 332.12 Crores for Reserve Price Rs.
                        325.00 Crores on 100% Cash Basis</a></li>
                <li><a href="/writereaddata/documentlibrary/bff931dd-7613-4cb0-ab74-ea752fa779e1.pdf"
                        target="_blank">Bank of Maharashtra launches WhatsApp Banking Service</a></li>
                <li><a href="/advances" target="_blank">Dear Customer, In continuation to the increase in Repo
                        rate by RBI, BOM has revised its Repo Linked Lending Rate (RLLR) w.e.f 07.12.2022. As a
                        result, EMI for the Loan sanctioned under floating rate of interest is deemed to be
                        revised. Please contact your home branch for more information regarding your revised EMI
                        &amp; latest applicable Rate of Interest. Regards, Mahabank</a></li>
                <li><a href="//www.incometax.gov.in" target="_blank">As per GOI Guidelines, Bank of Maharashtra
                        has been migrated from OLTAS e-Payment of Direct Taxes facility of e-Filling portal to
                        new TIN 2.0. Users are advised to navigate to e-pay Tax on https://www.incometax.gov.in
                        to make Direct Tax payments</a></li>
                <li><a href="/twelve-hindi-conference" target="_blank">Regarding nomination for 12th World Hindi
                        Conference</a></li>
                <li><a href="//bankofmaharashtra.in/writereaddata/documentlibrary/dadf44cf-4ad5-4d89-b8cd-2690d67bc657.pdf"
                        target="_blank">To safeguard the rights of locker holder, IBA has provided the revised
                        Model Safe Deposit Locker Agreement. You are requested to contact your Bank of
                        Maharashtra branch for execution of New locker agreement or supplementary agreement for
                        your locker before 31.12.2023</a></li>
                <li><a href="//bankofmaharashtra.in/" target="_blank">IMP: RBI has now opened a Late Submission
                        Fees (LSF) Mechanism window for 3 years (starting 22.08.2022) for regularization of
                        delayed ODI remittances. All customers who have ever made any overseas investment in any
                        overseas entity (classNameified ODI by RBI) are advised to ensure their ODI investment is
                        reported to RBI. In case your remittance is not reported to RBI yet; immediately contact
                        your home branch/forex center/TIBD to get any unreported / delayed remittance reporting
                        regularized under LS</a></li>
                <li><a href="//bankofmaharashtra.in/" target="_blank">GENERAL NOTICE Dear Customer, The
                        customers having inoperative PMJDY Saving account in our Bank are requested to operate
                        their account by depositing &amp; withdrawing amount and submit KYC documents to
                        concerned Branch before 31.01.2023. Otherwise such inoperative accounts will be closed
                        after 31.01.2023 assuming that they are not willing to continue their PMJDY SB account.
                        -Mahabank</a></li>
                <li><a href="//bankofmaharashtra.in/" target="_blank">PERIODIC UPDATION OF KYC (RE-KYC) Customer
                        who have received notification through SMS from the Bank and yet to submit KYC
                        documents/Self Declaration Form are requested to submit their KYC documents/Self
                        Declaration Form immediately. Bank has started the process of putting debit freeze is
                        the account/s due to non-compliance of Re-KYC . For assistance , contact any nearby
                        branch.</a></li>
                <li><a href="/advances" target="_blank">Marginal Cost of Funds Based Lending Rate (MCLR) and
                        Repo Rate Linked Lending Rate (RLLR)</a></li>
                <li><a href="//pgi.billdesk.com/pgidsk/pgmerc/bomcard/BOM_card.jsp" target="_blank">BoM Credit
                        Card Bill Payment </a></li>
                <li><a href="//bankofmaharashtra.in/doorstep-banking-services" target="_blank">PSB Alliance
                        Doorstep Banking Services available</a></li>
                <li><a href="//www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=22552"
                        target="_blank">Beware of fictitious offers / lottery winnings / cheap funds offers</a>
                </li>
                <li><a href="//bankofmaharashtra.in/current-openings" target="_blank">Engagement of External
                        members for Settlement Advisory Committee (SAC) at Head Office Level for screening of
                        OTS/Assignment of Debt proposal etc.</a></li>
                <li><a href="//docs.google.com/forms/d/e/1FAIpQLSeonH3PqlAIl9OgjJ1bsBQG6i_4xEE7pWLGDJtfv1AnMfvsBw/viewform"
                        target="_blank">NPS/APY Training : Training for subscribers interested in undergoing
                        online training on APY/NPS</a></li>
                <li><a href="/writereaddata/documentlibrary/4bf754d2-6a72-4aaa-85b7-d2f6584e500e.pdf"
                        target="_blank">Notification for Enhancing Security of Debit Card Transactions</a></li>
                <li><a href="/writereaddata/documentlibrary/ccda8ac0-2369-431c-bb85-3c0e18d1c45c.pdf"
                        target="_blank">Fraudulent Activities in the name of Pradhan Mantri Jan Dan Yojna
                        (PMJDY)</a></li>
                <li><a href="tops-psu-banks-of-loan-deposit-growth" target="_blank">Bank of Maharashtra tops PSU
                        banks in terms of loan and deposit growth</a></li>
                <li><a href="/writereaddata/documentlibrary/31f9a602-352d-430c-978b-fbc1e8c0d0bb.pdf"
                        target="_blank">Notice for Helpline Number for Women in distress</a></li>
                <li><a href="/fx-retail" target="_blank">FX Retail</a></li>
            </ul>
        </div>
    </div>
    <div className="d-block d-lg-none aos-init" data-aos="zoom-in-up" data-aos-duration="600">
        <div className="col-12 mobhdmsg"></div>
        <div className="col-12 col-lg-5 msgcol aos-init" data-aos="zoom-in-up" data-aos-duration="600">
            <div className="row">
                <div className="swiper-container swiper-message">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide messageA"
                           styles={{ backgroundImage: "url(public/projectfiles/bomlayoutcontainer/default/images/images/65n.webp)" }}
                           >
                            <div className="msgbox">
                                <p><span className="fa fa-quote-left"></span><a href="#">Press Meet - Financial
                                        Results for the Q4 FY 2023-24</a></p>
                                <h4>26th April 2024</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="services-main">
        <div className="container-fluid cmpad" id="services">
            <h1 className="homeh1 mt-0">Bank of Maharashtra</h1>
            <div className="row">
                <div className="col-12 services">
                    <div className="row">
                        <div className="col-md-3 headcol aos-init" data-aos="zoom-in-up" data-aos-duration="600">
                            <h2 className="mainhead">What are you <span>looking for?</span></h2>
                        </div>
                        <div className="col-md-9 contentcol">
                            <ul>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/personal-banking/loans/home-loan">Home Loans</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/personal-banking/loans/car-loan">Car Loan</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/gold-loan">Gold Loan Against Ornaments</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/domestic-term-deposits">Deposit Interest Rates</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/advances" target="_blank">Loan Interest Rates</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/downloads">Download Forms</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/toll-free-numbers">Helpline</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/bom-credit-card"> BoM Credit Card </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/netc-fastag"> NETC-Fastag </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//onlinebanking.bankofmaharashtra.in/CustomerUI/#/digitalAccount"
                                        target="_blank"> Online Savings Account </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/digital-banking"> Digital Banking </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/co-lending-digital-lending"> Co-Lending (Digital Lending) </a>
                                </li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/online-loans"> Online Loans </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        className="hbb-first" href="/savings-account">Savings Account </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//bankofmaharashtra.in/locker/default.aspx" target="_blank">
                                        Online Locker Application </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//reward.bankofmaharashtra.in/" target="_blank"> BoM Rewards </a>
                                </li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" class="aos-init"><a
                                        href="//onlinebanking.bankofmaharashtra.in/PensionerPortal/#/digitalAccount"
                                        target="_blank"> Online Jeevan Praman Patra Submission </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/announcement-for-shareholders"> Important Announcement for
                                        Shareholders </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//onlinebanking.bankofmaharashtra.in/ReKYCPortal/#/digitalAccount"
                                        target="_blank"> RE-KYC <img
                                            src="/writereaddata/documentlibrary/new.gif" alt="REKYC"
                                            title="REKYC" className="mtm10"/> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/vcip"> V-CIP <img src="/writereaddata/documentlibrary/new.gif"
                                            alt="vcip" title="vcip" className="mtm10"/> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/metaverse"> Metaverse <img
                                            src="/writereaddata/documentlibrary/new.gif" alt="Check Metaverse"
                                            title="Metaverse" className="mtm10"/> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/nominationform"> Nomination <img
                                            src="/writereaddata/documentlibrary/new.gif"
                                            alt="Apply for Nomination" title="Nomination" className="mtm10"/> </a>
                                </li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/positive-pay-system"> Positive Pay System <img
                                            src="/writereaddata/documentlibrary/new.gif"
                                            alt="check Positive Pay System" title="Positive Pay System"
                                            className="mtm10"/> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//bomsurvey.com/eikp" target="_blank"> Cyber Security Awareness
                                        Quiz <img src="/writereaddata/documentlibrary/new.gif" alt="Quiz"
                                            title="Quiz" styles={{ marginTop: "-10px" }}
                                            /> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//bankofmaharashtra.in/tpa/login.aspx" target="_blank"> TPA <img
                                            src="/writereaddata/documentlibrary/new.gif" alt="TPA" title="TPA"
                                            styles={{ marginTop: "-10px" }}
                                            /> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        className="hbb-first" href="/zed">Incentives to Zero Defect Zero Effect
                                        (ZED) Certified MSME<sub>s</sub> <img
                                            src="/writereaddata/documentlibrary/new.gif" alt="ZED" title="ZED"
                                            styles={{ marginTop: "-10px" }}
                                            /> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//bankofmaharashtra.in/pgrs/register_grievance?source=w"
                                        target="_blank"> RAISE A COMPLAINT <img
                                            src="/writereaddata/documentlibrary/new.gif" alt="COMPLAINT"
                                            title="COMPLAINT" styles={{ marginTop: "-10px" }}
                                            /> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//www.jansamarth.in/apply/bom" target="_blank"> KCC Jansamarth
                                        <img src="/writereaddata/documentlibrary/new.gif" alt="COMPLAINT"
                                            title="COMPLAINT" styles={{ marginTop: "-10px" }}
                                            /> </a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="//bomdigitalloans.bankofmaharashtra.in/eots/#/e-ots-login"
                                        target="_blank"> E-OTS <img src="/writereaddata/documentlibrary/new.gif"
                                            alt="E-OTS" title="E-OTS" styles={{ marginTop: "-10px" }}
                                            /> </a></li>
                            </ul>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-md-3 headcol aos-init" data-aos="zoom-in-up" data-aos-duration="600">
                            <h2 className="mainhead">Ancillary <span>Products</span></h2>
                        </div>
                        <div className="col-md-9 contentcol">
                            <ul>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/ppf-scheme">PPF Scheme</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/writereaddata/documentlibrary/042bb82b-69d5-4ba7-84b7-50884fe38fe3.pdf"
                                        target="_blank">LC/BG Confirmation</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/bank-assurance">Insurance</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/demat-services">Equity Trading Services</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/lockers">Lockers</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/sovereign-gold-bond-scheme">Sovereign Gold Bond Scheme</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/metco-trustee">Metco-Trustee Co</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/senior-citizen-saving-scheme">Senior Citizen Saving Scheme</a>
                                </li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/sukanya-samriddhi-yojana">Sukanya Samriddhi Yojana</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/atal-pension-yojana">Atal Pension Yojana</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/national-pension-system">National Pension System</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/doorstep-banking-services">Doorstep Banking Services</a></li>
                                <li data-aos="zoom-in-up" data-aos-duration="600" className="aos-init"><a
                                        href="/central-govt-pensioner">Central Government Pensioner Corner</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid cmpad galmsg">
        <div className="row">
            <div className="col-12 col-lg-7 aos-init" data-aos="zoom-in-up" data-aos-duration="600">
                <h3>Photo <span>Gallery</span></h3>
            </div>
            <div className="col-12 col-lg-5 d-none d-lg-block aos-init aos-animate" data-aos="zoom-in-up"
                data-aos-duration="600"></div>
        </div>
    </div>
    <div className="message-main">
        <div className="container-fluid" id="message">
            <div className="row">
                <div className="col-12 col-lg-7" id="gallery">
                    <div className="container-fluid p-0">
                        <ul id="homegallery" className="row homegallery">
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4 imgcol"><a
                                    href="https://bankofmaharashtra.in/writereaddata/documentlibrary/7f181760-2851-4cb6-9a08-5c16e52aebeb.jpg" data-fancybox="gallery"
                                    data-caption="Bank of Maharashtra is conferred with awards for Best Bank for promoting Government Schemes in MSME Banking Excellence Awards 2023 hosted by Chamber of Indian Micro Small &amp; Medium Enterprises.">
                                    <span className="thumb-image"
                                       styles={{ backgroundImage: "url(https://bankofmaharashtra.in/writereaddata/documentlibrary/7f181760-2851-4cb6-9a08-5c16e52aebeb.jpg)" }}
                                       ></span>
                                    <span className="overlay"><i class="fa fa-image"></i><span
                                            className="caption"><span>Best Bank for promoting Government Schemes -
                                                by CIMSME </span></span></span> </a></li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4 imgcol"><a
                                    href="https://bankofmaharashtra.in/writereaddata/documentlibrary/7f181760-2851-4cb6-9a08-5c16e52aebeb.jpg" data-fancybox="gallery"
                                    data-caption="Bank of Maharashtra has been conferred with the award for Best Mid Sized Bank in India during the Banking &amp; Economy Summit organised by Business Today at Gandhinagar, Gujarat.">
                                    <span className="thumb-image"
styles={{ backgroundImage: "url(https://bankofmaharashtra.in/writereaddata/documentlibrary/7f181760-2851-4cb6-9a08-5c16e52aebeb.jpg)" }}
></span>
                                    <span className="overlay"><i className="fa fa-image"></i><span
                                            className="caption"><span>Best Mid Sized Bank in
                                                India</span></span></span> </a></li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4 imgcol"><a
                                    href="https://bankofmaharashtra.in/writereaddata/documentlibrary/7f181760-2851-4cb6-9a08-5c16e52aebeb.jpg" data-fancybox="gallery"
                                    data-caption="Bank of Maharashtra is proud to receive IBEX Award for Best Use in Technology under PSU category at IBEX India 2024 Technology Awards in Mumbai.">
                                    <span className="thumb-image"
styles={{ backgroundImage: "url(https://bankofmaharashtra.in/writereaddata/documentlibrary/7f181760-2851-4cb6-9a08-5c16e52aebeb.jpg)" }}
></span>
                                    <span className="overlay"><i className="fa fa-image"></i><span
                                            className="caption"><span>IBEX Award for Best Use in
                                                Technology</span></span></span> </a></li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4 imgcol"><a
                                    href="/writereaddata/galleryimage/66n.webp" data-fancybox="gallery"
                                    data-caption="Bank of Maharashtra is proud to receive Best Public Sector Bank 2023 award at Dhanam BFSI Summit &amp; Award Nite 2024 by Dhanam Business Media at Ernakulam, Kerala. ">
                                    <span className="thumb-image"
                                      styles={{ backgroundImage: "url(../../writereaddata/galleryimage/66tn.webp)" }}
                                      ></span>
                                    <span className="overlay"><i className="fa fa-image"></i><span
                                            className="caption"><span>Best Public Sector Bank
                                                2023</span></span></span> </a></li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4 imgcol"><a
                                    href="/writereaddata/galleryimage/64n.webp" data-fancybox="gallery"
                                    data-caption="Bank of Maharashtra proudly receives 7 IBA Technology Awards under seven different categories for the year 2022-23">
                                    <span className="thumb-image"
styles={{ backgroundImage: "url(../../writereaddata/galleryimage/64tn.webp)" }}
></span>
                                    <span className="overlay"><i className="fa fa-image"></i><span
                                            className="caption"><span>Bank receives 7 IBA Technology
                                                Awards</span></span></span> </a></li>
                            <li className="col-6 col-sm-6 col-md-4 col-lg-4 imgcol"><a
                                    href="/writereaddata/galleryimage/52n.webp" data-fancybox="gallery"
                                    data-caption="Shri Sanjay Malhotra, Honarable Secretary, DFS, MoF, Government of India at Credit Outreach Programme in Pune">
                                    <span className="thumb-image"
                                     styles={{ backgroundImage: "url(../../writereaddata/galleryimage/52tn.webp)" }}
                                     ></span>
                                    <span className="overlay"><i className="fa fa-image"></i><span
                                            className="caption"><span>Shri Sanjay Malhotra, Secretary, DFS, MoF,GoI
                                                at Credit Outreach Programme </span></span></span> </a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-5 msgcol aos-init aos-animate" data-aos="zoom-in-up"
                    data-aos-duration="600">
                    <div className="row">
                        <div className="swiper-container swiper-message">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide messageA"
                                   styles={{ backgroundImage: "url(/projectfiles/bomlayoutcontainer/default/images/images/65n.webp)" }}
                                   >
                                    <div className="msgbox">
                                        <p><span className="fa fa-quote-left"></span><a href="#">Press Meet -
                                                Financial Results for the Q4 FY 2023-24</a></p>
                                        <h4>26th April 2024</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid cmpad" id="appoffer">
        <div className="row">
            <div className="col-12 col-lg-4 col-sm-6 aos-init" data-aos="zoom-in-up" data-aos-duration="600">
                <div className="boxcol offbox products" id="idNoticeDiv">
                    <div
                        className="swiper-container swiper-products swiper-container-initialized swiper-container-horizontal">
                        <div className="swiper-wrapper"
                           styles={{ transitionDuration: "0ms", transform: "translate3d(-670px, 0px, 0px)" }}
                           >
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="11"
                              styles={{ width: "320px", marginRight: "15px" }}
                              >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/f744b01b-bb73-4f18-8875-45e2920e0c1e.webp"
                                                alt="KYC01042023"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="0"
                               styles={{ width: "320px", marginRight: "15px" }}
                               >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img
                                                className="swiper-lazy swiper-lazy-loaded"
                                                src="/writereaddata/bannerimage/7d7967a7-2d0a-4369-9306-e690615bab11.webp"
                                                alt="attention values customer update mobile no and email id "/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1"
                               styles={{ width: "320px", marginRight: "15px" }}
                               >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img
                                                className="swiper-lazy swiper-lazy-loaded"
                                                src="/writereaddata/bannerimage/6eb710cc-0bb9-4a9c-b112-35a4d864abba.webp"
                                                alt="CYBER JAGROOKYTA DIWAS 2024"/></a></div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="2"
                               styles={{ width: "320px", marginRight: "15px" }}
                               >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/cc06637b-7912-4426-b3f2-5ad1e325757a.webp"
                                                alt="PMJDY"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="3"
                                styles={{ width: "320px", marginRight: "15px" }}
                                >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/23860527-4b7a-4709-a812-2abe356f0b72.webp"
                                                alt="Cyber Threats"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="4"
                                styles={{ width: "320px", marginRight: "15px" }}
                                >
                                <div className="box">
                                    <div className="pimgbox1"><a
                                            href="/writereaddata/documentlibrary/d6fa5a03-57b2-4ed7-baf4-6cb62603e3cf.pdf"
                                            target="_blank" rel="noopener noreferrer"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/24c271b7-25a7-4a7a-a3c0-5617bea83ee3.webp"
                                                alt="IFSC deactivation branch list "/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="5"
                               styles={{ width: "320px", marginRight: "15px" }}
                               >
                                <div className="box">
                                    <div className="pimgbox1"><a href="//bankofmaharashtra.in/zed" target="_blank"
                                            rel="noopener noreferrer"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/760f9326-ba5c-47d9-be9e-30a9bae9707f.webp"
                                                alt="ZED Scheme"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="6"
                               styles={{ width: "320px", marginRight: "15px" }}
                               >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/3a67cd25-fb68-43b9-84c5-d06952c89ce6.webp"
                                                alt="RBI Kehta Hai"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="7"
                               styles={{ width: "320px", marginRight: "15px" }}
                               >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/824b52a5-c515-4818-8ba8-d62971e4064a.webp"
                                                alt="what is PM MUDRA Yojana Fraud"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="8"
                                styles={{ width: "320px", marginRight: "15px" }}
                                >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/5f270948-0b36-404f-8307-b0c7c60a1694.webp"
                                                alt="CYBER SECURITY 1930"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="9"
                               styles={{ width: "320px", marginRight: "15px" }}
                               >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/bd6328ac-1561-4cb5-887c-6a89104791f5.webp"
                                                alt="Dirghayu Application Notice"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="10"
                               styles={{ width: "320px", marginRight: "15px" }}
>
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/1a20e9fc-4038-4a54-bd0b-759172b5b015.webp"
                                                alt="KYC-05042023-Marathi"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="11"
                             styles={{ width: "320px", marginRight: "15px" }}
                             >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/f744b01b-bb73-4f18-8875-45e2920e0c1e.webp"
                                                alt="KYC01042023"/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className="swiper-pagination swiper-pagination-white"></div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                                data-swiper-slide-index="0" styles={{ width: "320px", marginRight: "15px" }}
                                >
                                <div className="box">
                                    <div className="pimgbox1"><a href="#"><img className="swiper-lazy"
                                                src="/writereaddata/defaultimages/loader.svg"
                                                data-src="/writereaddata/bannerimage/7d7967a7-2d0a-4369-9306-e690615bab11.webp"
                                                alt="attention values customer update mobile no and email id "/>
                                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                        </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                    <div className="swiper-button-next products-next" tabindex="0" role="button"
                        aria-label="Next slide"><span className="fa fa-angle-right"></span></div>
                    <div className="swiper-button-prev products-prev" tabindex="0" role="button"
                        aria-label="Previous slide"><span className="fa fa-angle-left"></span></div>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-sm-6 order-lg-3 aos-init" data-aos="zoom-in-up"
                data-aos-duration="600">
                <div className="boxcol offbox">
                    <h3 className="mainhead">Offers<span> for you</span></h3>
                    <div
                        className="swiper-container swiper-offer swiper-container-initialized swiper-container-horizontal">
                        <div className="swiper-wrapper"
                            styles={{ transitionDuration: "0ms", transform: "translate3d(-305px, 0px, 0px)" }}
                            >
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                data-swiper-slide-index="9" styles={{ width: "290px", marginRight: "15px" }}
                                ><a

                             
                                    href="/writereaddata/offerimage/my-app/public/writereaddata/offerimage/1e5b72b2-eb9b-4b3c-9060-4bda02d1de5a.webp"
                                    data-fancybox="galleryOffer"><img
                                       
                                        src="/writereaddata/offerimage/my-app/public/writereaddata/offerimage/1e5b72b2-eb9b-4b3c-9060-4bda02d1de5a.webp"
                                        className="swiper-lazy" alt="easydiner"/>
                                    <div classNameclassName="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0"
                                styles={{ width: "290px", marginRight: "15px" }}
                                ><a
                                    href=""
                                    target="_blank" rel="noopener noreferrer"><img
                                        src="/writereaddata/offerimage/13e25f36-0693-46e8-9804-cbb1f98cf270.webp"
                                        className="swiper-lazy swiper-lazy-loaded" alt="Estele Rupay offer"/></a>
                            </div>
                            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1"
                               styles={{ width: "290px", marginRight: "15px" }}
                               ><a
                                    href="/writereaddata/offerimage/5eb171d8-974d-4510-a551-2b70a75134fa.webp"
                                    data-fancybox="galleryOffer"><img
                                        src="/writereaddata/defaultimages/loader.svg"
                                        data-src="/writereaddata/offerimage/5eb171d8-974d-4510-a551-2b70a75134fa.webp"
                                        className="swiper-lazy" alt="Book My Show B1G1"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide" data-swiper-slide-index="2"
                                styles={{ width: "290px", marginRight: "15px" }}
                                ><a
                                    href="/writereaddata/offerimage/323bc976-c408-4b15-a2af-01ad73803109.webp"
                                    data-fancybox="galleryOffer"><img
                                        src="/writereaddata/defaultimages/loader.svg"
                                        data-src="/writereaddata/offerimage/323bc976-c408-4b15-a2af-01ad73803109.webp"
                                        className="swiper-lazy" alt="AbhiBus Offer"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide" data-swiper-slide-index="3"
                               styles={{ width: "290px", marginRight: "15px" }}
                               ><a
                                    href="/writereaddata/offerimage/27264565-4357-4fdb-8f0a-5aa023d515b0.webp"
                                    data-fancybox="galleryOffer"><img
                                        src="/writereaddata/defaultimages/loader.svg"
                                        data-src="/writereaddata/offerimage/27264565-4357-4fdb-8f0a-5aa023d515b0.webp"
                                        className="swiper-lazy" alt="Lunch Box Offer"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide" data-swiper-slide-index="4"
                                styles={{ width: "290px", marginRight: "15px" }}
                                ><a
                                    href="/writereaddata/offerimage/1685d740-96e0-4d85-a9fd-a10a3e3b9186.webp"
                                    data-fancybox="galleryOffer"><img
                                        src="/writereaddata/defaultimages/loader.svg"
                                        data-src="/writereaddata/offerimage/1685d740-96e0-4d85-a9fd-a10a3e3b9186.webp"
                                        className="swiper-lazy" alt="Rapido Offer"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide" data-swiper-slide-index="5"
                                styles={{ width: "290px", marginRight: "15px" }}
                                ><a
                                    href="/writereaddata/offerimage/1e5b72b2-eb9b-4b3c-9060-4bda02d1de5a.webp"
                                    data-fancybox="galleryOffer"><img
                                        src="/writereaddata/defaultimages/loader.svg"
                                        data-src="/writereaddata/offerimage/1e5b72b2-eb9b-4b3c-9060-4bda02d1de5a.webp"
                                        className="swiper-lazy" alt="Fastrack Offer"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide" data-swiper-slide-index="6"
                                styles={{ width: "290px", marginRight: "15px" }}
                                ><a
                                    href="/writereaddata/offerimage/6406b34e-62bb-4248-9d53-dc145cf30065.webp"
                                    data-fancybox="galleryOffer"><img
                                        
                                    src="/writereaddata/offerimage/6406b34e-62bb-4248-9d53-dc145cf30065.webp"
                                        className="swiper-lazy" alt="Zouk Offer"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide" data-swiper-slide-index="7"
                              styles={{ width: "290px", marginRight: "15px" }}
                              ><a
                                    href="/writereaddata/offerimage/6406b34e-62bb-4248-9d53-dc145cf30065.webp"
                                    data-fancybox="galleryOffer"><img
                                        
                                        src="/writereaddata/offerimage/6406b34e-62bb-4248-9d53-dc145cf30065.webp"
                                        className="swiper-lazy" alt="Offers- BoAt"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide" data-swiper-slide-index="8"
                               styles={{ width: "290px", marginRight: "15px" }}
                               ><a
                                    href="/writereaddata/offerimage/2942871c-8248-461e-9b7c-616a44932011.jpg"
                                    data-fancybox="galleryOffer"><img
                                       
                                        src="/writereaddata/offerimage/2942871c-8248-461e-9b7c-616a44932011.jpg"
                                        className="swiper-lazy" alt="Make my Trip"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="9"
                               styles={{ width: "290px", marginRight: "15px" }}
                               ><a
                                    href="/writereaddata/offerimage/2942871c-8248-461e-9b7c-616a44932011.jpg"
                                    data-fancybox="galleryOffer"><img
                                      
                                        src="/writereaddata/offerimage/22942871c-8248-461e-9b7c-616a44932011.jpg"
                                        className="swiper-lazy" alt="easydiner"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                            <div className="swiper-pagination swiper-pagination-white"></div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                data-swiper-slide-index="0" styles={{ width: "290px", marginRight: "15px" }}
                                ><a
                                    href="//www.rupay.co.in/rupay-festive-carnival/rupay-festive-carnival-detail?id=64"
                                    target="_blank" rel="noopener noreferrer"><img
                                       
                                       src="/writereaddata/offerimage/13e25f36-0693-46e8-9804-cbb1f98cf270.webp"
                                        className="swiper-lazy" alt="Estele Rupay offer"/>
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </a></div>
                        </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                    <div className="swiper-button-next offer-next" tabindex="0" role="button"
                        aria-label="Next slide"><span className="fa fa-angle-right"></span></div>
                    <div className="swiper-button-prev offer-prev" tabindex="0" role="button"
                        aria-label="Previous slide"><span className="fa fa-angle-left"></span></div>
                    <div className="div-off-more"><a href="/offers" className="btn btnmore"> All Offers <span
                                className="fas fa-angle-right"></span> </a></div>
                </div>
            </div>
            <div className="col-12 col-lg-4 col-sm-12 order-lg-2 mobcol aos-init" data-aos="zoom-in-up"
                data-aos-duration="600">
                <div className="boxcol slbc">
                    <h3 className="mainhead">SLBC <span>Maharashtra</span></h3>
                    <ul className="linklist">
                        <li><a href="/slbc-about-us">About Us<span className="fa fa-angle-right"></span></a></li>
                        <li><a href="/banking-network">Banking Network<span
                                    className="fa fa-angle-right"></span></a></li>
                        <li><a href="/data-submission" target="_blank">Data Submission<span
                                    className="fa fa-angle-right"></span></a></li>
                        <li><a href="/financial-inclusion">Financial Inclusion<span
                                    className="fa fa-angle-right"></span></a></li>
                        <li><a href="/govt-sponsored-programmes">Govt Sponsored Programmes<span
                                    className="fa fa-angle-right"></span></a></li>
                        <li><a href="/lead-bank-scheme">Lead Bank Scheme<span
                                    className="fa fa-angle-right"></span></a></li>
                        <li><a href="/miscellaneous">Miscellaneous<span className="fa fa-angle-right"></span></a>
                        </li>
                        <li><a href="/photo-gallery">Photo Gallery<span className="fa fa-angle-right"></span></a>
                        </li>
                        <li><a href="/slbc-meetings">SLBC Meetings<span className="fa fa-angle-right"></span></a>
                        </li>
                        <li><a href="/state-profile">State Profile<span className="fa fa-angle-right"></span></a>
                        </li>
                        <li><a href="/useful-links">Useful Links<span className="fa fa-angle-right"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}
export default MiddleSection;