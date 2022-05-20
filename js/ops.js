const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        // console.log(anchor);
        const sectionId = anchor.getAttribute('href').substr(1);
        // console.log(sectionId);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}