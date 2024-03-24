import { ReactNode } from 'react'
import { PRIMARY_COLORS, TEXT_COLORS } from '../../colors'
import { styled } from '@mui/system'
import { Title } from './Title'

interface ArticleProps {
  children: ReactNode
  image: string
  title: string
}

const ArticleStyled = styled('article')({
  backgroundColor: PRIMARY_COLORS.section,
  color: TEXT_COLORS.primary,
  padding: '1rem',
  paddingBottom: '2rem',
  margin: '0.5rem',
  borderRadius: '5px',
  '@media(min-width:500px)': {
    margin: '1rem',
  }
})

const Image = styled('img')({
  maxWidth: '85px',
  maxHeight: '85px',
  backgroundColor: 'white',
  borderRadius: '5px',
  marginRight: '0.5rem',
  float: 'left',
  width: '25px',
  height: '25px',
  display: 'inline',
  '@media(min-width:500px)': {
    marginRight: '1.7rem',
    display: 'column',
    width: 'auto',
    height: 'auto',
  }
})

const ArticleHeader = styled('div')({
  '@media(min-width: 500px)': {
    display: 'flex',
    flexDirection: 'column-reverse',
    float: 'left'
  },
})

const ArticleBody = styled('div')({
  '@media(min-width: 500px)': {
    marginTop: '2.2rem'
  }
})

export const Article = ({ children, image, title }: ArticleProps) => {

  return (
    <ArticleStyled>
      <ArticleHeader>
        <Image src={image} alt={'Logo de rust'} />
        <Title sx={{
          '@media(min-width:500px)': {
            margin: '0',
            marginBottom: '0.8rem'
          }
        }}>{title}</Title>
      </ArticleHeader>
      <ArticleBody>{children}</ArticleBody>
    </ArticleStyled>
  )
}
