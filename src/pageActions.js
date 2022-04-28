import loadAboutUs from './tabsJS/aboutUs.js';
import loadMenu from './tabsJS/menu.js';
import loadContact from './tabsJS/contact.js';

const contentDiv=document.getElementById('content');

const testVariable=33;

function initializeWebsite(){
    
    //create the DOM
    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    renderBody();

    //attach event listeners
    const navTabs=document.querySelectorAll('nav li');
    navTabs.forEach(tab=>tab.addEventListener('click',tabSwitch));  
}

function createHeader(){
     //create header
     const header=document.createElement('header');
     const logo=header.appendChild(document.createElement('h1'));
     const nav=header.appendChild(document.createElement('nav'));
     const ul=nav.appendChild(document.createElement('ul'));
 
     //logo styling
     logo.textContent='Agape2';
     logo.classList.add('logo')
     
     
     //add navigation tabs
     const navTabs=[];
     const navTabText=['About Us','Menu','Contact']
     for (let i = 0; i < navTabText.length; i++) {
         navTabs[i] = ul.appendChild(document.createElement('li'));
         navTabs[i].textContent =navTabText[i];
     }
     navTabs[0].classList.add('activeTab'); //default on 'About Us'
     
     return header;
}

function createMain(){
    const mainBody=document.createElement('main');
    contentDiv.appendChild(mainBody);
    return mainBody;
}

function renderBody(){
    //clear the main body
    const mainBody=document.querySelector('main');
    mainBody.classList.remove('about','menu','contact');
    mainBody.textContent='';

    const activeTab=document.querySelector('.activeTab').textContent;
    switch (activeTab) {
        case 'About Us':
            loadAboutUs();
            mainBody.classList.add('about');
            break;
    
        case 'Menu':
            loadMenu();
            mainBody.classList.add('menu');
            break;
        
        case 'Contact':
            loadContact();
            mainBody.classList.add('contact');
            break;
    }
}

function tabSwitch(e){
    const navTabs=document.querySelectorAll('nav li');
    navTabs.forEach(tab=>tab.classList.remove('activeTab'));
    e.target.classList.add('activeTab');

    renderBody();
}

export default initializeWebsite;