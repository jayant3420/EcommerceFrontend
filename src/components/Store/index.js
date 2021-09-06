import React, { useEffect } from "react";
import "./storestyle.css";
import Footer from "../Footer/footer";
import StoreHead from "./StoreHead";
import BestSeller from "./BestSeller";
import IphoneAdvertise from "./IphoneAdvertise";
import Facilities from "./Facilities";
import FeaturedProducts from "./FeaturedProducts";
import AdContainer from "../ProductSearch/AdContainer";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { pathname } = useLocation();
  const menuManupilate = () => {
    const navBar = document.getElementById("navigation-bar");
    const navMobile = document.getElementById("nav-mobile-view");
    const navTop = document.getElementById("login-bar-mobile-view");
    const mainContainer = document.getElementById("main-container");
    navMobile.style.display = "none";
    navBar.classList.add("navigation-bar");
    navBar.classList.remove("navigation-bar-mb");
    navTop.style.filter = "none";
    mainContainer.style.filter = "none";
    navTop.style.pointerEvents = "auto";
    mainContainer.style.pointerEvents = "auto";
  };

  useEffect(() => {
    menuManupilate();
  }, [pathname]);
  return (
    <>
      <StoreHead />
      <BestSeller />
      <IphoneAdvertise />
      <AdContainer screen={"mobile"} />
      <Facilities />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Index;
