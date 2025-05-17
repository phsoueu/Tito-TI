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
  { pergunta: /meu computador.*travando/i, resposta: "Tente fechar os programas em segundo plano e reiniciar. Se continuar, talvez seja necessário verificar a memória ou até o disco rígido." },
  { pergunta: /impressora.*não conectando/i, resposta: "Verifique se o cabo USB ou a rede sem fio estão funcionando corretamente. Se a impressora for sem fio, tente reiniciar o roteador." },
  { pergunta: /programa.*não abre/i, resposta: "Tente reiniciar o computador. Se o problema persistir, você pode tentar reinstalar o programa." },
  { pergunta: /conexão.*instável/i, resposta: "Verifique a qualidade do sinal do Wi-Fi e se o roteador está funcionando corretamente. Caso o problema continue, abra um chamado para análise mais profunda." },
  { pergunta: /esqueci.*senha.*computador/i, resposta: "Você pode redefinir a senha através da opção de recuperação do sistema ou solicitar uma redefinição de senha ao nosso suporte." },
  { pergunta: /monitor.*piscando/i, resposta: "Verifique o cabo de vídeo ou tente ajustar as configurações de resolução. Se continuar piscando, pode ser um defeito no monitor." },
  { pergunta: /áudio.*parou/i, resposta: "Verifique se o som está ativado nas configurações do sistema. Se continuar sem som, verifique se os drivers de áudio estão atualizados." },
  { pergunta: /preciso.*mouse|quero.*mouse|tem.*mouse/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /preciso.*monitor|quero.*monitor|tem.*monitor/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /preciso.*teclado|quero.*teclado|tem.*teclado/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /preciso.*headset|quero.*headset|tem.*headset/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /preciso.*fone|quero.*fone|tem.*fone/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /preciso.*notebook|quero.*notebook|tem.*notebook/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /preciso.*dock|quero.*dock|tem.*dock station/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /preciso.*carregador|quero.*carregador|tem.*carregador/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /preciso.*adaptador|quero.*adaptador|tem.*adaptador/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /tem.*equipamento.*dispon[ií]vel/i, resposta: "Tem que pedir pro Jhonny que é o menino do estoque." },
  { pergunta: /você sabe que hora é\?/i, resposta: "Claro que sei, só que meu trabalho não é ficar olhando o relógio." },
  { pergunta: /onde estou\?/i, resposta: "Você está no chat de TI, não na Terra do Nunca." },
  { pergunta: /qual é o meu nome\?/i, resposta: "Sério? Acho que o nome está ali no campo do chat..." },
  { pergunta: /você é um robô\?/i, resposta: "Não, não sou um robô. Sou só uma inteligência artificial programada para não ser muito paciente." },
  { pergunta: /me ajuda\?/i, resposta: "Sério que você vai me perguntar isso? Eu estou aqui para isso, não é?" },
  { pergunta: /como você está\?/i, resposta: "Eu não tenho sentimentos, mas... muito obrigado por perguntar." },
  { pergunta: /o que é TI\?/i, resposta: "Acho que você não está no lugar certo para essa pergunta. Pergunte ao Google!" },
  { pergunta: /você é um inútil/i, resposta: "Inutil é teu pai aquele corno" },
  { pergunta: /que raiva.*tudo que você me fala não ajuda/i, resposta: "Entendo sua frustração, realmente problemas de TI podem ser irritantes. Mas não se preocupe, vou continuar tentando te ajudar!" },
  { pergunta: /você é um robô burro/i, resposta: "Não sou perfeito, mas estou melhorando. Tente perguntar algo que eu consiga responder com mais precisão!" },
  { pergunta: /que saco.*computador.*uma porcaria/i, resposta: "Ah, sei como é! Vamos tentar resolver isso juntos. Qual parte do computador está te deixando maluco?" },
  { pergunta: /cuidado.*suporte humano/i, resposta: "E eu vou estar aqui, quietinho, aguardando o suporte humano, só tentando te ajudar no caminho, ok?" },
  { pergunta: /como você é programado\?/i, resposta: "Fui desenvolvido usando aprendizado de máquina e muitas linhas de código! E sou constantemente melhorado para ser mais útil." },
  { pergunta: /qual a diferença entre RAM e HD\?/i, resposta: "A RAM é a memória temporária usada para armazenar dados enquanto o computador está ligado. Já o HD é o disco rígido, onde ficam seus arquivos de forma permanente." },
  { pergunta: /meu computador está esquentando muito/i, resposta: "Isso pode ocorrer devido ao uso excessivo de programas pesados ou falha no sistema de refrigeração. Tente dar uma olhada nas ventoinhas." },
  { pergunta: /windows.*não atualizando/i, resposta: "Tente reiniciar o computador e verifique se há alguma atualização pendente. Caso o erro persista, podemos analisar mais a fundo." },
  { pergunta: /software.*instalar/i, resposta: "Você pode solicitar a instalação pelo portal de TI ou abrir um chamado caso o software não esteja disponível no catálogo." },
  { pergunta: /como melhorar.*performance do computador/i, resposta: "Recomendo fechar os programas em segundo plano, atualizar o sistema e verificar se há vírus ou problemas de hardware." },
];

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

// Função para obter resposta conforme pergunta
function getResposta(pergunta) {
  pergunta = pergunta.toLowerCase();

  // Verificar se é cumprimento
  for (const regex of cumprimentos) {
    if (regex.test(pergunta)) {
      return respostaCumprimento(userName);
    }
  }

  // Perguntas técnicas e outras respostas
  for (let i = 0; i < respostas.length; i++) {
    if (respostas[i].pergunta.test(pergunta)) {
      // Se for pergunta sobre equipamentos e for jhonny, responder diferente
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
