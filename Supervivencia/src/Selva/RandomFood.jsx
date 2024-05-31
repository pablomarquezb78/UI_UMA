import data from './alimentos-veneno.json';


const json = data;

function randomFood(id){

    return json[id-1]; 
   
}

function longData(){
    return data.length;
}

function isDangerous(id){

    return json[id-1].mortalidad;
}


export default {
    randomFood,
    longData,
    isDangerous,
  };
  