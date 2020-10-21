import React from "react";
import { Route } from "react-router-dom";

import AboutMe from './containers/AboutMe';
import AboutMehndi from './containers/AboutMehndi';
import Gallery from './containers/Gallery';
import Home from './containers/Home';
import Login from './containers/Login';
import Services from './containers/Services';

import TheClassicBridalPackage from './containers/TheClassicBridalPackage';
import TheElegantBridalPackage from './containers/TheElegantBridalPackage';
import TheRoyalBridalPackage from './containers/TheRoyalBridalPackage';
import TheStarBridalPackage1 from './containers/TheStarBridalPackage1';
import TheStarBridalPackage2 from './containers/TheStarBridalPackage2';

import ContactPopUp from './components/ContactPopUp';
import Footer from './components/Footer';



const BaseRouter = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/about/me" component={AboutMe} />
    <Route exact path="/about/mehndi" component={AboutMehndi} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/admin/login" component={Login} />
    <Route exact path="/services" component={Services} />

    <Route exact path="/packages/classic-bridal" component={TheClassicBridalPackage} />
    <Route exact path="/packages/elegant-bridal" component={TheElegantBridalPackage} />
    <Route exact path="/packages/royal-bridal" component={TheRoyalBridalPackage} />
    <Route exact path="/packages/star-bridal-1" component={TheStarBridalPackage1} />
    <Route exact path="/packages/star-bridal-2" component={TheStarBridalPackage2} />

    <Route path="*" component={Footer}></Route>
    <Route path="*" component={ContactPopUp}></Route>
  </>
);

export default BaseRouter;