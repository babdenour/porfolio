import Image from "next/image";

const About = () => {
  return (
    <div className="relative isolate bg-gray-900  m-auto w-[70%] h-[70%] flex place-items-center rounded-3xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Who am I ? </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              I m a 24 years old software engineer who has been studying in 42 for 5 years. I made a lot of website using technologies like React.js, Next.js, tailwind.css and much more. Also did some clone Websites to master my css skills. And recently discover the world of web3 and got my web3 developer certification with Alyra where i learned how to create smart contracts, and made my own NFT Marketplace.
            </p>
            {/* TODO write the text about it and bball */}
            <p className="mt-6 text-lg leading-8 text-gray-300">
              I m a 24 years old software engineer who has been studying in 42 for 5 years. I made a lot of website using technologies like React.js, Next.js, tailwind.css and much more. Also did some clone Websites to master my css skills. And recently discover the world of web3 and got my web3 developer certification with Alyra where i learned how to create smart contracts, and made my own NFT Marketplace.
            </p>
          </div>
        </div>
        <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 rounded-3xl">
          <Image className="rounded-3xl" alt="abdenour's picture" width={800} height={0} src={'https://media.licdn.com/dms/image/D4E03AQELTTH4D7OzKQ/profile-displayphoto-shrink_800_800/0/1664895247776?e=1700092800&v=beta&t=nZFR9mvsKuaKRQoxgilHv2Ac-ZXH2OKMoMcjPGqslzA'} />
        </div>
      </div>
    </div>
  );
};

export default About;