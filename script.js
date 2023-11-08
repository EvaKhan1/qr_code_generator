const qrText =document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size =sizes.value;

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault(); 
    isEmptyInput();
});

function isEmptyInput(){
    // if(qrText.value===""){
    //     alert("Enter the text or URL");
    //     return false;
    // }
    // generateQRCode();

    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate QR code");    
}

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img!== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

const changeSizes=(e)=>{
    size = e.target.value;
    isEmptyInput();
}
sizes.addEventListener('change',changeSizes);

function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height: size,
        width:size,
        colorLight:"#ffffff",
        colordark:"#000",
    });
}