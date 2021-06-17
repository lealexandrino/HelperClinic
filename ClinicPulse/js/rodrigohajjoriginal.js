$(function () {
    'use strict';
    var quotes = [
        'Leandro Alexandrino - Desenvolvedor'
    ];
    $('.quote').html(quotes[Math.floor(Math.random() * quotes.length)]);
    TweenLite.fromTo('.quote', 0.7, {
        alpha: 0,
        y: '-20px'
    }, {
        alpha: 1,
        y: '0',
        ease: Power2.easeOut
    });
    var aboutAnimation = new TimelineMax({ repeat: 0 });
    aboutAnimation.to('.load', 0.5, {
        autoAlpha: 0,
        y: '-40%',
        display: 'none',
        delay: 2
    }).set('.aboutAni', { scale: '1.001' }).from('.aboutAni', 1, {
        scale: 1,
        autoAlpha: 0,
        y: '20px',
        width: '100px',
        height: '20px',
        ease: Elastic.easeOut.config(1, 0.5)
    }).from('.text-design', 0.3, {
        autoAlpha: 0,
        y: '-20px',
        ease: Power3.easeOut
    }).from('.head', 0.5, {
        autoAlpha: 0,
        y: '-20px',
        ease: Power3.easeOut
    }).staggerFrom('.box', 0.5, {
        autoAlpha: 0,
        y: '-20px',
        ease: Power3.easeOut
    }, '.15', '-=.3').to('.text-design', 0.3, {
        display: 'none',
        autoAlpha: 0,
        y: '20px',
        ease: Power3.easeIn,
        delay: 0.5
    }).to('.design', 0.5, {
        autoAlpha: 0,
        y: '20px',
        ease: Power3.easeIn,
        display: 'none'
    }).to('.aboutAni', 1, {
        scale: '.3',
        ease: Elastic.easeInOut.config(1, 0.75)
    }, '-=.5').to('.aboutAni', 1, {
        rotation: '360deg',
        ease: Elastic.easeOut.config(1, 0.75)
    }, '-=.5').to('.aboutAni', 1, {
        scale: '1',
        ease: Elastic.easeInOut.config(1, 0.75)
    }, '-=.75').from('.text-develop', 0.3, {
        display: 'none',
        autoAlpha: 0,
        y: '-20px',
        ease: Power3.easeOut
    }, '-=.5').from('.develop', 0.5, {
        autoAlpha: 0,
        ease: Power3.easeOut
    }, '-=1').from('.sidebar', 0.5, {
        autoAlpha: 0,
        ease: Power3.easeOut,
        x: '-20px'
    }, '-=.3').staggerFrom('.line', 0.3, {
        autoAlpha: 0,
        y: '-20px',
        ease: Power4.easeOut
    }, '.15', '-=.3').to('.text-develop', 0.3, {
        display: 'none',
        autoAlpha: 0,
        y: '20px',
        ease: Power3.easeIn,
        delay: 0.7
    }).to('.develop', 0.5, {
        autoAlpha: 0,
        y: '20px',
        ease: Power3.easeIn
    }, '-=.3').to('.aboutAni', 1, {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        top: '50%',
        y: '-50%',
        ease: Elastic.easeInOut.config(1, 0.75)
    }).to('.aboutAni', 0.3, { autoAlpha: 0 }, '-=.3').fromTo('.browser', 1, {
        autoAlpha: 0,
        scale: 0.5
    }, {
        autoAlpha: 1,
        scale: 1,
        y: '-50%',
        borderRadius: '50%',
        ease: Elastic.easeOut.config(1, 0.75)
    }, '-=1').to('.browser', 1, {
        width: '100%',
        height: '210px',
        borderRadius: '5px',
        delay: 1,
        ease: Elastic.easeOut.config(1, 0.75)
    }, '-=.5').fromTo('.text-screen', 0.3, {
        autoAlpha: 0,
        y: '-10px'
    }, {
        autoAlpha: 1,
        y: '0'
    }, '-=.5').to('.icon', 0.3, {
        autoAlpha: 0,
        display: 'none',
        ease: Power3.easeIn
    }).fromTo('.header', 0.3, {
        autoAlpha: 0,
        y: '-10px'
    }, {
        autoAlpha: 1,
        y: '0'
    }).to('.header, .body', 0.3, {
        autoAlpha: 0,
        y: '10px',
        display: 'none',
        delay: 1.2
    }).to('.browser', 1, {
        width: '200px',
        ease: Elastic.easeOut.config(1, 0.75)
    }).fromTo('.tablet', 0.3, {
        autoAlpha: 0,
        y: '-10px'
    }, {
        autoAlpha: 1,
        y: '0'
    }, '-=.3').to('.tablet', 0.3, {
        autoAlpha: 0,
        y: '10px',
        display: 'none',
        delay: 0.7
    }).to('.browser', 1, {
        width: '90px',
        height: '160px',
        ease: Elastic.easeOut.config(1, 0.75)
    }).fromTo('.phone', 0.3, {
        autoAlpha: 0,
        y: '-10px'
    }, {
        autoAlpha: 1,
        y: '0'
    }, '-=.5').to('.text-screen', 0.3, {
        autoAlpha: 0,
        y: '10px',
        display: 'none',
        delay: 0.7
    }).fromTo('.text-web', 0.3, {
        autoAlpha: 0,
        y: '-10px'
    }, {
        autoAlpha: 1,
        y: '0'
    }).to('.phone', 0.3, {
        autoAlpha: 0,
        y: '10px',
        display: 'none'
    }).to('.body', 0, {
        autoAlpha: 1,
        y: '0',
        display: '',
        height: '100%',
        padding: 0
    }).to('.browser', 1, {
        width: '10px',
        height: '10px',
        ease: Elastic.easeInOut.config(1, 0.75)
    }).to('.browser', 1, {
        width: '200px',
        height: '200px',
        borderRadius: '5px',
        ease: Elastic.easeOut.config(1, 0.75)
    }, '-=.3').fromTo('.heart span', 0.5, { autoAlpha: 0 }, {
        autoAlpha: 1,
        fontSize: '100px',
        ease: Elastic.easeOut.config(1, 0.75)
    }, '-=1').to('.heart', 0.3, {
        autoAlpha: 0,
        y: '10px',
        display: 'none',
        delay: 0.7
    }).to('.text-web', 0.3, {
        autoAlpha: 0,
        y: '10px',
        display: 'none'
    }).to('.browser', 1, {
        width: '200px',
        height: '60px',
        borderRadius: '5px',
        ease: Elastic.easeOut.config(1, 0.75)
    }, '-=.5').fromTo('.more', 0.3, {
        alpha: 0,
        y: '-80%',
        display: ''
    }, {
        autoAlpha: 1,
        y: '-50%'
    }).to('.more', 0.3, {
        alpha: 0,
        y: '10px',
        display: 'none',
        delay: 1
    }).to('.browser', 0, {
        maxWidth: 'initial',
        maxHeight: 'initial'
    }).to('.browser', 1, {
        width: '100%',
        height: '100%',
        borderRadius: '0%',
        ease: Power4.easeOut
    }).to('.browser-wrap', 0.5, {
        autoAlpha: 0,
        display: 'none'
    }).fromTo('.about', 0.5, {
        autoAlpha: 0,
        y: '20px',
        display: 'none'
    }, {
        autoAlpha: 1,
        y: '0',
        display: '',
        onComplete: function () {
            $('.quote').html(quotes[Math.floor(Math.random() * quotes.length)]);
            $('#divMain').show();
        }
    });
    $(window).resize(function () {
        $('.browser-height').height($(this).height());
    });
    $(window).resize();
});