import Head from 'next/head'; // Head 컴포넌트 임포트
import styles from '../styles/User.module.css'; // CSS 모듈 임포트
import Header from '../app/components/Header'; // Header 컴포넌트 임포트

// User 함수형 컴포넌트 정의
export default function User() {

    // 버튼 클릭 시 로그를 출력하는 함수
    const handleButtonClick = (buttonName) => {
      console.log(`${buttonName} 버튼 클릭됨`);
    };

    
  return (
    <div className={styles.container}> {/* 컨테이너 div */}
      <Head>
        <title>User Page</title> {/* 페이지 타이틀 */}
        <meta name="description" content="User page" /> {/* 메타 설명 */}
        <link rel="icon" href="/favicon.ico" /> {/* 파비콘 */}
      </Head>

      <Header disableSearch={true}/> {/* Header 컴포넌트 추가, 검색창 비활성화 */}

      <div className={styles.userContainer}>
        <div className={styles.leftLinks}>
          <button className={styles.userLinkButton} onClick={() => handleButtonClick('블로그 관리')}>블로그 관리</button>
          <button className={styles.userLinkButton} onClick={() => handleButtonClick('신규 댓글')}>신규 댓글</button>
          <button className={styles.userLinkButton} onClick={() => handleButtonClick('고객지원')}>고객지원</button>
        </div>
        <div className={styles.rightLinks}>
          <button className={styles.userLinkButton} onClick={() => handleButtonClick('프로필 수정')}>프로필 수정</button>
          <button className={styles.userLinkButton} onClick={() => handleButtonClick('로그인')}>로그인</button>
        </div>
      </div>
    </div>
  );
}
