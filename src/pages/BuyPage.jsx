import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { Input, Button } from '@material-tailwind/react';
import { useAldoAlert } from 'aldo-alert';
import CustomSpeakerIcon from '../components/CustomSpeakerIcon';
import PayComponent from '../components/PayComponent';

const BuyPage = () => {
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

    function generateDomainText(selectedDomain) {
        const domainDetails = domainData[selectedDomain];
        return `${selectedDomain} Analyzing System. Value: ${domainDetails.value}. Opportunities: ${domainDetails.opportunities}. Investment Chances: ${domainDetails.investmentChances}. Invested Chances: ${domainDetails.suggestedInvestors.join(', ')}. Investment by Trending: ${domainDetails.investmentByTrending}%.`;
    }

    const readDomainData = (data) => {
        const speech = new SpeechSynthesisUtterance(data);
        window.speechSynthesis.speak(speech);
    };

    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="flex flex-grow">
                <Sidebar />
                <div className="flex flex-col w-full p-5 bg-white rounded-lg shadow-md">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center uppercase">
                        Complete Your Payment
                    </h1>
                    <PayComponent />

                </div>
            </div>
        </div>
    );
};

export default BuyPage;
