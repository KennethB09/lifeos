import { useState } from 'react';
import SelectEmotion from './SelectEmotion';
import Dashboard from './Dashboard';
import ChillMode from '../components/ChillMode';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState("")

  return (
    <>
      { selectedEmotion !== "" ?
        <ChillMode />
        :
        <SelectEmotion selectedEmotion={setSelectedEmotion}/>
      }
    </>
  )
}

export default App
