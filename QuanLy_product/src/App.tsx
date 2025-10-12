import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductList } from "./components/ProductList";
import { ProductForm } from "./components/ProductForm";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Container tổng */}
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-200">
        {/* Header */}
        <header className="p-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-indigo-700 flex items-center gap-2 justify-center md:justify-start">
            🛍️ Quản lý sản phẩm
          </h1>
        </header>

        {/* Nội dung chính */}
        <main className="flex-1 px-8 pb-8 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 🟦 Form thêm/sửa sản phẩm */}
            <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <ProductForm />
            </section>

            {/* 🟩 Danh sách sản phẩm */}
            <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <ProductList />
            </section>
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}
