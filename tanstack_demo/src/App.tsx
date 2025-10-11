import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserList } from "./components/UserList";
import { AddUserForm } from "./components/AddUserForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>React Query Demo</h1>
        <AddUserForm />
        <UserList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
