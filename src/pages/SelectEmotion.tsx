import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext';

import happyEmoji from "../assets/images/happy.png";
import sadEmoji from "../assets/images/sad.png";
import angryEmoji from "../assets/images/angry.png";
import stressedEmoji from "../assets/images/stressed.png";
import mehEmoji from "../assets/images/meh.png";

type Emoji = {
    Emoji: string,
    name: string,
    bg: string
}

type EmojiMap = {
    [key: string]: Emoji
}

type SelectEmotionProps = {
   
}

function SelectEmotion({ }: SelectEmotionProps) {

    const { handeModeSection } = useContext(AppContext);
    const navigate = useNavigate();

    const [selectEmoji, useSelectEmoji] = useState<Emoji>({
        Emoji: happyEmoji,
        name: "happy",
        bg: "bg-yellow-500"
    });

    const emojiList: EmojiMap = {
        happy: {
            Emoji: happyEmoji,
            name: "happy",
            bg: "bg-yellow-500"
        },
        sad: {
            Emoji: sadEmoji,
            name: "sad",
            bg: "bg-gray-500"
        },
        angry: {
            Emoji: angryEmoji,
            name: "angry",
            bg: "bg-red-300"
        },
        stressed: {
            Emoji: stressedEmoji,
            name: "stressed",
            bg: "bg-yellow-600"
        },
        meh: {
            Emoji: mehEmoji,
            name: "meh",
            bg: "bg-yellow-500"
        }
    }

    const moodsArr: string[] = ["happy", "sad", "angry", "stressed", "meh"];

    function moodSelector(mood: string) {
        handeModeSection(mood);
        navigate('/dashboard');
    }

    return (
        <div className={"text-center h-screen p-5 py-8 flex flex-col justify-between" + ` ${selectEmoji.bg}`}>
            <div className="h-1/2 flex flex-col justify-center">
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-lg">I'm feeling:</p>
                   <img src={selectEmoji.Emoji} />
                   <h2 className="font-semibold text-3xl capitalize">{selectEmoji.name}</h2>
                </div>
            </div>
            <div className="h-min">
                <div className="flex flex-wrap gap-2 justify-center items-center">
                    {
                        moodsArr.map(e => (
                            <button className="rounded-sm w-1/4 flex flex-col justify-center items-center aspect-square bg-slate-200 p-3" onClick={() => useSelectEmoji(emojiList[e])} key={e}>
                                <img src={emojiList[e].Emoji} alt={emojiList[e].name} className="w-12 aspect-square" />
                                <p className="text-xs font-semibold capitalize">{emojiList[e].name}</p>
                            </button>
                        ))
                    }
                </div>
                <button className="w-full h-16 rounded-sm bg-slate-200 font-semibold text-gray-900 text-3xl px-2 mt-12" onClick={() => moodSelector(selectEmoji!.name)}>Continue</button>
            </div>
        </div>
    )
}

export default SelectEmotion