import React,{useState} from 'react';
import './App.css';
import {ChromePicker} from 'react-color';

function App() {
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="App">
      <button onClick={()=> setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? 'Close color picker' : 'Pick a color'}
      </button>
      {showColorPicker && (
        <ChromePicker color={color} onChange={updateColor => setColor(updateColor.hex)}/>
      )}
      
      <h2>Your picker {color}</h2>
    </div>
  );
}

export default App;
