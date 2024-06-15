import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Experience />
            <Education />
            <Footer />
        </div>
    );
}

export default App;
