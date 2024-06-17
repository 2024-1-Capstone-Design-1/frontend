"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState("");
  const router = useRouter();

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  // 프로필 이미지 변경 핸들러 함수
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };

  // 폼 제출 핸들러 함수
  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    const data = {
      email,
      password,
      username: name,
      nickname,
      profileImage,
    };
    // 회원가입 api
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // 데이터 JSON 형식으로 변환하여 전송
        }
      );

      if (!response.ok) {
        throw new Error("Network Error"); // 응답이 정상적이지 않을 경우 에러 발생
      }

      router.push("/login");
    } catch (err) {
      console.log("SignUp: ", err.message);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center bg-gray-200">
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl p-10 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            회원가입
          </h2>
          {/* 회원가입 박스 */}
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
            <div>
              {/* 이메일 입력 칸 */}
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="이메일"
                required
              />
            </div>
            <div>
              {/* 이름 입력칸 */}
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleInputChange(setName)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="이름"
                required
              />
            </div>
            <div>
              {/* 닉네임 입력칸 */}
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={handleInputChange(setNickname)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="닉네임"
                required
              />
            </div>
            <div>
              {/* 비밀번호 입력칸 */}
              <input
                type="password"
                id="password"
                value={password}
                onChange={handleInputChange(setPassword)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호"
                required
              />
            </div>
            <div>
              {/* 프로필 이미지 */}
              <label
                htmlFor="profileImage"
                className="block text-gray-800 mb-2"
              >
                프로필 이미지
              </label>
              <input
                type="file"
                id="profileImage"
                onChange={handleProfileImageChange}
                className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept="image/*"
              />
              {profileImagePreview && (
                <img
                  src={profileImagePreview}
                  alt="프로필 이미지 미리보기"
                  className="mt-4 w-32 h-32 object-cover rounded-full"
                />
              )}
              {/* 프로필 이미지 미리보기 */}
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              회원가입
            </button>
            {/* 회원가입 버튼 */}
          </form>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <Link href="/login" className="hover:underline cursor-pointer">
              <span>이미 계정이 있으신가요?</span>
            </Link>
            {/* 로그인 페이지로 이동 */}
          </div>
        </div>
      </div>
    </div>
  );
}
