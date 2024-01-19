import React from "react";

type MemberCardProps = {
    picture: string;
    name: string;
    job: string;
    email: string;
    phoneNumber: string;
};

const MemberCard: React.FC<MemberCardProps> = ({
    picture,
    name,
    job,
    email,
    phoneNumber,
}) => {
    return (
        <div className="max-w-md mx-auto bg-white overflow-hidden shadow-lg">
            <img
                className="w-full h-56 object-fill ratio-4/3"
                src={picture}
                alt={`Profile of ${name}`}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">{job}</p>
                <p className="text-gray-600 mb-2">Email: {email}</p>
                <p className="text-gray-600">Tel: {phoneNumber}</p>
            </div>
        </div>
    );
};

export default MemberCard;
