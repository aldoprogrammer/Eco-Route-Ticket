import axios from 'axios'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const GeminiTesting = () => {
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')

    async function generateAnswer() {
        console.log("Loading...")
        try {
            const response = await axios({
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
                method: "post",
                data: {
                    contents: [{ "parts": [{ "text": question }] }]
                }
            })

            const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No answer generated";
            console.log('Generated Text:', generatedText)
            setAnswer(generatedText)
            console.log(response)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <div>
            <h3>GeminiTesting</h3>
            <textarea 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                cols="30" 
                rows="10" 
                className='border border-gray-800'>
            </textarea>
            <button onClick={generateAnswer}>Send</button>
            <div>
                <h4>Answer:</h4>
                <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
        </div>
    )
}

export default GeminiTesting
