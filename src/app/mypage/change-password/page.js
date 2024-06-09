"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../../contexts/AuthContext"; // useAuth 훅 임포트, 인증 컨텍스트 사용

export default function ChangePassword() {
  const { accessToken } = useAuth(); // 인증 컨텍스트에서 accessToken 가져오기
  const [currentPassword, setCurrentPassword] = useState(""); // 현재 비밀번호 상태 정의
  const [newPassword, setNewPassword] = useState(""); // 새로운 비밀번호 상태 정의
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인 상태 정의
  const router = useRouter();

  // 비밀번호 변경 함수
  const changePassword = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!"); // 비밀번호 일치 여부 확인
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: {
              current: currentPassword,
              change: newPassword,
            },
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to change password"); // 응답이 정상적이지 않을 경우 에러 발생
      }

      alert("Password changed successfully!"); // 성공 메시지 표시
      router.push("/mypage");
    } catch (error) {
      console.error("Error changing password:", error); // 에러 발생 시 콘솔에 에러 출력
      alert("Error changing password"); // 에러 메시지 표시
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="mt-16 flex justify-center flex-2 p-4 ">
        <div className="w-full lg:w-1/3 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center">
            비밀번호 변경
          </h2>
          {/* 비밀번호 변경 헤더 */}
          <form onSubmit={changePassword}>
            <div className="mb-3">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                placeholder="현재 비밀번호"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                placeholder="새 비밀번호"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 text-sm"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
              >
                비밀번호 변경
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
