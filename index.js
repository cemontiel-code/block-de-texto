function save() {
  try {
    let str = document.getElementById("texty").innerText; //recolecto el etxto escrito
    // str = toUTF8Array(str);
    if (str == "") {
      window.alert("el documento esta vacio");
      return;
    } else {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          window - alert("archivo guardado exitosemente");
          document.getElementById("texty").innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", "guardar.php?str=" + str, true);
      xhttp.send();
    }
  } catch (error) {
    console.log(error);
  }
}

function abrirTexto() {
  var archivoSubido = document.getElementById("readFile").files[0];

  var fr = new FileReader();
  fr.onload = function (FileLoadedEvent) {
    var FileContents = FileLoadedEvent.target.result;
    document.getElementById("texty").innerText = FileContents;
  };

  fr.readAsText(archivoSubido, "UTF-8");
}
