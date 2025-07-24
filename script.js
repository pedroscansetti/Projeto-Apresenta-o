function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  //substituir a imagem
  const img = document.querySelector("#profile img")

  //se tiver light mode

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar light.jpg ")
  } else {
    //se tiver light mode manter imagem
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}
//html.classList.toggle("light") essa função ja tem todos os comandos acima.
