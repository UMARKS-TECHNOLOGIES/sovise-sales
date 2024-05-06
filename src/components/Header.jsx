import React from 'react'

const Header = () => {
    return (
        <>
            <div className="w-full bg-[#E28B22] fixed top-0 shadow-md z-[1000]">
                <div className="w-[80%] m-auto flex justify-between py-3">
                    <div className="flex-1">
                        <h1 className="font-bold text-3xl text-white font-dancingScript">Sovise</h1>
                    </div>
                    <ul className="hidden">
                        <li className="px-4 flex justify-between gap-5">
                            <p className="cursor-pointer">Home</p>
                        </li>
                        <li className="px-4 flex justify-between gap-5">
                            <p className="cursor-pointer">About</p>
                        </li>
                        <li className="px-4 flex justify-between gap-5">
                            <p className="cursor-pointer">Services</p>
                        </li>
                        <li className="px-4 flex justify-between gap-5">
                            <p className="cursor-pointer">Contact</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header