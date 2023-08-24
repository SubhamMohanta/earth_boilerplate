var bodyvar = document.body


//four buttons
var consumptionvar = document.getElementById("consumption")
console.log("consumptionvar", consumptionvar);

var climatevar = document.getElementById("climate")
console.log("climatevar",climatevar);

var resourcesvar = document.getElementById("resources")
console.log("resourcesvar", resourcesvar);

var peoplevar = document.getElementById("people")
console.log("peoplevar", peoplevar);

//save text
var saveText = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

//Variable declaration is done


consumptionvar.onclick=()=>{  
//background-color
    bodyvar.style.background = "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
    bodyvar.style.backgroundSize = "100% 100%"

//frame
   frame.src= "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
   saveText.innerHTML= "Plan meals thoughtfully to minimize food waste."

//buttons
   consumptionvar.style.background="rgb(52,196,85)"

//transparency
climatevar.style.background = "";
resourcesvar.style.background = "";
peoplevar.style.background = "";
}

climatevar.onclick=()=>{  
    //background-color
        bodyvar.style.background = "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)"
        bodyvar.style.backgroundSize = "100% 100%"
    
    //frame
       frame.src= "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
       saveText.innerHTML= "Shift to renewable energy sources for a greener future."
    
    //buttons
       climatevar.style.background="rgb(54,126,226)"
    
    //transparency
    consumptionvar.style.background = "";
    resourcesvar.style.background = "";
    peoplevar.style.background = "";
    }

resourcesvar.onclick=()=>{  
    //background-color
        bodyvar.style.background = "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)"
        bodyvar.style.backgroundSize = "100% 100%"
    
    //frame
       frame.src= "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
       saveText.innerHTML= "Consume wisely to preserve resources for the future."
    
    //buttons
       resourcesvar.style.background="rgb(235,144,84)"
    //transparency
    climatevar.style.background = "";
    consumptionvar.style.background = "";
    peoplevar.style.background = "";
    }

peoplevar.onclick=()=>{  
    //background-color
        bodyvar.style.background = "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png)"
        bodyvar.style.backgroundSize = "100% 100%"
    
    //frame
       frame.src= "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
       saveText.innerHTML= "Cut food waste, share with those in need."
    
    //buttons
       peoplevar.style.background="rgb(223,61,85)"
    //transparency
    climatevar.style.background = "";
    resourcesvar.style.background = "";
    consumptionvar.style.background = "";
    }








