// Array with images from images folder
const images = [
    {
        'src': '/images/ottawa-nature-1-300.png',
        'alt': 'Ducks Sleeping in the Lake',
        'data-large': '/images/ottawa-nature-1-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-2-300.png',
        'alt': 'Duck in the Lake',
        'data-large': '/images/ottawa-nature-2-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-3-300.png',
        'alt': 'Duck Diving in the Lake',
        'data-large': '/images/ottawa-nature-3-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-4-300.png',
        'alt': 'Ducks Walking',
        'data-large': '/images/ottawa-nature-4-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-5-300.png',
        'alt': 'Duck Swimming in the Lake',
        'data-large': '/images/ottawa-nature-5-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-6-300.png',
        'alt': 'Duck Jumping in the Lake',
        'data-large': '/images/ottawa-nature-6-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-7-300.png',
        'alt': 'Dragonfly on Leaf',
        'data-large': '/images/ottawa-nature-7-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-8-300.png',
        'alt': 'Bird Feeding',
        'data-large': '/images/ottawa-nature-8-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-9-300.png',
        'alt': 'Chipmunk Feeding',
        'data-large': '/images/ottawa-nature-9-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-10-300.png',
        'alt': 'Ladybird on Leaf',
        'data-large': '/images/ottawa-nature-10-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-11-300.png',
        'alt': 'Pink Flowers',
        'data-large': '/images/ottawa-nature-11-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
    {
        'src': '/images/ottawa-nature-12-300.png',
        'alt': 'Fruitful Tree',
        'data-large': '/images/ottawa-nature-12-1600.png',
        'data-source': 'Vanessa Isabela Denny',
    },
]

// List on hold to add the image printed in the screen
let list = []
let $gallery = document.getElementById('gallery')
let i = 0

// For to add each array item in the gallery div
for (const image of images) {
    list.push(`
        <div class="grid-item">
            <img
                src="${image["src"]}"
                alt="${image["alt"]}"
                data-large="${image["data-large"]}"
                data-source="${image["data-source"]}"
                data-index="${i}" 
            >
            <div data-index="${i++}" class="modal"></div>
        </div>
    `)
}
$gallery.innerHTML = list.join('')

// Open the large size of the image when clicking
const $imgs = document.querySelectorAll('.grid-item img')
for(let $img of $imgs) {
    $img.addEventListener('click', function (e) {
        const index = e.target.dataset.index;
        const element = document.querySelector(`[data-index="${index}"].modal`);

        // Adding attributes to the image opened
        if (element) {
            element.style.backgroundImage = `url('${e.target.dataset.large}')`;
            element.innerHTML = `
                <p>${e.target.alt} <br>
                <small>Taken by ${e.target.dataset.source}</small>
                </p>`;
                
            element.classList.add('show');
            // Scroll to top when opening an image
            window.scrollTo(0,0)
        }
    })
}

// Close the modal when clicking in the large image opened
const $modals = document.querySelectorAll('.modal')
$modals.forEach(($modal) => {
    $modal.addEventListener('click', function (e) {
        const index = e.target.dataset.index;
        const element = document.querySelector(`[data-index="${index}"].modal`);
        
        if (element) element.classList.remove('show')
    })
})