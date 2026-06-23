// Date in footer
const today = new Date();

document.getElementById("date").innerHTML =
"Today's Date: " + today.toDateString();

// Plant Recommendation Quiz
function recommendPlant() {

    let sunlight = document.getElementById("sunlight").value;
    let care = document.getElementById("care").value;
    let pet = document.getElementById("pet").value;

    let recommendation = "";

    if (sunlight === "Low" && care === "Easy") {
        recommendation = "Snake Plant";
    }
    else if (sunlight === "Bright" && pet === "Yes") {
        recommendation = "Areca Palm";
    }
    else if (care === "Advanced") {
        recommendation = "Fiddle Leaf Fig";
    }
    else {
        recommendation = "Peace Lily";
    }

    document.getElementById("result").innerHTML =
    "Recommended Plant: " + recommendation;
}

function updateDateTime() {
            const now = new Date();

            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };

            document.getElementById('dateTime').innerHTML =
                now.toLocaleDateString('en-US', options);
        }

        setInterval(updateDateTime, 1000);
        updateDateTime();

        // Contact Form Confirmation Popup
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();

            alert("✅ Thank you! Your message has been submitted successfully.");

            this.reset();
        });

        // Live Chat Functionality
        function sendMessage() {
            let input = document.getElementById("chatInput");
            let chatBox = document.getElementById("chatBox");

            if (input.value.trim() !== "") {

                // User Message
                let userMessage = document.createElement("div");
                userMessage.classList.add("chat-message");

                userMessage.innerHTML =
                    `<span class="user">You:</span> ${input.value}`;

                chatBox.appendChild(userMessage);

                // Auto Reply
                let specialistReply = document.createElement("div");
                specialistReply.classList.add("chat-message");

                specialistReply.innerHTML =
                    `<span class="specialist">Plant Specialist:</span>
                    Thanks for your question! Make sure your plants receive enough sunlight and proper watering.`;

                setTimeout(() => {
                    chatBox.appendChild(specialistReply);
                    chatBox.scrollTop = chatBox.scrollHeight;
                }, 1000);

                input.value = "";

                chatBox.scrollTop = chatBox.scrollHeight;
            }
        }

        // Real-Time Date and Time
        function updateDateTime() {
            let now = new Date();

            document.getElementById("dateTime").innerHTML =
                now.toLocaleDateString() + " | " +
                now.toLocaleTimeString();
        }

        setInterval(updateDateTime, 1000);

        updateDateTime();