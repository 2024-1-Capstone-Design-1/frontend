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

  const updateUserProfile = async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    try {
      const formData = new FormData();
      formData.append("nickname", nickname);
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/update`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to update user profile"); // 응답이 정상적이지 않을 경우 에러 발생
      }

      const data = await res.json(); // 응답 데이터를 JSON 형식으로 파싱
      console.log("User updated successfully:", data); // 성공적으로 업데이트되었음을 콘솔에 출력
      fetchUserProfile(); // 업데이트 후 사용자 프로필 다시 가져오기
    } catch (error) {
      console.error("Error updating user profile:", error); // 에러 발생 시 콘솔에 에러 출력
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

                <p className="text-gray-700">{userProfile.data.username}</p>
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
            <form onSubmit={updateUserProfile}>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Username</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                  placeholder="USERNAME"
                  value={userProfile.data.username}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm">Nickname</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                  placeholder="NICKNAME"
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
              <div className="text-center space-x-3">
                <button
                  type="submit"
                  className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  프로필 수정
                </button>
                <Link href="/mypage/change-password">
                  <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    비밀번호 변경
                  </button>
                </Link>
                <Link href="">
                  <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    블로그 생성
                  </button>
                </Link>
                <Link href="">
                  <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    블로그 관리
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
