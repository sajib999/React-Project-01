import React,{forwardRef} from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const ColoredTooltip = () => {
  return <span style={{color: 'lime'}}>Colored Component</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  )
})

function App() {
  return (
    <div className="App">

      <div style={{paddingBottom: '20px'}}>
        <Tippy arrow={false} delay={2000} placement="right" content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px'}}>
        <Tippy content={<span style={{color: 'teal'}}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px'}}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: '20px'}}>
        <Tippy placement="top-start" content={<ColoredTooltip></ColoredTooltip>}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>

    </div>
  );
}

export default App;
