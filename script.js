const shareButton = document.querySelector("#share-button")

shareButton.addEventListener("click", () => {
  shareButton.classList.toggle("active")
  document.querySelector("main").classList.toggle("active")
})
