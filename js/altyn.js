// JavaScript code
function saveAuthorization() {
    const authorizationText = document.getElementById("password").value;
    const file = new Blob([authorizationText], {type: "text/plain"});
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "authorization.txt";
    link.click();
}
  
function loadAuthorization() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "text/plain";
  input.onchange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      const authorizationText = event.target.result;
      document.getElementById("authorization-text").value = authorizationText;
      alert("Authorization loaded successfully!");
    };
  };
  input.click();
}
  