import { Metadata } from "next";

// Local imports
import { OurTalent } from "@/components/music/our-talent";
import { About2ttee } from "@/components/music/about-2ttee";
import { MUSIC_ICONS, SOCIAL_ICONS } from "@/constants";
import { InstagramFeed } from "@/components/music/instagram-feed";
import { MusicBanner } from "@/components/music/music-banner";
import { TelepseTV } from "@/components/music/telepse-tv";
import { YoutubeChannel } from "@/components/music/youtube-channel";
import { MusicBreak } from "@/components/music/music-break";
// import { ScrollToSection } from "@/components/scroll-to-section";

export const metadata: Metadata = {
  title: "Music - Telepse",
};

export default function MusicPage() {
  return (
    <section className="section p-0">
      {/* <ScrollToSection /> */}
      <MusicBanner />

      <OurTalent />

      <About2ttee
        bio={[
          "Taiwo Olusola Oladeji Jamil (born May 21, 1993) better known by his stage name 2TTEE, is a Nigerian Afrobeats hiphop recording artiste and stage performer. The Ibadan city raised artiste is also an entrepreneur and founder of Tipmanna, a web platform for event fundraising based in the UK.",
          "His musical career began in 2010 with his debut single - Sexy Lady which received airplay in Ibadan City. He later moved to Lagos in 2011 to pursue his music career and education. The artiste holds a BSc. degree in Geography, University of Lagos, 2016, and an MSc.degree in Entrepreneurship, Aston Business School, United Kingdom, 2024.",
          "In 2012, he was among the 32 finalists of I’ve Got Talent, a talent hunt reality television show which was aired to millions nationwide and globally for a 7 Million naira winners’ prize through voting.",
          "2TTEE released a debut EP named IBADAN in 2018, featuring 5 afrobeats hiphop tracks. The album received local and global attention on Spotify and Youtube following a radio and TV tour with social media campaigns. He would later release 2 music videos from the album for the tracks Ibadan and Naughty. His first headline concert “2TTEE Live” was held virtually in Dec 2021.",
          "2TTEE promises a comeback into the global music scene in 2026. While scaling his startup Tipmanna in the UK, the artiste is poised to unleash projects he has been hibernating musically.",
        ]}
        musicPlatforms={MUSIC_ICONS}
        watchLive="https://www.youtube.com/embed/RX738gR2QsQ"
        bookingEmail="book2ttee@telepse.com"
        latestProject={`Ibadan Ep Album by 2ttee is the latest project by the music artist released 1st April, 2018. Listen on <a href="https://itunes.apple.com/us/album/ibadan-ep/1360885598?app=music&ign-mpt=uo%3D4" style="text-decoration:underline">Apple Music</a>. Listen on <a href="https://open.spotify.com/album/6aaWK9CAcw300SUfb9jrQe?fo=1" style="text-decoration:underline">Spotify</a>`}
        socialPlatforms={SOCIAL_ICONS}
      />

      <MusicBreak />

      <TelepseTV />

      <YoutubeChannel />

      <InstagramFeed />
    </section>
  );
}
