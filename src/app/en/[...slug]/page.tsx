import { notFound } from "next/navigation";

// Bắt mọi URL không tồn tại dưới /en để hiển thị trang 404 tiếng Anh (src/app/en/not-found.tsx)
export default function EnCatchAll() {
  notFound();
}
