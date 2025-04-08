const danh_sach_thanh_vien = ["Lộc", "Hào", "Khang"];

document.getElementById("actionButton").addEventListener("click", function()
{
    const chuoi_ten = danh_sach_thanh_vien.map(ten=> "  - " + ten).join("\n");
    alert("Các thành viên trong nhóm gồm:\n" + chuoi_ten);
}
);