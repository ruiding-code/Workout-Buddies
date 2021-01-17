// import React from 'react'

// const Profile = () => {
//     return (
//         <div style={{display: 'flex', justifyContent: 'center', 
//         alignItems: 'center', height: '90vh'}}>
//             <h1>Profile</h1>
//         </div>
//     )
// }

// export default Profile

import React from 'react';
import { Jumbotron } from 'reactstrap';

const Profile = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Karine, 20 </h1>
        <p className="lead"><b>Availabilities:</b> Monday 11 AM - 5 PM, Wednesday 9 AM - 11 PM  <br></br>
        <b>Workout duration:</b> 3 hours <br></br>
        <b>Frequency:</b> 3 times/ week 
        </p>
        <hr className="my-2" />
        <p><b>Interests:</b> HIIT Workouts, Abs Workouts, Chest Workouts</p>
      </Jumbotron>
    </div>
  );
};

export default Profile;
