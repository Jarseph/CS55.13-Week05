import Layout from "../components/layout";
import { getAllIds, getData } from "../lib/data";

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h4 className="card-title">{itemData.name}</h4>
          <h5 className="card-subtitle mb-2 text-body-secondary">
            {itemData.phone}
          </h5>
          <p className="card-text">{itemData.birthdate}</p>
          <a href="#" className="card-link">
            {itemData.email}
          </a>
          <h6>Favorite Snacks</h6>
          <ol>
            {itemData.snacks &&
              itemData.snacks.map(({ id, snack }) => <li key={id}>{snack}</li>)}
          </ol>
        </div>
      </article>
    </Layout>
  );
}
