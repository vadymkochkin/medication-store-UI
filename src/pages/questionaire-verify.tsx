import Head from 'next/head'
import styles from '@/styles/Common.module.scss'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button, { ButtonType } from '@/components/Button'
import QuestionnaireLayout from '@/layouts/QuestionnaireLayout'
import { useRouter } from 'next/router'

export default function Questionaire() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/profile');
    };

    return (
        <>
            <Head>
                <title>Uplink Health</title>
                <meta name='description' content='Generated by Uplink Health' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <QuestionnaireLayout className={'w-1/2'} activeStep={3} title={'STEP3: Verify Your Identification'}>
                    <div className='my-4 flex'>
                        <Button title='Go To Verification Page' containerClassName='ml-4' type={ButtonType.redOutline} onClick={handleClick} />
                    </div>
                </QuestionnaireLayout>
                <Footer />
            </main>
        </>
    )
}
