const images = [
    {
        url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBmaXNofGVufDB8fDB8fHww',
        description: 'Diverse Species: Fish are the most diverse group of vertebrates, with over 33,000 known species found in various aquatic environments around the world.'
    },
    {
        url: 'https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_640.jpg',
        description: 'Breathing Mechanisms: Most fish breathe through gills that extract oxygen from water, but some species, like the lungfish, can breathe air using lungs.'
    },
    {
        url: 'https://i.pinimg.com/564x/2c/fc/78/2cfc781a48b86d104d51fd0c8f458ecd.jpg',
        description: 'Lateral Line System: Fish have a lateral line system, a series of sensory organs that detect water movements and vibrations, helping them navigate and hunt in their aquatic habitats.'
    },
    {
        url: 'https://static.vecteezy.com/system/resources/previews/024/060/837/large_2x/glowing-deep-sea-fish-a-mesmerizing-bioluminescent-wonder-ai-generated-free-photo.jpg',
        description: 'Reproduction Variations: Fish exhibit a wide range of reproductive strategies, from laying thousands of eggs to giving birth to live young. Some species can even change sex based on social conditions.'
    },
    {
        url: 'https://static.vecteezy.com/system/resources/previews/035/912/150/large_2x/ai-generated-fish-jumping-out-of-ocean-water-with-sky-view-photo.jpg',
        description: 'Migration Patterns: Many fish undertake long migrations for breeding purposes, such as salmon traveling from the ocean back to their freshwater birth streams, covering thousands of kilometers.'
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
