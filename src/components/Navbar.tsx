"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-10 shadow-md bg-white">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Transilience AI Logo"
          width={50}
          height={50}
        />
        <span className="ml-2 text-lg font-semibold">Transilience AI</span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <span className="text-md">
          Welcome <strong>Muzaffar H.</strong>
        </span>
        <Link href="/">
          <Image src="/user-icon.png" alt="User Icon" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image
            src="/settings-icon.png"
            alt="Settings Icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <Image src="/menu.png" alt="Menu Icon" width={24} height={24} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-10 bg-gray-50 shadow-lg rounded-lg p-4 md:hidden z-50">
          <span className="block text-md mb-2">
            Welcome <strong>Muzaffar H.</strong>
          </span>
          <Link href="/" className="block mb-2">
            <div className="flex items-center">
              <Image
                src="/user-icon.png"
                alt="User Icon"
                width={24}
                height={24}
              />
              <span className="ml-2">Profile</span>
            </div>
          </Link>
          <Link href="/" className="block">
            <div className="flex items-center">
              <Image
                src="/settings-icon.png"
                alt="Settings Icon"
                width={24}
                height={24}
              />
              <span className="ml-2">Settings</span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
