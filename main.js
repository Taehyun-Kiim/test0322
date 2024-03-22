import * as d3 from "d3";

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

const data = [
  { x: 30, y: 30, radius: 20 },
  { x: 70, y: 70, radius: 15 },
  { x: 110, y: 100, radius: 25 },
  { x: 150, y: 30, radius: 10 },
  { x: 190, y: 90, radius: 20 },
];

const circles = svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("r", (d) => d.radius)
  .attr("fill", "blue")
  .attr("stroke", "black");
