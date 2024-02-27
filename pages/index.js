import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import Explore from "@/components/Explore";
import Posts from "@/components/Posts";
import { CiStreamOn } from 'react-icons/ci';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <main className="lg:mx-36 mx-2">
        <Hero />
        <div className="flex gap-2 my-auto">
          <h1 className="mt-8 ml-4 font-bold text-xl my-auto font-noto">Today's Live</h1>
          <CiStreamOn className='text-black font-bold text-2xl mt-9 animate-pulse my-auto' />
        </div>

        <LiveStream />
        <h1 className="mt-12 ml-4 font-bold text-xl font-noto ">Explore Narayangad</h1>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mt-4 ">
          <Explore title={'कार्तिक यात्रा'} image={'/kartik-yatra.gif'} description={'दर वर्षी कार्तिक शु. १५ पौर्णिमेस येथे मोठी यात्रा भरते'} />
          <Explore title={'पालखी सोहळा'} image={'/palkhi.gif'} description={'पायदळ प्रवास श्री नारायण गड ते श्री क्षेत्र पंढरपूर पर्यंत २०० किलोमीटर '} />
          <Explore title={'गडावरील बांधकाम'} image={'/badkam.gif'} description={'एवढी हि भूमी पावन आणि पवित्र झालेली आहे.'} />
          <Explore title={'शैक्षणिक कार्य'} image={'/01.jpg'} description={'मोफत वसतीगृह , वारकरी शिक्षण संस्था '} />
        </div>
        <h1 className="lg:mt-40 mt-16 ml-4 font-bold text-xl font-noto">Upcoming Events</h1>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-1 mt-4">
          <Posts title={'शैक्षणिक कार्य'} image={'/01.jpg'} description={'सरस्वतीचा वरदहस्त लाभल्यावर मानवाचा उद्धार होतो हे लक्षात घेऊन संस्थानने अनेक उपक्रम राबविले आहेत. गडावर इयत्ता पाचवी ते दहावी पर्यंतच्या शिक्षणाची सोय केली.  '} />
          <Posts title={'कार्तिक यात्रा'} image={'/07.jpg'} description={'दर वर्षी कार्तिक शु. १५ पौर्णिमेस येथे मोठी यात्रा भरते'} />
          <Posts title={'पालखी सोहळा'} image={'/03.jpg'} description={'पायदळ प्रवास श्री नारायण गड ते श्री क्षेत्र पंढरपूर पर्यंत २०० किलोमीटर '} />
          <Posts title={'गडावरील बांधकाम'} image={'/badkam.gif'} description={'एवढी हि भूमी पावन आणि पवित्र झालेली आहे.'} />
        </div>
      </main>

    </div>
  );
}
