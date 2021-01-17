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
import { Jumbotron, Button } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Rui, 21</h1>
        <p className="lead"><b>Availabilities:</b> Monday 2 PM - 5 PM, Friday 5 AM - 8 AM  <br></br>
        <b>Workout duration:</b> 2 hours <br></br>
        <b>Frequency:</b> 1 time/ week 
        </p>
        <hr className="my-2" />
        <p><b>Interests:</b> Running, Cardio, HIIT </p>
        <p className="lead">
          <Button color="primary">Chat with Buddy</Button>
        </p>
      </Jumbotron>

      <Jumbotron>
        <h1 className="display-3">Yu Yun, 20</h1>
        <p className="lead"><b>Availabilities:</b> Saturday 2 PM - 6 PM, Sunday 9 AM - 12 PM  <br></br>
        <b>Workout duration:</b> 1 hours <br></br>
        <b>Frequency:</b> 4 times/ week 
        </p>
        <hr className="my-2" />
        <p><b>Interests:</b> Biking, Hiking, Running </p>
        <p className="lead">
          <Button color="primary">Chat with Buddy</Button>
        </p>
      </Jumbotron>

      <Jumbotron>
        <h1 className="display-3">Kachi, 21</h1>
        <p className="lead"><b>Availabilities:</b> Tuesday 2 PM - 5 PM, Friday 7 AM - 8 AM, Sunday 9 AM - 3 PM<br></br>
        <b>Workout duration:</b> 2 hours <br></br>
        <b>Frequency:</b> 5 times/ week 
        </p>
        <hr className="my-2" />
        <p><b>Interests:</b> HIIT, Abs Workouts, Arm Workouts, Full Body Workouts </p>
        <p className="lead">
          <Button color="primary">Chat with Buddy</Button>
        </p>
      </Jumbotron>

      <Jumbotron>
        <h1 className="display-3">Melissa, 26</h1>
        <p className="lead"><b>Availabilities:</b> Thursday 5 AM - 7 AM, Wednesday 10 PM - 11 PM, Saturday 5 PM - 8 PM  <br></br>
        <b>Workout duration:</b> 2 hours <br></br>
        <b>Frequency:</b> 2 times/ week 
        </p>
        <hr className="my-2" />
        <p><b>Interests:</b> Running, Cardio, HIIT </p>
        <p className="lead">
          <Button color="primary">Chat with Buddy</Button>
        </p>
      </Jumbotron>

      <Jumbotron>
        <h1 className="display-3">Jake, 21</h1>
        <p className="lead"><b>Availabilities:</b> Monday 3 PM - 5 PM, Saturday 5 PM - 8 PM<br></br>
        <b>Workout duration:</b> 2 hours <br></br>
        <b>Frequency:</b> 1 time/ week 
        </p>
        <hr className="my-2" />
        <p><b>Interests:</b> Cardio, HIIT </p>
        <p className="lead">
          <Button color="primary">Chat with Buddy</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;