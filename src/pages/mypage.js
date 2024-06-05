import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { jwtDecode } from "jwt-decode";

export default function MyPage() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("No access token found in localStorage");
  }

  try {
    const user = jwtDecode(accessToken);
    console.log(user);
  } catch (error) {
    console.error("Error verifying token:", error);
  }

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
              <div className="bg-gray-200 rounded-lg p-4 mb-4"></div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">설정</h2>
              <Link href="#">
                <p className="text-blue-500 hover:underline cursor-pointer">
                  프로필 수정
                </p>
              </Link>
              <Link href="#">
                <p className="text-blue-500 hover:underline cursor-pointer">
                  비밀번호 변경
                </p>
              </Link>
              <Link href="/create-blog">
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  블로그 생성
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
