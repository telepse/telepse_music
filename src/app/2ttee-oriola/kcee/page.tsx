import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function KceePage() {
  return (
    <div className="wrap">
      <div className="topbar">
        <div className="brand">2TTEE × TELEPSE MUSIC</div>
        <div className="private">Private preview for Kcee • do not forward</div>
      </div>
      <section className="hero">
        <div>
          <div className="eyebrow">Private collaboration + project preview</div>
          <h1>LOLOLO</h1>
          <h2>
            The record I hear you opening — before the full ORI OLA project.
          </h2>
          <p>
            The proposed creative structure is a 12-bar Kcee opening verse,
            followed by the existing 2TTEE record. The fit is musical first:
            melody, charm, old-school Nigerian romantic energy and a genuine
            full-circle story.
          </p>
          <div className="meta">
            <span className="pill">Proposed Kcee feature</span>
            <span className="pill">12-bar opening</span>
            <span className="pill">ORI OLA • 21 May 2027</span>
          </div>
          <div className="recipient">
            Prepared privately for: <strong>Kcee</strong>
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
        <h3>Start here</h3>
        <p>LOLOLO first. Then hear the wider project context.</p>
      </div>
      <section className="tracks">
        <article className="track">
          <div className="num">01</div>
          <div>
            <div className="sub">Proposed collaboration</div>
            <h4>LOLOLO</h4>
            <div className="desc">
              “If you love somebody, claim them, appreciate them and tell them
              while you still can.”
            </div>
          </div>
          <audio
            controls
            preload="metadata"
            src="/audio/02_LOLOLO_preview.mp3"
          ></audio>
        </article>
        <article className="track">
          <div className="num">02</div>
          <div>
            <div className="sub">Project identity</div>
            <h4>ORI OLA</h4>
            <div className="desc">
              The title track: destiny, blessing and the personal meaning behind
              the EP.
            </div>
          </div>
          <audio
            controls
            preload="metadata"
            src="/audio/01_ORI_OLA_preview.mp3"
          ></audio>
        </article>
        <article className="track">
          <div className="num">03</div>
          <div>
            <div className="sub">Movement / short-form</div>
            <h4>BENDO</h4>
            <div className="desc">Compact, rhythmic and creator-friendly.</div>
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
            <div className="sub">Evergreen celebration</div>
            <h4>HAPPY BIRTHDAY</h4>
            <div className="desc">
              Celebration, parties and recurring social use.
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
            <div className="sub">Performance / groove</div>
            <h4>TINCO</h4>
            <div className="desc">Performance energy and movement.</div>
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
            <div className="sub">Forthcoming</div>
            <h4>THIS IS LONDON</h4>
            <div className="desc">
              The UK/diaspora chapter, planned for February 2027.
            </div>
          </div>
          <div className="audio-placeholder">Forthcoming.</div>
        </article>
      </section>
      <div className="note">
        <strong>Confidentiality:</strong> Unreleased private previews. Please do
        not forward, upload, reproduce, post or distribute without written
        permission from 2TTEE / Telepse Music.
      </div>
      <footer className="footer">
        <div>ORI OLA • Private Kcee Preview</div>
        <div>2TTEE / Telepse Music</div>
      </footer>
    </div>
  );
}
