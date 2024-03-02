import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import Explore from "@/components/Explore";
import Posts from "@/components/Posts";
import { CiStreamOn } from 'react-icons/ci';
import Gallery from "@/components/Gallery";
import ThreeDImageSlider from "@/components/Gallery";
import { motion } from 'framer-motion'
import SliderComponent from "@/components/Gallery";
import Footer from "@/components/Footer";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full h-full ">
      <Head>
        <title>श्री क्षेत्र संस्थान नारायण गड | Shri Kshetra Narayangad</title>
        <meta name="description" content="श्री क्षेत्र संस्थान नारायण गड या संस्थानाची स्थापना श्री संत नारायण महाराज यांनी केली. हे तीर्थक्षेत्र बीडच्या वायव्य दिशेस असून ते बीडपासून २१ किलोमीटर अंतरावर आहे. ही वेबसाइट नारायणगडाबद्दल अधिक जाणून घेऊ इच्छिणाऱ्या भक्तांसाठी,वाचकांसाठी आणि अभ्यासकांसाठी  बनवली आहे" />
        <meta name="keywords" content="Narayangad, श्री क्षेत्र संस्थान नारायण गड, श्री संत नारायण महाराज, Shri sant narayan maharaj, narayan maharaj, shivaji maharaj, shivaji maharaj narayangad, shivaji maharaj beed, Shri Kshetra Narayangad, Beed, Maharashtra, Nagad Narayan, Nagad Narayan Maharaj" />
        <meta name="robots" content="index, follow" /> {/* To instruct search engines to index the content */}
        <meta name="author" content="Shri Kshetra Narayangad" /> {/* Add author information if necessary */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* Responsive viewport setting */}
        <link rel="icon" href="/favicon.ico" /> {/* Update the filename if you're using a different one */}
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Navbar />
      <div className="bg-black">
        <Hero />

      </div>

      <main className=" lg:mx-24 mx-4">
        <div className="">
          <motion.h1 initial='hidden'
            animate='visible'
            variants={variants}
            className="mt-12 ml-4 font-extrabold text-2xl my-auto text-orange-600   font-noto">फोटो गॅलरी </motion.h1>
          <SliderComponent />

        </div>

        <div className="flex gap-2 my-auto">
          <h1 className="mt-8 ml-4 font-bold text-2xl my-auto text-orange-600 font-noto">लाईव्ह </h1>

          <CiStreamOn className='text-black font-bold text-2xl mt-9 animate-pulse my-auto' />
        </div>

        <LiveStream />
        <h1 className="mt-12 ml-4 font-extrabold text-2xl text-[#F2800E] font-noto ">गडाविषयी माहिती</h1>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mt-4 ">
          <Explore title={'कार्तिक यात्रा'} image={'/kartik-yatra.gif'} description={'दर वर्षी कार्तिक शु. १५ पौर्णिमेस येथे मोठी यात्रा भरते'} />
          <Explore title={'पालखी सोहळा'} image={'/palkhi.gif'} description={'पायदळ प्रवास श्री नारायण गड ते श्री क्षेत्र पंढरपूर पर्यंत २०० किलोमीटर '} />
          <Explore title={'गडावरील बांधकाम'} image={'/badkam.gif'} description={'एवढी हि भूमी पावन आणि पवित्र झालेली आहे.'} />
          <Explore title={'शैक्षणिक कार्य'} image={'/01.jpg'} description={'मोफत वसतीगृह , वारकरी शिक्षण संस्था '} />
        </div>
        <h1 className="lg:mt-40 mt-16 ml-4 font-bold text-2xl text-[#F2800E] font-noto">ब्लॉग </h1>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-1 mt-4">
          <Posts title={'शैक्षणिक कार्य'} image={'/01.jpg'} description={'सरस्वतीचा वरदहस्त लाभल्यावर मानवाचा उद्धार होतो हे लक्षात घेऊन संस्थानने अनेक उपक्रम राबविले आहेत. गडावर इयत्ता पाचवी ते दहावी पर्यंतच्या शिक्षणाची सोय केली.  '} />
          <Posts title={'कार्तिक यात्रा'} image={'/07.jpg'} description={'दर वर्षी कार्तिक शु. १५ पौर्णिमेस येथे मोठी यात्रा भरते'} />
          <Posts title={'पालखी सोहळा'} image={'/03.jpg'} description={'पायदळ प्रवास श्री नारायण गड ते श्री क्षेत्र पंढरपूर पर्यंत २०० किलोमीटर '} />
          <Posts title={'गडावरील बांधकाम'} image={'/badkam.gif'} description={'एवढी हि भूमी पावन आणि पवित्र झालेली आहे.'} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
