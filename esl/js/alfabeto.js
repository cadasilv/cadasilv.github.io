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
mySlides[23] = new Image(); 
mySlides[24] = new Image();
mySlides[25] = new Image(); 
mySlides[26] = new Image();
mySlides[27] = new Image();

mySlides[1].src = "../img/A.png";
mySlides[2].src = "../img/B.png";
mySlides[3].src = "../img/C.png"; 
mySlides[4].src = "../img/D.png"; 
mySlides[5].src = "../img/E.png"; 
mySlides[6].src = "../img/F.png"; 
mySlides[7].src = "../img/G.png"; 
mySlides[8].src = "../img/H.png"; 
mySlides[9].src = "../img/I.png";
mySlides[10].src = "../img/J.png";  
mySlides[11].src = "../img/K.png"; 
mySlides[12].src = "../img/L.png";
mySlides[13].src = "../img/M.png";
mySlides[14].src = "../img/N.png";
mySlides[15].src = "../img/O.png"; 
mySlides[16].src = "../img/P.png"; 
mySlides[17].src = "../img/Q.png"; 
mySlides[18].src = "../img/R.png"; 
mySlides[19].src = "../img/S.png"; 
mySlides[20].src = "../img/T.png"; 
mySlides[21].src = "../img/U.png";
mySlides[22].src = "../img/V.png";  
mySlides[23].src = "../img/W.png"; 
mySlides[24].src = "../img/X.png";
mySlides[25].src = "../img/Y.png"; 
mySlides[26].src = "../img/Z.png"; 
mySlides[27].src = "../img/27.png";
var myCaptions = new Array();
myCaptions[1] = "letter A sounds Ae (letra A som Ei)";
myCaptions[2] = "letter B sounds Be (letra B som Bi)";
myCaptions[3] = "letter C sounds Ce (letra C som Ci)";
myCaptions[4] = "letter D sounds De (letra D som Di)";
myCaptions[5] = "letter E sounds E  (letra E som I )";
myCaptions[6] = "letter F sounds ef (letra F som ef )";
myCaptions[7] = "letter G sounds ge (letra G som gi )";
myCaptions[8] = "letter H sounds eight (letra H som eiti)";
myCaptions[9] = "letter I sounds ie (letra I som ai)";
myCaptions[10] = "letter J sounds jae (letra J som jei)";
myCaptions[11] = "letter K sounds kae (letra K som kei)";
myCaptions[12] = "letter L sounds al (letra L som El)";
myCaptions[13] = "letter M sounds emm.. (letra M som emm..)";
myCaptions[14] = "letter N sounds enn.. (letra N som enn..)";
myCaptions[15] = "letter O sounds Ou (letra O som Ou )";
myCaptions[16] = "letter P sounds Pee (letra P som Pii)";
myCaptions[17] = "letter Q sounds keu (letra Q som Kiu)";
myCaptions[18] = "letter R sounds arr (letra R som arr)";
myCaptions[19] = "letter S sounds as  (letra S som ess)";
myCaptions[20] = "letter T sounds tee (letra T som Tii)";
myCaptions[21] = "letter U sounds you ( letra U som iu)";
myCaptions[22] = "letter V sounds Vee ( letra V som Vii)";
myCaptions[23] = "letter W sounds dabeyou (letra W som dabiu)";
myCaptions[24] = "letter X sounds exx (letra X som equis)";
myCaptions[25] = "letter Y sounds uae (letra Y som uai)";
myCaptions[26] = "letter Z sounds zee (letra Z som zii)";
myCaptions[27] = "Lesson English Alphabet";

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