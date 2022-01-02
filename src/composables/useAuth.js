import { reactive } from "vue";
import { url } from "./constants";

const global = reactive({
    authMsg:"",
    emailError:"",
    passwordError:"",
    loading: false
})

export const useLogin = (email, password)=>{

    const submit = ()=>{
        global.emailError = ""
          global.passwordError = ""
          global.authMsg = ""
          global.loading = true
    if(validate(email.value, password.value)){
      fetch(url, {
             method: "POST",
    body: JSON.stringify({
        email: email.value,
        password: password.value,
    }),
       })
  .then(response => response.json())
  .then(data => {
      
    console.log('this id ddfdf',data)
    if(!data.status){
      global.loading = false
     global.authMsg = data.message
    }
      global.loading = false
      return data
    
    })
  .catch((err)=>{
      global.loading = false
      console.log('An error Occured o', err);
  });
    }

    }

    return{ global, submit}
      }

 export const validate = (email, password)=>{

    if(validateEmail(email) && validatePassword(password)){
        return true
    }else{
        return false
    }
    
 }

  const validateEmail = (email) =>{
      console.log(email);
     let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     if(email && email.length >0){
        return re.test(email);
     }else{
        global.emailError = "Incorrect Email"
         return false
     }

};
  const validatePassword = (password) =>{
      console.log(password);
     if(password && password.length >= 8){
        return true;
     }else{
         global.passwordError = "Password must be greater than 8 letters"
         return false
     }

};