
import React from 'react';
import { FaReact} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { MdAlarm } from 'react-icons/md';
import { MdAccessibleForward } from 'react-icons/md';


function App() {
  return (
    <div className="App">
      <div className="header">
      <IconContext.Provider value={{color:"lime", size: '10rem'}}>
      <FaReact />
      <MdAlarm />
      <MdAccessibleForward color='teal' size='15rem'/>
      </IconContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
