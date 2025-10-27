import React from "react";

function NavBar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-indigo-900/70 text-white sticky top-0 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-border">
            <a href="#home" className="text-xl font-bold">กินดีอยู่ดี</a>
            <div className="flex items-center">
                <ul className="flex space-x-6 px-8">
                    <li>
                        <a href="#home" className="hover:text-cyan-400">
                            หน้าแรก
                        </a>
                    </li>
                    <li>
                        <a href="#works" className="hover:text-cyan-400">
                            ผลงาน
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-cyan-400">
                            เกี่ยวกับเรา
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-cyan-400">
                            ติดต่อ
                        </a>
                    </li>
                </ul>
                <div>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Purple to Blue
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
