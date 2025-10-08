document.addEventListener("DOMContentLoaded", function() {
    const splash = document.getElementById('splash-screen');
    const content = document.getElementById('content');
    const mainAcessBtn = document.getElementById('main-acess-btn');
    const modulePanel = document.getElementById('options-menu');
    const initialCta = document.getElementById('initial-cta');
    const loginLinkModule = document.getElementById('login-link-module');
    const loginFormContainer = document.getElementById('login-form-container');
    const backToMainBtn = document.getElementById('back-to-main-btn');
    const backFromLoginBtn = document.getElementById('back-from-login-btn');
    
    // TAB LOGIC ELEMENTS
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // 1. Splash Screen (Transição)
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';
            content.classList.add('show');
        }, 500); // Transição rápida
    }, 1500); 

    // 2. INICIAR SESSÃO -> Abre Painel (Transição Rápida)
    mainAcessBtn.addEventListener('click', () => {
        initialCta.style.display = 'none';
        modulePanel.style.display = 'block';
    });
    
    // 3. TAB (ABA) NAVIGATION LOGIC
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTabId = link.getAttribute('data-tab');

            // Remove 'active' de todos os links e conteúdos
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Adiciona 'active' ao link clicado
            link.classList.add('active');
            
            // Ativa o conteúdo da aba correta
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // 4. ACESSO RESTRITO -> Abre Formulário
    loginLinkModule.addEventListener('click', (e) => {
        e.preventDefault();
        modulePanel.style.display = 'none';
        loginFormContainer.style.display = 'block';
    });
    
    // 5. ENCERRAR SESSÃO (Do Painel)
    backToMainBtn.addEventListener('click', (e) => {
         e.preventDefault();
         modulePanel.style.display = 'none';
         initialCta.style.display = 'block';
    });
    
    // 6. VOLTAR AO PAINEL (Do Login)
    backFromLoginBtn.addEventListener('click', (e) => {
         e.preventDefault();
         loginFormContainer.style.display = 'none';
         modulePanel.style.display = 'block';
    });

    // 7. Contato Flutuante (WhatsApp)
    document.querySelector('.floating-contact').addEventListener('click', () => {
        // Use o número de contato do seu negócio
        window.open("https://wa.me/5511943198316", '_blank');
    });
});
