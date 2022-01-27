import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function BooksCard(props) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/books/${props.obj.id}`, { state: props.obj })
    }
    return (
        <Card sx={{ maxWidth: 240, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start' }}>
            <CardContent sx={{ marginTop: 'auto' }}>
                <Typography gutterBottom variant="h5" component="div" align={'left'}>
                    {props.obj.bookName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Add to...</Button>
                <Button onClick={handleClick} size="small">Read</Button>
            </CardActions>
        </Card >
    );
}

/* <Typography variant="body2" color="text.secondary" align={'left'}>
{/* {props.obj.description} */
//serdar
// </Typography> */}