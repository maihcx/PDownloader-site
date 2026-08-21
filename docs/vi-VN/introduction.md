# Chào mừng đến với PDownloader

PDownloader là trình quản lý tải xuống native dành cho Windows, được thiết kế cho tệp lớn, kết nối thiếu ổn định và các liên kết nội dung đa phương tiện lấy từ trình duyệt.

## PDownloader xử lý được gì?

- Chia tệp thông thường thành nhiều phân đoạn byte-range để tải song song.
- Tiếp tục và thử lại khi kết nối hoặc ứng dụng bị gián đoạn.
- Thu thập rồi ghép các phân mảnh của luồng HLS và DASH.
- Phân tích URL video và nội dung đa phương tiện bằng `yt-dlp`.
- Chuyển tác vụ từ trình duyệt sang ứng dụng thông qua tiện ích Chromium và Firefox chính thức.

## Các thành phần phối hợp với nhau

Ứng dụng desktop quản lý hàng đợi và cài đặt. `PDownloader.Core` cung cấp cầu nối cục bộ cho tiện ích trình duyệt, còn `PDownloader.Runner` quản lý cửa sổ tải xuống và download engine đang hoạt động.

> Dữ liệu trao đổi giữa tiện ích và ứng dụng chỉ đi qua máy tính cục bộ.

Bạn có thể tiếp tục với phần [Cài đặt](?doc=installation), hoặc mở [hướng dẫn tiện ích trình duyệt](?doc=browser-extension) nếu đã cài ứng dụng desktop.
