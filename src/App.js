import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Slider from './components/Slider';
import sampleResponse from "./data/data.json"
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';

const banners = sampleResponse.banner;
const offer = sampleResponse.offer;
const starProduct = sampleResponse.starProduct;
const hotAccessoriesCover = sampleResponse.hotAccessoriesCover;
const hotAccessories = sampleResponse.hotAccessories;
const productReviews = sampleResponse.productReviews;
const videos = sampleResponse.videos;
const footer = sampleResponse.footer;

/*for nav bar data*/

const miPhones = sampleResponse.miPhones;
const redmiPhones = sampleResponse.redmiPhones;
const tv = sampleResponse.tv;
const laptop = sampleResponse.laptop;
const fitnessAndLifeStyle = sampleResponse.fitnessAndLifeStyle;
const home = sampleResponse.home;
const audio = sampleResponse.audio;
const accessories = sampleResponse.accessories;


function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones = {miPhones} redmiPhones = {redmiPhones} tv = {tv} laptop = {laptop} fitnessAndLifeStyle = {fitnessAndLifeStyle} home = {home} audio = {audio} accessories = {accessories}/>
      <Slider start={banners.start}/>
      <Offers offer={offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu />
      <Routes>

      <Route exact path='/music' element={
        <HotAccessories music = {hotAccessories.music} musicCover = {hotAccessoriesCover.music}/>}>
      </Route>
      <Route exact path='/smartDevice' element={
        <HotAccessories smartDevice = {hotAccessories.smartDevice} smartDeviceCover = {hotAccessoriesCover.smartDevice}/>}>
      </Route>
      <Route exact path='/home' element={
        <HotAccessories home = {hotAccessories.home} homeCover = {hotAccessoriesCover.home}/>}>
      </Route>
      <Route exact path='/lifestyle' element={
        <HotAccessories lifestyle = {hotAccessories.lifeStyle} lifestyleCover = {hotAccessoriesCover.lifeStyle}/>}>
      </Route>
      <Route exact path='/mobileAccessories' element={
        <HotAccessories mobileAccessories = {hotAccessories.mobileAccessories} mobileAccessoriesCover = {hotAccessoriesCover.mobileAccessories}/>}>
      </Route>
      

      </Routes>
      {/* <HotAccessories music = {hotAccessories.music} musicCover = {hotAccessoriesCover.music} /> */}

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews = {productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={videos}/>
      <Heading text='IN THE PRESS' />
      <Banner endBanner={banners.end}/>
      <Footer footer={footer}/>
     
    </Router>
    
  );
}

export default App;
