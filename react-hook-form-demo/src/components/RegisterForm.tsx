import { useForm } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  password: string;
}

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dữ liệu người dùng:", data);
    alert("Đăng ký thành công!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Form Đăng Ký</h2>

      <label>Tên đăng nhập</label>
      <input
        {...register("username", { required: "Vui lòng nhập tên đăng nhập" })}
        placeholder="Nhập tên..."
      />
      {errors.username && (
        <p style={{ color: "red" }}>{errors.username.message}</p>
      )}

      <label>Email</label>
      <input
        {...register("email", {
          required: "Vui lòng nhập email",
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: "Email không hợp lệ",
          },
        })}
        placeholder="abc@gmail.com"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <label>Mật khẩu</label>
      <input
        type="password"
        {...register("password", {
          required: "Vui lòng nhập mật khẩu",
          minLength: {
            value: 6,
            message: "Mật khẩu ít nhất 6 ký tự",
          },
        })}
        placeholder="••••••"
      />
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}

      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Đăng ký
      </button>
    </form>
  );
}
