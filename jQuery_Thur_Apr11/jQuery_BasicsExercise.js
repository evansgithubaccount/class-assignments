$(document).ready(function() {
    $('header:first');   //gets the first <header> element
    $('section');   //gets all of the <section> elements
    let currentSection = $('section.current');   //gets the <section> element with the class 'current' and assigns it to the variable 'currentSection'
    currentSection.next();   //gets the <section> element that comes directly after the 'currentSection' element
    currentSection.prev().find('h2');   //gets the <h2> node from the <section> that comes directly before the 'currentSection' element
    $('.highlight').parent().parent();   //gets the <div> that contains a <section> that has a <h2> element with a class of 'highlight'
    let allH2 = Array.from($('section').find('h2'));   //gets all of the <section>s that have an <h2> element and stores them in an array
})