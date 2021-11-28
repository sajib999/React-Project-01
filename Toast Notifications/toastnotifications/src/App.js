
import React from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({closeToast}) => {
  return (
    <div>Something Went Wrong!
      <button onClick={closeToast}>Close</button>
    </div>
    
  )
}


toast.configure()

function App() {

  const notify = () => {
    toast('Basic notifications',{ position: toast.POSITION.TOP_LEFT })

    toast.success('Success notifications',{ position: toast.POSITION.TOP_CENTER, autoClose: 8000 })

    toast.info('Info notifications',{ position: toast.POSITION.TOP_RIGHT, autoClose: false })

    toast.warn(<CustomToast/>,{ position: toast.POSITION.BOTTOM_LEFT })

    toast.error('Error notifications',{ position: toast.POSITION.BOTTOM_CENTER })

    toast('Basic notifications',{ position: toast.POSITION.BOTTOM_RIGHT })
  }

  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
