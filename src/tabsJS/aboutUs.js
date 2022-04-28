// const contentDiv=document.getElementById('content');


function loadAboutUs(){
    const mainBody=document.querySelector('main');
    mainBody.appendChild(createHeroImage());
    mainBody.appendChild(createDescription());
}

function createHeroImage(){
    const heroImage=document.createElement('img');
    heroImage.setAttribute('src','https://b.zmtcdn.com/data/pictures/5/18644475/6642647c1d1b9ec4a9931810ddd21b7d.jpg');
    heroImage.setAttribute('alt','Agape 2 interiors');
    
    return heroImage;
}

function createDescription(){
    const para=document.createElement('p');
    para.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit.'
    return para;
}

export default loadAboutUs;