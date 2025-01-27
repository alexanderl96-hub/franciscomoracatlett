import React from "react";
import "./otherlabels.css";
import Other_1 from "../../../images/Otherlabels/ELECTRICWORLDS_DIGITAL.jpg";
import Other_2 from "../../../images/Otherlabels/OUTERZONE_final_poster.jpg";
import Other_3 from "../../../images/Otherlabels/AFRO.jpg";
import Other_4 from "../../../images/Otherlabels/afro-2.png";
import Other_5 from "../../../images/Otherlabels/afro-4.jpeg";
import Other_6 from "../../../images/Otherlabels/afro-3.jpeg";
import Other_7 from "../../../images/Otherlabels/ahmed.14983723_std.jpg";
import Other_8 from "../../../images/Otherlabels/FAROUT.14985702_std.png";
import Other_9 from "../../../images/Otherlabels/MORA.14985621_std.jpg";
import Other_10 from "../../../images/Otherlabels/mora_cd_2010.277185635_std.jpeg";
import Other_11 from "../../../images/Otherlabels/BLUE.14985918_std.jpg";
import Other_12 from "../../../images/Otherlabels/catlet_fran_riverdrum_101b.77115827_std.jpg";
import Other_13 from "../../../images/Otherlabels/catlet_fran_worldtrad_101b.84162924_std.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const otherlabels = () => {
  return (
    <div className="otherlabels-container">
      <div className="otherlabels-navbar">Other labels</div>

      <div className="otherlabels-main">
        <div className="otherlabels-square-info">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              height: "50px",
            }}
          >
            <p>Title: "Planet E"</p>
            {/* <p></p> */}
          </div>
          <img
            src={Other_1}
            alt="Example"
            className="otherlabels-albumImage-container"
          />
          <div className="otherlabel-innertext">
            <p>MUSIC NEWS</p>
            <p style={{ marginTop: "-13px", marginBottom: "30px" }}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <a
                className="otherslabels-links"
                href="https://www.billboard.com/music/music-news/francisco-mora-catlett-carl-craig-planet-e-detroit-sun-ra-miles-davis-herbie-hancock-1235002169/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.billboard.com/music/music-news/francisco-mora-catlett-carl-craig-planet-e-detroit-sun-ra-miles-davis-herbie-hancock
              </a>
            </p>
            <p>Francisco Mora Catlett</p>
            <p style={{ marginTop: "-13px", marginBottom: "30px" }}>
              Having worked with experimental jazz legends including Sun Ra and
              Miles Davis since the '60s, Mora-Catlett recently released his own
              jazz electronic album via Carl Craig's Planet E label.
            </p>
            <p>Find it on Bandcamp:</p>
            <p style={{ marginTop: "-13px", marginBottom: "30px" }}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <a
                className="otherslabels-links"
                href="https://planetecommunications.bandcamp.com/album/electric-worlds"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://planetecommunications.bandcamp.com/album/electric-worlds
              </a>
            </p>

            <p>Listen to it on Youtube:</p>
            <p style={{ marginTop: "-13px" }}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <a
                className="otherslabels-links"
                href="https://www.youtube.com/channel/UCnoS5WuoZDmGnxgcwuZjuDg"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/channel/UCnoS5WuoZDmGnxgcwuZjuDg
              </a>
            </p>
            <p style={{ marginTop: "-13px", marginBottom: "30px" }}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <a
                className="otherslabels-links"
                href="https://www.youtube.com/watch?v=pUL2XyGVG7I&list=OLAK5uy_lL9naeNxJgvmW1UpJTDkyfvI0fsXYS1gU"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/watch?v=pUL2XyGVG7I&list=OLAK5uy_lL9naeNxJgvmW1UpJTDkyfvI0fsXYS1gU
              </a>
            </p>

            <p>Francisco Mora Catlett ELECTRIC WORLDS release </p>
            <p style={{ marginTop: "-20px" }}>By Tomas Peña - Nov 20, 2021</p>

            <p style={{ marginTop: "-13px", marginBottom: "30px" }}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <a
                className="otherslabels-links"
                href="https://jazzdelapena.com/new-york-report/francisco-mora-catlett-releases-electric-worlds/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://jazzdelapena.com/new-york-report/francisco-mora-catlett-releases-electric-worlds
              </a>
            </p>

            <p>
              The multi-talented Afro-Latin American drummer, composer,
              bandleader, visionary Francisco Mora Catlett is no stranger to the
              art of reinvention. He’s ridden the spaceways with Sun Ra’s
              Arkestra (1973 to 1980), performed with Max Roach’s all-percussion
              ensemble, M’Boom, collaborated and world travel with Detroit
              techno producer, Carl Craig, toured with the Freedom Jazz Trio,
              and commandeered the groundbreaking group, AfroHORN. Recently,
              amid the pandemic, Francisco took another step in his musical
              evolution.{" "}
            </p>
          </div>
        </div>
        <div className="otherlabels-square-info">
          <img
            src={Other_2}
            alt="Example"
            style={{
              maxWidth: "600px",
              width: "100%",
              minWidth: "250px",
              height: "auto",
              border: "1px solid #000000",
              marginBottom: "15px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            // className="otherlabels-albumImage-container"
          />
          <div style={{ textAlign: "justify" }}>
            <p>OUTERZONE / Premier Cru, 2007</p>
            <p>
              Description: Featuring Marshall Allen on alto sax & flute, Craig
              Taborn on keyboards & bass keys, Carl Craig on synth & space
              programming, John Douglass & Dwight Adams on trumpets, Cassious
              Richmond on alto sax (1 track), Brian Hollis & Andrew Daniels on
              percussion and Francisco Mora Catlett on assorted percussion,
              arranging and composing. The wonderful thing about working here at
              DMG is when someone you've never met or heard of comes in and
              hands you their disc and it blows you (me) away. This is certainly
              the case here! Francisco Mora Catlett is a fine percussionist and
              composer who was a member of Max Roach's M'Boom and played with
              the Sun Ra Arkestra for more than a decade in the 70's and 80's.
            </p>{" "}
            <p>
              {" "}
              'OuterZone' opens with an impressive blast of synth, sax, trumpet
              and percussion called "Space Chord." Every other track is another
              short blast of a "Space Chord". "Saints of Congo Square" is
              dedicated to New Orleans' finest: Louis Armstrong, Buddy Bolden
              and Baby Dodds. It features some inspired alto sax and trumpets
              wailing together over an impressive Afro-Cuban percussion groove.
              Each "Space Chord" provides a short, uplifting percussive
              interlude before we sail into the next tune. "Voodoo" is for Miles
              Davis & Jimi Hendrix and again both trumpets (one muted) and alto
              sax play their righteous parts over another funky. Latiny groove.
              Considering I hadn't heard of either trumpet player before this,
              both are great and distinctly different in tone and approach. That
              muted trumpeter is somewhat Miles-like and sounds pretty amazing.
              One of the things about this disc that makes it special is that it
              is so well produced, everything seems to fit no matter how far out
              it gets. The spirit of Sun Ra is at the center without any of the
              totally-out horn blasting that tended to scare some folks away,
              although on a few of the "Space Chords" they do get close. Even
              the occasional drum machine beats never hold this disc back from
              being consistently engaging and infectious at times. Francisco's
              righteous percussion is at the center of most of these pieces and
              holds the thread together throughout. It is rare that music that
              makes one want to dance is also so spirited and challenging to
              listen to as well, but many of these pieces work well on both
              levels. 'OuterZone' is this week's great under-recognized gem.
              Check it out for yourself and see what I mean.
            </p>
            <p> - BLG﻿﻿ / Bruce Lee Gallanter, Downtown Music Gallery﻿﻿</p>
          </div>
        </div>
        <div className="otherlabels-square-info">
          <img
            src={Other_3}
            alt="Example"
            style={{
              maxWidth: "600px",
              width: "100%",
              minWidth: "250px",
              height: "auto",
              // border: "0.3px solid #000000",
              marginBottom: "15px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "3px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10%",
            }}
          >
            <img
              src={Other_4}
              alt="Example"
              style={{
                // maxWidth: "600px",
                // width: "100%",
                minWidth: "250px",
                height: "auto",
                // border: "0.3px solid #000000",
                marginBottom: "15px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "3px",
              }}
            />
            <img
              src={Other_5}
              alt="Example"
              style={{
                // maxWidth: "600px",
                // width: "100%",
                minWidth: "250px",
                height: "auto",
                // border: "0.3px solid #000000",
                marginBottom: "15px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "3px",
              }}
            />
          </div>
          <img
            src={Other_6}
            alt="Example"
            style={{
              maxWidth: "600px",
              width: "100%",
              minWidth: "250px",
              height: "auto",
              // border: "0.3px solid #000000",
              marginBottom: "15px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "3px",
            }}
          />
          <div style={{ textAlign: "justify" }}>
            <p>DIASPORA MEETS AFRO HORN ‘JAZZ:</p>
            <p>
              A MUSIC OF THE SPIRIT. OUT OF SISTAS’ PLACE’ CD (SELF-RELEASED)
              5/5
            </p>
            <p>19TH JUNE 2020 UKVIBE</p>
            <p>
              Brooklyn based bandleader and trumpeter Ahmed Abdullah has
              recently released his first album in 15 years. Abdullah’s band is
              Diaspora, an acronym for Dispersions of the Spirit of Ra. Abdullah
              was a long time member of his mentor Sun Ra’s Arkestra. On this
              recording, Diaspora joins forces with percussionist Francisco Mora
              Catlett’s Afro Horn Ensemble. The line up for the record is Ahmed
              Abdullah (trumpet, flugal-horn and vocals) Monique Ngozi Nri
              (vocals) Alex Harding (baritone sax) Don Chapman (tenor sax) Bob
              Stewart (tuba) Donald Smith (piano) Radu Ben Judah (bass)
              Francisco Mora Catlett, Ronnie Burrage and Roman Diaz
              (percussion). <br></br>
              The titular Sistas’ Place is a Brooklyn community coffee shop and
              music venue founded in 1995 by Viola Plummer. Abdullah is the
              musical director of the venue. Abdullah began to work with Sun Ra
              in 1975, he explained to The Wire magazine recently that as a
              young man he hoped to establish himself as a band leader and was
              concerned about what he might himself get from the relationship
              with Sun Ra, in these early days he combined work with the
              Arkestra with establishing himself as a band leader and producing
              a number of his own records. Abdullah described a vivid dream from
              this period in which he was told Sun Ra was his mentor and he
              should be back in the Arkestra on a full-time basis. This he did
              and continued to play and tour with the Arkestra following the
              death of Sun Ra first under the leadership of John Gilmore then
              Marshall Allen. <br></br>
              Abdullah gives an insight into his attitude towards life when he
              talks about the Sun Ra composition ‘Fate In A Pleasant Mood’
              ‘you’re just a puppet and a pawn in the hands of fate, but if you
              have faith then you can find fate in a pleasant mood and change
              your destiny.’ He describes changing his destiny by rejoining Sun
              Ra which eventually led to meeting his future wife, the writer and
              poet Monique Ngozi Nri while on tour in London. The centrepiece of
              this album is probably the 17-minute reworking of Abdullah’s song
              ‘Eternal Spiraling Spirit’ which appears originally on Life’s
              Force, his first release as leader in 1979. The spiritual vibe is
              evident from the outset as muted trumpet and bass intermingle
              before the trumpet soars and percussive waves combine with his
              wife Monique Ngozi Nri’s impassioned delivery of Louis Reyes
              River’s poem ‘A Place I’ve Never Been’ which is dedicated to the
              memory of Malcolm X. ‘Did you see the bullet cry?’ asks the
              narrator, a witness to the murder of Malcolm X before asking, ‘was
              you there? Did you go to hear a poem in his every word?’ The lines
              are emphasized by repetition giving a vivid almost cinematic
              visualisation of the scene rerun in what feels like slow motion
              from multiple viewpoints, including that of the bullet itself.
              Abdullah explained the original tune was dedicated to the idea of
              reincarnation and he and Rivera united this theme with the poem
              while working together at Sistas’ Place. There’s also a great
              version of Sun Ra’s ‘Love In Outer Space’ the original lyrics are
              sung in harmony by Ngozi Nri and Abdullah and expanded with more
              poetry of Rivera, ‘the womb of space unfolds in the uterus of
              silence’. There’s a retro feel to the music but at the same time a
              contemporary thread runs through with the new lines adding a mood
              of celestial sexual exploration. <br></br>
              The whole album has a narrative arc, a journey through memory via
              the Earthly horror of an assassin’s bullet through the spiritual
              optimism of reincarnation to the freedom of celestial love and the
              finality of ‘Terra Firma’ a brief poem by Monique Ngozi Nri
              towards the close of the album which concisely draws our attention
              to the contradictions and injustice of life on Terra Firma with
              lines like ‘Rooted like ancestors beside a sea of protest’ and
              ‘free and unfree, clear and unclear’. There’s plenty on this album
              that will be familiar to fans of Sun Ra, Abdullah is certainly
              succeeding in his mission to keep the music of his mentor alive
              but his own voice is powerful in the mix and I’m guessing his
              younger self might be pretty satisfied with the outcome.<br></br>
              James Read
            </p>
            <p>
              Tracklist <br></br>
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ transform: "rotate(45deg)", marginRight: "5px" }}
              />{" "}
              Accent <br></br>
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ transform: "rotate(45deg)", marginRight: "5px" }}
              />{" "}
              Eternal Spiraling Spirit <br></br>
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ transform: "rotate(45deg)", marginRight: "5px" }}
              />{" "}
              Discipline 27 <br></br>
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ transform: "rotate(45deg)", marginRight: "5px" }}
              />{" "}
              Love in Outer Space <br></br>
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ transform: "rotate(45deg)", marginRight: "5px" }}
              />{" "}
              Magwalandini <br></br>
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ transform: "rotate(45deg)", marginRight: "5px" }}
              />{" "}
              Lights on a Satellite <br></br>
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ transform: "rotate(45deg)", marginRight: "5px" }}
              />{" "}
              Terra Firma <br></br>
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ transform: "rotate(45deg)", marginRight: "5px" }}
              />{" "}
              Reminiscing
            </p>
          </div>
        </div>
        <div className="otherlabels-square-info">
          <img
            src={Other_7}
            alt="Example"
            style={{
              width: "100%",
              minWidth: "250px",
              height: "auto",
              marginBottom: "15px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "3px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Personnel <br></br>
            Ahmed Abdullah trumpet, flugelhorn, vocals <br></br>
            Francisco Mora-Catlett multi percussion <br></br>
            Monique Ngozi Nri poetry and vocals <br></br>
            Alex Harding baritone saxophone <br></br>
            Don Chapman tenor saxophone <br></br>
            Bob Stewart tuba <br></br>
            Donald Smith piano <br></br>
            Radu ben Judah bass <br></br>
            Ronnie Burrage multi percussion <br></br>
            Roman Diaz percussion
          </div>
          <img
            src={Other_8}
            alt="Example"
            style={{
              width: "100%",
              minWidth: "250px",
              height: "auto",
              marginBottom: "15px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "3px",
            }}
          />
          <img
            src={Other_9}
            alt="Example"
            style={{
              width: "100%",
              minWidth: "250px",
              height: "auto",
              marginBottom: "15px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "3px",
            }}
          />
          <img
            src={Other_10}
            alt="Example"
            style={{
              width: "100%",
              minWidth: "250px",
              height: "auto",
              marginBottom: "15px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "3px",
            }}
          />
          <img
            src={Other_11}
            alt="Example"
            style={{
              width: "100%",
              minWidth: "250px",
              height: "auto",
              marginBottom: "15px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "3px",
            }}
          />
          <div style={{ textAlign: "justify" }}>
            <p>
              Far Out Recordings is delighted to present Mora!, and for the
              first time ever on vinyl Mora! II. Mexican-American percussionist
              and former member of the Sun Ra Arkestra, Francisco Mora Catlett
              originally recorded and released his debut solo LP as a private
              press in 1987, but the sequel he recorded over the course of the
              next few years with an expanded Detroit jazz brass section was
              shelved for decades to follow. A pan-American melting pot of
              hypnotic afro-cuban rhythms, frenetic batucadas and fiery sambas,
              Mora I & II are holy grails of latin jazz, masterminded by an
              unsung hero of the genre. Born in Washington DC, 1947, Francisco
              Mora Jr is the eldest child of two highly prominent Mexican
              artists, Francisco Mora Sr and Elizabeth Catlett, to whom this
              project was dedicated. Being born into a mixed heritage bohemian
              family provided Mora Jr with what he called a “creative,
              progressive, and healthy arts environment”, building the
              foundations for a fascinating career journey ahead. Mora grew up
              in Mexico City where he began working as a session musician for
              Capitol Records in 1968, before moving to study at Berklee Music
              College in Boston, MA in 1970. Once he’d completed his studies in
              1973, he very briefly returned to Mexico City with the best
              intentions of cultivating an avant-garde movement in the city, but
              when the Sun Ra Arkestra came to perform, Mora ended up leaving
              with the band to tour the world for the next seven years, a decent
              innings within a group famous for its constantly evolving line up.
              <br></br>
              Settling in Detroit after his years with the Arkestra, Francisco
              set to work on his self-titled debut, gathering an ensemble of
              musicians that included keyboardist Kenny Cox, founder of the
              legendary Strata Records, esteemed bassist Rodney Whitaker of the
              Roy Hargrove Quintet and percussionists Jerome Le Duff, Alberto
              Nacif, and Emile Borde. The album openly embraces and unites the
              broad spectrum of improvisation, rhythm, and jazz that has thrived
              throughout the American continents for centuries. In Mora’s own
              words the album intended to “manifest the African heritage
              presence in the American continent.” Epitomising this outlook,
              album opener ‘Afra Jum’ deploys a melody based on Haitian, African
              and Native American motifs, which is expanded upon by the soulful
              excellence of the Detroit veterans Cox and Whitaker, amidst a
              backdrop of afro-cuban inspired percussion. <br></br>
              The sequel Mora II was recorded shortly after with an expanded
              line up that included trumpet legend Marcus Belgrave, famed for
              his work with Ray Charles, Charles Mingus, Hank Crawford, Eddie
              Russ and Wendell Harrison. Continuing the concept of the first
              album, the follow up moves deeper into South America with the
              samba jazz dance belter ‘Amazona’, led by the rich vocals of
              Francisco’s wife Teresa Mora. The ‘Afra Jum’ concept is further
              explored, with the original motifs beefed up by the additional
              horns, and interspersions of Sun Ra inspired rumbling free
              improvisations. This follow up album remained shelved until 2005,
              when Mora put it out as a now obscure CD titled River Drum, but
              only now has it been given the high quality vinyl treatment it so
              deserves, presented as the sequel to Mora! as originally intended.
              Through the 90s and into the the 21st century Mora would continue
              his Pan-American explorations, moving toward a more electronic
              afro-futurist direction as part of Detroit techno pioneer Carl
              Craig’s Innerzone Orchestra. Mora also worked with Carl Craig,
              moog synth wizard Craig Taborn, and his former Arkestra colleague,
              the legendary Marshall Allen, to form the Innerzone Orchestra
              spin-off Outerzone, released in 2007 on Premier Cru Records. Mora
              I & II will be out as two vinyl LPs, CD and digitally 26th March
              2021.
            </p>
            <p>
              Release date: 16th April 2021 | Also available on Bandcamp{" "}
              <br></br>
              Tracklist: <br></br>
              <p>
                MORA I <br></br>1 Prelude Welcome <br></br>2 Afra Jum <br></br>3
                Rumba Morena <br></br>4 Five A.M. <br></br>5 Samba De Amor{" "}
                <br></br>6 Cultural Warrior <br></br>7 Epilogue-Conga "Hasta La
                Vista"
              </p>
              <p>
                MORA II <br></br>8 Afra Jum Pt. 2 <br></br>9 Amazona Prelude
                "Dawn" 10 Amazona <br></br>
                11 Samba "Conga Do Amor" <br></br>
                12 El Moro <br></br>
                13 Old Man Joe <br></br>
                14 Por Que Paro <br></br>
                15 Afra Jum Pt. 3.{" "}
              </p>
            </p>
          </div>

          <div className="otherlabels-square-info">
            <div className="otherlabels-square-column-container">
              <div className="otherlabels-square-column-one">
                <img
                  src={Other_10}
                  alt="Example"
                  style={{
                    width: "100%",
                    minWidth: "250px",
                    height: "auto",
                    marginBottom: "15px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "3px",
                  }}
                />
                <div>
                  <p>Francisco Mora Catlett – Mora!</p>
                  <p style={{ marginTop: "-15px" }}>
                    Label: SHOUT! Productions – SHOUT-255
                  </p>
                  <p style={{ marginTop: "-15px" }}>
                    Series: Deep Jazz Reality
                  </p>
                  <p style={{ marginTop: "-15px" }}>
                    Format: CD, Album, Reissue, Remastered, Paper Sleeve
                  </p>
                  <p style={{ marginTop: "-15px" }}>Country: Japan</p>
                  <p style={{ marginTop: "-15px" }}>Released: 26 Sep 2012</p>
                </div>
                <img
                  src={Other_12}
                  alt="Example"
                  style={{
                    width: "100%",
                    minWidth: "250px",
                    height: "auto",
                    marginBottom: "15px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "3px",
                  }}
                />
                <div style={{ textAlign: "justify" }}>
                  <p>RIVER DRUM</p>
                  <p>Premier Cru, 2005</p>
                  <p>
                    Description: From 2005, this is an earlier gem from former
                    Sun Ra & M'Boom percussionist, Francisco Mora Catlett. It
                    features four different groups including a string quartet on
                    one track. The players include Marcus Blegrave & John
                    Douglass on trumpets, Alex Harding & Vincent Bowens on
                    saxes, Sherman Mitchell on trombone, Craig Taborn or Kenny
                    Cox on piano, Rodney Whittaker on bass, Emile Borde on steel
                    drums, and Alberto Nacif, Jerry LeDuff & Francisco Mora
                    Catlett on drums & percussion.<br></br>
                    'River Drum' is one of the best percussion centered discs
                    I've heard in a long while. Francisco wrote, arranged and
                    produced this wonderful disc. I find this music to by
                    joyous, jubilant and rhythmically seductive. The rich layer
                    of interlocking percussion pushes this music to one great
                    groove after another. I only know of a few of the musicians
                    on this disc, but everyone plays superbly throughout. It is
                    always great to hear local bari sax giant Alex Harding wail
                    and he gets a few chances to stretch out here as well. The
                    other (tenor) saxist here, Vincent Bowens also plays with
                    fire and that creative spirit. Special mention to bassist
                    Rodney Whitaker who plays some excellent acoustic bass
                    throughout, bubbling and burning when need be. Steel
                    drummer, Emile Borde, also sparkles all over the place, as
                    do both trumpeters, the legendary Marcus Belgrave and John
                    Douglass. <br></br>
                    Considering that this disc is some 75-minutes long, I must
                    admit that it is consistently spirited and creative. The
                    only Latin (oriented) jazz that has knocked me out in years
                    comes from Kip Hanrahan. It would seem the great Francisco
                    Mora Catlett has given Kip a run for his money.
                  </p>
                  <p>- BLG / Bruce Lee Gallanter, Downtown Music Gallery.</p>
                </div>
              </div>
              <div className="otherlabels-square-column-one">
                <img
                  src={Other_13}
                  alt="Example"
                  style={{
                    width: "100%",
                    minWidth: "250px",
                    height: "auto",
                    marginBottom: "15px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "3px",
                  }}
                />
                <div style={{ textAlign: "justify" }}>
                  <p>WORLD TRADE MUSIC</p>
                  <p>Community, 1999</p>
                  <p>
                    Description: This is an older studio project from 1999 which
                    features Francisco Mora Catlett on drums, percussion &
                    compositions, Craig Taborn & Kenny Cox on pianos, Marcus
                    Belgrave & Nik Pena on trumpets, Vincent Bowens, Alex
                    Harding & Cassius Richmond on saxes & flute, Sherman
                    Mitchell on trombone, Rodney Whittaker on bass and Andrew
                    Daniels, Jerome LeDuff & Alberto Nacif on percussion. Famed
                    Detroit producer Carl Craig has much respect for his former
                    homey, Mexican/American percussion hero Francisco Mora
                    Catlett. So much respect that he lets Francisco utilize his
                    studio when need be and Craig released this disc on his own
                    label, Community Projects. Sadly, this disc didn't have
                    great distribution or recognition when it first came out.
                    Things have got to change... <br></br>
                    The introduction is called "Welcome" and it consists of
                    jungle sounds and layers of Latin percussion. "Iron Master"
                    is a Yoruba traditional song and features two softly
                    swirling pianos with simmering percussion. You might recall
                    elder Blue Note legend, pianist Kenny Cox from two great
                    albums with the Contemporary Jazz Quintet in the late
                    1960's. Both pianists here have obvious respect for one
                    another play together superbly. Acoustic bassist Rodney
                    Whitaker also stands out providing ample support and taking
                    the occasional spirited bass solo. Four of these tracks are
                    traditional Yoruda songs and each one has a special groove
                    and/or vibe with enchanting percussion at the center of each
                    piece. <br></br>
                    Although Francisco is the main drummer throughout this disc,
                    the other percussionists are on just a couple of songs each.
                    It is Mr. Catlett's spirited drumming that is at the center
                    of each piece, shaping and directing the joyous currents the
                    run throughout this entire disc. There are number of
                    highlights here like the hypnotic mbira & tranquil trumpet
                    on "The Other Side of the Mask" as well as that most lyrical
                    sax & melody on "Cultural Warrior". There is a most
                    uplifting spirit that runs through this entire disc like a
                    lifeline to & from the source. It seems sad that it took ten
                    years for someone to notice how special and overlooked this
                    disc is. I guess it is never too late to give some credit
                    where credit is due. So here it is - rejoice!
                  </p>
                  <p> - Bruce Lee Gallanter, Downtown Music Gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default otherlabels;
