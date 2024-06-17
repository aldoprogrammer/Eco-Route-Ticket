import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { Input, Button, CardHeader, Card, Typography, TabsHeader, Tabs, Tab, CardBody, Chip, Tooltip, CardFooter, IconButton } from '@material-tailwind/react';
import { useAldoAlert } from 'aldo-alert';
import {
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const Leaderboard = () => {
    const { showAldoAlert } = useAldoAlert();

    const [chatMessages, setChatMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [showDomains, setShowDomains] = useState(false);
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [domainData, setDomainData] = useState([
        {
            "Domain": "Chainify.io",
            "Trend": "High demand due to increasing adoption of decentralized applications",
            "Price": "2.5 BTC",
            "Invested Chances": "80%",
            "Action": "Buy"
        },
        {
            "Domain": "CryptoHub.tech",
            "Trend": "Growing popularity among tech enthusiasts and developers",
            "Price": "1.8 BTC",
            "Invested Chances": "70%",
            "Action": "Buy"
        },
        {
            "Domain": "DecentralNet.com",
            "Trend": "High traction due to strong partnerships with major tech firms",
            "Price": "3.0 BTC",
            "Invested Chances": "90%",
            "Action": "Buy"
        },
        {
            "Domain": "TrustChain.biz",
            "Trend": "Limited traction due to niche market focus",
            "Price": "1.2 BTC",
            "Invested Chances": "60%",
            "Action": "Buy"
        },
        {
            "Domain": "BlockBoost.org",
            "Trend": "Steady growth driven by innovation in blockchain technology",
            "Price": "2.0 BTC",
            "Invested Chances": "75%",
            "Action": "Buy"
        }
    ]);

    const generateDummyAnalysis = (domain) => {
        const trends = [
            "Gaining popularity in the fintech space",
            "Increasing user adoption among developers",
            "Strong marketing and community support",
            "High engagement on social media platforms",
            "Potential for strategic partnerships"
        ];

        const prices = ["1.5 BTC", "2.0 BTC", "2.3 BTC", "2.8 BTC", "3.1 BTC"];
        const investedChances = ["65%", "70%", "75%", "80%", "85%"];

        const randomIndex = Math.floor(Math.random() * trends.length);

        return {
            "Domain": domain,
            "Trend": trends[randomIndex],
            "Price": prices[randomIndex],
            "Invested Chances": investedChances[randomIndex],
            "Action": "Buy"
        };
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    const handleSendMessage = () => {
        // Reset chat messages
        setChatMessages([]);
    
        // Split input text into characters
        const inputCharacters = inputText.split('');
    
        // Simulate typing effect and display in the table
        inputCharacters.forEach((char, index) => {
            setTimeout(() => {
                // Add the character to the chat messages
                const newText = chatMessages[0]?.text + char;
                setChatMessages([{ text: newText, fromUser: true }]);
                
                // If it's the last character, generate analysis
                if (index === inputCharacters.length - 1) {
                    const newDomain = generateDummyAnalysis(inputText);
    
                    // Check if inputText is not empty before adding the new domain
                    if (inputText.trim() !== '') {
                        const updatedDomainData = [
                            domainData[0],
                            domainData[1],
                            newDomain,
                            ...domainData.slice(2)
                        ];
                        setDomainData(updatedDomainData);
                        setInputText('');
                        setShowDomains(true);
    
                        // Delay showing the analysis for 3000 milliseconds (3 seconds)
                        setTimeout(() => {
                            setChatMessages(prevMessages => [...prevMessages, { text: `Analyzing domain ${inputText}... Analysis complete: ${newDomain.Trend}`, fromUser: false }]);
                        }, 3000);
                    } else {
                        // Handle empty input
                        // You can show an alert or do any other action here
                    }
                }
            }, (index + 1) * 50); // Adjust delay here (50 milliseconds)
        });
    };
    
    
    
    

    const handleDomainClick = (domain) => {
        setSelectedDomain(domain);
    };

    const TABS = [
        {
            label: "Best Leaderboard Domain",
            value: "Best Leaderboard Domain",
        },
        {
            label: "Best Expired Domain",
            value: "Best Expired Domain",
        },
        {
            label: "Best In-Used Domain",
            value: "Best In-Used Domain",
        },
    ];

    const TABLE_HEAD = ["Domain", "Trend", "Price", "Invested Chances", "Action"];

    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="flex flex-grow">
                <Sidebar />
                <div className="flex flex-col w-full p-5 bg-white rounded-lg shadow-md">
                    <div className="chat-container flex flex-col flex-grow overflow-y-auto border rounded-md border-gray-200 p-4 mb-4 shadow-lg">
                        <div className='flex gap-5 w-4/5'>
                            <Card className="h-full w-3/5 mr-2">
                                <CardHeader floated={false} shadow={false} className="rounded-none">
                                    <div className="mb-8 flex items-center justify-between gap-8">
                                        <div>
                                            <Typography variant="h5" color="blue-gray">
                                                Leaderboard Domain Game Analyzer
                                            </Typography>
                                            <Typography color="gray" className="mt-1 font-normal">
                                                Play this game with inputting your domain, and see where AI ranks it at, plus the analyzer to help you choose the better blockchain domain!
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                                        <Tabs value="all" className="w-full md:w-max">
                                            <TabsHeader>
                                                {TABS.map(({ label, value }) => (
                                                    <Tab key={value} value={value}>
                                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                                    </Tab>
                                                ))}
                                            </TabsHeader>
                                        </Tabs>
                                    </div>
                                </CardHeader>
                                <CardBody className="overflow-scroll px-0">
                                    <table className="mt-4 w-full table-auto text-left">
                                        <thead>
                                            <tr>
                                                {TABLE_HEAD.map((head, index) => (
                                                    <th
                                                        key={head}
                                                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                                    >
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                                        >
                                                            {head}{" "}
                                                            {index !== TABLE_HEAD.length - 1 && (
                                                                <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                                            )}
                                                        </Typography>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {domainData.map((domain, index) => {
                                                const isLast = index === domainData.length - 1;
                                                const classes = isLast
                                                    ? "p-4"
                                                    : "p-4 border-b border-blue-gray-50";

                                                return (
                                                    <tr key={domain.Domain} onClick={() => handleDomainClick(domain)}>
                                                        <td className={classes}>
                                                            <Chip
                                                                color="blue"
                                                                value={domain.Domain}
                                                                className="rounded-md bg-orange-300 text-blue-800"
                                                            />
                                                        </td>
                                                        <td className={classes}>
                                                            <Chip
                                                                color="blue"
                                                                value={domain.Trend}
                                                                className="rounded-md bg-blue-100 text-blue-800"
                                                            />
                                                        </td>
                                                        <td className={classes}>
                                                            <Chip
                                                                color="green"
                                                                value={domain.Price}
                                                                className="rounded-md bg-green-100 text-green-800"
                                                            />
                                                        </td>
                                                        <td className={classes}>
                                                            <Chip
                                                                color="red"
                                                                value={domain["Invested Chances"]}
                                                                className="rounded-md bg-green-900 text-white"
                                                            />
                                                        </td>
                                                        <td className={classes}>
                                                            <Link to='/buy'>
                                                            <Button
                                                                color="blue"
                                                                size="sm"
                                                            >
                                                                Buy
                                                            </Button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </CardBody>
                                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        Page 1 of 1
                                    </Typography>
                                    <div className="flex gap-2">
                                        <Button variant="outlined" size="sm">
                                            Previous
                                        </Button>
                                        <Button variant="outlined" size="sm">
                                            Next
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card className="h-full w-3/5 pl-2">
                                <CardHeader floated={false} shadow={false} className="rounded-none">
                                    <div className="mb-8 flex items-center justify-between gap-8">
                                        <div>
                                            <Typography variant="h5" color="blue-gray">
                                                Play game with us!
                                            </Typography>
                                            <Typography color="gray" className="mt-1 font-normal">
                                               Hits <span className='font-bold text-red-600'>the 1st place</span>, and <span className='font-bold text-black uppercase'>earn 30%</span> off on your next purchase!
                                            </Typography>
                                        </div>
                                    </div>
                                </CardHeader>
                                <div className="w-4/5 flex gap-2">
                                    <Input
                                        value={inputText}
                                        onChange={handleInputChange}
                                        placeholder="Type your domain..."
                                        className="w-full mr-2"
                                    />
                                    <Button
                                        color="blue"
                                        onClick={handleSendMessage}
                                    >
                                        Play
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
