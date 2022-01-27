import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Button, Container, Grid, Rating, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns';
import { getBooks } from '../redux-tool/booksSlice'
import { useDispatch, useSelector } from 'react-redux'
import BooksList from '../components/BooksList'

export default function HomePage() {

    const [value, setValue] = React.useState(new Date());
    const [rateVal, setRateVal] = React.useState()
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch])

    const handleApplyFilter = () => {
        
    }

    return (
        <>
            <Header />
            <Container maxWidth={'lg'} sx={{ pt: 8, pb: 6 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacig={2}>
                        <Grid item xs={8}>
                            <BooksList />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='h2' align='left' sx={{ ml: 10, pb: 3 }}>
                                Filters
                            </Typography>
                            <Grid item sx={{ ml: 10, pb: 3 }} md>
                                <TextField
                                    id="outlined-basic" label="Author" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item sx={{ ml: 3, pb: 3 }} md>
                                <LocalizationProvider dateAdapter={DateAdapter}>
                                    <DesktopDatePicker
                                        label="Published date from"
                                        inputFormat="dd/MM/yyyy"
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid container item sx={{ ml: 10, pb: 3, textAlign: 'left' }} direction="column">
                                <Typography component="legend">Rating</Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={rateVal}
                                    onChange={(event, newValue) => {
                                        setRateVal(newValue);
                                    }}
                                />
                            </Grid>
                            <Button
                                type="submit"
                                size='large'
                                variant="outlined"
                                sx={{ ml: -9 }}
                                onClick={handleApplyFilter}
                            >
                                Apply filter
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    )
}
