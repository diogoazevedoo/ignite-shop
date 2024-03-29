import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { ImageContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface SuccessProps {
    customerName: string
    product: {
        name: string
        imageUrl: string
    }
}

export default function Success({ customerName, product }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Purchase Completed | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <h1>Purchase completed!</h1>

                <ImageContainer>
                    <Image src={product.imageUrl} width={120} height={110} alt="" />
                </ImageContainer>

                <p>
                    Hello <strong>{customerName}</strong>, your <strong>{product.name}</strong> is already on his way to your home.
                </p>

                <Link href='/'>
                    Back to catalog
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
           redirect: {
            destination: '/',
            permanent: false,
           } 
        }
    }
    
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name
    const product = session.line_items.data[0].price.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            }
        }
    }
}