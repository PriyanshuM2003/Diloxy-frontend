import React from 'react'
import { MdPlaylistAdd } from 'react-icons/md';
import { BsChatDots, BsSlashLg } from 'react-icons/bs';
import { GrAppsRounded } from 'react-icons/gr';
import { VscRepoForked } from 'react-icons/vsc';
import { FiSettings } from 'react-icons/fi';


const Navbar = () => {
    return (
        <>
            {/* <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header> */}


            <nav className="bg-white">
                <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                            </div>
                            <div className="flex justify-center items-center mx-auto">
                                <h1 className="absolute left-0 font-semibold">Zoko</h1>
                                <div className="flex space-x-4">
                                    <a href="#" className="flex justify-center items-center hover:bg-gray-100 text-gray-800 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"><MdPlaylistAdd className='text-xl mr-1' />Queue</a>
                                    <a href="#" className="flex justify-center items-center hover:bg-gray-100 text-gray-800 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"><BsChatDots className='text-base mr-1' />Chat</a>
                                    <a href="#" className="flex justify-center items-center hover:bg-gray-100 text-gray-800 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"><GrAppsRounded className='text-base mr-1' />Apps</a>
                                    <a href="#" className="flex justify-center items-center hover:bg-gray-100 text-gray-800 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"><VscRepoForked className='text-base mr-1' />Rules</a>
                                    <a href="#" className="flex justify-center items-center hover:bg-gray-100 text-gray-800 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"><BsSlashLg className='text-base mr-1' />Flows</a>
                                    <a href="#" className="flex justify-center items-center hover:bg-gray-100 text-gray-800 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"><FiSettings className='text-base mr-1' />Settings</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>

                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 h-8 w-8 p-2 mx-1 text-white font-semibold items-center justify-center" id="user-menu-button" aria-expanded="false" aria-haspopup="true">S
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">

                        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                        <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                        <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                        <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar