import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Demo React + TypeScript</h1>

      <UserCard name="Nguyễn Văn A" age={22} isActive={true} />
      <UserCard name="Trần Thị B" age={20} isActive={false} />
    </div>
  );
}

export default App;
