'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// # this version of code is overly complex
// for ( let i = 0; i < btnsOpenModal.length; i++ )
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// create smooth scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  //查看当前视窗长和宽
  // console.log(
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  //scrolling
  //确定现在向下滑动了多少（确定视口的左上角坐标）

  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });
});

// 189 Types of events and event handlers

const h1 = document.querySelector('h1');
const alerth1 = function (e) {
  alert('great!');
  // h1.removeEventListener('mouseenter', alerth1);
};
h1.addEventListener('mouseenter', alerth1);
//remove event after some time
setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 300);

//190 bubbling and capturing
//192 page navigation
//method1
//每一个a元素都会有一个自己的function，如果a元素很多，将导致页面反应缓慢
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//method2推荐--两步
//1.Add event listener to the common parent element; 2.determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smmoth',
    });
  }
});
// // 193 DOM traversing
// //queryselector can work directly on elements not only on document
// //select all child nodes of h1
// console.log(h1.childNodes);
// //select all elements inside h1
// console.log(h1.children);
// //set the attribute of child element
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';
// //find parent node/element
// // the immediate container that holds the <h1> element.
// console.log(h1.parentNode);
// //if no parent element, return null
// console.log(h1.parentElement);
// // this selects the closest parent element with this header class
// // closest is the opposite of querySelector. The former chooses parent element while the later chooses the child element
// h1.closest('.header').style.background = 'var(--gradient-secondary';
// //find the sibling element before this one
// console.log(h1.previousElementSibling);
// //find the next element
// console.log(h1.nextElementSibling);

//find sibling node
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// choose all child elements
// console.log(h1.parentElement.children);

//experiemnt with the operations above
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(1.5)';
// });
//194 building a tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
//NOT RECOMMENDED TO USE AS IT WILL SLOW DOWN PAGE LOADING!! tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));
//EVENT DELEGATION
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;
  //add active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  //Activate content area
  tabsContent.forEach(c => c.classList.remove(`operations__content--active`));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});
//195 passing arguments to event handlers
// Menu fade animation
const nav = document.querySelector('.nav__links');
//refactoring the code below👇
//an event handler(like below)can only take one 'argument'
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation
// Not recommended
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// Recommended way: intersection observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log( entry );
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
//199 Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgOberver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgOberver.observe(img));
// //selecting elements
// console.log(document.documentElement);
// console.log(document.head);

// document.querySelector('.header');
//  document.querySelectorAll('section');

//  document.getElementById('section--1');
//  document.getElementsByTagName('button');
//  document.getElementsByClassName('btn');

// //create and insert elements
// // version 1
// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <title>insertAdjacentHTML Example</title>
// // </head>
// // <body>
// //   <div id="myDiv">This is a div element.</div>

// //   <script>
// //     // Select the target element
// //     const targetElement = document.getElementById('myDiv');

// //     // HTML content to be inserted
// //     const htmlContent = '<p>This paragraph is inserted using insertAdjacentHTML.</p>';

// //     // Insert the HTML content before the target element
// //     targetElement.insertAdjacentHTML('beforebegin', htmlContent);

// //     // Insert the HTML content as the first child of the target element
// //     targetElement.insertAdjacentHTML('afterbegin', htmlContent);

// //     // Insert the HTML content as the last child of the target element
// //     targetElement.insertAdjacentHTML('beforeend', htmlContent);

// //     // Insert the HTML content after the target element
// //     targetElement.insertAdjacentHTML('afterend', htmlContent);
// //   </script>
// // </body>
// //   </html>;
// // version 2

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'quality control! <button class="btn btn--close--cookie">git it!</button>';
// const header = document.querySelector('.header');
// header.insertAdjacentElement('afterbegin', message); //或者header.prepend(message)
// // header.append(message);
// // header.before(message); //add as sibling element of header
// // header.after(message); // add as sibling element of header
// // delete elements
// // document
// //   .querySelector('.btn--close-cookie')
// //   .addEventListener('click', function () {
// //     //remove message element
// //     message.remove();
// //   });

// // 187 styles, attributes and classes
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// //get style information
// console.log(message.style.width); //get newly added attributes
// // get style info of attributes already existed
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseInt(getComputedStyle(message).height, 10) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes--look for element properties
// //只能查找常见的特性
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// //change attributes
// // logo.alt=''
// //look up for Non-standard attributes
// // console.log(logo.getAttribute(''));
// // logo.setAttribute('company','Bankist')
// //get the absolute and relative path of image source
// console.log(logo.getAttribute('src')); //reltive
// console.log(logo.src); //absolute
// //Data attributes
// console.log( logo.dataset.versionNumber );

// // Classes
// logo.classList.add( 'c' )
// logo.classList.remove( 'c' )
// logo.classList.toggle( 'c' )
// logo.classList.contains('c')
