import PostCard from './PostCard'; // PostCard 컴포넌트

// 임시 게시물 데이터 더미
const posts = [
  {
    id: 1,
    title: '1번 포스트',
    excerpt: '1번 포스트 내용',
    author: 'User1',
    tags: ['Tag1', 'Tag2'],
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: '2번 포스트',
    excerpt: '2번 포스트 내용',
    author: 'User2',
    tags: ['Tag3', 'Tag4'],
    image: 'https://via.placeholder.com/300',
  },
];

// PostList 컴포넌트
export default function PostList() {
  return (
    <div className="grid grid-cols-1 gap-4"> {/* 게시물 리스트를 그리드 레이아웃으로 표시함 */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />  /* 각 게시물을 PostCard 컴포넌트로 렌더링함 */
      ))}
    </div>
  );
}
