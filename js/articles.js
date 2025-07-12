// Funcionalidade de filtros e pesquisa para artigos
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const articlesGrid = document.getElementById('articlesGrid');
    const articles = articlesGrid.querySelectorAll('.card');

    // Função para filtrar artigos
    function filterArticles() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;

        articles.forEach(article => {
            const title = article.querySelector('.card-title').textContent.toLowerCase();
            const description = article.querySelector('.card-description').textContent.toLowerCase();
            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
            
            let matchesCategory = true;
            if (activeCategory !== 'todos') {
                matchesCategory = categorizeArticle(title, description, activeCategory);
            }

            if (matchesSearch && matchesCategory) {
                article.style.display = 'block';
                article.classList.add('fade-in');
            } else {
                article.style.display = 'none';
            }
        });
    }

    // Função para categorizar artigos baseado no conteúdo
    function categorizeArticle(title, description, category) {
        const text = (title + ' ' + description).toLowerCase();
        
        switch(category) {
            case 'ia-monetizacao':
                return text.includes('ganhar dinheiro') || text.includes('monetizar') || 
                       text.includes('renda') || text.includes('lucrar') || 
                       text.includes('chatgpt') || text.includes('ia');
            
            case 'ferramentas':
                return text.includes('ferramenta') || text.includes('chatgpt') || 
                       text.includes('canva') || text.includes('leonardo') || 
                       text.includes('pictory') || text.includes('dall-e') || 
                       text.includes('notion');
            
            case 'tutoriais':
                return text.includes('como') || text.includes('tutorial') || 
                       text.includes('passo a passo') || text.includes('guia') || 
                       text.includes('aprenda');
            
            case 'seguranca':
                return text.includes('segurança') || text.includes('proteção') || 
                       text.includes('privacidade') || text.includes('cibersegurança') || 
                       text.includes('dados') || text.includes('senha') || 
                       text.includes('phishing') || text.includes('ameaça');
            
            case 'tecnologia':
                return text.includes('tecnologia') || text.includes('futuro') || 
                       text.includes('tendência') || text.includes('inovação') || 
                       text.includes('automação') || text.includes('agente');
            
            default:
                return true;
        }
    }

    // Event listeners para pesquisa
    searchInput.addEventListener('input', filterArticles);

    // Event listeners para categorias
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class de todos os botões
            categoryButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = 'transparent';
                btn.style.color = 'var(--primary-color)';
            });
            
            // Adiciona active class ao botão clicado
            this.classList.add('active');
            this.style.background = 'var(--primary-color)';
            this.style.color = 'white';
            
            filterArticles();
        });
    });

    // Adicionar efeito hover aos botões de categoria
    categoryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.background = 'var(--primary-color)';
                this.style.color = 'white';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.background = 'transparent';
                this.style.color = 'var(--primary-color)';
            }
        });
    });
});

