<<<<<<< HEAD
import { Typography } from 'antd';

import MyForm from './components/MyForm';
import Silk from './components/Silk';
import useTelegram from './hooks/useTelegram';

function App() {
  useTelegram():
  const tg = window.Telegram?.WebApp;
  const user = tg?.initDataUnsafe?.user; // User info
  const queryId = tg?.initDataUnsafe?.query_id; // For backend auth
  const { Text, Title } = Typography;

  return (
	  <div>
	  <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
	  <Silk />
	  </div>
	  <div style={{
		        position: "absolute",
			        top: 0,
			        left: 0,
			        zIndex: 2, // Higher than canvas
			        pointerEvents: "auto",
			      }}
	    >
	  <Title level={5} bold style={{ position: "absolite", color: '#C0C0C0' }}>Заполните анкету:</Title>
	  <MyForm />
	  </div>
	  </div>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 3122881 (Initialize project using Create React App)
  );
}

export default App;
