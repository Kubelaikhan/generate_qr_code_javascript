let linksToGen = document.getElementById("linkeu");
let imgBox = document.getElementById("imgBox");
let qrId = document.getElementById("qrId");


function generateQR(){
    // console.log(linkeu.value.length);
    if(linkeu.value.length > 0){
        qrId.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ linksToGen.value;   
        imgBox.classList.add("show-img");
    }
    else{
        linkeu.classList.add('error');
        setTimeout(()=>{
            linkeu.classList.remove('error');
        }, 1000);
    }
}
