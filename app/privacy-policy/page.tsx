import Image from "next/image";

import Logotype from '../assets/logotype.svg';
import LinkButton from "@/app/components/LinkButton";
import RocketSvg from "@/app/components/icons/RocketSvg";
import Link from "next/link";

const productLink = "https://learn.sonsennim.com";


export default function PrivacyPolicyPage() {
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
                            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
                            <p className="mt-2 text-white">Effective date: April 13, 2026</p>
                        </div>

                        <div className="p-8 space-y-8 text-gray-600 leading-relaxed">
                            <section id="introduction">
                                <div className="flex items-center mb-4">
                                    <span
                                        className="flex items-center justify-center w-8 h-8 bg-red-100 text-black rounded-lg font-bold mr-3 text-sm">1</span>
                                    <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    Welcome to <strong>Sonsennim LMS</strong> ("we", "our", or "us"). We respect your
                                    privacy and are committed to protecting your personal data. This Privacy Policy
                                    explains how we collect, use, and safeguard your information when you use our
                                    website and application.
                                </p>
                            </section>

                            <section id="collection">
                                <div className="flex items-center mb-6">
 <span
     className="flex items-center justify-center w-8 h-8 bg-red-100 text-black rounded-lg font-bold mr-3 text-sm">2</span>
                                    <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-red-500 mb-2 uppercase text-xs tracking-wider">Account
                                            Data</h3>
                                        <ul className="text-sm text-slate-600 space-y-1">
                                            <li>• Username & Email</li>
                                            <li>• OAuth Data (Google/GitHub)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-red-500 mb-2 uppercase text-xs tracking-wider">Usage
                                            Data</h3>
                                        <ul className="text-sm text-slate-600 space-y-1">
                                            <li>• Study progress</li>
                                            <li>• Created flashcards</li>
                                            <li>• Statistics & Review activity</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-red-500 mb-2 uppercase text-xs tracking-wider">Technical
                                            Data</h3>
                                        <ul className="text-sm text-slate-600 space-y-1">
                                            <li>• IP & Browser type</li>
                                            <li>• Device information</li>
                                            <li>• Cookies</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="usage">
                                <div className="flex items-center mb-4">
 <span
     className="flex items-center justify-center w-8 h-8 bg-red-100 text-black rounded-lg font-bold mr-3 text-sm">3</span>
                                    <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
                                </div>
                                <p className="text-slate-600 mb-6">We process your information to deliver a high-quality
                                    educational experience:</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div
                                        className="flex items-center p-3 text-slate-700 bg-emerald-50 rounded-xl border border-emerald-100">
                                        <span className="mr-3 text-emerald-500">✓</span> Personalize learning paths
                                    </div>
                                    <div
                                        className="flex items-center p-3 text-slate-700 bg-emerald-50 rounded-xl border border-emerald-100">
                                        <span className="mr-3 text-emerald-500">✓</span> Track learning statistics
                                    </div>
                                    <div
                                        className="flex items-center p-3 text-slate-700 bg-emerald-50 rounded-xl border border-emerald-100">
                                        <span className="mr-3 text-emerald-500">✓</span> Improve application UI/UX
                                    </div>
                                    <div
                                        className="flex items-center p-3 text-slate-700 bg-emerald-50 rounded-xl border border-emerald-100">
                                        <span className="mr-3 text-emerald-500">✓</span> Ensure security & prevent abuse
                                    </div>
                                </div>
                                <p className="mt-6 p-4 bg-red-50 rounded-xl text-black text-sm font-medium flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    We do not sell your personal information to third parties.
                                </p>
                            </section>

                            <div className="grid md:grid-cols-2 gap-12 border-t border-slate-100 pt-12">
                                <section>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                                        <span className="mr-2 text-red-500">4.</span> Cookies
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        We use cookies to maintain user sessions and improve performance. You can
                                        disable them in your browser settings, though some features may not function
                                        properly.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                                        <span className="mr-2 text-red-500">5.</span> Data Storage
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        We use technical and organizational measures to protect your data. While we
                                        strive for perfection, no system can be guaranteed 100% secure.
                                    </p>
                                </section>
                            </div>

                            <section id="third-parties">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                    <span className="mr-2 text-red-500">6.</span> Third-Party Services
                                </h3>
                                <p className="text-slate-600 mb-4">Our application integrates with trusted partners:</p>
                                <div className="flex flex-wrap gap-3">
                                    <span
                                        className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700 text-xs font-semibold">Google / GitHub (Auth)</span>
                                    <span
                                        className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700 text-xs font-semibold">Cloud Hosting Providers</span>
                                    <span
                                        className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700 text-xs font-semibold">Analytics Tools</span>
                                </div>
                            </section>

                            <section id="rights" className="border rounded-3xl p-8 text-black">
                                <h2 className="text-2xl font-bold mb-6 text-black">7. Your Rights</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></div>
                                        <p className="text-black text-sm leading-relaxed">Access and request a copy
                                            of the personal data we hold about you.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></div>
                                        <p className="text-black text-sm leading-relaxed">Request correction of
                                            inaccurate or incomplete information.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></div>
                                        <p className="text-black text-sm leading-relaxed">Request full deletion of
                                            your data and account.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 mt-2 bg-red-400 rounded-full mr-3 shrink-0"></div>
                                        <p className="text-black text-sm leading-relaxed">Restrict processing under
                                            certain legal conditions.</p>
                                    </div>
                                </div>
                            </section>

                            <div className="space-y-8">
                                <section>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">8. Data Retention</h3>
                                    <p className="text-slate-600 text-sm">We keep data as long as your account is
                                        active. Upon deletion, we remove it within a reasonable timeframe unless
                                        required otherwise by law.</p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 text-rose-600">9. Children's
                                        Privacy</h3>
                                    <p className="text-slate-600 text-sm italic">Our service is not intended for
                                        children under 13. We do not knowingly collect information from minors.</p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">10. Policy Changes</h3>
                                    <p className="text-slate-600 text-sm">We may update this policy. All changes will be
                                        posted here with a new effective date.</p>
                                </section>
                            </div>

                            <section id="contact" className="pt-8 border-t border-slate-100">
                                <div
                                    className="flex flex-col sm:flex-row items-center justify-between bg-slate-50 p-6 rounded-2xl">
                                    <div className="mb-4 sm:mb-0">
                                        <h3 className="text-lg font-bold text-slate-900">11. Contact Us</h3>
                                        <p className="text-sm text-slate-500">Have questions about your privacy?</p>
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

