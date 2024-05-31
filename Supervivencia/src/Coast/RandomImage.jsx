import data from '/public/Coast/imagenes.json';


const json = data;

function randomImage(id){

    return json[id-1]; 
   
}

function longData(){
    return data.length;
}


export default {
    randomImage,
    longData,
  };
  