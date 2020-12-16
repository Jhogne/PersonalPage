import PythonIcon from "data/icons/python.png";
import JsIcon from "data/icons/js.png";
import JavaIcon from "data/icons/java.png";

const ProjectList = [
  {
    title: "Typer",
    source: "https://github.com/Jhogne/typer",
    language: "Java & Javascript",
    icon: JavaIcon,
    //keywords: "typer.jonashogne.se",
    description:
      "typer.jonashogne.se is a speed typing game created with Java Spring Boot and ReactJS. It allows multiple players to join a room together compete in who can finish typing the prompt faster. ",
  },
  {
    title: "Personal webpage",
    source: "https://github.com/Jhogne/PersonalPage",
    language: "Javascript",
    //keywords: 'React, AWS',
    icon: JsIcon,
    keywords: "",
    description:
      "I created this webpage as a portfolio for my projects, and as a playground to give me real world experience with web development. I built the front end with ReactJS, and it is hosted on AWS EC2 server.",
  },
  {
    title: "Spotify playlist creator",
    source: "https://github.com/Jhogne/Spotify-playlists",
    language: "Python",
    icon: PythonIcon,
    keywords: "",
    description:
      "I found myself lacking the functionality to easily create large playlists in Spotify, so I created a terminal tool to provide this. It uses the Spotify API to let the user create playlists of all songs created by a list of artists.",
  },
  {
    title: "Advent of Code",
    source: "https://github.com/Jhogne/aoc19",
    language: "Python",
    icon: PythonIcon,
    keywords: "",
    description:
      "In December of both 2019 and 2020 I participated in advent of code to improve my problem solving abilities as well as getting more familiar with Python.",
  },
];

export default ProjectList;
