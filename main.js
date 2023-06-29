Webcam.set({
    width:350,
    Height:300,
    image_format:'png',
    png_quality:90,
});
Webcam.attach('#camera');
function clicky(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
classfier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MGFyH1wHe/model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded');
    console.log('ml5 version',ml5.version);
}
function check(){
    console.log("working");
     pic=document.getElementById('capture_image');
    classfier.classify(pic , gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        prediction1=result[0].label;
        prediction2=result[1].label;
        document.getElementById("result_emotion_name").innerHTML=prediction1;
        document.getElementById("result_emotion_name2").innerHTML=prediction2;
if(prediction1=="happy"){
    document.getElementById("update_emoji").innerHTML="&#128522;";
}
if(prediction1=="sad"){
    document.getElementById("update_emoji").innerHTML="&#128532;";
}
if(prediction1=="angry"){
    document.getElementById("update_emoji").innerHTML="&#128548;";
}
if(prediction2=="happy"){
    document.getElementById("update_emoji2").innerHTML="&#128522;";
}
if(prediction2=="sad"){
    document.getElementById("update_emoji2").innerHTML="&#128532;";
}
if(prediction2=="angry"){
    document.getElementById("update_emoji2").innerHTML="&#128548;";
}
    }
}