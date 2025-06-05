import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ChatRoom from './ChatRoom';
import ChillMode from './ChillMode';
import SelectEmotion from './SelectEmotion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectEmotion />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/chillmode" element={<ChillMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;