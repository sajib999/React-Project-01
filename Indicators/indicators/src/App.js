import React from 'react';
import { BounceLoader, BarLoader, BeatLoader} from 'react-spinners';
import './App.css';





function App() {
  return (
    
      <div className="App">
        <BounceLoader size={24} color='lime' loading/>
        <BarLoader size={48} color='teal' loading/>
        <BeatLoader size={72} color='maroon' loading/>
      </div>
    
  );
}

export default App;
