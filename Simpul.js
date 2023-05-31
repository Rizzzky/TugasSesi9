class Simpul {
    constructor(xnim, xnama, xnilai) {
      this.nim = xnim;
      this.nama = xnama;
      this.nilai = xnilai;
      this.berikutnya = null;
    }
  
    infoData() {
      console.log("NIM : " + this.nim);
      console.log("NAMA : " + this.nama);
      console.log("NILAI : " + this.nilai);
      console.log("Pointer Next " + this.berikutnya);
      console.log("---------------------------------");
    }
  }
  
  // Contoh penggunaan
  const simpul1 = new Simpul("12345", "John Doe", 80);
  const simpul2 = new Simpul("67890", "Jane Smith", 90);
  
  simpul1.infoData();
  simpul2.infoData();