import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { Input, Button } from '@material-tailwind/react';
import { useAldoAlert } from 'aldo-alert';
import CustomSpeakerIcon from '../components/CustomSpeakerIcon';

const Dashboard = () => {
    const { showAldoAlert } = useAldoAlert();

    const [chatMessages, setChatMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [showDomains, setShowDomains] = useState(false); // State to control displaying domains
    const [selectedDomain, setSelectedDomain] = useState(null); // State to store selected domain
    const [isSpeaking, setIsSpeaking] = useState(false); // State to track if speech is currently playing

    let currentSpeech = null; // Variable to hold the current speech synthesis object

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            // Add user's message to chatMessages
            setChatMessages(prevMessages => [...prevMessages, { text: inputText, fromUser: true }]);
            setInputText('');

            // Simulate bot typing and generate response character by character
            const botResponse = 'Hello, here is the recommendation for blockchain domain based on the tech that you provided'; // Bot response text
            let currentIndex = 0;
            const intervalId = setInterval(() => {
                setChatMessages(prevMessages => {
                    // Create a new array with all previous messages and add bot's message character by character
                    return [
                        ...prevMessages.slice(0, prevMessages.length - 1), // Keep previous messages
                        { text: botResponse.slice(0, currentIndex + 1), fromUser: false } // Add new message
                    ];
                });
                currentIndex++;
                if (currentIndex === botResponse.length) {
                    clearInterval(intervalId);
                    setShowDomains(true); // Show domains after bot's reply
                }
            }, 50); // Delay between each character
        }
    };

    const readDomainData = (data) => {
        if (isSpeaking && currentSpeech) {
            // If speech is currently being read, stop it
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            // If speech is not being read, start reading the data
            const speech = new SpeechSynthesisUtterance(data);
            window.speechSynthesis.speak(speech);
            setIsSpeaking(true);
            currentSpeech = speech;
        }
    };

    const handleDomainClick = (domain) => {
        setSelectedDomain(domain);
    };

    // Static data for each domain
    const domainData = {
        'Chainify.io': {
            value: 'High',
            opportunities: 'Many',
            investmentChances: 'Promising',
            suggestedInvestors: ['Microsoft', 'AWS', 'Google'],
            investmentByTrending: 80
        },
        'CryptoHub.tech': {
            value: 'Medium',
            opportunities: 'Some',
            investmentChances: 'Promising',
            suggestedInvestors: ['Facebook', 'IBM', 'Intel'],
            investmentByTrending: 70
        },
        'DecentralNet.com': {
            value: 'High',
            opportunities: 'Superb',
            investmentChances: 'Highly Promising',
            suggestedInvestors: ['Tesla', 'Apple', 'Amazon'],
            investmentByTrending: 90
        },
        'TrustChain.biz': {
            value: 'Low',
            opportunities: 'Few',
            investmentChances: 'Uncertain',
            suggestedInvestors: ['Facebook', 'IBM', 'Intel'],
            investmentByTrending: 60
        },
        'BlockBoost.org': {
            value: 'Medium',
            opportunities: 'Some',
            investmentChances: 'Promising',
            suggestedInvestors: ['Microsoft', 'AWS', 'Google'],
            investmentByTrending: 75
        }
    };

    function generateDomainText(selectedDomain) {
        const domainDetails = domainData[selectedDomain];
        return `${selectedDomain} Analyzing System. Value: ${domainDetails.value}. Opportunities: ${domainDetails.opportunities}. Investment Chances: ${domainDetails.investmentChances}. Invested Chances: ${domainDetails.suggestedInvestors.join(', ')}. Investment by Trending: ${domainDetails.investmentByTrending}%.`;
    }

    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="flex flex-grow">
                <Sidebar />
                <div className="flex flex-col w-full p-5 bg-white rounded-lg shadow-md">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Domain Insight Analyzer
                    </h1>
                    <div className="chat-container h-2/5 flex flex-col flex-grow overflow-y-auto border rounded-md border-gray-200 p-4 mb-4 shadow-lg">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4 w-3/5">
                        Talk To AI to get more insight and better way to choose you startup blockchain domain...
                    </h1>
                        {chatMessages.map((message, index) => (
                            <div key={index} className={`chat-message mb-4 w-3/6 rounded-lg p-4 
                                  ${message.fromUser ? 'ml-auto bg-gray-200' : 'mr-auto bg-blue-100'}`}>
                                {message.text}
                            </div>
                        ))}
                        {showDomains && (
                            <div className="domain-list">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Available Blockchain Domains:</h2>
                                <ul>
                                    <li onClick={() => handleDomainClick('Chainify.io')} className="cursor-pointer text-blue-500">Chainify.io</li>
                                    <li onClick={() => handleDomainClick('CryptoHub.tech')} className="cursor-pointer text-blue-500">CryptoHub.tech</li>
                                    <li onClick={() => handleDomainClick('DecentralNet.com')} className="cursor-pointer text-blue-500">DecentralNet.com</li>
                                    <li onClick={() => handleDomainClick('TrustChain.biz')} className="cursor-pointer text-blue-500">TrustChain.biz</li>
                                    <li onClick={() => handleDomainClick('BlockBoost.org')} className="cursor-pointer text-blue-500">BlockBoost.org</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {selectedDomain && (
                        <div className="flex flex-col mb-4 shadow-lg p-4 rounded-md relative">
                            <h2 className="text-lg font-semibold text-gray-800">{selectedDomain} Analyzing Domain Results:</h2>
                            <button onClick={() => readDomainData(generateDomainText(selectedDomain))} className="text-blue-500 hover:underline focus:outline-none absolute top-1 right-3 ">
                                <CustomSpeakerIcon />
                            </button>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Value:</p>
                                    <p className="text-lg font-semibold text-blue-500">{domainData[selectedDomain].value}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Opportunities:</p>
                                    <p className="text-lg font-semibold text-blue-500">{domainData[selectedDomain].opportunities}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Investment Chances:</p>
                                    <p className="text-lg font-semibold text-blue-500">{domainData[selectedDomain].investmentChances}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Invested Chances:</p>
                                    <p className="text-lg font-semibold text-blue-500">{domainData[selectedDomain].suggestedInvestors.join(', ')}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Investment by Trending:</p>
                                    <p className="text-lg font-semibold text-blue-500">{domainData[selectedDomain].investmentByTrending}%</p>
                                </div>
                            </div>
                        </div>
                    )}



                    <div className="input-container flex">
                        <Input
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="w-full mr-2"
                        />
                        <Button
                            color="blue"
                            buttonType="filled"
                            size="regular"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                            onClick={handleSendMessage}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
