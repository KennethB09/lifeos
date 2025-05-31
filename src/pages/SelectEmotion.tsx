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
        <div className="text-center">
            <p>I'm feeling:</p>
            <h1 className="text-9xl">{selectEmoji}</h1>
            <div>
            {
                moodsArr.map(e => (
                    <button onClick={() => useSelectEmoji(emoji[e as keyof typeof emoji])} key={e}>{emoji[e as keyof typeof emoji]}</button>
                ))
            }
            </div>

            <button onClick={() => selectedEmotion(selectEmoji)}>Next</button>
        </div>
    )
}

export default SelectEmotion