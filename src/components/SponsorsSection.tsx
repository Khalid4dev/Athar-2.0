import React from 'react';
import sponsorImage from '../assets/images/1.webp';

interface SponsorsSectionProps {
    className?: string;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ className }) => {
    return (
        <section className={`p-8 bg-gray-200 ${className}`}>
            <div className="container grid grid-cols-2 gap-8 max-w-screen-xl px-0">
                <div className="text-center flex flex-col justify-center h-full">
                    <h2 className="text-2xl font-bold mb-4">Our Sponsors</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                        <div key={index}>
                            <img src={sponsorImage} alt={`Sponsor ${index + 1}`} className="h-15 w-auto mx-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
