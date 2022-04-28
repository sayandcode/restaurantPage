// const contentDiv=document.getElementById('content');
import createDescription from "../generateTags.js";

const heroIMGlink='https://b.zmtcdn.com/data/pictures/5/18644475/6642647c1d1b9ec4a9931810ddd21b7d.jpg';

function loadAboutUs(){
    const mainBody=document.querySelector('main');
    mainBody.appendChild(createHeroImage());
    mainBody.appendChild(createDescription('Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit.'));
}

function createHeroImage(){
    const heroImage=document.createElement('img');
    heroImage.setAttribute('src',heroIMGlink);
    heroImage.setAttribute('alt','Agape 2 interiors');
    
    return heroImage;
}

export default loadAboutUs;