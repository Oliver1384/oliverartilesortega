import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

import { SecondaryTitle } from './ui/SecondaryTitle';
import { Link } from './ui/Link';
import cleanCodeBook from '../assets/img/clean-code-book.jpg';
import zeroToProductionInRustBook from '../assets/img/zero-to-production-in-rust-book.jpg';
import refactoringUIBook from '../assets/img/refactoring-ui.jpg';
import programmingWithTypesBook from '../assets/img/programming-with-types.jpg';
import sumergetePatronesDiseñoBook from '../assets/img/sumergete-patrones-diseño.png';
import programmingRust2EditionBook from '../assets/img/programming-rust-2-edition-book.png';
import codigoSostenible from '../assets/img/codigo-sostenible.jpg';
import { Modal } from '@mui/material';
import { PRIMARY_COLORS } from '../colors';

const BooksContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
});

const BookImage = styled('img')({
  maxWidth: '120px',
  cursor: 'pointer',
});

const Book = styled('div')({
  margin: '1rem',
  display: 'flex',
  alignItems: 'center',
});

const CloseButton = styled('div')({
  color: 'white',
  fontSize: '32px',
  cursor: 'pointer',
  position: 'absolute',
  top: '4%',
  right: '8%',
});

const LinksContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media(min-width:500px)': {
    display: 'inline-block',
  },
});

export const Resources = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [currentBook, setCurrentBook] = useState<string | undefined>();

  const onBookClick = (book: string) => {
    setOpen(true);
    setCurrentBook(book);
  };

  return (
    <>
      <div>
        <SecondaryTitle>{t('resources.books')}</SecondaryTitle>
        <BooksContainer>
          <Book onClick={() => onBookClick(cleanCodeBook)}>
            <BookImage src={cleanCodeBook} />
          </Book>
          <Book onClick={() => onBookClick(zeroToProductionInRustBook)}>
            <BookImage src={zeroToProductionInRustBook} />
          </Book>
          <Book onClick={() => onBookClick(refactoringUIBook)}>
            <BookImage src={refactoringUIBook} />
          </Book>
          <Book onClick={() => onBookClick(sumergetePatronesDiseñoBook)}>
            <BookImage src={sumergetePatronesDiseñoBook} />
          </Book>
          <Book onClick={() => onBookClick(programmingRust2EditionBook)}>
            <BookImage src={programmingRust2EditionBook} />
          </Book>
          <Book onClick={() => onBookClick(programmingWithTypesBook)}>
            <BookImage src={programmingWithTypesBook} />
          </Book>
          <Book onClick={() => onBookClick(codigoSostenible)}>
            <BookImage src={codigoSostenible} />
          </Book>
        </BooksContainer>
        <Modal
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onClose={handleClose}
          open={open}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: PRIMARY_COLORS.section,
              borderRadius: '5px',
            }}
          >
            <CloseButton style={{ pointerEvents: 'none' }}>
              <CloseIcon fontSize={'large'} />
            </CloseButton>
            <img style={{ maxHeight: '90vh', maxWidth: '90%' }} src={currentBook} />
          </div>
        </Modal>
        <LinksContainer>
          <SecondaryTitle>{t('resources.documentation')}</SecondaryTitle>
          <Link href={'https://es.react.dev/reference/react'} target={'_blank'}>
            React Reference Overview
          </Link>
          <br />
          <Link href={'https://doc.rust-lang.org/book/'} target={'_blank'}>
            The Rust Programming Language
          </Link>
          <br />
          <Link href={'https://www.php.net/manual/es/langref.php'} target={'_blank'}>
            PHP Documentation
          </Link>
          <br />
          <Link href={'https://www.typescriptlang.org/docs/'} target={'_blank'}>
            Typescript Documentation
          </Link>
          <br />
          <Link href={'https://developers.google.com/search/docs'} target={'_blank'}>
            Google Search Documentation
          </Link>
        </LinksContainer>
      </div>
    </>
  );
};
