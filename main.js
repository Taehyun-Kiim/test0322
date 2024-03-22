import * as d3 from "d3";

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

const data1 = [
  { x: 30, y: 100 },
  { x: 70, y: 100 },
  { x: 110, y: 100 },
  { x: 150, y: 100 },
  { x: 190, y: 100 },
];

const data2 = [
  {
    fruit: "사과",
    quantity: 20,
    details: {
      color: "red",
      price: 1.2,
    },
  },
  {
    fruit: "바나나",
    quantity: 40,
    details: {
      color: "yellow",
      price: 0.8,
    },
  },
  {
    fruit: "체리",
    quantity: 60,
    details: {
      color: "red",
      price: 2.5,
    },
  },
  {
    fruit: "딸기",
    quantity: 80,
    details: {
      color: "red",
      price: 1.8,
    },
  },
  {
    fruit: "포도",
    quantity: 100,
    details: {
      color: "purple",
      price: 2.0,
    },
  },
];

const circles = svg
  .selectAll("circle")
  .data(data2)
  .enter()
  .append("circle")
  .attr("cx", (data1) => d.x)
  .attr("cy", (data1) => d.y)
  .attr("r", (d) => d.quantity)
  .attr(text, (d) => d.fruit)
  .attr("fill", (d) => d.color);
