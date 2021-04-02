// getting ref to the prev button on html page
const prevbutton = document.querySelector('#prev-btn');

// getting ref to the next button on html page
const nextbutton = document.querySelector('#next-btn');

// getting ref to the p tag with the class of author-speech on html page
const speech = document.querySelector('.author-speech');

// getting ref to the h4 with the id of authorName within author-bio
const authorName = document.querySelector('#authorName');

// getting ref to the span tag with id or profession within author-bio
const profession = document.querySelector('#profession');

//getting ref to the author image
const author1 = document.querySelector('.author1')


// settiing the prev button to change on click
prevbutton.addEventListener('click', () => {

    speech.textContent = ' I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.' ;

    authorName.textContent = 'Tanya Sinclair';

    profession.textContent = 'UX Engineer';

    author1.setAttribute('src', 'assets/images/image-tanya.jpg')

});

// settiing the next button to change on click
nextbutton.addEventListener('click', () => {
    // change the content with the class variable name speech
    speech.textContent = 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer' ;

     // change the text with the class variable authorName
    authorName.textContent = 'John Tarkpor';

     // change the content with the class variable profession
    profession.textContent = 'Junior Front-end Developer';

    // change the 
    author1.setAttribute('src', 'assets/images/image-john.jpg')

})


