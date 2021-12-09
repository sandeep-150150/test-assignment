import React from 'react';

const Profile = ({name,password}) => {
  return (
    <>
       <h1> PROFILE PAGE</h1>
       <p> Your Name is {name}</p>
       <p>Your password is {password}</p>
    </>
  );
}

export default Profile;
