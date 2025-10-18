import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='flex flex-col md:flex-row'>
          <div className='mx-2 bg-green-500'>elemento 1</div>
          <div className='mx-2 bg-reed-800'>elemento 2</div>
          <div className='mx-2 bg-prple-400'>elemento 3</div>
          <div className='mx-2 bg-yellow-700'>elemento 4</div>
          <button className='boton'>Haz clic aqui</button>
          <button className='boton'>Boton 2</button>
        </div>     
    </div>
  );
}

export default App;
