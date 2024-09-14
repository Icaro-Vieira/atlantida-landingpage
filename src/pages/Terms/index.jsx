import { Link } from "react-router-dom";
import logoAtlantida from "../../assets/illustrations/logo-atlantida.svg";
import logoAtlantidaFooter from "../../assets/illustrations/logo-atlantida-white.svg";
import imageBackgroundTerms from "../../assets/images/image-background-terms.jpg";
import styles from "./Terms.module.css";
import { IconArrowNarrowUp } from "@tabler/icons-react";

export function Terms() {

  return (
    <>
      <nav className={styles.navbar} id="nav">
        <Link to="/">
          <img src={logoAtlantida} alt="" />
        </Link>
        <a href="../../assets/app/Atlântida-1.1.0-beta.apk" className={styles.btn_login} download>
          DOWNLOAD DO APP
        </a>
      </nav>

      <div className={styles.hero_section} id="home">
        <img className={styles.image_bg} src={imageBackgroundTerms} alt="" />
        <div className={styles.text_container}>
          <h1 className={styles.h1}>
            Termos de uso e <br />
            Politica de Privacidade<span className={styles.dot_h1}>.</span>
          </h1>
        </div>
      </div>

      <div className={styles.content_terms}>
        <div className={styles.content_header_container}>
          <span className={styles.title}>Em vigor a partir de 05 de agosto de 2024</span>

          <h1 className={styles.h1_title}>Termos de Uso</h1>

          <p className={styles.information}>Bem-vindo aos Termos de Uso do Sistema de Gerenciamento de Mergulho. Este documento estabelece os termos e condições que regem o uso da plataforma web e móvel desenvolvida para o planejamento e gerenciamento de experiências subaquáticas para mergulhadores. Ao utilizar nosso sistema, você concorda com estes termos e compromete-se a segui-los.</p>
        </div>

        <div className={styles.content_topics_container}>
          <span className={styles.title}>
            1. Introdução
          </span>

          <span className={styles.title}>
            1.1 Tema de Pesquisa
          </span>

          <p className={styles.information}>
            O Sistema de Gerenciamento de Mergulho foi projetado para fornecer aos mergulhadores uma solução multiplataforma para organizar suas experiências subaquáticas. Nossa plataforma permite o armazenamento de informações fundamentais, análise de estatísticas de mergulhos e visualização de novos locais para mergulho.
          </p>

          <span className={styles.title}>
            1.2 Motivações e Justificativas
          </span>

          <p className={styles.information}>
            Reconhecemos a necessidade de uma solução customizada para o gerenciamento eficiente de informações relacionadas ao mergulho. A falta de uma plataforma adequada resulta em perda de dados, dificuldades na identificação de padrões e tendências, e limitações na avaliação pessoal e comparação de experiências entre mergulhadores. Nosso sistema busca aprimorar a experiência dos mergulhadores, promovendo a conservação marinha e incentivando a prática responsável do mergulho.
          </p>


          <span className={styles.title}>
            1.3 Objetivos
          </span>

          <span className={styles.title}>
            1.3.1 Objetivo Geral
          </span>

          <p className={styles.information}>
            Desenvolver um sistema web e móvel destinado ao planejamento e gerenciamento de experiências subaquáticas para mergulhadores.
          </p>

          <span className={styles.title}>
            2. Cadastro de Usuário
          </span>

          <p className={styles.information}>
            Ao utilizar nosso sistema, você concorda em fornecer informações precisas e atualizadas durante o processo de cadastro. As informações solicitadas incluem nome, sobrenome, data de nascimento, email, senha, CEP, país, estado, cidade, bairro, logradouro, número e complemento. Esses dados são essenciais para a criação e acesso à sua conta no sistema.
          </p>

          <span className={styles.title}>
            3. Privacidade e Segurança
          </span>

          <p className={styles.information}>
            Nosso sistema respeita a privacidade dos usuários e adota medidas de segurança para proteger suas informações pessoais. Consulte nossa Política de Privacidade para obter mais detalhes sobre como coletamos, usamos e protegemos seus dados.
          </p>

          <span className={styles.title}>
            4. Uso Adequado do Sistema
          </span>

          <p className={styles.information}>
            Ao utilizar nosso sistema, você concorda em respeitar as leis e regulamentos aplicáveis e em não usar a plataforma para atividades ilegais, fraudulentas, abusivas ou prejudiciais. Você também concorda em não interferir ou danificar o funcionamento do sistema.
          </p>

          <span className={styles.title}>
            5. Alterações nos Termos de Uso
          </span>

          <p className={styles.information}>
            Reservamo-nos o direito de fazer alterações nestes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. Recomendamos que você revise periodicamente estes termos para estar ciente de quaisquer atualizações.
          </p>

          <span className={styles.title}>
            6. Encerramento da Conta
          </span>

          <p className={styles.information}>
            Você pode encerrar sua conta a qualquer momento, entrando em contato conosco ou seguindo as instruções disponíveis no sistema. Reservamo-nos o direito de encerrar ou suspender sua conta caso haja violação destes Termos de Uso.
          </p>

          <span className={styles.title}>
            7. Contato
          </span>

          <p className={styles.information}>
            Se você tiver dúvidas, preocupações ou comentários sobre estes Termos de Uso, entre em contato conosco através do nosso e-mail: <a href="mailto:atlantidamergulhos@gmail.com"><span className={styles.blue_email}>atlantidamergulhos@gmail.com</span></a>
            <br />
            <br />

            Ao utilizar nosso sistema, você concorda com estes Termos de Uso e compromete-se a segui-los.
            Obrigado, Equipe Atlântida Mergulhos.

            <br />
            <br />

            Data de efetivação: 05/08/2024
          </p>



        </div>
      </div>

      <footer>
        <div className={styles.logo_and_backtotop}>
          <img src={logoAtlantidaFooter} alt="" />
          <a href="#nav" className={styles.footer_p}>
            <IconArrowNarrowUp size={20} />
            Voltar ao topo
          </a>
        </div>

        <div className={styles.copyright}>
          <div className={styles.line_divider}></div>
          <div className={styles.footer_text}>
            <p>Copyright <span className={styles.color_blue}>©</span> 2024 - Atlântida App Mergulhos - Todos os direitos reservados</p>
            <Link className={styles.terms} to="/team">
              Conheça nossa equipe
            </Link>
            <Link className={styles.terms} to="/terms">Termos de uso</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Terms
