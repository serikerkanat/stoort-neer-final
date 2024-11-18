document.getElementById("questionForm").addEventListener("submit", function(event){
            event.preventDefault(); 

            var questionText = document.getElementById("tatata").value;

            if(questionText == /\d/){
                alert("ada");
;
            } else if(questionText.trim() === "") {
                alert("Please enter a question.");
                
            } 
            else {
                alert("Your question has been submitted: " + questionText);
            }

        });