

    function createGrid(size=16){
    const container = document.querySelector(".grid-container");

    //we want to cehck if grid already exists and then clear it out)
    if(container.hasChildNodes){
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }

    }

    let length = size; //update later to an argument

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
    }}

    createGrid();

    function newGrid(){
        size=window.prompt("Please provide a length between 1-100");

        if(0<size<101){
            createGrid(size)
        }
    }






   
    
