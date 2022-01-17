document.addEventListener("DOMContentLoaded", function () {

    const submitForm = document.getElementById("form");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // mengkonfirmasi apakah user ingin menyimpan data buku yang telah dimasukkan
        var conf_save = confirm("Apakah anda yakin ingin menyimpan data buku ini?");
        if (conf_save) {
            addBuku();
        } else {
            window.location('index.html');
        }
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan.");
});

document.addEventListener("ondataloaded", () => {
    refreshDataFromRak();
});