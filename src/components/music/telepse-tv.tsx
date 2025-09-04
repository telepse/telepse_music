import Image from "next/image";

export const TelepseTV = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <Image
        src="/music_logos/Telepse_digital_marketing_agency_lagos_nigeria_telepse_music_and management_logo 1.jpg"
        alt="Telepse_digital_marketing_agency_lagos_nigeria_telepse_music_and management_logo 1"
        width={500}
        height={500}
        className="size-10 border-4 border-black object-contain sm:size-40"
      />

      <Image
        src="/music_logos/Telepse_digital_marketing_agency_lagos_nigeria_telepse_music_and management_logo 2.jpg"
        alt="Telepse_digital_marketing_agency_lagos_nigeria_telepse_music_and management_logo 2.jpg"
        width={500}
        height={500}
        className="size-10 border-4 border-black object-contain sm:size-40"
      />
    </div>
  );
};
