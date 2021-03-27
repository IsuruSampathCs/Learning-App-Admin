

//sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
e.preventDefault();

// get user info
const email = signupForm['inputEmail'].value;
const password = signupForm['inputPassword'].value;

 // sign up the user
 auth.createUserWithEmailAndPassword(email, password).then(cred => {
   
 })

})



