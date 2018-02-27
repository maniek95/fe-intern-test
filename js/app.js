/*

    Use https://codewise-fe-api.herokuapp.com/photos endpoint, to get list of objects that contain photos data, e.g.:

    {
        "width":5616,
        "height":3744,
        "author":"Alejandro Escamilla",
        "url":"https://unsplash.com/photos/N7XodRrbzS0/download"
    }

    This endpoint accepts two query parameters: 'offset' and 'limit'. If you use endpoint like this:
    https://codewise-fe-api.herokuapp.com/photos?offset=0&limit=5
    it will return first 5 records from the database,

    if you use it like this:
    https://codewise-fe-api.herokuapp.com/photos?offset=10&limit=5
    it will return records no. 10-14 end so on.

    If you don't pass any parameters, offset is set to 0 end limit is set to 50.
    
    To use lightweight placeholder images instead of real photos, set truthy value for 'placeholders' parameter, e.g.
    https://codewise-fe-api.herokuapp.com/photos?placeholders=1, or
    https://codewise-fe-api.herokuapp.com/photos?offset=10&limit=5&placeholders=1

    

*/

//static loading of images 
var source = [{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/yC-Yzbqy7PY/download"},{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/LNRyGwIJr5c/download"},{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/N7XodRrbzS0/download"},{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/Dl6jeyfihLk/download"},{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/y83Je1OC6Wc/download"},{"width":5245,"height":3497,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/LF8gK8-HGSg/download"},{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/tAKXap853rY/download"},{"width":4728,"height":3168,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/BbQLHCpVUqA/download"},{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/xII7efH1G6o/download"},{"width":5616,"height":3672,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/ABDTiLqDhJA/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/6J--NXulQCs/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/Cm7oKel-X2Q/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/I_9ILwtsl_k/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/3MtiSMdnoCo/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/IQ1kOQTJrOQ/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/NYDo21ssGao/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/gkT4FfgHO5o/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/Ven2CV8IJ5A/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/Ps2n0rShqaM/download"},{"width":2500,"height":1667,"author":"Paul Jarvis","url":"https://unsplash.com/photos/P7Lh0usGcuk/download"},{"width":3670,"height":2462,"author":"Aleks Dorohovich","url":"https://unsplash.com/photos/nJdwUHmaY8A/download"},{"width":3008,"height":2008,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/jVb0mSn0LbE/download"},{"width":4434,"height":3729,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/du_OrQAA4r0/download"},{"width":3887,"height":4899,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/8yqds_91OLw/download"},{"width":4855,"height":1803,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/cZhUxIQjILg/download"},{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/Iuq0EL4EINY/download"},{"width":4209,"height":2769,"author":"Vadim Sherbakov","url":"https://unsplash.com/photos/tCICLJ5ktBE/download"},{"width":3264,"height":1836,"author":"Yoni Kaplan-Nadel","url":"https://unsplash.com/photos/iJnZwLBOB1I/download"},{"width":4928,"height":3264,"author":"Jerry Adney","url":"https://unsplash.com/photos/_WiFMBRT7Aw/download"},{"width":4000,"height":2670,"author":"Go Wild","url":"https://unsplash.com/photos/V0yAek6BgGk/download"},{"width":1280,"height":901,"author":"Shyamanta Baruah","url":"https://unsplash.com/photos/aeVA-j1y2BY/download"},{"width":3264,"height":4912,"author":"How-Soon Ngu","url":"https://unsplash.com/photos/7Vz3DtQDT3Q/download"},{"width":4032,"height":3024,"author":"Rodrigo Melo","url":"https://unsplash.com/photos/eG3k60PrTGY/download"},{"width":5616,"height":3744,"author":"Alejandro Escamilla","url":"https://unsplash.com/photos/LBI7cgq3pbM/download"},{"width":3872,"height":2592,"author":"Aleks Dorohovich","url":"https://unsplash.com/photos/zZvsEMPxjIA/download"},{"width":2758,"height":3622,"author":"Shane Colella","url":"https://unsplash.com/photos/znM0ujn2RUA/download"},{"width":4179,"height":2790,"author":"Vadim Sherbakov","url":"https://unsplash.com/photos/osSryggkso4/download"},{"width":2000,"height":1333,"author":"Austin Neill","url":"https://unsplash.com/photos/erTjj730fMk/download"},{"width":1280,"height":960,"author":"Allyson Souza","url":"https://unsplash.com/photos/JabLtzJl8bc/download"},{"width":3456,"height":2304,"author":"Luke Chesser","url":"https://unsplash.com/photos/pFqrYbhIAXs/download"},{"width":4106,"height":2806,"author":"Ryan Mcguire","url":"https://unsplash.com/photos/N-1XGL54pQg/download"},{"width":1280,"height":805,"author":"Nithya Ramanujam","url":"https://unsplash.com/photos/fTKetYpEKNQ/download"},{"width":3456,"height":2304,"author":"Luke Chesser","url":"https://unsplash.com/photos/KR2mdHJ5qMg/download"},{"width":1280,"height":831,"author":"Oleg Chursin","url":"https://unsplash.com/photos/IoCWq07GaG4/download"},{"width":4272,"height":2848,"author":"Christopher Sardegna","url":"https://unsplash.com/photos/R1E6x8U83Ho/download"},{"width":4592,"height":2576,"author":"Alan Haverty","url":"https://unsplash.com/photos/-XA-fTYYfV0/download"},{"width":3264,"height":2448,"author":"Jeffrey Kam","url":"https://unsplash.com/photos/Nzw3HHsNHYU/download"},{"width":4272,"height":2848,"author":"Christopher Sardegna","url":"https://unsplash.com/photos/uDUiRS8YroY/download"},{"width":5184,"height":3456,"author":"Luke Chesser","url":"https://unsplash.com/photos/1uxV8fAfhVM/download"},{"width":1280,"height":792,"author":"Margaret Barley","url":"https://unsplash.com/photos/Qo51KwK1dKg/download"}];


//starting fun with fetch from url

// const data = fetch('    https://codewise-fe-api.herokuapp.com/photos?offset=10&limit=5&placeholders=1');
//  data.then(data => data.json());
// console.log(data);

for(let i in source)
{
    if(i%3 ===1){
        document.getElementById("main-gallery").innerHTML += '<div class="simple-image-left id=simple-image-'+i+'">';
    }
    else if(i%3 ===2){
        document.getElementById("main-gallery").innerHTML += '<div class="simple-image-center id=simple-image-'+i+'">';
    }
    else{
        document.getElementById("main-gallery").innerHTML += '<div class="simple-image-right id=simple-image-'+i+'">';
    }
   
    document.getElementById("main-gallery").innerHTML += '<img width="'+(source[i].width)/20+'"'+ 'height="'+  (source[i].height)/20+'"'+'src="'+source[i].url+'"' +'alt="'+source[i].url+'">';
   //  document.getElementById("main-gallery").innerHTML += '<img width="'+source[i].width+'"'+ 'height="'+  source[i].height+'"'+'src="'+source[i].url+'"' +'alt="'+source[i].author+'">';
    document.getElementById("main-gallery").innerHTML += '</div>';
}
