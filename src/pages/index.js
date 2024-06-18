// import { useEffect, useState } from 'react'; // useEffect, useState 훅 임포트
// import { useRouter } from 'next/router'; // useRouter 훅 임포트

import styles from "../styles/index.module.css"; // CSS 모듈 임포트
import Header from "../app/components/Header"; // Header 컴포넌트 임포트

// 게시판 데이터 예제
const boards = [
  {
    id: 1,
    title: "게시판 1",
    content: "게시판 1의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 2,
    title: "게시판 2",
    content: "게시판 2의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 3,
    title: "게시판 3",
    content: "게시판 3의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 4,
    title: "게시판 4",
    content: "게시판 4의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 5,
    title: "게시판 5",
    content: "게시판 5의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  // API 받아오면 이 예제 삭제
];

// 태그 데이터 예제
const tags = [
  { id: 1, name: "React" },
  { id: 2, name: "Next.js" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "CSS" },
  { id: 5, name: "HTML" },
  // API 받아오면 이 예제 삭제
];

// Home 함수형 컴포넌트 정의
export default function Home() {
  // const [boards, setBoards] = useState([]); // 게시판 데이터를 저장할 상태 정의

  // useEffect(() => {
  //   // API 호출하여 게시판 데이터 가져오기
  //   const fetchData = async () => {
  //     const res = await fetch('/api');
  //     const data = await res.json();
  //     setBoards(data);
  //   };

  //   fetchData();
  // }, []);

  // const router = useRouter(); // useRouter 훅 사용

  // const handleClick = (id) => {
  //   console.log(`게시글 ${id} 클릭됨`); // 클릭 로그 출력
  //   router.push(`/posts/${id}`); // 해당 게시글로 라우팅
  // };

  return (
    <div className={styles.container}>
      <Header /> {/* Header 컴포넌트 추가 */}
      <main className={styles.main}>
        {" "}
        {/* 메인 컨텐츠 */}
        <div className={styles.mainBoard}>
          {" "}
          {/* 메인 게시판 */}
          {/* 주요 게시판 내용 표시 */}
          {boards.slice(0, 2).map((board) => (
            <div
              key={board.id}
              className={styles.boardContent}
              onClick={() => handleClick(board.id)}
            >
              <img
                src={board.thumbnail}
                alt={`${board.title} 썸네일`}
                className={styles.thumbnail}
              />{" "}
              {/* 썸네일 이미지 */}
              <h3 className={styles.subtitle}>{board.title}</h3>{" "}
              {/* 게시판 제목 */}
              <p className={styles.text}>{board.content}</p> {/* 게시판 내용 */}
            </div>
          ))}
        </div>
        <div className={styles.sidebar}>
          {" "}
          {/* 게시판 목록 */}
          <h2 className={styles.title}>인기 게시글</h2>
          {/* 게시판 목록 표시 */}
          {boards.slice(2, 5).map((board) => (
            <div
              key={board.id}
              className={styles.sidebarItem}
              onClick={() => handleClick(board.id)}
            >
              <img
                src={board.thumbnail}
                alt={`${board.title} 썸네일`}
                className={styles.thumbnailSmall}
              />{" "}
              {/* 썸네일 이미지 */}
              <h3 className={styles.subtitle}>{board.title}</h3>{" "}
              {/* 게시판 제목 */}
              <p className={styles.text}>{board.content}</p> {/* 게시판 내용 */}
            </div>
          ))}
          <h2 className={styles.title}>인기 태그</h2>
          {/* 태그 목록 표시 */}
          <div className={styles.tagList}>
            {tags.map((tag) => (
              <span
                key={tag.id}
                className={styles.tagItem}
                onClick={() => handleTagClick(tag.name)}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
