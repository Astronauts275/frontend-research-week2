// Giả lập dữ liệu trong bộ nhớ (mock data)
let users = [
  { id: 1, name: "Nguyễn Văn A", email: "a@example.com" },
  { id: 2, name: "Trần Thị B", email: "b@example.com" },
];

export async function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...users]), 300);
  });
}

export async function addUser(user: { name: string; email: string }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = { id: Date.now(), ...user };
      users.push(newUser);
      resolve(newUser);
    }, 300);
  });
}
