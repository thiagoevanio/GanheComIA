// Lista de artigos do blog
const blogArticles = [
    // Novos artigos de 2025 sobre tendências em alta
    {
        id: 27,
        title: "IA Multimodal: A Revolução Silenciosa que Está Transformando 2025",
        slug: "ia-multimodal-revolucao-2025",
        excerpt: "Descubra como a IA Multimodal está revolucionando 2025 e como você pode lucrar com essa tecnologia que processa texto, imagem, áudio e vídeo simultaneamente.",
        category: "tecnologia",
        image: "img/ia_multimodal.jpg",
        date: "2025-07-09",
        readTime: "15 min"
    },
    {
        id: 28,
        title: "Agentes de IA Autônomos: Como Ganhar R$ 15.000/Mês Sendo o 'Chefe' de Robôs Inteligentes",
        slug: "agentes-ia-autonomos-futuro-trabalho",
        excerpt: "Descubra como os Agentes de IA Autônomos estão revolucionando o mercado de trabalho e criando oportunidades de renda de até R$ 15.000 mensais para quem souber aproveitá-las.",
        category: "ia-monetizacao",
        image: "img/agentes_ia_autonomos.jpg",
        date: "2025-07-09",
        readTime: "18 min"
    },
    {
        id: 29,
        title: "IA na Automação de Processos: Como Faturar R$ 20.000/Mês Transformando Empresas em Máquinas Eficientes",
        slug: "ia-automacao-processos-empresariais-2025",
        excerpt: "Descubra como a IA está revolucionando a automação de processos empresariais e como você pode lucrar até R$ 20.000 mensais oferecendo soluções de automação inteligente.",
        category: "tecnologia",
        image: "img/automacao_processos_ia.jpg",
        date: "2025-07-09",
        readTime: "20 min"
    },
    {
        id: 30,
        title: "IA Conversacional Avançada: Como Criar Chatbots que Vendem R$ 50.000+ Por Mês no Piloto Automático",
        slug: "ia-conversacional-avancada-chatbots-inteligentes",
        excerpt: "Descubra como a IA Conversacional Avançada está revolucionando o atendimento ao cliente e como você pode faturar R$ 12.000+ mensais criando chatbots inteligentes que vendem sozinhos.",
        category: "ia-monetizacao",
        image: "img/ia_conversacional_avancada.jpg",
        date: "2025-07-09",
        readTime: "17 min"
    },
    {
        id: 31,
        title: "IA Ética e Transparente: Como Faturar R$ 18.000+ Mensais Sendo o 'Guardião' da IA Responsável",
        slug: "ia-etica-transparente-futuro-responsavel",
        excerpt: "Descubra como a IA Ética e Transparente está se tornando obrigatória em 2025 e como você pode lucrar R$ 18.000+ mensais ajudando empresas a implementar soluções de IA responsáveis.",
        category: "tecnologia",
        image: "img/ia_etica_transparente.jpg",
        date: "2025-07-09",
        readTime: "19 min"
    },
    {
        id: 32,
        title: "IA na Previsão de Demanda: Como Faturar R$ 22.000+ Mensais Sendo o 'Oráculo' dos Negócios",
        slug: "ia-previsao-demanda-otimizacao-negocios",
        excerpt: "Descubra como a IA na Previsão de Demanda está revolucionando negócios e como você pode faturar R$ 22.000+ mensais ajudando empresas a prever o futuro e otimizar operações.",
        category: "ia-monetizacao",
        image: "img/ia_previsao_demanda.jpg",
        date: "2025-07-09",
        readTime: "21 min"
    },
    // Artigos existentes
    {
        id: 1,
        title: "10 Formas Reais de Ganhar Dinheiro com ChatGPT em 2025",
        slug: "10-formas-ganhar-dinheiro-chatgpt-2025",
        excerpt: "Descubra métodos comprovados para monetizar o ChatGPT e gerar renda extra todos os meses com estratégias atualizadas para 2025.",
        category: "ia-monetizacao",
        image: "img/chatgpt_money.png",
        date: "2025-01-07",
        readTime: "8 min"
    },
    {
        id: 2,
        title: "Como Criar eBooks com IA e Vender Online",
        slug: "como-criar-ebooks-ia-vender-online",
        excerpt: "Aprenda a criar e vender eBooks usando inteligência artificial, do planejamento à venda, com ferramentas gratuitas.",
        category: "tutoriais",
        image: "img/ebook_ai.jpg",
        date: "2025-01-06",
        readTime: "10 min"
    },
    {
        id: 3,
        title: "As Melhores Ferramentas Gratuitas de IA para Iniciantes",
        slug: "melhores-ferramentas-ia-gratuitas-iniciantes",
        excerpt: "Conheça as ferramentas de IA gratuitas mais poderosas para começar sua jornada de monetização sem investimento inicial.",
        category: "ferramentas",
        image: "img/free_ai_tools.jpg",
        date: "2025-01-05",
        readTime: "12 min"
    },
    {
        id: 4,
        title: "Como Ganhar Dinheiro na Internet com IA em 2025",
        slug: "como-ganhar-dinheiro-internet-ia-2025",
        excerpt: "Estratégias completas para gerar renda online usando inteligência artificial, desde freelancing até criação de produtos digitais.",
        category: "ia-monetizacao",
        image: "img/hero_ia.jpg",
        date: "2025-01-04",
        readTime: "15 min"
    },
    {
        id: 5,
        title: "Sites que Pagam para Usar Inteligência Artificial",
        slug: "sites-que-pagam-usar-inteligencia-artificial",
        excerpt: "Lista completa de plataformas que remuneram usuários por tarefas realizadas com IA, incluindo valores e requisitos.",
        category: "ia-monetizacao",
        image: "img/chatgpt_icon.png",
        date: "2025-01-03",
        readTime: "9 min"
    },
    {
        id: 6,
        title: "Ferramentas de IA para Ganhar Dinheiro: Guia Completo",
        slug: "ferramentas-ia-ganhar-dinheiro-guia-completo",
        excerpt: "Análise detalhada das melhores ferramentas de IA para monetização, com comparações, preços e casos de uso.",
        category: "ferramentas",
        image: "img/leonardo_ai_icon.png",
        date: "2025-01-02",
        readTime: "18 min"
    },
    {
        id: 7,
        title: "Tutoriais Passo a Passo: Monetizando com IA",
        slug: "tutoriais-passo-passo-monetizando-ia",
        excerpt: "Guias práticos e detalhados para implementar estratégias de monetização com IA, do básico ao avançado.",
        category: "tutoriais",
        image: "img/canva_icon.png",
        date: "2025-01-01",
        readTime: "20 min"
    },
    {
        id: 8,
        title: "Casos de Sucesso: Quem Está Ganhando com IA",
        slug: "casos-sucesso-ganhando-dinheiro-ia",
        excerpt: "Histórias reais de pessoas que transformaram suas vidas financeiras usando inteligência artificial.",
        category: "casos-sucesso",
        image: "img/dalle_icon.png",
        date: "2024-12-30",
        readTime: "14 min"
    },
    {
        id: 9,
        title: "Inteligência Artificial e o Futuro do Trabalho",
        slug: "inteligencia-artificial-futuro-trabalho",
        excerpt: "Como a IA está transformando o mercado de trabalho e como se preparar para as oportunidades futuras.",
        category: "tecnologia",
        image: "img/notion_ai_icon.png",
        date: "2024-12-29",
        readTime: "16 min"
    },
    {
        id: 10,
        title: "Criando Conteúdo Visual com IA para Redes Sociais",
        slug: "criando-conteudo-visual-ia-redes-sociais",
        excerpt: "Como usar ferramentas de IA para criar conteúdo visual atrativo e monetizar suas redes sociais.",
        category: "tutoriais",
        image: "img/pictory_icon.png",
        date: "2024-12-28",
        readTime: "11 min"
    },
    {
        id: 11,
        title: "Como Proteger Seus Dados Pessoais na Era Digital: Guia Completo 2025",
        slug: "como-proteger-dados-pessoais-era-digital-2025",
        excerpt: "Aprenda as melhores estratégias e ferramentas para proteger sua privacidade e dados pessoais online em 2025.",
        category: "seguranca-digital",
        image: "img/protecao_dados.jpg",
        date: "2025-01-18",
        readTime: "13 min"
    },
    {
        id: 12,
        title: "Cibersegurança: Tendências e Desafios para 2025",
        slug: "ciberseguranca-tendencias-2025",
        excerpt: "Explore as principais tendências e os maiores desafios da cibersegurança para o próximo ano, e como se preparar para eles.",
        category: "seguranca-digital",
        image: "img/ciberseguranca_tendencias.jpg",
        date: "2025-01-18",
        readTime: "10 min"
    },
    {
        id: 13,
        title: "Segurança Online para Crianças e Adolescentes: Um Guia para Pais",
        slug: "seguranca-online-para-criancas",
        excerpt: "Dicas essenciais para pais e responsáveis garantirem a segurança de crianças e adolescentes no ambiente digital.",
        category: "seguranca-digital",
        image: "img/seguranca_online_criancas.jpg",
        date: "2025-01-19",
        readTime: "9 min"
    },
    {
        id: 14,
        title: "Ameaças Cibernéticas Emergentes: O Que Você Precisa Saber",
        slug: "ameacas-ciberneticas-emergentes",
        excerpt: "Fique por dentro das novas ameaças cibernéticas, como ataques de ransomware avançados e deepfakes, e aprenda a se proteger.",
        category: "seguranca-digital",
        image: "img/ameacas_ciberneticas.jpg",
        date: "2025-01-19",
        readTime: "14 min"
    },
    {
        id: 15,
        title: "Privacidade Online: Dicas Essenciais para Proteger Sua Identidade Digital",
        slug: "privacidade-online-dicas-essenciais",
        excerpt: "Aprenda a controlar suas informações pessoais na internet e a proteger sua identidade digital com estas dicas práticas de privacidade.",
        category: "seguranca-digital",
        image: "img/privacidade_online.jpg",
        date: "2025-01-19",
        readTime: "10 min"
    },
    {
        id: 16,
        title: "Segurança em Wi-Fi Público: Como Proteger Seus Dados em Redes Abertas",
        slug: "seguranca-em-wifi-publico",
        excerpt: "Descubra os riscos de usar redes Wi-Fi públicas e as melhores práticas para manter seus dados seguros em qualquer lugar.",
        category: "seguranca-digital",
        image: "img/seguranca_wifi_publico.jpg",
        date: "2025-01-20",
        readTime: "8 min"
    },
    {
        id: 17,
        title: "Phishing e Golpes Online: Como Identificar e Evitar Fraudes na Internet",
        slug: "phishing-golpes-online",
        excerpt: "Um guia completo para reconhecer e se proteger contra ataques de phishing, smishing, vishing e outros golpes online.",
        category: "seguranca-digital",
        image: "img/phishing_scam.jpg",
        date: "2025-01-20",
        readTime: "12 min"
    },
    {
        id: 18,
        title: "Senhas Seguras e Autenticação de Dois Fatores (2FA): Fortalecendo Suas Contas",
        slug: "senhas-seguras-autenticacao-dois-fatores",
        excerpt: "Aprenda a criar senhas impenetráveis e a usar a autenticação de dois fatores para proteger suas contas online de acessos não autorizados.",
        category: "seguranca-digital",
        image: "img/senhas_seguras.webp",
        date: "2025-01-20",
        readTime: "9 min"
    },
    {
        id: 19,
        title: "Segurança em Dispositivos Móveis: Proteja Seu Smartphone e Tablet",
        slug: "seguranca-dispositivos-moveis",
        excerpt: "Dicas essenciais para manter seus dispositivos móveis seguros contra malware, roubo de dados e acessos indevidos.",
        category: "seguranca-digital",
        image: "img/seguranca_dispositivos_moveis.jpg",
        date: "2025-01-21",
        readTime: "10 min"
    },
    {
        id: 20,
        title: "Engenharia Social: Como Se Proteger da Manipulação Psicológica Online",
        slug: "engenharia-social-como-se-proteger",
        excerpt: "Entenda o que é engenharia social e aprenda a identificar e se defender das táticas de manipulação usadas por cibercriminosos.",
        category: "seguranca-digital",
        image: "img/engenharia_social.jpeg",
        date: "2025-01-21",
        readTime: "11 min"
    },
    {
        id: 21,
        title: "LGPD: Seus Direitos e a Proteção de Dados no Brasil",
        slug: "lgpd-seus-direitos-protecao-dados",
        excerpt: "Compreenda a Lei Geral de Proteção de Dados (LGPD), seus direitos como titular de dados e como as empresas devem proteger suas informações.",
        category: "seguranca-digital",
        image: "img/lgpd.jpg",
        date: "2025-01-21",
        readTime: "12 min"
    },
    {
        id: 22,
        title: "O Papel da Inteligência Artificial na Cibersegurança: Benefícios e Desafios",
        slug: "ia-na-ciberseguranca",
        excerpt: "Explore como a Inteligência Artificial está revolucionando a cibersegurança, desde a detecção de ameaças até a resposta a incidentes. Descubra os benefícios e desafios.",
        category: "seguranca-digital",
        image: "img/ia_ciberseguranca.jpg",
        date: "2025-01-18",
        readTime: "13 min"
    },
    {
        id: 23,
        title: "Segurança na Nuvem: Protegendo Seus Dados e Aplicações na Cloud",
        slug: "seguranca-na-nuvem",
        excerpt: "Entenda a importância da segurança na nuvem e as melhores práticas para proteger seus dados e aplicações em ambientes de cloud computing.",
        category: "seguranca-digital",
        image: "img/seguranca_nuvem.webp",
        date: "2025-01-19",
        readTime: "12 min"
    },
    {
        id: 24,
        title: "Segurança em Redes Sociais: Proteja Sua Privacidade e Evite Golpes",
        slug: "seguranca-em-redes-sociais",
        excerpt: "Aprenda a proteger sua privacidade e segurança nas redes sociais. Dicas essenciais para evitar golpes, vazamento de dados e manter suas contas seguras.",
        category: "seguranca-digital",
        image: "img/seguranca_redes_sociais.png",
        date: "2025-01-20",
        readTime: "10 min"
    },
    {
        id: 25,
        title: "Backup e Recuperação de Dados: A Importância de Proteger Suas Informações",
        slug: "backup-recuperacao-dados",
        excerpt: "Entenda a importância do backup e da recuperação de dados para proteger suas informações contra perdas, ataques cibernéticos e falhas de hardware.",
        category: "seguranca-digital",
        image: "img/backup_recuperacao_dados.jpg",
        date: "2025-01-21",
        readTime: "11 min"
    },
    {
        id: 26,
        title: "Educação Digital e Cidadania Online: Navegando com Responsabilidade no Mundo Conectado",
        slug: "educacao-digital-cidadania-online",
        excerpt: "Descubra a importância da educação digital e da cidadania online para navegar com segurança e responsabilidade no mundo conectado.",
        category: "seguranca-digital",
        image: "img/educacao_digital.jpeg",
        date: "2025-01-22",
        readTime: "10 min"
    }
];

// Função para renderizar artigos
function renderArticles(articles) {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogGrid.innerHTML = articles.map(article => `
        <article class='card fade-in' data-category='${article.category}'>
            <img src='${article.image}' alt='${article.title}' class='card-image'>
            <div class='card-content'>
                <div class='card-meta' style='display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-size: 0.9rem; color: #666;'>
                    <span class='category-tag' style='background: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem;'>${getCategoryName(article.category)}</span>
                    <span>${formatDate(article.date)} • ${article.readTime}</span>
                </div>
                <h3 class='card-title'>${article.title}</h3>
                <p class='card-description'>${article.excerpt}</p>
                <a href='blog/${article.slug}.html' class='card-link'>Ler Artigo <i class='fas fa-arrow-right'></i></a>
            </div>
        </article>
    `).join('');
}

// Função para obter nome da categoria
function getCategoryName(category) {
    const categories = {
        'ia-monetizacao': 'IA e Monetização',
        'ferramentas': 'Ferramentas',
        'tutoriais': 'Tutoriais',
        'casos-sucesso': 'Casos de Sucesso',
        'tecnologia': 'Tecnologia',
        'seguranca-digital': 'Segurança Digital'
    };
    return categories[category] || category;
}

// Função para formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Função de filtro por categoria
function filterByCategory(category) {
    const filteredArticles = category === 'todos' 
        ? blogArticles 
        : blogArticles.filter(article => article.category === category);
    
    renderArticles(filteredArticles);
    
    // Atualizar botões de categoria
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Função de pesquisa
function searchArticles(query) {
    const filteredArticles = blogArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    renderArticles(filteredArticles);
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todos os artigos inicialmente
    renderArticles(blogArticles);
    
    // Event listeners para filtros de categoria
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterByCategory(this.dataset.category);
        });
    });
    
    // Event listener para pesquisa
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchArticles(this.value);
        });
    }
    
    // Event listener para botão de pesquisa
    const searchButton = document.querySelector('button[style*="position: absolute"]');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value;
            searchArticles(query);
        });
    }
});

// Adicionar estilos CSS para o blog
const blogStyles = `
    .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
        width: 100%;
    }
    
    .category-btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid var(--primary-color);
        background: transparent;
        color: var(--primary-color);
        border-radius: 25px;
        cursor: pointer;
        transition: var(--transition);
        font-weight: 500;
        white-space: nowrap;
    }
    
    .category-btn:hover,
    .category-btn.active {
        background: var(--primary-color);
        color: white;
    }
    
    .pagination-btn {
        padding: 0.75rem 1rem;
        border: 1px solid #ddd;
        background: white;
        color: var(--text-color);
        cursor: pointer;
        transition: var(--transition);
    }
    
    .pagination-btn:hover:not(:disabled) {
        background: var(--primary-color);
        color: white;
    }
    
    .pagination-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .card-meta {
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 1rem;
    }
    
    .category-tag {
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    /* Estilos responsivos melhorados */
    @media screen and (max-width: 768px) {
        .blog-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-top: 2rem !important;
            padding: 0 !important;
        }
        
        .blog-categories {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.5rem !important;
        }
        
        .category-btn {
            width: 100% !important;
            max-width: 280px !important;
            margin: 0.25rem 0 !important;
            font-size: 0.9rem !important;
        }
        
        .card {
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
        }
        
        .container {
            padding: 0 15px !important;
        }
    }
    
    @media screen and (max-width: 480px) {
        .blog-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-top: 1.5rem !important;
        }
        
        .category-btn {
            max-width: 100% !important;
            padding: 0.6rem 1rem !important;
            font-size: 0.85rem !important;
        }
        
        .card {
            border-radius: 8px !important;
        }
        
        .card-content {
            padding: 1rem !important;
        }
        
        .card-title {
            font-size: 1.1rem !important;
            line-height: 1.3 !important;
        }
        
        .card-description {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
        }
    }
`;

// Adicionar estilos ao head
const styleSheet = document.createElement('style');
styleSheet.textContent = blogStyles;
document.head.appendChild(styleSheet);

