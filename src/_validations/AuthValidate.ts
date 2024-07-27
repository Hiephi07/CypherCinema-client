import * as z from "zod";
export const loginSchema = z.object({
  email: z.string().nonempty("Không được bỏ trống").email("Email không hợp lệ"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ thường, 1 chữ hoa, 1 chữ số và 1 ký tự đặc biệt"
    )
    .min(8),
});

export const registerSchema = z
  .object({
    firstName: z.string().nonempty("Họ là bắt buộc"),
    lastName: z.string().nonempty("Tên là bắt buộc"),
    gender: z.number(),

    email: z.string().email("Email không hợp lệ"),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ thường, 1 chữ hoa, 1 chữ số và 1 ký tự đặc biệt"
      )
      .min(8),
    confirmPassword: z.string().nonempty("Xác nhận mật khẩu là bắt buộc"),
    phone: z.string().regex(/^\d{10}$/, "Số điện thoại phải có 10 chữ số"),
    day: z.number().min(1).max(31, "Ngày sinh không hợp lệ"),
    month: z.number().min(1).max(12, "Tháng sinh không hợp lệ"),
    year: z
      .number()
      .min(1900)
      .max(new Date().getFullYear(), "Năm sinh không hợp lệ"),
    city: z.string().nonempty("Tỉnh/Thành phố là bắt buộc"),
    checkbox: z.literal(true),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu và xác nhận mật khẩu không khớp",
    path: ["confirmPassword"],
  });
