function kirimData() {
  const name = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const peminatan = document.querySelector("input[name=peminatan]:checked")?.value || "Belum dipilih";
  const alamat = document.getElementById("alamat").value;
  const kelas = document.getElementById("kelas").value;
  const tanggal = document.getElementById("tanggal").value || "-";


  const alertBox = document.getElementById("custom-alert");
  const alertContent = document.getElementById("alert-content");

  const message = `Data: Nama: ${name} | NIM: ${nim} | Peminatan: ${peminatan} | Alamat: ${alamat} | Kelas: ${kelas} | Tanggal: ${tanggal}`;
  
  alertContent.innerText = message;
  alertBox.style.display = "block";

  // Hilangkan auto-hide, supaya hanya bisa tutup manual
}

// Tambahkan event listener tombol tutup
document.getElementById("close-alert").addEventListener("click", () => {
  document.getElementById("custom-alert").style.display = "none";
});

