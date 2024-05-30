import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function MyPage() {
  const user = {
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-auto  h=1/4 w=1/4 items-center min-h-screen p-4 mt-20 ">
          <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">마이페이지</h1>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">프로필 정보</h2>
              <div className="bg-gray-200 rounded-lg p-4 mb-4">
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">설정</h2>
              <Link href="#">
                <p className="text-blue-500 hover:underline cursor-pointer">프로필 수정</p>
              </Link>
              <Link href="#">
                <p className="text-blue-500 hover:underline cursor-pointer">비밀번호 변경</p>
              </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}