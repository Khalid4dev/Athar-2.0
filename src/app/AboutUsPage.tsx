import aboutusimage from '../assets/images/aboutus.jpg';
import MemberCard from '../components/MemberCard';
import PageTitle from "../components/PageTitle";
import pfp from '../assets/images/pfp.jpg';
import kidsImage from '../assets/images/kids.jpg';
import Image from 'next/image';

const AboutUsPage = () => {
    return (
        <>
            <PageTitle title="A propos" />
            <section className="bg-white p-8">
                <div className="flex justify-center p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen-xl">
                        <div className='p-5  order-1 sm:order-1 flex flex-col justify-center items-center'>
                            <div className="mb-8">
                                <div className="text-2xl font-bold">Athar Alkhair</div>
                            </div>

                            <div className="text-justify">
                                <p>
                                    Athar Alkhair, une association marocaine enracinée dans la région de Rabat-Salé-Temara, se consacre à la promotion d'un impact humanitaire positif et durable au sein de la société. À travers ses missions, elle s'engage à mettre en œuvre des actions caritatives destinées à apporter un soutien essentiel aux habitants en difficulté évoluant dans des milieux ruraux.</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-end order-2 sm:order-2">
                            <Image className='sm:rounded-r-full rounded-none'
                                src={aboutusimage}
                                alt=""
                            />
                        </div>
                        <div className="flex items-center justify-start order-4 sm:order-3">
                            <Image className='sm:rounded-l-full rounded-none'
                                src={aboutusimage}
                                alt=""
                            />
                        </div>
                        <div className='p-5 flex flex-col justify-center items-center order-3 sm:order-4'>
                            <div className="mb-8">
                                <div className="text-2xl font-bold">Notre Missions</div>
                            </div>

                            <div className="text-justify">
                                <p>
                                    Les missions d'Athar Alkhair s'articulent autour de la création de programmes et d'initiatives visant à améliorer les conditions de vie des populations vulnérables. Cela se concrétise par la fourniture d'aide humanitaire, d'assistance sociale, et le développement de projets ayant un impact significatif sur le bien-être des bénéficiaires.
                                </p>
                            </div>
                        </div>
                        <div className='p-5 flex flex-col justify-center items-center order-5'>
                            <div className="mb-8 ">
                                <div className="text-2xl font-bold sm:order-5">Notre Vision</div>
                            </div>

                            <div className="text-justify">
                                <p>
                                    En regardant vers l'avenir, la vision d'Athar Alkhair se dessine dans la création d'une société où chaque individu, quel que soit son contexte, a accès à des opportunités équitables, à une qualité de vie améliorée, et à un environnement propice à son épanouissement. L'association aspire à être un catalyseur de changement positif, laissant ainsi un héritage durable et transformateur dans les communautés qu'elle touche.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-end order-6 sm:order-6">
                            <Image className='sm:rounded-r-full rounded-none'
                                src={aboutusimage}
                                alt=""
                            />
                        </div>
                        <div className="flex items-center justify-start order-8 sm:order-7">
                            <Image className='sm:rounded-l-full rounded-none'
                                src={aboutusimage}
                                alt=""
                            />
                        </div>
                        <div className='p-5 order-7 sm:order-8 flex flex-col justify-center items-center'>
                            <div className="mb-8">
                                <div className="text-2xl font-bold">Notre Valeurs</div>
                            </div>

                            <div className="text-justify">
                                <p>
                                    Les valeurs fondamentales de l'association reposent sur des principes tels que la solidarité, l'équité, et le respect de la dignité humaine. Athar Alkhair œuvre pour instaurer un climat de bienveillance, de partage, et de justice sociale au cœur de ses actions, reflétant ainsi son engagement envers des valeurs éthiques et morales.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-center text-3xl text-black font-bold mb-8">Notre Équipe</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mx-auto max-w-screen-xl px-8">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="mb-8">
                            <MemberCard
                                picture={pfp.src}
                                name="Houda HALIM"
                                job="Responsable formation et développement RH"
                                email="john.doe@example.com"
                                phoneNumber="123-456-7890"
                            />
                        </div>
                    ))}
                </div>
            </section>



            <div className="text-center mt-8">
                <button className="bg-cyan-300 text-black px-4 py-2 hover:bg-cyan-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-cyan-500">
                    Voir plus
                </button>
            </div>
            {/* <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-20 mx-auto max-w-screen-xl">
                    <div className="bg-secondary-yellow text-white p-8 rounded-lg shadow-md">
                        <h1 className="text-4xl font-bold text-center mb-4">Devenir membre</h1>
                        <p className="text-lg text-center">
                            Rejoignez notre communauté en devenant membre et participez à nos actions.
                        </p>
                        <div className="flex items-center justify-center mt-8">
                            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-yellow-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-yellow-500">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                    <div className="bg-secondary-red text-white p-8 rounded-lg shadow-md">
                        <h1 className="text-4xl font-bold text-center mb-4">Devenir Bénévole</h1>
                        <p className="text-lg text-center">
                            Apportez votre soutien en tant que bénévole et participez à des actions solidaires.
                        </p>
                        <div className="flex items-center justify-center mt-8">
                            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-red-300 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-red-500">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="relative w-full h-96 text-center pt-10">
                <Image
                    src={kidsImage}
                    alt="Hero Image"
                    className="absolute w-full h-full -z-50 object-cover"
                />
                <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-7">
                    <h1 className='text-4xl font-bold text-white mb-4 leading-tight'>
                        Aucun enfant ne devrait grandir seul
                    </h1>
                    <p className="text-white mb-6">
                        Chaque enfant a le droit de grandir au sein d’une famille qui lui apporte affection, respect et protection.
                        Chez SOS Villages d’Enfants, nous donnons un cadre familial à des enfants qui n’en ont pas ou qui risquent de la perdre et nous les aidons à bâtir leur avenir.
                    </p>
                    <button className="border border-white px-6 py-3 rounded-full text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-red-500">
                        Soutenez-Nous
                    </button>
                </div>
            </section>


        </>
    );
};

export default AboutUsPage;

