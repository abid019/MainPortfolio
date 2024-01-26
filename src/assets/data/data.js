import html from "../../assets/img/skills/html.png";
import css from "../../assets/img/skills/css.png";
import bootstrap from "../../assets/img/skills/bootstrap.png";
import cpp from "../../assets/img/skills/cpp.png";
import express from "../../assets/img/skills/express.png";
import git from "../../assets/img/skills/git.png";
import js from "../../assets/img/skills/js.png";
import ml from "../../assets/img/skills/ml.png";
import mongodb from "../../assets/img/skills/mongodb.png";
import mysql from "../../assets/img/skills/mysql.png";
import node from "../../assets/img/skills/node.png";
import postman from "../../assets/img/skills/postman.png";
import python from "../../assets/img/skills/python.png";
import react from "../../assets/img/skills/react.png";

export const tech = [
  {
    name: "React.js",
    img: react,
    percentage: "80",
    flag: true,
    end: "frontend",
  },
  { name: "HTML", img: html, percentage: "90", flag: true, end: "frontend" },
  { name: "CSS", img: css, percentage: "80", flag: true, end: "frontend" },
  {
    name: "JavaScript",
    img: js,
    percentage: "80",
    flag: true,
    end: "frontend",
  },
  {
    name: "Bootstrap",
    img: bootstrap,
    percentage: "70",
    flag: true,
    end: "frontend",
  },
  { name: "Node.js", img: node, percentage: "70", flag: true, end: "backend" },
  {
    name: "Express.js",
    img: express,
    percentage: "80",
    flag: true,
    end: "backend",
  },
  
  { name: "Python", img: python, percentage: "60", flag: true, end: "backend" },
  { name: "C++", img: cpp, percentage: "70", flag: true, end: "backend" },
  {
    name: "MongoDB",
    img: mongodb,
    percentage: "70",
    flag: true,
    end: "backend",
  },
  { name: "MySQL", img: mysql, percentage: "70", flag: true, end: "backend" },
  {
    name: "Postman",
    img: postman,
    percentage: "60",
    flag: true,
    end: "backend",
  },
  { name: "GitHub", img: git, percentage: "70", flag: true, end: "backend" },
  
  { name: "Machine Learning", img: ml, percentage: "50", flag: true, end: "" },
  {
    name: "Data Structures",
    img: "",
    percentage: "90",
    flag: false,
    end: "problemsolver",
  },
  {
    name: "Algorithms",
    img: "",
    percentage: "70",
    flag: false,
    end: "problemsolver",
  },
  {
    name: "Problem-Solving",
    img: "",
    percentage: "80",
    flag: false,
    end: "problemsolver",
  },
  {
    name: "LeetCode",
    img: "",
    percentage: 350,
    flag: false,
    end: "problemsolver",
  },
];

export const row1 = [];
export const row2 = [];
export const row3 = [];
for (let i = 0; i < 6; ++i) {
  row1.push(tech[i]);
}
for (let i = 6; i < 12; ++i) {
  row2.push(tech[i]);
}
for (let i = 12; i < 18; ++i) {
  row3.push(tech[i]);
}
