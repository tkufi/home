import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import ImageBackdropButton from "./ImageBackdropButton";

const ImageFiles = [
    "/turkuimgs/1.png",
    "/turkuimgs/2.png",
    "/turkuimgs/3.png",
    "/turkuimgs/4.png",
    "/turkuimgs/5.png",
    "https://i.imgur.com/o9mqL9b.gif",
    "/turkuimgs/6.png",
    "https://i.imgur.com/anFDQGj.gif",
]

const ImageMasonry = () => {
    return (
        <Masonry columns={3} spacing={1} >
            {ImageFiles.map((file, index) => (
                <Box key={index} sx={{ width: '100%' }}>
                    <ImageBackdropButton index={index} imgSrc={file} />
                </Box>
            ))}
        </Masonry>
    )
}

export default ImageMasonry;