const form= document.getElementById('form');
const email=document.getElementById('email');
const redIcon= document.getElementById('error_icon')
const redMsg= document.getElementById('red')

const regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit',function(event){
    event.preventDefault()

    if(email.value.match(regex)){

        alert('Thank you for subscribing!');
        redIcon.style.display= 'none';
        redMsg.style.display= 'none';

    }else if(email.value === ''){

        redIcon.style.display= 'block';
        redMsg.style.display= 'block';
        
    }else{
        redIcon.style.display= 'block';
        redMsg.style.display= 'block';
    } 

  form.reset()
        
    
})