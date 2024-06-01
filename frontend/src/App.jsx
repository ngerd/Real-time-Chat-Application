import './App.css';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Home from './pages/home/Home.jsx';

function App() {
  return (
    <div className='p-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 h-screen flex item-center justify-center'>
      <Home />
    </div>
  );
}

export default App;
