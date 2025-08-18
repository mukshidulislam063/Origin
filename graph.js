const xValues = JSON.parse(localStorage.getItem("xValues"));
const yValues = JSON.parse(localStorage.getItem("yValues"));
const graphType = localStorage.getItem("graphType");
const graphColor = localStorage.getItem("graphColor");

const graphDiv = document.getElementById("graph");

function drawGraph() {
  const trace = {
    x: xValues,
    y: yValues,
    type: graphType,
    mode: graphType === "scatter" || graphType === "line" ? "lines+markers" : undefined,
    marker: { color: graphColor },
    line: { color: graphColor }
  };

  const layout = {
    title: "Custom Graph",
    dragmode: "zoom", // zoom tool
  };

  Plotly.newPlot(graphDiv, [trace], layout, {
    displaylogo: false,
    modeBarButtonsToAdd: ["drawline","drawopenpath","drawrect","drawcircle","eraseshape"]
  });
}

function redrawGraph() {
  drawGraph();
}

function addAnnotation() {
  const text = prompt("Enter your comment:");
  if (text) {
    const update = {
      annotations: [{
        x: xValues[Math.floor(xValues.length/2)],
        y: yValues[Math.floor(yValues.length/2)],
        text: text,
        showarrow: true
      }]
    };
    Plotly.relayout(graphDiv, update);
  }
}

drawGraph();