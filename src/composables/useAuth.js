import { reactive } from "vue";
import { url } from "./constants";

export const global = reactive({
    authMsg:"",
    emailError:"",
    passwordError:"",
    loading: false,
    authState: JSON.parse(localStorage.getItem("auth")) || null,
    userState: JSON.parse(localStorage.getItem("user")) || null,
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
    body: new URLSearchParams({
        email: email.value,
        password: password.value,
    }),
       })
  .then(response => response.json())
  .then(data => {
      
    if(!data.success){
       saveAuth(data.success)
     global.authMsg = data.message
     global.loading = false
     
    }else{
      saveAuth(data.success)
      saveUser(data.data)
      global.loading = false
      global.authMsg = data.message
    }
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


const saveAuth = (data)=>{
  if(data){
    localStorage.setItem("auth", JSON.stringify(data));
    global.authState = data;
    window.location.href = "/home"
     global.loading = false
  }
}

const saveUser = (data)=>{
  if(data){
    localStorage.setItem("user", JSON.stringify(data));
    global.userState = data;
    window.location.href = "/home"
     global.loading = false
  }
}


export const signOut = ()=>{
    localStorage.removeItem("auth");
    global.authState = null;
  window.location.href = "/login"
}