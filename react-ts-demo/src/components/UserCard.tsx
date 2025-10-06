type UserCardProps = {
  name: string;   
  age: number;    
  isActive: boolean; 
};

export default function UserCard({ name, age, isActive }: UserCardProps) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>{name} ({age} tuổi)</h3>
      <p>Trạng thái: {isActive ? "Đang hoạt động ✅" : "Ngưng hoạt động ❌"}</p>
    </div>
  );
}
