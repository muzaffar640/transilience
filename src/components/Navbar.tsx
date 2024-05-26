import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-10 shadow-md">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Transilience AI Logo"
          width={50}
          height={50}
        />
        <span className="ml-2 text-lg font-semibold">Transilience AI</span>
      </div>
      <div className="flex items-center space-x-4">
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
    </nav>
  );
};

export default Navbar;
