var slideIndex= 0;

var ministry_box = document.getElementById ('ministry');

function ministry_come(){
    console.log("hi");
}

setInterval(ministry_come, 500);

function slide_min(){
    slideIndex++;
    console.log(slideIndex)
    let min_pic= document.getElementById('img');
    let min_par = document.getElementById('p')

    if(slideIndex ==4){
        slideIndex = 0;
    }
    if (slideIndex ==0){
        min_pic.src = "images/download (17).jfif";
        min_par.innerHTML = "Amazing Discoveries";
    }

    if (slideIndex ==1){
        min_pic.src = "images/download (26).jfif";
        min_par.innerHTML = "Amazing Discoveries"
        min_pic.style.transition ="1s ease";
    }
    
    if (slideIndex ==2){
        min_pic.src = "images/download (28).jfif";
        min_par.innerHTML = "Saved to Serve Ministries"
        min_pic.style.transition = '1s ease'
    }
    
    if (slideIndex ==3){
        min_pic.src = "images/download (29).jfif";
        min_par.innerHTML = "SDA Lay-Men"
    }
    
    if (slideIndex ==4){
        min_pic.src = "images/download (27).jfif";
        min_par.innerHTML = "Amazing Word Ministry"
    }
    
}

setInterval(slide_min, 5000);