# Kế hoạch thực hiện Next.js Todo App (Atoms & Pages)

## Mục tiêu
Xây dựng một ứng dụng Todo App đơn giản với các tính năng Create, Read, Update, Delete (CRUD) và Search bằng Next.js (App Router). Ứng dụng áp dụng thiết kế theo cấu trúc Atoms và Pages, sử dụng Vanilla CSS. Quá trình phát triển sẽ đi theo hướng TDD (Test-Driven Development) và có sự tham gia của nhiều subagents để thực hiện song song.

## Các bước thực hiện

### 1. Khởi tạo & Cấu hình cơ sở (Thực hiện bởi Agent chính)
- Khởi tạo dự án Next.js tại thư mục `frontend` với App Router, TypeScript, và KHÔNG dùng TailwindCSS (để sử dụng Vanilla CSS theo yêu cầu).
- Cài đặt Jest và React Testing Library để phục vụ TDD.
- Tạo cấu trúc thư mục `src/components/atoms`, `src/components/pages`.

### 2. Viết Test (Fail) - Bắt đầu quy trình TDD
Sử dụng nhiều Subagents chạy song song để thiết lập các test case đang fail.
- **Subagent 1 (Atoms Team):** Viết unit tests cho các component nhỏ lẻ (`Input`, `Button`, `TodoItem`).
- **Subagent 2 (Features Team):** Viết unit tests và integration tests cho các tính năng CRUD, Search và giao diện `HomePage`.

### 3. Triển khai mã nguồn (Make it Pass) - Song song
- **Subagent 1 (Atoms Team):** Implement HTML/CSS (Vanilla) và logic cho `Input`, `Button`, `TodoItem` để pass test.
- **Subagent 2 (Features Team):** Implement state management (dùng `useState` hoặc localStorage) cho danh sách Todo, bộ lặp CRUD, tìm kiếm, kết nối các Atoms vào `HomePage` để pass test.

### 4. Tích hợp & Kiểm tra tổng thể (Agent chính)
- Lắp ráp các Pages vào hệ thống App Router (tại `src/app/page.tsx`).
- Chạy toàn bộ test suite để đảm bảo hệ thống vận hành đúng.
- Chạy Dev server và verify giao diện UI/UX (Modern, Dynamic Design).
