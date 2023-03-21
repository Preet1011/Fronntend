
import Navbar from './Components/Navbar';
import logo from './images/logo.png';
// import Login from './Components/Login';


function App() {
  return (
    <div className='App'>
    
       <img src={logo} alt=""></img><Navbar />
       
       
    </div>
  )
}

 export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './Components/Login';
// import Signup from './Components/Signup';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/signup">
//           <Signup />
//         </Route>
//         <Route path="/">
//           <Login />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
