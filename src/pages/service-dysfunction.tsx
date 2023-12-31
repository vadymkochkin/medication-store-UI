import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/ServiceDysfunction.module.scss'
import Navbar from '@/components/Navbar'
import Button, { ButtonType } from '@/components/Button'
import Divider from '@/components/Divider'
import Footer from '@/components/Footer'

const CIALIS_DAILY_ITEMS = [
  {
    text: 'Simply take one pill daily and enjoy the freedom to indulge in intimate moments whenever the mood strikes.',
  },
  {
    text: 'Sign up for monthly delivery and receive your first shipment for just $30, with the flexibility to delay or cancel at any time.',
  },
  {
    text: 'Don’t let ED hold you back any longer. Try Uplink Health Health today and experience the convenience and privacy of telehealth. We’re a national company based in San Francisco, CA, and we’re here to help you get the treatment you need, when you need it.',
  },
];

const SHIPPING_ITEMS = [
  {
    text: 'Starting at $2/pill',
  },
  {
    text: 'Same ingredient as brand names Viagra and Cialis',
  },
  {
    text: 'Discreet package & FREE shipping 2-3 business days',
  },
];

const CATEGORIES_PART1 = [
  {
    text: 'Under 25',
  },
  {
    text: '73 or older',
  },
  {
    text: 'Have not had a physical exam in the past 5 years which included a genital exam',
  },
  {
    text: 'Any condition where sex is not advised',
  },
  {
    text: 'Taking the medicine nitroglycerin or other medicines that contain nitrates',
  },
];

const CATEGORIES_PART2 = [
  {
    text: 'Don’t know your blood pressure',
  },
  {
    text: 'Low blood pressure or unexplained fainting or dizziness',
  },
  {
    text: 'Kidney disease',
  },
  {
    text: 'Liver disease',
  },
  {
    text: 'Physical abnormality of the penis, including Peyronie’s disease',
  },
  {
    text: 'Assigned birth sex is female',
  },
];

const DISEASE_PART1 = [{
  text: 'Headache'
}, {
  text: 'Nasal congestion and runny nose'
}, {
  text: 'Backache'
}, {
  text: 'Stomach upset'
}];

const DISEASE_PART2 = [{
  text: 'Flushing'
}, {
  text: 'Visual changes, including a blue tint'
}, {
  text: 'Dizziness'
}, {
  text: 'Trouble sleeping'
}];

export default function ServiceDysfunction() {
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
        <div className={`w-full ${styles.hero1}`}>
          <div className='relative flex px-4 py-4 pb-16 lg:px-24 lg:py-16 container mx-auto flex-col lg:flex-row'>
            <div className='flex flex-col flex-1 items-center'>
              <Image
                src='/imgs/medicine.png'
                alt='medicine'
                width={600}
                height={400}
                className={'rounded-2xl'}
                priority
              />
            </div>
            <div className='flex flex-col flex-1 items-center justify-center lg:ml-10'>
              <p className='text-lg lg:text-3xl font-weight-700 lg:font-weight-400 mt-4 mb-2 text-gray-600'>
                Experience hassle-free access to erectile dysfunction medication by purchasing online.
              </p>
              <p className='text-lg lg:text-3xl font-weight-700 lg:font-weight-400 mt-4 mb-2 text-gray-600'>
                Following a quick online consultation, enjoy fast and free shipping starting at $2 per pill.
              </p>
              <p className='text-lg lg:text-3xl font-weight-700 lg:font-weight-400 mt-4 mb-2 text-gray-600'>
                Take control of your sexual health today and place your order without ever having to leave the comfort of your home.
              </p>
            </div>
            <div className='absolute bottom-2 right-2 lg:bottom-24 lg:right-24 w-16 lg:w-auto'>
              <Image
                src='/imgs/capsule.png'
                alt='medicine'
                width={126}
                height={126}
                className={'rounded-2xl'}
                priority
              />
            </div>
          </div>
        </div>
        <div className={`w-full ${styles.bgWhite}`}>
          <div className='flex justify-between px-4 py-4 lg:px-24 lg:py-24 container mx-auto flex-col lg:flex-row'>
            <div className='flex flex-1 flex-col justify-center lg:ml-3'>
              <div className='lg:pl-24'>
                {SHIPPING_ITEMS.map((item, index) => (
                  <div className='flex flex-1 my-5 lg:my-10' key={'shipping_item_' + index}>
                    <Image
                      src='/imgs/checked-square.png'
                      alt='check'
                      width={36}
                      height={36}
                      className={'h-fit w-5'}
                      priority
                    />
                    <p className='text-md lg:text-2xl font-weight-500 ml-2 lg:ml-10'>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-1 justify-end'>
              <Image
                src='/imgs/fast-shipping.png'
                alt='prescription'
                width={600}
                height={400}
                className={'rounded-2xl'}
                priority
              />
            </div>
          </div>
          <div className='flex justify-between px-4 py-4 lg:px-24 lg:py-24 container mx-auto flex-col lg:flex-row'>
            <div className='flex flex-1 flex-col ml-3'>
              <h1 className='text-lg lg:text-3xl font-weight-bold leading-tight'>Embrace spontaneity with <br />
                Cialis Daily - a low-dose medication  <br />
                designed to keep you ready for  <br />
                action at any time. </h1>
              <Divider className='my-4 lg:my-8' />
            </div>
            <div className='flex flex-col flex-1'>
              {CIALIS_DAILY_ITEMS.map((item, index) => (
                <div className='flex my-2' key={'daily_item_' + index}>
                  <Image
                    src='/imgs/blue-dot.png'
                    alt='check'
                    width={36}
                    height={24}
                    className={'h-fit mt-2 w-4 lg:w-auto'}
                    priority
                  />
                  <p className='text-sm lg:text-lg font-weight-700 ml-2 lg:ml-10'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`w-full ${styles.hero2}`}>
          <div className='flex justify-between px-4 py-4 lg:px-24 lg:py-24 container mx-auto flex-col lg:flex-row'>
            <div className='flex flex-1'>
              <Image
                src='/imgs/fun-man.png'
                alt='fun-man'
                width={600}
                height={400}
                className={'rounded-2xl'}
                priority
              />
            </div>
            <div className='flex flex-1 flex-col justify-center ml-3'>
              <h1 className='text-xl lg:text-3xl font-weight-bold leading-tight'>
                Obtaining a prescription is quick and <br />
                hassle-free, taking just a few minutes <br />
                of your time.
              </h1>
              <Divider className='my-4 lg:my-8' />
              <div className='grid lg:grid-cols-2 gap-4 mb-12'>
                <div className='flex flex-1'>
                  <div className='flex justify-center items-center text-lg font-weight-bold rounded-md text-white bg-neutral-700 px-1 h-fit mr-2 mt-1'>01</div>
                  <p>
                    <b>Take control of your health by selecting the medication that suits your needs.</b>
                    Discover our range of effective treatments, including sildenafil, tadalafil, Cialis Daily, and many others.
                  </p>
                </div>
                <div className='flex flex-1'>
                  <div className='flex justify-center items-center text-lg font-weight-bold rounded-md text-white bg-neutral-700 px-1 h-fit mr-2 mt-1'>02</div>
                  <p>
                    <b>Provide us with your health information,</b>
                    which includes your blood pressure reading, by answering a few simple questions.
                  </p>
                </div>
                <div className='flex flex-1'>
                  <div className='flex justify-center items-center text-lg font-weight-bold rounded-md text-white bg-neutral-700 px-1 h-fit mr-2 mt-1'>03</div>
                  <p>
                    <b>Our medical team will review your information </b>
                    and determine if a video chat is required as per state regulations. We will inform you accordingly.
                  </p>
                </div>
                <div className='flex flex-1'>
                  <div className='flex justify-center items-center text-lg font-weight-bold rounded-md text-white bg-neutral-700 px-1 h-fit mr-2 mt-1'>04</div>
                  <p>
                    <b>Order your ED pills online </b>
                    and receive delivery within just 2-3 business days. Next day delivery options are also available for your convenience.
                  </p>
                </div>
              </div>
              <Button title='Get Started' type={ButtonType.redOutline} />
            </div>
          </div>
        </div>
        <div className={`w-full ${styles.bgWhite}`}>
          <div className='flex justify-between px-4 py-4 lg:px-24 lg:py-24 container mx-auto flex-col lg:flex-row'>
            <div className='flex flex-1 flex-col'>
              <h1 className='text-2xl lg:text-3xl font-weight-bold leading-tight'>What is erectile dysfunction (ED)?</h1>
              <Divider className='my-2' />
              <p className='text-md lg:text-lg font-weight-500'>Erectile dysfunction (ED) is a condition where a male is unable to get or maintain an erection long enough for satisfactory sexual intercourse. This can include difficulty getting erect, difficulty staying erect, or inconsistent erectile function. It is important to note that ED does not include low sex drive or premature ejaculation, which are separate issues.</p>
              <p className='text-md lg:text-lg font-weight-500'>ED is a common problem affecting up to 40% of men by age 40, but the good news is that it can be successfully treated with the proper care and ED treatment. Several factors can contribute to ED, including nerve damage, cardiac and blood vessel damage, high blood pressure, obesity, stress, anxiety, and depression, alcohol and tobacco use, fatigue, prostate surgery, and certain prescription medications.</p>
            </div>
            <div className='flex flex-1 flex-col lg:ml-10 mt-4 lg:mt-0'>
              <div>
                <h1 className='text-2xl lg:text-3xl font-weight-bold leading-tight'>Treatments for erectile dysfunction</h1>
                <Divider className='my-2' />
                <p className='text-md lg:text-lg font-weight-500'>There are several treatments available for ED, including oral medications, testosterone therapy, penile injections, and intraurethral medication. Oral ED medications, known as PDE-5 inhibitors, are often the first-line treatment for many men. These medications increase blood flow to the penis by relaxing the muscles in and around the penis, and include brand names like Viagra, Cialis, Levitra, and Stendra, as well as their generic equivalents.</p>
              </div>
              <div className='mt-2'>
                <h1 className='text-2xl lg:text-3xl font-weight-bold leading-tight'>Prescription ED pills</h1>
                <Divider className='my-2' />
                <p className='text-md lg:text-lg font-weight-500'>
                  At Uplink Health, we offer a safe and easy way to get a prescription for ED pills online. Our medical team will review your health information, and if appropriate, prescribe a medication that is right for you. Don't let ED interfere with your sex life any longer -
                  <a href='#' className='text-red-500 underline'> get started today.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full ${styles.hero3}`}>
          <div className='flex justify-between flex-col lg:flex-row'>
            <div className='flex flex-1 flex-col bg-[#e6f6fc] items-center lg:items-end'>
              <div className='w-full lg:w-10/12 py-4 px-8 lg:py-24 lg:pr-12'>
                <h1 className='text-2xl lg:text-3xl font-weight-bold leading-tight'>The Capabilities and Limitations of Prescription Medications</h1>
                <Divider className='my-2' />
                <p className='text-md lg:text-lg font-weight-500 my-2'>It's crucial to have a clear understanding of what prescription ED pills can and cannot do before considering them as a treatment option.</p>
                <p className='text-md lg:text-lg font-weight-500 my-2'>While prescription ED medication can help you get and maintain an erection during sexual stimulation and improve your physical ability to engage in sexual activities, they are not designed to increase libido or sexual desire. It's also important to note that ED medication may not be effective for every man with ED. Factors such as medical history, including conditions like diabetes or past prostate surgery, can affect the efficacy of oral ED meds.</p>
              </div>
            </div>
            <div className='flex flex-1 flex-col items-center lg:items-start bg-[#cce6f1]'>
              <div className='w-full lg:w-10/12 py-4 px-8 lg:py-24 lg:pl-12'>
                <h1 className='text-2xl lg:text-3xl font-weight-bold leading-tight'>Possible Adverse Effects of Oral Medications for Erectile Dysfunction</h1>
                <Divider className='my-2' />
                <p className='text-md lg:text-lgfont-weight-500 my-2'>As with any prescription medication for ED, there is a possibility of experiencing unwanted side effects. The most common side effect of PDE-5 inhibitors is a headache. Additionally, PDE-5 inhibitors have the potential to cause priapism, a serious condition where an erection persists and does not subside.</p>
                <p className='text-md lg:text-lg font-weight-500 my-2'>It is critical to seek immediate medical attention if you have an erection that lasts longer than four hours. These medications can also cause sudden changes in vision and hearing, including a sudden loss of eyesight in one or both eyes, and a sudden decrease or loss of hearing.</p>
                <p className='text-md lg:text-lg font-weight-500 my-2'>If you are experiencing an adverse reaction to an oral ED medication that has been prescribed to you, it is essential to inform your prescribing doctor or nurse practitioner.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full ${styles.bgWhite}`}>
          <div className='flex justify-between px-4 py-4 lg:px-24 lg:py-24 container mx-auto flex-col lg:flex-row'>
            <div className='flex flex-1 flex-col'>
              <h1 className='text-2xl lg:text-3xl font-weight-bold leading-tight'>Viagra (sildenafil)</h1>
              <Divider className='my-2' />
              <p className='text-md lg:text-lg font-weight-500 my-2'>Common side effects associated with both branded and generic forms of sildenafil (Viagra) include:</p>
              <div className='flex flex-1 flex-col lg:flex-row'>
                <div className='flex flex-1'>
                  <ul className='green-list'>
                    {DISEASE_PART1.map((item, key) => (
                      <li key={key} className='text-md lg:text-lg font-weight-500 my-2'>{item.text}</li>
                    ))}
                  </ul>
                </div>
                <div className='flex flex-1'>
                  <ul className='green-list'>
                    {DISEASE_PART2.map((item, key) => (
                      <li key={key} className='text-md lg:text-lg font-weight-500 my-2'>{item.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className='text-md lg:text-lg font-weight-500 my-2'>However, in some cases, more severe reactions can occur when taking sildenafil, including chest pain, sweating, shortness of breath, irregular heartbeat, and seizures. If you experience any adverse reactions, it is important to seek medical attention immediately.</p>
            </div>
            <div className='flex flex-1 flex-col lg:ml-12'>
              <h1 className='text-2xl lg:text-3xl font-weight-bold leading-tight'>Cialis (tadalafil)</h1>
              <Divider className='my-2' />
              <p className='text-md lg:text-lg font-weight-500 my-2'>The frequent side effects of tadalafil include headache, flushing, nasal congestion and runny nose, nausea and stomach upset, backache, muscle pain, and pain in limbs. In rare cases, taking tadalafil may cause chest pain, sweating, changes in hearing, and abnormal vision.</p>
            </div>
          </div>
        </div>
        <div className={`w-full`}>
          <div className='flex flex-col px-4 py-4 lg:px-24 lg:py-24 container mx-auto'>
            <div className='flex w-full items-center flex-col'>
              <h1 className='text-2xl lg:text-3xl font-weight-600 text-center'>Is it possible to purchase ED medication online?</h1>
              <Divider className='my-4 lg:my-8' />
            </div>
            <div className='flex w-full mb-12 flex-col lg:flex-row'>
              <div className='flex flex-1 mt-6'>
                <Image
                  src='/imgs/fun-man-2.png'
                  alt='fun'
                  width={600}
                  height={400}
                  className={'rounded-2xl h-fit'}
                  priority
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <p className='text-md lg:text-lg font-weight-500 my-2'>Procuring prescription ED pills without consulting a doctor or any other medical professional might appear as the easiest option at first. However, it is always advised to prioritize your safety and well-being over convenience.</p>
                <p className='text-md lg:text-lg font-weight-500 my-2'>Viagra is the most counterfeited drug in the market, which emphasizes the need to only use oral ED medicines prescribed by licensed healthcare professionals and procure them from a US-based licensed pharmacy.</p>
                <p className='text-md lg:text-lg font-weight-500 my-2'>Your safety and well-being are of utmost importance, and you deserve to enjoy your sex life without risking your health. Uplink Health provides prescriptions for sildenafil (generic Viagra), tadalafil (generic Cialis), and vardenafil (generic Levitra). With a quick and straightforward online visit with our clinical team, you can get a prescription for your required medication. Subsequently, the Uplink Health pharmacy, which is licensed in all 50 states, will discreetly ship your meds to your doorstep.</p>
                <p className='text-md lg:text-lg font-weight-500 my-2'>Online telehealth services like Uplink Health ensure both safety and convenience, allowing you to safely procure erectile dysfunction pills online and receive them in just a few days. Although our ED service necessitates a consultation with a doctor or nurse practitioner, it is a more straightforward and safer option than attempting to buy ED pills online.</p>
                <p className='text-md lg:text-lg font-weight-500 my-2'>Procuring pills from websites that do not require prescriptions poses a significant risk, and it's uncertain what you'll receive. These sites may send you dangerous counterfeits, and hence it's much safer to obtain medications through a licensed US pharmacy like Uplink Health.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full ${styles.bgWhite}`}>
          <div className='flex px-4 py-4 lg:px-24 lg:py-24 container mx-auto flex-col lg:flex-row'>
            <div className='rounded-3xl p-8 bg-green-50 mt-4 lg:mt-0 lg:mx-4'>
              <h2 className='text-md lg:text-xl font-weight-bold leading-tight mb-6'>Who Should Avoid Using Prescription ED Medications</h2>
              <p className='text-sm lg:text-lg font-weight-500 my-4'>Sildenafil citrate, originally developed to treat high blood pressure, is still used under the brand name Revatio to treat elevated blood pressure in the lungs in people with pulmonary hypertension. However, due to the increase in nitric oxide which can lead to a drop in blood pressure, men with certain medical conditions should avoid prescription ED pills.</p>
              <p className='text-sm lg:text-lg font-weight-500 my-4'>Those with active and symptomatic heart disease, heart failure, low blood pressure (hypotension), or taking nitrates or nitroglycerin are not recommended to take oral PDE-5 inhibitors. It's essential to work with a medical professional to determine any underlying health conditions, including cardiovascular disease and diabetes, that may be causing ED.</p>
            </div>
            <div className='rounded-3xl p-8 bg-green-50 mt-4 lg:mt-0 lg:mx-4'>
              <h2 className='text-md lg:text-xl font-weight-bold leading-tight mb-6'>Understanding Drug Interactions and Their Risks</h2>
              <p className='text-sm lg:text-lg font-weight-500 mt-4'>Ensuring your safety is paramount when choosing the right treatment for erectile dysfunction. If you're taking medications for hypertension, such as alpha blockers (terazosin, doxazosin, prazosin), it's essential to inform your healthcare provider before starting any prescription ED treatment.</p>
              <p className='text-sm lg:text-lgfont-weight-500 mb-4'>At Uplink Health, we are always available to address your concerns, discuss your current medications, and determine the safest treatment options for you.</p>
              <p className='text-sm lg:text-lg font-weight-500 my-4'>However, if you have hypotension, heart failure, or take medications for those conditions, we may not be able to provide you with ED medication. Taking ED drugs in such situations increases your risk of severe adverse reactions, such as fainting, extreme dizziness, stroke, and heart attack.</p>
            </div>
            <div className='rounded-3xl p-8 bg-green-50 mt-4 lg:mt-0 lg:mx-4'>
              <h2 className='text-md lg:text-xl font-weight-bold leading-tight mb-6'>Where to get a blood pressure (BP) reading?</h2>
              <p className='text-sm lg:text-lg font-weight-500 mt-4'>In order to obtain a prescription from Uplink Health, it is necessary to have a recent blood pressure (BP) reading. This information is essential to guarantee the safety and suitability of the prescribed medication. Luckily, obtaining a BP reading is easy and free. You can visit a participating pharmacy to have it done.</p>
              <p className='text-sm lg:text-lg font-weight-500 mb-4'>If you're not sure where to find a participating pharmacy, you can locate your nearest Higi machine or Pursuant Health machine at a nearby pharmacy.</p>
            </div>
          </div>
        </div>
        <div className={`w-full ${styles.bgWhite}`}>
          <div className='flex justify-between px-4 py-4 lg:px-24 lg:py-24 container mx-auto'>
            <div className={`flex flex-1 flex-col justify-center items-center rounded-2xl p-4 lg:p-10 lg:mr-5`}>
              <h1 className='text-xl lg:text-3xl font-weight-bold leading-tight text-center'>Eligibility Criteria for Uplink Health's Services</h1>
              <Divider className='my-4 lg:my-8' />
              <h3 className='text-xs lg:text-md text-center font-weight-bold leading-tight'>Uplink Health cannot help those who fall under the following categories:</h3>
              <div className='flex flex-1 lg:px-12 mb-6 py-6 flex-col lg:flex-row'>
                <div className='flex flex-1 flex-col px-6'>
                  {CATEGORIES_PART1.map((item, index) => (
                    <div className='flex my-2 items-center' key={'category1_item_' + index}>
                      <Image
                        src="/imgs/close-x-icon.png"
                        alt="Uplink Health"
                        width={12}
                        height={12}
                        className={'h-fit'}
                      />
                      <p className='text-sm lg:text-lg ml-3 font-weight-500'>{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className='flex flex-1 flex-col px-6'>
                  {CATEGORIES_PART2.map((item, index) => (
                    <div className='flex my-2 items-center' key={'category2_item_' + index}>
                      <Image
                        src="/imgs/close-x-icon.png"
                        alt="Uplink Health"
                        width={12}
                        height={12}
                        className={'h-fit'}
                      />
                      <p className='ml-3 font-weight-500'>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
