import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-96 bg-gray-200 text-white min-h-screen p-4 fixed right-0 top-16 z-50">
      <div className="mb-4">
        <div className="bg-gray-700 w-80 h-40 rounded-lg mb-2"></div>
        <div className="bg-gray-700 700 w-80 h-40 rounded-lg"></div>
      </div>
      <ul className="space-y-4"></ul>
    </div>
  );
}
