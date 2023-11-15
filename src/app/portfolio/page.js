import PageTitle from "../components/PageTitle";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <main>
    
      <head>
        <title>Portfolio</title>
      </head>

      <div className="MainContent">
        <PageTitle title="Portfolio" />

        <h2>This is an h2</h2>
        <h3>This is an h3</h3>
        <h4>This is an h4</h4>
        <h5>This is an h5</h5>
        <h6>This is an h6</h6>
        <p>
          Tempor qui consequat nostrud occaecat irure adipisicing minim dolor.
          Ipsum id laborum occaecat esse nulla do eu id magna magna eiusmod sint
          exercitation esse. Lorem aliquip ea occaecat cillum ipsum consectetur.
          Voluptate in nostrud in consectetur fugiat ea ad id ex labore amet
          eiusmod id.Ullamco deserunt laboris officia est sit in proident
          voluptate officia eu veniam. Id nisi ea ipsum fugiat exercitation do
          ut tempor cupidatat Lorem. Consequat excepteur velit aute fugiat nulla
          commodo consectetur.
        </p>
      </div>
    </main>
  );
};

export default Portfolio;
