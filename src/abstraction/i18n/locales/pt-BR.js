import { en } from "./en.js";

export const ptBR = {
  ...en,
  accessibility: {
    ...en.accessibility,
    skipToContent: "Ir para o conteúdo",
    primaryNavigation: "Navegação principal",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  theme: {
    toggle: "Alternar tema",
    toLight: "Usar tema claro",
    toDark: "Usar tema escuro",
  },
  language: { choose: "Escolher idioma" },
  meta: {
    title: "PDownloader — Gerenciador de downloads para Windows",
    description:
      "Downloads paralelos, retomada de tarefas e integração com o navegador em um aplicativo nativo para Windows.",
  },
  nav: {
    features: "Recursos",
    architecture: "Arquitetura",
    extension: "Extensão",
    docs: "Documentação",
    github: "GitHub",
  },
  hero: {
    ...en.hero,
    eyebrow: "Gerenciador de downloads multissegmento · Windows",
    titlePrefix: "Divida o arquivo.",
    titleGrad: "Não a sua paciência.",
    subtitle:
      "O PDownloader divide arquivos grandes em segmentos paralelos, retoma tarefas interrompidas e recebe links de mídia diretamente do navegador.",
    ctaPrimary: "Baixar para Windows",
    ctaSecondary: "Ver código no GitHub",
    ctaExtension: "Instalar extensão",
    metaThreads: "8 segmentos paralelos por padrão",
    metaLicense: "Licenciado sob GPL-3.0",
    previewLabel:
      "PDownloader.Runner em três estados: baixando, mesclando o arquivo e concluído",
    runner: {
      ...en.hero.runner,
      title: "PDownloader — Gerenciador de downloads",
      downloading: "Baixando",
      merging: "Mesclando arquivo...",
      completed: "Concluído",
      streamsTitle: "Progresso das threads de download · Arquivo",
      thread: "Thread {number}",
      pause: "Pausar",
      cancel: "Cancelar",
      done: "Concluído",
      openFolder: "Abrir pasta",
      openFile: "Abrir arquivo",
    },
  },
  segbar: {
    ...en.segbar,
    statusRunning: "baixando — 8 segmentos",
    statusMerged: "mesclados em 1 arquivo",
    caption:
      "Cada segmento usa sua própria solicitação de intervalo. Se um falhar, ele tenta novamente com espera progressiva enquanto os demais continuam.",
  },
  features: {
    ...en.features,
    eyebrow: "Recursos",
    title: "Um mecanismo para todos os downloads",
    subtitle:
      "Arquivos, conexões interrompidas e mídia online são gerenciados em um único aplicativo.",
    segments: {
      title: "Download multissegmento",
      desc: "Divide um arquivo em solicitações paralelas por intervalo de bytes — 8 threads por padrão — e retorna automaticamente a um único fluxo quando o servidor não aceita intervalos.",
    },
    resume: {
      title: "Retomar e tentar novamente",
      desc: "O progresso dos segmentos é salvo no disco, portanto fechar ou travar o aplicativo não perde o download. Segmentos com falha são repetidos com espera exponencial.",
    },
    hls: {
      title: "Streaming HLS / DASH",
      desc: "Detecta listas .m3u8, baixa fragmentos simultaneamente com um limite controlado e depois os mescla em um único arquivo.",
    },
    ytdlp: {
      title: "YouTube via yt-dlp",
      desc: "O yt-dlp resolve formatos e URLs de stream, inclusive autenticação por cookies para superar verificações de robô; o mecanismo do PDownloader faz a transferência.",
    },
    extension: {
      title: "Extensão do navegador",
      desc: "Extensão oficial para navegadores Chromium e Firefox com menu de contexto, entrada de URL e detecção automática de links para download.",
    },
    tray: {
      title: "Bandeja e serviço em segundo plano",
      desc: "Um serviço leve coordena a interface principal, a janela de downloads e o ícone da bandeja via IPC local, sem chamar atenção até ser necessário.",
    },
  },
  architecture: {
    ...en.architecture,
    eyebrow: "Por dentro",
    title: "Quatro processos pequenos e uma ponte local",
    subtitle:
      "A extensão conversa com uma ponte HTTP local; o PDownloader encaminha o restante pelo CFS.",
    diagramLabel: "Arquitetura de processos do PDownloader",
    browser: "Extensão do navegador",
    browserSub: "menu de contexto / popup",
    coreSub: "ponte HTTP + roteador CFS",
    mainuiSub: "interface principal, configurações",
    traySub: "ícone da bandeja",
    legendTitle: "Ponte HTTP local — localhost:6287",
    legend1v: "verificação de integridade",
    legend2v: "colocar um download comum na fila",
    legend3v: "resolver formatos via yt-dlp",
    legend4v: "iniciar download resolvido do YouTube/site",
  },
  extension: {
    ...en.extension,
    eyebrow: "Extensão do navegador",
    title: "Capture links sem sair da página",
    subtitle:
      "Disponível oficialmente para navegadores baseados em Chromium e Firefox.",
    storeButton: "Instalar extensão do navegador",
    bridgeOnline: "Ponte local pronta",
    item1: "Opções no menu de contexto de links, vídeos e páginas.",
    item2:
      "Popup para informar uma URL, escolher a pasta de destino e listar links disponíveis na página.",
    item3:
      "Captura automática de cliques em tipos comuns de arquivos baixáveis.",
    item4:
      "Notificações da área de trabalho para inclusão bem-sucedida na fila ou erros de conexão.",
    flowStep1: "clique em “Baixar com PDownloader”",
    flowStep3: "Core analisa e encaminha pelo CFS",
    flowStep4: "Runner adiciona à fila → DownloadEngine inicia",
    modal: {
      eyebrow: "Extensão oficial do navegador",
      title: "Escolha o mecanismo do navegador",
      subtitle:
        "Um pacote de extensão funciona em todos os navegadores baseados no mesmo mecanismo.",
      close: "Fechar",
      available: "Disponível",
      chromiumTitle: "Mecanismo Chromium",
      chromiumDesc: "Instale a extensão oficial pela Chrome Web Store.",
      chromiumBrowsersLabel: "Navegadores Chromium compatíveis",
      geckoTitle: "Mecanismo Firefox (Gecko)",
      geckoDesc: "Instale a extensão oficial pelo Firefox Add-ons.",
      geckoBrowsersLabel: "Navegadores Gecko compatíveis",
      openStore: "Abrir Chrome Web Store",
      openFirefoxAddons: "Abrir Firefox Add-ons",
    },
  },
  cta: {
    ...en.cta,
    eyebrow: "Começar",
    title: "Compile o código ou use o instalador",
    subtitle:
      "O PDownloader é código aberto sob GPL-3.0. Clone, examine o mecanismo ou simplesmente instale o aplicativo.",
    primary: "Baixar a versão mais recente",
    secondary: "Explorar o código",
    req2: "Windows 10 ou posterior, x64",
    req3: "yt-dlp para resolver YouTube e sites",
    copy: "Copiar comandos",
    copied: "Copiado",
    copyError: "Falha ao copiar",
    terminalComment1: "# restaura e compila toda a solução",
    terminalComment2:
      "# inicia automaticamente o serviço Core em segundo plano",
  },
  footer: {
    tagline: "Gerenciador de downloads multissegmento para Windows.",
    source: "Código-fonte",
    releases: "Versões",
    license: "Licença (GPL-3.0)",
  },
  docs: {
    ...en.docs,
    metaTitle: "Documentação do PDownloader",
    eyebrow: "Documentação",
    title: "Guias do PDownloader",
    intro:
      "Escolha um assunto sobre instalação, integração com o navegador ou solução de problemas.",
    menu: "Menu da documentação",
    loading: "Carregando artigo…",
    loadError: "Não foi possível carregar este artigo.",
    retry: "Tentar novamente",
    fallbackTitle: "Versão em inglês",
    fallbackDesc:
      "Este artigo ainda não está disponível no idioma selecionado.",
    backHome: "Voltar ao início",
    categories: {
      gettingStarted: "Primeiros passos",
      integration: "Integração com o navegador",
      support: "Suporte",
    },
    articles: {
      introduction: "Introdução",
      installation: "Instalação",
      browserExtension: "Extensão do navegador",
      troubleshooting: "Solução de problemas",
      uninstallation: "Desinstalação",
    },
  },
};

ptBR.docs.metaDescription =
  "Guias de instalação, integração com o navegador, solução de problemas e remoção do PDownloader.";
