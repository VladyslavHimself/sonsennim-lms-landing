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
import CardsMinimized from '@/app/assets/cards-minimized.png';
import {MemoryCard} from "@/app/components/MemoryCard";
import {FeatureTextCard} from "@/app/components/FeatureTextCard";
import PricingCard, {PricingCardEntity} from "@/app/components/PricingCard";
import Link from "next/link";
import MobileFooterLink from "@/app/components/MobileFooterLink";


const pricingList: PricingCardEntity[] = [
    {
        prefix: 'Free',
        price: 0,
        suffix: 'Free forever',
        bulletList: [
            "Basic analytics information",
            "Comfortable groups sturcturing",
            "Up to 10.000 cards",
            "SM-2 Algorithm",
        ],
        link: "#"
    },

    {
        prefix: 'Premium',
        price: 9.89,
        suffix: 'Billed monthly',
        bulletList: [
            "All from free tier",
            "FSRS Algorithm",
            "Full learning cards history",
            "Unlimited decks & cards",
        ],
        link: "#"
    },

    {
        prefix: 'AI-driven',
        price: 18.89,
        suffix: 'Billed monthly',
        bulletList: [
            "All from premium tier",
            "AI tools to optimize your learning experience",
        ],
        link: "#"
    }
];

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-full min-h-dvh container mx-auto md:p-7">
                <div
                    className="relative overflow-hidden flex flex-col h-screen md:h-[728px] w-full px-4 lg:bg-[#f7f7f7] rounded-2xl">
                    <Image className="absolute pointer-events-none opacity-50 z-0 px-13" objectFit="cover" fill
                           src={GridLayout}
                           alt={"grid"}/>

                    <Image
                        className="absolute hidden lg:block pointer-events-none z-0 left-1/3 lg:top-2  xl:top-1/7 transform translate-x-[-5%]"
                        src={PhoneMockup} width={1293}
                        height={870} alt={"phone"}/>

                    <div
                        className="justify-center lg:justify-between lg:mt-4 md:flex z-10 px-8 w-full h-fit items-center">
                        <nav className="flex text-lg bg-white justify-center items-center rounded-full p-4 px-7">
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

                <div
                    className="relative justify-center items-center text-center mt-14 overflow-hidden flex flex-col h-screen md:h-[728px] w-full px-4 rounded-2xl">
                    <Image className="absolute pointer-events-none opacity-50 z-0 px-13" objectFit="cover" fill
                           src={GridLayout}
                           alt={"grid"}
                    />

                    <div className="absolute top-[10%] left-5 rotate-15 transform-gpu backface-hidden">
                        <MemoryCard variant="primary" frontWord="안녀하세요!" backWord="Hello!"/>
                    </div>

                    <div className="absolute top-[20%] right-5 -rotate-15 transform-gpu backface-hidden">
                        <MemoryCard variant="secondary" frontWord="How are you? 🤔"/>
                    </div>

                    <div className="absolute top-[80%] left-5 -rotate-15 transform-gpu backface-hidden">
                        <MemoryCard variant="secondary" frontWord="사랑해요 🧡"/>
                    </div>

                    <div className="absolute top-[70%] right-5 rotate-15 transform-gpu backface-hidden">
                        <MemoryCard variant="secondary" frontWord="만나서 반갑습니다! 😊"/>
                    </div>

                    <span className="font-medium text-[22px] md:text-4xl lg:text-6xl"><span
                        className="text-blaze">Build</span> your cards</span>
                    <span className="font-medium text-[22px] md:text-4xl lg:text-6xl"><span
                        className="text-blaze">Choose</span> your own way to learn things</span>
                    <span className="font-medium text-[22px] md:text-4xl lg:text-6xl"><span
                        className="text-blaze">Discover</span> community decks</span>
                </div>

                <div className="relative mt-14 flex flex-col w-full px-4">
                    <h2 className="text-3xl xl:text-5xl font-bold text-blaze self-center mt-7">Features</h2>
                    <div className="flex mt-5 flex-col z-1 md:flex-row md:gap-3.5">
                        <div className="md:w-[300px] lg:flex-1">
                            <div className="relative overflow-hidden flex w-full h-fit
                         min-h-[150px]
                         md:min-h-[405px]
                         lg:min-h-[430px]
                         bg-card-background shadow-[0_0_15px_0_rgba(0,0,0,0.2)] rounded-4xl pt-6 pb-6 px-5">
                                <div className="text-xl z-1 lg:text-2xl xl:text-3xl font-bold"><span
                                    className="text-blaze">Configure</span> your
                                    cards<br/> and watch your learning reports!
                                </div>

                                <Image
                                    className="absolute opacity-80 scale-80 -bottom-30 -right-15 md:-bottom-15 md:-right-5 md:scale-100  lg:scale-150"
                                    src={CardsMinimized}
                                    alt={"cards"} width={307} height={300}/>
                            </div>
                        </div>

                        <div className="flex md:flex-1 flex-col gap-4 mt-5 md:mt-0">
                            <div className="flex-1">
                                <FeatureTextCard title="FSRS — A Smarter Way to Learn"
                                                 description="Sonsennim uses FSRS (Free Spaced Repetition Scheduler) —
                                         one of the most advanced learning algorithms available today."
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 flex-1">
                                <div className="md:flex-1">
                                    <FeatureTextCard title="Fully personalized"
                                                     description="adapts to your memory, not averages"/>
                                </div>


                                <div className="md:flex-1">
                                    <FeatureTextCard title="Up to 40%" description="fewer reviews for the same results"
                                                     isAttentionCard
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative flex mt-14 flex-col w-full px-4">
                    <h2 className="text-3xl xl:text-5xl font-bold text-blaze self-center mt-7">Choose your path</h2>
                    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center mt-14 gap-5.5">
                        <PricingCard variant="standard" pricingInfo={pricingList[0]}/>
                        <PricingCard variant="premium" pricingInfo={pricingList[1]}/>
                        <PricingCard variant="standard" pricingInfo={pricingList[2]}/>
                    </div>

                </div>

                <div
                    className="relative items-center justify-between text-center mt-14 lg:hidden flex flex-col h-screen md:max-h-[728px] w-full px-4 pb-8 rounded-2xl">
                    <Image className="absolute pointer-events-none opacity-50 z-0 px-13" objectFit="cover" fill
                           src={GridLayout}
                           alt={"grid"}
                    />
                    <div className="w-full z-1">
                        <h2 className="text-3xl xl:text-5xl font-bold text-blaze self-center mt-7">Information</h2>

                        <div className="flex flex-col gap-4 mt-8">
                            <MobileFooterLink value={"Product"} link={"#"}/>
                            <MobileFooterLink value={"Privacy Policy"} link={"#"}/>
                            <MobileFooterLink value={"Terms of Service"} link={"#"}/>
                            <MobileFooterLink value={"Contact"} link={"#"}/>
                        </div>
                    </div>

                    <div className="text-xl">© 2026 Sonsennim-LMS. All rights reserved.</div>
                </div>
            </div>

            <div className="hidden lg:block w-full h-25 bg-card-background mt-20">
                <div className="container flex items-center justify-between m-auto h-full">
                   <div className="flex gap-6">
                       <Link className="text-xl" href="#">Product</Link>
                       <Link className="text-xl" href="#">Privacy Policy</Link>
                       <Link className="text-xl" href="#">Terms of Service</Link>
                       <Link className="text-xl" href="#">Contact</Link>
                   </div>

                    <div className="text-xl">© 2026 Sonsennim-LMS. All rights reserved.</div>
                </div>
            </div>
        </>
    );
}

