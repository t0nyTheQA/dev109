const images = [
    {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBmaXNofGVufDB8fDB8fHww',
        description: 'Description of Image 1'
    },
    {
        url: 'https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_640.jpg',
        description: 'Description of Image 2'
    },
    {
        url: 'https://i.pinimg.com/564x/2c/fc/78/2cfc781a48b86d104d51fd0c8f458ecd.jpg',
        description: 'Description of Image 3'
    },
    {
        url: 'https://static.vecteezy.com/system/resources/previews/024/060/837/large_2x/glowing-deep-sea-fish-a-mesmerizing-bioluminescent-wonder-ai-generated-free-photo.jpg',
        description: 'Description of Image 4'
    },
    {
        url: 'https://static.vecteezy.com/system/resources/previews/035/912/150/large_2x/ai-generated-fish-jumping-out-of-ocean-water-with-sky-view-photo.jpg',
        description: 'Description of Image 5'
    }
];

var currentIndex = 0;
var slideInterval;

var imageElement = document.getElementById('slideshow-image');
var descriptionElement = document.getElementById('slideshow-description');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    imageElement.src = images[currentIndex].url;
    descriptionElement.textContent = images[currentIndex].description;
}

function startSlideshow() {
    slideInterval = setInterval(function() {
        showImage(currentIndex + 1);
    }, 5000);
}

function resetSlideshow() {
    clearInterval(slideInterval);
    startSlideshow();
}

prevButton.addEventListener('click', function() {
    showImage(currentIndex - 1);
    resetSlideshow();
});

nextButton.addEventListener('click', function() {
    showImage(currentIndex + 1);
    resetSlideshow();
});

// Initialize the slideshow with the first image
showImage(currentIndex);
startSlideshow();
