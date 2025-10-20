import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Para hecer formularios siempre se inicia con un form dentro los info y un boton de submit */}
      {/* En la medida de lo posible es mejor dejar que las validacionjes las haga html puro para los estilos
      de botones etcera si con tailwind materialui bootstrap etc. */}
      <form>
        <input type='email'/>
        <input type='file'/>
        <input type='number' max={10}/>
        <input type='password'/>
        <input type='text' required/>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
