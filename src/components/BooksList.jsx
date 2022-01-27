import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import BooksCard from './BooksCard';

const BooksList = () => {
    const { books } = useSelector((state) => state.books);
    return (
        <Grid container spacing={2}>
            {
                books.map((i) => (
                    <Grid key={i.id} item sx={{ pb: 4 }}>
                        <BooksCard obj={i} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default BooksList
