//bài 1
// function sum(e,f){
//     return e+f;
// }
// let a = parseInt(prompt('nhập số a'));
// let b = parseInt(prompt('nhập số b'));
// let c = sum(a,b);
// console.log(`sum :${c}`);

//bài 2
// function sum(arr){
//     var sum1 = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 == 1) {
//             sum1 = sum1 + arr[i];
//         }
//     }
//     return sum1;
// }

// let array = [1,2,3,4,5,6];
// let c = sum(array);
// console.log(`sum: ${c}`);

//bài 3
// function sosanh(d,c) {
//     if(d>c){
//         alert(`${d} lớn hơn ${c}`);
//         return;
//     }else if (d<c) {
//         var a = d+c;
//         alert(`sum = ${a}`);
//         return;
//     }
// }
// let a = parseInt(prompt('nhập số a'));
// let b = parseInt(prompt('nhập số b'));
// sosanh(a,b)

//bài 4
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();
// alert(result)

//bài 5
//từ feet sang meters
// function footToMeter(foot){
//     var meter = 0.305*foot;
//     return meter;
// }
// // từ meters sang feet
// function meterToFoot(meter){
//     var foot = 3.279*meter;
//     return foot;
// }
// let meter1 = Number(prompt('nhập giá trị của meter'));
// let c = meterToFoot(meter1);
// alert(`${meter1}m = ${c}f`);
// let feet1 = Number(prompt('nhập giá trị của feet'));
// let d = footToMeter(feet1);
// alert(`${feet1}f = ${d}m`);

// bài 6
// function songuyento(b){
//     let c = 0;
//     if(b<2){
//         // alert(`${b} không phải số nguyên tố`); // dòng này của ý a
//         return;
//     }else if(b==2){
//         // alert('2 là số nguyên tố'); // dòng này của ý a;
//         return;
//     }
//     for (let i = 2 ;i < b; i++){
//         if (b % i == 0){
//             c=1;
//             break;
//         }else{
//             c=0;
//         }
//     }
//     return c;
// }

// // ý a
// let d = Number(prompt('nhập số'));
// let e = songuyento(d);
// if (e == 0){
//     alert(`${d} là số nguyên tố`)
// }else if (e == 1){
//     alert(`${d} ko phải số nguyên tố`)
// }


// ý b
// let a = Number(prompt('nhập số giới hạn'));
// var g = [];
// for(let i = 0; i < a; i++){
//     let h = songuyento(i)
//     if(i == 2){
//         g.push(i);
//     }else if(h == 0){
//         g.push(i);
//     }
// }
// console.log(g);