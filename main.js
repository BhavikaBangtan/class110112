Webcam.set({
    width:350,
    Height:300,
    image_format:'png',
    png_quality:90,
});
Webcam.attach('#camera');
function click(){
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
    var check=document.getElementById('capture_image');
    classfier.classify(check , gotResult);
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

    }
}