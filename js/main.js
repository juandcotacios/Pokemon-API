

$(document).ready(function () {
    $("#my-button").on("click", function () {
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + $("#txt-buscar").val(),
            type: "GET",
            contentType: "application/json",
            success: function (data) {
                $('#img_error404').hide();
                $('#imgtxt_error404').hide();
                console.log(data.sprites.other.home.front_default)
                $("#imagen_pokemon").html(`<img src="${data.sprites.other.home.front_default}">`)

                console.log(data.sprites.other.home.front_shiny)
                $("#imagen_pokemon_shiny").html(`<img src="${data.sprites.other.home.front_shiny}">`)

                console.log(data.base_experience)
                $("#type_pokemon").html(`<p>Base Experience:${data.base_experience}</p>`)

                console.log(data.weight)
                $("#weight_pokemon").html(`<p>Pokemón weight:${data.weight}kg </p>`)

                console.log(data.id)
                $("#id_pokemon").html(`<p>ID#:${data.id}</p>`)

                console.log(data.height)
                $("#height_pokemon").html(`<p>Pokemón height:${data.height}cm</p>`)

                console.log(data.name)
                $("#name_pokemon").html(`<p>Name:${data.name}</p>`)

                console.log(data.types[0].type.name)
                $("#types_pokemon").html(`<p>Types:${JSON.stringify(data.types[0].type.name)}</p>`)

                if (data.types.length > 1) {
                    console.log(data.types[1].type.name)
                    $("#types2_pokemon").html(`<p>${JSON.stringify(data.types[1].type.name)}</p>`)

                } else {
                    $("#types2_pokemon").html('');
                }

                console.log(data.abilities[0].ability.name)
                $("#pokemon_abilities").html(`<p>abilities:${JSON.stringify(data.abilities[0].ability.name)}</p>`)

                if (data.abilities.length > 1) {
                    console.log(data.abilities[1].ability.name)
                    $("#pokemon_abilities2").html(`<p>${JSON.stringify(data.abilities[1].ability.name)}</p>`)

                } if (data.abilities.length > 2) {
                    console.log(data.abilities[2].ability.name)
                    $("#pokemon_abilities3").html(`<p>${JSON.stringify(data.abilities[2].ability.name)}</p>`)

                } else {
                    $("#pokemon_abilities2").html('');
                    $("#pokemon_abilities3").html('');
                }

                console.log(data.stats[0].base_stat)
                $("#statsHP_pokemon").html(`<p>Stats HP:${JSON.stringify(data.stats[0].base_stat)}</p>`)

                console.log(data.stats[1].base_stat)
                $("#statsAttack_pokemon").html(`<p>Attack:${JSON.stringify(data.stats[1].base_stat)}</p>`)

                console.log(data.stats[2].base_stat)
                $("#statsDefense_pokemon").html(`<p>Defence:${JSON.stringify(data.stats[2].base_stat)}</p>`)

                console.log(data.stats[3].base_stat)
                $("#statsSpecial-Attack_pokemon").html(`<p>Special Attack:${JSON.stringify(data.stats[3].base_stat)}</p>`)

                console.log(data.stats[4].base_stat)
                $("#statsSpecial-defense_pokemon").html(`<p>Special Defense:${JSON.stringify(data.stats[4].base_stat)}</p>`)

                console.log(data.stats[5].base_stat)
                $("#statsSpeed_pokemon").html(`<p>Speed:${JSON.stringify(data.stats[5].base_stat)}</p>`)


            },
            error: function (xhr, status, error, TypeError) {
               
                $('#img_error404').show();
                $('#imgtxt_error404').show();
              
                $("#imagen_pokemon").html('');
                $("#imagen_pokemon_shiny").html('');
                $("#type_pokemon").html('');
                $("#weight_pokemon").html('');
                $("#id_pokemon").html('');
                $("#height_pokemon").html('');
                $("#name_pokemon").html('');
                $("#types_pokemon").html('');
                $("#types2_pokemon").html('');
                $("#name_pokemon").html('');
                $("#pokemon_abilities").html('');
                $("#pokemon_abilities2").html('');
                $("#pokemon_abilities3").html('');
                $("#statsHP_pokemon").html('');
                $("#statsAttack_pokemon").html('');
                $("#statsDefense_pokemon").html('');
                $("#statsSpecial-Attack_pokemon").html('');
                $("#statsSpecial-defense_pokemon").html('');
                $("#statsSpeed_pokemon").html('');
            }
        })
    })
})

var artyom = new Artyom();

$(document).ready(function(){
    $("#activar").on("click",function(){
        artyom.say("Activated sound");
    })
})


artyom.initialize({
    lang:"en-US",
    debug:true,
    listen:true,
    continuous: true,
    speed:0.9,
    mode:"normal"
});

artyom.addCommands({
    indexes: ["final"],
    action: function(i){
        if(i == 0){
            artyom.say("Thanks for use Artyom");
        }
    }
});


artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
    if(isFinal){
        console.log("Texto final reconocido: " + recognized);
    }else{
        console.log(recognized);
    }
});


artyom.redirectRecognizedTextOutput(function(recognized, isFinal) {
    if(isFinal) {
        console.log("Texto final reconocido: " + recognized);
        // Actualiza el valor del campo de búsqueda
        $("#txt-buscar").val(recognized.trim().toLowerCase());
    } else {
        console.log(recognized);
    }
});
