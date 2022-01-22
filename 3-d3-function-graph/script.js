// Convention: https://bl.ocks.org/mbostock/3019563
const margin = { top: 10, right: 50, bottom: 50, left: 50 },
  width = 450 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const svg = d3.select("#root").attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define chart area
svg
  .append("clipPath")
  .attr("id", "chart-area")
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", width)
  .attr("height", height)

// Add Axes
const xMax = 4;
const yMax = 5;

let xScale = d3.scaleLinear([0, xMax], [0, width])
let yScale = d3.scaleLinear([0, yMax], [height, 0])

let xAxis = d3.axisBottom(xScale)
let yAxis = d3.axisLeft(yScale)
svg.append("g")
  .attr("transform", `translate(0,${height})`)
  .call(xAxis)
svg.append("g")
  .attr("transform", `translate(0,0)`)
  .call(yAxis)

// Axes label
svg.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "end")
  .attr("x", width / 2 + 5)
  .attr("y", height + 35)
  .text("x");

svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("y", -35)
  .attr("x", -height / 2)
  .attr("transform", "rotate(-90)")
  .html("y")

function f(x) {
  return x * 2 + 1;
}

function graphFunction() {
  pointNum = 500;

  const data = [];
  for (let x = 0; x <= pointNum; x++) {
    y = f(x);
    data.push([x, y])
  }
  return data;
}

// Add function graph
let line = d3.line()
  .x(d => xScale(d[0]))
  .y(d => yScale(d[1]))
svg.append("path")
  .datum(graphFunction())
  .attr("clip-path", "url(#chart-area)")
  .attr("fill", "none")
  .attr("stroke", "teal")
  .attr("stroke-width", 2)
  .attr("d", line); 