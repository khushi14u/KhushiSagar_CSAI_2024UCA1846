const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span"),
timeTag = document.querySelector(".time span b"),
tryAgainBtn = document.querySelector("button")

const paragraphs = [
    "Computer science is one of the fastest growing career fields in modern history. Dating back only a few decades to the late 1950's and early 1960's, it has become on of the leading industries in the world today. Originally conceived as an organizational solution to the massive amounts of information kept on nothing more than paper, computers have evolved and advanced to become a common part of modern day life.",
    "College life is a beautiful stage for a student. It’s the time when students get serious about their career and study thoroughly to make their future bright. It’s also a time when we make lifelong friends and spend valuable time with them. It is said to be the most memorable years of one’s life Teenagers are exposed to new experiences and things we weren’t familiar with earlier.",
    "Love is the essence of human life. God has gifted humans with different kinds of emotions that they can feel to experience the various aspects of life. Love is one such kind of emotion that all human beings have. Everybody has felt it, be it for a person, pet, or even a non-living object. We feel special when someone shows their love for us. Love is a divine energy. ",
    "Games and sports are essential to enjoy overall health and well-being. Sports and games offer numerous advantages and are thus highly recommended for everyone, irrespective of their age. Playing games and sports maintains the human figure and provides strength, patience and endurance. All doctors recommend exercising as a preventive measure for all types of diseases.",
    "Gender equality refers to equal rights, responsibilities and opportunities for both women and men. It implies that the interests, needs and priorities of both women and men are taken into consideration, recognizing the diversity of different groups of women and men. Worldwide, women’s fundamental rights continue to be violated, and they face discrimination in access to education, work, social protection, inheritance, economic assets, productive resources, and participation in decision-making and society.",
    "One of the most significant contributions of technology is the transformation of communication. The advent of the internet and mobile devices has revolutionized the way we connect with others. Social media platforms, instant messaging apps, and video conferencing tools have bridged geographical gaps, enabling real-time communication with people across the globe. Coding plays a pivotal role in developing these applications, ensuring seamless and efficient communication.",
    "Books are fundamental to education and the dissemination of knowledge. They serve as primary sources of information in various academic disciplines, from science and history to literature and philosophy. Textbooks provide structured learning material that helps students grasp complex concepts and theories. Beyond textbooks, reference books, academic journals, and non-fiction works offer in-depth insights into specific subjects, enabling learners to explore topics in greater detail.",
    "Metro systems, also known as subways, undergrounds, or rapid transit systems, are an integral part of urban infrastructure in many of the world's major cities. They provide a fast, efficient, and eco-friendly means of transportation for millions of commuters daily. The concept of underground railways was first realized in London in the 19th century. This innovation was driven by the need to alleviate traffic congestion and provide a reliable mode of transportation in densely populated urban areas.",
    "Entrepreneurship is a vital engine for economic growth. By identifying and capitalizing on opportunities, entrepreneurs create new businesses that contribute to the overall economic development of a region. These new ventures introduce innovative products and services, stimulate competition, and increase productivity. The ripple effect of entrepreneurship leads to job creation, higher wages, and improved standards of living. ",
    "Fashion has always been an integral part of human society, influencing and reflecting cultural, social, and economic dynamics. From ancient civilizations to the modern era, fashion has played a crucial role in expressing identity, status, and creativity. Fashion allows individuals to express their uniqueness and assert their identity in a world where conformity often prevails.",
    "Computer science is one of the fastest growing career fields in modern history. Dating back only a few decades to the late 1950's and early 1960's, it has become on of the leading industries in the world today. Originally conceived as an organizational solution to the massive amounts of information kept on nothing more than paper, computers have evolved and advanced to become a common part of modern day life.",
    "College life is a beautiful stage for a student. It’s the time when students get serious about their career and study thoroughly to make their future bright. It’s also a time when we make lifelong friends and spend valuable time with them. It is said to be the most memorable years of one’s life Teenagers are exposed to new experiences and things we weren’t familiar with earlier.",
    "Love is the essence of human life. God has gifted humans with different kinds of emotions that they can feel to experience the various aspects of life. Love is one such kind of emotion that all human beings have. Everybody has felt it, be it for a person, pet, or even a non-living object. We feel special when someone shows their love for us. Love is a divine energy. ",
    "Games and sports are essential to enjoy overall health and well-being. Sports and games offer numerous advantages and are thus highly recommended for everyone, irrespective of their age. Playing games and sports maintains the human figure and provides strength, patience and endurance. All doctors recommend exercising as a preventive measure for all types of diseases.",
    "Gender equality refers to equal rights, responsibilities and opportunities for both women and men. It implies that the interests, needs and priorities of both women and men are taken into consideration, recognizing the diversity of different groups of women and men. Worldwide, women’s fundamental rights continue to be violated, and they face discrimination in access to education, work, social protection, inheritance, economic assets, productive resources, and participation in decision-making and society.",
    "One of the most significant contributions of technology is the transformation of communication. The advent of the internet and mobile devices has revolutionized the way we connect with others. Social media platforms, instant messaging apps, and video conferencing tools have bridged geographical gaps, enabling real-time communication with people across the globe.",
    "Books are fundamental to education and the dissemination of knowledge. They serve as primary sources of information in various academic disciplines, from science and history to literature and philosophy. Textbooks provide structured learning material that helps students grasp complex concepts and theories. Beyond textbooks, reference books, academic journals, and non-fiction works offer in-depth insights into specific subjects.",
    "Metro systems, also known as subways, undergrounds, or rapid transit systems, are an integral part of urban infrastructure in many of the world's major cities. They provide a fast, efficient, and eco-friendly means of transportation for millions of commuters daily. The concept of underground railways was first realized in London in the 19th century. This innovation was driven by the need to alleviate traffic congestion and provide a reliable mode of transportation in densely populated urban areas.",
    "Entrepreneurship is a vital engine for economic growth. By identifying and capitalizing on opportunities, entrepreneurs create new businesses that contribute to the overall economic development of a region. These new ventures introduce innovative products and services, stimulate competition, and increase productivity. The ripple effect of entrepreneurship leads to job creation, higher wages, and improved standards of living. ",
    "Fashion has always been an integral part of human society, influencing and reflecting cultural, social, and economic dynamics. From ancient civilizations to the modern era, fashion has played a crucial role in expressing identity, status, and creativity. Fashion allows individuals to express their uniqueness and assert their identity in a world where conformity often prevails.",

]

let timer,
maxtime = 60,
timeLeft = maxtime,
charIndex = mistakes = isTyping = 0;

function randomParagraph() {
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length-1 && timeLeft>0) {
        if(!isTyping) {
            timer = setInterval(initTimer, 1000)
            isTyping = true;
        }
    
        if(typedChar == null) {
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")){
            mistakes--;
            }
            characters[charIndex].classList.remove("correct" , "incorrect");
        } else{
            if(characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else{
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
    
        let wpm = Math.round((((charIndex-mistakes) / 5) / (maxtime - timeLeft)) * 60);
        wpm = wpm <0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        inpField.value = "";
        clearInterval(timer);
    }
    
}

function initTimer() {
    if(timeLeft > 0) {
        timeLeft=timeLeft-1;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer)
    }
}

function resetGame() {
    randomParagraph();
    inpField.value = "";
    clearInterval(timer);
    timeLeft = maxtime,
    charIndex = mistakes = isTyping = 0;
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = mistakes;
    cpmTag.innerText = 0;
    

}

randomParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);