import Head from 'next/head'; // Head 컴포넌트 임포트
import styles from '../styles/Board.module.css'; // CSS 모듈 임포트
import Header from '../components/Header'; // Header 컴포넌트 임포트

// Board 함수형 컴포넌트 정의
export default function Board() {
  return (
    <div className={styles.container}> {/* 컨테이너 div */}
      <Head>
        <title>Board Page</title> {/* 페이지 타이틀 */}
        <meta name="description" content="Board page" /> {/* 메타 설명 */}
        <link rel="icon" href="/favicon.ico" /> {/* 파비콘 */}
      </Head>

      <Header /> {/* Header 컴포넌트 추가 */}

      <main className={styles.main}> {/* 메인 컨텐츠 */}
        <h1 className={styles.title}>게시판 페이지</h1>
        <p className={styles.description}>여기는 게시판 페이지입니다.</p>
      </main>
    </div>
  );
}
