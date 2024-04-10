import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F4F4F4] max-h-full flex justify-center py-24">
        <div className="font-poppins">
          <div className="text-4xl text-center text-red-600 font-bold">
            Our services
          </div>
          <div class="grid md:grid-cols-3 grid-cols- justify-center mt-10">
            <div class="max-w-xs mx-4 ">
              <Image
                src="/p1.png"
                width="400"
                height="75"
                className="cursor-pointer"
                priority
              />
              <div class="p-4">
                <div class="text-center mb-4">
                  <h2 class="text-xl font-bold  text-red-600">
                    <a
                      href="https://jjowen-care.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Healthcare Services
                    </a>
                  </h2>
                </div>
                <button class="block mx-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4">
                  <a
                    href="https://jjowen-care.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </button>
              </div>
            </div>

            <div class="max-w-xs mx-4 ">
              <Image
                src="/p2.png"
                width="400"
                height="75"
                className="cursor-pointer"
                priority
              />
              <div class="p-4">
                <div class="text-center mb-4">
                  <h2 class="text-xl font-bold  text-red-600">
                    Accounting Services
                  </h2>
                </div>
                <button class="block mx-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4 ">
                  Learn more
                </button>
              </div>
            </div>

            <div class="max-w-xs mx-4 first-letter: ">
              <Image
                src="/p3.png"
                width="400"
                height="75"
                className="cursor-pointer"
                priority
              />
              <div class="p-4">
                <div class="text-center mb-4">
                  <h2 class="text-xl font-bold text-red-600">
                    <a
                      href="https://jjowen-it.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IT Consulting Services
                    </a>
                  </h2>
                </div>
                <button class="block mx-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4">
                  <a
                    href="https://jjowen-it.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
