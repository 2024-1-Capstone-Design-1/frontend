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
  {
    id: 6,
    title: "게시판 6",
    content: "게시판 6의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 7,
    title: "게시판 7",
    content: "게시판 7의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 8,
    title: "게시판 8",
    content: "게시판 8의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 9,
    title: "게시판 9",
    content: "게시판 9의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 10,
    title: "게시판 10",
    content: "게시판 10의 내용입니다.",
    thumbnail: "/thumbnail1.png",
  },
  {
    id: 11,
    title: "게시판 11",
    content: "게시판 11의 내용입니다.",
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

export default function Home() {
  return (
    <main className="container mx-auto px-4 pt-16">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 p-4">
          {boards.slice(0, 5).map((board) => (
            <div
              key={board.id}
              className="mb-4 p-4 border rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={board.thumbnail}
                alt={`${board.title} 썸네일`}
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{board.title}</h3>
              <p className="text-gray-700">{board.content}</p>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">인기 게시글</h2>
          {boards.slice(5, 11).map((board) => (
            <div
              key={board.id}
              className="mb-4 p-4 border rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={board.thumbnail}
                alt={`${board.title} 썸네일`}
                className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{board.title}</h3>
              <p className="text-gray-700">{board.content}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-8 mb-4">인기 태그</h2>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2 mb-2 cursor-pointer"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
