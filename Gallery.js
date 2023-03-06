let i1 = document.querySelector('#i1');
let i2 = document.querySelector('#i2');
let i3 = document.querySelector('#i3');
let i4 = document.querySelector('#i4');
let i5 = document.querySelector('#i5');
let image = document.querySelector('#image');
let description = document.querySelector('.description');
let text1 = "We have mastered the art of the wedding event. Whether you are seeking a romantic destination get-away experience on an island in the South Pacific, a royal wedding of epic proportions, or the most glamorous, sophisticated and tasteful backyard wedding, Colin and his team will help envision and create it for you and turn your dream into reality.";
let text2 = "Live Music Bands, Djs, Singers, Musical Services are used to make your event a night to remember, thanks to the passion and professional talents and skills we have acquired throughout the years. It would not be a modern artistic performance without the necessary technical support, which is why we offer a wide variety of different packages including video, sound, light and anything else you might need for your special day. Thanks to our experience of more than 700 artistic performances under the brand Gabriel Canelles Events, we work hard to guarantee your satisfaction.";
let text3 = "We approach every project with one goal in mind: creating a memorable experience for you and your guests. Our dedicated team is committed to providing the highest level of service to surpass your expectations and bring your vision to life, because at your event you should be carrying a cocktail, not a clipboard.  We are so happy you are here!";
let text4 = "A coming-of-age event is a once in a lifetime experience that deserves a significant memory to go with it. Capturing that moment in time and creating an indelible etching is an art form. We work with you and your family to make this the most personal, meaningful and beautiful moment to celebrate with family and friends.";
let text5 = "At Glamorous Event Planners, we know how important your event is for you. Whether it is your kids first birthday or your sisters bridal shower or even a corporate event for acknowledging and appreciating your employees  efforts—every event needs perfect execution to make it memorable. This is exactly what we’re here for! Glamorous Event Planners provide theme party planning and decorations to make your event spectacular and the talk of the town for weeks. We partner with trusted vendors and work closely with our clients to make every little detail according to their preferences. We provide our services in these areas.";
let fontcolor_img = document.querySelector('.fontclricon');
let bgcolor_img = document.querySelector('.backclricon');
let fontcolor_dropdown = document.querySelector('.fontcolor_dropdown');
let bgcolor_dropdown = document.querySelector('.bgcolor_dropdown');
let f_blue = document.querySelector('#font-blue');
let f_yellow = document.querySelector('#font-yellow');
let f_green = document.querySelector('#font-green');
let f_red = document.querySelector('#font-red');
let f_brown = document.querySelector('#font-brown');
let bg_lblue = document.querySelector('#bg-lblue');
let bg_lyellow = document.querySelector('#bg-lyellow');
let bg_lgreen = document.querySelector('#bg-lgreen');
let bg_lred = document.querySelector('#bg-lred');
let bg_lbrown = document.querySelector('#bg-lbrown');

fontcolor_img.addEventListener('mouseover', () => {
    fontcolor_img.src = 'icons/fontred.png';
}, 1000);
fontcolor_img.addEventListener('mouseout', () => {
    fontcolor_img.src = 'icons/fontclr.png';
}, 1000);
bgcolor_img.addEventListener('mouseover', () => {
    bgcolor_img.src = 'icons/bkred.png';
}, 1000);
bgcolor_img.addEventListener('mouseout', () => {
    bgcolor_img.src = 'icons/bk.png';
}, 1000);

fontcolor_img.addEventListener('click', () => {
    bgcolor_dropdown.classList.add("hide");
    fontcolor_dropdown.classList.toggle('hide');

});

bgcolor_img.addEventListener('click', () => {
    fontcolor_dropdown.classList.add("hide");
    bgcolor_dropdown.classList.toggle('hide');
});

i1.addEventListener('click', () => {
    image.src = "media/i1.jpg";
    description.innerText = text1;
    i1.classList.remove('show');
    i1.classList.add('hide');
    i2.classList.add('show');
    i3.classList.add('show');
    i4.classList.add('show');
    i5.classList.add('show');


});
i2.addEventListener('click', () => {
    image.src = "media/i2.jpg";
    description.innerText = text2;
    i2.classList.remove('show');
    i2.classList.add('hide');
    i1.classList.add('show');
    i3.classList.add('show');
    i4.classList.add('show');
    i5.classList.add('show');



});
i3.addEventListener('click', () => {
    image.src = "media/i3.jpg";
    description.innerText = text3;
    i3.classList.remove('show');
    i3.classList.add('hide');
    i1.classList.add('show');
    i2.classList.add('show');
    i4.classList.add('show');
    i5.classList.add('show');

});

i4.addEventListener('click', () => {
    image.src = "media/i4.jpg";
    description.innerText = text4;
    i4.classList.remove('show');
    i4.classList.add('hide');
    i1.classList.add('show');
    i2.classList.add('show');
    i3.classList.add('show');
    i5.classList.add('show');


});
i5.addEventListener('click', () => {
    image.src = "media/i5.jpg";
    description.innerText = text5;
    i5.classList.remove('show');
    i5.classList.add('hide');
    i1.classList.add('show');
    i2.classList.add('show');
    i3.classList.add('show');
    i4.classList.add('show');

});


f_blue.addEventListener('click', () => {
    description.style.cssText = "color:blue;";
});
f_yellow.addEventListener('click', () => {
    description.style.cssText = "color:yellow;";
});
f_green.addEventListener('click', () => {
    description.style.cssText = "color:green;";
});
f_red.addEventListener('click', () => {
    description.style.cssText = "color:red;";
});
f_brown.addEventListener('click', () => {
    description.style.cssText = "color:brown;";
});


bg_lblue.addEventListener('click', () => {
    description.style.cssText = "background-color:blue;";
});
bg_lyellow.addEventListener('click', () => {
    description.style.cssText = "background-color:yellow;";
});
bg_lgreen.addEventListener('click', () => {
    description.style.cssText = "background-color:green;";
});
bg_lred.addEventListener('click', () => {
    description.style.cssText = "background-color:red;";
});
bg_lbrown.addEventListener('click', () => {
    description.style.cssText = "background-color:brown;";
});
