(function () {

	const images = [
        'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1001&q=80',
        'https://images.unsplash.com/photo-1533979640417-546cbced58b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        'https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1573566472937-1fa7a6230e93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80',
        'https://images.unsplash.com/photo-1606422699425-f7122890005f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80'
	]

    let position = 0;
    let previousPosition = images.length-1;
    let nextPosition = 1;

    let mainImage = document.getElementById('mainImage');
    let previousImage = document.getElementById('previousImage');
    let nextImage = document.getElementById('nextImage');

    let timer = null;

    function changeImages(direction){
        
        switch (direction){
            case 'next':
                position === images.length-1 ? position = 0 : position ++;
                break;
            case 'previous':
                position !== 0 ? position -- : position = images.length -1;
                break;
            case 'random':
                position = Math.floor(Math.random()*images.length);
                break;
        }

        position === 0 ? previousPosition = images.length -1 : previousPosition = position - 1;
        position === images.length-1 ? nextPosition = 0 : nextPosition = position + 1;

        mainImage.setAttribute('src', images[position]);
        previousImage.setAttribute('src', images[previousPosition]);
        nextImage.setAttribute('src', images[nextPosition]);
        
    }

    
    function play() {
        changeImages('next');
    }


	document.getElementById('previous').addEventListener("click", () => {
        changeImages('previous');
	});


	document.getElementById('next').addEventListener("click", () => {
        changeImages('next');
	});


    document.getElementById('random').addEventListener("click", () => {
        changeImages('random');
	});

    
    document.getElementById('play').addEventListener("click", () => {

        document.getElementById('play').style.display = 'none';
        document.getElementById('pause').style.display = 'block';

        timer = setInterval(play, 3000);

	});

    document.getElementById('pause').addEventListener("click", () => {
        
        document.getElementById('pause').style.display = 'none';
        document.getElementById('play').style.display = 'block';

        clearInterval(timer);

	});

})();