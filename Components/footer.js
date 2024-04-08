import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <nav class=" bg-black md:py-24 py-12 md:px-20 px-6">
                <div className="border-b-2 border-white grid md:grid-cols-4 grid-cols-1 w-full pb-20">
                    <div class="flex items-center">
                        <Image
                            src="/Logo.png"
                            width="150"
                            height="75"
                            className="cursor-pointer"
                            priority
                        />
                    </div>

                    <div class="flex items-center md:mt-0 mt-5">
                        <img
                            src="/ph.png"
                            alt="Phone Icon"
                            width="40"
                            height="75"
                            class="cursor-pointer"
                        />
                        <div class="text-white pl-2 font-semibold">
                            Call Us
                            <div class="font-light">
                                <p><a href="tel:+442031051636" class="text-white hover:underline">+44(0)203 105 1636</a></p>
                                <p><a href="tel:+447827297538" class="text-white hover:underline">+44(0)782 729 7538</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center md:mt-0 mt-5">
                        <img
                            src="/em.png"
                            alt="Email Icon"
                            width="40"
                            height="75"
                            class="cursor-pointer"
                        />
                        <div class="text-white pl-2 font-semibold">
                            Mail us
                            <div class="font-light">
                                <a
                                    href="mailto:info@jjowenltd.co.uk"
                                    class="text-white hover:underline"
                                >
                                    info@jjowenltd.co.uk
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center md:mt-0 mt-5">
                        <Image
                            src="/lo.png"
                            width="40"
                            height="75"
                            className="cursor-pointer"
                            priority
                        />
                        <div class="text-white pl-2 font-semibold">
                            Location
                            <div className="font-light">
                                <p>Address: Kemp House, 152 - 160 City Road, London EC1V 2NX</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center text-white mt-2">
                    <p className="md:text-center text-center">
                        Copyright © <span class="text-red-600">JJ Owen</span> | Designed by{" "}
                        <span class="text-red-600">2Digit Innovations</span>
                    </p>
                </div>
            </nav>
        </>
    );
};
export default Footer;
