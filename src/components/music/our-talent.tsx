import Image from "next/image";

// Local import
import { SlickTitle } from "../slick-title";
import { Title } from "../title";

export const OurTalent = () => {
  return (
    <section className="section wrapper items-center justify-center">
      <SlickTitle title="Our Talent" />

      <div className="mt-8 space-y-4">
        <Image
          src="/music_images/Telepse_digital_marketing_agency_lagos_nigeria_telepse_music_talent_2tteemusic_image1.jpg"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_telepse_music_talent_2tteemusic_image1"
          width={500}
          height={500}
          className="border-secondary-yellow rounded-2xl border-8"
        />

        <Title align="center">2ttee [musician]</Title>
      </div>
    </section>
  );
};
