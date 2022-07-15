
let ourStoryHeadInput=document.getElementById("ourStoryHead");
let ourStoryDescInput=document.getElementById("ourStoryDesc");
let addSInfo=document.getElementById("addstoryInfo");
let cIndex=0;
let infoS=[];

if(localStorage.getItem("infoSList")==null){
  infoS=[];
}
else{
    infoS=JSON.parse(localStorage.getItem("infoSList"));
    dispalyStory();
}

addSInfo.onclick=function(){
    if(addSInfo.innerHTML="Add ourStoryInfo"){
    addStory();    
    }
    else{
        updateStory();
    }
    dispalyStory();
    clearStory();
}


    function addStory(){
    var informationS={
        Shead:ourStoryHeadInput.value,
        sDesc:ourStoryDescInput.value,
        }
        infoS.push(informationS);
        localStorage.setItem("infoSList",JSON.stringify(infoS));
        dispalyStory();
        clearStory();
        
    }

    function dispalyStory(){
        var result="";
        for(let i=0;i<infoS.length;i++){
        result+=`
        <tr>
        <td>${i}</td>
       
        <td>${infoS[i].Shead}</td>
        <td>${infoS[i].sDesc}</td>
        <td><button type="button" class="btn btn-primary edit" id="edit" onclick="getStory(${i})">Edit</button></td>
        <td><button type="button" class="btn btn-danger delete" id="delete" onclick="deleteStory(${i})">Delete</button></td>
        </tr>
        
        `
        }//end of four loop
       let data=document.getElementById("data") ;
        data.innerHTML=result;
    
    }
    
    function deleteStory(index){
        infoS.splice(index,1);
        localStorage.setItem("infoSList",JSON.stringify(infoS));
        dispalyStory();
    }
    
    var ourStoryInput=document.getElementsByClassName("ourStoryInput");
    
    function clearStory(){
    for(let i=0;i<ourStoryInput.length;i++){
        ourStoryInput[i].value="";
    
    }
    addSInfo.innerHTML="Add ourStoryInfo";
    }    

 

    function getStory(index){
        var informationS=infoS[index];
        ourStoryHeadInput.value=informationS.Shead;
        ourStoryDescInput.value=informationS.sDesc;
        
        addSInfo.innerHTML="update Story";
        cIndex=index;
        
        

    }
    
    
    function updateStory(     ){
         getInfo(cIndex);

        var informationS={
            Shead:ourStoryHeadInput.value,
            sDesc:ourStoryHeadDescInput.value,
        };
        infoS[cIndex].Shead=informationS.Shead;
        infoS[cIndex].sDesc=informationS.sDesc;
        localStorage.setItem("infoSList",JSON.stringify(infoS));

    }








/*

        addSInfo.onclick=function(){
    if(addSInfo.innerHTML="Add Info"){
    addInformation();    
    }
    else{
        updateInfo();
    }
    dispalyInformation();
    clearForm();
}
       
    }*/
