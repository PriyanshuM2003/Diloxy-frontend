import React from 'react'
import { AiOutlineSearch, AiOutlineInbox, AiFillThunderbolt } from 'react-icons/ai';
import { MdAccountCircle, MdOutlineDoubleArrow } from 'react-icons/md';
import { BiCube, BiNote, BiLabel } from 'react-icons/bi';
import { BsThreeDotsVertical, BsFillHandbagFill, BsEmojiSmile, BsMic, BsCapslock } from 'react-icons/bs';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiPaperclip } from 'react-icons/fi';
import { GoPrimitiveDot } from 'react-icons/go';

const Chatbox = () => {
    return (
        <>
            <div className="container mx-auto shadow-lg rounded-lg min-h-full">
                <div className="flex flex-row justify-between bg-white">
                    <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                        <div className="relative border-b-2 py-4 px-2">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required></input>
                        </div>
                        <div
                            className="flex flex-row py-4 px-2 justify-center items-center border-b-2"
                        >
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Jamall Cornell</div>
                                <span className="text-gray-500">Pick me at 9:00 Am</span>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/otT2199XwI8/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Peter Bash</div>
                                <span className="text-gray-500">Hi Sam, Welcome</span>
                            </div>
                        </div>
                        <div
                            className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
                        >
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Joana Martina</div>
                                <span className="text-gray-500">Hi there!</span>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Amindo vogel</div>
                                <span className="text-gray-500">some one can fix this</span>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Bruno Tah</div>
                                <span className="text-gray-500">some one can fix this</span>
                            </div>
                        </div>

                        <div className="flex flex-row py-4 px-2 items-center border-b-2">
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Ludovica Mirth</div>
                                <span className="text-gray-500">some one can fix this</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5 flex flex-col">
                        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                            <div className='flex justify-center items-center'>
                                <div className="font-semibold text-2xl">Joana Martina</div>
                                <GoPrimitiveDot className='text-green-500' />
                            </div>
                            <div className='flex justify-center space-x-4 items-center'>
                            <div className='flex justify-center items-center'>
                                Assign to:
                                <div className="h-6 w-6 p-2 mx-1 bg-pink-500 rounded-full text-white font-semibold flex items-center justify-center">
                                    S
                                </div>
                                Sales
                            </div>
                                <AiOutlineSearch />
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                        <div className="flex flex-col mt-5">
                            <div className="flex justify-start mb-4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                                <div
                                    className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                    Hi there!
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-2/3 absolute bottom-4 py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <AiFillThunderbolt />
                            </button>
                            <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                            <button type="submit" className=" flex items-center justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <BiNote className="mx-1 text-xl" />
                                <BsCapslock className="mx-1 text-xl" />
                                <BsEmojiSmile className="mx-1 text-xl" />
                                <FiPaperclip className="mx-1 text-xl" />
                                <BsMic className="mx-1 text-xl" />
                            </button>
                        </div>
                    </div>
                    <div className="w-20 border-l-2 px-5">
                        <aside className="w-12" aria-label="Sidebar">
                            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                                <ul className="space-y-2">
                                    <li>
                                        <MdAccountCircle className="text-gray-500 text-3xl" />
                                    </li>
                                    <li>
                                        <BsFillHandbagFill className='text-gray-500 text-3xl' />
                                    </li>
                                    <li>
                                        <BiCube className='text-gray-500 text-3xl' />
                                    </li>
                                    <li>
                                        <AiOutlineInbox className='text-gray-500 text-3xl' />
                                    </li>
                                    <li>
                                        <BiLabel className='text-gray-500 text-3xl' />
                                    </li>
                                    <li>
                                        <BiNote className='text-gray-500 text-3xl' />
                                    </li>
                                    <li>
                                        <IoAddCircleOutline className='text-gray-500 text-3xl' />
                                    </li>
                                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                    <li>
                                        <MdOutlineDoubleArrow className='text-gray-500 text-3xl rotate-180' />
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatbox