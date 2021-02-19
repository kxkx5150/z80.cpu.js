const main = new CORE();
document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  var fileReader = new FileReader();
  fileReader.onload = function () {
    if (!this.result) return;
    main.setRom(this.result)
  };
  fileReader.readAsArrayBuffer(file);
});