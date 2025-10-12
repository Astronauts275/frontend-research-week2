export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

// Dữ liệu giả
let mockProducts: Product[] = [
  { id: 1, name: "Laptop", price: 1500, description: "Laptop hiệu năng cao" },
  { id: 2, name: "Tai nghe", price: 200, description: "Tai nghe không dây" },
  { id: 3, name: "Chuột máy tính", price: 100, description: "Chuột quang không dây" },
];

// Giả lập fetch API
export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 600); // Giả độ trễ
  });
}

export async function addProduct(newProduct: Omit<Product, "id">): Promise<Product> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product: Product = { id: Date.now(), ...newProduct };
      mockProducts.push(product);
      resolve(product);
    }, 500);
  });
}

export async function deleteProduct(id: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockProducts = mockProducts.filter((p) => p.id !== id);
      resolve(true);
    }, 400);
  });
}

export async function updateProduct(updated: Product): Promise<Product> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockProducts.findIndex((p) => p.id === updated.id);
      if (index !== -1) {
        mockProducts[index] = updated; 
      }
      resolve(updated);
    }, 500);
  });
}


