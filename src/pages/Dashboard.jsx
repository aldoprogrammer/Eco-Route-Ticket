import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { Input, Button, Chip } from '@material-tailwind/react';
import { useAldoAlert } from 'aldo-alert';
import CustomSpeakerIcon from '../components/CustomSpeakerIcon';

const Dashboard = () => {
    const { showAldoAlert } = useAldoAlert();
    const [tab, setTab] = useState(0);
    const travelDestinations = [
        {
            id: 1,
            name: 'Paris, France',
            description: 'Explore the romantic city of Paris.',
            imageUrl: 'https://www.zurich.co.id/-/media/project/zwp/indonesia/images/5_shutterstock_1041475570-1.jpg',
        },
        {
            id: 2,
            name: 'Tokyo, Japan',
            description: 'Experience the bustling city of Tokyo.',
            imageUrl: 'https://www.majalahict.com/wp-content/uploads/2022/04/travel.jpeg',
        },
        {
            id: 3,
            name: 'New York City, USA',
            description: 'Discover the city that never sleeps.',
            imageUrl: 'https://i.natgeofe.com/n/c15761fa-d631-4a41-bd23-8e339560709c/nationalgeographic_2670050crop_16x9.jpg',
        },
        // Add more destinations as needed
    ];

    const handleBuyClick = (destinationId) => {
        // Placeholder function for handling booking
        console.log(`Book clicked for destination ID: ${destinationId}`);
    };

    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="flex flex-grow">
                <Sidebar />
                <div className="flex flex-col w-full p-5 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                        Trip Planner Eco Friendly
                    </h1>
                    <div className="mb-6">
                        <div className="flex gap-4 mb-4 cursor-pointer">
                            <Chip
                                color={tab === 0 ? 'blue' : 'gray'}
                                onClick={() => setTab(0)}
                                value="Featured Destinations"
                            />
                            <Chip
                                color={tab === 1 ? 'blue' : 'gray'}
                                onClick={() => setTab(1)}
                                value="Other Destinations"
                            />
                        </div>
                    </div>
                    <div className="chat-container flex flex-col flex-grow overflow-y-auto border rounded-md border-gray-200 p-4 mb-6 shadow-lg">
                        {tab === 0 && (
                            <>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Featured Destinations
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {travelDestinations.map(destination => (
                                        <div key={destination.id} className="flex flex-col items-start bg-white rounded-lg shadow-md overflow-hidden">
                                            <img
                                                src={destination.imageUrl}
                                                alt={destination.name}
                                                className="w-full h-48 object-cover"
                                            />
                                            <div className="p-4 flex flex-col flex-grow justify-between">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                                                    <p className="text-sm text-gray-600">{destination.description}</p>
                                                </div>
                                                <Button
                                                    color="blue"
                                                    buttonType="filled"
                                                    size="sm"
                                                    className='mt-4'
                                                    rounded={false}
                                                    block={false}
                                                    iconOnly={false}
                                                    ripple="light"
                                                    onClick={() => handleBuyClick(destination.id)}
                                                >
                                                    Book Now
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {tab === 1 && (
                            <>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Other Destinations
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Placeholder content for other destinations */}
                                    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                                        <p className="text-gray-800">More destinations coming soon...</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="input-container flex">
                        <Input
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
