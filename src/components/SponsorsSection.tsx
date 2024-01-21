import React from 'react';
import sponsorImage from '../assets/images/1.webp';
import Image from 'next/image';

interface SponsorsSectionProps {
    className?: string;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ className }) => {
    return (
        <section className="p-20 bg-blue-50">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-xl">
                <div className="text-center flex flex-col justify-center h-full">
                    <h2 className="text-2xl font-bold mb-4">Notre Partenaires</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index}>
                            <Image src={sponsorImage} alt={`Sponsor ${index + 1}`} className="h-15 w-auto mx-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
