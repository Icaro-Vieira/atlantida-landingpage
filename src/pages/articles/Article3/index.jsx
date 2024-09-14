import { Link } from "react-router-dom";
import logoAtlantida from "../../../assets/illustrations/logo-atlantida.svg";
import imgLgArticle3 from "../../../assets/images/img-lg-article-3.jpg";
import logoAtlantidaFooter from "../../../assets/illustrations/logo-atlantida-white.svg";
import styles from "./Article3.module.css";
import { IconArrowNarrowUp } from "@tabler/icons-react";

export function Article3() {


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

      <div className={styles.read_article}>
        <div className={styles.article}>
          <div className={styles.article_data}>
            <p className={styles.article_tag}>Artigo popular</p>
            <div className={styles.article_data_time}>
              <p>01 de Setembro de 2024</p>
              <p>•</p>
              <p>5 Minutos de leitura</p>
            </div>
          </div>

          <div className={styles.box_title_subtitle}>
            <h1 className={styles.article_title}>
              Proteger os Oceanos: A Missão dos Mergulhadores
            </h1>
            <p className={styles.article_subtitle}>
              Como os mergulhadores podem atuar como guardiões dos oceanos e
              ajudar a alcançar o Objetivo 14 dos Objetivos do Desenvolvimento
              Sustentável, focado na preservação da vida marinha.
            </p>
          </div>

          <img
            src={imgLgArticle3}
            alt="Proteger os Oceanos: A Missão dos Mergulhadores"
          />
        </div>

        <div className={styles.text_article}>
          <p className={styles.text_article_info_body}>
            Os mares e oceanos cobrem mais de 70% da superfície do nosso planeta
            e são essenciais para a vida na Terra. No entanto, a saúde dos
            oceanos está em risco devido à poluição, sobrepesca e mudanças
            climáticas. O Objetivo 14 dos Objetivos de Desenvolvimento
            Sustentável (ODS) das Nações Unidas visa "conservar e usar de forma
            sustentável os oceanos, mares e os recursos marinhos".
            Mergulhadores, com seu contato direto e íntimo com o ambiente
            marinho, estão em uma posição única para contribuir para este
            objetivo vital.
          </p>

          <div className={styles.text_article_info}>
            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                1. Monitoramento e Coleta de Dados
              </p>
              <p className={styles.text_article_info_body}>
                Mergulhadores têm a oportunidade de observar de perto os
                ecossistemas marinhos. Eles podem participar de iniciativas de
                ciência cidadã, coletando dados sobre a saúde dos recifes, a
                presença de espécies ameaçadas e a qualidade da água. Projetos
                como o Reef Check e o Projeto AWARE permitem que mergulhadores
                contribuam diretamente para pesquisas científicas que informam
                políticas de conservação.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                2. Limpeza dos Oceanos
              </p>
              <p className={styles.text_article_info_body}>
                Os mergulhadores frequentemente se envolvem em campanhas de
                limpeza subaquática, removendo plásticos, redes fantasmas e
                outros detritos que ameaçam a vida marinha. Esses esforços não
                só reduzem a poluição, mas também aumentam a conscientização
                sobre a importância de manter os oceanos limpos.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                3. Educação e Conscientização
              </p>
              <p className={styles.text_article_info_body}>
                Mergulhadores podem atuar como embaixadores dos oceanos,
                educando o público sobre as ameaças que os oceanos enfrentam e
                promovendo práticas sustentáveis. Através de palestras,
                workshops e redes sociais, eles podem inspirar outras pessoas a
                agir em prol da conservação marinha.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                4. Apoio a Áreas Marinhas Protegidas
              </p>
              <p className={styles.text_article_info_body}>
                Muitas áreas marinhas protegidas (AMPs) dependem do apoio e do
                envolvimento dos mergulhadores. Ao respeitar as regras dessas
                áreas e promover sua importância, os mergulhadores ajudam a
                garantir que esses refúgios continuem a proteger a
                biodiversidade marinha.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                5. Redução da Pegada de Carbono
              </p>
              <p className={styles.text_article_info_body}>
                Embora os mergulhadores sejam apaixonados pelos oceanos, as
                viagens frequentes para destinos de mergulho podem ter um
                impacto ambiental. Ao optar por operadores de mergulho
                sustentáveis, reduzir o uso de plásticos e compensar as emissões
                de carbono, os mergulhadores podem minimizar seu impacto no
                ambiente marinho.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_body}>
                Os mergulhadores têm um papel crucial na proteção e preservação
                dos oceanos. Ao se engajar ativamente em práticas sustentáveis e
                apoiar iniciativas de conservação, eles não apenas ajudam a
                alcançar o Objetivo 14 dos ODS, mas também garantem que as
                futuras gerações possam continuar a desfrutar das maravilhas
                subaquáticas.
              </p>
            </div>
          </div>

          <p className={styles.text_article_info_body}>
            Este texto foi adaptado dos artigos:
            <br />
            United Nations Sustainable Development Goals - <a
              href="https://www.globalgoals.org/goals/14-life-below-water/"
              target="_blank"
            >
              Goal 14: Life Below Water
            </a>
            <br />
            Reef Check - <a href="https://www.reefcheck.org/" target="_blank">
              Monitoring Reef Health Worldwide
            </a>
            <br />
            Project AWARE - <a
              href="https://www.padi.com/aware/dive-against-debris"
              target="_blank"
            >
              Dive Against Debris Program
            </a>
          </p>
        </div>
      </div>

      <footer>
        <div className={styles.logo_and_backtotop}>
          <img src={logoAtlantidaFooter} />
          <a href="#nav" className={styles.footer_p}>
            <IconArrowNarrowUp size={20} />
            Voltar ao topo
          </a>
        </div>

        <div className={styles.copyright}>
          <div className={styles.line_divider}></div>
          <div className={styles.footer_text}>
            <p>
              Copyright <span className={styles.color_blue}>©</span> 2024 -
              Atlântida App Mergulhos - Todos os direitos reservados
            </p>

            <Link className={styles.terms} to="/team">
              Conheça nossa equipe
            </Link>

            <Link className={styles.terms} to="/terms">
              Termos de uso
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Article3;
