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

export default function Home() {
    return (
        <div className="flex p-2 pt-6 flex-col h-full min-h-dvh container mx-auto">
            <div
                className="relative overflow-hidden flex flex-col w-full h-168.75 pt-5 pl-7 pr-7 bg-[#f7f7f7] rounded-2xl">
                <Image className="absolute pointer-events-none opacity-50 z-0 pl-13 pr-13" objectFit="cover" fill
                       src={GridLayout}
                       alt={"grid"}/>
                <Image className="absolute pointer-events-none z-0 left-1/2 transform-[translateX(-25%)]"
                       src={PhoneMockup} width={1293}
                       height={870} alt={"phone"}/>
                <div className="flex z-10 justify-between pr-8 pl-8 w-full h-fit items-center">
                    <nav className="flex text-lg bg-white justify-center items-center rounded-full p-4 pl-7 pr-7">
                        <Image src={Logotype} alt={"logo"} width={48} height={48} className="mr-8"/>
                        <ul className="flex gap-5">
                            <li>Home</li>
                            <li>Features</li>
                            <li>Upgrade</li>
                            <li>Contact</li>
                        </ul>
                    </nav>

                    <LinkButton variant="primary" value="Start learning" ImageComponent={RocketSvg}/>
                </div>

                <div className="flex z-10 flex-col mt-21 ml-12">
                    <h2 className="text-3xl font-bold">
                        <span className="text-blaze">
                           Learn Once.
                        </span>
                        &nbsp; Remember forever
                    </h2>

                    <p className="text-xl w-1/2 text-gray-500 mt-4">
                        Sonsennim (inspired by the Korean word for teacher) uses spaced repetition to schedule your
                        reviews automatically — so you remember more with less effort. Create flashcards, track your
                        progress, and let the system decide the perfect moment to revisit knowledge.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <LinkButton variant="primary" value="Download" ImageComponent={DownloadSvg}/>
                        <LinkButton variant="outline" value="Open in your browser" ImageComponent={RocketSvg}/>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="flex items-center gap-2">
                            <Image src={MobileLogo} alt={"mobile phone"} width={24} height={24}/>
                            <span className="text-base">Mobile</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={WindowsLogo} alt={"mobile phone"} width={24} height={24}/>
                            <span className="text-base">Windows</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={MacosLogo} alt={"mobile phone"} width={24} height={24}/>
                            <span className="text-base">MacOS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={LinuxLogo} alt={"mobile phone"} width={24} height={24}/>
                            <span className="text-base">Linux</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
