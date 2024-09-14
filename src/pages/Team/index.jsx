import { Link } from "react-router-dom";
import logoAtlantida from "../../assets/illustrations/logo-atlantida.svg";
import logoAtlantidaTeam from "../../assets/images/logo-atlantida-team.png";

import imgJessica from "../../assets/images/jessica-picture.png";
import imgIcaro from "../../assets/images/icaro-picture.png";
import imgDiego from "../../assets/images/diego-picture.png";
import imgCamilo from "../../assets/images/camilo-picture.png";

import logoAtlantidaFooter from "../../assets/illustrations/logo-atlantida-white.svg";
import styles from "./Team.module.css";
import { IconArrowNarrowUp, IconLink } from "@tabler/icons-react";

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

      <div className={styles.read_article}>
        <div className={styles.article}>
          <div className={styles.imageAlignCenter}>
            <img src={logoAtlantidaTeam} alt="" />
          </div>
          <div className={styles.article_data}>
            <p className={styles.article_tag}>
              Desenvolvedores e Idealizadores do Atlântida
            </p>
          </div>

          <div className={styles.box_title_subtitle}>
            <h1 className={styles.article_title}>Sobre nós</h1>
            <p className={styles.article_subtitle}>
              No Atlântida Mergulhos, nosso objetivo é simplificar o
              gerenciamento dos seus mergulhos. Oferecemos ferramentas para
              organizar seus registros, manter seus certificados atualizados e
              acompanhar sua evolução com estatísticas detalhadas, ajudando você
              a mergulhar com confiança e organização.
            </p>
          </div>

          <div className={styles.boxTeam}>
            <p className={styles.boxImagemTitle}>Integrantes da Nossa Equipe</p>
            <div className={styles.boxImages}>
              <div className={styles.cardImg}>
                <img src={imgJessica} />
                <div className={styles.cardInformation}>
                  <p className={styles.boxImagemP}>Jéssica Mattos</p>
                  <p>
                    Desenvolvedora <br /> Back-end e Mobile
                  </p>
                </div>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/j%C3%A9ssicammattos/"
                  target="_blank"
                >
                  <IconLink size={20} /> LinkedIn
                </a>
              </div>

              <div className={styles.cardImg}>
                <img src={imgIcaro} />
                <div className={styles.cardInformation}>
                  <p className={styles.boxImagemP}>Ícaro Vieira</p>
                  <p>
                    Desenvolvedor <br /> Front-end e UI/UX
                  </p>
                </div>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/icaro-vieira1202/"
                  target="_blank"
                >
                  <IconLink size={20} /> LinkedIn
                </a>
              </div>

              <div className={styles.cardImg}>
                <img src={imgDiego} />
                <div className={styles.cardInformation}>
                  <p className={styles.boxImagemP}>Diego Negretto</p>
                  <p>Orientador</p>
                </div>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/diego-negretto-8653a7a2/"
                  target="_blank"
                >
                  <IconLink size={20} /> LinkedIn
                </a>
              </div>

              <div className={styles.cardImg}>
                <img src={imgCamilo} />
                <div className={styles.cardInformation}>
                  <p className={styles.boxImagemP}>Camilo Perucci</p>
                  <p>Coorientador</p>
                </div>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/camilo-perucci-98a14422/"
                  target="_blank"
                >
                  <IconLink size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
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

export default Terms;
