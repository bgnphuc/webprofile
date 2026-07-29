// Hàm thêm công việc

function addTask(){

    // lấy ô nhập 
    let input = document.getElementById("taskInput");

    //lấy nội dung 
    let text = input.value;

    // Không cho thêm nếu rổng 
    if(text ===""){

        alert("Bạn chưa nhập công việc!")
        return;
    }

    // Tạo thẻ li
    let li = document.createElement("li");

    // nội dùng công việc
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete">Xóa</button>
    `;

    // Thêm cào danh sách
    document.getElementById("taskList").appendChild(li);

    // Click vào chữ hoàn thành 
    li.querySelector("span").onclick = function(){

        this.classList.toggle("completed");

    }

    // Click nút xóa
    li.querySelector(".delete").onclick = function(){

        li.remove();

    }

    // Xóa ô nhập
    input.value="";
        
}