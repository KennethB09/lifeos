import {useContext} from 'react';
import {AppContext} from '../contexts/AppContext';


export default function ChillMode() {
  const {mode, musicEmbed, handeModeSection} = useContext(AppContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Chill Mode</h1>
      <p className="text-lg mb-6">Relax and unwind with soothing music.</p>
      <button
        onClick={() => handeModeSection('Chill')}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        Activate Chill Mode
      </button>
      {musicEmbed && (
        <div className="mt-6 w-full max-w-md">
          <iframe
            src={musicEmbed}
            width="100%"
            height="150"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}