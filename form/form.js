
$(function() { 
    $('select[name="country"]').bfhcountries({country: 'PL'}); 
}); 
//DONE
var country =  () => {
    var countrySelected = document.querySelector('.country');
     return(countrySelected.selectedOptions[0].innerHTML);
}
//DONE
var town =  () =>{
    var townName = document.querySelector('.town');
    return(townName.value)
}

//DONE
var countStars =  () => {
    var checkedRadio = document.querySelector('.stars input:checked');
     return(checkedRadio.value);
}

//DONE
var description =  () =>{
    var text = document.querySelector('.descriptionText');
    return(text.value)
}

var photo =  () =>{
    var link = document.querySelector('.photo');
    return(link.value)
}



var send =  ()=>{
    var data = {
        country:country(),
        town:town(),
        description:description(),
        photo:photo(),
        countStars:countStars()
    }

    if(sessionStorage.formData == undefined){
        sessionStorage.setItem('formData', JSON.stringify(data));
    }
    else{

        sessionStorage.setItem('formData', JSON.stringify(data));
    }
    



}

// document.querySelector('.stars').addEventListener('click', countStars);
// document.querySelector('.town').addEventListener('input', town);
// document.querySelector('.descriptionText').addEventListener('input', description);
// document.querySelector('.photo').addEventListener('input', photo);
// document.querySelector('.country').addEventListener('change', country);

document.querySelector('.sendButton').addEventListener('click', send);




// document.querySelector('.sendButton').addEventListener('click', send);