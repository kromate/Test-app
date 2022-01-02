import { reactive } from "vue";
import { url } from "./constants";
import { useRouter } from "vue-router";

export const global = reactive({
    authMsg:"",
    emailError:"",
    passwordError:"",
    loading: false,
    authState: JSON.parse(localStorage.getItem("auth")) || null,
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
      
    if(!data.status){
       saveAuth(data.status)
     global.authMsg = data.message
     global.loading = false
     
    }else{
      saveAuth(data.status)
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
    // localStorage.setItem("auth", data);
}


export const signOut = ()=>{
    localStorage.removeItem("auth");
    global.authState = null;
  window.location.href = "/login"
}