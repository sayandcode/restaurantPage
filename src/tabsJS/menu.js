const imageLinks=['./assets/alfahm.jpg',
    './assets/shawarmaStanding.jpg',
    './assets/alfahm2.jpg',
    './assets/plateShawarma.jpg',
    './assets/biriyani.jpg']

const imageAlt=['A spicy alfahm',
    'Shawarma Roll',
    'Another alfahm',
    'Plate Shawarma',
    'Biriyani'];

const itemDesc=['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, modi.',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorum omnis nam fugit voluptatibus aliquid non aperiam sit inventore reprehenderit?',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolores!']


function loadMenu(){
    const mainBody=document.querySelector('main');
    for (const [index,link] of imageLinks.entries()) {
        mainBody.appendChild(createItemFrom(link,index))
    }
}

function createItemFrom(link,index){
    const item=document.createElement('div');
    item.classList.add('item');
    item.appendChild(createImageFrom(link,index));
    item.appendChild(createItemDescription(index));
    return item;

}

function createImageFrom(link,index){
    const img=document.createElement('img');
    img.setAttribute('src',link);
    img.setAttribute('alt',imageAlt[index]);

    return img;
}

function createItemDescription(index){
    const para=document.createElement('p');
    para.textContent=itemDesc[index];

    return para;
}

export default loadMenu;