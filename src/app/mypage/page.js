"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useAuth } from "../contexts/AuthContext";

export default function MyPage() {
  const { accessToken } = useAuth();
  const [userProfile, setUserProfile] = useState(null);

  const fetchUserProfile = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/get-profile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const data = await res.json();
      setUserProfile(data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="mt-16 flex flex-wrap justify-center flex-1 p-4">
        <div
          className="w-full lg:w-1/5 p-4 bg-white rounded-lg shadow-md m-4"
          style={{ height: "50vh" }}
        >
          <h2 className="text-xl font-semibold mb-4 text-center">
            프로필 정보
          </h2>
          {userProfile && (
            <form className="flex flex-col items-center">
              <div className="rounded-lg p-4 mb-4 text-center">
                <img
                  src={
                    userProfile.data.profile_image
                      ? userProfile.data.profile_image
                      : "/profile-image.jpg"
                  }
                  alt="프로필 이미지"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />

                <p className="text-gray-700">{userProfile.data.email}</p>
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
          )}
        </div>
        <div
          className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-md m-4"
          style={{ height: "66vh" }}
        >
          <h2 className="text-xl font-semibold mb-4 text-center">설정</h2>
          {userProfile && (
            <form>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Username</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                  placeholder="Full Name"
                  value={userProfile.data.username}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Nickname</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                  placeholder="Username"
                  value={userProfile.data.nickname}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded mt-1 text-sm bg-gray-100"
                  placeholder="email@example.com"
                  value={userProfile.data.email}
                  readOnly
                />
              </div>
              <h2 className="text-lg font-bold mt-4 mb-3 text-center">
                Change Password
              </h2>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                  placeholder="Current Password"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                  placeholder="New Password"
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">
                  Confirm Password
                </label>
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
          )}
        </div>
      </div>
    </div>
  );
}
