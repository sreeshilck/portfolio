




/*const form = document.getElementById("submit-form")
const fname = document.getElementById("name")
const email = document.getElementById("email")


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkInputs();
});

function checkInputs(){
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();

    if(fnameValue===''){

        setErrorFor(fname,'Name cannot be blank');

    }else{
        setSuccessFor(fname);
    }

    if(emailValue ===''){
        setErrorFor(email,'Email cannot be blank');
    }else if(!isEmail){
        setErrorFor(email,'Email not valid');
    }else{
        setSuccessFor(email);
    }


}

function  setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    

    small.innerText= message;

    formControl.className = 'name-container error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'name-container success'
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
