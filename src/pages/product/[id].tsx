import { useRouter } from 'next/router';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>
            </ImageContainer>

            <ProductDetails>
                <h1>Shirt X</h1>
                <span>27,99$</span>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo esse voluptatibus repellat rerum praesentium molestias dignissimos, deleniti itaque sequi. Exercitationem sunt excepturi quod quidem minus odio minima necessitatibus dignissimos quaerat.</p>

                <button>Buy now</button>
            </ProductDetails>
        </ProductContainer>
    )
}