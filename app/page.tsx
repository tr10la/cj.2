import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can Joan Empordà — Casa Rural a Caques, Alt Empordà",
  description:
    "Casa de poble del segle XVII rehabilitada a Ordis. 4 habitacions, fins a 11 persones, terrassa i jardí. Reserva directa sense comissions.",
};

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />

      <div className="topbar">
        <div className="lang" role="group" aria-label="Idioma">
          <button data-lang="CA" className="active">
            CA
          </button>
          <button data-lang="ES">ES</button>
          <button data-lang="EN">EN</button>
          <button data-lang="FR">FR</button>
        </div>
      </div>

      <header className="header">
        <div className="left">
          <button className="menu-toggle" aria-label="Obrir menú" data-i18n="nav.menu">
            Menú
          </button>
          <nav className="nav">
            <a href="#inici" className="is-current" data-i18n="nav.inici">
              Inici
            </a>
            <a href="la-casa.html" data-i18n="nav.casa">
              La Casa
            </a>
            <a href="lentorn.html" data-i18n="nav.entorn">
              L&apos;entorn
            </a>
          </nav>
        </div>

        <a href="#inici" aria-label="Can Joan Empordà">
          <img src="img/logo.png" alt="Can Joan Empordà" className="logo" />
        </a>

        <div className="right">
          <nav className="nav">
            <a href="ubicacio.html" data-i18n="nav.ubicacio">
              Ubicació
            </a>
            <a href="contacte.html" data-i18n="nav.contacte">
              Contacte
            </a>
          </nav>
          <a href="reserva.html" className="book-link" data-i18n="book">
            Reservar
          </a>
        </div>
      </header>

      <div className="drawer" aria-hidden="true">
        <div className="drawer-top">
          <span className="label">Can Joan Empordà</span>
          <button className="drawer-close menu-toggle" aria-label="Tancar" data-i18n="nav.close">
            Tancar
          </button>
        </div>
        <nav>
          <a href="#inici" data-i18n="nav.inici">
            Inici
          </a>
          <a href="la-casa.html" data-i18n="nav.casa">
            La Casa
          </a>
          <a href="lentorn.html" data-i18n="nav.entorn">
            L&apos;entorn
          </a>
          <a href="ubicacio.html" data-i18n="nav.ubicacio">
            Ubicació
          </a>
          <a href="reserva.html" data-i18n="nav.reserva">
            Reserva
          </a>
          <a href="contacte.html" data-i18n="nav.contacte">
            Contacte
          </a>
        </nav>
      </div>

      <main id="inici">
        <section className="opening">
          <div className="opening-grid">
            <div className="opening-text">
              <span className="eyebrow" data-i18n="open.eyebrow">
                Casa rural · Ordis · Alt Empordà
              </span>
              <h1>
                <span data-i18n="open.title">Una casa de poble</span>
                <span className="accent" data-i18n="open.accent">
                  a l&apos;Alt Empordà.
                </span>
              </h1>
              <p className="lede" data-i18n="open.lede">
                Tres plantes, pedra original i onze places. Rehabilitada el 2021 conservant els elements originals de la casa.
              </p>
              <div className="opening-meta">
                <span>
                  <b>11</b> places
                </span>
                <span>
                  <b>3</b> plantes
                </span>
                <span>
                  <b>2021</b> rehabilitada
                </span>
              </div>
            </div>

            <div className="opening-image">
              <img
                src="img/portalada-2.jpg"
                alt="La gran portalada de pedra i fusta de Can Joan Empordà, al Carrer de la Mar d'Ordis"
                loading="eager"
                fetchPriority="high"
              />
              <span className="caption" data-i18n="open.cap">
                La portalada · Carrer de la Mar
              </span>
            </div>
          </div>
        </section>

        <section className="letter">
          <div />
          <div className="body">
            <h2 data-i18n="letter.h">Una casa de poble, recuperada amb cura.</h2>
            <p data-i18n="letter.p">
              Can Joan és una casa del segle XVII al cor d&apos;Ordis, rehabilitada el 2021 conservant la pedra, les bigues i els terres originals. Tres plantes, 3 habitacions dobles i 1 de 5 llits, i una terrassa. Ideal per a grups i famílies que volen explorar l&apos;Alt Empordà.
            </p>
          </div>
          <div />
        </section>

        <section className="essencial" id="essencial">
          <div className="ess-inner">
            <span className="eyebrow ess-eyebrow" data-i18n="ess.eyebrow">
              Essencial
            </span>
            <h2 className="ess-title" data-i18n="ess.h">
              Un espai únic.
            </h2>
            <hr className="ess-rule" />
            <div className="ess-cols">
              <div className="ess-col">
                <h3 className="ess-col-h" data-i18n="ess.col1.h">
                  Pedra i volta
                </h3>
                <p className="ess-col-p" data-i18n="ess.col1.p">
                  Murs, voltes catalanes i bigues originals del segle XVII, conservats tal com eren.
                </p>
              </div>
              <div className="ess-col">
                <h3 className="ess-col-h" data-i18n="ess.col2.h">
                  Tres plantes
                </h3>
                <p className="ess-col-p" data-i18n="ess.col2.p">
                  Cuina equipada, sala, 3 habitacions dobles i 1 habitació de 5 llits, i terrassa.
                </p>
              </div>
              <div className="ess-col">
                <h3 className="ess-col-h" data-i18n="ess.col3.h">
                  Onze places
                </h3>
                <p className="ess-col-p" data-i18n="ess.col3.p">
                  Per a grups i famílies. Una sala d&apos;estar i dues sales de jocs a la planta baixa.
                </p>
              </div>
              <div className="ess-col">
                <h3 className="ess-col-h" data-i18n="ess.col4.h">
                  Ben situat
                </h3>
                <p className="ess-col-p" data-i18n="ess.col4.p">
                  Entre la Costa Brava i els pobles medievals. 15 min de Figueres, 25 de la costa, 45 de Cadaqués.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="casa" id="la-casa">
          <div className="casa-head">
            <h2 data-i18n="casa.h">La casa</h2>
            <p className="lede" data-i18n="casa.lede">
              Tres plantes, pedra original, quatre habitacions i una terrassa. Onze places.
            </p>
          </div>

          <div className="rows">
            <div className="r">
              <figure>
                <img src="img/sala-n2.jpg" alt="Sofà de la sala d'estar de Can Joan Empordà davant el mur de pedra" loading="lazy" />
              </figure>
              <figure>
                <img src="img/bany2-n1.jpg" alt="Bany 2 de Can Joan Empordà amb doble lavabo sota arc de pedra" loading="lazy" />
              </figure>
            </div>
            <div className="r">
              <figure>
                <img src="img/hab1-n7.jpg" alt="Habitació 1 — aplic de lectura i lleixa de fusta" loading="lazy" />
              </figure>
              <figure>
                <img src="img/jocs-n1.jpg" alt="Sala de jocs de Can Joan Empordà sota volta de pedra, amb taula de ping-pong" loading="lazy" />
              </figure>
            </div>
            <div className="r">
              <figure>
                <img src="img/detall-n1.jpg" alt="Fornícula amb ceràmica i vidre a la sala de Can Joan Empordà" loading="lazy" />
              </figure>
              <figure>
                <img src="img/hab2-n5.jpg" alt="Habitació 2 sota la volta catalana original" loading="lazy" />
              </figure>
            </div>
          </div>

          <div className="rooms">
            <div>
              <h3 data-i18n="floor.distrib.h">Distribució</h3>
              <p data-i18n="floor.distrib.p">
                Tres plantes connectades per una escala interior. Cada planta té el seu propi espai i ambient.
              </p>
            </div>
            <div>
              <div className="floor">
                <span className="num" data-i18n="floor.baixa">
                  Planta baixa
                </span>
                <div>
                  <h4 data-i18n="floor.baixa.h">Entrada i dues sales de jocs.</h4>
                  <p data-i18n="floor.baixa.p">Dues sales de jocs: una amb billar i l&apos;altra amb ping-pong.</p>
                </div>
              </div>
              <div className="floor">
                <span className="num" data-i18n="floor.primera">
                  Planta primera
                </span>
                <div>
                  <h4 data-i18n="floor.primera.h">Cuina, sala i tres habitacions.</h4>
                  <p data-i18n="floor.primera.p">Cuina equipada amb taula gran. Tres habitacions dobles, dos banys —un en suite.</p>
                </div>
              </div>
              <div className="floor">
                <span className="num" data-i18n="floor.segona">
                  Planta segona
                </span>
                <div>
                  <h4 data-i18n="floor.segona.h">Habitació i terrassa.</h4>
                  <p data-i18n="floor.segona.p">
                    Habitació de cinc llits. La terrassa és una planta més amunt, accessible per unes escales addicionals.
                  </p>
                </div>
              </div>
              <div className="floor">
                <span className="num" data-i18n="floor.terrat">
                  Terrat
                </span>
                <div>
                  <h4 data-i18n="floor.terrat.h">Terrassa amb vistes al poble.</h4>
                  <p data-i18n="floor.terrat.p">Terrassa exterior amb barbacoa i zona de foc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ordis" id="ordis">
          <div className="ordis-grid">
            <div>
              <span className="eyebrow" data-i18n="ordis.eyebrow">
                El poble
              </span>
              <h2 data-i18n="ordis.h">Ordis, Alt Empordà.</h2>
              <p data-i18n="ordis.p1">
                Ordis és un poble tranquil de l&apos;Alt Empordà, a tocar de tot el que fa especial aquesta comarca. A 25 minuts de la Costa Brava, a 45 de Cadaqués, a 20 de Besalú, a 35 de Girona. Un bon punt de partida per explorar-ho tot sense pressa.
              </p>
              <a href="lentorn.html" className="btn-outline" data-i18n="ordis.btn">
                Veure l&apos;entorn →
              </a>
            </div>

            <div>
              <div className="photo">
                <img src="img/ordis.jpg" alt="Carrer d'Ordis, poble de l'Alt Empordà" loading="lazy" />
              </div>
              <span className="ordis-cap" data-i18n="ordis.cap">
                Ordis · un carrer del poble
              </span>
              <div className="ordis-extra">
                <img
                  src="img/portalada-4.jpg"
                  alt="Detall de la porta de fusta amb la placa de Can Joan Empordà, al Carrer de la Mar"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="entorn" id="entorn">
          <span className="eyebrow" data-i18n="entorn.eyebrow">
            L&apos;entorn
          </span>
          <h2 data-i18n="entorn.h">El que hi ha al voltant, segons el dia.</h2>

          <div className="moods">
            <div className="mood">
              <div className="mood-label" data-i18n="entorn.mar.label">
                Si voleu mar
              </div>
              <h3 data-i18n="entorn.mar.h">Els tres llocs on anem nosaltres</h3>
              <ul>
                <li>
                  <div>
                    <div>Cala Tavallera</div>
                  </div>
                  <span className="where">Cap de Creus</span>
                </li>
                <li>
                  <div>
                    <div>Sant Martí d&apos;Empúries</div>
                  </div>
                  <span className="where">L&apos;Escala</span>
                </li>
                <li>
                  <div>
                    <div>Cadaqués</div>
                  </div>
                  <span className="where">Cap de Creus</span>
                </li>
              </ul>
            </div>

            <div className="mood">
              <div className="mood-label" data-i18n="entorn.bici.label">
                Si voleu un dia de bici o caminant
              </div>
              <h3 data-i18n="entorn.bici.h">Pels camins de carro</h3>
              <ul>
                <li>
                  <div>
                    <div data-i18n="entorn.bici.1">Vies Verdes — tram d&apos;Olot</div>
                  </div>
                  <span className="where">Girona</span>
                </li>
                <li>
                  <div>
                    <div>Puig Neulós</div>
                  </div>
                  <span className="where">Albera</span>
                </li>
                <li>
                  <div>
                    <div data-i18n="entorn.bici.3">El camí de ronda de Llançà</div>
                  </div>
                  <span className="where">Cap de Creus</span>
                </li>
              </ul>
            </div>

            <div className="mood">
              <div className="mood-label" data-i18n="entorn.menjar.label">
                Si voleu menjar bé
              </div>
              <h3 data-i18n="entorn.menjar.h">On us enviaríem</h3>
              <ul>
                <li>
                  <div>
                    <div>La Tartana de Can Massanet</div>
                  </div>
                  <span className="where">Vilafant</span>
                </li>
                <li>
                  <div>
                    <div>Restaurant Can Mach</div>
                  </div>
                  <span className="where" data-i18n="entorn.menjar.2.where">
                    A tapis
                  </span>
                </li>
                <li>
                  <div>
                    <div>Boga Restaurant</div>
                  </div>
                  <span className="where">Figueres</span>
                </li>
              </ul>
            </div>

            <div className="mood">
              <div className="mood-label" data-i18n="entorn.plou.label">
                Si plou
              </div>
              <h3 data-i18n="entorn.plou.h">Coses per fer sense mullar-se</h3>
              <ul>
                <li>
                  <div>
                    <div data-i18n="entorn.plou.1">Museu Dalí — Figueres</div>
                  </div>
                  <span className="where">15 min</span>
                </li>
                <li>
                  <div>
                    <div data-i18n="entorn.plou.2">Windoor Empuriabrava</div>
                  </div>
                  <span className="where">25 min</span>
                </li>
                <li>
                  <div>
                    <div>Cellers d&apos;Espolla</div>
                  </div>
                  <span className="where">20 min</span>
                </li>
              </ul>
            </div>

            <div className="mood">
              <div className="mood-label" data-i18n="entorn.fam.label">
                Si veniu en família
              </div>
              <h3 data-i18n="entorn.fam.h">Coses que els nens han de veure</h3>
              <ul>
                <li>
                  <div>
                    <div>Aiguamolls de l&apos;Empordà</div>
                  </div>
                  <span className="where">15 MIN</span>
                </li>
                <li>
                  <div>
                    <div>Estany de Banyoles</div>
                  </div>
                  <span className="where">30 MIN</span>
                </li>
                <li>
                  <div>
                    <div data-i18n="entorn.fam.3">Ruïnes d&apos;Empúries</div>
                  </div>
                  <span className="where">10 MIN</span>
                </li>
              </ul>
            </div>

            <div className="mood">
              <div className="mood-label" data-i18n="entorn.res.label">
                Si voleu no fer res
              </div>
              <h3 data-i18n="entorn.res.h">Les nostres recomanacions</h3>
              <ul>
                <li>
                  <div>
                    <div data-i18n="entorn.res.1">Quedeu-vos a la terrassa</div>
                  </div>
                  <span className="where" data-i18n="entorn.res.where">
                    A Can Joan
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="opinions">
          <div>
            <h2 data-i18n="reviews.h">Què diuen els nostres hostes.</h2>
            <div>
              <blockquote>
                <div>★★★★★</div>
                <p>&quot;Casa con encanto en lugar muy bien ubicado para realizar visitas y excursiones a pueblecitos muy bonitos.&quot;</p>
                <cite>Anna E. · Abril 2026</cite>
              </blockquote>
              <blockquote>
                <div>★★★★★</div>
                <p>&quot;Casa molt confortable per grups grans. Les habitacions dobles còmodes, els banys nous. Ens va faltar temps.&quot;</p>
                <cite>Gemma P. · Novembre 2023</cite>
              </blockquote>
              <blockquote>
                <div>★★★★★</div>
                <p>&quot;Una casa molt ben decorada, acollidora i ben situada.&quot;</p>
                <cite>Família Dupond · Setembre 2024</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="loft-split">
          <div className="loft-split__text">
            <span className="eyebrow" data-i18n="loft.eyebrow">
              Can Joan Loft
            </span>
            <h2 data-i18n="loft.h">El germà petit.</h2>
            <p data-i18n="loft.p">
              Un loft de disseny al costat de Can Joan. El mateix caràcter, la mateixa pedra del segle XVII, l&apos;escala d&apos;un o dos.
            </p>
            <div className="loft-split__stats">
              <span>1 dormitori</span>
              <span>2–4 hostes</span>
              <span>Pedra del s. XVII</span>
              <span>Ordis</span>
            </div>
            <a href="https://www.canjoanloft.com" target="_blank" rel="noreferrer" className="loft-split__cta" data-i18n="loft.cta">
              Descobrir el Loft →
            </a>
          </div>
          <div className="loft-split__img">
            <img src="img/loft-arc.jpg" alt="Can Joan Loft" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="brand">
            <img src="img/logo.png" alt="Can Joan Empordà" />
            <span className="name">Can Joan Empordà</span>
            <p data-i18n="footer.tag">Una casa de poble al cor de l&apos;Alt Empordà. Onze places.</p>
          </div>

          <div>
            <h4 data-i18n="footer.visita">Visita</h4>
            <ul>
              <li>
                <a href="la-casa.html" data-i18n="nav.casa">
                  La Casa
                </a>
              </li>
              <li>
                <a href="lentorn.html" data-i18n="nav.entorn">
                  L&apos;Entorn
                </a>
              </li>
              <li>
                <a href="ubicacio.html" data-i18n="nav.ubicacio">
                  Ubicació
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 data-i18n="footer.estada">Estada</h4>
            <ul>
              <li>
                <a href="reserva.html" data-i18n="footer.tarifes">
                  Tarifes
                </a>
              </li>
              <li>
                <a href="reserva.html" data-i18n="footer.reservar">
                  Reservar
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/canjoanemporda" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" rel="noreferrer">
                  Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 data-i18n="footer.contacte.h">Contacte</h4>
            <ul>
              <li>Carrer de la Mar, 5</li>
              <li>17772 Ordis, Girona</li>
              <li>
                <a href="mailto:info@canjoanemporda.com">info@canjoanemporda.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <span>© 2026 Can Joan Empordà</span>
          <span className="credit-line">
            <span data-i18n="footer.credit">Dissenyat per</span>{" "}
            <a className="credit" href="https://triola.me" target="_blank" rel="noopener">
              Isaac Triola.
            </a>
          </span>
        </div>
      </footer>

      <a href="reserva.html" className="float-book" data-i18n="book">
        Reservar
      </a>
    </>
  );
}
