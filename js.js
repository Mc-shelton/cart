var showback = document.getElementById('banner')
var slideIndex = 0;
var left_num;
showSlides();

var descript = document.getElementsByClassName ('cat_descript');
var width = document.getElementsByClassName('display')[0].clientWidth
console.log(width)
for (var i=0;i<descript.length;i++){
    descript[i].style.width = width + 'px';
}

function test(){
    
    console.log('helo');
}
        
        function showSlides() {
            slideIndex++;
            
            if (slideIndex > 7 ){
                slideIndex = 1;
            }
            console.log(slideIndex)
        
            if (slideIndex == 1 ){

                showback.style.background = "white url('images/download\ \(3\).jfif') no-repeat";
                showback.style.backgroundPosition = '50% -50px';
                showback.style.backgroundSize = "65%";
                //change.innerHTML ="<i>~ welcome to the home of spirituality ~</i>"
                //mark.style.background = 'white'
                //mark1.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark2.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark3.style.background = 'rgba(255, 255, 255, 0.4)'

                //if (window.screen.width > 500){
               //     showback.style.backgroundPosition = "0 -200px"
                //}
            }
            
            if (slideIndex == 2 ){
                showback.style.background = "url('images/download\ \(2\).jfif') no-repeat"
                showback.style.backgroundPositionY = "0 150px"
                showback.style.backgroundSize = "cover"
                //mark.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark1.style.background = 'white'
                //mark2.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark3.style.background = 'rgba(255, 255, 255, 0.4)'

                
                //change.innerHTML ="<i>~ lively services ~</i>"
                /*if (window.screen.width > 500){
                    showback.style.backgroundPosition = "0 -200px"
                }*/
            }
            
            if (slideIndex == 3){
                showback.style.background = "url('images/download\ \(1\).jfif')no-repeat"
                showback.style.backgroundPosition = "0 0"
                showback.style.backgroundSize = "cover"
                //change.innerHTML ="<i>~ active youths ~</i>"
                //mark.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark1.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark2.style.background = 'white'
                //mark3.style.background = 'rgba(255, 255, 255, 0.4)'

                /*if (window.screen.width > 500){
                    showback.style.backgroundPosition = "0 0"
                }*/

            }
            
            if (slideIndex == 4){
                showback.style.background = " white url('images/download\ \(5\).jfif') no-repeat"
                showback.style.backgroundPosition = "50% 50%"
                showback.style.backgroundSize = "60%"
                //change.innerHTML ="<i>~ wonderfull and briliant children min ~</i>"
                //mark.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark1.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark2.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark3.style.background = 'white'

                /*if (window.screen.width > 500){
                    showback.style.backgroundPosition = "0 -200px"
                }*/
            }
            
            if (slideIndex == 5){
                showback.style.background = "url('images/download\ \(7\).jfif') no-repeat"
                showback.style.backgroundPosition = "50% 50%"
                showback.style.backgroundSize = "85%"
                //change.innerHTML ="<i>~ wonderfull and briliant children min ~</i>"
                //mark.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark1.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark2.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark3.style.background = 'white'

                /*if (window.screen.width > 500){
                    showback.style.backgroundPosition = "0 -200px"
                }*/
            }
            
            if (slideIndex == 6){
                showback.style.background = "white url('images/download\ \(8\).jfif') no-repeat"
                showback.style.backgroundPosition = "50% 50%"
                showback.style.backgroundSize = "60%"
                //change.innerHTML ="<i>~ wonderfull and briliant children min ~</i>"
                //mark.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark1.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark2.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark3.style.background = 'white'

                /*if (window.screen.width > 500){
                    showback.style.backgroundPosition = "0 -200px"
                }*/
            }
            
            if (slideIndex == 7){
                showback.style.background = "white url('images/download\ \(6\).jfif') no-repeat"
                showback.style.backgroundPosition = "50% 50%"
                showback.style.backgroundSize = "50%"
                //change.innerHTML ="<i>~ wonderfull and briliant children min ~</i>"
                //mark.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark1.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark2.style.background = 'rgba(255, 255, 255, 0.4)'
                //mark3.style.background = 'white'

                /*if (window.screen.width > 500){
                    showback.style.backgroundPosition = "0 -200px"
                }*/
            
                if (slideIndex == 8){
                    showback.style.background = "url('images/download\ \(4\).jfif') repeat"
                    showback.style.backgroundPosition = "0 0"
                    showback.style.backgroundSize = "50%"
                    //change.innerHTML ="<i>~ wonderfull and briliant children min ~</i>"
                    //mark.style.background = 'rgba(255, 255, 255, 0.4)'
                    //mark1.style.background = 'rgba(255, 255, 255, 0.4)'
                    //mark2.style.background = 'rgba(255, 255, 255, 0.4)'
                    //mark3.style.background = 'white'
    
                   /* if (window.screen.width > 500){
                        showback.style.backgroundPosition = "0 -200px"
                    }*/
                }
            }
    
          
    setTimeout(showSlides, 5000); // Change image every 2 seconds
        }
    








var buttonPress=true

var input = document.getElementById("searchbar");
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById('myBtn').click();
        
    }
})

function search() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();

}

function go(){
var strip = document.getElementById('strip');
var help = document.getElementById('help');
var categ = document.getElementById('categ')
let x = document.getElementsByClassName('display');
let y = document.getElementsByClassName('box');
let input = document.getElementById('searchbar').value;
var first_disp = document.getElementById('first_disp')
var error = document.getElementById('error');
var descript = document.getElementsByClassName('cat_descript');
   for (i = 0; i < x.length; i++) { 
    
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
             
            showback.style.display = 'none';
            help.style.display = 'none';
            strip.style.display = 'none';
            categ.style.display = "none";
            first_disp.style.marginTop = 'unset';   
            error.style.display = 'block';
        }
        
        else {
            x[i].style.display="block";
            error.style.display = 'none';
            
            showback.style.display = 'none';
            help.style.display = 'none';
            strip.style.display = 'none';
            categ.style.display = "none";
            first_disp.style.marginTop = 'unset';
            

                            
        }
    }
        
        
    for (i = 0; i < y.length; i++) { 
       
        if (!y[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display="none";

            
            
        }
        else {
            y[i].style.display="inline-block";
            error.style.display = 'none';

        }
    }
    
    }
  
