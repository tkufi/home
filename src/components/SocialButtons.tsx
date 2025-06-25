import { Box, ButtonGroup, Stack, Button } from "@mui/material";
import { Icon } from "@iconify/react"

const SocialButtons = () => {
    return (
        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
            <Stack direction="row" spacing={3}>
                <ButtonGroup>
                    <Button
                        variant="outlined"
                        startIcon={<Icon icon="simple-icons:discord" width="24" height="24"></Icon>}
                        href='https://discord.gg/AKCrercF5U'
                        target="_blank"
                        size="large"
                    >
                        Join Discord
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Icon icon="simple-icons:robloxstudio" width="24" height="24"></Icon>}
                        href='https://www.roblox.com/communities/34326814/Turku-Finland'
                        target="_blank"
                        size="large"
                    >
                        Roblox Community
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Icon icon="simple-icons:maildotru" width="24" height="24"></Icon>}
                        href='mailto:tkurbx@dovn.com?subject=Tkurbx Developer Enquiry'
                        target="_blank"
                        size="large"
                    >
                        Contact Us
                    </Button>
                </ButtonGroup>
            </Stack>
        </Box>
    );
};

export default SocialButtons;