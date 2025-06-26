import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";

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
                    <img src={file} alt={`Image ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
                </Box>
            ))}
        </Masonry>
    )
}

export default ImageMasonry;