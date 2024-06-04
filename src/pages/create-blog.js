import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function CreateBlogPage() {
  const [name, setName] = useState('');
  const [subDomain, setSubDomain] = useState('');
  const [templateId, setTemplateId] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubDomainChange = (e) => {
    setSubDomain(e.target.value);
  };

  const handleTemplateIdChange = (e) => {
    setTemplateId(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://port-0-backend-ss7z32llwi2aafi.sel5.cloudtype.app/blog/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          name,
          subDomain,
          templateId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      router.push('/mypage');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="relative flex items-center justify-center min-h-screen bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }} />
        <div className="relative z-10 flex items-center justify-center w-full max-w-2xl p-10 bg-white rounded-lg shadow-lg">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">블로그 생성</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="블로그 이름"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subDomain"
                  value={subDomain}
                  onChange={handleSubDomainChange}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="서브도메인"
                  required
                />
              </div>
              <div>
                <select
                  id="templateId"
                  value={templateId}
                  onChange={handleTemplateIdChange}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={1}>Template 1</option>
                  <option value={2}>Template 2</option>
                  <option value={3}>Template 3</option>
                </select>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
                disabled={loading}
              >
                {loading ? '로딩 중...' : '블로그 생성'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}