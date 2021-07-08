

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	let scrollPos = 200;
	let header = document.getElementById('headertwo');
	if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos){
		header.classList.add('headactive');
	} else{
		header.classList.remove('headactive');
	}
};


const tabsBtn = document.querySelectorAll('.tab');
const tabsForm = document.querySelectorAll('.tab-form');


tabsBtn.forEach(OnTabClick);

function OnTabClick(item){
	item.addEventListener('click', function(){
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);
		if(!currentBtn.classList.contains('tabactive')){
			tabsBtn.forEach(function(item){
				item.classList.remove('tabactive');
				item.classList.add('tabnotactive');
			});
			tabsForm.forEach(function(item){
				item.classList.remove('formactive');
			});
			currentBtn.classList.add('tabactive');
			currentTab.classList.add('formactive');
		};
		if ($('.tabactive.tabnotactive')){
			$('.tabactive.tabnotactive').removeClass('tabnotactive');
		};
	});
}

document.querySelector('.tab').click();






/*POPUP*/

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0){
	for (let i = 0; i < popupLinks.length; i++){
		const popupLink = popupLinks[i];
		popupLink.addEventListener('click', function(item){
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			item.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0){
	for (let i = 0; i < popupCloseIcon.length; i++){
		const el = popupCloseIcon[i];
		el.addEventListener('click', function(item) {
			popupClose(el.closest('.popup'));
			item.preventDefault();
		});
	}
}

function popupOpen(currentPopup){
	if (currentPopup && unlock){
		const popupActive = document.querySelector('.popup.open');
		if (popupActive){
			popupClose(popupActive, false);
		}
		else{
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function(item){
			if (!item.target.closest('.dws-wrapper')){
				popupClose(item.target.closest('.popup'));
			}
		});
	}
}


function popupClose(popupActive, doUnlock = true){
	if (unlock){
		popupActive.classList.remove('open');
		if (doUnlock){
			bodyUnLock();
		}
	}
}

function bodyLock(){
	const lockPaddingValue = window.innerWidth - document.querySelector('.pages').offsetWidth + 'px';
	if (lockPadding.length > 0){
		for (let i = 0; i < lockPadding.length; i++){
			const el = lockPadding[i];
			el.style.paddingRight = LockPaddingValue;
		}

	}
	body.classList.add('lock');

	unlock = false;
	setTimeout(function(){
		unlock = true;
	}, timeout);

}

function bodyUnLock(){
	setTimeout(function(){
		if (lockPadding.length > 0){
			for (let i = 0; i < lockPadding.length; i++){
				const el = lockPaddingp[i];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function(){
		unlock = true;
	}, timeout);


}

document.addEventListener('keydown', function(item){
	if (item.which === 27){
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});


$('.popup-link').click(function (e) {
	e.preventDefault();
	$('.popup').addClass('open');
});
$('.header__button').click(function (e) {
	e.preventDefault();
	$('.popup').addClass('open');
});

$('.burger-link').click(function (e) {
	e.preventDefault();
	$('.burger-popup').addClass('open');
});
$('.faculties').click(function (e) {
	e.preventDefault();
	if ($(".link__inner").hasClass("activefac")){
		$(".link__inner").removeClass("activefac");
	} else {
		$(".link__inner").addClass("activefac");
	}
});
$('.burger__close').click(function (e) {
	e.preventDefault();
	$('.burger-popup').removeClass('open');
});

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots: true,
		speed: 1250,
		easing: "linear",
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false,
		touchThreshold: 10,
		centerMode: true,
	});
	$('.mk_slider').slick({
		arrows:true,
		dots: false,
		speed: 1000,
		easing: "linear",
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false,
		touchThreshold: 10,
		centerMode: true,
	});

});

var n = 30,
speed = 15,
startSize = rand(200,400),
c = document.getElementById("contentone"),
ctx = c.getContext("2d"),
mousePos = {x:"", y:""},
img = new Image(),
particles = [],
particleNumber = 0,
Particle = function(index) {
    this.index = index;
    this.dur = (100-rand(9, 90))/speed;
    this.draw = function() {
        ctx.translate( this.x, this.y );
        ctx.globalAlpha = this.alpha;
        ctx.globalCompositeOperation = 'lighter';
        if (index%2==0) ctx.globalCompositeOperation = 'xor';
        ctx.drawImage(img, -this.size/2, -this.size/2, this.size, this.size);
        ctx.translate( -this.x, -this.y );
    }
};
c.onmousemove = function(e){ mousePos = { x:e.clientX - c.getBoundingClientRect().left, y:e.clientY - c.getBoundingClientRect().top }; }
c.onmouseleave = function(e){ mousePos = {x:"", y:""} }
function setParticle(p, firstRun) {
    var _x = cw*rand(0,1), _y = ch*rand(0,1), _s = startSize;
    if (rand(0,1)>0.3 && mousePos.x!=""){
        _x = mousePos.x;
        _y = mousePos.y;
        _s = _s/10;
    }
    var _tl = new TimelineMax()
    .fromTo(p, p.dur, {
        x:_x,
        y:_y,
        size:_s,
        alpha:0
        },{
        size:'+='+String(rand(200,400)),
        bezier:[{alpha:rand(0.15,0.65)},{alpha:0}],
        ease:Power1.easeOut,
        onComplete:function(){ setParticle(p); }
    });
    if (firstRun) _tl.seek(p.dur*rand()); 
}
TweenMax.ticker.addEventListener("tick", function(){
    ctx.clearRect(0, 0, cw, ch);
    for (var i=0; i<n; i++) particles[i].draw();
});
window.addEventListener('resize', doResize)
function doResize() {
    particleNumber = 0;  
    cw = (c.width = c.offsetWidth);
    ch = (c.height = 500);
    for (var i=0; i<n; i++) {
        TweenMax.killTweensOf(particles[i]);
        setParticle(particles[i], true);
    }
    TweenMax.fromTo(c, 0.3, {alpha:0},{alpha:1, ease:Power3.easeInOut});
}
for (var i=0; i<n; i++) particles.push(new Particle(i));
doResize();
function rand(min, max) {
    (min) ? min=min : min=0;
    (max) ? max=max : max=1;
    return min + (max-min)*Math.random();
}
img.src = "../img/fon-4.png";