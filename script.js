document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit');
    const randomBeer = document.querySelector('.random');
    const descriptionDisplay = document.querySelector('.description');

    function getBeer(e) {
        e.preventDefault();

    

        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
           
            const name = data[0].name
            const description = data[0].description
            const {volume} = data[0]
            const volumeValue = volume.value
            const volumeUnit = volume.unit
            console.log(description);
            randomBeer.innerHTML = name + '' + volumeValue + volumeUnit, descriptionDisplay.innerHTML = description;
    
        })

    }
        

    

    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
       
        const name = data[0].name
        const description = data[0].description
        const {volume} = data[0]
        const volumeValue = volume.value
        const volumeUnit = volume.unit
        console.log(description);
        randomBeer.innerHTML = name + '' + volumeValue + volumeUnit, descriptionDisplay.innerHTML = description;

    })



submitBtn.addEventListener('click', getBeer);
})