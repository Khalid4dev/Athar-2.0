import TitleImage from "../assets/images/title_background.jpeg";
import Image from "next/image";

type PageTitleProps = {
    title: string;
};

const PageTitle = (prop: PageTitleProps) => {
    return (
        <section id="hero-section" className="relative w-full h-96 text-center">
            <Image
                src={TitleImage}
                alt="Hero Image"
                className="absolute w-full h-full -z-50 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-7">
                <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-shadow">
                    {prop.title}
                </h1>
            </div>
        </section>
    );
};

export default PageTitle;
