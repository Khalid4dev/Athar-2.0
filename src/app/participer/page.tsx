"use client";
import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faFax,
  faEnvelope,
  faUser,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import helpImage from "src/assets/images/help.jpg";
import Layout from "@/components/Layout";

const ParticipatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requestType: "membership",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form data (optional)
    setFormData({
      name: "",
      email: "",
      phone: "",
      requestType: "membership",
      message: "",
    });
  };

  return (
    <>
      <PageTitle title="Participer" />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-20 mx-auto max-w-screen-xl px-4">
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src={helpImage}
              alt="Devenir Bénévole"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-primary-grey opacity-60"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black opacity-50 text-white text-center p-8">
              <h1 className="text-4xl font-bold mb-4">Devenir Bénévole</h1>
              <p className="text-lg">
                Apportez votre soutien en tant que bénévole et participez à des
                actions solidaires.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src={helpImage}
              alt="Devenir Bénévole"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-primary-blue opacity-60"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black opacity-50 text-white text-center p-8">
              <h1 className="text-4xl font-bold mb-4">Devenir Membre</h1>
              <p className="text-lg">
                Apportez votre soutien en tant que bénévole et participez à des
                actions solidaires.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src={helpImage}
              alt="Devenir Bénévole"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-secondary-red opacity-60"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black opacity-50 text-white text-center p-8">
              <h1 className="text-4xl font-bold mb-4">Faire un Don</h1>
              <p className="text-lg">
                Apportez votre soutien en tant que bénévole et participez à des
                actions solidaires.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src={helpImage}
              alt="Devenir Bénévole"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-secondary-yellow opacity-60"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black opacity-50 text-white text-center p-8">
              <h1 className="text-4xl font-bold mb-4">Devenir Partenaire</h1>
              <p className="text-lg">
                Apportez votre soutien en tant que bénévole et participez à des
                actions solidaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="JoinUs" className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 mx-auto max-w-screen-xl">
        <div className="text-black p-8">
          <div>
            <div className="text-center pb-8">
              <h1 className="text-4xl font-bold mb-4 border-b border-gray-300 p-4">
                Notre Coordonnées
              </h1>
              <div className="flex flex-col text-lg text-justify">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <p>2 Rue de la Liberté, 1000 Maroc</p>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <p>71 333 333</p>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faFax} className="mr-2" />
                  <p>71 333 333</p>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <p>example@example.com</p>
                </div>
              </div>
            </div>
            <div className="text-center pb-8">
              <h1 className="text-4xl font-bold mb-4 border-b border-gray-300 p-4">
                RIB Compte bancaire
              </h1>
              <div className="flex flex-col text-lg text-justify">
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <p>
                    Vous êtes un particulier ? RIB: 022 780 0001 320027394286 74{" "}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                  <p>
                    Vous êtes une entreprise ? RIB: 022 780 0001 320005032973 74
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 border-b border-gray-300 p-4">
                Get in Touch With Us
              </h1>
              <div className="flex justify-center items-center space-x-4 p-4">
                <a
                  href="#facebook"
                  className="border border-blue-600 p-2 rounded-xl hover:bg-blue-600 hover:text-white"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-600 text-lg"
                  />
                </a>
                <a
                  href="#instagram"
                  className="border border-pink-600 p-2 rounded-xl hover:bg-pink-600 hover:text-white"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-pink-600 text-lg"
                  />
                </a>
                <a
                  href="#twitter"
                  className="border border-blue-400 p-2 rounded-xl hover:bg-blue-400 hover:text-white"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-blue-400 text-lg"
                  />
                </a>
                <a
                  href="#linkedin"
                  className="border border-blue-500 p-2 rounded-xl hover:bg-blue-500 hover:text-white"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-500 text-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-black p-8">
          <h1 className="text-4xl text-center font-bold mb-4 border-b border-gray-300 p-4">
            Rejoignez-Nous
          </h1>
          <p className="pb-2">
            Veuillez remplir le formulaire ci-dessous afin que nous puissions
            vous contacter rapidement pour soumettre votre demande
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Nom Complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-lg font-semibold mb-2"
              >
                Numéro de Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="requestType"
                className="block text-lg font-semibold mb-2"
              >
                Type de Demande
              </label>
              <select
                id="requestType"
                name="requestType"
                value={formData.requestType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="donation">Faire un Don</option>
                <option value="membership">Devenir Membre</option>
                <option value="volunteer">Devenir Bénévole</option>
                <option value="partner">Devenir un Partenaire</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-primary-blue text-white px-6 py-3 rounded-md  transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring"
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="pt-12 pb-12">
        <h1 className="text-4xl text-center font-bold mb-4">
          Actions en cours
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6 mx-auto max-w-screen-xl">
          <div className="grid grid-rows-2 pr-4 pl-4">
            <div>
              <Image
                src={helpImage}
                alt="Devenir Bénévole"
                className="object-cover w-full h-72"
              />
            </div>
            <div className=" flex flex-col items-center gap-4 relative w-full">
              <div className="flex flex-col gap-2 relative w-full">
                <div className="relative text-xl font-bold pt-4 text-black">
                  Let’s together provide them a healthy food
                </div>
                <p className="relative text-base font-normal text-primary-grey">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus incidunt ullam doloribus illo nobis? Incidunt atque
                  facilis quibusdam odit perspiciatis velit alias nesciunt vero
                  quod, obcaecati soluta ad deleniti harum.
                </p>
              </div>
              <div className="flex items-center justify-between relative w-full">
                <div className="flex items-center gap-2 relative bg-gray-300 rounded-full p-2">
                  <div className="relative font-normal text-black text-sm">
                    15 Dec 22
                  </div>
                </div>
                <a
                  className="flex items-center justify-end border p-3 text-white rounded bg-secondary-red"
                  href="#"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 grid grid-rows-1 sm:grid-rows-3 gap-2 pl-8 pr-8 pt-4 pb-4">
            <div className="flex items-center">
              <div>
                <Image
                  src={helpImage}
                  alt="Devenir Bénévole"
                  className="object-fill w-96 h-full"
                />
              </div>
              <div className="flex flex-col items-start gap-4 pl-2 relative w-full">
                <div className="relative text-xl font-bold text-black">
                  Let’s together provide them a healthy food
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="relative font-normal text-primary-grey text-sm">
                    15 Dec 22
                  </div>
                  <a
                    className="flex items-center justify-end p-3 text-secondary-red"
                    href="#"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <Image
                  src={helpImage}
                  alt="Devenir Bénévole"
                  className="object-fill w-96 h-full"
                />
              </div>
              <div className="flex flex-col items-start gap-4 pl-2 relative w-full">
                <div className="relative text-xl font-bold text-black">
                  Let’s together provide them a healthy food
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="relative font-normal text-primary-grey text-sm">
                    15 Dec 22
                  </div>
                  <a
                    className="flex items-center justify-end p-3 text-secondary-red"
                    href="#"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <Image
                  src={helpImage}
                  alt="Devenir Bénévole"
                  className="object-fill w-96 h-full"
                />
              </div>
              <div className="flex flex-col items-start gap-4 pl-2 relative w-full">
                <div className="relative text-xl font-bold text-black">
                  Let’s together provide them a healthy food
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="relative font-normal text-primary-grey text-sm">
                    15 Dec 22
                  </div>
                  <a
                    className="flex items-center justify-end p-3 text-secondary-red"
                    href="#"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParticipatePage;
