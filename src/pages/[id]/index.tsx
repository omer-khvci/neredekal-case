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
        
        <FlexBox>
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

                        <Grid item xs={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Sicil No: </TypographyCustom>
                                {user?.ssn}
                            </Typography>
                        </Grid>


                        <Grid item xs={3}>
                            <Typography>
                                <TypographyCustom variant="caption">Bölüm: </TypographyCustom>
                                {user?.company.department}
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography>
                                <TypographyCustom variant={'caption'}>Pozisyon: </TypographyCustom>
                                {user?.company.title}
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography>
                                <TypographyCustom variant={'caption'}>Age: </TypographyCustom>
                                {user?.age}
                            </Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </CardContent>
            </Card>


        </FlexBox>
       
    )
}

export default Page



