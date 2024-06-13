"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        if (!response.ok) {
          const errorMsg = data.message;

          if (errorMsg === "User does not exist") {
            setError("존재하지 않는 유저입니다.");
          } else if (
            errorMsg === "Invaild email or password" ||
            errorMsg === "Missing required fields"
          ) {
            setError("이메일 또는 비밀번호를 잘못 입력했습니다.");
          }
        } else {
          login(data.data.accessToken);

          router.push("/mypage");
        }
      }
    } catch (err) {
      console.log("login: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="relative flex items-center justify-center min-h-screen bg-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-your-background-image.jpg')",
          }}
        />
        <div className="relative z-10 flex items-center justify-center w-full max-w-2xl p-10 bg-white rounded-lg shadow-lg">
          <div className="hidden md:block md:w-1/2 md:mr-10">
            <img
              src="/1234.jpg"
              alt="랜덤 블로그 이미지"
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              로그인
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="이메일"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="비밀번호"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
                disabled={loading}
              >
                {loading ? "로딩 중..." : "로그인"}
              </button>
            </form>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
              <Link href="" className="hover:underline cursor-pointer">
                <span>비밀번호를 잊으셨나요?</span>
              </Link>
              <Link href="/signup" className="hover:underline cursor-pointer">
                <span>가입하기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
