import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../api/productApi";

export function AddProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();

  // Mutation để thêm sản phẩm
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      alert("✅ Thêm sản phẩm thành công!");
      setName("");
      setPrice("");
      setDescription("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return alert("Vui lòng nhập đầy đủ thông tin!");
    mutation.mutate({ name, price: Number(price), description });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 rounded mb-4">
      <h3 className="text-lg font-semibold mb-2">➕ Thêm sản phẩm mới</h3>

      <input
        type="text"
        placeholder="Tên sản phẩm"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />

      <input
        type="number"
        placeholder="Giá"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />

      <textarea
        placeholder="Mô tả"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />

      <button
        type="submit"
        disabled={mutation.isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {mutation.isPending ? "Đang thêm..." : "Thêm sản phẩm"}
      </button>
    </form>
  );
}
