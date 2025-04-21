// Jab pura HTML load ho jaaye, tabhi JS chale
document.addEventListener("DOMContentLoaded", () => {
    
    // Input field aur send button ko dhoond rahe hain
    const inputField = document.querySelector(".input input");
    const sendButton = document.querySelector(".input button");

    // Chatbox jahan messages dikhte hain
    const chatbox = document.querySelector(".chatbox");

    // Function: Chat bubble add karta hai UI pe (user ya bot)
    function addMessage(message, type) {
        const msgDiv = document.createElement("div"); // Naya <div> banaya
        msgDiv.classList.add(type === "user" ? "box2" : "box1"); // Agar user toh right side, warna left
        msgDiv.innerHTML = `<p>${message}</p>`; // Message ke andar <p> tag
        chatbox.appendChild(msgDiv); // Chatbox ke andar us message ko chipka diya

        // Auto scroll to bottom — jisse latest message dikhe
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Bot ke replies handle karta hai
    function botReply(userMsg) {
        const msg = userMsg.toLowerCase(); // Case-insensitive compare karne ke liye lower case
        let reply = "I didn’t get that. Can you repeat it?"; // Default reply

        // Kuch basic conditions ke according reply set kar rahe
        if (msg.includes("hello")) {
            reply = "Hi there! 👋";
        } else if (msg.includes("your name")) {
            reply = "I'm ChatBot by P I Y U $ H 🤖";
        } else if (msg.includes("how are you")) {
            reply = "I’m just code, but emotionally stable 😎";
        } else if (msg.includes("bye")) {
            reply = "See ya later, alligator! 👋";
        }

        // Thoda delay daala for realistic feel
        setTimeout(() => addMessage(reply, "bot"), 600);
    }

    // Jab user "Send" button dabaye
    sendButton.addEventListener("click", () => {
        const userMsg = inputField.value.trim(); // Input value lo, trim karo white spaces
        if (userMsg) { // Agar message khaali nahi hai
            addMessage(userMsg, "user"); // User ka message show karo
            inputField.value = ""; // Input field ko clear karo
            botReply(userMsg); // Bot se reply bhi lo
        }
    });

    // Enter dabane pe bhi Send button waali functionality chale
    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendButton.click(); // Send button ko programmatically click karo
        }
    });
});
