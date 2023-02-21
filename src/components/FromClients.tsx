import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";

function TestimonialsOne() {

    return (
        <Box component="section" py={6}>
            <Container>
                <Grid container item xs={12} lg={6} justifyContent="center" mx="auto" textAlign="center">
                    <Typography variant="h2" mb={2}>
                        Betyg och recensioner
                    </Typography>
                    <Typography variant="body2" color="text" mb={2}>
                        Läs om hur några av våra kunder
                        sammanfattar sina egna erfarenhetet med Beauty Nails
                    </Typography>
                </Grid>
                <Grid container spacing={3} mt={8}>
                    <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Rebecka D.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Trevliga, noggranna och fantastiskt duktiga!
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Rating name="half-rating" defaultValue={5} precision={0.5} />
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Anna K.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Fantastisk service. Trevliga och duktiga. Gjorde naglar och fransar , supernöjd med båda. Fräsch och ren lokal. Blev en del skratt, hela upplevelsen är toppen. Återkommer gärna 😍😊 Bjöds på läsk under tiden man väntade på sin tur.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Rating name="half-rating" defaultValue={5} precision={0.5} />
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={8} lg={4} mb={{ xs: 3, lg: 0 }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Christina R.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Bästa i stan, kommer alltid tillbaka till de, bästa kvaliteten och bästa servicen, alltid bra bemötande! ❤️
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Rating name="half-rating" defaultValue={5} precision={0.5} />
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 6 }} />

            </Container>
        </Box>
    );
}

export default TestimonialsOne;