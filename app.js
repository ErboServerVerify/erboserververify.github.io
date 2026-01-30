const validCodes = [
  "ERBO-1234",
  "ERBO-5678",
  "ERBO-9999"
];

function verify() {
  const input = document.getElementById("code").value.trim();
  const msg = document.getElementById("msg");

  if (validCodes.includes(input)) {
    msg.style.color = "#00ffcc";
    msg.innerText = "認証成功！Discordに戻ってください。";
  } else {
    msg.style.color = "red";
    msg.innerText = "コードが無効です。";
  }
}
