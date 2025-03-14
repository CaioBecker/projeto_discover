function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a image,
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imaem light
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute("alt","Foto de Maike Brito sorrindo, usando óculos escuro e camisa preta e barba")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt","Foto de Maike Brito sorrindo, usando óculos e camisa preta e barba")
  }
}
