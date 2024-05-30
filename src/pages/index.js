import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">메인</h1>
        <Link href="/login">
          <p className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer">
            로그인
          </p>
        </Link>
      </div>
    </div>
  );
}