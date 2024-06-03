import data from '/public/Selva/alimentos-veneno.json';


const json = data;

function randomFood(id){

    return json[id-1]; 
   
}

function longData(){
    return data.length;
}

function isDangerous(id){

    return json[id-1].Mortalidad;
}


export default {
    randomFood,
    longData,
    isDangerous,
  };
  