class LinkedList {
    constructor() {
      this.pertama = null;
      this.posisi = null;
      this.pendahulu = null;
    }
  
    isiData(nim, nama, nilai) {
      const ptrBaru = new Simpul(nim, nama, nilai);
      ptrBaru.berikutnya = this.pertama;
      this.pertama = ptrBaru;
    }
  
    Tampilkan() {
      console.log("Isi Linked List");
      let penunjuk = this.pertama;
      while (penunjuk !== null) {
        penunjuk.infoData();
        console.log(penunjuk.berikutnya);
        penunjuk = penunjuk.berikutnya;
      }
    }
  
    findData(x) {
      this.posisi = this.pertama;
      this.pendahulu = null;
      let ditemukan = false;
      while (this.posisi !== null) {
        const nama = this.posisi.nama;
        if (nama.localeCompare(x) === 0) {
          ditemukan = true;
          break;
        }
        this.pendahulu = this.posisi;
        this.posisi = this.posisi.berikutnya;
      }
      return ditemukan;
    }
  
    hapusData(x) {
      this.pendahulu = null;
      this.posisi = null;
      const ditemukan = this.findData(x);
      if (!ditemukan) {
        console.log("Data yang akan dihapus tidak ditemukan");
        return false;
      }
      if (this.pendahulu === null) {
        this.pertama = this.pertama.berikutnya;
      } else {
        this.pendahulu.berikutnya = this.posisi.berikutnya;
      }
      return true;
    }
  }
  
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
  const linkedList = new LinkedList();
  linkedList.isiData("12345", "John Doe", 80);
  linkedList.isiData("67890", "Jane Smith", 90);
  
  linkedList.Tampilkan();
  linkedList.hapusData("John Doe");
  linkedList.Tampilkan();
  