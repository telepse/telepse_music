"use client";

import { useState } from "react";
import Image from "next/image";

// Third-party imports
import { ChevronDown } from "lucide-react";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";
import { PlaylistEmbed } from "./playlist-embed";
import { SvgPattern } from "../svg-pattern";
import { TelepsePlaylist } from "./telepse-playlist";

interface About2tteeProps {
  bio: string[];
  musicPlatforms: { platform: string; url: string; logo: string }[];
  watchLive: string;
  bookingEmail: string;
  latestProject: string;
  socialPlatforms: { platform: string; url: string; logo: string }[];
}

export const About2ttee = ({
  bio,
  musicPlatforms,
  watchLive,
  bookingEmail,
  latestProject,
  socialPlatforms,
}: About2tteeProps) => {
  const [selected, setSelected] = useState<
    | "bio"
    | "listen"
    | "watchLive"
    | "bookingEmail"
    | "latestProject"
    | "playlistUrl"
    | "youtubeChannel"
    | "social"
  >("youtubeChannel");

  const tabs = [
    { key: "bio", label: "Bio" },
    { key: "youtubeChannel", label: "Youtube" },
    { key: "listen", label: "Listen" },
    { key: "watchLive", label: "Live" },
    { key: "latestProject", label: "Latest" },
    { key: "playlistUrl", label: "Playlist" },
    { key: "bookingEmail", label: "Bookings" },
    { key: "social", label: "Social" },
  ] as const;

  return (
    <section className="bg-brand-yellow relative">
      <SvgPattern fill="#FFF" />

      <div className="section wrapper w-full pt-16 pb-16">
        <Title
          size="lg"
          weight="normal"
        >
          About 2ttee
        </Title>

        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          <div className="col-span-full flex flex-col gap-6 md:col-span-4 md:flex-row">
            <Image
              src="/music_images/Telepse_digital_marketing_agency_lagos_nigeria_telepse_music_talent_2tteemusic_image2.jpg"
              alt="Telepse_digital_marketing_agency_lagos_nigeria_telepse_music_talent_2tteemusic_image2"
              width={500}
              height={500}
              className="w-[270px] rounded-2xl object-cover md:h-[500px] md:w-52"
            />

            {/* Sidebar Tabs */}
            <div className="flex flex-col gap-4 sm:flex-1">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setSelected(tab.key)}
                  className={`flex cursor-pointer justify-between py-2 text-lg font-semibold transition ${selected === tab.key ? "border-b-2 border-black" : "border-b-2 border-white"}`}
                >
                  {tab.label} <ChevronDown />
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="col-span-full rounded-2xl bg-white p-4 sm:p-6 md:col-span-8">
            {/* 1. Bio */}
            {selected === "bio" && (
              <div className="space-y-2">
                {bio.map((paragraph, index) => (
                  <Paragraph
                    key={index}
                    size="lg"
                  >
                    {paragraph}
                  </Paragraph>
                ))}
              </div>
            )}

            {selected === "youtubeChannel" && <TelepsePlaylist />}

            {/* 2. Listen */}
            {selected === "listen" && (
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                {musicPlatforms.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="flex flex-1 transform flex-col items-center justify-center gap-2 rounded-2xl transition duration-300 hover:scale-110"
                  >
                    <Image
                      src={item.logo}
                      alt={item.platform}
                      width={100}
                      height={100}
                      className="size-16 object-cover"
                    />
                    <Paragraph
                      align="center"
                      size="lg"
                    >
                      {item.platform}
                    </Paragraph>
                  </a>
                ))}
              </div>
            )}

            {/* 3. Watch live performance */}
            {selected === "watchLive" && (
              <iframe
                className="h-[400px] w-full rounded-2xl"
                src={watchLive}
                title="2ttee live performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}

            {/* 4. Bookings */}
            {selected === "bookingEmail" && (
              <div className="flex h-96 flex-col items-center justify-center gap-2 rounded-2xl bg-white p-6">
                <Image
                  src="/music_icons/email.png"
                  alt="Email"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <Paragraph size="xl">
                  <a href={`mailto:${bookingEmail}`}>{bookingEmail}</a>
                </Paragraph>
              </div>
            )}

            {/* 5. Latest project */}
            {selected === "latestProject" && (
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/music_icons/Album-Pre-Order_-Feb.-1-March-31.png"
                  alt="Album Project"
                  width={500}
                  height={500}
                  className="h-[400px] w-full rounded-2xl object-cover"
                />
                <p
                  className="text-center text-lg leading-loose sm:text-xl"
                  dangerouslySetInnerHTML={{ __html: latestProject }}
                />
              </div>
            )}

            {/* 6. Playlist */}
            {selected === "playlistUrl" && <PlaylistEmbed />}

            {/* 7. Social */}
            {selected === "social" && (
              <div className="flex h-full flex-wrap items-center justify-center gap-6 sm:gap-12">
                {/* Instagram */}
                <a
                  href="https://instagram.com/2tteemusic"
                  className="flex transform flex-col items-center justify-center gap-2 rounded-2xl transition duration-300 hover:scale-110"
                >
                  <Image
                    src="/offer_icons/Telepse_digital_marketing_agency_lagos_nigeria_instagram.png"
                    alt="Instagram"
                    width={100}
                    height={100}
                    className="size-10 object-cover sm:size-16"
                  />
                  <Paragraph
                    align="center"
                    size="lg"
                  >
                    Instagram
                  </Paragraph>
                </a>

                {/* X */}
                <a
                  href="https://x.com/2tteemusic"
                  className="flex transform flex-col items-center justify-center gap-2 rounded-2xl transition duration-300 hover:scale-110"
                >
                  <Image
                    src="/offer_icons/Telepse_digital_marketing_agency_lagos_nigeria_x.png"
                    alt="X"
                    width={100}
                    height={100}
                    className="size-8 object-cover sm:size-14"
                  />
                  <Paragraph
                    align="center"
                    size="lg"
                  >
                    X
                  </Paragraph>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/2tteemusic"
                  className="flex transform flex-col items-center justify-center gap-2 rounded-2xl transition duration-300 hover:scale-110"
                >
                  <Image
                    src="/offer_icons/Telepse_digital_marketing_agency_lagos_nigeria_facebook.png"
                    alt="X"
                    width={100}
                    height={100}
                    className="size-10 object-cover sm:size-16"
                  />
                  <Paragraph
                    align="center"
                    size="lg"
                  >
                    Facebook
                  </Paragraph>
                </a>

                {/* Tiktok */}
                <a
                  href="https://tiktok.com/2ttee"
                  className="flex transform flex-col items-center justify-center gap-2 rounded-2xl transition duration-300 hover:scale-110"
                >
                  <Image
                    src="/offer_icons/Telepse_digital_marketing_agency_lagos_nigeria_tiktok.png"
                    alt="X"
                    width={100}
                    height={100}
                    className="size-10 object-cover sm:size-16"
                  />
                  <Paragraph
                    align="center"
                    size="lg"
                  >
                    Tiktok
                  </Paragraph>
                </a>

                {/* {socialPlatforms.map((item, index) => (
                  <a
                    href={item.url}
                    key={index}
                    className="flex transform flex-col items-center justify-center gap-2 rounded-2xl transition duration-300 hover:scale-110"
                  >
                    <Image
                      src={item.logo}
                      alt={item.platform}
                      width={100}
                      height={100}
                      className="size-16 object-cover"
                    />
                    <Paragraph
                      align="center"
                      size="lg"
                    >
                      {item.platform}
                    </Paragraph>
                  </a>
                ))} */}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full -rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </section>
  );
};
