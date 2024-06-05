import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md py-4 px-8 fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-xl font-bold text-gray-800 cursor-pointer">
            메인화면으로
          </p>
        </Link>
        <nav>
          <Link href="/mypage">
            <p className="px-4 cursor-pointer">마이페이지</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
