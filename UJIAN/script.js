// --- DEKLARASI ELEMEN & INISIALISASI ---
// Elemen-elemen utama
const form = document.getElementById('contactForm');
const alertBox = document.getElementById('successAlert'); // Fixed Top Alert Banner
const btnYes = document.getElementById('btnYesConfirm'); // Tombol YES di Modal
const btnNo = document.getElementById('btnNoConfirm'); // Tombol NO di Modal (Opsional, tapi baik untuk ada)

// Inisialisasi Modal Konfirmasi (ID Modal yang benar)
const confirmModalElement = document.getElementById('confirmationModal');
// Pastikan elemen ada dan inisialisasi instance Bootstrap Modal
const confirmationModal = confirmModalElement ? new bootstrap.Modal(confirmModalElement) : null;


// --- FUNGSI UTILITY ---
// Fungsi untuk mengumpulkan dan mengisi data ke Modal
function populateModal() {
    // Ambil nilai dari input form (Mengacu pada ID form)
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    const country = document.getElementById('countryInput').value;

    // Ambil nilai dari radio button Favorite Unit
    const favUnit = document.querySelector('input[name="favUnit"]:checked')?.value || 'N/A';
    
    // Ambil nilai dari checkbox Interests
    const interestsChecks = document.querySelectorAll('input[type="checkbox"]:checked');
    const interests = Array.from(interestsChecks).map(el => el.value).join(', ') || 'None';

    // Isi data ke dalam modal body
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalPhone').textContent = phone;
    document.getElementById('modalCountry').textContent = country;
    document.getElementById('modalUnit').textContent = favUnit; // Pastikan Anda memiliki span id="modalUnit" di modal HTML
    document.getElementById('modalInterests').textContent = interests; // Pastikan Anda memiliki span id="modalInterests"
}


// ----------------------------------------------------
// --- 1. Form Submit: Tampilkan Modal Konfirmasi ---
// ----------------------------------------------------
form?.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    // Isi data ke modal sebelum ditampilkan
    populateModal();

    // Tampilkan Modal Konfirmasi
    if (confirmationModal) {
        confirmationModal.show();
    }
    
    // Blok kode tumpang tindih lama (yang langsung memunculkan alert dan reset) DIHAPUS.
});


// ----------------------------------------------------
// --- 2. Klik YES di Modal: Tampilkan Alert & Reset ---
// ----------------------------------------------------
btnYes?.addEventListener("click", function () {
    // 1. Sembunyikan Modal
    if (confirmationModal) {
        confirmationModal.hide();
    }
    
    // 2. Tampilkan FIXED ALERT (Success Banner)
    alertBox.classList.remove('d-none');

    // 3. Reset form
    form.reset();

    // 4. Hilangkan pesan otomatis setelah 5 detik
    setTimeout(function() {
        alertBox.classList.add('d-none');
    }, 5000); 
});


// ----------------------------------------------------
// --- 3. Logika Lain-lain (Contoh: Dark Mode Toggle) ---
// ----------------------------------------------------
const toggleBtn = document.querySelectorAll(".toggleModeBtn");
if (toggleBtn.length > 0) {
    toggleBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            document.getElementById("nav")?.classList.toggle("dark");
            document.getElementById("footer")?.classList.toggle("dark");
        });
    });
}