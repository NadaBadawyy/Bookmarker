var siteName=document.getElementById('site');
var url=document.getElementById('url');
var btn=document.getElementById('btn');
var box=document.getElementById('box');
closebtn=document.getElementById('closebtn')
var regexName=/^\w{3,}$/
var regexUrl=/^(ftp|http|https):\/\/[^ "]+$/
var sites=[]
if(localStorage.getItem('sites')!=null){
    sites=JSON.parse(localStorage.getItem('sites'))
}

function addSite(){
    if(validation()){
       var site={
        name:siteName.value,
        link:url.value
    }
    
    sites.push(site);
    localStorage.setItem("sites",JSON.stringify(sites)); 
   
    siteName.classList.remove('is-valid')
    url.classList.remove('is-valid')
    
    clearInputs();
    displaySites(); 
    }
    else{
        box.classList.remove('d-none')
        box.classList.add('d-block')
        
    }
    
}

function clearInputs(){
    siteName.value=''
    url.value=''
}
function displaySites(){
    var cartoona=[]
    for (let i = 0; i < sites.length; i++) {
        cartoona+=`
         <tr>
            <td>${i+1}</td>
            <td>${sites[i].name}</td>
            <td><a href="${sites[i].link}" target="_plank">
                    <button class="btn visit text-white"><i
                            class="fa-solid fa-eye me-1"></i>
                        Visit</button>
                </a></td>
            <td><button
                    class="btn delete btn-danger text-white" onclick="remove(${i})"><i
                        class="fa-solid fa-trash-can me-1" ></i>
                    Delete</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML=cartoona;
}
function remove(i){
    sites.splice(i,1);
    localStorage.setItem("sites",JSON.stringify(sites))
    displaySites();
   
}
function validation(){
    return regexName.test(siteName.value) && regexUrl.test(url.value);
}
function validateName(s){
    return regexName.test(s)
}
function validateUrl(s){
    return regexUrl.test(s)
}

function x(d){
    
    if(validateName(d)){
       siteName.classList.remove('input');
        siteName.classList.replace('is-invalid','is-valid')
        
    }
    else{
        
        siteName.classList.remove('input');
        siteName.classList.add('is-invalid')
    }
 }
 function y(d){
    
    if(validateUrl(d)){
        url.classList.remove('input');
        
        url.classList.replace('is-invalid','is-valid')
        
    }
    else{
        url.classList.remove('input');
        url.classList.add('is-invalid')
    }
 }
 function closepage(){
    box.classList.remove('d-block')
    box.classList.add('d-none')
 }

displaySites();
