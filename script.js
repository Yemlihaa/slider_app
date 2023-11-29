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
var slaytCount = models.length;
var settings ={

  duration: '1000',
  random :false

};
init(settings);


showSlide(index);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){


  index--;
  showSlide(index);
  console.log(index);


});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){


  index++;
  showSlide(index);
  console.log(index);


});

function init(settings){

  var prev;

  setInterval(function(){

    if(settings.random){

     //random index
      do{

        index = Math.floor(Math.random() * slaytCount);

      }while(index == prev)
      prev = index;


    }else{

      //artan index
      if(slaytCount == index+1){
        index = 0;
      }
      console.log(index);
      index++;


    }
    console.log(index); // üretilen sayı
    showSlide(index);

  },settings.duration)

}

function showSlide(i){

  index = i;

  if(i < 0){
    index = slaytCount - 1;
  }

  if(i >=  slaytCount){
    index = 0;
  }

  document.querySelector('.card-title').textContent = models[index].name;
  document.querySelector('.card-img-top').setAttribute("src", models[index].image);
  document.querySelector('.card-link').setAttribute('herf',models[index].link);

}

