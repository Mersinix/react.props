import React from 'react';
import './App.css';
import ProfileComponent from './profile/ProfileComponent';
import NavBar from './profile/navBar';
import Carousel from './profile/carousel';

// import img2 from '/img/parrain2.jpg';
// import img3 from '/img/parrain3.jpg';
// import img4 from '/img/parrain4.jpg';


// const {img1,img2,img3}=props;


function App() {
  const handleName = (fullName) => alert(`Never Forget this Name: ${fullName}`);
  
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <ProfileComponent 
      fullName="Corleone Vito"
      bio="The God Father"
      profession="Mafia"
      handleName={handleName}
      >
        
          <h2>you still here!</h2>
          <img src="/img/parrain2.jpg" />
        
        </ProfileComponent>
    </div>
  );
}

export default App;
