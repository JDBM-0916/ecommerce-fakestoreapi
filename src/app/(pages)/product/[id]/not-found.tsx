import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (

        <div className="container min-h-screen px-6 mx-auto lg:flex lg:items-center lg:gap-12">
            <div className="relative w-full pt-12 lg:w-1/2 lg:mt-0">
                <Image className="w-full max-w-lg lg:mx-auto"
                    src="https://merakiui.com/images/components/illustration.svg"
                    alt="404"
                    width={100}
                    height={100}
                />
            </div>
            <div className="w-full lg:w-1/2 ">
                <h1 className="pt-8 text-3xl lg:pt-0"> Lo sentimos el producto que esta buscando no existe</h1>
                <div className="flex items-center mt-6 gap-x-3 justify-center text-center">
                    <Link href={'/home'} className="w-2/5 rounded-lg px-5 py-2 text-sm tracking-wide text-white bg-gradient-to-l to-pink-500 via-red-500 from-yellow-500">
                        Regresar al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}