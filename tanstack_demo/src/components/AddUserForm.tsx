import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/userApi";
import { useState } from "react";

export function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setName("");
      setEmail("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate({ name, email });
      }}
      style={{ marginTop: "20px" }}
    >
      <h3>➕ Thêm người dùng mới</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tên"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Đang thêm..." : "Thêm"}
      </button>
    </form>
  );
}
