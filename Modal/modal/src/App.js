import React,{useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={()=>setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} shouldCloseOnOverlayClick={false}
      style={
        {
          overlay: {
            background: 'gray'
          },
          content: {
            color: 'teal'
          }
        }
      }
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={()=>setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
