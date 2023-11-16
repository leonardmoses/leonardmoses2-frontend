import styles from "./PageTItle.module.scss"

const PageTitle = (props) => {
  return (
    <div className={styles.TitleDiv}>
      <h2 className={styles.h2}>{props.title}</h2>
    </div>
  );
};

export default PageTitle;
