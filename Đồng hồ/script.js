function updateClock() {

    // Lấy thời gian hiện tại
    let now = new Date();

    // Lấy giờ
    let hours = now.getHours();

    // Lấy phút
    let minutes = now.getMinutes();

    // Lấy giây
    let seconds = now.getSeconds();


    // Chuyển số thành chuỗi
    // và thêm số 0 nếu chỉ có 1 chữ số

    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    seconds = String(seconds).padStart(2, "0");


    // Hiển thị giờ
    document.getElementById("time").textContent =
        `${hours} : ${minutes} : ${seconds}`;
}


// Chạy hàm ngay khi mở website
updateClock();


// Cập nhật đồng hồ mỗi 1 giây
setInterval(updateClock, 1000);