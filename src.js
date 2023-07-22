


    const container = document.querySelector(".grid-container");

    let length = 16; //update later to an argument

    for (let index = 0; index < length; index++) {
        let gridRow = document.createElement('div');
        gridRow.setAttribute('class', 'grid-row');                              
        
    for (let i= 0; i< length; i++){
        let tile = document.createElement('div')
        tile.setAttribute('class','tile')
       tile.addEventListener('mouseover',function(e){
        
        r=String(Math.round(Math.random()*255))
        g=String(Math.round(Math.random()*255))
        b=String(Math.round(Math.random()*255))
        
        
        let randomColor= "rgb(" + r +', ' + g + ", "+ b +")"
        console.log(randomColor)
        e.target.style.backgroundColor=randomColor;
       });
        // tile.textContent= index.toString() + " : " + i.toString()
        gridRow.appendChild(tile)
    }

    container.appendChild(gridRow)
    }




   
    
