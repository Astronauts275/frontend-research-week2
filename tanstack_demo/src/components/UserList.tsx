import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/userApi";

export function UserList() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>⏳ Đang tải danh sách...</p>;
  if (error instanceof Error) return <p>❌ Lỗi: {error.message}</p>;

  const users = Array.isArray(data) ? data : [];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>👥 Danh sách người dùng</h2>
      <button onClick={() => refetch()}>🔁 Làm mới</button>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>📭 Chưa có người dùng nào.</p>
      )}
    </div>
  );
}
