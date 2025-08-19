// Dark/Light mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Add another dataset
document.getElementById("addTable").addEventListener("click", () => {
  const container = document.getElementById("tablesContainer");
  const newTable = document.querySelector(".data-table").cloneNode(true);
  newTable.querySelectorAll("input").forEach(inp => inp.value = "");
  newTable.querySelectorAll(".xData, .yData").forEach(td => td.textContent = "Paste up to 2000 values here (space or enter separated)");
  container.appendChild(newTable);
});

// Submit
document.getElementById("submitBtn").addEventListener("click", () => {
  const datasets = [];
  document.querySelectorAll(".data-table").forEach(table => {
    const xLabel = table.querySelector(".xLabel").value || "X-axis";
    const yLabel = table.querySelector(".yLabel").value || "Y-axis";
    const xData = table.querySelector(".xData").innerText.trim().split(/\s+/).map(Number);
    const yData = table.querySelector(".yData").innerText.trim().split(/\s+/).map(Number);
    datasets.push({xLabel, yLabel, xData, yData});
  });

  const graphType = document.getElementById("graphType").value;
  const showPoints = document.getElementById("showPoints").value;
  const barType = document.getElementById("barType").value;
  const dimension = document.getElementById("dimension").value;
  const graphColor = document.getElementById("graphColor").value;
  const graphBg = document.getElementById("graphBg").value;
  const graphBgColor = document.getElementById("graphBgColor").value;

  localStorage.setItem("datasets", JSON.stringify(datasets));
  localStorage.setItem("graphType", graphType);
  localStorage.setItem("showPoints", showPoints);
  localStorage.setItem("barType", barType);
  localStorage.setItem("dimension", dimension);
  localStorage.setItem("graphColor", graphColor);
  localStorage.setItem("graphBg", graphBg);
  localStorage.setItem("graphBgColor", graphBgColor);

  window.location.href = "graph.html";
});
