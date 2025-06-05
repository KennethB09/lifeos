import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/chatroom')}>Chatroom</button>
      <button onClick={() => navigate('/chillmode')}>Chillmode</button>
    </div>
  )
}

export default Dashboard