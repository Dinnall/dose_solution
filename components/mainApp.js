

/*

For the shot timing of the code challenge 
I didnt hide my accessKey but i usually 
would make it private because of github
*/

const base = "https://api.api.ai/v1/";
const accessKey = "4f994ed2297d49b78b477aad8adc66ae";
		


$(document).ready(function() {
$("#input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        send();
    }
});

$("#recording").click(function(event) {
    switchRecognition();
    });
});

/***********************************************************************************/




let recording;
const startRecognition =()=> {


/* 
Assign recording to the window object webkit to 
utilize the browers microphone
and use methods attached to webkit
*/
recording = new webkitSpeechRecognition();

recording.onstart = function(event) {
    $("#recording").toggleClass("listening");
};

recording.onresult = function(event) {
    let input = "";
	
    for (let i = event.resultIndex; i < event.results.length; ++i) {
		 input += event.results[i][0].transcript;
    }
    setInput(input);
    stopRecognition();
};

recording.onend = function() {
    stopRecognition();
};
        
recording.lang = "en-US";
recording.start();
}


/***********************************************************************************/









const switchRecognition =() => {
    if (recording) {
        stopRecognition();
    } 
    else {
        startRecognition();
    }
}

const stopRecognition =()=> {
console.log("stop")
if (recording) {
    recording.stop();
    recording = null;
    $("#recording").toggleClass("listening");
       }
}
    

const setInput =(input)=> {
    $("#input").val(input);
    send();
}
  
/***********************************************************************************/


 //Correct formating for POSTMAN 
 // Regarding Ajax call to api.ai
const send =()=> {
    let input = $("#input").val();
            $.ajax({
            type: "POST",
            url: base + "query?v=20150910",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: {
            "Authorization": "Bearer " + accessKey
            },
data: JSON.stringify({ 
query: input,
lang: "en",
sessionId: "assistant" }),

success: function(data) {
    console.log("CURRENT STATE of DATA?",data);
            
let inputResponse = data.result.fulfillment.speech;
let name = data.result.parameters.name;
let link = data.result.parameters.link;                
let compltedIntentAI = true;
    


// Main condition on what to response with

    if(!link || !name) {
        compltedIntentAI = false;
    } 
    setResponse(inputResponse);
            
    if (compltedIntentAI) {
        redirect(link);
    }
},
error: function() {
    setResponse("Are you looking for a specific page?");
}
});
setResponse("Give me a second");
}


/***********************************************************************************/


const setResponse =(val) => {
$("#response").html(val);
let msg = new SpeechSynthesisUtterance(val);
msg.rate = 1;
msg.pitch = 1;
window.speechSynthesis.speak(msg);
}
  

/***********************************************************************************/


// Debug and rewind to see the different states BEFORE A TAG IS ATTACHED 
// view in console/link     
const redirect =(val)=>{
// debugger
window.open("https://dose.com/tagged/" + val);
// debugger;
$("#input").val("");
$("#response").html("Anything else?");
}