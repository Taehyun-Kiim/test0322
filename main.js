import * as d3 from "d3";

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 2000)
  .attr("height", 500);

const data = [
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
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.quantity * 10)
  .attr("cy", 200)
  .attr("r", (d) => d.quantity)
  .attr("fill", (d) => d.color)
  .attr(text, (d) => d.price);
