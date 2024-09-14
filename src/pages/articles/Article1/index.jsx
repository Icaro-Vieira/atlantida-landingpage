import { Link } from "react-router-dom";
import logoAtlantida from "../../../assets/illustrations/logo-atlantida.svg";
import imgLgArticle1 from "../../../assets/images/img-lg-article-1.jpg";
import logoAtlantidaFooter from "../../../assets/illustrations/logo-atlantida-white.svg";
import styles from "./Article1.module.css";
import { IconArrowNarrowUp } from "@tabler/icons-react";

export function Article1() {
 

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
              <p>18 de Agosto de 2024</p>
              <p>•</p>
              <p>7 Minutos de leitura</p>
            </div>
          </div>

          <div className={styles.box_title_subtitle}>
            <h1 className={styles.article_title}>
              7 Práticas essenciais para um Mergulho Responsável
            </h1>
            <p className={styles.article_subtitle}>
              Neste artigo, apresentaremos sete dicas fundamentais para garantir
              que sua experiência de mergulho seja não apenas emocionante, mas
              também sustentável.
            </p>
          </div>

          <img
            src={imgLgArticle1}
            alt="7 Práticas essenciais para um Mergulho Responsável"
          />
        </div>

        <div className={styles.text_article}>
          <p className={styles.text_article_info_body}>
            Como mergulhadores, temos a responsabilidade de conservar os
            ecossistemas marinhos que tanto apreciamos e que são facilmente
            danificados. Nossas ações podem ter consequências duradouras, e por
            isso é tão importante praticar o mergulho responsável onde quer que
            você vá. Continue lendo para descobrir 7 ótimas dicas sobre como
            causar o menor impacto possível na vida marinha, mantendo-se atento
            e consciente.
          </p>

          <div className={styles.text_article_info}>
            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                1. Obtenha o Treinamento Adequado
              </p>
              <p className={styles.text_article_info_body}>
                Independentemente do que alguém possa lhe dizer, o seu
                treinamento em mergulho e a certificação são passos cruciais
                para começar a mergulhar de forma segura e responsável. Você
                pode encontrar ofertas de viagens de mergulho sem certificação,
                mas isso é um grande erro. É perigoso para você, para outros
                mergulhadores e para a vida marinha mergulhar sem o treinamento
                adequado.
                <br />
                <br />
                Os mergulhadores da Gangga na Villa Almarik oferecem treinamento
                de mergulho PADI 5*, liderado por instrutores e guias
                profissionais. Com uma certificação PADI, você pode mergulhar em
                qualquer lugar do mundo, e seus guias podem se sentir seguros
                sabendo que você está devidamente capacitado para lidar com as
                situações subaquáticas.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                2. A Palavra do Seu Instrutor é Lei
              </p>
              <p className={styles.text_article_info_body}>
                Mesmo que você tenha centenas de mergulhos no currículo, as
                instruções do seu instrutor ou guia devem ser seguidas em todos
                os momentos. Não presuma que você sabe mais ou pense que tem
                experiência suficiente para se desviar dos planos, mesmo que
                minimamente. Os mergulhos em Gili Trawangan são cuidadosamente
                planejados pelos guias da Gangga Divers para garantir sua
                segurança, diversão e a proteção do ambiente marinho.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>3. Fale</p>
              <p className={styles.text_article_info_body}>
                A palavra do seu instrutor pode ser lei, mas sempre fale se
                notar algo que ele ou ela não tenha percebido. Como mergulhador,
                é sua responsabilidade proteger os recifes. Se, por exemplo,
                você vir outro mergulhador ou guia agindo de forma imprudente ou
                danificando o recife, é essencial que você diga algo
                imediatamente. Ficar calado por timidez ou por não querer causar
                incômodo pode resultar em danos ao recife ou em alguém
                enfrentando uma situação complicada.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                4. Use Seus Olhos, Não Suas Mãos
              </p>
              <p className={styles.text_article_info_body}>
                Se você é mergulhador, sabe que a vida marinha é deslumbrante.
                Esse mundo ao seu redor enquanto você mergulha é tão diferente
                daquele acima da água que você pode sentir a vontade de tocar as
                coisas. No entanto, os ambientes marinhos são extremamente
                sensíveis, e existem bactérias e microrganismos na pele humana
                que podem contaminar os recifes e os peixes. Os corais duros, em
                particular, são especialmente suscetíveis ao nosso toque devido
                à camada de tecido vivo que muitas vezes os protege.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                5. Pratique o Controle
              </p>
              <p className={styles.text_article_info_body}>
                Uma das coisas mais importantes que você aprenderá durante o
                treinamento de mergulho é o controle de flutuabilidade. Isso
                pode não ser algo natural e pode levar algum tempo para dominar.
                Enquanto pratica, você precisa ser extremamente cauteloso ao
                redor dos recifes para poder flutuar sobre eles sem tocá-los. Se
                estiver tendo dificuldades com sua flutuabilidade, não hesite em
                pedir ajuda aos instrutores ou guias de mergulho.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                6. Equipando-se Adequadamente
              </p>
              <p className={styles.text_article_info_body}>
                Seguindo o ponto anterior, obter o equipamento adequado é
                essencial para controlar sua flutuabilidade. Certifique-se de
                que sua roupa de neoprene, nadadeiras, regulador, manômetro e
                cilindros estejam bem ajustados e que nada esteja solto. Você
                pode danificar o recife sem nem perceber se algo estiver
                pendurado ou arrastando. Se você tiver seu próprio equipamento,
                experimente tudo antes da viagem de mergulho para garantir que
                tudo ainda esteja bem ajustado e em boas condições. Você também
                pode alugar equipamentos com os mergulhadores da Gangga, mas
                certifique-se de que o ajuste seja perfeito.
              </p>
            </div>

            <div className={styles.content}>
              <p className={styles.text_article_info_title}>
                7. Não Deixe Nada para Trás
              </p>
              <p className={styles.text_article_info_body}>
                Há uma citação popular entre os mergulhadores: "Leve apenas
                fotos, deixe apenas bolhas". Isso pode parecer óbvio, mas você
                nunca deve deixar nada no oceano que não lhe pertença. Seu
                primeiro pensamento pode ser "mas eu nunca jogaria lixo no
                oceano", mas você já pensou no protetor solar que usa ou em
                qualquer loção corporal, perfume ou outros produtos que possa
                estar deixando para trás? Alguns desses produtos podem ser
                inofensivos para você, mas podem ter efeitos devastadores sobre
                os recifes de coral. Além disso, você nunca deve alimentar
                peixes ou outras formas de vida marinha. Ao fazer isso, você
                pode, sem saber, desequilibrar toda a cadeia alimentar.
                Lembre-se, não deixe NADA para trás, exceto suas bolhas.
              </p>

              <br />

              <p className={styles.text_article_info_body}>
                Seguindo essas práticas, você poderá apreciar o mergulho
                enquanto contribui para a preservação dos ecossistemas marinhos.
                Afinal, você é um visitante no mundo subaquático e deve
                respeitar isso em todos os momentos.
              </p>
            </div>
          </div>

          <p className={styles.text_article_info_body}>
            Este texto foi adaptado do artigo <a href="https://pt.scubadivermag.com/7-ótimas-dicas-para-mergulho-responsável/" target="_blank">7 Ótimas Dicas para Mergulho Responsável</a> da Scuba Diver Mag.
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

export default Article1;
