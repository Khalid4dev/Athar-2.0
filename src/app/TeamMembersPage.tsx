import React from 'react';
import pfp from '../assets/images/pfp.jpg';
import PageTitle from '../components/PageTitle';
import MemberCard from '../components/MemberCard';


const TeamMembersPage: React.FC = () => {
    return (
        <div>
            <PageTitle title="Équipe Dirigeante et Membres Clés" />
            <section className='p-12'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto max-w-screen-lg">
                    {[1, 2, 3, 4, 5, 6,7,8,9].map((index) => (
                        <div key={index} className="mb-8 hover:shadow-xl hover:scale-105 transition-transform">
                            <MemberCard
                                picture={pfp.src}
                                name="Khalid HALIM"
                                job="Responsable formation et développement RH"
                                email="john.doe@example.com"
                                phoneNumber="123-456-7890"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TeamMembersPage;
