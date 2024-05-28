export default function PostCard({ post }) {
    return (
      <div className="border p-4 rounded-lg shadow-sm mb-4"> {/* 카드 스타일 적용 */}
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" /> {/* 게시물 이미지 표시 */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2> {/* 게시물 제목 표시 */}
          <p className="text-gray-600">{post.excerpt}</p> {/* 게시물 요약 표시 */}
          <p className="text-gray-500 mt-2">작성자: {post.author}</p> {/* 작성자 정보 표시 */}
          <div className="mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-sm bg-gray-200 rounded-full px-2 py-1 mr-2"> {/* 태그 리스트 표시 */}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  