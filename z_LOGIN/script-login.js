const register$$ = document.querySelector("section");

const localpostFetch = async (formData) => {
try {
    const response = await fetch("http://localhost:5000/user/login",{method:'POST', body:JSON.stringify(formData), headers:{
      "content-Type": "application/json"
    }});
    const result = await response.json()
    
    if(response.ok){
      // const data = await response.json();  
      const token = result.token;

      localStorage.setItem('token', token);
      window.location.href = "../PROFILE/index-profile.html"
      console.log("datos enviados con exito")
    }else{
      console.error("error al enviar los datos")
    }
    console.log(response)
    return result
} catch (error) {
  console.error("Error al enviar los dato", error)
}
};

const botonSubmit = async()=>{
document.querySelector("form").addEventListener("submit",async(event)=>{
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataObject = {};

formData.forEach((value,key)=>{ formDataObject[key]=value})
  
  try {
   await localpostFetch(formDataObject)
  } catch (error) {
    console.error("error al enviar los datos")
  }
})}
const init =async()=>{

botonSubmit();
}
init();