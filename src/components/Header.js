import { useRouter } from 'next/router'; // useRouter 훅 임포트

// Header 컴포넌트를 정의함
export default function Header() {
  const router = useRouter(); // useRouter 훅 사용

  // Home과 게시판 버튼 클릭 시 콘솔 로그를 출력하는 함수 정의
  const handleClick = (page) => {
    console.log(`${page} 버튼 클릭됨`); // 페이지 이동 역할을 할 예정
    router.push(`/${page}`); // 페이지 이동
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src="/logo.png" alt="Logo" style={logoStyle} /> {/* 로고 이미지 */}
        <h1 style={titleStyle}>헤더 타이틀</h1> {/* 헤더 타이틀 */}
      </div>
      <hr style={dividerStyle} /> {/* 가로 구분선 */}
      <nav style={navStyle}>
        <div style={linkContainerStyle}>
          <a href="#" style={linkStyle} onClick={() => handleClick('')}>홈</a> {/* '홈' 텍스트 */}
          <a href="#" style={linkStyle} onClick={() => handleClick('board')}>게시판</a> {/* '게시판' 텍스트 */}
        </div>
        <a href="#" style={userButtonStyle} onClick={() => handleClick('user')}>사용자</a> {/* '사용자' 버튼 */}
      </nav>
      <hr style={dividerStyle} /> {/* 가로 구분선 */}
      <div style={searchContainerStyle}>
        <input type="text" placeholder="검색" style={searchInputStyle} /> {/* 검색창 */}
      </div>
    </header>
  );
}

// 스타일 객체 정의
const headerStyle = {
  display: 'flex', // 플렉스 박스 사용
  flexDirection: 'column', // 플렉스 방향을 컬럼으로 설정
  alignItems: 'flex-start', // 왼쪽 정렬
  padding: '0 1rem', // 좌우 패딩 설정
  width: '100%', // 전체 너비 사용
  maxWidth: '1440px', // 최대 너비 설정
  boxSizing: 'border-box', // 패딩을 포함하여 박스 크기 설정
};

const logoContainerStyle = {
  display: 'flex', // 플렉스 박스 사용
  alignItems: 'center' // 중앙 정렬
};

const titleStyle = {
  margin: '0 0 0 1rem', // 왼쪽 마진 1rem 설정
  fontSize: '1.5rem' // 폰트 크기 설정
};

const logoStyle = {
  height: '30px' // 로고 높이 설정
};

const dividerStyle = {
  width: '100%', // 전체 너비 사용
  margin: '0.3rem 0' // 상하 마진
};

const navStyle = {
  display: 'flex', // 플렉스 박스 사용
  justifyContent: 'space-between', // 공간을 균등하게 분배
  alignItems: 'center', // 중앙 정렬
  width: '100%' // 네비게이션 바 너비 설정
};

const linkContainerStyle = {
  display: 'flex', // 플렉스 박스 사용
  alignItems: 'center' // 중앙 정렬
};

const linkStyle = {
  marginRight: '1rem', // 오른쪽 마진 1rem 설정
  fontSize: '1.1rem', // 폰트 크기 설정
  textDecoration: 'none', // 밑줄 없앰
  color: '#000000', // 텍스트 색상 설정 (검정)
  cursor: 'pointer' // 커서 포인터로 설정
};

const userButtonStyle = {
  fontSize: '1rem', // 폰트 크기 설정
  textDecoration: 'none', // 밑줄 없앰
  color: '#000000', // 텍스트 색상 설정 (검정)
  cursor: 'pointer', // 커서 포인터로 설정
  padding: '0.3rem 0.3rem', // 패딩 설정
  border: '1px solid #000000', // 테두리 설정
//   borderRadius: '5px' // 테두리 반경 설정
};

const searchContainerStyle = {
  width: '100%', // 검색창 너비 설정
  display: 'flex', // 플렉스 박스 사용
  justifyContent: 'center', // 중앙 정렬
  marginTop: '0.2rem' // 상단 마진 설정
};

const searchInputStyle = {
  width: '100%', // 검색창 너비 설정
  padding: '0.5rem', // 패딩 설정
  fontSize: '1rem', // 폰트 크기 설정
  border: '1px solid #000000', // 테두리 설정
};
