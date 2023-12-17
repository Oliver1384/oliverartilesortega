import { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import { PRIMARY_COLORS, TEXT_COLORS } from '../../colors'

interface ArticleProps {
  children: ReactNode
  image: string
  title: string
}

const useStyles = makeStyles({
  article: {
    margin: '1rem',
    backgroundColor: PRIMARY_COLORS.section,
    color: TEXT_COLORS.primary,
    padding: '1rem',
    paddingBottom: '2rem',
    borderRadius: '5px'
  },
  image: {
    maxWidth: '85px',
    maxHeight: '85px',
    backgroundColor: 'white',
    borderRadius: '5px',
    float: 'left',
    margin: '1rem 1rem 0 0'
  },
  text: {
    textAlign: 'justify'
  },
  title: {
    margin: 0
  }
})

export const Article = ({ children, image, title }: ArticleProps) => {
  const classes = useStyles()

  return (
    <article className={classes.article}>
      <h1 className={classes.title}>{title}</h1>
      <img className={classes.image} src={image} alt={'Logo de rust'} />
      <div className={classes.text}>
      {children}
      </div>
    </article>
  )
}
