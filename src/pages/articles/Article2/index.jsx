import { Link } from "react-router-dom";
import logoAtlantida from "../../../assets/illustrations/logo-atlantida.svg";
import imgLgArticle2 from "../../../assets/images/img-lg-article-2.jpg";
import logoAtlantidaFooter from "../../../assets/illustrations/logo-atlantida-white.svg";
import styles from "./Article2.module.css";
import { IconArrowNarrowUp } from "@tabler/icons-react";

export function Article2() {
 

  return (
    <>
      <nav className={styles.navbar} id="nav">
        <Link to="/">
          <img src={logoAtlantida} alt="" />
        </Link>
        <Link to="/" className={styles.btn_login}>
          DOWNLOAD DO APP
        </Link>
      </nav>

      <div className={styles.read_article}>
        <div className={styles.article}>
          <div className={styles.article_data}>
            <p className={styles.article_tag}>Artigo popular</p>
            <div className={styles.article_data_time}>
              <p>22 de Agosto de 2024</p>
              <p>•</p>
              <p>5 Minutos de leitura</p>
            </div>
          </div>

          <div className={styles.box_title_subtitle}>
            <h1 className={styles.article_title}>
              O Impacto Devastador da Negligência dos Oceanos
            </h1>
            <p className={styles.article_subtitle}>
              Como a falta de conservação dos oceanos e outros corpos d'água
              está destruindo a vida marinha e prejudicando o mergulho.
            </p>
          </div>

          <img
            src={imgLgArticle2}
            alt="O Impacto Devastador da Negligência dos Oceanos"
          />
        </div>

        <div className={styles.text_article}>
          <p className={styles.text_article_info_body}>
            Os oceanos, mares e rios são fundamentais para a vida na Terra, mas
            a negligência humana está levando esses ecossistemas ao colapso. A
            falta de preservação dos corpos d'água tem consequências graves,
            tanto para a vida marinha quanto para aqueles que exploram as
            profundezas submersas. Neste artigo, exploramos os efeitos
            devastadores da degradação dos oceanos e como isso afeta tanto os
            mergulhadores quanto a biodiversidade aquática.
          </p>

          <div className={styles.text_article_info}>
            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                1. Degradação dos Ecossistemas Marinhos
              </p>
              <p className={styles.text_article_info_body}>
                A poluição, a sobrepesca e a destruição de habitats estão
                causando uma rápida degradação dos ecossistemas marinhos.
                Corais, que abrigam uma infinidade de espécies, estão morrendo
                devido ao aumento da temperatura da água e à acidificação dos
                oceanos. A perda desses recifes de corais, que são vitais para a
                biodiversidade, resulta em um declínio drástico das populações
                de peixes e outros organismos marinhos.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                2. Impacto na Experiência de Mergulho
              </p>
              <p className={styles.text_article_info_body}>
                Para os mergulhadores, a deterioração dos oceanos significa a
                perda de paisagens subaquáticas vibrantes e a diminuição das
                oportunidades de encontros com a vida marinha. Áreas que antes
                eram ricas em biodiversidade agora estão se tornando "desertos"
                subaquáticos, com poucos sinais de vida. Além disso, a presença
                de lixo marinho, como plásticos e redes fantasmas, não só
                prejudica a vida marinha, mas também representa riscos físicos
                para os mergulhadores.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                3. Riscos à Saúde Humana
              </p>
              <p className={styles.text_article_info_body}>
                A poluição dos oceanos não afeta apenas a vida marinha, mas
                também representa sérios riscos à saúde humana. Contaminantes
                como metais pesados, resíduos químicos e microplásticos entram
                na cadeia alimentar marinha, eventualmente chegando aos humanos
                através do consumo de frutos do mar. Para os mergulhadores,
                essas substâncias tóxicas podem representar um perigo imediato
                ao entrar em contato com a pele ou ser inaladas durante o
                mergulho.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                4. Perda de Espécies e Biodiversidade
              </p>
              <p className={styles.text_article_info_body}>
                A destruição dos habitats marinhos leva à extinção de inúmeras
                espécies. Cada espécie perdida é uma parte insubstituível do
                ecossistema e sua ausência pode desencadear um efeito cascata,
                prejudicando a saúde geral do oceano. Para os mergulhadores,
                isso significa menos oportunidades de observar e interagir com a
                vida marinha, diminuindo a riqueza da experiência subaquática.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                5. Erosão da Economia do Turismo de Mergulho
              </p>
              <p className={styles.text_article_info_body}>
                A saúde dos oceanos é crucial para o turismo de mergulho, uma
                indústria que depende da beleza e da biodiversidade subaquática.
                A degradação dos ecossistemas marinhos leva à perda de destinos
                de mergulho populares, afetando a economia local e reduzindo as
                oportunidades de emprego em comunidades costeiras que dependem
                desse setor.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_body}>
                A falta de preservação dos oceanos e outros corpos d'água tem
                consequências alarmantes para a vida marinha e para os
                mergulhadores. É imperativo que todos nós tomemos medidas para
                proteger esses ecossistemas preciosos, garantindo que as futuras
                gerações possam continuar a explorar e desfrutar da rica
                biodiversidade subaquática.
              </p>
            </div>
          </div>

          <p className={styles.text_article_info_body}>
            Este texto foi adaptado dos artigos:
            <br />
            National Geographic - <a href="https://www.nationalgeographic.com/environment/article/ocean-threats" target="_blank">The Ocean’s Decline and the Impact on Marine Life</a>
            <br />
            World Wildlife Fund - <a href="https://www.worldwildlife.org/initiatives/plastics" target="_blank">The Devastating Effects of Ocean Pollution</a>
            <br />
            Ocean Conservancy - <a href="https://oceanconservancy.org/trash-free-seas/" target="_blank">Marine Debris and Its Impacts on Human Health</a>
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

export default Article2;
