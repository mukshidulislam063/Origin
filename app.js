document.getElementById("graphForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const xValues = document.getElementById("xValues").value.split(",").map(Number);
  const yValues = document.getElementById("yValues").value.split(",").map(Number);
  const graphType = document.getElementById("graphType").value;
  const graphColor = document.getElementById("graphColor").value;

  // Save to localStorage
  localStorage.setItem("xValues", JSON.stringify(xValues));
  localStorage.setItem("yValues", JSON.stringify(yValues));
  localStorage.setItem("graphType", graphType);
  localStorage.setItem("graphColor", graphColor);

  // Redirect
  window.location.href = "graph.html";
});