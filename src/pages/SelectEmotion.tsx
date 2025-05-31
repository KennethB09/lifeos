import { useState } from "react";
import React from "react";

type emoji = {
    happy: string,
    sad: string,
    angry: string,
    stressed: string,
    meh: string,
}

type SelectEmotionProps = {
    selectedEmotion: React.Dispatch<React.SetStateAction<string>>
}

function SelectEmotion({ selectedEmotion }: SelectEmotionProps) {

    const [selectEmoji, useSelectEmoji] = useState("");

    const emoji: emoji = {
        happy: "😊",
        sad: "😢",
        angry: "😠",
        stressed: "😰",
        meh: "😐",
    }

    const moodsArr: string[] = ["happy", "sad", "angry", "stressed", "meh"]; 

    return (
        <div className="text-center h-screen bg-yellow-300 p-5 flex flex-col justify-between">
            <div className="h-1/2 flex flex-col justify-center">
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-2xl">I'm feeling:</p>
                    <h1 className="text-9xl">{selectEmoji}</h1>
                    <h2>{}</h2>
                </div>
            </div>
            <div className="h-min">
                <div className="flex gap-1">
                {
                    moodsArr.map(e => (
                        <button className="rounded-sm aspect-square bg-slate-200 p-3 text-4xl" onClick={() => useSelectEmoji(emoji[e as keyof typeof emoji])} key={e}>{emoji[e as keyof typeof emoji]}</button>
                    ))
                }
                </div>
                <button className="w-full h-16 rounded-sm bg-slate-200 font-semibold text-gray-900 text-3xl px-2 mt-12" onClick={() => selectedEmotion(selectEmoji)}>Continue</button>
            </div>
        </div>
    )
}

export default SelectEmotion