const content=document.getElementById('content');

function createNavBar(){
    const header=document.createElement('header');
    const logo=header.appendChild(document.createElement('h1'));
    const nav=header.appendChild(document.createElement('nav'));
    const ul=nav.appendChild(document.createElement('ul'));

    //logo styling
    logo.textContent='Agape2';
    logo.classList.add('logo')

    const navTabs=['About Us','Menu','Contact']
    const tabs=[];
    for (let i = 0; i < navTabs.length; i++) {
        tabs[i] = ul.appendChild(document.createElement('li'));
        tabs[i].textContent =navTabs[i];
    }
    tabs[0].classList.add('active');

    //add to screen
    content.appendChild(header);
}
export {
    createNavBar,
};