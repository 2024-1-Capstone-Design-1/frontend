const categories = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']; // 임시 카테고리 데이터

export default function CategoryList() {
  return (
    <div className="border p-4 rounded-lg shadow-sm"> {/* 카테고리 리스트 스타일 적용 */}
      <h2 className="text-xl font-bold mb-4">인기 Tags</h2> {/* 카테고리 제목 표시 */}
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2"> {/* 각 카테고리를 리스트 아이템으로 렌더링함 */}
            <span className="text-sm bg-gray-200 rounded-full px-2 py-1">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
