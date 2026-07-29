// Todas as 24 Questões do Radar de Inovação
const questions = [
    // Dimensão 1
    { 
        id: 'Q1', 
        dimension: 'Dimensão 1: Controles Gerenciais', 
        text: 'Sua empresa monitora os resultados por meio de indicadores de desempenho?', 
        options: [{ value: 'a', label: 'Não monitora.' }, { value: 'b', label: 'Sim, monitora 1 a 2 indicadores.' }, { value: 'c', label: 'Sim, monitora 3 ou mais indicadores.' }],
        justificativaHelp: 'Informe quais são os principais indicadores monitorados (ex: faturamento mensal, margem de lucro, volume de vendas, satisfação do cliente, produtividade) e com qual frequência são acompanhados.'
    },
    { 
        id: 'Q2', 
        dimension: 'Dimensão 1: Controles Gerenciais', 
        text: 'Quais são as pessoas que têm conhecimento desses indicadores?', 
        options: [{ value: 'a', label: 'Só os gestores.' }, { value: 'b', label: 'Os gestores e mais uma ou duas pessoas da empresa.' }, { value: 'c', label: 'A maioria dos funcionários.' }],
        justificativaHelp: 'Descreva como esses indicadores são divulgados e quem tem acesso a eles (ex: apenas sócios/diretores, gerentes de setor, equipe operacional ou toda a empresa em reuniões periódicas).'
    },
    { 
        id: 'Q3', 
        dimension: 'Dimensão 1: Controles Gerenciais', 
        text: 'Os indicadores possuem metas definidas?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Há metas para alguns indicadores.' }, { value: 'c', label: 'Sim, para todos os indicadores monitorados.' }],
        justificativaHelp: 'Explicite quais metas foram estabelecidas (ex: meta de crescimento de faturamento, redução de custos ou tempo de atendimento) e como elas são acompanhadas e cobradas.'
    },
    { 
        id: 'Q4', 
        dimension: 'Dimensão 1: Controles Gerenciais', 
        text: 'Você possui os dados de faturamento e custos mensal da sua empresa?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Sei quanto faturo e quanto gasto, mas não tenho detalhado.' }, { value: 'c', label: 'Sim, tenho total controle do faturamento e dos custos da minha empresa.' }],
        justificativaHelp: 'Descreva como é feito o acompanhamento financeiro (ex: controle de fluxo de caixa, separação de custos fixos e variáveis, apuração de DRE) e o grau de detalhamento desses dados.'
    },
    // Dimensão 2
    { 
        id: 'Q5', 
        dimension: 'Dimensão 2: Gestão das Operações', 
        text: 'Há um padrão para execução das atividades na sua empresa?', 
        options: [{ value: 'a', label: 'Não há um padrão formalizado.' }, { value: 'b', label: 'Temos checklist de algumas tarefas, mas sem responsáveis definidos.' }, { value: 'c', label: 'Sim, temos procedimentos descritos para as principais atividades, com responsáveis definidos.' }],
        justificativaHelp: 'Descreva quais processos possuem rotinas padronizadas, manuais, POPs ou checklists (ex: atendimento, produção, entrega) e se há responsáveis definidos para garantir a execução.'
    },
    { 
        id: 'Q6', 
        dimension: 'Dimensão 2: Gestão das Operações', 
        text: 'Com que frequência a empresa fica sem estoque de produtos ou matérias-primas?', 
        options: [{ value: 'a', label: 'Uma vez ou mais a cada três meses.' }, { value: 'b', label: 'Não muito frequente, uma vez a cada 6 meses.' }, { value: 'c', label: 'Nunca, sempre há o suficiente por perto.' }, { value: 'd', label: 'Não se aplica.' }],
        justificativaHelp: 'Explique como funciona o controle de estoque (ex: estoque mínimo, inventário periódico, compras sob demanda) e como a falta ou excesso de produtos afeta a operação.'
    },
    { 
        id: 'Q7', 
        dimension: 'Dimensão 2: Gestão das Operações', 
        text: 'Você controla a qualidade do produto ou do serviço que sua empresa oferece?', 
        options: [{ value: 'a', label: 'Não temos controle de qualidade.' }, { value: 'b', label: 'Fazemos ações corretivas, quando há eventuais problemas.' }, { value: 'c', label: 'Temos procedimentos claros para garantir a qualidade.' }],
        justificativaHelp: 'Descreva os mecanismos de controle de qualidade adotados (ex: inspeção de produtos, padronização de serviços, acompanhamento de trocas/devoluções e ações corretivas).'
    },
    { 
        id: 'Q8', 
        dimension: 'Dimensão 2: Gestão das Operações', 
        text: 'Sua empresa premia ou bonifica os colaboradores quando as metas são alcançadas?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Sim, esporadicamente fazemos ações de reconhecimento.' }, { value: 'c', label: 'Sim, existe metodologia determinada que prevê reconhecimento regular.' }],
        justificativaHelp: 'Explique como funciona a política de reconhecimento ou bonificação da equipe (ex: comissões, bônus por metas coletivas/individuais, prêmios ou elogios formais).'
    },
    // Dimensão 3
    { 
        id: 'Q9', 
        dimension: 'Dimensão 3: Gestão de Marketing', 
        text: 'Normalmente, como são determinados os preços de seus produtos?', 
        options: [{ value: 'a', label: 'Pelo que consideramos razoável.' }, { value: 'b', label: 'Defino preços com base no que é praticado pela concorrência.' }, { value: 'c', label: 'Precificamos com base nos nossos custos e no mercado.' }],
        justificativaHelp: 'Descreva os critérios utilizados para formação do preço de venda (ex: cálculo de custos + margem de lucro, pesquisa de mercado/concorrentes, valor percebido pelo cliente).'
    },
    { 
        id: 'Q10', 
        dimension: 'Dimensão 3: Gestão de Marketing', 
        text: 'A empresa pesquisa a satisfação de seus clientes sobre seus produtos/serviços?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Fazemos perguntas informais para os nossos clientes.' }, { value: 'c', label: 'Sim, fazemos pesquisas periódicas e analisamos as respostas.' }],
        justificativaHelp: 'Informe como a pesquisa de satisfação é realizada (ex: formulários online, pesquisas de pós-venda, caixa de sugestões, métrica NPS) e com qual frequência as respostas são analisadas.'
    },
    { 
        id: 'Q11', 
        dimension: 'Dimensão 3: Gestão de Marketing', 
        text: 'Você sabe quais são as necessidades de seus clientes e as tendências de mercado?', 
        options: [{ value: 'a', label: 'Não analiso as necessidades dos clientes e tendências.' }, { value: 'b', label: 'Converso com meus clientes informalmente e acompanho tendências.' }, { value: 'c', label: 'Identifico periodicamente as necessidades e tendências e uso as informações.' }],
        justificativaHelp: 'Descreva os métodos ou ferramentas que utiliza para acompanhar tendências do seu setor e entender o perfil/necessidades dos seus clientes (ex: feedbacks de vendas, feiras do setor, redes sociais, pesquisas).'
    },
    { 
        id: 'Q12', 
        dimension: 'Dimensão 3: Gestão de Marketing', 
        text: 'São realizadas ações de divulgação da empresa e promoção dos produtos e/ou serviços?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Tenho algumas ações planejadas, mas a maioria sem plano prévio.' }, { value: 'c', label: 'Sim, realizo ações de forma planejada e acompanho os resultados.' }],
        justificativaHelp: 'Descreva quais canais e estratégias de divulgação são utilizados (ex: redes sociais, tráfego pago, rádio/panfletos, parcerias) e como mede os resultados dessas ações.'
    },
    // Dimensão 4
    { 
        id: 'Q13', 
        dimension: 'Dimensão 4: Práticas de Inovação', 
        text: 'Os funcionários procuram novas formas de realizar suas atividades?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Sim, alguns fazem isso por iniciativa própria.' }, { value: 'c', label: 'Sim e são incentivados a isso pelos gestores.' }],
        justificativaHelp: 'Explicite de que forma a empresa incentiva e apoia novas ideias trazidas pela equipe (ex: reuniões de brainstorming, caixa de ideias, autonomia para propor sugestões e teste de melhorias).'
    },
    { 
        id: 'Q14', 
        dimension: 'Dimensão 4: Práticas de Inovação', 
        text: 'No último ano, a empresa mudou algum processo para se tornar mais eficiente?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Sim, mas não mensuramos o resultado dessas mudanças.' }, { value: 'c', label: 'Sim, implementamos melhorias e medimos os resultados destas.' }],
        justificativaHelp: 'Mencione quais processos internos foram modificados ou otimizados no último ano e quais foram os resultados práticos observados (ex: redução de tempo, menor desperdício, economia).'
    },
    { 
        id: 'Q15', 
        dimension: 'Dimensão 4: Práticas de Inovação', 
        text: 'A empresa lançou algum novo produto ou serviço nos últimos 2 anos?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Ainda não, mas estamos em planejamento para isso.' }, { value: 'c', label: 'Sim.' }],
        justificativaHelp: 'Descreva os novos produtos ou serviços lançados nos últimos 2 anos (ou em planejamento/desenvolvimento) e como foi a recepção pelo mercado.'
    },
    { 
        id: 'Q16', 
        dimension: 'Dimensão 4: Práticas de Inovação', 
        text: 'A empresa entrou em um novo mercado ou criou um nicho em um mercado que já atua nos últimos 2 anos?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Ainda não, mas estamos em planejamento para isso.' }, { value: 'c', label: 'Sim.' }],
        justificativaHelp: 'Informe se a empresa passou a atender novas regiões, novos perfis de clientes ou criou um segmento diferenciado de atuação nos últimos 2 anos.'
    },
    // Dimensão 5
    { 
        id: 'Q17', 
        dimension: 'Dimensão 5: Transformação Digital', 
        text: 'Sua empresa possui método e sistema de gestão de estoque, finanças, faturamento, fiscal, compras, vendas e processos?', 
        options: [{ value: 'a', label: 'Não temos nenhum método.' }, { value: 'b', label: 'Temos um método manual ou com planilhas.' }, { value: 'c', label: 'Utilizamos sistemas informatizados de gestão (ERP).' }],
        justificativaHelp: 'Descreva quais ferramentas, planilhas ou softwares de gestão (ERP, sistema financeiro, controle de estoque) são utilizados na empresa e como estão integrados.'
    },
    { 
        id: 'Q18', 
        dimension: 'Dimensão 5: Transformação Digital', 
        text: 'De que forma a empresa faz uso da internet e das redes sociais?', 
        options: [{ value: 'a', label: 'Não usamos.' }, { value: 'b', label: 'Usamos para fazer divulgação.' }, { value: 'c', label: 'Vendemos pela internet/redes sociais.' }],
        justificativaHelp: 'Explique de que forma a internet e redes sociais (Instagram, WhatsApp Business, E-commerce, Google) contribuem para o negócio (ex: atração de clientes, relacionamento ou vendas diretas).'
    },
    { 
        id: 'Q19', 
        dimension: 'Dimensão 5: Transformação Digital', 
        text: 'Sua empresa organiza e gere o cadastro de clientes?', 
        options: [{ value: 'a', label: 'Não registramos o cadastro.' }, { value: 'b', label: 'Sim, de forma manual ou na agenda do celular.' }, { value: 'c', label: 'Sim, utilizamos sistemas informatizados (CRM).' }],
        justificativaHelp: 'Descreva como o cadastro de clientes é organizado e atualizado (ex: sistema CRM, planilha, agenda) e quais informações são registradas (histórico de compras, preferências, contato).'
    },
    { 
        id: 'Q20', 
        dimension: 'Dimensão 5: Transformação Digital', 
        text: 'Sua empresa utiliza dados dos sistemas existentes na tomada de decisão?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Sim, mas não é uma rotina.' }, { value: 'c', label: 'Sim, frequentemente.' }],
        justificativaHelp: 'Informe quais relatórios, dados ou métricas gerados pelos seus sistemas são analisados periodicamente para tomar decisões estratégicas no negócio.'
    },
    // Dimensão 6
    { 
        id: 'Q21', 
        dimension: 'Dimensão 6: ESG', 
        text: 'Sua empresa adota boas práticas para evitar desperdício de água, energia, materiais de consumo?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Sim, mas não realizamos medições.' }, { value: 'c', label: 'Sim, realizamos medições para acompanhar as reduções.' }],
        justificativaHelp: 'Descreva as práticas sustentáveis e de redução de desperdícios adotadas na rotina (ex: reciclagem, desligamento de equipamentos, controle de uso de água/energia/papel) e se há medição desses economias.'
    },
    { 
        id: 'Q22', 
        dimension: 'Dimensão 6: ESG', 
        text: 'Sua empresa prioriza materiais, produtos, embalagens e equipamentos ecorresponsáveis?', 
        options: [{ value: 'a', label: 'Não priorizamos.' }, { value: 'b', label: 'As vezes. Não é uma rotina.' }, { value: 'c', label: 'Sim, temos política para buscarmos ser ecorresponsáveis.' }],
        justificativaHelp: 'Informe se a empresa prioriza fornecedores sustentáveis, materiais recicláveis, embalagens biodegradáveis ou equipamentos de alta eficiência energética.'
    },
    { 
        id: 'Q23', 
        dimension: 'Dimensão 6: ESG', 
        text: 'Sua empresa possui mecanismos e ferramentas para proteção de dados dos clientes (LGPD)?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Sim, mas não é uma rotina.' }, { value: 'c', label: 'Sim, frequentemente.' }],
        justificativaHelp: 'Descreva as ações ou políticas adotadas para proteger dados pessoais de clientes e colaboradores (ex: controle de acesso com senha, consentimento de uso de dados, armazenamento seguro).'
    },
    { 
        id: 'Q24', 
        dimension: 'Dimensão 6: ESG', 
        text: 'Sua empresa possui canais de comunicação com o cliente e os colaboradores para sugestões de melhoria?', 
        options: [{ value: 'a', label: 'Não.' }, { value: 'b', label: 'Sim, mas não está sistematizado.' }, { value: 'c', label: 'Sim, tratamos as sugestões e realizamos as devolutivas.' }],
        justificativaHelp: 'Descreva os canais de comunicação disponíveis para sugestões e reclamações (ex: canal interno, ouvidoria, WhatsApp, formulários) e como a empresa analisa e dá retorno a essas contribuições.'
    }
];

let currentIndex = 0;
let responses = {};
let historyStack = []; // Pilha para o botão "Voltar"
let currentStep = 'welcome'; // 'welcome' | 'cnpj' | 'questions'
let cnpjValue = '';

const appContainer = document.getElementById('app');

function updateProgress(text, percent, visible = true) {
    const wrapper = document.getElementById('progress-wrapper');
    const textEl = document.getElementById('progress-text');
    const percentEl = document.getElementById('progress-percent');
    const fillEl = document.getElementById('progress-bar-fill');

    if (!wrapper) return;

    if (!visible) {
        wrapper.style.display = 'none';
        return;
    }

    wrapper.style.display = 'block';
    if (textEl) textEl.textContent = text;
    if (percentEl) percentEl.textContent = `${percent}%`;
    if (fillEl) fillEl.style.width = `${percent}%`;
}

function renderWelcomeScreen() {
    currentStep = 'welcome';
    updateProgress('', 0, false);
    appContainer.innerHTML = `
        <div style="animation: fadeIn 0.4s;">
            <div class="dimension-title">Diagnóstico Empresarial</div>
            <div class="question-title" style="font-size: 1.3rem; color: var(--primary-color);">Bem-vindo ao Radar de Inovação</div>
            
            <p style="font-size: 0.95rem; line-height: 1.6; color: #444; margin-bottom: 20px;">
                O <strong>Radar de Inovação</strong> é uma ferramenta de diagnóstico do programa <strong>ALI Produtividade (Sebrae)</strong> projetada para avaliar o nível de maturidade em inovação e gestão da sua empresa. Através de 24 questões divididas em 6 dimensões estratégicas (Controles Gerenciais, Operações, Marketing, Inovação, Transformação Digital e ESG), identificaremos seus pontos fortes e principais oportunidades de melhoria.
            </p>

            <div style="background-color: #fff8e6; border-left: 4px solid #f5a623; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
                <strong style="color: #905d00; display: block; margin-bottom: 6px; font-size: 0.95rem;">⚠️ Atenção Importante:</strong>
                <p style="margin: 0; font-size: 0.88rem; color: #664200; line-height: 1.5;">
                    O questionário precisa ser respondido <strong>até o final</strong>, até que seja exibida a tela de confirmação de envio do questionário. As suas respostas <strong>não ficam salvas temporariamente</strong>. Se você fechar ou recarregar a página antes da conclusão, será necessário responder todo o questionário novamente.
                </p>
            </div>

            <div class="buttons-row">
                <button class="btn" onclick="startFlowFromWelcome()">Começar</button>
            </div>
        </div>
    `;
}

function startFlowFromWelcome() {
    historyStack.push('welcome');
    renderCNPJScreen();
}

function isValidCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) return false;

    // Elimina CNPJs invalidos conhecidos (ex: 00000000000000, 11111111111111...)
    if (/^(\d)\1+$/.test(cnpj)) return false;

    // Valida primeiro dígito verificador
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;

    // Valida segundo dígito verificador
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;

    return true;
}

function handleCNPJInput(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 14) value = value.substring(0, 14);

    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');

    input.value = value;
    cnpjValue = value;

    const errorDiv = document.getElementById('cnpj-error');
    if (errorDiv) errorDiv.style.display = 'none';
    input.style.borderColor = 'var(--border-color)';
}

function renderCNPJScreen() {
    currentStep = 'cnpj';
    updateProgress('Identificação da Empresa', 0, true);
    const showBackBtn = historyStack.length > 0;
    appContainer.innerHTML = `
        <div style="animation: fadeIn 0.4s;">
            <div class="dimension-title">Identificação da Empresa</div>
            <div class="question-title">Por favor, insira o CNPJ da empresa.</div>
            
            <div style="margin-bottom: 24px;">
                <label for="cnpj-input" style="font-weight: 500; font-size: 0.9rem; margin-bottom: 8px; display: block;">CNPJ da Empresa:</label>
                <input type="text" id="cnpj-input" placeholder="00.000.000/0000-00" 
                       value="${cnpjValue}" 
                       oninput="handleCNPJInput(this)" 
                       onkeypress="if(event.key === 'Enter') submitCNPJ()"
                       maxlength="18"
                       style="width: 100%; padding: 14px; border: 1px solid var(--border-color); border-radius: 8px; font-size: 1rem; box-sizing: border-box; font-family: inherit;">
                <div id="cnpj-error" style="color: #d93025; font-size: 0.85rem; margin-top: 8px; display: none;">
                    Por favor, insira um número de CNPJ válido.
                </div>
            </div>

            <div class="buttons-row">
                ${showBackBtn ? `<button class="btn btn-secondary" onclick="prevQuestion()">Voltar</button>` : ''}
                <button class="btn" id="start-btn" onclick="submitCNPJ()">Avançar</button>
            </div>
        </div>
    `;
    setTimeout(() => {
        const input = document.getElementById('cnpj-input');
        if (input) input.focus();
    }, 100);
}

function submitCNPJ() {
    const input = document.getElementById('cnpj-input');
    const errorDiv = document.getElementById('cnpj-error');
    const cleanCNPJ = input.value.replace(/\D/g, '');

    if (!isValidCNPJ(cleanCNPJ)) {
        errorDiv.style.display = 'block';
        input.style.borderColor = '#d93025';
        return;
    }

    errorDiv.style.display = 'none';
    input.style.borderColor = 'var(--border-color)';
    cnpjValue = input.value;
    responses['cnpj'] = cnpjValue;

    historyStack.push('cnpj');
    currentIndex = 0;
    currentStep = 'questions';
    renderQuestion();
}

function renderQuestion() {
    currentStep = 'questions';
    if (currentIndex >= questions.length) {
        submitData();
        return;
    }

    const qNum = currentIndex + 1;
    const pct = Math.round((qNum / questions.length) * 100);
    updateProgress(`Questão ${qNum} de ${questions.length}`, pct, true);

    const q = questions[currentIndex];
    const previousAnswer = responses[q.id];
    const showBackBtn = historyStack.length > 0;

    appContainer.innerHTML = `
        <div style="animation: fadeIn 0.4s;">
            <div class="dimension-title">${q.dimension}</div>
            <div class="question-title">${q.id}. ${q.text}</div>
            
            <div class="options-container">
                ${q.options.map(opt => `
                    <label class="option-label">
                        <input type="radio" name="${q.id}" value="${opt.value}" 
                               onchange="handleOptionChange(this)"
                               ${previousAnswer && previousAnswer.resposta === opt.value ? 'checked' : ''}>
                        ${opt.label}
                    </label>
                `).join('')}
            </div>

            <div class="justificativa-container" id="justificativa-box" 
                 style="display: ${previousAnswer && previousAnswer.resposta !== 'a' ? 'flex' : 'none'};">
                <label for="justificativa">Justificativa (Obrigatório):</label>
                ${q.justificativaHelp ? `
                    <div class="justificativa-help">
                        <strong>💡 O que detalhar na justificativa:</strong>
                        <p>${q.justificativaHelp}</p>
                    </div>
                ` : ''}
                <textarea id="justificativa" placeholder="Descreva brevemente a sua resposta...">${previousAnswer ? previousAnswer.justificativa : ''}</textarea>
            </div>

            <div class="buttons-row">
                ${showBackBtn ? `<button class="btn btn-secondary" onclick="prevQuestion()">Voltar</button>` : ''}
                <button class="btn" id="next-btn" onclick="nextQuestion()" ${!previousAnswer ? 'disabled' : ''}>
                    ${currentIndex === questions.length - 1 ? 'Finalizar' : 'Próxima Questão'}
                </button>
            </div>
        </div>
    `;
}

function handleOptionChange(radio) {
    const justificativaBox = document.getElementById('justificativa-box');
    const nextBtn = document.getElementById('next-btn');

    nextBtn.disabled = false;

    if (radio.value !== 'a') {
        justificativaBox.style.display = 'flex';
    } else {
        justificativaBox.style.display = 'none';
        document.getElementById('justificativa').value = '';
    }
}

function prevQuestion() {
    if (historyStack.length > 0) {
        const prev = historyStack.pop();
        if (prev === 'welcome') {
            renderWelcomeScreen();
        } else if (prev === 'cnpj') {
            renderCNPJScreen();
        } else {
            currentIndex = prev;
            renderQuestion();
        }
    }
}

function nextQuestion() {
    const q = questions[currentIndex];
    const selectedOption = document.querySelector(`input[name="${q.id}"]:checked`).value;
    const justificativaText = document.getElementById('justificativa').value;

    if (selectedOption !== 'a' && justificativaText.trim() === '') {
        alert('Por favor, preencha a justificativa.');
        return;
    }

    // Salva na memória
    responses[q.id] = {
        resposta: selectedOption,
        justificativa: justificativaText
    };

    // Guarda a questão atual no histórico antes de avançar
    historyStack.push(currentIndex);

    // Regra Especial da Q1
    if (q.id === 'Q1') {
        if (selectedOption === 'a') {
            responses['Q2'] = {
                resposta: 'a',
                justificativa: 'Pulada por regra da Q1'
            };
            responses['Q3'] = {
                resposta: 'a',
                justificativa: 'Pulada por regra da Q1'
            };
            currentIndex = questions.findIndex(quest => quest.id === 'Q4');
        } else {
            if (responses['Q2'] && responses['Q2'].justificativa === 'Pulada por regra da Q1') {
                delete responses['Q2'];
            }
            if (responses['Q3'] && responses['Q3'].justificativa === 'Pulada por regra da Q1') {
                delete responses['Q3'];
            }
            currentIndex++;
        }
    } else {
        currentIndex++;
    }

    renderQuestion();
}

function submitData() {
    appContainer.innerHTML = `
        <div class="end-screen" style="animation: fadeIn 0.4s;">
            <h2>Enviando seus dados...</h2>
            <p>Por favor, aguarde.</p>
        </div>
    `;

    // SIMULAÇÃO DE ENVIO: 
    setTimeout(() => {
        appContainer.innerHTML = `
            <div class="end-screen" style="animation: fadeIn 0.4s;">
                <h2>Obrigado por responder o Radar de Inovação! 🎉</h2>
                <p>Suas respostas foram registradas com sucesso na nossa base de dados.</p>
                <p><strong>Em breve, você receberá um relatório completo com o resultado do seu diagnóstico.</strong></p>
            </div>
        `;
    }, 2000);
}

renderWelcomeScreen();
