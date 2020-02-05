const books = document.querySelector('.books'),
      elem = document.querySelectorAll('.book');
books.insertBefore(elem[0], elem[2]);
books.insertBefore(elem[4], elem[2]);
books.insertBefore(elem[3], elem[2]);
books.insertBefore(elem[2], elem[6]);

const body = document.querySelector('body');
body.style.cssText = `background-image: url(./image/you-dont-know-js.jpg);`;

const linkFix = document.querySelectorAll('a');
linkFix[2].textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

const ulList = document.querySelectorAll('ul'),
      liList = document.querySelectorAll('li');   
ulList[1].insertBefore(liList[8], liList[16]);
ulList[1].insertBefore(liList[12], liList[10]);
ulList[1].insertBefore(liList[14], liList[10]);

ulList[4].insertBefore(liList[45], liList[38]);
ulList[4].insertBefore(liList[38], liList[41]);
ulList[4].insertBefore(liList[41], liList[44]);

const clone = liList[55].cloneNode();
clone.textContent = 'Глава 8: За пределами ES6';

ulList[5].insertBefore(clone, liList[56]);