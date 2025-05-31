import { useState } from 'react';
import SelectEmotion from './SelectEmotion';
import Dashboard from './dashboard';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState("")

  return (
    <>
      { selectedEmotion !== "" ?
        <Dashboard />
        :
        <SelectEmotion selectedEmotion={setSelectedEmotion}/>
      }
    </>
  )
}

export default App
