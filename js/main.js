
// Fungsi untuk mengambil nilai

function getValue(){
    nilai1 = document.getElementsByName('angka1')[0].value;
    nilai2 = document.getElementsByName('angka2')[0].value;
    nilai1 = parseInt(nilai1);
    nilai2 = parseInt(nilai2);
  }
  
  // Operator Penambahan
  function tambah() {
    getValue();
    hasil = nilai1 + nilai2;
    document.getElementsByName('hasil')[0].value = hasil;
  }
  
  // Operator Pengurangan
  function kurang() {
    getValue();
    hasil = nilai1 - nilai2;
    document.getElementsByName('hasil')[0].value = hasil;
  }
  
  // Operator Perkalian
  function kali() {
    getValue();
    hasil = nilai1 * nilai2;
    document.getElementsByName('hasil')[0].value = hasil;
  }
  
  // Operator Pembagian
  function bagi() {
    getValue();
    hasil = nilai1 / nilai2;
    document.getElementsByName('hasil')[0].value = hasil;
  }
  
  // Operator Modulus
  function modulus() {
    getValue();
    hasil = nilai1 % nilai2;
    document.getElementsByName('hasil')[0].value = hasil;
  }