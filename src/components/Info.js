import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Info() {

    const classes = useStyles();
  
    return (
    <Card className={classes.root} className="mt-5" variant="outlined" >
      <CardContent>
            <Typography className={classes.title} className="mb-3" color="textSecondary" gutterBottom >
            Información del turno
            </Typography>
            <div>
                <Typography variant="body2" className="mb-1" component="p">
                    Nombre y Apellido
                </Typography>
                <Typography variant="h5" className="mb-3" component="h2">
                    Agustina Heredia
                </Typography>

                <Typography variant="body2" className="mb-1" component="p">
                    Número de Teléfono o Celular
                </Typography>
                <Typography variant="h5" className="mb-3" component="h2">
                    3412545
                </Typography>

                <Typography variant="body2" className="mb-1" component="p">
                    Fecha y Hora
                </Typography>
                <Typography variant="h5" className="mb-3" component="h2">
                    fecha
                </Typography>
            </div>
      </CardContent>
    </Card>
    )
}

export default Info
