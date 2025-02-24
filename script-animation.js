const messages = ["ALURA", "ENCRYPTOR", "SECRET", "DECRYPTOR"];
        const box = document.getElementById("text-box");
        let interval;
        
        function startAnimation() {
            let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let targetMessage = messages[Math.floor(Math.random() * messages.length)];
            box.innerHTML = targetMessage.split('').map(() => `<span class='letter'>-</span>`).join('');
            let letters = document.querySelectorAll(".letter");
            let index = 0;
            
            interval = setInterval(() => {
                letters.forEach((letter, i) => {
                    if (i >= index) {
                        letter.textContent = chars[Math.floor(Math.random() * chars.length)];
                    }
                });
            }, 50);
            
            setTimeout(() => {
                clearInterval(interval);
                targetMessage.split('').forEach((char, i) => {
                    setTimeout(() => {
                        letters[i].textContent = char;
                        letters[i].classList.add("fixed");
                    }, i * 100); // Velocidad aumentada
                });
                
                setTimeout(() => {
                    box.innerHTML = "";
                    setTimeout(startAnimation, 1000);
                }, 3000);
            }, 2000);
        }
        
        startAnimation();