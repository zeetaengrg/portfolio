import { Image } from '@chakra-ui/react';

const FrontendTab = () => {

    const imageStyle = {
        height: { base: "4rem", md: "5.625rem" },
        width: { base: "4rem", md: "5.625rem" },
        objectFit: "contain",
    };

    return (
        <>
            <Image
                src="/images/html.png"
                alt="HTML5"
                sx={imageStyle}
            />
            <Image
                src="/images/css.png"
                alt="CSS3"
                sx={imageStyle}
            />
            <Image
                src="/images/javascript.png"
                alt="JavaScript"
                sx={imageStyle}
            />
            <Image
                src="/images/reactjs.png"
                alt="ReactJS"
                sx={imageStyle}
            />
            <Image
                src="/images/nextjs.png"
                alt="NextJS"
                sx={imageStyle}
            />
        </>
    );
};

export default FrontendTab;
