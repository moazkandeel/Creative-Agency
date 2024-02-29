//Check If There Is Local Storage Color Option

let mainColors = localStorage.getItem("color_option");



if(mainColors !==null){

    document.documentElement.style.setProperty('--main--color', localStorage.getItem("color_option"));

    //Remove Active Class From All Childrens

    document.querySelectorAll(".colors-list li").forEach(Element=>{

        Element.classList.remove("active");

        //Add active Class On Element With Data-Color === Local Storage Item

        if(Element.dataset.color === mainColors){

            Element.classList.add('active');
        }

    })

}



//Random Background Option

let backgroundOption = true;

//Variable To Control Interval

let inter;


//Check If There Is Local Storage Random Background Item

let backgroundLocalItem = localStorage.getItem("background_option");

//Check If Random Background Local Storage Is Not Empty

if(backgroundLocalItem !== null){
    

    if(backgroundLocalItem ==='true'){

        backgroundOption = true;

    }
    else{

        backgroundOption = false;

    }

    //Remove Active Class From All Spans

    document.querySelectorAll(".random-backgrounds span").forEach(Element=>{

        Element.classList.remove("active");

    });

    if(backgroundLocalItem ==='true'){

        document.querySelector(".random-backgrounds .yes").classList.add("active");

    }
    else{

        document.querySelector(".random-backgrounds .no").classList.add("active");


    }

}



//Toggle Spin Class On Icon

document.querySelector(".toggle-settings .fa-gear").onclick = function(){


    //Toggle Class fa-spin For Rotation On Self 

    this.classList.toggle("fa-spin");


    //Toggle Class Open On Main Settings Box

    document.querySelector(".settings-box").classList.toggle("open");
}


//Switch Colors

const colorsLi = document.querySelectorAll(".colors-list li");

//Loop On All List Items

colorsLi.forEach(li=>{


//Click On Every List Items 

    li.addEventListener("click", (e)=>{

        //Set Color On Root

        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

        //Set Color On Local Storage

        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);



    });
})



//Switch Random Background Options

const random = document.querySelectorAll(".random-backgrounds span");

//Loop On All Spans

random.forEach(span=>{


//Click On Every Span 

    span.addEventListener("click", (e)=>{

        handleActive(e);


        if(e.target.dataset.background ==='yes'){

            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option", true)

        }
        else{

            backgroundOption = false;

            clearInterval(inter);

            localStorage.setItem("background_option", false)

        }
    });
})





//Select Landing Page Element

let landingPage = document.querySelector('.landing-page');

let imgsArray = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];



function randomizeImgs(){

    if(backgroundOption === true){
        inter = setInterval(()=>{
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            
            landingPage.style.backgroundImage = 'url("'+ imgsArray[randomNumber]+'")'
            
            
            },5000)

    }
}

randomizeImgs();






//Select Skills Seclector

let ourSkills = document.querySelector(".skills");

window.onscroll = function(){

    //Skills Offset Top

    let skillsOffsetTop = ourSkills.offsetTop;

    //Skills Outer Height

    let skillsOuterHeight = ourSkills.offsetHeight;


    //Window Height


    let windowHeight = this.innerHeight;

    //Window Scroll Top

    let windowScrollTop = this.pageYOffset


    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){


        let allSkills = document.querySelectorAll(".skill-box span");

        allSkills.forEach(skill=>{

            skill.style.width = skill.dataset.progress;

        })
        
    }

}


let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach(img=>{

    img.addEventListener('click', (e)=>{

        //Create Overlay Element

        let overlay = document.createElement("div");

        //Add Class To Overlay

        overlay.className = 'popup-overlay';

        //Append overlay To Body

        document.body.appendChild(overlay);

        //Create popup

        let popupBox = document.createElement("div");

        //Add Class To popupBox

        popupBox.className = 'popup-box';

        if(img.alt !== null){

            //Create Heading

            let imgHeading = document.createElement("h3");

            //Create Text For Heading

            let imgText = document.createTextNode(img.alt);

            //Append The Text To Heading

            imgHeading.appendChild(imgText);

            //Append The Heading To Popup Box

            popupBox.appendChild(imgHeading);

        }

        //Create Image

        let popupImg = document.createElement('img');

        //Set Image Source

        popupImg.src = img.src;

        //Add Img To Popup Box 

        popupBox.appendChild(popupImg);

        //Append Popup Box To Body

        document.body.appendChild(popupBox);

        //Create Close Span

        let closeButton = document.createElement("span");

        //Create Close Button Text

        let closeButtonText = document.createTextNode("X");

        //Append Text To Close Button

        closeButton.appendChild(closeButtonText);

        //Add Class To Close Button

        closeButton.className = 'close-button';

        //Add Close Button To Popup Box

        popupBox.appendChild(closeButton);

    })
});


//Close Popup

document.addEventListener("click", function(e){

    if(e.target.className == 'close-button'){

        //Remove The Current Popup

        e.target.parentNode.remove();

        //Remove Overlay

        document.querySelector(".popup-overlay").remove();
    }
})



//Sellect All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");



//Sellect All Links

const allLinks = document.querySelectorAll(".links a");


function scrollTo(elements){

    elements.forEach(ele => {


        ele.addEventListener("click", (e)=>{
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.sec).scrollIntoView({
    
                behavior:'smooth'
    
            })
    
            
        })
    
    })


}


scrollTo(allBullets);

scrollTo(allLinks);


//Handle Active State

function handleActive(ev){
    //Remove Active Class From All Childrens

    ev.target.parentElement.querySelectorAll(".active").forEach(Element=>{

        Element.classList.remove("active");

    })

    //Add Class Active On Self

    ev.target.classList.add("active");

}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocal = localStorage.getItem("bullets_option");

if(bulletLocal !== null){

bulletsSpan.forEach(span =>{

    span.classList.remove("active");

})

if(bulletLocal === 'block'){

    bulletsContainer.style.display = "block";

    document.querySelector(".bullets-option .yes").classList.add("active");

}

else{

    bulletsContainer.style.display = "none";

    document.querySelector(".bullets-option .no").classList.add("active");

}
}


bulletsSpan.forEach(span =>{

    span.addEventListener("click", (e)=>{

    if(span.dataset.display === 'yes'){

        bulletsContainer.style.display = 'block';

        localStorage.setItem("bullets_option" , "block");

    }
    else{

        bulletsContainer.style.display = 'none';

        localStorage.setItem("bullets_option" , "none");


    }

    handleActive(e);

})


})


document.querySelector(".reset").onclick = function(){

    //localStorage.clear();    //OR The Next 3 Lines

    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");


    //Reload The Window

    window.location.reload();
}


//Toggle Menu

let toggleBtn = document.querySelector(".toggle-menu");

let links = document.querySelector(".links");


toggleBtn.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle("menu-active");

    links.classList.toggle("open");

}




document.addEventListener("click", (e)=>{

    if(e.target !== toggleBtn && e.target !== links){

        if(links.classList.contains("open")){

            toggleBtn.classList.toggle("menu-active");

            links.classList.toggle("open");

        }

    }
})

links.onclick = function(e){

    e.stopPropagation();
}
