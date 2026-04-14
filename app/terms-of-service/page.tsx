import Image from "next/image";

import Logotype from '../../public/logotype.svg';
import LinkButton from "@/app/components/LinkButton";
import RocketSvg from "@/app/components/icons/RocketSvg";
import Link from "next/link";

const productLink = "https://learn.sonsennim.com";


export default function TOSPage() {
    return (
        <>
            <div className="flex flex-col h-full min-h-dvh container mx-auto md:p-7">
                <div
                    className="justify-center lg:justify-between lg:mt-4 md:flex z-10 px-8 w-full h-fit items-center">
                    <nav className="flex text-lg bg-white justify-center items-center rounded-full p-4 px-7">
                        <Image src={Logotype} alt={"logo"} width={48} height={48} className="mr-8 hidden lg:block"/>
                        <ul className="flex gap-5">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={""}>Product</Link></li>
                            <li><Link href={"mailto:vladyslav.lutchyn@gmail.com"}>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="hidden lg:block z-10">
                        <LinkButton
                            link={productLink}
                            target="_blank"
                            variant="primary" value="Start learning" ImageComponent={RocketSvg}/>
                    </div>
                </div>

                <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
                    <div
                        className=" mx-auto bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">

                        <div className="bg-linear-to-r from-blaze to-red-500 px-8 py-10 text-white">
                            <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
                            <p className="mt-2 text-white">Effective date: April 13, 2026</p>
                        </div>

                        <div className="p-8 space-y-8 text-gray-600 leading-relaxed">

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing or using Sonsennim LMS ("Service", "we", "our", or "us"), you agree to
                                    be bound by these Terms of Service.
                                    If you do not agree with these Terms, you must not use the Service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Description of the
                                    Service</h2>
                                <p>
                                    Sonsenim LMS is an online learning platform designed to help users study and review
                                    vocabulary using spaced repetition and learning analytics.
                                    We reserve the right to modify, suspend, or discontinue the Service at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts</h2>
                                <p className="mb-4">To use certain features of the Service, you may be required to
                                    create an account.
                                    You agree to:</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-500">
                                    <li>Provide accurate and complete information.</li>
                                    <li>Maintain the security of your account credentials.</li>
                                    <li>Notify us immediately of any unauthorized use.</li>
                                </ul>
                                <div
                                    className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm">
                                    <strong>Notice:</strong> You are responsible for all activity that occurs under
                                    your account.
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Acceptable Use</h2>
                                <p className="mb-4">You agree not to use the Service to:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span> Violate any laws or regulations
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span> Upload malicious software
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span> Unauthorized access attempts
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span> Abuse or disrupt the Service
                                    </li>
                                </ul>

                                <div
                                    className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm">
                                    <strong>Notice:</strong> We reserve the right to suspend or terminate accounts that
                                    violate these rules.
                                </div>
                            </section>

                            <hr className="border-gray-100"/>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">5. User Content & IP</h2>
                                <p>
                                    You retain ownership of the content you create (flashcards, decks). By using the
                                    Service, you grant us
                                    a limited license to store and process your content to operate the platform. All
                                    software and branding
                                    remain the property of <span className="font-medium">Sonsenim LMS</span>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h2>
                                <p>
                                    All software, design, branding, and technology associated with the Service remain
                                    the property of Sonsenim LMS or its licensors.
                                </p>

                                <p className="mb-4">You may not:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span> Copy
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span> Modify
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span> Reverse engineer
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✕</span> Redistribute
                                    </li>
                                </ul>
                                <p className="mt-2">any part of the Service without permission.</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Service Availability</h2>
                                <p>
                                    We aim to keep the Service available and reliable. However, we do not guarantee
                                    uninterrupted access.
                                    The Service may experience downtime for maintenance, updates, or unforeseen
                                    technical issues.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Disclaimer</h2>
                                <p className="text-sm italic bg-gray-50 p-4 rounded-lg">
                                    The Service is provided "as is" and "as available".
                                    We make no guarantees that: the Service will meet your expectations, the Service will be uninterrupted or error-free, data will never be lost, Use of the Service is at your own risk.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h2>
                                <p className="mb-4">To the maximum extent permitted by law, Sonsenim LMS shall not be liable for:</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-500">
                                    <li>indirect damages.</li>
                                    <li>data loss</li>
                                    <li>loss of profits</li>
                                    <li>interruption of service</li>
                                </ul>
                                arising from the use or inability to use the Service.
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Termination</h2>
                                <p>
                                    We may suspend or terminate access to the Service at any time if a user violates these Terms.
                                    Users may also stop using the Service at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Changes to the Terms</h2>
                                <p>
                                    We may update these Terms from time to time. Changes will be posted on this page with an updated effective date.
                                    Continued use of the Service after changes means you accept the updated Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Governing Law</h2>
                                <p>
                                    These Terms shall be governed by and interpreted in accordance with applicable laws.
                                </p>
                            </section>



                            <section className="pt-6 border-t border-gray-100">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-900">Questions?</h2>
                                        <p className="text-sm">Reach out to our legal team.</p>
                                    </div>
                                    <a href="mailto:vladyslav.lutchyn@gmail.com"
                                       className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blaze hover:bg-red-400 transition-colors">
                                        vladyslav.lutchyn@gmail.com
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

