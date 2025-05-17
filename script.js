let userName = "";

// Mapeamento de nomes para imagens
const userImages = {
  "terkelli": "terkelli.jpg",
  "patuci": "patucci.jpg",
  "willian": "willian.jpg",
  "kotinda": "kotinda.jpg",
  "matheus": "matheus.jpg",
  "jhonny": "jhonny.jpg",
  "humberto": "tito.jpg",
  "tito": "tito.jpg"
};

// Respostas simuladas gerais
const respostas = [
  { pergunta: /wifi|internet.*(não funciona|caiu|sem conexão|conexão ruim)/i, resposta: "Verifique se o roteador está ligado. Tente reiniciá-lo. Se persistir, avise!" },
  { pergunta: /computador.*(não liga|não inicia)/i, resposta: "Verifique o cabo de energia e a tomada. Teste com outro cabo, se possível." },
  { pergunta: /impressora.*(não imprime|offline)/i, resposta: "Verifique se está ligada, conectada e com papel/tinta suficientes." },
  { pergunta: /senha|esqueci minha senha/i, resposta: "Você pode redefinir sua senha pelo portal de senhas ou solicitar suporte." },
  { pergunta: /pc.*lento|computador.*devagar/i, resposta: "Feche programas em segundo plano e reinicie. Se continuar, pode ser vírus ou falta de recursos." },
  { pergunta: /email.*(não envia|não recebe)/i, resposta: "Verifique a conexão e mensagens na caixa de saída. Algum erro aparece?" },
  { pergunta: /abrir chamado|ticket/i, resposta: "Informe seu nome, ramal e uma breve descrição para abrir o chamado." },
  { pergunta: /software.*instalar/i, resposta: "Você pode solicitar a instalação pelo portal de TI ou abrir um chamado caso o software não esteja disponível no catálogo." },
  { pergunta: /como melhorar.*performance do computador/i, resposta: "Recomendo fechar os programas em segundo plano, atualizar o sistema e verificar se há vírus ou problemas de hardware." },
  { pergunta: /monitor.*(piscando|falhando)/i, resposta: "Verifique o cabo de vídeo e as configurações de taxa de atualização." },
  { pergunta: /áudio.*(não funciona|parou)/i, resposta: "Verifique se os drivers de áudio estão instalados e se o volume está ativado." },
  { pergunta: /teclado.*(não responde|com problema)/i, resposta: "Tente desconectar e conectar novamente. Se for sem fio, troque as pilhas." },
  { pergunta: /mouse.*(não funciona|travando)/i, resposta: "Tente conectar em outra porta USB ou reiniciar o computador." },
  { pergunta: /notebook.*(esquentando|superaquecendo)/i, resposta: "Use em superfície plana e verifique se as saídas de ar estão livres." },
  { pergunta: /windows.*(não atualiza|erro de atualização)/i, resposta: "Tente reiniciar o sistema e verificar atualizações novamente. Se falhar, relate o código do erro." },
  { pergunta: /sistema.*(travando|congelando)/i, resposta: "Pode ser memória ou software em conflito. Tente fechar programas e reiniciar." },
  { pergunta: /programa.*(não abre|erro ao iniciar)/i, resposta: "Tente reinstalar o programa ou verificar se há atualizações disponíveis." }
];

const comandos = {
  "Ajuda1 - Requisições": [
    "abrir chamado",
    "ticket",
    "instalar software",
    "solicitar equipamento",
    "redefinir senha"
  ],
  "Ajuda2 - Rede": [
    "wifi não funciona",
    "internet caiu",
    "conexão instável"
  ],
  "Ajuda3 - Hardware": [
    "computador não liga",
    "pc lento",
    "monitor piscando",
    "áudio parou",
    "teclado",
    "mouse",
    "notebook"
  ],
  "Ajuda4 - Email e Sistema": [
    "email não envia",
    "windows não atualizando",
    "programa não abre"
  ],
  "Ajuda5 - Outros": [
    "qual é o meu nome?",
    "onde estou?",
    "você é um robô?",
    "como melhorar performance do computador"
  ]
};

// Respostas para cumprimentos simples
const cumprimentos = [
  /^(oi|ol[áa]|opa|eae|eai|tudo bem|blz|fala|fala aí)$/i,
];

// Respostas especiais para cumprimentos conforme usuário
function respostaCumprimento(user) {
  if (user.toLowerCase() === 'kotinda') {
    return "Olá, chefe Kotinda! Como posso servi-lo hoje com toda minha dedicação e respeito?";
  }
  if (user.toLowerCase() === 'jhonny') {
    return "Fala, Jhonny! O menino do estoque tá na área. O que precisa hoje?";
  }
  return "Olá! Como posso ajudar você hoje?";
}

function listarComandos() {
  let lista = "Caso precise de mais ajuda, digite um dos comandos:\n";
  for (const categoria in comandos) {
    lista += `\n${categoria}:\n`;
    comandos[categoria].forEach(cmd => {
      lista += ` - ${cmd}\n`;
    });
  }
  return lista;
}

// Função para obter resposta conforme pergunta
function getResposta(pergunta) {
  pergunta = pergunta.toLowerCase();

  for (const regex of cumprimentos) {
    if (regex.test(pergunta)) {
      return respostaCumprimento(userName);
    }
  }

  for (let i = 0; i < respostas.length; i++) {
    if (respostas[i].pergunta.test(pergunta)) {
      if (userName.toLowerCase() === 'jhonny' && respostas[i].resposta.includes("menino do estoque")) {
        return "Eu já sei, Jhonny! Você é o responsável pelo estoque, né?";
      }
      return respostas[i].resposta;
    }
  }

  // Resposta aleatória preguiçosa com 30% de chance
  if (Math.random() < 0.3) {
    return "Ah, eu não sei como resolver isso... Melhor abrir um chamado para o suporte técnico!";
  }

  return "Abre um chamado, alguma hora eu vejo";
}

const titoImage = 'Imagem do WhatsApp de 2025-05-16 à(s) 20.07.35_6df01599.jpg';

// Iniciar chat ao clicar no botão
document.getElementById('startChatBtn').addEventListener('click', () => {
  const nameInput = document.getElementById('userNameInput').value.trim();
  if (nameInput !== "") {
    userName = nameInput;

    // Esconde a tela de introdução e mostra o chat
    document.getElementById('introScreen').style.display = "none";
    document.getElementById('chatInterface').style.display = "flex";

    addMessage("Tito TI , Diga", "bot");
  } else {
    alert("Por favor, insira seu nome antes de iniciar o chat.");
  }
});

const chatBox = document.getElementById('chatBox');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

// Função para adicionar mensagem no chat
function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);

  const senderInfo = document.createElement('div');
  senderInfo.classList.add('sender-info');

  const name = document.createElement('div');
  name.className = "sender-name";

  // Nome do remetente
  name.textContent = sender === 'user' ? userName : "Tito TI";
  senderInfo.appendChild(name);

  // Imagem do remetente
  const img = document.createElement('img');
  img.classList.add('sender-image');

  if (sender === 'bot') {
    img.src = titoImage;
    img.alt = "Foto de Tito TI";
    senderInfo.insertBefore(img, name);
  } else if (sender === 'user') {
    const lowerName = userName.toLowerCase();
    if (userImages[lowerName]) {
      img.src = userImages[lowerName];
      img.alt = `Foto de ${userName}`;
      senderInfo.insertBefore(img, name);
    }
  }

  msgDiv.appendChild(senderInfo);

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;

  msgDiv.appendChild(bubble);
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Envio da pergunta do usuário
chatForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const pergunta = userInput.value.trim();
  if (pergunta) {
    addMessage(pergunta, 'user');
    userInput.value = '';
    setTimeout(() => {
      const resposta = getResposta(pergunta);
      addMessage(resposta, 'bot');
    }, 600);
  }
});