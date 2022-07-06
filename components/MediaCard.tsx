import { FC } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack } from "@mui/material";
import { Pokemon } from "../interfaces/myPokemon";

interface Props {
    pokemon: Pokemon
}

const MediaCard: FC<Props> = ({ pokemon }) => {
    const {name, abilities, img} = pokemon
    return (
        <Grid item>
            <Card variant="outlined" sx={{ width:300, justifyContent: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 180, margin: 'auto', marginTop:'10px'}}
                    image={img}
                    alt={name}
                    
                />
                <CardContent>
                    <Typography align="center" variant="h6" component="div">
                        {name}
                    </Typography>
                    {/* <Typography variant="subtitle1" color="text.secondary"> */}
                        <Stack direction="row" justifyContent="space-evenly" spacing={0.5} mt={1}>
                            {
                                abilities.map( (abilitie,id) => <Chip variant="outlined" key={id} label={abilitie} />)
                            }
                        </Stack>
                    {/* </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MediaCard;