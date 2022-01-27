var mySlides = new Array();
mySlides[1] = new Image(); 
mySlides[2] = new Image(); 
mySlides[3] = new Image(); 
mySlides[4] = new Image(); 
mySlides[5] = new Image(); 
mySlides[6] = new Image(); 
mySlides[7] = new Image(); 
mySlides[8] = new Image(); 
mySlides[9] = new Image(); 
mySlides[10] = new Image(); 
mySlides[11] = new Image(); 
mySlides[12] = new Image();
mySlides[13] = new Image(); 
mySlides[14] = new Image(); 
mySlides[15] = new Image(); 
mySlides[16] = new Image(); 
mySlides[17] = new Image(); 
mySlides[18] = new Image(); 
mySlides[19] = new Image(); 
mySlides[20] = new Image(); 
mySlides[21] = new Image(); 
mySlides[22] = new Image(); 

mySlides[1].src = "../number/img0.jpg";
mySlides[2].src = "../number/img1.jpg";
mySlides[3].src = "../number/img2.jpg"; 
mySlides[4].src = "../number/img3.jpg"; 
mySlides[5].src = "../number/img4.jpg"; 
mySlides[6].src = "../number/img5.jpg"; 
mySlides[7].src = "../number/img6.jpg"; 
mySlides[8].src = "../number/img7.jpg"; 
mySlides[9].src = "../number/img8.jpg";
mySlides[10].src = "../number/img0.jpg";  
mySlides[11].src = "../number/img0.jpg";
mySlides[12].src = "../number/img0.jpg";
mySlides[13].src = "../number/img0.jpg";
mySlides[14].src = "../number/img0.jpg";
mySlides[15].src = "../number/img0.jpg"; 
mySlides[16].src = "../number/img0.jpg"; 
mySlides[17].src = "../number/img0.jpg"; 
mySlides[18].src = "../number/img0.jpg"; 
mySlides[19].src = "../number/img0.jpg"; 
mySlides[20].src = "../number/img0.jpg"; 
mySlides[21].src = "../number/img0.jpg"; 
mySlides[22].src = "../number/img0.jpg";
var myCaptions = new Array();
myCaptions[1] = "Cardinal numbers - (numeros cardinais)";
myCaptions[2] =  "Voce normalmente usa numeros cardinais para contar coisas.";
myCaptions[3] = "Dining room (sala de jantar)";
myCaptions[4] ="Living room(sala de estar)"
myCaptions[5] = "Bathroom (banheiro com chuveiro, e ou banheira )";
myCaptions[6] = "Toilet(pequeno banheiro, só com toalete e pia )";
myCaptions[7] = "Nursing room (sala de brincar )";
myCaptions[8] = "Hall (pequeno corredor de entrada)";
myCaptions[9] = "Basement (subsolo da casa, onde se pode morar)";
myCaptions[10] = "Attic (sótão - cômodo do andar  de cima da casa sem uso)";
myCaptions[11] = "Garage (Garagem )";
myCaptions[12] = "Loft (como o sotao, fica no andar superior podendo morar nele)";
myCaptions[13] = "Study (Sala de estudo, escritório, estudio)";
myCaptions[14] = "Utility room (lavanderia, dobrar e passar roupa)";
myCaptions[15] = "Panic room(sala usada em caso de roubo, lugar mais seguro da casa)";
myCaptions[16] = "Cellar (subsolo da casa como Basement sem uso para morar)";
myCaptions[17] = "Guess room  (cômodo da casa usado por visitas)";
myCaptions[18] = "Mud room(corredor de entrada onde se tira sapatos e casacos)";
myCaptions[19] = "Master bedroom  (Quarto da casa com banheiro independente)";
myCaptions[20] = "Game room(sala de jogos da casa)";
myCaptions[21] = "Balcony ( Varanda, ou sacada do segundo andar)";
myCaptions[22] = "Lesson MY house rooms";

var slidenumber = 0;
var totalslides = mySlides.length - 1;
function showSlide(direction){
if (direction == "next") {
   (slidenumber == totalslides) ? slidenumber = 1 :
slidenumber++;
  }else{
     (slidenumber == 1) ? slidenumber = totalslides :
slidenumber--;
  }
  if (document.images) {
    document.slideframe.src = mySlides[slidenumber].src;
    document.slidecontrols.caption.value = 
  myCaptions[slidenumber];
    document.slidecontrols.currentslide.value = slidenumber;
 }
}