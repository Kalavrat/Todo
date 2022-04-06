export function createAppTitle(name) {
  const h1 = document.createElement("h1");
  h1.className = "h1";
  h1.textContent = name;
  return h1;
}
