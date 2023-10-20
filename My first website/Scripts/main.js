const myHeading = document.querySelector("h1");
myHeading.textContent = "Dogs";
const myimage = document.querySelector("img");
myimage.onclick = function(){
    const mysource = myimage.getAttribute("src");
    if(mysource==="images/Dog.jpeg"){
        myimage.setAttribute("src","My first website/Images/dog2.jpeg");
    }
    else{
        myimage.setAttribute("src","images/Dog.jpeg");
    }
    }
    let myheading = document.querySelector("h1");
    let mybutton = document.querySelector("button");
    function setUserName(){
        const username = prompt("Enter your name");
    if (!username) {
      setUserName();
    } else {
      localStorage.setItem("name", username);
      myheading.textContent = `Who loves Dogs, ${username}`;
    }
    }
if(!localStorage.getItem("name")){
    setUserName();
}else{
    const stored = localStorage.getItem("name");
    myheading.textContent= `who loves Dogs, ${stored}`;
}
mybutton.onclick = function(){
setUserName();
};
  
