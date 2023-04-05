Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
 Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src="+data_uri+">";
    });
}
prediction1=""
prediction2=""

function speaking(){
    synth=window.speechSynthesis;
    speak="the first prediction is"+prediction1+"and the second prediction is"+prediction2;
    utterthis=new SpeechSynthesisUtterance(speak);
    synth.speak(utterthis);
}
console.log("ml5 version is",ml5.version)
our_modle=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q8QjmcqaI/model.json",model_loaded)
function model_loaded(){
    console.log("model is successfully loaded");
    
}

function check(){
    img=document.getElementById("captured_img");
    our_modle.classify(img,got_Result);
}
function got_Result(error,result){
    if(error){
        console.log(error);

    }
    else{
        console.log(result);
        prediction1= result[0].label;
        prediction2=result[1].label;
        document.getElementById("result_emotion_name").innerHTML=prediction1;
        document.getElementById("result_emotion_name2").innerHTML=prediction2;
        speaking();


     if(prediction1=="v_sign"){
        document.getElementById("emoji_result").innerHTML="&#128516;";
     }
     if(prediction2=="v_sign"){
        document.getElementById("emoji_result2").innerHTML="&#128516;";
    }

    if(prediction1=="ok_sign"){
        document.getElementById("emoji_result").innerHTML=" &#128561;";
     }
     if(prediction2=="ok_sign"){
        document.getElementById("emoji_result2").innerHTML=" &#128561;";
    }
    
    if(prediction1=="yo-sign"){
        document.getElementById("emoji_result").innerHTML="&#128528;";
     }
     if(prediction2=="yo_sign"){
        document.getElementById("emoji_result2").innerHTML=" &#128528;";
    }

    if(prediction1=="good_sign"){
        document.getElementById("emoji_result").innerHTML="&#128545;";
     }
     if(prediction2=="good_sign"){
        document.getElementById("emoji_result2").innerHTML="&#128545;";
    }

}
}