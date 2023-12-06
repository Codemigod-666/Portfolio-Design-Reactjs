import image from '../../../assets/carousel-portfolio/Image.png'
import image1 from '../../../assets/carousel-portfolio/Image (1).png'
import image2 from '../../../assets/carousel-portfolio/Image (2).png'
import image3 from '../../../assets/carousel-portfolio/Image (3).png'
import image4 from '../../../assets/carousel-portfolio/Image (4).png'
import image5 from '../../../assets/carousel-portfolio/Image (5).png'
import image6 from '../../../assets/carousel-portfolio/Image (6).png'
import image7 from '../../../assets/carousel-portfolio/Image (7).png'
import image8 from '../../../assets/carousel-portfolio/Image (8).png'

export const portData =  [
    {
        id: "UI Design",
        image: image,

    },
    {
        id: "UI Design",
        image: image1,

    },
    {
        id: "Web Tempelates",
        image: image2,

    },
    {
        id: "Web Tempelates",
        image: image3,

    },
    {
        id: "Logo",
        image: image4,

    },
    {
        id: "Logo",
        image: image5,

    },
    {
        id: "UI Design",
        image: image6,

    },
    {
        id: "Branding",
        image: image7,

    },
    {
        id: "Branding",
        image: image8,

    },
]

const cat = new Set(portData.map(obj => obj.id));

export const categories = Array.from(cat);

