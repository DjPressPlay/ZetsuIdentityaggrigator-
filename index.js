const view = document.getElementById("view");
const url = document.getElementById("url");

document.getElementById("go").onclick = () => {
  let val = url.value.startsWith("http") ? url.value : "https://" + url.value;
  view.loadURL(val);
};

document.getElementById("back").onclick = () => view.goBack();
document.getElementById("forward").onclick = () => view.goForward();

view.addEventListener("did-navigate", (e) => {
  url.value = e.url;
});