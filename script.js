// const danh_sach_thanh_vien = ["Lộc", "Hào", "Khang"];

// document.getElementById("actionButton").addEventListener("click", function()
// {
//     const chuoi_ten = danh_sach_thanh_vien.map(ten=> "  - " + ten).join("\n");
//     alert("Các thành viên trong nhóm gồm:\n" + chuoi_ten);
// }
// );


document.addEventListener("DOMContentLoaded", function actionButton()
    {
        document.getElementById("hinh_anh_Tom").innerHTML = `
            <img src="Tom-image.jpg" alt = "Hình ảnh của Tom" width = "300"">
        `
        document.getElementById("hinh_anh_Tom").style.display = 'block';

        document.getElementById("hinh_anh_Jerry").innerHTML = `
            <img src="Jerry-image.jpg" alt = "Hình ảnh của Tom" width = "300"">
        `
        document.getElementById("hinh_anh_Jerry").style.display = 'block';

        document.getElementById("hinh_anh_Spike").innerHTML = `
            <img src="Spike-image.jpg" alt = "Hình ảnh của Tom" width = "300"">
        `
        document.getElementById("hinh_anh_Spike").style.display = 'block';
    }
);