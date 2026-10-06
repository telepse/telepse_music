import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function OriolaPage() {
  return (
    <div className="wrap">
      <div className="topbar">
        <div className="brand">2TTEE × TELEPSE MUSIC</div>
        <div className="private">Confidential preview • do not forward</div>
      </div>
      <section className="hero">
        <div>
          <div className="eyebrow">
            Private listening room • 6-track EP • 21 May 2027
          </div>
          <h1>ORI OLA</h1>
          <h2>Destiny, blessing, celebration and the Nigeria → UK chapter.</h2>
          <p>
            Five of six records are already recorded. This room is designed for
            selected investors, partners, mentors, labels and collaborators to
            hear the music before public release.
          </p>
          <div className="meta">
            <span className="pill">5 recorded</span>
            <span className="pill">1 forthcoming</span>
            <span className="pill">Afrobeats / Afro-fusion</span>
            <span className="pill">Master ownership retained</span>
          </div>
          <div className="recipient">
            Prepared for: <strong>[RECIPIENT NAME]</strong>
          </div>
        </div>
        <div className="cover">
          <img
            src="/assets/oriola-art.png"
            alt="ORI OLA artwork"
          />
        </div>
      </section>
      <div className="section-head">
        <h3>Private playlist</h3>
        <p>
          Recommended sequence: start with the project identity, move into the
          strongest crossover record, then hear the movement, celebration and
          performance sides.
        </p>
      </div>
      <section className="tracks">
        <article className="track">
          <div className="num">01</div>
          <div>
            <div className="sub">Title track • recorded</div>
            <h4>ORI OLA</h4>
            <div className="desc">
              The conceptual centre: destiny, blessing, prosperity and personal
              identity.
            </div>
          </div>
          <audio
            controls
            preload="metadata"
            src="/audio/01_ORI_OLA_preview.mp3"
          ></audio>
        </article>
        <article className="track">
          <div className="num">02</div>
          <div>
            <div className="sub">Romantic crossover • recorded</div>
            <h4>LOLOLO</h4>
            <div className="desc">
              A playful African love record: claim your person, appreciate them
              and say it while you can.
            </div>
          </div>
          <audio
            controls
            preload="metadata"
            src="/audio/02_LOLOLO_preview.mp3"
          ></audio>
        </article>
        <article className="track">
          <div className="num">03</div>
          <div>
            <div className="sub">Movement / short-form • recorded</div>
            <h4>BENDO</h4>
            <div className="desc">
              Compact, rhythmic and naturally suited to creator content, dance
              and replay.
            </div>
          </div>
          <audio
            controls
            preload="metadata"
            src="/audio/03_BENDO_preview.mp3"
          ></audio>
        </article>
        <article className="track">
          <div className="num">04</div>
          <div>
            <div className="sub">Evergreen celebration • recorded</div>
            <h4>HAPPY BIRTHDAY</h4>
            <div className="desc">
              A recurring-use celebration record for birthdays, parties, DJs and
              social content.
            </div>
          </div>
          <audio
            controls
            preload="metadata"
            src="/audio/04_HAPPY_BIRTHDAY_preview.mp3"
          ></audio>
        </article>
        <article className="track">
          <div className="num">05</div>
          <div>
            <div className="sub">Performance / groove • recorded</div>
            <h4>TINCO</h4>
            <div className="desc">
              Rhythm, attitude and live-performance energy that expands the
              project&apos;s sonic range.
            </div>
          </div>
          <audio
            controls
            preload="metadata"
            src="/audio/05_TINCO_preview.mp3"
          ></audio>
        </article>
        <article className="track coming">
          <div className="num">06</div>
          <div>
            <div className="sub">UK / diaspora chapter • forthcoming</div>
            <h4>THIS IS LONDON</h4>
            <div className="desc">
              Planned for recording in the UK in February 2027. The final
              chapter connecting Nigeria to the artist&apos;s current life in
              Britain.
            </div>
          </div>
          <div className="audio-placeholder">
            Audio will be added after final recording, mix, master and rights
            clearance.
          </div>
        </article>
      </section>
      <section className="grid2">
        <div className="card">
          <h4>What to listen for</h4>
          <ul>
            <li>
              Different commercial lanes rather than six versions of one song.
            </li>
            <li>
              Records that can support romance, celebration, movement,
              storytelling and diaspora positioning.
            </li>
            <li>
              A catalogue designed for visuals, creator activations and
              long-tail exploitation.
            </li>
          </ul>
        </div>
        <div className="card">
          <h4>Project status</h4>
          <ul>
            <li>Target release: 21 May 2027.</li>
            <li>Five tracks recorded; THIS IS LONDON forthcoming.</li>
            <li>
              Telepse Music Record Label Company — Nigeria Reg. No. 2290773.
            </li>
            <li>Distribution infrastructure active through DistroKid.</li>
          </ul>
        </div>
      </section>
      <div className="note">
        <strong>Confidentiality:</strong> These recordings are unreleased
        private previews supplied only for evaluation. Please do not forward,
        upload, post, reproduce, distribute or use any recording without written
        permission from 2TTEE / Telepse Music. Browser download controls are
        deterrents only and are not DRM.
      </div>
      <footer className="footer">
        <div>ORI OLA • Private Listening Room</div>
        <div>2TTEE / Telepse Music Record Label Company</div>
      </footer>
    </div>
  );
}
