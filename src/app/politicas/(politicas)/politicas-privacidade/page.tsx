import PolicyItems from "@/app/components/PolicyItems/PolicyItems";

export default function policiesPage() {
  return (
    <div className="px-[30px] py-[20px] text-neutral-rich-black flex flex-col gap-[1.6rem]">
      <h1 className="text-[24px] font-bold text-center">
        Políticas de Privacidade <br /> Última atualização: 09/07/2024
      </h1>
      <PolicyItems
        num={1}
        title="Informações Coletadas"
        itens={[
          "Nome e sobrenome",
          "Email",
          "Senha",
          "Informações de acesso (como histórico de login)",
          "Desempenho em questões (respostas e resultados durante o uso da plataforma)",
        ]}
      />
      <PolicyItems
        num={2}
        title="Uso das Informações"
        subtitle="As informações coletadas são usadas para:"
        itens={[
          "Gerenciar e personalizar sua experiência na plataforma",
          "Monitorar e analisar seu desempenho",
          "Melhorar nossos serviços e funcionalidades",
          "Informações de acesso (como histórico de login)",
          "Entrar em contato com você sobre atualizações e mudanças na plataforma",
        ]}
      />
      <PolicyItems
        num={3}
        title="Compartilhamento de Informações"
        subtitle="Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para:"
        itens={[
          "Cumprir com a lei ou responder a processos legais",
          "Proteger nossos direitos e a segurança dos usuários",
        ]}
      />
      <PolicyItems
        num={4}
        title="Segurança dos Dados"
        subtitle="Utilizamos medidas de segurança para proteger suas informações contra acesso, alteração, divulgação ou destruição não autorizados. No entanto, nenhuma transmissão de dados pela internet ou sistema de armazenamento eletrônico é completamente segura."
        itens={[]}
      />
      <PolicyItems
        num={5}
        title="Alterações na Política de Privacidade"
        subtitle="Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas através do email cadastrado ou por meio de notificações na plataforma."
        itens={[]}
      />
      <PolicyItems
        num={6}
        title="Direitos dos Usuários"
        subtitle="Você tem o direito de acessar, corrigir ou excluir suas informações pessoais armazenadas em nossa plataforma. Para exercer esses direitos, entre em contato conosco através do email [willy.academy@proton.me]"
        itens={[]}
      />
      <PolicyItems
        num={7}
        title="Contato"
        subtitle="Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco através do email [willy.academy@proton.me]"
        itens={[]}
      />
    </div>
  );
}
