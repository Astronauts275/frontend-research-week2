import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct, updateProduct } from "../api/productApi";
import { useProductStore } from "../store/productStore";

export function ProductForm() {
  const queryClient = useQueryClient();
  const { selectedProduct, setSelectedProduct } = useProductStore();

  const [formData, setFormData] = useState({ name: "", price: 0, description: "" });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
    } else {
      setFormData({ name: "", price: 0, description: "" });
    }
  }, [selectedProduct]);

  const addMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setFormData({ name: "", price: 0, description: "" });
      alert("✅ Thêm sản phẩm thành công!");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setSelectedProduct(null);
      alert("✅ Cập nhật sản phẩm thành công!");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct) {
      updateMutation.mutate({ ...formData, id: selectedProduct.id });
    } else {
      addMutation.mutate(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-6 rounded mb-4 bg-white shadow-sm">
      <h2 className="font-bold text-lg mb-4">
        {selectedProduct ? "✏️ Sửa sản phẩm" : "➕ Thêm sản phẩm mới"}
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* 🟦 Section 1: Thông tin cơ bản */}
        <div className="flex-1 space-y-3">
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 w-full rounded"
            required
          />

          <input
            type="number"
            placeholder="Giá"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        {/* 🟩 Section 2: Mô tả + hành động */}
        <div className="flex-1 space-y-3">
          <textarea
            placeholder="Mô tả sản phẩm"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="border p-2 w-full h-24 rounded"
            required
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              {selectedProduct ? "💾 Lưu thay đổi" : "➕ Thêm mới"}
            </button>

            {selectedProduct && (
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                onClick={() => setSelectedProduct(null)}
              >
                ❌ Hủy
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
