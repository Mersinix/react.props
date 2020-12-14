import React, { Children, Component } from 'react';
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
    const {fullName,bio,profession}=props;
    const {handleName}=props;
    const styleObject={color:"gold", textAlign:"center"};
    return ( 
        <div className="allcube" style={styleObject}>
        <h3 className="cube">My name is: {fullName}</h3>
        <h3 className="cube">Bio: {bio}</h3>
        <h3 className="cube">Profession : {profession}</h3>
        {props.children}
        <button className="btn btn-warning btn-sm m-2" onClick={() => handleName(fullName)}>Remumber</button>
        
        </div>
     );
    }
        // default Props
     ProfileComponent.defaultProps = {
        fullName: "My name is my name!",
        bio:"Google it!",
        profession:"Big Boss"
      };
  
  // PropTypes
  ProfileComponent.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string.isRequired,
    profession:PropTypes.string,
    handleName: PropTypes.func.isRequired
  };

 
export default ProfileComponent;