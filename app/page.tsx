import Image from "next/image";
import GridLayout from './assets/grid-layout.svg';
import Logotype from './assets/logotype.svg';
import PhoneMockup from './assets/mockup.png';
import LinkButton from "@/app/components/LinkButton";
import RocketSvg from "@/app/components/icons/RocketSvg";
import DownloadSvg from "@/app/components/icons/DownloadSvg";
import MobileLogo from '@/app/assets/boxicons_mobile-alt.svg';
import WindowsLogo from '@/app/assets/uim_windows.svg';
import MacosLogo from '@/app/assets/wpf_macos.svg';
import LinuxLogo from '@/app/assets/codicon_terminal-linux.svg';
import Chevron from '@/app/assets/glyphs_chevron-bold.svg';

// sm-md-lg-xl
// 320 - 448 - 512 - 576

// 375px -> ~640px mobile
// 640->768 (sm) big phones / small tablets
// 768 -> 1024px (md) tablets
// 1024 -> 1280px (lg) laptops / desktops
// 1280 -> 1536px (xl) desktops widen content, max-width
// 1536 -> 1920px (2xl) large desktops

// 768
// 1024


export default function Home() {
    return (
        <div className="flex flex-col h-full min-h-dvh container mx-auto md:p-7">
            <div
                className="relative overflow-hidden flex flex-col h-screen md:h-[728px] w-full pl-4 pr-4 lg:bg-[#f7f7f7] rounded-2xl">
                <Image className="absolute pointer-events-none opacity-50 z-0 pl-13 pr-13" objectFit="cover" fill
                       src={GridLayout}
                       alt={"grid"}/>

                <Image
                    className="absolute border hidden lg:block pointer-events-none z-0 left-1/3 lg:top-2  xl:top-1/7 transform translate-x-[-5%]"
                    src={PhoneMockup} width={1293}
                    height={870} alt={"phone"}/>

                <div
                    className="justify-center lg:justify-between lg:mt-4 md:flex z-10 pr-8 pl-8 w-full h-fit items-center">
                    <nav className="flex text-lg bg-white justify-center items-center rounded-full p-4 pl-7 pr-7">
                        <Image src={Logotype} alt={"logo"} width={48} height={48} className="mr-8 hidden lg:block"/>
                        <ul className="flex gap-5">
                            <li>Home</li>
                            <li>Features</li>
                            <li>Upgrade</li>
                            <li>Contact</li>
                        </ul>
                    </nav>

                    <div className="hidden lg:block z-10">
                        <LinkButton variant="primary" value="Start learning" ImageComponent={RocketSvg}/>
                    </div>
                </div>

                <div className="flex items-center lg:items-start lg:pl-7 text-center z-10 flex-col mt-21">
                    <Image
                        className="mt-4 lg:hidden" objectFit="cover" width={140} height={140}
                        src={Logotype}
                        alt={"grid"}
                    />

                    <h2 className="text-2xl lg:text-3xl font-bold mt-8 lg:mt-0 ">
                        <span className="text-blaze">
                           Learn Once.
                        </span>
                        &nbsp; Remember forever
                    </h2>

                    <p className="text-center lg:text-left md:text-xl lg:w-1/2 text-gray-500 mt-4">
                        Sonsennim (inspired by the Korean word for teacher) uses spaced repetition to schedule your
                        reviews automatically — so you remember more with less effort. Create flashcards, track your
                        progress, and let the system decide the perfect moment to revisit knowledge.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center gap-4 mt-5">
                        <LinkButton classes="order-2 lg:order-1" variant="primary" value="Download"
                                    ImageComponent={DownloadSvg}/>
                        <LinkButton classes="order-1 lg:order-2" variant="outline" value="Open in your browser"
                                    ImageComponent={RocketSvg}/>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <div className="flex items-center gap-2">
                            <Image src={MobileLogo} alt={"mobile phone"} width={24} height={24}/>
                            <span className="text-[12px]">Mobile</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={WindowsLogo} alt={"mobile phone"} width={24} height={24}/>
                            <span className="text-[12px]">Windows</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={MacosLogo} alt={"mobile phone"} width={24} height={24}/>
                            <span className="text-[12px]">MacOS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={LinuxLogo} alt={"mobile phone"} width={24} height={24}/>
                            <span className="text-[12px]">Linux</span>
                        </div>
                    </div>

                </div>
                <div className="absolute md:hidden bottom-1 left-1/2 transform -translate-x-1/2">
                    <Image src={Chevron} alt={"chevron"}/>
                </div>
            </div>
        </div>
    );
}
