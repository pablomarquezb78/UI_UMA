import data from './alimentos-veneno.json';


const json = data;

function randomFood(id){

    return json[id-1]; 
   
}

function longData(){
    return data.length;
}


export default {
    randomFood,
    longData,
  };
  