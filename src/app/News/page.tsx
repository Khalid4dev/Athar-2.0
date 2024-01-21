import PageTitle from "../../components/PageTitle";
import Image from "next/image";
import helpImage from "../../assets/images/help.jpg";
import { Calendar } from "@/components/ui/calendar"

export default function Home() {
  return (
    <main>
      <PageTitle title="Actualités" />
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mx-auto max-w-screen-lg pt-12 pb-12">
          <div className="grid col-span-2 grid-row-1 gap-10 mx-auto max-w-screen-lg pt-8">
            <h1 className="text-2xl font-bold">NOS DERNIÈRES ACTUALITÉS</h1>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
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
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In consequuntur eum ratione a.</p>
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
            ))}

          </div>
          <div className="bg-blue-50 col-span-2 sm:col-span-1 pt-8">
            <h1 className="text-center text-2xl font-bold pb-6">EVÈNEMENTS A VENIR</h1>
            <Calendar
              mode="single"
              className="border border-white flex items-center justify-center"
            />
             {[1, 2, 3].map((index) => (
              <div className="flex items-center pt-6">
                <div>
                  date
                </div>
                <div className="flex flex-col items-start gap-4 pl-2 relative w-full">
                  <div className="relative text-xl font-semibold text-black">
                    Let’s together provide them a healthy food
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
