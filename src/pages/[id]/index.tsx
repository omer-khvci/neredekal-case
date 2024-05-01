import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Avatar, Box, Card, CardContent, Grid, styled, Typography} from "@mui/material";
import {User} from "@/models/user";
import UserService from "../../../services/user-service";

const FlexBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center'
}));

const TypographyCustom = styled(Typography)(({theme})=>({
    fontWeight:'bold',
}))

const Page = () => {
    const router = useRouter();
    const {id} = router.query

    const [userId, setUserId] = useState<number | null>(null);

    const [user, setUser] = useState<User | null>(null);

    const getUser = async () => {
        const response = await UserService.GetUserInfo(Number(id))
        if (response.status === 200) {
            setUser(response.data);
        }
        console.log(response)
    }

    useEffect(() => {

        if (id == null) {
            setUserId(null)
        } else {
            // @ts-ignore
            setUserId(Number.parseInt(id))
        }

    }, [id]);

    useEffect(() => {

        if (userId != null) {

            getUser()
        } else {
            setUser(null)
        }
    }, [userId])

    return (
        <>
        <FlexBox sx={{marginBottom:"20px"}}>
            <Card sx={{width: '100%', maxWidth: '150'}}>
                <CardContent>
                    <Grid container>
                        <Grid item lg={1}>
                    <Avatar src={user?.image} sx={{width: '100px', height: '100px', paddingTop:"35px"}}/>
                    </Grid>
                    <Grid container item mt={5} rowSpacing={0} lg={11}>
                        <Grid item xs={12}>
                            <Typography>
                                {user?.firstName} {user?.lastName}</Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography>
                                <TypographyCustom variant="caption">Sicil No: </TypographyCustom>
                                {user?.ssn}
                            </Typography>
                        </Grid>


                        <Grid item xs={4}>
                            <Typography>
                                <TypographyCustom variant="caption">Bölüm: </TypographyCustom>
                                {user?.company.department}
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography>
                                <TypographyCustom variant={'caption'}>Pozisyon: </TypographyCustom>
                                {user?.company.title}
                            </Typography>
                        </Grid>

                    </Grid>
                    </Grid>
                </CardContent>
            </Card>


        </FlexBox>
       <Grid container spacing={2}>
        <Grid item lg={6}>
       <Card >
                <CardContent>
                    <Grid container>
                    
                    <Grid container item rowSpacing={0} lg={12}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Genel Bilgiler</Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Adı Soyadı: </TypographyCustom>
                                {user?.firstName} {user?.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Kullanıcı Adı: </TypographyCustom>
                                {user?.username}
                            </Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant={'caption'}>Mail Adresi: </TypographyCustom>
                                {user?.email}
                            </Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Cinsiyet: </TypographyCustom>
                                {user?.gender}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Üniversite: </TypographyCustom>
                                {user?.university}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Doğum Tarihi: </TypographyCustom>
                                {user?.birthDate}
                            </Typography>
                        </Grid>
                        

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Göz Rengi: </TypographyCustom>
                                {user?.eyeColor}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Saç Rengi: </TypographyCustom>
                                {user?.hair.color}
                            </Typography>
                        </Grid>

                    </Grid>
                    </Grid>
                </CardContent>
            </Card>
       </Grid>
       <Grid item lg={6}>
       <Card sx={{height:"100%"}}>
                <CardContent>
                    <Grid container>
                    
                    <Grid container item rowSpacing={0} lg={12}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Şirket Bilgiler</Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Şirket İsmi: </TypographyCustom>
                                {user?.company.name} 
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Başlık: </TypographyCustom>
                                {user?.company.title}
                            </Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant={'caption'}>Deparmanı: </TypographyCustom>
                                {user?.company.department}
                            </Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Adres: </TypographyCustom>
                                {user?.company.address.address} {user?.company.address.city} {user?.company.address.state} {user?.company.address.postalCode}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Web Sitesi: </TypographyCustom>
                                {user?.domain}
                            </Typography>
                        </Grid>
                        
                        

                    </Grid>
                    </Grid>
                </CardContent>
            </Card>
       </Grid>
       <Grid item lg={12}>
       <Card sx={{height:"100%"}}>
                <CardContent>
                    <Grid container>
                    
                    <Grid container item rowSpacing={0} lg={12}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Banka Bilgiler</Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Kart Numarası: </TypographyCustom>
                                {user?.bank.cardNumber} 
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Kart Tipi: </TypographyCustom>
                                {user?.bank.cardType}
                            </Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant={'caption'}>Ödeme Tipi: </TypographyCustom>
                                {user?.bank.currency}
                            </Typography>
                        </Grid>

                        <Grid item xs={6} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Son Kullanma: </TypographyCustom>
                                {user?.bank.cardExpire}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">İban: </TypographyCustom>
                                {user?.bank.iban}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={6}>
                            <Typography>
                                <TypographyCustom variant="caption">Kripto: </TypographyCustom>
                                {user?.crypto.coin}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} mt={6}>
                            <Typography>
                                <TypographyCustom variant="caption">Kripto Türü: </TypographyCustom>
                                {user?.crypto.network}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} mt={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Kripto Cüzdanı: </TypographyCustom>
                                {user?.crypto.wallet}
                            </Typography>
                        </Grid>
                        
                        

                    </Grid>
                    </Grid>
                </CardContent>
            </Card>
       </Grid>
       </Grid>
       </>
    )
}

export default Page



