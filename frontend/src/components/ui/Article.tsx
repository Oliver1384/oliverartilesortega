interface ArticleProps  {
  text: string,
  image: string
}

export const Article = ({ text, image }: ArticleProps) => {
  return (
    <article>
      <img src={image} alt={'Logo de rust'} />
      <p>{text}</p>
    </article>
  )
}
