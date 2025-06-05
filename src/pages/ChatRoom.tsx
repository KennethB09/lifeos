import React, { useState } from 'react'
import axios from 'axios'

function ChatRoom() {

    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/api/focus-advice', { content: message })
            setResponse(res.data.tip)
        } catch (error) {
            setResponse('Error sending message.')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="border p-2 flex-1"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Send
                </button>
            </form>
            {response && (
                <div className="p-2 bg-gray-100 rounded">
                    <strong>Response:</strong> {response}
                </div>
            )}
        </div>
    )
}

export default ChatRoom