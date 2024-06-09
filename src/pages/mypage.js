import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
// import jwtDecode from "jwt-decode";

export default function MyPage() {
  // const accessToken = localStorage.getItem("accessToken");

  // let user = {};
  // if (!accessToken) {
  //   console.error("No access token found in localStorage");
  // } else {
  //   try {
  //     user = jwtDecode(accessToken);
  //     console.log(user);
  //   } catch (error) {
  //     console.error("Error verifying token:", error);
  //   }
  // }
  const user = {
    profileImage: "", 
    email: "user.email@example.com",
    nickname: "username",
    fullName: "Full Name",
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="mt-16 flex flex-wrap justify-center flex-1 p-4">
        <div className="w-full lg:w-1/5 p-4 bg-white rounded-lg shadow-md m-4" style={{ height: '50vh' }}>
          <h2 className="text-xl font-semibold mb-4 text-center">프로필 정보</h2>
          <form className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-lg p-4 mb-4 text-center">
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt="프로필 이미지"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-tl from-blue-100 via-blue-300 to-blue-500"></div>
              )}
              <p className="text-gray-700">{user.email}</p>
            </div>
            <div className="text-center">
              <label className="block mt-2">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </label>
              <p className="mt-2 text-gray-600 text-sm">
                Upload a new avatar. Maximum upload size is 1 MB.
              </p>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-md m-4" style={{ height: '66vh' }}>
          <h2 className="text-xl font-semibold mb-4 text-center">설정</h2>
          <form>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                placeholder="Full Name"
                value={user.fullName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                placeholder="Username"
                value={user.nickname}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm">Email Address</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm bg-gray-100"
                placeholder="email@example.com"
                value={user.email}
                readOnly
              />
            </div>
            <h2 className="text-lg font-bold mt-4 mb-3 text-center">Change Password</h2>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm">Current Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                placeholder="Current Password"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm">New Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                placeholder="New Password"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                placeholder="Confirm Password"
              />
            </div>
            <div className="text-center">
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Update Info
              </button>
              <button className="mt-3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Change Password
              </button>
              <Link href="/create-blog">
                <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  블로그 생성
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
