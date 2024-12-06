 
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'
import Footer from './components/Footer'
import Scroller from './components/Scroller'
import AboutUs from './components/Pages/AboutUs'
 import Introduction from'./components/Pages/subpages/Introduction'
import AboutOverview from './components/AboutOverview';
import Gallery from './components/Gallery';
import GovtOrders from './components/GovtOrders';
import Application from './components/Application';
import { AboutCampus } from './components/AboutCampus';
import MissionValues from './components/MissionValues';
import Message from './components/Message';
import Nursing from './components/Nursing';
import Physiotherapy from './components/Physiotherapy';
import Contact from './components/Contact';
import Calendar from './components/Calendar';
import Principal from './components/Principal';

 const App = () => {
   return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route index element={<Home />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
        <Route path='/about-overview' element={<AboutOverview/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/govt-order-details' element={<GovtOrders/>}/>
        <Route path='/application' element={<Application/>}/>
        <Route path='/about-campus' element={<AboutCampus/>}/>
        <Route path='/mission&values' element={<MissionValues/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/nursing' element={<Nursing/>}/>
        <Route path='/physiotheraphy' element={<Physiotherapy/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/principal' element={<Principal/>}/>
      </Routes>
      <Footer/>
      <Scroller/>
    </BrowserRouter>
) }
 
 export default App