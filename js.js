document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const heroSection = document.querySelector('.hero-section');
    const chatbotSection = document.getElementById('chatbot-section');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatDisplay = document.getElementById('chat-display');

    ctaButton.addEventListener('click', () => {
        heroSection.classList.add('hidden');
        chatbotSection.classList.remove('hidden');
        userInput.focus();
    });

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    async function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        displayMessage(userMessage, 'user-message');
        userInput.value = '';

        // Simulação de resposta da IA (substituir por chamada à API real)
        const botResponse = await getRecipeFromAI(userMessage);
        displayMessage(botResponse, 'bot-message');
    }

    function displayMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(className);
        messageElement.innerHTML = `<p>${message}</p>`; // Use innerHTML para formatar a resposta
        chatDisplay.appendChild(messageElement);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    async function getRecipeFromAI(ingredients) {
        // Esta é a parte que você precisaria conectar com uma API real como a do ChatGPT
        // Exemplo de como a requisição HTTP funcionaria:
        /*
        const response = await fetch('SUA_API_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer SEU_CHAVE_API'
            },
            body: JSON.stringify({ ingredients: ingredients })
        });
        const data = await response.json();
        return data.recipe; // A resposta da API conteria a receita formatada
        */

        // Resposta simulada para demonstração
        return `
            **Receita para os ingredientes:** ${ingredients}
            
            **Nome da Receita:** Frango com Brócolis e Molho de Soja
            
            **Tempo de Preparo:** 25 minutos
            
            **Ingredientes:**
            - Frango
            - Brócolis
            - Molho de soja
            - Alho
            - Gengibre
            - Arroz (opcional)
            
            **Instruções:**
            1. Pique o frango em cubos e tempere com sal e pimenta.
            2. Cozinhe o brócolis em água fervente por 3 minutos e reserve.
            3. Em uma frigideira, refogue o alho e o gengibre. Adicione o frango e doure.
            4. Adicione o molho de soja e o brócolis, misture bem e sirva.
        `;
    }
});