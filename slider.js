
var Slider = function(sliderPhotos, sContainer, iContainer, buttonPrev, buttonNext){ 

    let slider={
        sliderPhotos: sliderPhotos,                       //tablica zdjęć
        buttonPrev: buttonPrev,                                //przycisk prev
        buttonNext: buttonNext,                                //przycisk next
        currentImageIndex: 0,                                  //numer zdjęcia z tablicy zdjęć
        currentSlideImagePath: null,    //ścieżka obecnie wyświetlane zdjęcie
        sliderContainer: sContainer,      
        imagesContainer: iContainer,
        imageClassName: "sliderImage",
        image : {
            class: null,
            height: 'auto',
            width: 'auto',
            opacity: 0.2
        }   
    }                         
    

    let interval;
    let timeForFading = null;

    slider.createImage = () =>{
       
        slider.currentSlideImagePath = slider.sliderPhotos[slider.currentImageIndex];
        slider.imagesContainer.innerHTML = `<img src=${slider.currentSlideImagePath} class="${slider.imageClassName}">`;
        slider.image.class = document.getElementsByClassName("sliderImage")[0];
        
    
    };

    slider.fadeOutImage = () => {
        document.getElementsByClassName("sliderImage")[0].style = `opacity:${slider.image.opacity}`
        clearTimeout(timeForFading);
        slider.image.opacity = 0.0;
        document.getElementsByClassName("sliderImage")[0].style.opacity = slider.image.opacity;
        for(let i=0;i<5;i++){
                    
                    timeForFading =  setTimeout(() => {
                        document.getElementsByClassName("sliderImage")[0].style.opacity = slider.image.opacity;
                        slider.image.opacity+=0.2;
                     },180*i);    
                 }
    }

    slider.changePhoto = (dir) =>{ 
       
        slider.currentImageIndex = (slider.currentImageIndex+dir)%slider.sliderPhotos.length;
        if( slider.currentImageIndex <0)
            slider.currentImageIndex = 2;
        slider.currentSlideImagePath = slider.sliderPhotos[slider.currentImageIndex];
        slider.imagesContainer.innerHTML = `<img src=${slider.currentSlideImagePath} class="${slider.imageClassName}">`;
        slider.fadeOutImage();
    }

    slider.buttonNext.addEventListener("click", ()=>slider.changePhoto(1));
    slider.buttonPrev.addEventListener("click", ()=>slider.changePhoto(-1));
    interval = setInterval(() =>{slider.changePhoto(1)}, 10000);

    return slider;
    }


const sliderPhotos = [
    "../images/1.png",
    "../images/2.png",
    "https://www.dnndeveloper.in/DesktopModules/DnnDeveloper_ImageSlider/Images/QdOOLD2x1Qg.jpg"
]
const imageContainer = document.getElementsByClassName("sliderPhoto")[0];
const sliderContainer = document.querySelector("sliderBox");
const buttonPrev  = document.getElementsByClassName("buttonPrev")[0];
const buttonNext = document.getElementsByClassName("buttonNext")[0];
var slider = Slider(sliderPhotos, sliderContainer, imageContainer, buttonPrev, buttonNext);

slider.createImage();