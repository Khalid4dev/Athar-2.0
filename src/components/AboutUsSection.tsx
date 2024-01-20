import React from 'react';
import Image from 'next/image';
import aboutusimage from '../assets/images/aboutus.jpg';
const AboutUsSection: React.FC = () => {
  return (
    <div className="flex justify-center p-8 bg-blue-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-xl">
        <div>
          <div className="mb-8">
            <div className="text-2xl font-bold">Qui sommes-nous ?</div>
            <h3 className="text-uppercase">Athar Alkhair</h3>
          </div>

          <div className="text-justify">
            <p>
              L’Association Marocaine de Solidarité et de Développement (AMSED) est une organisation à but non lucratif créée en 1993.
            </p>
            <p>
              Au fil des années, l’activité de l’association a connu un essor remarquable, cette évolution et la qualité de ses interventions lui ont valu dès 1999 la reconnaissance de l’Etat par l’obtention du Statut de l’utilité publique. Poursuivant sa quête avec engagement et performance, AMSED est devenue membre consultatif au Conseil Economique et Social des Nations Unies (ECOSOC) en 2002.
            </p>
            <p>
              Ainsi, et depuis sa création, AMSED a développé plusieurs dispositifs de formation et d’outils en matière d’appui institutionnel, organisationnel et technique pour les associations.
            </p>
          </div>
          <div className="mt-4">
            <a
              href="/"
              className="bg-grey-500 text-cyan-400 rounded-md hover:bg-grey-400"
            >
                Lire plus
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-end">
          <Image
            width="450"
            height="401"
            src={aboutusimage}
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
