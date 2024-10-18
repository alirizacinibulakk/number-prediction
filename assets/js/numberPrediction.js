function sayiTahminOyunu() {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    let rightOfReply = 5;

    for (let i = 0; i < rightOfReply; i++) {
        let prediction = Number(prompt("1 ile 20 arasında bir sayı tahmin edin:"));
        if(prediction < 1 || prediction > 20) {
            console.log("Lütfen 1 ile 20 arasında bir sayı girin.");
            i--;
        }
        if(prediction === randomNumber) {
            console.log("Tebrikler! Doğru tahmin ettiniz.");
        }else if(prediction > randomNumber) {
            console.log("Daha küçük bir sayı deneyin.");
        }else if(prediction < randomNumber){
            console.log("Daha büyük bir sayı deneyin.");
        }
        console.log(`Kalan cevap hakkı: ${rightOfReply - (i + 1)}`);
        if(i === rightOfReply) {
            console.log("Cevap hakkınız bitti. Doğru sayı: " + randomNumber);
        }
    }
}

sayiTahminOyunu();
