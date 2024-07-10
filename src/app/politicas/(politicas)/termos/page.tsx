import PolicyItems from "@/app/components/PolicyItems/PolicyItems";

export default function termsPage() {
  return (
    <div className="px-[30px] py-[20px] text-neutral-rich-black flex flex-col gap-[1.6rem]">
      <h1 className="text-[24px] font-bold text-center">
        Termos de Uso <br /> Última atualização: 09/07/2024
      </h1>
      <PolicyItems
        num={1}
        title="Aceitação dos Termos"
        subtitle="Ao acessar e usar a plataforma Willy Academy, você concorda em cumprir e ser regido por estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços."
        itens={[]}
      />
      <PolicyItems
        num={2}
        title="Serviços Oferecidos"
        subtitle="A Willy Academy oferece acesso a um banco de questões, correções inteligentes, materiais prontos, monitoramento de desempenho e recursos para ajudar os usuários a se prepararem para exames e avaliações."
        itens={[]}
      />
      <PolicyItems
        num={3}
        title="Cadastro"
        subtitle="Para utilizar nossos serviços, você deve criar uma conta, fornecendo seu nome, sobrenome, email e senha. Você é responsável por manter a confidencialidade da sua senha e por todas as atividades que ocorrem sob sua conta."
        itens={[]}
      />
      <PolicyItems
        num={4}
        title="Dados Coletados"
        subtitle="Coletamos os seguintes dados:"
        itens={[
          "Nome e sobrenome",
          "Email",
          "Senha",
          "Informações de Acesso",
          "Desempenho em Questões",
        ]}
      />
      <PolicyItems
        num={5}
        title="Relatório de Erros e Bugs"
        subtitle="Como nossa plataforma está em desenvolvimento, solicitamos que todos os usuários reportem erros e bugs encontrados para futuras melhorias. Isso pode ser feito através dos canais de suporte disponíveis na plataforma."
        itens={[]}
      />
      <PolicyItems
        num={6}
        title="Alterações nos Termos"
        subtitle="Os Termos de Uso podem ser alterados a qualquer momento. Notificaremos os usuários sobre quaisquer alterações significativas através do email cadastrado ou por meio de notificações na plataforma."
        itens={[]}
      />
      <PolicyItems
        num={7}
        title="Testes e Desenvolvimento"
        subtitle="Podemos realizar testes e implementar novas funcionalidades periodicamente. Seu uso contínuo da plataforma implica consentimento para participar desses testes."
        itens={[]}
      />
      <PolicyItems
        num={8}
        title="Segurança de Dados"
        subtitle="Implementamos medidas de segurança para proteger seus dados. No entanto, não podemos garantir a segurança absoluta de suas informações."
        itens={[]}
      />
      <PolicyItems
        num={9}
        title="Limitação de Responsabilidade"
        subtitle="A Willy Academy não se responsabiliza por qualquer dano direto ou indireto resultante do uso da plataforma."
        itens={[]}
      />
      <PolicyItems
        num={10}
        title="Limitação de Responsabilidade"
        subtitle="Para dúvidas ou informações adicionais, entre em contato conosco através do email [willy.academy@proton.me]."
        itens={[]}
      />
    </div>
  );
}
