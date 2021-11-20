import { Avatar, Button, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import MenuButton from '../components/MenuButton'
import AddRounded from "@mui/icons-material/AddRounded";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


function Profile() {
    return (
        <Fragment>
            <Stack direction="column" alignItems="center">
                <Avatar sx={{ width: 120, height: 120 }} size='large' alt="Profile Image">
                    <Typography variant="h2">M</Typography>
                </Avatar>

                <Typography mt fontWeight="bold" variant="h4">Mahmoud Metwally</Typography>
                <Typography>@username</Typography>
                <Typography>[numOfFollowing] following</Typography>

                <Stack direction="row" spacing={1} mt>
                    <Button disableElevation color="grey">Share</Button>
                    <Button disableElevation color="grey">Edit Profile</Button>
                </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between" mt={7}>
                <MenuButton
                    icon={<AddRounded fontSize="large" />}
                    label="Sort boards by"
                    options={["A to Z", "Drag and drop", "Last saved to"]}
                />

                <MenuButton
                    icon={<MenuRoundedIcon fontSize="large" />}
                    label="Create"
                    options={["Pin", "Board"]}
                />
            </Stack>
        </Fragment >
    );
}

export default Profile;