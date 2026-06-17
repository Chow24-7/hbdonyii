import { useState, useEffect } from "react";

const balloons = [
  { emoji: "💕", label: "Kind", message: "Your kindness heals people without them even realising it", c1: "#FF4DB8", c2: "#E91E8C" },
  { emoji: "🧠", label: "Inquisitive", message: "Your brilliant mind sees what others miss — pure genius", c1: "#A855F7", c2: "#7C3AED" },
  { emoji: "👗", label: "Fashionista", message: "You make elegance look effortless, always and forever", c1: "#F472B6", c2: "#EC4899" },
  { emoji: "🤲", label: "Selfless", message: "You'd carry the world's weight before letting one person hurt", c1: "#C084FC", c2: "#9333EA" },
  { emoji: "✨", label: "God's Love", message: "You ARE what God's love looks like in human form", c1: "#E879F9", c2: "#D946EF" },
  { emoji: "🌟", label: "My Blessing", message: "Among my greatest blessings, you are counted more times than the stars", c1: "#FB7185", c2: "#F43F5E" },
];

const COLORS = ["#FF4DB8","#A855F7","#F472B6","#C084FC","#E879F9","#FB7185","#FF69B4"];

export default function OnyinyeBirthday() {
  const [popped, setPopped] = useState(new Set());
  const [letterOpen, setLetterOpen] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    setConfetti(Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      w: 6 + Math.random() * 10,
      h: 4 + Math.random() * 8,
      rot: Math.random() * 360,
    })));
    setHearts(Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 8,
      size: 14 + Math.random() * 22,
    })));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;600&display=swap');

        .ony-root {
          font-family: 'Montserrat', sans-serif;
          color: #F8BBD0;
          overflow-x: hidden;
          min-height: 100vh;
          background: linear-gradient(160deg, #0D001A 0%, #1E0030 30%, #2D0042 60%, #3A0025 100%);
        }

        .confetti-wrap { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 99; overflow: hidden; }
        .cp { position: absolute; top: -20px; border-radius: 2px; animation: cFall linear infinite; }
        @keyframes cFall {
          from { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          to { transform: translateY(110vh) rotate(900deg); opacity: 0.15; }
        }

        .hearts-wrap { position: fixed; bottom: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 4; overflow: hidden; }
        .fh { position: absolute; bottom: -60px; opacity: 0; animation: heartRise ease-in-out infinite; }
        @keyframes heartRise {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.5; }
          100% { transform: translateY(-115vh) scale(1.1); opacity: 0; }
        }

        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; padding: 40px 20px;
          background: radial-gradient(ellipse at center top, rgba(255,77,184,0.2) 0%, transparent 60%);
        }

        .crown { font-size: clamp(3rem, 8vw, 5.5rem); animation: crownBounce 2s ease-in-out infinite; margin-bottom: 16px; }
        @keyframes crownBounce {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-18px) rotate(5deg); }
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 12vw, 9rem);
          font-weight: 700;
          background: linear-gradient(135deg, #FF4DB8 0%, #E879F9 40%, #A855F7 70%, #FF4DB8 100%);
          background-size: 200%;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: shimmer 4s linear infinite;
          line-height: 1.05; letter-spacing: 2px;
        }
        @keyframes shimmer { 0%{background-position:0%} 100%{background-position:200%} }

        .hero-tagline {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.4rem, 4vw, 2.4rem);
          color: #F8BBD0; margin-top: 16px;
          animation: fadeUp 1.2s ease 0.4s both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .sparks { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 24px; }
        .spark { font-size: 1.6rem; display: inline-block; animation: twinkle 2.5s ease-in-out infinite; }
        @keyframes twinkle { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(1.5);opacity:0.4;} }

        .scroll-hint { margin-top: 40px; font-size: 0.82rem; color: rgba(248,187,208,0.45); letter-spacing: 2px; animation: pulseHint 2s ease-in-out infinite; }
        @keyframes pulseHint { 0%,100%{opacity:0.25;} 50%{opacity:0.8;} }

        .wrap { max-width: 1100px; margin: 0 auto; padding: 70px 24px; }

        .sec-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 5vw, 3rem);
          text-align: center; margin-bottom: 40px;
          background: linear-gradient(135deg, #FF4DB8, #A855F7);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .divider { text-align: center; padding: 20px; font-size: 1.4rem; letter-spacing: 12px; opacity: 0.35; }

        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
        .g-item {
          aspect-ratio: 1; border-radius: 20px; overflow: hidden;
          background: linear-gradient(135deg, rgba(168,85,247,0.25), rgba(255,77,184,0.25));
          border: 1.5px solid rgba(248,187,208,0.2);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .g-item:hover { transform: scale(1.04); box-shadow: 0 8px 32px rgba(255,77,184,0.35); }
        .g-item img { width: 100%; height: 100%; object-fit: cover; border-radius: 20px; }
        .g-ph { text-align: center; padding: 16px; }

        .add-note {
          margin-top: 16px; text-align: center;
          font-family: 'Dancing Script', cursive; font-size: 1rem;
          color: rgba(248,187,208,0.5);
          border: 1px dashed rgba(248,187,208,0.25); border-radius: 12px;
          padding: 10px 20px; display: inline-block; width: 100%;
        }

        .vid-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        .vid-card {
          border-radius: 20px; overflow: hidden;
          background: rgba(168,85,247,0.15);
          border: 1.5px solid rgba(248,187,208,0.2);
        }
        .vid-card video, .vid-card iframe { width: 100%; aspect-ratio: 16/9; display: block; }
        .vid-ph {
          aspect-ratio: 16/9; display: flex; flex-direction: column;
          align-items: center; justify-content: center; padding: 20px; text-align: center;
        }

        .balloons-wrap { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; padding: 10px 0 30px; }
        .b-wrap { display: flex; flex-direction: column; align-items: center; cursor: pointer; user-select: none; }
        .balloon {
          width: 75px; height: 90px;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.7rem; position: relative;
          box-shadow: inset -8px -12px 18px rgba(0,0,0,0.25);
          animation: bFloat 3.5s ease-in-out infinite;
          transition: transform 0.2s;
        }
        .balloon::after {
          content: ''; position: absolute; bottom: -22px; left: 50%;
          transform: translateX(-50%); width: 1px; height: 22px;
          background: rgba(255,255,255,0.4);
        }
        .b-wrap:hover .balloon { transform: scale(1.18) rotate(5deg); }
        @keyframes bFloat { 0%,100%{transform:translateY(0) rotate(-4deg);} 50%{transform:translateY(-18px) rotate(4deg);} }
        .b-label { margin-top: 28px; font-family: 'Dancing Script', cursive; font-size: 0.9rem; color: rgba(248,187,208,0.65); }
        .b-reveal {
          background: linear-gradient(135deg, rgba(255,77,184,0.18), rgba(168,85,247,0.18));
          border: 1px solid rgba(248,187,208,0.3); border-radius: 18px;
          padding: 16px 18px; max-width: 175px; text-align: center;
          font-family: 'Dancing Script', cursive; font-size: 1.05rem; color: #F8BBD0;
          animation: fadeUp 0.5s ease;
        }

        .stars-band {
          text-align: center; padding: 60px 20px;
          background: radial-gradient(ellipse at center, rgba(255,77,184,0.1) 0%, transparent 70%);
        }
        .stars-quote { font-family: 'Dancing Script', cursive; font-size: clamp(1.2rem, 3vw, 1.9rem); color: #F8BBD0; max-width: 580px; margin: 20px auto; line-height: 2; }
        .star-burst { font-size: 1.3rem; display: inline-block; animation: stwinkle ease-in-out infinite; }
        @keyframes stwinkle { 0%,100%{opacity:0.2;transform:scale(0.7);} 50%{opacity:1;transform:scale(1.3);} }

        .letter-wrap { max-width: 780px; margin: 0 auto; }
        .open-btn {
          display: block; margin: 0 auto 28px; padding: 16px 44px; border-radius: 50px;
          background: linear-gradient(135deg, #FF4DB8, #A855F7);
          border: none; color: #fff; font-family: 'Montserrat', sans-serif;
          font-size: 1.05rem; font-weight: 600; cursor: pointer;
          box-shadow: 0 4px 24px rgba(255,77,184,0.45);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .open-btn:hover { transform: translateY(-4px); box-shadow: 0 10px 36px rgba(255,77,184,0.65); }

        .letter-card {
          background: linear-gradient(155deg, #1E0030, #3A0055, #300025);
          border: 2px solid rgba(248,187,208,0.3); border-radius: 28px;
          padding: 52px 52px 44px;
          box-shadow: 0 24px 70px rgba(0,0,0,0.6), 0 0 60px rgba(255,77,184,0.1);
          animation: letterIn 0.9s ease; position: relative; overflow: hidden;
        }
        .letter-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #FF4DB8, #E879F9, #A855F7, #FF4DB8);
          background-size: 200%; animation: shimmer 4s linear infinite;
        }
        @keyframes letterIn { from{opacity:0;transform:translateY(32px) scale(0.97);} to{opacity:1;transform:translateY(0) scale(1);} }

        .l-deco { text-align: center; font-size: 1.8rem; letter-spacing: 10px; margin-bottom: 24px; }
        .l-greeting {
          font-family: 'Playfair Display', serif; font-style: italic;
          font-size: clamp(1.2rem, 3vw, 1.85rem);
          background: linear-gradient(135deg, #FF4DB8, #E879F9);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          display: block; margin-bottom: 28px;
        }
        .l-body { font-family: 'Dancing Script', cursive; font-size: clamp(1.1rem, 2.2vw, 1.3rem); line-height: 2.1; color: #F8BBD0; }
        .l-para { margin-bottom: 20px; }
        .l-amen { color: #E879F9; font-weight: 700; font-size: 1.45rem; display: block; margin-top: 16px; }
        .l-signoff { margin-top: 36px; font-family: 'Dancing Script', cursive; font-size: 1.5rem; color: #E879F9; line-height: 2.2; }
        .l-chioma { font-size: 2.3rem; color: #FF4DB8; display: block; }

        footer { text-align: center; padding: 60px 24px; background: linear-gradient(0deg, rgba(0,0,0,0.5), transparent); }

        @media (max-width: 600px) {
          .letter-card { padding: 28px 20px 24px; }
          .balloon { width: 60px; height: 72px; }
          .balloons-wrap { gap: 14px; }
        }
      `}</style>

      <div className="ony-root">

        {/* ── CONFETTI ── */}
        <div className="confetti-wrap" aria-hidden="true">
          {confetti.map(p => (
            <div key={p.id} className="cp" style={{
              left: `${p.left}%`, width: p.w, height: p.h,
              backgroundColor: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              transform: `rotate(${p.rot}deg)`,
            }} />
          ))}
        </div>

        {/* ── FLOATING HEARTS ── */}
        <div className="hearts-wrap" aria-hidden="true">
          {hearts.map(h => (
            <div key={h.id} className="fh" style={{
              left: `${h.left}%`, fontSize: h.size,
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
            }}>💕</div>
          ))}
        </div>

        {/* ── HERO ── */}
        <section className="hero">
          <div className="crown">👑</div>
          <h1 className="hero-name">Onyinye</h1>
          <p className="hero-tagline">Happy Birthday, My Dearest 🎂</p>
          <div className="sparks">
            {["✨","💖","🌸","💜","🌟","🎀","💕","⭐","🌺","💐"].map((s, i) => (
              <span key={i} className="spark" style={{ animationDelay: `${i * 0.25}s` }}>{s}</span>
            ))}
          </div>
          <p className="scroll-hint">↓ SCROLL TO CELEBRATE ↓</p>
        </section>

        {/* ── PHOTO GALLERY ── */}
        <div className="wrap">
          <h2 className="sec-title">Her Beautiful World 📸</h2>
          <div className="gallery-grid">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="g-item">
                {/*
                  ✏️ TO ADD PHOTOS: Replace the div below with:
                  <img src="https://your-image-url.jpg" alt="Onyinye" />
                  or upload photos to a service like Google Drive / Cloudinary and use the link.
                */}
                <div className="g-ph">
                  <div style={{ fontSize: "2.2rem", marginBottom: 8 }}>🌸</div>
                  <p style={{ fontSize: "0.82rem", color: "rgba(248,187,208,0.65)", fontFamily: "'Dancing Script', cursive" }}>Photo {i}</p>
                  <p style={{ fontSize: "0.7rem", color: "rgba(248,187,208,0.4)", marginTop: 4 }}>Add Onyinye's photo here</p>
                </div>
              </div>
            ))}
          </div>
          <p className="add-note">📷 Replace the 6 placeholders above with Onyinye's actual photos</p>
        </div>

        <div className="divider">✦ ✦ ✦</div>

        {/* ── VIDEOS ── */}
        <div className="wrap">
          <h2 className="sec-title">Moments in Motion 🎥</h2>
          <div className="vid-grid">
            {[1,2,3].map(i => (
              <div key={i} className="vid-card">
                {/*
                  ✏️ TO ADD VIDEOS, replace this div with one of:
                  — Local/hosted file:   <video src="https://your-video.mp4" controls />
                  — YouTube embed:       <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowFullScreen />
                  — Google Drive:        <iframe src="https://drive.google.com/file/d/FILE_ID/preview" allowFullScreen />
                */}
                <div className="vid-ph">
                  <div style={{ fontSize: "2.5rem", marginBottom: 10 }}>🎬</div>
                  <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.1rem", color: "#F8BBD0" }}>Video {i}</p>
                  <p style={{ fontSize: "0.76rem", color: "rgba(248,187,208,0.45)", marginTop: 6 }}>Replace with your video link</p>
                </div>
              </div>
            ))}
          </div>
          <p className="add-note">🎬 Replace the 3 placeholders above with Onyinye's actual videos</p>
        </div>

        <div className="divider">💕 💜 💕</div>

        {/* ── BALLOONS ── */}
        <div className="wrap">
          <h2 className="sec-title">Pop a Balloon 🎈</h2>
          <p style={{ textAlign: "center", fontFamily: "'Dancing Script', cursive", fontSize: "1.1rem", color: "rgba(248,187,208,0.65)", marginBottom: 36 }}>
            Each balloon holds something true about Onyinye — tap to reveal 💕
          </p>
          <div className="balloons-wrap">
            {balloons.map((b, i) => (
              <div key={i} className="b-wrap" onClick={() => setPopped(prev => new Set([...prev, i]))}>
                {!popped.has(i) ? (
                  <>
                    <div className="balloon" style={{
                      background: `linear-gradient(160deg, ${b.c1}, ${b.c2})`,
                      animationDelay: `${i * 0.45}s`,
                    }}>{b.emoji}</div>
                    <span className="b-label">{b.label}</span>
                  </>
                ) : (
                  <div className="b-reveal">
                    <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>{b.emoji}</div>
                    {b.message}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── STARS ── */}
        <div className="stars-band">
          <div style={{ fontSize: "3.5rem" }}>🌟</div>
          <p className="stars-quote">
            "When I count my blessings, you are counted more than a million times — just like the stars in the sky."
          </p>
          <div style={{ marginTop: 20, lineHeight: 2 }}>
            {Array.from({ length: 35 }, (_, i) => (
              <span key={i} className="star-burst" style={{ animationDelay: `${i * 0.12}s` }}>⭐</span>
            ))}
          </div>
        </div>

        {/* ── LETTER ── */}
        <div className="wrap">
          <h2 className="sec-title">A Letter From the Heart 💌</h2>
          <div className="letter-wrap">
            {!letterOpen ? (
              <button className="open-btn" onClick={() => setLetterOpen(true)}>
                💌 Open Chioma's Letter to Onyinye
              </button>
            ) : (
              <div className="letter-card">
                <div className="l-deco">💕 ✨ 💜 ✨ 💕</div>
                <span className="l-greeting">HAPPY BIRTHDAY TO MY DEAREST ONYINYE,</span>
                <div className="l-body">
                  <p className="l-para">There's no way I'd start all these without thanking GOD for the opportunity to experience true love through someone with a beautiful heart like you. My heart is very full as I write this because you're the true definition of genuine love — ready to give all without holding back.</p>
                  <p className="l-para">I'm truly grateful for the chance to walk through this life with you. When I say beautiful, I mean inside and out, through and through. Your heart is kind, your heart is beautiful, and your thoughts are intelligent.</p>
                  <p className="l-para">Even though you are my younger sister, I really look up to you. I love and celebrate you on this special day of yours. It's a great privilege to celebrate someone like you on your own special day.</p>
                  <p className="l-para">You're the kind of person everyone wants around, even those who don't deserve it. You have a big heart — the kind the Bible describes when defining love.</p>
                  <p className="l-para">When I count my blessings, you're counted more than a million times — just like the stars in the sky. I'm beyond grateful for the gift of you.</p>
                  <p className="l-para">I'm really proud of how smart you are and how far you've come. I pray you continue to grow stronger in health. May you live long and strong, with absolutely nothing wrong.</p>
                  <span className="l-amen">Amen. 🙏</span>
                </div>
                <div className="l-signoff">
                  I LOVE YOU SO MUCH,<br />MORE THAN WORDS CAN EVER DESCRIBE. 💕
                  <br /><br />
                  With all the love in my heart,
                  <span className="l-chioma">Chioma 🌸</span>
                </div>
                <div className="l-deco" style={{ marginTop: 32 }}>💕 ✨ 💜 ✨ 💕</div>
              </div>
            )}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer>
          <div style={{ fontSize: "3.5rem", marginBottom: 14 }}>🎂</div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.3rem,3vw,2rem)", color: "#F8BBD0" }}>
            Happy Birthday, Onyinye
          </p>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.15rem", color: "rgba(248,187,208,0.55)", marginTop: 10 }}>
            Made with every drop of love, by Chioma 💕
          </p>
          <div style={{ marginTop: 24, fontSize: "1.6rem", letterSpacing: 10 }}>💕 💜 💕 💜 💕</div>
        </footer>

      </div>
    </>
  );
}
