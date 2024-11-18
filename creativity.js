        const playSound = () => {
            const sound = new Audio('pop.mp3'); 
            sound.play();
        };
        
        
        document.getElementById('changeColorBtn').addEventListener('click', () => {
            playSound();
        });

        document.getElementById('theme-toggle').addEventListener('click', () => {
            playSound();
        });