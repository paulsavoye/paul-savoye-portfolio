import Layout from "../../components/layout";
import Arrow from "../../components/arrow/arrow";
import Tag from "../../components/tag/tag";
import { getAllProjectsIds, getProjectData } from "../../lib/projects";
import Head from "next/head";
import ImageGallery from "react-image-gallery";
import utilStyles from "../../styles/utils.module.css";
import styles from "./id.module.css";

export default function Projects({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>Paul SAVOYE - {projectData.title}</title>
      </Head>
      <div className={utilStyles.body}>
        <Arrow />
        <div className={styles.title}>{projectData.title}</div>
        <div className={styles.date}>{projectData.date_interval}</div>
        <div className={styles.techs}>
          {projectData.techs.map((tech) => (
            <Tag tagName={tech} />
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        <div className={styles.image_gallery}>
          <ImageGallery
            items={projectData.images}
            showBullets
            showPlayButton={false}
            showThumbnails={false}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
