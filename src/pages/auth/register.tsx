import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Navbar from '@/components/Navbar'
import Button, { ButtonType } from '@/components/Button'
import Footer from '@/components/Footer'
import Link from 'next/link'
import TextInput from '@/components/TextInput'
import Checkbox from '@/components/Checkbox'
import { MODAL_TYPES, useGlobalModalContext } from '@/components/GlobalModal';
import APIClient from '@/utils/api';
import { useRouter } from 'next/router';
import LocalAPIClient from '@/utils/localApi';

interface RegisterInfoProps {
    email: string;
    password: string;
    confirm_password: string;
    remember_me: boolean; 
}

export default function Register() {
    const router = useRouter();
    const { showModal } = useGlobalModalContext();
    const [registerInfo, setRegisterInfo] = useState<RegisterInfoProps>({
        email: '',
        password: '',
        confirm_password: '',
        remember_me: false,
    });
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const handleEmailChange = (val: string) => {
        setRegisterInfo({
            ...registerInfo,
            email: val,
        });
    }
    
    const handlePasswordChange = (val: string) => {
        setRegisterInfo({
            ...registerInfo,
            password: val,
        });
    }
    
    const handleConfirmPasswordChange = (val: string) => {
        setRegisterInfo({
            ...registerInfo,
            confirm_password: val,
        });
    }
    
    const handleRememberMeToggle = (val: boolean) => {
        setRegisterInfo({
            ...registerInfo,
            remember_me: val,
        });
    };

    const handleSubmit = async () => {
        if (!registerInfo.email) {
            showModal(MODAL_TYPES.ALERT_MODAL, {
                title: 'Alert',
                description: 'You need to fill your email address',
                confirmBtn: 'OK',
            });
            return;
        }
        if (!registerInfo.password) {
            showModal(MODAL_TYPES.ALERT_MODAL, {
                title: 'Alert',
                description: 'You need to fill password',
                confirmBtn: 'OK',
            });
            return;
        }
        if (!registerInfo.confirm_password) {
            showModal(MODAL_TYPES.ALERT_MODAL, {
                title: 'Alert',
                description: 'You need to fill confirm password',
                confirmBtn: 'OK',
            });
            return;
        }
        if (registerInfo.password !== registerInfo.confirm_password) {
            showModal(MODAL_TYPES.ALERT_MODAL, {
                title: 'Alert',
                description: 'You need to fill confirm password',
                confirmBtn: 'OK',
            });
            return;
        }

        setLoading(true);
        const data = await LocalAPIClient.post('/api/auth/register', {
            email: registerInfo.email,
            password: registerInfo.password,
            password_repeat: registerInfo.confirm_password,
        });
        setLoading(false);
        if (data && !data.errors) {
            router.push('/');
        } else {
            if (data.errors) {
                setHasError(true);
                setErrorMessages(data.errors);
            }
        }
    };
    return (
        <>
            <Head>
                <title>Uplink Health</title>
                <meta name="description" content="Generated by Uplink Health" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                <div className={`w-full ${styles.hero1}`}>
                    <div className='flex px-4 py-8 lg:px-24 lg:py-16 container mx-auto flex-col lg:flex-row'>
                        <div className='flex flex-col flex-1 justify-center items-center'>
                            <h1 className='text-xl lg:text-3xl font-weight-bold leading-tight'>WELCOME TO UPLINK-HEALTH!</h1>
                        </div>
                    </div>
                </div>
                <div className={`w-full flex flex-1 ${styles.bgWhite}`}>
                    <div className='flex flex-col px-4 lg:px-24 py-8 container mx-auto items-center'>
                        <p className='text-sm lg:text-lg font-weight-500 my-2 text-gray-600 text-center'>
                            No waiting rooms. No expensive doctors visits.
                        </p>
                        <p className='text-sm lg:text-lg font-weight-500 my-2 text-gray-600 text-center'>
                            Prescription treatments sent to your door, discreetly.
                        </p>
                        <p className='text-sm lg:text-lg font-weight-500 my-2 text-gray-600 text-center'>
                            This is the future of tele-medicine.
                        </p>
                        <p className='text-md lg:text-2xl font-weight-bold my-4 text-gray-600'>
                            Get Started
                        </p>
                        <p className='text-sm lg:text-lg font-weight-500 my-2 text-gray-600'>
                            Already a member?
                            <Link href={'/auth/login'} className="ml-2 text-[#45a46c]">Log in</Link>
                        </p>
                        <div className='flex flex-col items-center w-full lg:w-1/3'>
                            <TextInput label="Email" id='email' handleChange={handleEmailChange} hasError={hasError} />
                            <TextInput label="Create Password" id='password' type='password' handleChange={handlePasswordChange} hasError={hasError} />
                            <TextInput label="Repeat Password" id='confirm_password' type='password' handleChange={handleConfirmPasswordChange} hasError={hasError} errorMessage={errorMessages} />
                            <div className='flex justify-start w-full'>
                                <Checkbox label='Remember me' id={'remember_me'} handleChange={handleRememberMeToggle} />
                            </div>
                            <Button title='Sign Up' containerClassName='my-6' type={ButtonType.redOutline} onClick={handleSubmit} disabled={loading} />
                            <p className='text-center w-full mt-2'>or</p>
                            <div className='border border-[#9fdbf3] rounded-md flex items-center justify-center w-full py-3 my-4'>
                                <Image
                                    src="/imgs/google-icon.png"
                                    alt="google"
                                    width={30}
                                    height={30}
                                    className={'h-fit mr-2'}
                                />
                                <p className='font-weight-600'>Continue with Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};