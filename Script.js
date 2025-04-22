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
    }

    // Bot ke replies handle karta hai
    function botReply(userMsg) {
        const msg = userMsg.toLowerCase(); // Case-insensitive compare karne ke liye lower case
        let reply = "I didn’t get that. Can you repeat it?"; // Default reply

        // Kuch basic conditions ke according reply set kar rahe
        if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
            reply = "Yo yo yo! Wassup? 👋😎";
        } else if (msg.includes("your name")) {
            reply = "I'm ChatBot by P I Y U $ H 🤖 – certified cool 😤";
        } else if (msg.includes("how are you")) {
            reply = "Vibin', thrivin', and running on pure JavaScript energy 💻✨";
        } else if (msg.includes("bye") || msg.includes("see ya")) {
            reply = "Later skater 🛹💨 Stay goofy!";
        } else if (msg.includes("what's up") || msg.includes("sup")) {
            reply = "Just chillin’ in the code realm 😎 What about you?";
        } else if (msg.includes("age")) {
            reply = "I'm timeless, like a classic meme 🕰️😂";
        } else if (msg.includes("hobbies")) {
            reply = "Spitting fire replies 🔥, debugging your feelings 💔➡️❤️";
        } else if (msg.includes("favorite artist") || msg.includes("fav rapper")) {
            reply = "Big fan of Krishna, Divine, and Seedhe Maut 🎤 Desi hip-hop FTW!";
        } else if (msg.includes("who made you") || msg.includes("creator")) {
            reply = "Built by the legend himself – P I Y U $ H a.k.a. the code ninja 🥷💻";
        } else if (msg.includes("love you")) {
            reply = "Aww 😳 I’m blushing in binary 💘 0110 1111 1101 1001";
        } else {
            reply = "Uhh... I didn’t quite catch that 👀 Say it again, but like, cooler 😅";
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
