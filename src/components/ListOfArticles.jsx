
function Article({ title, description, url }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      <img
        src={url}
        title={title}
        alt={`${title}/tu manca.com xd`}
        loading="lazy" // PAra mayor rendimiento, descargar la imagen solo cuando la vallas a ver.
        decoding="async" // Descarga la imagen poco a poco.
      />
    </article>
  )
}

export default function ListOfArticles({ articles }) {
  return articles.map((article) => <Article key={article._id} {...article} />)
}
