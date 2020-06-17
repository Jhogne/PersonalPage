import aoc from './aoc.jpg'

const projects = [
  {
    title: "Personal webpage",
    source: "https://github.com/Jhogne/PersonalPage",
    language: "Javascript",
    image: '',
    //keywords: 'React, AWS',
    keywords: '',
    description: "This is what you are looking at right now. I created this webpage as a portfolio for the projects I have created, as well as learning the basics of for web development. At the moment it is a simple static html/css page running from an Amazon EC2 server. "
  },
  {
    title: "Spotify playlist creator",
    source: "https://github.com/Jhogne/Spotify-playlists",
    language: "Python",
    image: '',
    keywords: '',
    description: "I found myself lacking the functionality to easily create large playlists in Spotify, so I created a terminal tool to provide this. It uses the Spotify API to let the user create playlists of all songs created by a list of artists. I wrote a script in Python."
  },
  {
    title: "Advent of Code",
    source: "https://github.com/Jhogne/aoc19",
    language: "Python",
    image: aoc,
    keywords: '',
    description: "In participated in advent of code 2019 for fun and used it as an opportunity to get some hands on experience with Python 3, since I had never actually programmed in Python before. I have yet to finish all the challenges, but I am getting closer every day."
  },

];

export default projects