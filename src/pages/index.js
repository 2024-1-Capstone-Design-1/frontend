import PostList from '../components/PostList'; // PostList 컴포넌트 임포트함
import CategoryList from '../components/CategoryList'; // CategoryList 컴포넌트 임포트함

// Home 컴포넌트 정의함
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100"> {/* 페이지 전체 레이아웃 스타일 적용 */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center"> {/* 헤더 섹션 */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-6 w-6 mr-2" /> {/* 로고 이미지 크기 조정 */}
          <h1 className="text-2xl font-bold">타이틀</h1> {/* 타이틀 텍스트 */}
        </div>
        <div>
          <button className="text-sm text-gray-700">사용자 패널</button> {/* 사용자 패널 버튼 */}
        </div>
      </header>
      <nav className="bg-gray-200 p-4"> {/* 네비게이션 바 */}
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-700">홈</a></li> {/* 홈 링크 */}
          <li><a href="#" className="text-gray-700">게시판</a></li> {/* 게시판 링크 */}
        </ul>
      </nav>
      <main className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4"> {/* 메인 콘텐츠 섹션 */}
        <div className="w-full lg:w-2/3 xl:w-3/4"> {/* 메인 콘텐츠 영역 */}
          <div className="mb-4">
            <input type="text" placeholder="검색창" className="w-full p-2 border rounded-lg" /> {/* 검색창 */}
          </div>
          <PostList /> {/* 게시물 리스트 컴포넌트 렌더링 */}
        </div>
        <aside className="w-full lg:w-1/3 xl:w-1/4"> {/* 사이드바 섹션 */}
          <div className="space-y-4"> {/* 사이드바 항목 간의 간격 */}
            <CategoryList /> {/* 카테고리 리스트 컴포넌트 렌더링 */}
            {/* 인기 게시물 리스트 컴포넌트를 여기에 추가할 수 있음 */}
          </div>
        </aside>
      </main>
    </div>
  );
}
