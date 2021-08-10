export class Pokedex{
    constructor(pokemon, records_per_page, current_page){
        this.pokemon = pokemon;
        this.records_per_page = records_per_page;
        this.current_page = current_page;
    }

    getAll_pokemon(){
        const pokemons = [];
        for (let i = 1; i <= 150; i++) {
            const api = `https://pokeapi.co/api/v2/pokemon/${i}`;
            pokemons.push(fetch(api)
                .then((res) => res.json()
                ))
       };

        Promise.all(pokemons)
        .catch(
            pokemonContainer.innerHTML = "<div id='loading'></div>"
            )
        .then((results) => {
            const allPokemon = results.map((result) => ({
                id: result.id,
                name: result.name,
                image: result.sprites['front_default'],
                types: result.types,
                stats: result.stats,
                weight: result.weight/10,
                height: result.height/10
            }));
            this.pokemon = allPokemon;
            this.display_pokemon(1);
        });
    };

    setRecordsPerPage(records_per_page){
        this.records_per_page = records_per_page;
        return true;
    }

    setCurrentPage(current_page){
        this.current_page = current_page;
        return true;
    }

    display_pokemon(page){
        const pokemonContainer = document.getElementById("pokemonContainer");
        const btn_next = document.getElementById("btn_next");
        const btn_prev = document.getElementById("btn_prev");
        const page_span = document.getElementById("page");
        
        // Validate page
        if (page < 1) page = 1;
        if (page > this.numPages()) page = this.numPages();

        pokemonContainer.innerHTML = "";

        for (let i = (page-1) * this.records_per_page; i < (page * this.records_per_page); i++) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            let pokemon_id; 
            
            if( this.pokemon[i].id < 10){
                pokemon_id = "0" +  this.pokemon[i].id;
            } else {
                pokemon_id =  this.pokemon[i].id;
            }
            td1.innerText =  pokemon_id;
            const td2 = document.createElement("td");
            td2.classList.add("pokemonName")
            td2.innerText = this.pokemon[i].name;
            const td3 = document.createElement("td");
            const img = document.createElement("img");
            img.src = this.pokemon[i].image;
            td3.appendChild(img);           

            tr.append(td1, td2, td3);

            const pokemon = this;
            tr.addEventListener("click", function(){
                pokemon.showPokemon(pokemon.pokemon[i]);
            }, false);
            pokemonContainer.appendChild(tr);
        }

        page_span.innerHTML = `${page}/${this.numPages()}`;

        if (page == 1) {
            btn_prev.style.visibility = "hidden";
            btn_first.style.visibility = "hidden";
        } else {
            btn_prev.style.visibility = "visible";
            btn_first.style.visibility = "visible";
        }
    
        if (page == this.numPages()) {
            btn_next.style.visibility = "hidden";
            btn_last.style.visibility = "hidden";
        } else {
            btn_next.style.visibility = "visible";
            btn_last.style.visibility = "visible";
        }
    }

    numPages(){
        return Math.ceil(this.pokemon.length / this.records_per_page);
    }

    showPokemon(pokemon){
        const height = document.getElementById("height");
        const weight = document.getElementById("weight");
        const pokemonType = document.getElementById("type");
        pokemonType.innerText = "";
        const pokemonImg = document.getElementById("pokemonImg");
        const pokemonName = document.getElementById("pokemonName");

        pokemon.stats.forEach(stat => {
            try {
                const statDiv = document.getElementById(stat.stat.name);
                if(statDiv !== null){
                    statDiv.style.width =  `${2*stat.base_stat}px`;
                    statDiv.nextElementSibling.innerText = stat.base_stat;
                }
            } catch (error) {
                console.log(error);
            }
        })


        pokemon.types.forEach(type => {
            const img = document.createElement('img');
            img.src = `../assets/type_icon/${type.type.name}.png`;
            img.classList.add('typeImg');
            img.alt = type.type.name;
            img.addEventListener("mouseover", function(){
                document.getElementById("typeText").innerText = this.alt;
            });
            img.addEventListener("mouseout", function(){
                document.getElementById("typeText").innerText = "";
            });
            pokemonType.appendChild(img);
        })

        pokemonName.innerText = pokemon.name;
        pokemonImg.src = pokemon.image;
        height.innerText = `${pokemon.height} m`;
        weight.innerText = `${pokemon.weight} kg`;
    }
}


