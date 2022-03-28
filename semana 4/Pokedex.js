const fetchPokemon = (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url).then((res) => {
        // respuesta del get (status 200 etc)
        if (res.status != "200"){
            pokeImage("../assets/img/pokebola.jpg")
        }
        else{
            return res.json();
        } 
    }).then((data) => {
        //data de la respuesta
        //console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNum = data.id;
        let pokeNam = data.name;
        pokeNam = pokeNam[0].toUpperCase() + pokeNam.slice(1);

        let PData = document.getElementById("Name");
        let PData2 = document.getElementById("NumP");
        PData.innerHTML = `${pokeNam} `;
        PData2.innerHTML = `N${pokeNum}`;

        pokeImage(pokeImg);
    });
};

function inicio() {
    document.querySelector('.pokedex').style.display = 'flex';  
    document.querySelector('.placa-esquerda').style.display = 'block';
    document.querySelector('.placa-direita').style.display = 'flex';
    document.querySelector('.sup-lateral1').style.display = 'block';
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("PK");
    pokeImg.src = url;
}

const imprimir = () => {
    const pokeName = document.getElementById("PN");
    if (pokeName.value != '' && pokeName.value != '0'){
        fetchPokemon(pokeName.value.toLowerCase());
    }
}

const right = () => {
    let next = document.getElementById("NumP").innerHTML;
    let next2 = 0;
    if (next != ''){
        next = next.slice(1);
        next = parseInt(next);
        if (next == 151 || next == 0) {
            next2 = 1;
        }else{
            next2 = next + 1;
        }
        let number = document.getElementById("PN");
        number.value = `${next2}`;
        
        fetchPokemon(next2);
    }

}

const left = () => {
    let back = document.getElementById("NumP").innerHTML;
    let back2 = 0;
    if (back != ''){
        back = back.slice(1);
        back = parseInt(back);
        if (back == 1 || back == 0) {
            back2 = 151;
        } else{
            back2 = back - 1;
        }
        let number = document.getElementById("PN");
        number.value = `${back2}`;
        fetchPokemon(back2);
    }
}
