////////////// Bài 01;
/*
function SNT(n) {
    let flag = true;
    if (n < 2) flag = false;
    for (let i = 2; i < n - 1; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true) return 1;
    else return 0;
}
//////////////
let inPut = prompt(`nhap vào 1 dãy số cách nhau bởi dấu phẩy`).split(`,`);
for (let k = 0; k < inPut.length; k++) {
    inPut[k] = Number(inPut[k]);
}
console.log(`vay mang vừa nhập vào là: ` + inPut);
let copy = inPut;
copy.sort(function (a, b) { return a - b });
console.log(`mang sau khi sắp xếp tăng dần là:`);

console.log(...copy);
console.log(`vay số lớn nhất thứ 2 trong dãy là: ` + copy[inPut.length - 2] + `\nvậy số bé nhất thứ 2 trong dãy là: ` + copy[1]);
console.log(`vi trí các số nguyên tố có trong dãy là: `);
// ///////////
let flag = true;
let dem = 0;
for (i = 0; i < inPut.length; i++) {
    if (SNT(inPut[i])) {
        console.log(`vay ${inPut[i]} là số nguyên tố ở vị trí thứ ${i}`);
        dem++;
    }
}
if (dem == 0) console.log(`Not Found`);

if (inPut.length % 2 != 0) {
    console.log(`day là dãy lẻ : `);
    console.log(` vậy phần tử trung vị của dãy là: ` + copy[Math.floor(copy.length / 2)]);
}
else {
    console.log(` dãy là dãy chăn: `);
    console.log(` vậy phần tử trung vị của dãy là: ` + (copy[Math.floor((copy.length - 1) / 2)] + copy[Math.ceil((copy.length - 1) / 2)]) / 2);
}
//////////////
console.log(` các cặp số có tổng == 5 là : `);
for (i = 0; i < inPut.length - 1; i++) {
    for (j = i+1    ; j < inPut.length; j++) {
        if ((inPut[i] + inPut[j]) == 5){
            console.log(`(${inPut[i]},${inPut[j]})`);
            
        } 
    }
}
*/
////////////// Bài 2:
// let ip = prompt(` nhập vào các chuỗi cách nhau bởi dấu , nhé: `).split(`,`);
// console.log(ip);
// for (let i = 0; i < ip.length; i++) {
//     let tach = ip[i].split(``);
//     for (let j = 0; j < tach.length; j++) {
//         if(tach[j] === )
//     }
// }

// ///////////// bài 03:
// let hang = prompt(` nhap vao so hang cua ma tran `);
// let cot = prompt(` nhap vao so cot ma tran: `);
// console.log(`vay ma tran a[${hang}][${cot}] co dang: `);





// /////////
// function Create2DArray(rows) {
//     var arr = [];

//     for (var i = 0; i < rows; i++) {
//         arr[i] = [];
//     }

//     return arr;
// }
// ////////////////////
// var arr = Create2DArray(hang);
// for (let i = 0; i < hang; i++) {
//     for (let j = 0; j < cot; j++) {
//         do {
//             arr[i][j] = Number(prompt(`a[${i}][${j}] = `));
//         }
//         while (arr[i][j] !== 1.0*(arr[i][j]) );
//     }
// }
// console.log(`mang vua nhap vao la: `);

// console.log(arr);
// console.log(`tong tung hang cua ma tran la: `);
// let tongHangMatrix = 0;
// for (i = 0; i < hang; i++) {
//     tongHangMatrix = 0;
//     for (j = 0; j < cot; j++) {
//         tongHangMatrix += arr[i][j];
//     }
//     console.log(`tong hang ${i + 1} la: ` + tongHangMatrix);

// }
// ////////// tinh tong tung cot cua matran:
// let tongCotMatrix = 0;
// for (i = 0; i < hang; i++) {
//     tongCotMatrix = 0;
//     for (j = 0; j < cot; j++) {
//         tongCotMatrix += arr[j][i];
//     }
//     console.log(`tong cot ${i + 1} =  ` + tongCotMatrix);
// }
// //// tính tong 2 duong cheo cua ma tran vuong
// if (hang === cot) {
//     let tongDuongCheoChinh = 0;
//     for (i = 0; i < hang; i++) {
//         for (j = 0; j < cot; j++) {
//             if (i === j) {
//                 tongDuongCheoChinh += arr[i][j];
//             }
//         }
//     }
//     console.log(`tong duong cheo chinh cua ma tran vuong la: ` + tongDuongCheoChinh);
//     ///////////
//     let tongDuongCheoPhu = 0;
//     for (i = 0; i < hang; i++) {
//         for (j = 0; j < cot; j++) {
//             if (j === (cot - 1 - i)) {
//                 tongDuongCheoPhu += arr[i][j];
//             }
//         }
//     }
//     console.log(`tong duong cheo phu cua ma tran vuong la: ` + tongDuongCheoPhu);

// }
// //////// tim so min/max trong matran.
// let min = arr[0][0];
// let max = arr[0][0];
// for (i = 0; i < hang; i++) {
//     for (j = 0; j < cot; j++) {
//         if (min > arr[i][j]) min = arr[i][j];
//         if (max < arr[i][j]) max = arr[i][j];
//     }
// }
// console.log(`min Matrix = ` + min);
// console.log(`max Matrix = ` + max);

// ///////////
// let am = 0;
// let duong = 0;
// for(i=0;i<hang;i++){
//     for(j=0;j<cot;j++){
//         if(arr[i][j]< 0){
//             am += arr[i][i];
//         }
//         else duong += arr[i][j];
//     }
// }
// console.log(`vay tong so am trong Matrix la: `+ am);
// console.log(`vay tong so duong trong Matrix la:`+ duong);


