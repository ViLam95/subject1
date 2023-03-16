// S = 1/2 + 2/3 + 3/4 + .... + 2n/(2n+1);
// => công thức tổng quát làe : tử / ( tử + 1 );
// nhập thông tin từ bàn phím
let soNguyen = +prompt("Mời bạn nhập số nguyên n: ");
let total = 0
//tính toán
for (let i = 1; i<= 2*soNguyen; i++){
    total += i/(i+1);
}
//hiển thị kết quả:
    document.write("Kết quả của bài toán là "+ total);