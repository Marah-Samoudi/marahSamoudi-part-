let backgroundImageAuthorInput=document.getElementById("background-image-author");
let backgroundImageDescInput=document.getElementById("background-image-desc");
let addInfo=document.getElementById("addBtnInfo");
let currentIndex=0;
let info=[];
if(localStorage.getItem("infoList")==null){
    info=[];
}
else{
   info=JSON.parse(localStorage.getItem("infoList"));
    dispalyInformation();
}
addInfo.onclick=function(){
    if(addInfo.innerHTML="Add info"){
    addInformation();    
    }
    else{
        updateInfo( );
    }
    dispalyInformation();
    clearForm();
}

    function addInformation(){
    var information={
        author:backgroundImageAuthorInput.value,
        desc:backgroundImageDescInput.value,
        
        };
        info.push(information);
        localStorage.setItem("infoList",JSON.stringify(info));
        clearForm();
    }
    

    function dispalyInformation(){
        var result="";
        for(let i=0;i<info.length;i++){
        result+=`
        <tr>
        <td>${i}</td>
       
        <td>${info[i].author}</td>
        <td>${info[i].desc}</td>
        <td><button type="button" class="btn btn-primary update" id="update" onclick="getInfo(${i})">Update</button></td>
        <td><button type="button" class="btn btn-danger delete" id="delete" onclick="deleteInformation(${i})">Delete</button></td>
        </tr>
        
        `
        }//end of four loop
       let data=document.getElementById("data") ;
        data.innerHTML=result;
    
    }


    function deleteInformation(index){
        info.splice(index,1);
        localStorage.setItem("infoList",JSON.stringify(info));
        dispalyInformation();
    }
    
    var scrollInputs=document.getElementsByClassName("scrollInput");
    
    function clearForm(){
    for(let i=0;i<scrollInputs.length;i++){
        scrollInputs[i].value="";
    
    }
    addInfo.innerHTML="Add info";
    }    

    function getInfo(index){
        var information=info[index];
        backgroundImageAuthorInput.value=information.author;
        backgroundImageDescInput.value=information.desc;
        
        addInfo.innerHTML="update information";
        currentIndex=index;
        console.log("here"+currentIndex);
        

    }
    function updateInfo( ){
        var information={
            author:backgroundImageAuthorInput.value,
            desc:backgroundImageDescInput.value,
        }

        info[currentIndex].author=information.author;
        info[currentIndex].desc=information.desc;
        localStorage.setItem("infoList",JSON.stringify(info));
        
    }