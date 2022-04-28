export default function createDescription(description){
    const para=document.createElement('p');
    para.textContent=description;
    return para;
}