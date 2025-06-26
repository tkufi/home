import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import ImageBackdropButton from "./ImageBackdropButton";

const ImageFiles = [
    "/home/turkuimgs/1.png",
    "/home/turkuimgs/2.png",
    "/home/turkuimgs/3.png",
    "/home/turkuimgs/4.png",
    "/home/turkuimgs/5.png",
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