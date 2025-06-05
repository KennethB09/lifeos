import { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';

export default function ChillMode() {
  const { mode } = useContext(AppContext);
  const [musicEmbed, setMusicEmbed] = useState("");

  async function playMusic() {
    const response = await axios.post(`http://localhost:3000/api/mood`, {
      mode: mode
    });
    setMusicEmbed(response.data.musicEmbed);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Chill Mode</h1>
      <h2>{mode}</h2>
      <p className="text-lg mb-6">Relax and unwind with soothing music.</p>
      <button
        onClick={playMusic}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        Activate Chill Mode
      </button>
      {musicEmbed && (
        <div className="mt-6 w-full max-w-md">
          <iframe width="560" height="315" src={musicEmbed} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      )}
    </div>
  );
}