// import routes from './src/routes/usuarioRoute.js';

// var regions = {
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "São Luís"
//             },
//             "geometry": {
//                 "type": "Polygon",
//                 "coordinates": [[
//                     [-44.2825, -2.53874],
//                     [-44.2835, -2.54874],
//                     [-44.2845, -2.55874],
//                     [-44.2825, -2.53874]
//                 ]]
//             }
//         }
//         // Adicione mais regiões aqui
//     ]
// };

// // Busca Região
// function buscarLocal(){
//     const inputSearch = document.querySelector("input[type='search']").value;
//     const content = document.querySelector(".content");

//     inputSearch.oninput = () => {
//         content.innerHTML = "";

//         items
//             .filter((item) => 
//             item.toLowerCase().includes(inputSearch.value.toLowerCase())
//         )
//         .forEach((item) => addHTML(item));
//     };
// }

// // Aba login
// function validateFields() {
//     const emailValid = isEmailValid();
//     document.getElementById("email").disabled = !emailValid;

//     const passwordValid = isPasswordValid();
//     document.getElementById("login-button").disabled = !emailValid || !passwordValid;
// }

// function isEmailValid() {
//     const email = document.getElementById("email").value;
//     if(!email){
//         return false;
//     }
//     return validateEmail(email);
// }

// function isPasswordValid() {
//     const password = document.getElementById("password").value;
//     if(!password){
//         return false;
//     }
//     return true;
// }

// function validateEmail(email){
//     return /\S+@\S+\.\S+/.test(email);
// }

// // Aba Cadastro
// function validateFieldsRegister(){
//     const nameRegisterValid = nameRegister();
//     document.getElementById("nameRegister").disabled = !nameRegister;

//     const emailRegisterValid = validateRegisterEmail();
//     document.getElementById("EmailRegister").disabled = !EmailRegister;

//     const EmailConfirmeRegisterValid = validateConfirmeRegisterEmail();
//     document.getElementById("EmailConfirmeRegister").disabled = !EmailConfirmeRegister;

//     const passwordRegisterValid = validateRegisterPassword();
//     document.getElementById("passwordRegister").disabled = !passwordRegister;

//     const passwordConfirmeRegisterValid = validateConfirmeRegisterPassword();
//     document.getElementById("passwordConfirmeRegister").disabled = !passwordConfirmeRegister;

//     const GenderRegisterValid = validateRegisterGender();
//     document.getElementById("GenderRegister").disabled = !GenderRegister;

//     const CEPRegisterValid = validateRegisterCEP();
//     document.getElementById("CEPRegister").disabled = !CEPRegister;

//     const PhoneRegisterValid = validateRegisterPhone();
//     document.getElementById("PhoneRegister").disabled = !PhoneRegister;

//     document.getElementById("register-button").disabled = !emailRegisterValid || !nameRegisterValid || !EmailConfirmeRegisterValid || !passwordRegisterValid || !passwordConfirmeRegisterValid || !GenderRegisterValid || !CEPRegisterValid || !PhoneRegisterValid;
// }

// function validateRegisterName(){
//     const nameRegister = document.getElementById("nameRegister").value;
//     if(!password){
//         return false
//     }
//     return true;
// }

// function validateRegisterEmail(){
//     const EmailRegister = document.getElementById("EmailRegister").value;
//     if(!EmailRegister){
//         return false
//     }
//     return true;
// }

// function validateConfirmeRegisterEmail(){
//     const EmailConfirmeRegister = document.getElementById("EmailConfirmeRegister").value;
//     if(EmailRegister != EmailConfirmeRegister){
//         return false
//     }
//     return true;
// }

// function validateRegisterPassword(){
//     const passwordRegister = document.getElementById("passwordRegister").value;
//     if(!passwordRegister){
//         return false
//     }
//     return true;
// }

// function validateConfirmeRegisterPassword(){
//     const passwordConfirmeRegister = document.getElementById("passwordConfirmeRegister").value;
//     if(password != passwordConfirmeRegister){
//         return false
//     }
//     return true;
// }

// function validateRegisterGender(){
//     const GenderRegister = document.getElementById("GenderRegister").value;
//     if(!GenderRegister){
//         return false
//     }
//     return true;
// }

// function validateRegisterCEP(){
//     const CEPRegister = document.getElementById("CEPRegister").value;
//     if(!CEPRegister){
//         return false
//     }
//     return true;
// }

// function validateRegisterPhone(){
//     const PhoneRegister = document.getElementById("PhoneRegister").value;
//     if(!PhoneRegister){
//         return false
//     }
//     return true;
// }

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    let formObject = {};
    formData.forEach((value, key) => {
    formObject[key] = value;
    });
    console.log('Form Object:', formObject);

    fetch('http://localhost:3000/usuarios', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        console.log('Sucesso', data);
    })
    .catch((error) => {
        console.error('Error', error);
    })
});

