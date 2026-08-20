// Lấy màn hình máy tính
let display = document.getElementById("display");


// ========================================
// THÊM SỐ / PHÉP TÍNH
// ========================================

function append(value) {

    display.value += value;

}


// ========================================
// XÓA TOÀN BỘ
// ========================================

function clearDisplay() {

    display.value = "";

}


// ========================================
// XÓA KÝ TỰ CUỐI
// ========================================

function deleteLast() {

    display.value = display.value.slice(0, -1);

}


// ========================================
// TÍNH KẾT QUẢ
// ========================================

function calculate() {

    try {

        // Nếu không có gì thì không làm gì
        if (display.value === "") {
            return;
        }


        // Thực hiện phép tính
        display.value = eval(display.value);

    }

    catch {

        display.value = "Error";

    }

}