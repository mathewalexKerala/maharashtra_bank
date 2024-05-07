// components/Header.js
// components/Header.js

import Image from "next/image";

import { useState, useEffect } from "react";

const Header = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    // Set a timeout to switch to the actual image after 10 seconds
    const timer = setTimeout(() => {
      setShowPlaceholder(false);
    }, 5000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []); //

  return (
    <>
      <header>
        <div className="tophead">
          <div className="container-fluid cmpad d-flex">
            <div className="col-8 topleft p-0">
              <ul className="nav">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="" target="_blank">
                    Locate Us
                  </a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li className="search-container d-none d-lg-block">
                  <form action="" id="frmSearch" method="get">
                    <div className="searchcol">
                      <input
                        className="form-control"
                        id="txtSearchText"
                        type="search"
                        name="q"
                        placeholder="Type here to search..."
                      />{" "}
                      <button
                        type="submit"
                        className="btn btnsubmit"
                        id="btnSearch"
                      >
                        <span className="mglass">⚲</span>
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
            <div className="col topright px-0">
              <ul className="fontsize">
                <li>
                  <button id="skipToContent" style={{ display: "none" }}>
                    Skip to Content
                  </button>
                </li>
                <li>
                  <button id="sizeDown">A-</button>
                </li>
                <li>
                  <button id="normal">A</button>
                </li>
                <li>
                  <button id="sizeUp">A+</button>
                </li>
              </ul>
              <div className="custom-control custom-switch theme">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="themeSwitch"
                />{" "}
                <label className="custom-control-label" for="themeSwitch">
                  .
                </label>
              </div>
              <div className="btn-group language">
                <button
                  className="btn btn-outline-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  English
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="">
                    हिन्दी
                  </a>
                  <a className="dropdown-item" href="">
                    मराठी
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="clear"></div>
        <div className="container-fluid d-flex cmpad">
          <div className="col-8 col-lg-4 logo p-0">
            <a href="/">
              {" "}
              <img
                src="/projectfiles/bomlayoutcontainer/default/images/logo/logo-white.svg"
                className="logoimg logowhite"
                alt="Bank of Maharashtra"
                title="Bank of Maharashtra"
              />{" "}
            </a>
          </div>
          <div className="col-lg-8 col-4 p-0">
            <div className="d-block d-lg-none float-right">
              <a href="#0" className="menubtn cd-dropdown-trigger">
                <span className="fa fa-align-right"></span>{" "}
                <span className="txt">Menu</span>
              </a>
            </div>
            <div className="navbar d-none d-lg-flex">
              <div className="megamenu">
                <a className="mainli" href="/personal-products">
                  Personal
                </a>
                <div className="megamenu-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="tabmenucol">
                        <div
                          className="nav flex-column nav-pills custscrollA"
                          id="personalNav"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="pbCDeposit"
                            data-toggle="pill"
                            href="#pbCurDeposit"
                            role="tab"
                            aria-controls="pbCurDeposit"
                            aria-selected="false"
                          >
                            {" "}
                            Deposits{" "}
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="pbTDeposit"
                            data-toggle="pill"
                            href="#pbTermDeposit"
                            role="tab"
                            aria-controls="pbTermDeposit"
                            aria-selected="false"
                          >
                            {" "}
                            Loans{" "}
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="pbCGain"
                            data-toggle="pill"
                            href="#pbCapitalGain"
                            role="tab"
                            aria-controls="pbCapitalGain"
                            aria-selected="false"
                          >
                            {" "}
                            Digital Banking
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="pbRlLoan"
                            data-toggle="pill"
                            href="#pbRetailLoan"
                            role="tab"
                            aria-controls="pbRetailLoan"
                            aria-selected="false"
                          >
                            {" "}
                            Govt. Schemes{" "}
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="pbColending"
                            data-toggle="pill"
                            href="#pbColendingDL"
                            role="tab"
                            aria-controls="pbColendingDL"
                            aria-selected="false"
                          >
                            {" "}
                            Co-Lending (Digital Lending){" "}
                          </a>
                        </div>
                      </div>
                      <div className="tabcontentcol">
                        <div className="tab-content" id="personalNavContent">
                          <div
                            className="tab-pane show active"
                            id="pbCurDeposit"
                            role="tabpanel"
                            aria-labelledby="pbCurDeposit"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="">
                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="savings account"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/savings-account.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="savings account"
                                      title="Savings Account"
                                      fetchPriority="high"
                                    />
                                  )}
                                  <span>Savings Deposit</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/current-deposit">
                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="current deposit"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/current-deposite.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="current deposit"
                                      title="current deposit"
                                      fetchPriority="high"
                                    />
                                  )}
                                  <span>Current Deposits</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="term deposit"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/savings-account.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="term deposit"
                                      title="term deposit"
                                      fetchPriority="high"
                                    />
                                  )}
                                 {" "}
                                  <span>Term Deposits</span>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="capital gain account"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/capital-gain-account-wn.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="capital gain account"
                                      title="capital gain account"
                                      fetchPriority="high"
                                    />
                                  )}
                                  {" "}
                                  <span>Capital Gain Account</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/onlinenomination/validate"
                                  target="_blank"
                                >
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Facility For Online Nomination"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/onlinenomination.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Facility For Online Nomination"
                                      title="Facility For Online Nomination"
                                      fetchPriority="high"
                                    />
                                  )}
                                  
                                  <span>Facility For Online Nomination</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="pbTermDeposit"
                            role="tabpanel"
                            aria-labelledby="pbTDeposit"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/personal-banking/loans/home-loan">
                                  {" "}
                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="home loan"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/capital-gain-account-wn.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="home loan"
                                      title="home loan"
                                      fetchPriority="high"
                                    />
                                  )}
                                 
                                  <span>Maha Super Housing Loan Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/maha-super-flexi-housing-loan-scheme">
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Flexi Housing Loan"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/credit-card-w.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Flexi Housing Loan"
                                      title="Flexi Housing Loan"
                                      fetchPriority="high"
                                    />
                                  )}


{" "}
                                  <span>
                                    Maha Super Flexi Housing Loan Scheme
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/personal-banking/loans/car-loan">
                                  {" "}


                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Flexi Housing Loan"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/bill_finance-w.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Flexi Housing Loan"
                                      title="Flexi Housing Loan"
                                      fetchPriority="high"
                                    />
                                  )}






                                
                                  <span>Maha Super Car loan Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/maha-combo-loan-scheme">
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="House Car Combo Loan"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/bhim-upi-w.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="House Car Combo Loan"
                                      title="House Car Combo Loan"
                                      fetchPriority="high"
                                    />
                                  )}



{" "}
                                  <span>Maha Combo Loan Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/pardhan-mantri-awas-yojana">
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Pradan Mantri Awas Yojana"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/credit-card-w.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Pradan Mantri Awas Yojana"
                                      title="Pradan Mantri Awas Yojana"
                                      fetchPriority="high"
                                    />
                                  )}



{" "}
                                  <span>Pradhan Mantri Awas Yojana</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/vehicle-loan-for-old-car-and-two-wheelers">
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Loan for Old Card and New Bik"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Loan for Old Card and New Bik"
                                      title="Loan for Old Card and New Bik"
                                      fetchPriority="high"
                                    />
                                  )}






                                 
                                  <span>
                                    Mahabank Vehicle Loan Scheme for Old Car and
                                    Two Wheelers
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/topup-home-loan">
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="top up loan for home loan borrowers"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/4.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="top up loan for home loan borrowers"
                                      title="top up loan for home loan borrowers"
                                      fetchPriority="high"
                                    />
                                  )}



                                  <span>
                                    TopUp Loan for Home loan borrowers
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="pbCapitalGain"
                            role="tabpanel"
                            aria-labelledby="pbCGain"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="/internet-banking">
                                  {" "}



                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Internet Banking"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/internet-banking-w.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Internet Banking"
                                      title="Internet Banking"
                                      fetchPriority="high"
                                    />
                                  )}




                               
                                  <span>Internet Banking</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/maha-mobile">
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Maha Mobile"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/maha-mobile_1.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Maha Mobile"
                                      title="Maha Mobile"
                                      fetchPriority="high"
                                    />
                                  )}


                                 
                                  <span>Maha Mobile</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/maha-upi">
                                  {" "}

                                  
                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Maha UPI"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/maha-upi_1.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Maha UPI"
                                      title="Maha UPI"
                                      fetchPriority="high"
                                    />
                                  )}







                                  <span>Maha UPI</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/e-sbtr">
                                  {" "}


                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="e-SBTR"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/e-sbtr2.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="e-SBTR"
                                      title="e-SBTR"
                                      fetchPriority="high"
                                    />
                                  )}









                                  <span>e-SBTR</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/personal-digital-banking">
                                  {" "}

                                  
                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Personal Digital Banking"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/personal-digital-bankin.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Personal Digital Banking"
                                      title="Personal Digital Banking"
                                      fetchPriority="high"
                                    />
                                  )}







{" "}
                                  <span>Personal Digital Banking</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/debit-cards">
                                  {" "}


                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Debit Card"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/debit-card.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Debit Card"
                                      title="Debit Card"
                                      fetchPriority="high"
                                    />
                                  )}










                                  <span>Debit Cards</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/credit-cards">
                                  {" "}

                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="Debit Card"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/credit-card-w.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="Debit Card"
                                      title="Debit Card"
                                      fetchPriority="high"
                                    />
                                  )}




{" "}
                                  <span>Credit Cards</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/e-gadgets">
                                  {" "}
                                  {showPlaceholder ? (
                                    <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="E-Gadgets"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/e-gadgets.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="E-Gadgets"
                                      title="E-Gadgets"
                                      fetchPriority="high"
                                    />
                                  )}








                                  <span>E-gadgets</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/digital-signage-system">
                                  {" "}
                                  {showPlaceholder ? (
 
                                  <Image
                                      src="/writereaddata/defaultimages/loader.svg"
                                      title="digital-signage-system"
                                      width={50}
                                      height={50}
                                    />
                                  ) : (
                                    <Image
                                      src="/projectfiles/bomlayoutcontainer/default/images/menu/digital-signage-system.svg"
                                      width={50}
                                      height={50}
                                      style={{ marginRight: "20px" }}
                                      className="loadimg"
                                      alt="digital-signage-system"
                                      title="digital-signage-system"
                                      fetchPriority="high"
                                    />
                                  )}




{" "}
                                  <span>Digital Signage System</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/bharat-bill-payment-service">
                                  {" "}




                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/bharat-bill-payment-service.svg"
                                    className="loadimg"
                                    alt="bharat bill payment"
                                    title="Bharat bil payment"
                                  />{" "}
                                  <span>Bharat Bill Payment Service</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/bhim-aadhaar-pay">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/bhim-upi-w.svg"
                                    className="loadimg"
                                    alt="bhim upi"
                                    title="BHIM UPI"
                                  />
                                  <span>BHIM Aadhar Pay</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/netc-fastag">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/netc-fastag.svg"
                                    className="loadimg"
                                    alt="netc fastag"
                                    title="NETC-FASTag"
                                  />{" "}
                                  <span>NETC-FASTag</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/whatsapp-banking">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/whatsapp.svg"
                                    className="loadimg"
                                    alt="whatsapp banking"
                                    title="WhatsApp Banking"
                                  />{" "}
                                  <span>WhatsApp Banking</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/debit-card-e-mandate">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/e-mandate.svg"
                                    className="loadimg"
                                    alt="E-Mandate"
                                    title="E-Mandate"
                                  />
                                  <span>Debit Card E-mandate</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/digital-applications-detail">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/images/agribusinesscenter-w.svg"
                                    className="loadimg"
                                    alt="Digital Applications Detail"
                                    title="Digital Applications Detail"
                                  />{" "}
                                  <span>Digital Applications Detail</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/dbu">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/capital-gain-account-wn.svg"
                                    className="loadimg"
                                    alt="Digital Banking Unit"
                                    title="Digital Banking Unit"
                                  />{" "}
                                  <span>Digital Banking Unit</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="pbRetailLoan"
                            role="tabpanel"
                            aria-labelledby="pbRlLoan"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="/pmjdy">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/pmjdy-w.svg"
                                    className="loadimg"
                                    alt="Pradhan Mantri Jan-Dhan Yojana (pmjdy)"
                                    title="Pradhan Mantri Jan-Dhan Yojana(PMJDY)"
                                  />
                                  <span>PMJDY</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/pm-jeevan-jyoti-bima-yojana">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/pmjjby-w.svg"
                                    className="loadimg"
                                    alt="Pradhan Mantri Jeevan Jyoti Bima Yojana(PMJJBY)"
                                    title="Pradhan Mantri Jeevan Jyoti Bima Yojana(PMJJBY)"
                                  />
                                  <span>PMJJBY</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/pm-suraksha-bima-yojana">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/p_m_suraksha_bima_yojana.svg"
                                    className="loadimg"
                                    alt="pradhan mantri suraksha bima yojana(PMSBY)"
                                    title="Pradhan Mantri Suraksha Bbima Yojana(PMSBY)"
                                  />
                                  <span>PMSBY</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/sovereign-gold-bond-scheme">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/sovereign_gold_bond_scheme_w.svg"
                                    className="loadimg"
                                    alt="sovereign gold bond scheme"
                                    title="Sovereign Gold Bond Scheme"
                                  />{" "}
                                  <span>Sovereign Gold Bond Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/ppf-scheme">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/ppf-wn.svg"
                                    className="loadimg"
                                    alt="ppf"
                                    title="PPF Scheme"
                                  />
                                  <span>PPF Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/national-pension-system">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/national-pension-scheme2-w.svg"
                                    className="loadimg"
                                    alt="national pension System"
                                    title="National Pension System"
                                  />{" "}
                                  <span>National Pension System</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/atal-pension-yojana">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/atal_pension_yojana-w.svg"
                                    className="loadimg"
                                    alt="atal pension yojana"
                                    title="Atal Pension Yojana"
                                  />{" "}
                                  <span>Atal Pension Yojana</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/sukanya-samriddhi-yojana">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/sukanya_samriddhi_yojana_wn.svg"
                                    className="loadimg"
                                    alt="sukanya samriddhi yojana"
                                    title="Sukanya Samriddhi Yojana"
                                  />{" "}
                                  <span>Sukanya Samriddhi Yojana</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/floating-rate-savings-bonds">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/floating_rate_savings_bonds.svg"
                                    className="loadimg"
                                    alt="floating rate savings bonds"
                                    title="Floating Rate Savings Bonds"
                                  />{" "}
                                  <span>Floating Rate Savings Bonds</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="pbColendingDL"
                            role="tabpanel"
                            aria-labelledby="pbColending"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/ms-in-cred-financial-services">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/internet-banking-w.svg"
                                    className="loadimg"
                                    alt="M/s in cred financial service ltd"
                                    title="M/s in cred financial service ltd"
                                  />
                                  <span>M/s in cred financial service ltd</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="megamenu">
                <a className="mainli" href="/corporates">
                  Corporate
                </a>
                <div className="megamenu-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="tabmenucol">
                        <div
                          className="nav flex-column nav-pills custscrollA"
                          id="corporateNav"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="crB"
                            data-toggle="pill"
                            href="#crBs"
                            role="tab"
                            aria-controls="crBs"
                            aria-selected="true"
                          >
                            Corporate Banking
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="crMSME"
                            data-toggle="pill"
                            href="#crLmsme"
                            role="tab"
                            aria-controls="crLmsme"
                            aria-selected="false"
                          >
                            Loans for MSME
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="crT"
                            data-toggle="pill"
                            href="#crTs"
                            role="tab"
                            aria-controls="crTs"
                            aria-selected="false"
                          >
                            Treasury
                          </a>
                        </div>
                      </div>
                      <div className="tabcontentcol">
                        <div className="tab-content" id="corporateNavContent">
                          <div
                            className="tab-pane"
                            id="crLmsme"
                            role="tabpanel"
                            aria-labelledby="crMSME"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="/msme-large-credit">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/4.svg"
                                    className="loadimg"
                                    alt="Loans for MSME"
                                    title="Loans for MSME"
                                  />{" "}
                                  <span>Loans for MSME</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane show active"
                            id="crBs"
                            role="tabpanel"
                            aria-labelledby="crBs"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="/working-capital">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/working-capital-w.svg"
                                    className="loadimg"
                                    alt="working capital"
                                    title="Working Capital"
                                  />{" "}
                                  <span>Working Capital</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/term-finance">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/term-finance1-w.svg"
                                    className="loadimg"
                                    alt="term finance"
                                    title="Term Finance"
                                  />{" "}
                                  <span>Term Finance</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/project-finance">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/project-financ.svg"
                                    className="loadimg"
                                    alt="project finance"
                                    title="Project Finance"
                                  />{" "}
                                  <span>Project Finance</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/infrastructure-finance">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/infrastructure-finance.svg"
                                    className="loadimg"
                                    alt="infrastructure finance"
                                    title="Infrastructure Finance"
                                  />{" "}
                                  <span>Infrastructure Finance</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/line-of-credit">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/line-of-credit-w.svg"
                                    className="loadimg"
                                    alt="line of credit"
                                    title="Line of Credit"
                                  />{" "}
                                  <span>Line of Credit</span>
                                </a>
                              </li>
                              <li>
                                <a href="/export-finance">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/export-finance-w.svg"
                                    className="loadimg"
                                    alt="export finance"
                                    title="Export Finance"
                                  />{" "}
                                  <span>Export Finance</span>
                                </a>
                              </li>
                              <li>
                                <a href="/bill-finance">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/bill_finance-w.svg"
                                    className="loadimg"
                                    alt="bill finance"
                                    title="Bill Finance"
                                  />{" "}
                                  <span>Bill Finance</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/commercial-lease-rental-discounting">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/commerciallease-w.svg"
                                    className="loadimg"
                                    alt="commercial lease rental discounting"
                                    title="Mahabank Commercial Lease Rental Discounting Scheme"
                                  />
                                  <span>
                                    Mahabank Commercial Lease Rental Discounting
                                    Scheme
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/takeover-of-accounts">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/takeover-of-accounts-w.svg"
                                    className="loadimg"
                                    alt="takeover of accounts"
                                    title="Takeover of Accounts"
                                  />{" "}
                                  <span>Takeover of Accounts</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/non-fund-based-services">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/non-fund-based-services_w.svg"
                                    className="loadimg"
                                    alt="non fund based services"
                                    title="Non Fund Based Services"
                                  />{" "}
                                  <span>Non Fund Based Services</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="crTs" role="tabpanel">
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="/treasury-banking">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/4.svg"
                                    className="loadimg"
                                    alt="Treasury"
                                    title="Treasury"
                                  />
                                  <span>Treasury</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="megamenu">
                <a className="mainli" href="/msme-large-credit">
                  MSME
                </a>
                <div className="megamenu-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="tabmenucol">
                        <div
                          className="nav flex-column nav-pills custscrollA"
                          id="msmeNav"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="BmsmeSL"
                            data-toggle="pill"
                            href="#msmeSL"
                            role="tab"
                            aria-controls="msmeSL"
                            aria-selected="true"
                          >
                            {" "}
                            Bank's MSME Schematic Loans{" "}
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="msmegov"
                            data-toggle="pill"
                            href="#msmegovs"
                            role="tab"
                            aria-controls="msmegovs"
                            aria-selected="false"
                          >
                            {" "}
                            Government Schemes for MSME
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="msmeRPF"
                            data-toggle="pill"
                            href="#msmeRPFs"
                            role="tab"
                            aria-controls="msmeRPFs"
                            aria-selected="false"
                          >
                            {" "}
                            Covid-19 Related Products &amp; FAQs
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="msmeOGS"
                            data-toggle="pill"
                            href="#msmeOGSs"
                            role="tab"
                            aria-controls="msmeOGSs"
                            aria-selected="false"
                          >
                            {" "}
                            General MSME Credit Facilities{" "}
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="msmeCol"
                            data-toggle="pill"
                            href="#msmeCols"
                            role="tab"
                            aria-controls="msmeCols"
                            aria-selected="false"
                          >
                            {" "}
                            Co-Lending (Digital Lending){" "}
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="msmeOI"
                            data-toggle="pill"
                            href="#msmeOIs"
                            role="tab"
                            aria-controls="msmeOIs"
                            aria-selected="false"
                          >
                            {" "}
                            Other Information{" "}
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="msmeMSS"
                            data-toggle="pill"
                            href="#msmeMSSs"
                            role="tab"
                            aria-controls="msmeMSSs"
                            aria-selected="false"
                          >
                            {" "}
                            Maha Swagatam Scheme{" "}
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="msmeZED"
                            data-toggle="pill"
                            href="#msmeZEDs"
                            role="tab"
                            aria-controls="msmeZEDs"
                            aria-selected="false"
                          >
                            {" "}
                            Incentives to Zero Defect Zero Effect (ZED)
                            Certified MSMEs{" "}
                          </a>
                        </div>
                      </div>
                      <div className="tabcontentcol">
                        <div className="tab-content" id="msmeNavContent">
                          <div
                            className="tab-pane show active"
                            id="msmeSL"
                            role="tabpanel"
                            aria-labelledby="msmeSL"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/mahabank-gst-credit-scheme">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/gst-credit-scheme-w.svg"
                                    className="loadimg"
                                    alt="gst credit scheme"
                                    title="Mahabank GST Credit Scheme"
                                  />{" "}
                                  <span>Mahabank GST Credit Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/hotel-and-restaurant-loan">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/hospitality2.svg"
                                    className="loadimg"
                                    alt="loan for hotels and restaurant"
                                    title="Mahabank Scheme for units engaged in Hospitality"
                                  />
                                  <span>
                                    Mahabank Scheme for units engaged in
                                    Hospitality
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/mahabank-scheme-for-contractors">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/scheme-for-contractors-2.svg"
                                    className="loadimg"
                                    alt="contractors loan"
                                    title="Mahabank Scheme for Contractors"
                                  />
                                  <span>Mahabank Scheme for Contractors</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/vehicle-loan-for-small-road-transport-operator">
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/vehicle-loan-small-road-transportar-w.svg"
                                    className="loadimg"
                                    alt="vehicle loan for small road transportar"
                                    title="Mahabank Vehicle Loan Scheme For Small Road Transport Operator"
                                  />
                                  <span>
                                    Mahabank Vehicle Loan Scheme For Small Road
                                    Transport Operator
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/maha-msme-project-loan-scheme">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/maha-msme-project-loan-scheme-w.svg"
                                    className="loadimg"
                                    alt="maha msme project loan scheme"
                                    title="Maha MSME Project Loan Scheme"
                                  />{" "}
                                  <span>Maha MSME Project Loan Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/msme-machinery-equipment-scheme">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/maha-msme-machinery-equipment-scheme-w.svg"
                                    className="loadimg"
                                    alt="maha msme machinery equipment scheme"
                                    title="Maha MSME Machinery/Equipment Scheme"
                                  />
                                  <span>
                                    Maha MSME Machinery/Equipment Scheme
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/treds">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/treds-w.png"
                                    className="loadimg"
                                    alt="treds"
                                    title="TReDS"
                                  />
                                  <span>TReDS</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/standby-line-credit">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/standby-line-of-credit-w.svg"
                                    className="loadimg"
                                    alt="standby line of credit"
                                    title="Standby Line of Credit"
                                  />{" "}
                                  <span>Standby Line of Credit</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/maha-lap-mortgage-loan">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/mortgageloan.svg"
                                    className="loadimg"
                                    alt="mortgageloan"
                                    title="Maha LAP - Mortgage Loan"
                                  />{" "}
                                  <span>Maha LAP - Mortgage Loan</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/mahabank-loan-scheme-for-doctors">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/mahabank-loan-scheme-for-doctors-chartered-accountants-engineers-and-architect1.svg"
                                    className="loadimg"
                                    alt="doctors loan"
                                    title="Mahabank Loan Scheme For Doctors"
                                  />
                                  <span>Mahabank Loan Scheme For Doctors</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/mahabank-professional-loan-scheme-mpls">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/professionalloan.png"
                                    className="loadimg"
                                    alt="professional loan"
                                    title="Mahabank Professional Loan Scheme MPLS"
                                  />
                                  <span>
                                    Mahabank Professional Loan Scheme MPLS
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="msmegovs"
                            role="tabpanel"
                            aria-labelledby="msmegovs"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/pradhan-mantri-mudra-yojana">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/bill_finance-w.svg"
                                    className="loadimg"
                                    alt="pradhan mantri mudra yojana"
                                    title="Pradhan Mantri Mudra Yojana"
                                  />{" "}
                                  <span>Pradhan Mantri Mudra Yojana</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/stand-up-india">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/bharat-bill-payment-service.svg"
                                    className="loadimg"
                                    alt="stand up india"
                                    title="Stand-Up India"
                                  />{" "}
                                  <span>Stand-Up India</span>
                                </a>
                              </li>
                              <li>
                                <a href="/pm-svanidhi-scheme">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/landandsmall-w.svg"
                                    className="loadimg"
                                    alt="pm svanidhi"
                                    title="PM SVANidhi Scheme"
                                  />{" "}
                                  <span>PM SVANidhi Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/pmegp">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/maha-mobile_1.svg"
                                    className="loadimg"
                                    alt="pradhan mantri employment generation program"
                                    title="Pradhan Mantri Employment Generation Program"
                                  />
                                  <span>
                                    Pradhan Mantri Employment Generation Program
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="msmeRPFs"
                            role="tabpanel"
                            aria-labelledby="msmeRPFs"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/guaranteed-emergency-credit-line">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/landandsmall-w.svg"
                                    className="loadimg"
                                    alt="guaranteed emergency credit line"
                                    title="Guaranteed Emergency Credit Line"
                                  />
                                  <span>Guaranteed Emergency Credit Line</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/scheme-for-subordinate-debt">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/bharat-bill-payment-service.svg"
                                    className="loadimg"
                                    alt="credit guarantee scheme for subordinate debt"
                                    title="Credit Guarantee Scheme for Subordinate Debt"
                                  />
                                  <span>
                                    Credit Guarantee Scheme for Subordinate Debt
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/loan-for-covid-affected-sectors">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/bill_finance-w.svg"
                                    className="loadimg"
                                    alt="Loan Guarantee Scheme For Covid Affected Sectors(LGSCAS)"
                                    title="Loan Guarantee Scheme For Covid Affected Sectors(LGSCAS)"
                                  />
                                  <span>
                                    Loan Guarantee Scheme For Covid Affected
                                    Sectors(LGSCAS)
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/loan-for-covid-affected-tourism-service">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/bill_finance-w.svg"
                                    className="loadimg"
                                    alt="Loan Guarantee Scheme For Covid Affected Tourism Service Sector(LGSCATSS)"
                                    title="Loan Guarantee Scheme For Covid Affected Tourism Service Sector(LGSCATSS)"
                                  />
                                  <span>
                                    Loan Guarantee Scheme For Covid Affected
                                    Tourism Service Sector(LGSCATSS)
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="msmeOGSs"
                            role="tabpanel"
                            aria-labelledby="msmeOGSs"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/credit-facilities-to-entrepreneurs">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/national-pension-scheme2-w.svg"
                                    className="loadimg"
                                    alt="Credit Facilities to Entrepreneurs"
                                    title="Credit Facilities to Entrepreneurs"
                                  />
                                  <span>
                                    Credit Facilities to Entrepreneurs
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/collateral-free-term-loan-facility">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/netc-fastag.svg"
                                    className="loadimg"
                                    alt="Collateral free Term Loan facility"
                                    title="Collateral free Term Loan facility"
                                  />
                                  <span>
                                    Collateral free Term Loan facility
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/collateral-free-cash-credit-facility">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/line-of-credit-w.svg"
                                    className="loadimg"
                                    alt="Collateral free Cash Credit facility"
                                    title="Collateral free Cash Credit facility"
                                  />
                                  <span>
                                    Collateral free Cash Credit facility
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/regular-cash-credit-facility">
                                  {" "}
                                  <img
                                    style={{ marginRight: "20px" }}
                                    src="/projectfiles/bomlayoutcontainer/default/images/menu/gst-credit-scheme-w.svg"
                                    className="loadimg"
                                    alt="Regular Cash Credit facility"
                                    title="Regular Cash Credit facility"
                                  />{" "}
                                  <span>Regular Cash Credit facility</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="msmeCols"
                            role="tabpanel"
                            aria-labelledby="msmeCols"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/ms-loan-tap-credit-products">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/hospitality2.svg"
                                    className="loadimg"
                                    alt="digital lending"
                                    title="M/S Loan Tap Credit Products Private Limited"
                                  />
                                  <span>
                                    M/S Loan Tap Credit Products Private Limited
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/ms-mas-financial-services">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/maha-upi_1.svg"
                                    className="loadimg"
                                    alt="secured loan"
                                    title="M/S MAS Financial Services Limited"
                                  />
                                  <span>
                                    M/S MAS Financial Services Limited
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/ms-lendingkart-finance-limited">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/onlinenomination.svg"
                                    className="loadimg"
                                    alt="unsecured loan"
                                    title="M/S Lendingkart Finance Limited"
                                  />{" "}
                                  <span>M/S Lendingkart Finance Limited</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="msmeOIs"
                            role="tabpanel"
                            aria-labelledby="msmeOIs"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/restructuring-of-msme-advances">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/restructuring-of-msme-advances-w.svg"
                                    className="loadimg"
                                    alt="restructuring of msme advances"
                                    title="Restructuring of MSME advances"
                                  />
                                  <span>Restructuring of MSME advances</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="//www.psbloansin59minutes.com/bankofmaharashtra"
                                  target="_blank"
                                >
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/psb59mins-w.svg"
                                    className="loadimg"
                                    alt="psb59mins"
                                    title="PSB59mins"
                                  />
                                  <span>PSB59mins</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/tieup-with-fintech">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/tieup.svg"
                                    className="loadimg"
                                    alt="tieup"
                                    title="Tie up arrangement with Fintech Company"
                                  />
                                  <span>
                                    Tie up arrangement with Fintech Company
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/writereaddata/documentlibrary/ea026a24-9fe4-45e1-856e-de6f3ab25ae4.pdf">
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/msme-disclosure.svg"
                                    className="loadimg"
                                    alt="Disclosure"
                                    title="MSME Disclosure on msme Accounts"
                                  />{" "}
                                  <span>MSME Disclosure on msme Accounts</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/writereaddata/documentlibrary/19607218-065b-4306-b649-b80d93bec1c6.pdf">
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/msme-ots.svg"
                                    className="loadimg"
                                    alt="Compromise OTS Scheme for NPA in MSME Sector"
                                    title="Compromise/OTS Scheme for NPA in MSME Sector"
                                  />
                                  <span>
                                    Compromise/OTS Scheme for NPA in MSME Sector
                                  </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="msmeMSSs"
                            role="tabpanel"
                            aria-labelledby="msmeMSSs"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/maha-swagatam-scheme">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/credit-guarantee-scheme-for-subordinate-debt-w.svg"
                                    className="loadimg"
                                    alt="Scheme highlights"
                                    title="Scheme highlights"
                                  />{" "}
                                  <span>Scheme highlights</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="msmeZEDs"
                            role="tabpanel"
                            aria-labelledby="msmeZEDs"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/zed">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/zed.svg"
                                    className="loadimg"
                                    alt="zed Scheme highlights"
                                    title="zed Scheme highlights"
                                  />{" "}
                                  <span>Incentives highlights</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="megamenu">
                <a className="mainli" href="/agricultures">
                  Agriculture
                </a>
                <div className="megamenu-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="tabmenucol d-none">
                        <div
                          className="nav flex-column nav-pills custscrollA"
                          id="agricultureNav"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="agLn"
                            data-toggle="pill"
                            href="#agLoans"
                            role="tab"
                            aria-controls="agLoans"
                            aria-selected="true"
                          >
                            Agriculture Loans
                          </a>
                        </div>
                      </div>
                      <div className="tabcontentcol w-100">
                        <div className="tab-content" id="agricultureNavContent">
                          <div
                            className="tab-pane show active"
                            id="agLoans"
                            role="tabpanel"
                            aria-labelledby="agLn"
                          >
                            <ul className="menulist twocol custscrollA">
                              <li>
                                <a href="/kisan-credit-card">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/kishancreditcard-w.svg"
                                    className="loadimg"
                                    alt="kisan credit card"
                                    title="Mahabank Kisan Credit Card (MKCC)"
                                  />
                                  <span>Mahabank Kisan Credit Card (MKCC)</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/kisan-all-purpose-term-loan">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/4.svg"
                                    className="loadimg"
                                    alt="Mahabank Kisan All Purpose Term Loan"
                                    title="Mahabank Kisan All Purpose Term Loan"
                                  />
                                  <span>
                                    Mahabank Kisan All Purpose Term Loan
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/agri-gold-loan">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                                    className="loadimg"
                                    alt="mahabank gold loan scheme agriculture"
                                    title="Mahabank Gold Loan Scheme - Agriculture"
                                  />
                                  <span>
                                    Mahabank Gold Loan Scheme - Agriculture
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/farmhouse-agriculturists-scheme">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/bill_finance-w.svg"
                                    className="loadimg"
                                    alt="scheme for construction of farmhouse to agriculturists white"
                                    title="Scheme for construction of farmhouse to Agriculturists"
                                  />
                                  <span>
                                    Scheme for construction of farmhouse to
                                    Agriculturists
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/farmer-vehicle-loan-for-two-three-wheelers">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/commerciallease-w.svg"
                                    class="loadimg"
                                    alt="scheme for financing farmers for purchase of vehicles two, three wheelers"
                                    title="Scheme for financing farmers for Purchase of Vehicles (Two / Three Wheelers)"
                                  />
                                  <span>
                                    Scheme for financing farmers for Purchase of
                                    Vehicles (Two / Three Wheelers)
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/four-wheelers-farmer-vehicle-loan">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/credit-card-w.svg"
                                    className="loadimg"
                                    alt="four wheelar loan"
                                    title="Scheme for financing farmers for Purchase of Vehicles (Four Wheelers)"
                                  />
                                  <span>
                                    Scheme for financing farmers for Purchase of
                                    Vehicles (Four Wheelers)
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/loan-against-warehouse-receipts-to-farmers">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/capital-gain-account-wn.svg"
                                    className="loadimg"
                                    alt="scheme for financing against warehouse receipts to farmers white"
                                    title="Scheme for Financing against Warehouse Receipts to farmers"
                                  />
                                  <span>
                                    Scheme for Financing against Warehouse
                                    Receipts to farmers
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/farmers-loan-for-purchase-of-land">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/credit-card-w.svg"
                                    class="loadimg"
                                    alt="purchase of land by small and marginal farmers"
                                    title="Scheme for Financing Farmers for Purchase of Land by Small and Marginal Farmers"
                                  />
                                  <span>
                                    Scheme for Financing Farmers for Purchase of
                                    Land by Small and Marginal Farmers
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/financing-for-agriculture-graduates">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/commerciallease-w.svg"
                                    className="loadimg"
                                    alt="agri business centre for agri graduates"
                                    title="Financing for Setting Up of Agri-Clinics and Agri-Business Centers for Agriculture Graduates"
                                  />
                                  <span>
                                    Financing for Setting Up of Agri-Clinics and
                                    Agri-Business Centers for Agriculture
                                    Graduates
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/loan-for-plantation-horticulture">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/horticulture-white.svg"
                                    className="loadimg"
                                    alt="Horticulture or Plantation Activities"
                                    title="Horticulture / Plantation Activities"
                                  />
                                  <span>
                                    Horticulture / Plantation Activities
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/animal-husbandry">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/animal-husbandry-white.svg"
                                    className="loadimg"
                                    alt="animal husbandry"
                                    title="Animal Husbandry"
                                  />{" "}
                                  <span>Animal Husbandry</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/farm-mechanization">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/scheme-for-financing-farmers-for-purchase-of-vehicles-four-wheelers-white.svg"
                                    className="loadimg"
                                    alt="Farm Mechanization"
                                    title="Farm Mechanization"
                                  />{" "}
                                  <span>Farm Mechanization</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/minor-irrigation">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/minor-irrigation1.svg"
                                    className="loadimg"
                                    alt="minor irrigation"
                                    title="Minor Irrigation"
                                  />{" "}
                                  <span>Minor Irrigation</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/hi-tech-projects">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/hi-tech-projects1.svg"
                                    className="loadimg"
                                    alt="hi tech projects"
                                    title="Hi-tech Projects"
                                  />{" "}
                                  <span>Hi-tech Projects</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/financing-to-self-help-groups">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/financing-to-self-help-groups-white.svg"
                                    className="loadimg"
                                    alt="financing to self help groups"
                                    title="Financing to Self Help Groups"
                                  />
                                  <span>Financing to Self Help Groups</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/mkcc-to-animal-husbandry-farmers-fisheries">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/mkccanimalhusbandry-w.svg"
                                    className="loadimg"
                                    alt="Mahabank Kisan Credit Card(MKCC) to Animal Husbandry Farmers and Fisheries"
                                    title="Mahabank Kisan Credit Card(MKCC) to Animal Husbandry Farmers and Fisheries"
                                  />
                                  <span>
                                    Mahabank Kisan Credit Card(MKCC) to Animal
                                    Husbandry Farmers and Fisheries
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/kisan-tatkal-scheme">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/mahabank-kisan-tatkal-scheme1.svg"
                                    className="loadimg"
                                    alt="mahabank kisan tatkal scheme"
                                    title="Mahabank Kisan Tatkal Scheme"
                                  />{" "}
                                  <span>Mahabank Kisan Tatkal Scheme</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/estate-purchase-loans">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/scheme-for-estate-purchase-loans1.svg"
                                    className="loadimg"
                                    alt="scheme for estate purchase loans"
                                    title="Scheme for Estate Purchase Loans"
                                  />
                                  <span>Scheme for Estate Purchase Loans</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/solar-based-pumpset-loans">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/financing-solar-energy-based-pumpset-loans1.svg"
                                    className="loadimg"
                                    alt="financing solar energy based pumpset loans"
                                    title="Financing Solar Energy Based Pumpset Loans"
                                  />
                                  <span>
                                    Financing Solar Energy Based Pumpset Loans
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/solar-water-heaters">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/financing-solar-water-heaters-w.svg"
                                    className="loadimg"
                                    alt="financing solar water heaters"
                                    title="Financing Solar Water Heaters"
                                  />
                                  <span>Financing Solar Water Heaters</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/solar-home-lighting-scheme">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/financing-solar-home-lighting-scheme-white.svg"
                                    className="loadimg"
                                    alt="financing solar home lighting scheme"
                                    title="Financing Solar Home Lighting Scheme"
                                  />
                                  <span>
                                    Financing Solar Home Lighting Scheme
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/maha-krishi-samrudhi-yojana">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/krishi-samrudhi.svg"
                                    className="loadimg"
                                    alt="Maha Krishi Samrudhi Yojana"
                                    title="Maha Krishi Samrudhi Yojana"
                                  />{" "}
                                  <span>Maha Krishi Samrudhi Yojana</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/mahabank-kisan-corner">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/kisancorner.svg"
                                    className="loadimg"
                                    alt="Mahabank Kisan Corner"
                                    title="Mahabank Kisan Corner"
                                  />{" "}
                                  <span>Mahabank Kisan Corner</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/mars">
                                  {" "}
                                  <img
                                    src="/writereaddata/defaultimages/loader.svg"
                                    data-src="/projectfiles/bomlayoutcontainer/default/images/menu/mars.svg"
                                    className="loadimg"
                                    alt="agri business centre for agri graduates"
                                    title="Financing for Setting Up of Agri-Clinics and Agri-Business Centers for Agriculture Graduates"
                                  />
                                  <span>
                                    Maha Agri-machinery Rental Scheme (Mars)
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="megamenu">
                <a className="mainli" href="/nri-banking">
                  NRI
                </a>
                <div className="megamenu-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="tabmenucol">
                        <div
                          className="nav flex-column nav-pills custscrollA"
                          id="nriNav"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="nriPro"
                            data-toggle="pill"
                            href="#nriProducts"
                            role="tab"
                            aria-controls="nriProducts"
                            aria-selected="true"
                          >
                            Deposit Products
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="nrikyc"
                            data-toggle="pill"
                            href="#nrikycs"
                            role="tab"
                            aria-controls="nrikycs"
                            aria-selected="false"
                          >
                            KYC Documents
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="nrimb"
                            data-toggle="pill"
                            href="#nrimbs"
                            role="tab"
                            aria-controls="nrimbs"
                            aria-selected="false"
                          >
                            Maha Bharati
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="nriR"
                            data-toggle="pill"
                            href="#nriRs"
                            role="tab"
                            aria-controls="nriRs"
                            aria-selected="false"
                          >
                            Remittance
                          </a>{" "}
                          <a
                            className="nav-link"
                            id="nriF"
                            data-toggle="pill"
                            href="#nriFs"
                            role="tab"
                            aria-controls="nriFs"
                            aria-selected="false"
                          >
                            FATCA-CRS
                          </a>
                        </div>
                      </div>
                      <div className="tabcontentcol">
                        <div className="tab-content" id="nriNavContent">
                          <div
                            className="tab-pane show active"
                            id="nriProducts"
                            role="tabpanel"
                            aria-labelledby="nriProducts"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="NRE Account"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/nre-account-w.png"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="NRE Account"
                        title="NRE Account"
                        fetchPriority="high"
                      />
                    )} 
                                  {" "}
                                  <span>NRE Account</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="nro account"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/4.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="nro account"
                        title="nro account"
                        fetchPriority="high"
                      />
                    )} 
                                {" "}
                                  <span>NRO Account</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="fcnr"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/fcnr-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="fcnr"
                        title="fcnr"
                        fetchPriority="high"
                      />
                    )} 




                                  <span>FCNR</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}

                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="RFC Account"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/rfc-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="RFC Account"
                        title="RFC Account"
                        fetchPriority="high"
                      />
                    )} 

{" "}
                                  <span>RFC Account</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="nrikycs"
                            role="tabpanel"
                            aria-labelledby="nrikycs"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="">
                                  {" "}

  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Kyc document"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/commerciallease-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Kyc document"
                        title="Kyc document"
                        fetchPriority="high"
                      />
                    )} 


                                




                                 {" "}
                                  <span>KYC Documents</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="nrimbs"
                            role="tabpanel"
                            aria-labelledby="nrimbs"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="">
                                  {" "}

                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Maha Bharati"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/rfc-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Maha Bharati"
                        title="Maha Bharati"
                        fetchPriority="high"
                      />
                    )} 

{" "}
                                  <span>Maha Bharati</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="nriRs"
                            role="tabpanel"
                            aria-labelledby="nriRs"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="/transfer-exchange">
                                  {" "}

                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Remittance"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/forex1-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Remittance"
                        title="Remittance"
                        fetchPriority="high"
                      />
                    )} 



                                  <span>Remittance</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane"
                            id="nriFs"
                            role="tabpanel"
                            aria-labelledby="nriFs"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="">

                                {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Fatca-CRS"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/fcnr-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Fatca-CRS"
                        title="Fatca-CRS"
                        fetchPriority="high"
                      />
                    )} 




                                  {" "}
                                  
                                  <span>Fatca-CRS</span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="megamenu">
                <a className="mainli" href="/treasury-banking">
                  Treasury
                </a>
                <div className="megamenu-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="tabmenucol d-none">
                        <div
                          className="nav flex-column nav-pills custscrollA"
                          id="treasuryNav"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="trTreasuryNav"
                            data-toggle="pill"
                            href="#trTreasury"
                            role="tab"
                            aria-controls="trTreasury"
                            aria-selected="true"
                          >
                            Treasury
                          </a>
                        </div>
                      </div>
                      <div className="tabcontentcol w-100">
                        <div className="tab-content" id="treasuryNavContent">
                          <div
                            className="tab-pane show active"
                            id="trTreasury"
                            role="tabpanel"
                            aria-labelledby="trTreasury"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="/productsoffered">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Products Offered"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/products-offered-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Products Offered"
                        title="Products Offered"
                        fetchPriority="high"
                      />
                    )} {" "}
                                  <span>Products Offered</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Forex"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/forex1-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Forex"
                        title="Forex"
                        fetchPriority="high"
                      />
                    )}
                                  
                                  <span>Forex</span>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Forex"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/forexcentre-w.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Forex Centres"
                        title="Forex Centres"
                        fetchPriority="high"
                      />
                    )}{" "}
                                  <span>Forex Centres</span>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Nostro Accounts"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/4.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Nostro Accounts"
                        title="Nostro Accounts"
                        fetchPriority="high"
                      />
                    )}

                                  {" "}
                                  <span>Nostro Accounts</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="megamenu menulogin">
                <a className="mainli gradBtn" href="">
                  {" "}


                  
                  <img
                    src="/projectfiles/bomlayoutcontainer/default/images/icons/loginicon.png"
                    alt="Digital Banking Login"
                    title="Digital Banking Login"
                  />{" "}
                  LOG-IN{" "}
                </a>
              </div>
              <div className="megamenu hambmenu">
                <button className="dropbtn">
                  <img
                    src="/projectfiles/bomlayoutcontainer/default/images/icons/menu.svg"
                    alt="Others menu"
                    title="Other Menu"
                  />
                </button>
                <div className="megamenu-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="tabmenucol d-none">
                        <div
                          className="nav flex-column nav-pills custscrollA"
                          id="mainNav"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <a
                            className="nav-link active"
                            id="importantLinks"
                            data-toggle="pill"
                            href="#linksImportant"
                            role="tab"
                            aria-controls="linksImportant"
                            aria-selected="true"
                          >
                            {" "}
                            <img
                              src="/writereaddata/defaultimages/loader.svg"
                              data-src="/projectfiles/bomlayoutcontainer/default/images/icons/link.svg"
                              className="loadimg"
                              alt="Important Links or Sites"
                              title="Important Links/Sites"
                            />{" "}
                            Important Links/Sites{" "}
                          </a>
                        </div>
                      </div>
                      <div className="tabcontentcol w-100">
                        <div className="tab-content" id="mainNavContent">
                          <div
                            className="tab-pane active"
                            id="linksImportant"
                            role="tabpanel"
                            aria-labelledby="importantLinks"
                          >
                            <ul className="menulist custscrollA">
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Online Applications"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Online Applications"
                        title="Online Applications"
                        fetchPriority="high"
                      />
                    )} 
                                  {" "}
                                  <span>Online Applications</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                   {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Rupay Debit Card Offers"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Rupay Debit Card Offers"
                        title="Rupay Debit Card Offers"
                        fetchPriority="high"
                      />
                    )} 
                                {" "}
                                  <span>Rupay Debit Card Offers</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="" target="_blank">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Reserve Bank of India"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Reserve Bank of India"
                        title="Reserve Bank of India"
                        fetchPriority="high"
                      />
                    )}
                                  {" "}
                                  <span>Reserve Bank of India</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="PSB Loans in 59 Minutes"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="PSB Loans in 59 Minutes"
                        title="PSB Loans in 59 Minutes"
                        fetchPriority="high"
                      />
                    )}{" "}
                                  <span>PSB Loans in 59 Minutes</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Information Security"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Information Security"
                        title="Information Security"
                        fetchPriority="high"
                      />
                    )}

                                {" "}
                                  <span>Information Security</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/cvc/cvcdirect.aspx" target="_blank">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="CVC Pledge"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="CVC Pledge"
                        title="CVC Pledge"
                        fetchPriority="high"
                      />
                    )}

                                  <span>CVC Pledge</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="MSME Specialized Branches"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="MSME Specialized Branches"
                        title="MSME Specialized Branches"
                        fetchPriority="high"
                      />
                    )}
                        {" "}
                                  <span>MSME Specialized Branches</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="MahabankCares@COVID-19"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="MahabankCares@COVID-19"
                        title="MahabankCares@COVID-19"
                        fetchPriority="high"
                      />
                    )}
                                  <span>MahabankCares@COVID-19</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Udyam Registration portal"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Udyam Registration portal"
                        title="Udyam Registration portal"
                        fetchPriority="high"
                      />
                    )}
                                  {" "}
                                  <span>Udyam Registration portal</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a href="" target="_blank">
                                  {" "}


                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="SCORES"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="SCORES"
                        title="SCORES"
                        fetchPriority="high"
                      />
                    )}
                                  <span>SCORES</span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                     {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Form 16 Download for Pensioners"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Form 16 Download for Pensioners"
                        title="Form 16 Download for Pensioners"
                        fetchPriority="high"
                      />
                    )}
                                  {" "}
                                  <span> Form 16 Download for Pensioners </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  href="//bankofmaharashtra.in/tpa/login.aspx"
                                  target="_blank"
                                >
                                  {" "}
                                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="TPA Portal"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/menu/8.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="TPA Portal"
                        title="TPA Portal"
                        fetchPriority="high"
                      />
                    )}
                                  <span> TPA Portal </span>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <div className="cd-dropdown-wrapper">
            <nav className="cd-dropdown">
              {" "}
              <span className="closebarz"></span>
              <ul className="cd-dropdown-content">
                <li>
                  <h2>
                  {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Menu Closet"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/logo/logo-white.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Bank Of Maharashtra"
                        title="Menu Close"
                        fetchPriority="high"
                      />
                    )}
                    
                  </h2>
                  <a href="#0" className="cd-close">
                    Close
                  </a>
                </li>
                <li>
                  <ul className="cd-search toplist">
                    <li>
                      <a href="/">
                        {" "}
                        {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="home"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/icons/tenders.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="home"
                        title="home"
                        fetchPriority="high"
                      />
                    )}


                        {" "}
                        <span>Home</span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="about"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/icons/info.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="about"
                        title="about"
                        fetchPriority="high"
                      />
                    )}
                        {" "}
                        <span>About Us</span>
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        {" "}
                        {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="locate"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/icons/sale.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="locate"
                        title="locate"
                        fetchPriority="high"
                      />
                    )}
                        {" "}
                        <span>Locate Us</span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="careers"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/icons/csr.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="careers"
                        title="careers"
                        fetchPriority="high"
                      />
                    )}


                     {" "}
                        <span>Careers</span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="contact"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/icons/info.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="contact"
                        title="contact"
                        fetchPriority="high"
                      />
                    )}
                        {" "}
                        <span>Contact Us</span>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <form
                    className="cd-search"
                    action="/search"
                    id="frmSearchM"
                    method="get"
                  >
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="btnSearchM"
                    >
                      <span className="fa fa-search"></span>
                    </button>{" "}
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="txtSearchTextM"
                      placeholder="Type here to search..."
                    />
                  </form>
                </li>
                <li>
                  <a href="#">
                    {showPlaceholder ? (
                      <Image
                        src="/writereaddata/defaultimages/loader.svg"
                        title="Internet Banking"
                        width={50}
                        height={50}
                      />
                    ) : (
                      <Image
                        src="/projectfiles/bomlayoutcontainer/default/images/icons/internet-banking.svg"
                        width={50}
                        height={50}
                        style={{ marginRight: "20px" }}
                        className="loadimg"
                        alt="Internet Banking"
                        title="Internet Banking"
                        fetchPriority="high"
                      />
                    )}
                    <span> Internet Banking </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">Personal</a>
                </li>
                <li>
                  <a href="/">Corporate</a>
                </li>
                <li>
                  <a href="/">MSME</a>
                </li>
                <li>
                  <a href="/">Agriculture</a>
                </li>
                <li>
                  <a href="/">NRI</a>
                </li>
                <li>
                  <a href="/">Treasury</a>
                </li>
                <li className="has-children">
                  <a href="#">Important Links/Sites</a>
                  <ul className="cd-secondary-dropdown is-hidden">
                    <li className="go-back">
                      <a href="#0">Back</a>
                    </li>
                    <li>
                      <a href="/" target="_blank">
                        Online Applications
                      </a>
                    </li>
                    <li>
                      <a href="/" target="_blank">
                        Rupay Debit Card Offers
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        Reserve Bank of India
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        target="_blank"
                      >
                        PSB Loans in 59 Minutes
                      </a>
                    </li>
                    <li>
                      <a href="">Information Security</a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        CVC Pledge
                      </a>
                    </li>
                    <li>
                      <a href="">MSME Specialized Branches </a>
                    </li>
                    <li>
                      <a href="">MahabankCares@COVID-19 </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        Udyam Registration portal
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        SCORES
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        Form 16 Download for Pensioners{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
