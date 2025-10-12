import { useProductStore } from "../store/productStore";

export function ProductDetail() {
  const { selectedProduct, setSelectedProduct } = useProductStore();

  if (!selectedProduct)
    return <p className="italic text-gray-500">🛈 Chưa chọn sản phẩm nào.</p>;

  return (
    <div className="border p-3 rounded bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">📦 Chi tiết sản phẩm</h3>
      <p><strong>Tên:</strong> {selectedProduct.name}</p>
      <p><strong>Giá:</strong> ${selectedProduct.price}</p>
      {selectedProduct.description && (
        <p><strong>Mô tả:</strong> {selectedProduct.description}</p>
      )}

      <button
        onClick={() => setSelectedProduct(null)}
        className="mt-2 bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
      >
        Đóng
      </button>
    </div>
  );
}
