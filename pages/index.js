import { CTAPrimary, CTASecondary } from "../components/cta/cta";
import { BigBlob, LittleBlob, LongBlob } from "../components/blobs/blobs";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import Work from "../components/work/work";
import Standing from "../components/standing/standing";
import Competency from "../components/competency/competency";
import competencyList from "../components/competency/competencyList";
import Contact from "../components/contact/contact";
import { Element } from "react-scroll";
import { scroller } from "react-scroll";

export default function Home({ allProjectsData }) {
  return (
    <Layout>
      <div className={utilStyles.body}>
        <div className={utilStyles.presentation}>
          <div className={utilStyles.presentation_text}>
            <div className={utilStyles.presentation_big}>
              Bonjour,
              <br />
              moi c'est Paul
            </div>
            <h1 className={utilStyles.h1}>
              Développeur sur Toulon et étudiant en 4ème année à Epitech
              Marseille
            </h1>
            <div className={utilStyles.presentation_buttons}>
              <div className={utilStyles.presentation_buttons_primary}>
                <CTAPrimary
                  name="Voir mon travail"
                  onClick={() =>
                    scroller.scrollTo("work", {
                      duration: 500,
                      delay: 100,
                      smooth: true,
                      offset: -20,
                    })
                  }
                />
              </div>
              <CTASecondary
                name="Me contacter"
                onClick={() =>
                  scroller.scrollTo("contact", {
                    duration: 500,
                    delay: 100,
                    smooth: true,
                    offset: -20,
                  })
                }
              />
            </div>
          </div>
          <div className={utilStyles.presentation_avatar}>
            <Standing />
          </div>
        </div>
        <Element className={utilStyles.work} name="work">
          <h2>Mon travail</h2>

          <div className={utilStyles.work_cards}>
            {allProjectsData.map(
              ({ id, title, image, description, image_alt }) => (
                <Work
                  key={id}
                  title={title}
                  image={image}
                  image_alt={image_alt}
                  description={description}
                  link={`/projects/${id}`}
                />
              )
            )}
          </div>
        </Element>
        <Element className={utilStyles.about} name="about">
          <h2>À propos</h2>
          <div className={utilStyles.about_content}>
            <div className={utilStyles.about_text}>
              Actuellement en 4ème année à
              <span className={utilStyles.span}>
                {" {"}EPITECH{"} "}
              </span>
              Marseille, je suis ouvert à toutes demandes concernant le
              développement FullStack (React JS, React Native, Node JS...) ou
              autres projets innovants. Véritable passion dès mon plus jeune
              âge, j’ai décidé de rejoindre cette école après mon BAC STI2D
              système et information numérique. J’ai pu développer mes
              compétences durant plusieurs stages à Toulon et ses alentours dans
              diverses sociétés à la pointe de leur domaine. Mon travail sur
              application mobile, web ou encore en robotique avec les
              différentes équipes d’ingénieurs m’a conforté sur l’importance de
              s’adapter à l’entreprise et ses équipes. J’ai eu la chance de
              participer au processus réel de l’évolution des produits jusqu’à
              leur commercialisation.
            </div>
            <div className={utilStyles.about_competency}>
              {competencyList.map(({ name, percent, color }, index) => (
                <Competency
                  key={index}
                  name={name}
                  percent={percent}
                  color={color}
                />
              ))}
            </div>
          </div>
          <CTASecondary name="Mon CV" href="CV_PAUL_SAVOYE_DEV_2021.pdf" />
        </Element>
        <img
          className={utilStyles.img_sitting}
          alt="Paul Savoye Developpeur"
          src="/svgs/paul-savoye-sitting.svg"
        />
        <Element name="contact">
          <Contact />
        </Element>
        <div className={utilStyles.work_together}>
          Travaillons ensemble ! <div className={utilStyles.wave}>👋</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
