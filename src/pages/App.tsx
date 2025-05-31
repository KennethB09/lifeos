import { useState } from 'react';
import SelectEmotion from './SelectEmotion';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SelectEmotion />
    </>
  )
}

export default App
