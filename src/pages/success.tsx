import Link from "next/link";

import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Purchase completed!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Hello <strong>Diogo Azevedo</strong>, your <strong>Shirt X</strong> is already on his way to your home.
            </p>

            <Link href='/'>
                Back to catalog
            </Link>
        </SuccessContainer>
    )
}