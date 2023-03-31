const tagsElement = document.getElementById('tags');
const textAreaElement = document.getElementById('textarea');

textAreaElement.focus();

// (e) is the event parameter
textAreaElement.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {

        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect();
    }
});

function createTags(input) {

    // Whatever in on the either side of the comma, will be split and made into an array with respective values
    // const tags = input.split(',');

    // When two values are created for the array, you will notice the second value has a comma and we don't want it
    // filter() is a high-order array method that allows you to return certain things based on a conditinal
    // For each tag, trim if there's any whitespace if it's not equal to empty string, then return that
    // filter(tag => tag.trim(!== ''))
    // Manipulate the array, for each tag we want to return the tag but we want to trim
    // map(tag => tag.trim)

    // This is saying, can't be an empty string also trim any white space.
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    // console.log(tags);

    tagsElement.innerHTML = '';
    tags.forEach(tag => {

        // Let create a span
        const tagElement = document.createElement('span');

        // We will add a class to that
        tagElement.classList.add('tag');

        // Set the innerText to the tag from the loop
        tagElement.innerText = tag;
        tagsElement.appendChild(tagElement);
    });
}

function randomSelect() {

    // It will highlight 30 times
    const times = 30;

    // We will set the interval
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100)
    }, 100)
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}