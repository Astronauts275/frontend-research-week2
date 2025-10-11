import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const { data, error, isLoading, refetch } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    },
  });

  if (isLoading) return <p>⏳ Đang tải dữ liệu...</p>;
  if (error) return <p>❌ Có lỗi xảy ra!</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 Danh sách người dùng (TanStack Query)</h1>
      <button onClick={() => refetch()}>🔄 Tải lại</button>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            👤 {user.name} - 📧 {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
