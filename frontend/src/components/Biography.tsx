import { makeStyles } from '@mui/styles'
import { PRIMARY_COLORS, TEXT_COLORS } from "../colors"

const useStyles = makeStyles({
  section: {
    backgroundColor: PRIMARY_COLORS.section,
    color: TEXT_COLORS.primary,
    padding: '2rem',
    borderRadius: '5px'
  },
});

export const Biography = () => {
  const classes = useStyles() 

  return (
    <section className={classes.section}>
      <h1>Biografía</h1>
      <p>
        Descubrí la programación en la univercidad, en una carrera que no
        terminé. Estuve un año aprendiendo por mi cuenta y decidí realizar el
        ciclo superior de aplicaciones web que terminé en 2022. Realize
        prácticas en empresa durante 3 meses en "Secret Source" y posterior
        mente me contrataron en la empresa que me encuentro actualmente
        "Contactel", el 14 de Junio de 2022.
      </p>
    </section>
  );
};
