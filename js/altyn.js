// JavaScript code
function saveAuthorization() {
    const authorizationText = document.getElementById("password").value;
    const file = new Blob([authorizationText], {type: "text/plain"});
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "authorization.txt";
    link.click();
    window.location.href = "https://altyn-bidai.github.io/login/";
  }
  
  