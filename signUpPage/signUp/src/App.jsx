import { useState } from 'react';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SignUp />
    </div>
  )
}

export default App
