
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer';

{/* Dynamic Routing */}
import WebdevelopmentSingle from './components/singlePages/WebdevelopmentSingle';
import DigitalMarketingSingle from './components/singlePages/DigitalMarketingSingle';
import SeoSingle from './components/singlePages/SeoSingle';
import GraphicdesigningSingle from './components/singlePages/GraphicdesigningSingle';

{/* {portfolio Pages} */}
import Allworks from './pages/Allworks';
import Webdevelop from './pages/Webdevelop';
import Seoptimization from './pages/Seoptimization';
import Socialmedia from './pages/Socialmedia';
import Socialmediamarketing from './pages/Scioalmediamarketing';
import Graphic from './pages/Graphic';
import Seomarketing from './pages/Seomarketing';
import Contentmarketing from './pages/Contentmarketing';
import Datanalytics from './pages/Datanalytics';


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Dynamic Routing */}
        <Route path="/webdevelopement/:id" element={<WebdevelopmentSingle />} />
        <Route path="/digitalmarketing/:id" element={<DigitalMarketingSingle />} />
        <Route path="/seo/:id" element={<SeoSingle />} />
        <Route path="/graphicdesign/:id" element={<GraphicdesigningSingle />} />
      
      {/* {portfolio Pages} */}
        <Route path="/all" element={<Allworks />} />
        <Route path="/webdevelop" element={<Webdevelop />} />
        <Route path="/socialmedia" element={<Socialmedia/> }/>
        <Route path="/socialmediamarketing" element={<Socialmediamarketing/> }/>
        <Route path="/seo" element={<Seoptimization />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/seomarketing" element={<Seomarketing/>} />
        <Route path="/contentmarketing" element={<Contentmarketing />} />
        <Route path="/datanalytics" element={<Datanalytics />} />
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
