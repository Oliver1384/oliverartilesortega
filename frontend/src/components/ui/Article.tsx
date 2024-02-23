import { ReactNode } from 'react'
import { PRIMARY_COLORS, TEXT_COLORS } from '../../colors'
import { styled } from '@mui/system'

interface ArticleProps {
  children: ReactNode
  image: string
  title: string
}

const ArticleStyled = styled('article')({
  margin: '1rem',
  backgroundColor: PRIMARY_COLORS.section,
  color: TEXT_COLORS.primary,
  padding: '1rem',
  paddingBottom: '2rem',
  borderRadius: '5px'
})

const Title = styled('h1')({
  fontFamily: 'GeistMonoBold',
  fontSize: '24px'
})

const Image = styled('img')({
  maxWidth: '85px',
    maxHeight: '85px',
    backgroundColor: 'white',
    borderRadius: '5px',
    float: 'left',
    margin: '1rem 1rem 0 0'
})

export const Article = ({ children, image, title }: ArticleProps) => {

  return (
    <ArticleStyled>
      <Title>{title}</Title>
      <Image src={image} alt={'Logo de rust'}/>
      <div>{children}</div>
    </ArticleStyled>
  )
}
