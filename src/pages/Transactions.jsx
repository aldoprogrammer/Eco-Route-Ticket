import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { Input, Button } from '@material-tailwind/react';
import { useAldoAlert } from 'aldo-alert';
import ButtonComp from '../components/ButtonComp';
import { Table } from '../components/Table';

const Transactions = () => {
    const { showAldoAlert } = useAldoAlert();
    const [tab, setTab] = useState(0);


    return (
        <div className="flex flex-col h-screen">
            <Topbar />
            <div className="flex flex-grow">
                <Sidebar />
                <div className="flex flex-col w-full p-5 bg-white rounded-lg shadow-md">
                   {tab !== 1 && (
                    <h1 className="text-xl font-bold text-black mb-4">
                        Transactions History
                    </h1>
                   )}
                    
                    <div className="domain-details mb-4 bg-white p-6 rounded-lg shadow-md h-4/5">
                        {tab === 0 ? (
                           <div className="flex flex-col justify-center items-center h-full">
                           <h2 className="text-lg font-semibold text-gray-800 mb-4">Enter Your Pin to see data</h2>
                           <div className="flex gap-2 mb-4">
                             <input type="text" maxLength="1" className="w-10 h-10 text-center border border-gray-300 rounded-md focus:border-blue-500 outline-none" />
                             <input type="text" maxLength="1" className="w-10 h-10 text-center border border-gray-300 rounded-md focus:border-blue-500 outline-none" />
                             <input type="text" maxLength="1" className="w-10 h-10 text-center border border-gray-300 rounded-md focus:border-blue-500 outline-none" />
                             <input type="text" maxLength="1" className="w-10 h-10 text-center border border-gray-300 rounded-md focus:border-blue-500 outline-none" />
                           </div>
                           <ButtonComp setTab={setTab}>Next</ButtonComp>
                         </div>
                         
                         
                        ) : (
                            <div className='flex flex-col'>
                               <Table />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
