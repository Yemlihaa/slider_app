var models = [
  {
    name: "Lamborghini Diablo",
    image: "img/1.jpg",
    link: "https://www.arabam.com/blog/otomobille-yasam/lamborghini-diablo-hakkinda-bilinmeyenler/",
  },
  {
    name: "Nissan Skyline R34",
    image: "img/2.jpg",
    link: "https://www.arabam.com/blog/otomobille-yasam/lamborghini-diablo-hakkinda-bilinmeyenler/",
  },
  {
    name: "Mercedes SLS Amg",
    image: "img/3.jpg",
    link: "https://www.arabam.com/blog/otomobil-inceleme/nissan-skyline-r34-gt-r/",
  }
];

var index = 2;

document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-img-top').setAttribute("src", models[index].image);
document.querySelector('.card-link').setAttribute('herf',models[index].link);
