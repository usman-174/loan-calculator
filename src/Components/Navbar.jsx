import React, { useState } from 'react';
import { FaMoneyCheck } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';
const Navbar = () => {
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <div className='flex px-3 py-3 justify-between border-b-2 dark:border-gray-700 items-center'>

            {/* Logo */}
            <div className=' cursor-pointer text-2xl font-bold flex items-center justify-start gap-2'>
                <FaMoneyCheck size="35" />
                <span>

                    LoanHub
                </span>
            </div>

            {/* Navbar Links */}
            <div className="rounded-md ">
                <button onClick={() => {

                    darkModeHandler()
                }} className='p-2'>
                    {

                        dark && <IoSunny size={"25"} />
                    }
                    {
                        !dark && <IoMoon size={"25"} />
                    }
                </button>
            </div>
        </div>
    )
}

export default Navbar