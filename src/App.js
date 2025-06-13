import { Typography } from 'antd';

import MyForm from './components/MyForm';
import Silk from './components/Silk';
import useTelegram from './hooks/useTelegram';

function App() {
  useTelegram();
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
  );
}

export default App;
