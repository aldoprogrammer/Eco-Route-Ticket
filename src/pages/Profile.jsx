import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { Input, Button } from '@material-tailwind/react';
import { useAldoAlert } from 'aldo-alert';

const Profile = () => {
    const { showAldoAlert } = useAldoAlert();

    const [chatMessages, setChatMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [showDomains, setShowDomains] = useState(false); // State to control displaying domains
    const [selectedDomain, setSelectedDomain] = useState(null); // State to store selected domain

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            setChatMessages([...chatMessages, { text: inputText, fromUser: true }]);
            setInputText('');
            // Add a static response after the user sends a message
            setTimeout(() => {
                setChatMessages(prevMessages => [...prevMessages, { text: 'Hello, here is the recommendation for blockchain domain', fromUser: false }]);
                setShowDomains(true); // Show domains after bot's reply
            }, 500); // Add a slight delay to simulate bot typing
        }
    };

    const handleDomainClick = (domain) => {
        // Handle domain click, you can implement displaying details here
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

    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="flex flex-grow">
                <Sidebar />
                <div className="flex flex-col w-full p-5 bg-white rounded-lg shadow-md">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Manage Your Profile
                    </h1>
                    <div className="chat-container flex flex-col flex-grow overflow-y-auto border rounded-md border-gray-200 p-4 mb-4 shadow-lg">
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
                       <div className="domain-details mb-4 bg-white p-6 rounded-lg shadow-md">
                       <h2 className="text-lg font-semibold text-gray-800 mb-4">{selectedDomain} Analyzing System:</h2>
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

export default Profile;
