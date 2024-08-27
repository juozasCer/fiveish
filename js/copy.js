function copyToClipboard() {
  var copyText = document.getElementById("ca_txt").innerText;
  var textArea = document.createElement("textarea");
  textArea.value = copyText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Copied to clipboard: " + copyText);
}
