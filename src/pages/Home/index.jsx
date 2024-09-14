import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconSearch,
  IconStarFilled,
  IconScubaDiving,
  IconMapPin,
  IconDroplet,
  IconFish,
  IconMessage,
} from "@tabler/icons-react";
import logoAtlantida from "../../assets/illustrations/logo-atlantida.svg";
import logoAtlantidaFooter from "../../assets/illustrations/logo-atlantida-white.svg";
import btnGooglePlay from "../../assets/illustrations/btn-google-play.svg";
import btnAppleStore from "../../assets/illustrations/btn-apple-store.svg";
import imageBackground from "../../assets/images/image-background.jpg";
import imageCelular from "../../assets/images/imagem-celular.png";
import noImage from "../../assets/images/no-image.png";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import imgSmArticle1 from "../../assets/images/img-sm-article-1.jpg";
import imgSmArticle2 from "../../assets/images/img-sm-article-2.jpg";
import imgSmArticle3 from "../../assets/images/img-sm-article-3.jpg";

import Map from "../../components/Map";
import ReactStars from "react-rating-stars-component";
import styles from "./Home.module.css";
import { atlantidaApi } from "../../services";
import { format, parseISO } from 'date-fns';

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [divingSpots, setDivingSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [userNames, setUserNames] = useState({});
  const [comments, setComments] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);



  const fetchDivingSpots = async (endpoint, param) => {
    try {
      const response = await atlantidaApi.get(`/${endpoint}`, {
        params: { name: param },
      });
      setDivingSpots(response.data);
    } catch (error) {
      console.error("Erro ao buscar locais de mergulho:", error);
    }
  };

  const fetchComments = async (divingSpotId) => {
    try {
      const response = await atlantidaApi.get(`/${divingSpotId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  };

  const fetchUserById = async (userId) => {
    try {
      const response = await atlantidaApi.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw error;
    }
  };

  const fetchUserName = async (userId) => {
    if (userId && !userNames[userId]) {
      try {
        const userData = await fetchUserById(userId);
        const fullName = `${userData.firstName} ${userData.lastName}`;
        setUserNames((prevNames) => ({ ...prevNames, [userId]: fullName }));
      } catch (error) {
        console.error('Erro ao buscar nome do usuário:', error);
      }
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      if (!isNaN(searchTerm)) {
        fetchDivingSpots("divingSpotsByDifficulty", searchTerm);
      } else {
        fetchDivingSpots("divingSpotsByName", searchTerm);
      }
    } else {
      setDivingSpots([]);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  useEffect(() => {
    if (selectedSpot) {
      fetchComments(selectedSpot._id);
    }
  }, [selectedSpot]);

  useEffect(() => {
    comments.forEach((comment) => {
      fetchUserName(comment.userId);
    });
  }, [comments]);

  return (
    <>
      <nav className={styles.navbar} id="nav">
        <Link to="/">
          <img src={logoAtlantida} alt="Logo Atlântida" />
        </Link>
        <div className={styles.link_box}>
          <a href="#home">Home</a>
          <a href="#locais-de-mergulho">Locais de mergulho</a>
          <a href="#app">Baixar aplicativo</a>
          <a href="#mergulho-responsavel">Mergulho responsável</a>
        </div>
        <a href="../../assets/app/Atlântida-1.1.0-beta.apk" className={styles.btn_login} download>
          DOWNLOAD DO APP
        </a>
      </nav>

      <div className={styles.hero_section} id="home">
        <img
          className={styles.image_bg}
          src={imageBackground}
          alt="Background"
        />
        <div className={styles.text_container}>
          <h1 className={styles.h1}>
            Gerencie seus mergulhos <br /> com facilidade e eficiência
            <span className={styles.dot_h1}>.</span>
          </h1>
          <span className={styles.span}>
            Planeje, organize e registre seus mergulhos. Encontre pontos <br />{" "}
            de mergulho e compartilhe suas experiências.
          </span>

          <a href="#app" className={styles.btn_start}>
            COMECE SUA AVENTURA AGORA!
          </a>

          <p className={styles.tag}>
            <IconArrowNarrowDown size={20} />
            Continue explorando
          </p>
        </div>
      </div>

      <div className={styles.section_2} id="locais-de-mergulho">
        <div className={styles.text_container_2}>
          <span className={styles.text_container_span}>LOCAIS DE MERGULHO</span>
          <h1 className={styles.text_container_h1}>
            Explore novos locais de mergulho e veja <br />o que outros usuários
            estão dizendo<span className={styles.dot_span}>.</span>
          </h1>
        </div>

        <div className={styles.diving_spots}>
          <div className={styles.bar_search_btn}>
            <input
              className={styles.input_search}
              type="text"
              placeholder="Informe o nome do local. Ex: Ilha Bela"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button className={styles.btn_search} onClick={handleSearch}>
              <IconSearch size={20} />
            </button>
          </div>

          <div className={styles.map}>
            {divingSpots.length > 0 ? (
              <div className={styles.result_div}>
                <div className={styles.results}>
                  {divingSpots.map((spot) => (
                    <div
                      key={spot._id}
                      className={styles.spot_info}
                      onClick={() => setSelectedSpot(spot)}
                    >
                      <div className={styles.box_spot_info_data}>
                        <img
                          src={
                            spot?.image?.data
                              ? `data:${spot?.image?.contentType};base64,${spot?.image?.data}`
                              : noImage
                          }
                          alt={spot.name}
                        />
                        <div className={styles.spot_info_data}>
                          <div className={styles.spot_info_data_header}>
                            <h3>{spot.name}</h3>
                            <div className={styles.rating_average}>
                              <p className={styles.spot_p_average}>{(spot.averageRating ?? 0).toFixed(1)}</p>
                              <div className={styles.stars}>
                                <ReactStars
                                  count={5}
                                  value={spot.averageRating}
                                  size={24}
                                  isHalf={true}
                                  edit={false}
                                  activeColor="#007FFF"
                                />
                              </div>
                              <p className={styles.spot_comments}>({spot.numberOfComments})</p>
                            </div>
                          </div>
                          <p className={styles.spot_p_description}>{spot.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedSpot && (
                  <div className={styles.selected_spot_info}>
                    {tabIndex === 0 && (
                      <div>
                        <img
                          src={
                            selectedSpot?.image?.data
                              ? `data:${selectedSpot?.image?.contentType};base64,${selectedSpot?.image?.data}`
                              : noImage
                          }
                          alt={selectedSpot.name}
                        />

                        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
                          <Tab label="Informações" />
                          <Tab label="Avaliações" />
                        </Tabs>

                        <div className={styles.selected_info}>

                          <div className={styles.selected_info_header}>
                            <h2>{selectedSpot.name}</h2>
                            <p className={styles.selected_info_p}>
                              <IconStarFilled size={20} color="#007FFF" />
                              {(selectedSpot.averageRating ?? 0).toFixed(1)}
                            </p>
                          </div>

                          <div className={styles.selected_info_description}>
                            <p>{selectedSpot.description}</p>
                          </div>
                        </div>

                        <div className={styles.box_details}>
                          <div className={styles.details}>
                            <p><IconMapPin size={24} color="#007FFF" /> Coordenadas</p>
                            <span>{selectedSpot.location.coordinates[0]}, {selectedSpot.location.coordinates[1]}</span>
                          </div>

                          <div className={styles.divisor}></div>

                          <div className={styles.details}>
                            <p><IconDroplet size={24} color="#007FFF" /> Corpo da Água</p>
                            <span>{selectedSpot.waterBody ?? "N/A"}</span>
                          </div>

                          <div className={styles.divisor}></div>

                          <div className={styles.details}>
                            <p><IconFish size={24} color="#007FFF" /> Visibilidade</p>
                            <span>{selectedSpot.visibility ?? "N/A"}</span>
                          </div>

                          <div className={styles.divisor}></div>

                          <div className={styles.details}>
                            <p><IconScubaDiving size={24} color="#007FFF" /> Nível de Mergulho</p>
                            <span>{selectedSpot.averageDifficulty ?? "N/A"}</span>
                          </div>
                        </div>
                      </div>

                    )}

                    {tabIndex === 1 && (
                      <div>
                        <img
                          src={
                            selectedSpot?.image?.data
                              ? `data:${selectedSpot?.image?.contentType};base64,${selectedSpot?.image?.data}`
                              : noImage
                          }
                          alt={selectedSpot.name}
                        />
                        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
                          <Tab label="Informações" />
                          <Tab label="Avaliações" />
                        </Tabs>

                        {comments.length > 0 ? (
                          comments.map((comment) => (
                            <div key={comment._id} className={styles.comment}>
                              <p className={styles.info_name}>{userNames[comment.userId] || 'Carregando...'}</p>
                              <div className={styles.info_comment}>
                                <p className={styles.info_rating_star}>
                                  {(comment.rating ?? 0).toFixed(1)}
                                  <ReactStars
                                    className={styles.stars}
                                    count={5}
                                    value={comment.rating}
                                    size={24}
                                    isHalf={true}
                                    edit={false}
                                    activeColor="#007FFF"
                                  />
                                </p>

                                <p className={styles.info_comment_data}>
                                  {format(parseISO(comment.createdDate), 'dd/MM/yyyy')}
                                </p>
                              </div>

                              <p className={styles.info_comment_comment}>
                                {comment.comment}
                              </p>

                              {/* Exibe as fotos */}
                              <div className={styles.photos}>
                                {comment.photos && comment.photos.length > 0 && comment.photos.map((photo, index) => (
                                  <img
                                    className={styles.info_comment_img}
                                    key={index}
                                    src={`data:${photo.contentType};base64,${photo.data}`}
                                    alt="Foto do mergulho"
                                  />
                                ))}
                              </div>

                              <div className={styles.divisor_comments}></div>

                            </div>
                          ))
                        ) : (
                          <div className={styles.no_comment}>
                            <IconMessage size={64} color="#777777" />
                            <p>Sem comentários para este ponto de mergulho.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            <Map divingSpots={divingSpots} />
          </div>
        </div>
      </div>

      <div className={styles.section_2} id="app">
        <div className={styles.text_container_2}>
          <span className={styles.text_container_span}>
            APLICATIVO ANDROID
          </span>
          <h1 className={styles.text_container_h1}>
            Todos os seus mergulhos <br />a um toque de distância
            <span className={styles.dot_span}>.</span>
          </h1>
        </div>

        <div className={styles.image_celular}>
          <img src={imageCelular} alt="Imagem do Aplicativo" />
        </div>

        <div className={styles.download_buttons}>
          <a href="../../assets/app/Atlântida-1.1.0-beta.apk" className={styles.btn_download} download>
            <img
              src={btnGooglePlay}
              alt="Faça o download pela Google Play Store"
            />
          </a>
        </div>

        <div className={styles.info_box}>
          <div className={styles.info_box_fill}>
            <div className={styles.number_box}>
              <p className={styles.color_blue}>1</p>
            </div>
            <div className={styles.content_info_box}>
              <p className={styles.title_box}>Baixe o aplicativo</p>
              <p className={styles.description_box}>
                É gratuito. Baixe pelo nosso site!
              </p>
            </div>
          </div>
          <div className={styles.info_box_transparent}>
            <div className={styles.number_box}>
              <p className={styles.color_blue}>2</p>
            </div>
            <div className={styles.content_info_box}>
              <p className={styles.title_box}>Faça seu cadastro</p>
              <p className={styles.description_box}>
                É rápido e simples. Crie sua conta em <br />
                menos de 2 minutos.
              </p>
            </div>
          </div>
          <div className={styles.info_box_transparent}>
            <div className={styles.number_box}>
              <p className={styles.color_blue}>3</p>
            </div>
            <div className={styles.content_info_box}>
              <p className={styles.title_box}>Pronto!</p>
              <p className={styles.description_box}>
                O App está preparado para seus novos <br />
                mergulhos. E você?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section_2} id="mergulho-responsavel">
        <div className={styles.text_container_2}>
          <span className={styles.text_container_span}>
            MERGULHO RESPONSÁVEL
          </span>
          <h1 className={styles.text_container_h1}>
            Descubra Como Proteger os Oceanos <br /> enquanto Explora Suas
            Maravilhas
            <span className={styles.dot_span}>.</span>
          </h1>
        </div>

        <div className={styles.articles}>
          <div className={styles.article}>
            <img
              src={imgSmArticle1}
              alt="7 Práticas essenciais para um Mergulho Responsável"
            />
            <p className={styles.article_title}>
              7 Práticas essenciais para um Mergulho Responsável
            </p>
            <div className={styles.line_divider_article}></div>
            <div className={styles.article_info}>
              <p className={styles.date_article}>17 de Julho de 2024</p>
              <Link
                className={styles.link_article}
                to="/7-praticas-essenciais-para-um-mergulho-responsavel"
              >
                Ler artigo
              </Link>
            </div>
          </div>

          <div className={styles.article}>
            <img
              src={imgSmArticle2}
              alt="O Impacto Devastador da Negligência dos Oceanos"
            />
            <p className={styles.article_title}>
              O Impacto Devastador da Negligência dos Oceanos
            </p>
            <div className={styles.line_divider_article}></div>
            <div className={styles.article_info}>
              <p className={styles.date_article}>22 de Julho de 2024</p>
              <Link
                className={styles.link_article}
                to="/o-impacto-devastador-da-negligencia-dos-oceanos"
              >
                Ler artigo
              </Link>
            </div>
          </div>

          <div className={styles.article}>
            <img
              src={imgSmArticle3}
              alt="Proteger os Oceanos: A Missão dos Mergulhadores"
            />
            <p className={styles.article_title}>
              Proteger os Oceanos: A Missão dos Mergulhadores
            </p>
            <div className={styles.line_divider_article}></div>
            <div className={styles.article_info}>
              <p className={styles.date_article}>25 de Agosto de 2024</p>
              <Link
                className={styles.link_article}
                to="/proteger-os-oceanos-a-missao-dos-mergulhadores"
              >
                Ler artigo
              </Link>
            </div>
          </div>
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

export default Home;
