//! 1-Kullanıcıdan aldığı iki sayını toplamını bulan program */
let x = +prompt("x: ");
let y = +prompt("y: ");
console.log("Girilen sayilarin toplami = ", x+y);

//! 2-Kullanıcıdan aldığı yaş bilgisini gün sayısına dönüştüren program (1 yıl 365 gün)

let age = +prompt("Yasinizi giriniz: ");
console.log("Toplam ", age*365," gün yasamissiniz.");

//! 3-İki futcol takımınız var.Her bir takımını maç sonucunu 0-10 arasında bir değer olarak alıp iki takımdan 1.nin ikinciyi yenip yenmediğini true/ false olarak dönen program

let firstTeamGoalAmount = Math.trunc(Math.random()*10);
let secondTeamGoalAmount = Math.trunc(Math.random()*10);

console.log(firstTeamGoalAmount);
console.log(secondTeamGoalAmount);

console.log(firstTeamGoalAmount > secondTeamGoalAmount);


//! 4- İki değeri kullanıcıdan alıp kıyaslama yapı sonucu true false olarak dönen program

let a = +prompt("Bir sayi giriniz: ");
let b = +prompt("Ikinci bir sayi daha giriniz: ");

console.log("Ilk girdiginiz deger ikinciden büyük mü?", a > b);

