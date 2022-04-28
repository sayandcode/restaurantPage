import createDescription from "../generateTags";

const phoneNo='📞: 09686257446, 9844120969';

const mapAttributes={
    src:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.816648873952!2d77.643467!3d13.022667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebbadb01d5daf324!2sAgape!5e0!3m2!1sen!2sin!4v1651132928472!5m2!1sen!2sin',
    style:"border:0;",
    allowfullscreen:"",
    loading:"lazy",
    referrerpolicy:"no-referrer-when-downgrade"
}

function loadContact(){
    const mainBody=document.querySelector('main');
    mainBody.appendChild(createMap());
    mainBody.appendChild(createDescription(phoneNo)).classList.add('phoneNo');
}

function createMap(){
    const mapFrame=document.createElement('iframe');
    mapFrame.classList.add('map');
    setAttributes(mapAttributes,mapFrame);

    return mapFrame;
}

function setAttributes(attributes,element){
    for (const key in attributes) {
        element.setAttribute(key,attributes[key]);
    }
}

export default loadContact;