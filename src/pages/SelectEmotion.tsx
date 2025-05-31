type emoji = {
    happy: string,
    sad: string,
    angry: string,
    stressed: string,
    meh: string,
}

function SelectEmotion() {

    const emoji: emoji = {
        happy: "😊",
        sad: "😢",
        angry: "😠",
        stressed: "😰",
        meh: "😐",
    }

    const emojiCount = Object.keys(emoji).length;

    return (
        <div>
            {

            }
        </div>
    )
}

export default SelectEmotion