import { useAldoAlert } from 'aldo-alert';
import React, { useState } from 'react';
import { HashLoader } from 'react-spinners';

const ButtonComp = ({ children, setTab }) => {
    const { showAldoAlert } = useAldoAlert();
    const [loading, setLoading] = useState(false);

    const handleBlockchain = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            showAldoAlert('Successfully Proceeded!', 'warning');
            setTab(1); // Update the tab state
        }, 3000);
    };

    return (
        <button
            onClick={handleBlockchain}
            className="px-5 py-2 bg-green-500 text-white rounded transition duration-300 ease-in-out hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 w-[190px] flex items-center justify-center"
        >
            {loading ? <HashLoader color='#ffffff' size={20} /> : children}
        </button>
    );
};

export default ButtonComp;
