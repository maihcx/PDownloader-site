import { en } from "./en.js";

export const ptBR = {
  ...en,
  accessibility: { ...en.accessibility, skipToContent: "Ir para o conteúdo", primaryNavigation: "Navegação principal", language: "Idioma", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
  theme: { toggle: "Alternar tema", toLight: "Usar tema claro", toDark: "Usar tema escuro" },
  language: { choose: "Escolher idioma" },
  meta: { title: "PDownloader — Gerenciador de downloads para Windows", description: "Downloads paralelos, retomada de tarefas e integração com o navegador em um aplicativo nativo para Windows." },
  nav: { features: "Recursos", architecture: "Arquitetura", extension: "Extensão", docs: "Documentação", github: "GitHub" },
  hero: { ...en.hero, eyebrow: "Gerenciador de downloads multissegmento · Windows", titlePrefix: "Divida o arquivo.", titleGrad: "Não a sua paciência.", subtitle: "O PDownloader divide arquivos grandes em segmentos paralelos, retoma tarefas interrompidas e recebe links de mídia diretamente do navegador.", ctaPrimary: "Baixar para Windows", ctaSecondary: "Ver código no GitHub", ctaExtension: "Instalar extensão" },
  features: { ...en.features, eyebrow: "Recursos", title: "Um mecanismo para todos os downloads", subtitle: "Arquivos, conexões interrompidas e mídia online são gerenciados em um único aplicativo." },
  architecture: { ...en.architecture, eyebrow: "Por dentro", title: "Quatro processos pequenos e uma ponte local", subtitle: "A extensão conversa com uma ponte HTTP local; o PDownloader encaminha o restante pelo CFS." },
  extension: { ...en.extension, eyebrow: "Extensão do navegador", title: "Capture links sem sair da página", subtitle: "Disponível oficialmente na Chrome Web Store para navegadores baseados em Chromium." },
  cta: { ...en.cta, eyebrow: "Começar", title: "Instale o aplicativo ou compile o código", primary: "Baixar a versão mais recente", secondary: "Explorar o código" },
  footer: { tagline: "Gerenciador de downloads multissegmento para Windows.", source: "Código-fonte", releases: "Versões", license: "Licença (GPL-3.0)" },
  docs: { ...en.docs, metaTitle: "Documentação do PDownloader", eyebrow: "Documentação", title: "Guias do PDownloader", intro: "Escolha um assunto sobre instalação, integração com o navegador ou solução de problemas.", menu: "Menu da documentação", loading: "Carregando artigo…", loadError: "Não foi possível carregar este artigo.", retry: "Tentar novamente", fallbackTitle: "Versão em inglês", fallbackDesc: "Este artigo ainda não está disponível no idioma selecionado.", backHome: "Voltar ao início", categories: { gettingStarted: "Primeiros passos", integration: "Integração com o navegador", support: "Suporte" }, articles: { introduction: "Introdução", installation: "Instalação", browserExtension: "Extensão do navegador", troubleshooting: "Solução de problemas", uninstallation: "Desinstalação" } },
};
