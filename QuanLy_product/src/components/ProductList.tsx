import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProducts, deleteProduct } from "../api/productApi";
import type { Product } from "../api/productApi";
import { useProductStore } from "../store/productStore";


export function ProductList() {
  const queryClient = useQueryClient();
  const setSelectedProduct = useProductStore((state) => state.setSelectedProduct);

  // Fetch danh sách sản phẩm
  const { data: products, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Mutation để xóa sản phẩm
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  if (isLoading) return <p>⏳ Đang tải danh sách sản phẩm...</p>;
  if (error instanceof Error) return <p>❌ Lỗi: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">🛒 Danh sách sản phẩm</h2>
      <ul>
        {products?.map((product: Product) => (
          <li
            key={product.id}
            className="border p-2 mb-2 rounded cursor-pointer hover:bg-gray-100 flex justify-between"
          >
            <div onClick={() => setSelectedProduct(product)}>
              <strong>{product.name}</strong> - 💵 {product.price}$
              <br />
              <small>{product.description}</small>
            </div>
            <button
              onClick={() => deleteMutation.mutate(product.id)}
              className="text-red-500 hover:underline"
            >
              ❌ Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
