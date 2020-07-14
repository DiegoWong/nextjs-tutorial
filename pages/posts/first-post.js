import Link from 'next/link'
import Head from 'next/head'
import Layout from "../../components/layout";
import { getContentFromType } from '../../ignore/contenful'

export default function FirstPost() {
    getContentFromType()
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}