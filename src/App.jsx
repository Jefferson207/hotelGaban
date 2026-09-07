import { useEffect, useState } from "react";
import { Bath, BedDouble, CalendarDays, ChevronLeft, ChevronRight, Droplets, Menu, Monitor, Wifi, X } from "lucide-react";
import {
  gallery,
  galleryAlt,
  heroSlides,
  hotel,
  rooms,
} from "./data/hotelData";
import hotelLogo from "./assets/logo/hotel.png";

const links = [
  ["Inicio", "inicio"],
  ["Nosotros", "nosotros"],
  ["Habitaciones", "habitaciones"],
  ["Experiencias", "experiencias"],
  ["Ubicación", "ubicacion"],
];

function BookingModal({ room, onClose }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2 huéspedes",
    room: rooms[0].name,
  });
  useEffect(() => {
    if (room) {
      setSent(false);
      setForm({
        name: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "2 huéspedes",
        room,
      });
    }
  }, [room]);
  if (!room) return null;
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <section className="booking-modal">
        {sent ? (
          <div className="success">
            <span>✓</span>
            <h2>Solicitud enviada</h2>
            <p>
              Gracias, {form.name}. Un asesor se comunicará contigo para validar
              la disponibilidad.
            </p>
            <button onClick={onClose}>Entendido</button>
          </div>
        ) : (
          <>
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <X size={22} />
            </button>
            <p className="kicker">RESERVA TU ESTADÍA</p>
            <h2>Planifica tu descanso</h2>
            <p className="modal-copy">
              Completa los datos para consultar disponibilidad.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label>
                Nombre completo
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={change}
                  placeholder="Tu nombre"
                />
              </label>
              <label>
                Teléfono / WhatsApp
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  placeholder="Tu número"
                />
              </label>
              <div className="form-grid">
                <label>
                  Ingreso
                  <input
                    required
                    type="date"
                    name="checkIn"
                    value={form.checkIn}
                    onChange={change}
                  />
                </label>
                <label>
                  Salida
                  <input
                    required
                    type="date"
                    name="checkOut"
                    min={form.checkIn}
                    value={form.checkOut}
                    onChange={change}
                  />
                </label>
              </div>
              <div className="form-grid">
                <label>
                  Huéspedes
                  <select name="guests" value={form.guests} onChange={change}>
                    {[
                      "1 huésped",
                      "2 huéspedes",
                      "3 huéspedes",
                      "4 huéspedes",
                      "5+ huéspedes",
                    ].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Habitación
                  <select name="room" value={form.room} onChange={change}>
                    {rooms.map((item) => (
                      <option key={item.name}>{item.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button className="primary wide" type="submit">
                Enviar solicitud
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
function RoomCard({ room, onBook }) {
  const [image, setImage] = useState(0);
  const images = room.images || [room.image];
  const next = (direction) =>
    setImage(
      (current) => (current + direction + images.length) % images.length,
    );
  return (
    <article className="room-card">
      <div className="room-image">
        <img
          src={images[image]}
          alt={`${room.name}, imagen ${image + 1}`}
          loading="lazy"
        />
        {images.length > 1 && (
          <>
            <button
              className="arrow left"
              onClick={() => next(-1)}
              aria-label="Imagen anterior"
            >
              <ChevronLeft />
            </button>
            <button
              className="arrow right"
              onClick={() => next(1)}
              aria-label="Imagen siguiente"
            >
              <ChevronRight />
            </button>
            <div className="dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImage(index)}
                  aria-label={`Imagen ${index + 1}`}
                  className={image === index ? "active" : ""}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="room-body">
        <div className="room-title">
          <h3>{room.name}</h3>
          <span>
            Desde <b>{room.price}</b>
            <small>/ noche</small>
          </span>
        </div>
        <p>{room.description}</p>
        <ul>
          {room.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="room-actions">
        <button className="text-button" onClick={() => onBook(room.name)}>
          Reservar →
        </button>
          <a className="room-view" href={`/habitaciones/${room.slug}`}>
            Ver habitación
          </a>
        </div>
      </div>
    </article>
  );
}

function featureIcon(feature) {
  const value = feature.toLowerCase();
  if (value.includes("cama")) return BedDouble;
  if (value.includes("baño")) return Bath;
  if (value.includes("wifi")) return Wifi;
  if (value.includes("agua")) return Droplets;
  return Monitor;
}

function RoomDetail({ room, onBook }) {
  const images = room.images || [room.image];
  const [activeImage, setActiveImage] = useState(0);
  const changeImage = (direction) => setActiveImage((current) => (current + direction + images.length) % images.length);

  return (
    <main className="room-detail-page">
      <div className="room-detail-shell">
        <nav className="breadcrumb" aria-label="Navegación">
          <a href="/">Inicio</a><span>›</span><a href="/#habitaciones">Habitaciones</a><span>›</span><strong>{room.name}</strong>
        </nav>
        <div className="room-detail-grid">
          <section className="detail-gallery" aria-label={`Galería de ${room.name}`}>
            <div className="detail-main-image">
              <img src={images[activeImage]} alt={`${room.name}, imagen ${activeImage + 1}`} />
              {images.length > 1 && <>
                <button className="detail-arrow detail-arrow-left" onClick={() => changeImage(-1)} aria-label="Imagen anterior"><ChevronLeft /></button>
                <button className="detail-arrow detail-arrow-right" onClick={() => changeImage(1)} aria-label="Imagen siguiente"><ChevronRight /></button>
              </>}
              <span className="image-counter">{activeImage + 1} / {images.length}</span>
            </div>
            {images.length > 1 && <div className="detail-thumbnails">
              {images.map((image, index) => <button key={image} className={index === activeImage ? "active" : ""} onClick={() => setActiveImage(index)} aria-label={`Ver imagen ${index + 1}`}><img src={image} alt="" /></button>)}
            </div>}
          </section>
          <section className="detail-info">
            <p className="kicker">HABITACIÓN</p>
            <h1>{room.name}</h1>
            <p className="detail-description">{room.description}</p>
            <div className="detail-features">
              {room.features.map((feature) => {
                const Icon = featureIcon(feature);
                return <div key={feature}><Icon size={24} strokeWidth={1.8} /><span>{feature}</span></div>;
              })}
            </div>
          </section>
          <aside className="detail-booking">
            <span>Desde</span>
            <strong>{room.price}</strong>
            <small>/ noche</small>
            <button className="detail-reserve" onClick={() => onBook(room.name)}><CalendarDays size={18} /> Reservar ahora</button>
            <button className="detail-consult" onClick={() => onBook(room.name)}>Consultar disponibilidad</button>
          </aside>
        </div>
      </div>
    </main>
  );
}
function AboutSection({ standalone = false }) {
  return (
    <section id="nosotros" className={`section about${standalone ? " about-standalone" : ""}`}>
      <div className="about-intro">
        <p className="kicker">NOSOTROS</p>
        <h2>Hospitalidad que se siente como hogar</h2>
        <p>En Hotel Plaza San Gaban recibimos a cada viajero con calidez, tranquilidad y el encanto natural de nuestra tierra.</p>
      </div>
      {standalone && <div className="about-visual"><img src={heroSlides[1]} alt="Naturaleza de San Gabán" /><p>San Gabán, Puno · Perú</p></div>}
      <div className="about-cards">
        <article><span>01</span><h3>Quiénes somos</h3><p>Somos un hotel local comprometido con brindarte una estadía cómoda, cercana y memorable en San Gabán.</p></article>
        <article><span>02</span><h3>Misión</h3><p>Ofrecer un descanso confiable y acogedor, con atención amable y espacios pensados para cada huésped.</p></article>
        <article><span>03</span><h3>Visión</h3><p>Ser el hotel referente de San Gabán para quienes buscan comodidad, servicio y conexión con la naturaleza.</p></article>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div>
        <img src={hotelLogo} alt="Hotel Plaza San Gaban" />
        <p>Descansa rodeado de naturaleza en San Gabán, Puno.</p>
      </div>
      <div>
        <b>Explora</b>
        {links.map(([name, id]) => (
          <a key={id} href={id === "inicio" ? "/" : id === "nosotros" ? "/nosotros" : `/#${id}`}>{name}</a>
        ))}
      </div>
      <div>
        <b>Contacto</b>
        <span>{hotel.location}</span>
        {hotel.phone && <span>{hotel.phone}</span>}
        {hotel.email && <span>{hotel.email}</span>}
      </div>
      <small>© {new Date().getFullYear()} Hotel Plaza San Gaban.</small>
    </footer>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);
  const [bookingRoom, setBookingRoom] = useState(null);
  const galleryImages = gallery;
  const openBooking = (room) => setBookingRoom(room || rooms[0].name);
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);
  useEffect(() => {
    const carousel = window.setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);
    return () => window.clearInterval(carousel);
  }, []);
  const pathname = window.location.pathname.replace(/\/$/, "");
  const isAboutPage = pathname === "/nosotros";
  const roomSlug = pathname.match(/^\/habitaciones\/([a-z-]+)$/)?.[1];
  const detailRoom = rooms.find((room) => room.slug === roomSlug);
  if (detailRoom) {
    return (
      <>
        <header className="inner-header">
          <a className="brand" href="/"><img src={hotelLogo} alt="Hotel Plaza San Gaban" /></a>
          <nav className={menu ? "nav open" : "nav"}>
            {links.map(([name, id]) => <a key={id} href={id === "inicio" ? "/" : id === "nosotros" ? "/nosotros" : `/#${id}`} onClick={() => setMenu(false)}>{name}</a>)}
            <button className="primary nav-book" onClick={() => { setMenu(false); openBooking(); }}><CalendarDays size={16} /> Reservar</button>
          </nav>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Abrir menú">{menu ? <X /> : <Menu />}</button>
        </header>
        <RoomDetail room={detailRoom} onBook={openBooking} />
        <SiteFooter />
        <BookingModal room={bookingRoom} onClose={() => setBookingRoom(null)} />
      </>
    );
  }
  if (isAboutPage) {
    return (
      <>
        <header className="inner-header">
          <a className="brand" href="/">
            <img src={hotelLogo} alt="Hotel Plaza San Gaban" />
          </a>
          <nav className={menu ? "nav open" : "nav"}>
            {links.map(([name, id]) => (
              <a key={id} href={id === "inicio" ? "/" : id === "nosotros" ? "/nosotros" : `/#${id}`} onClick={() => setMenu(false)}>
                {name}
              </a>
            ))}
            <button className="primary nav-book" onClick={() => { setMenu(false); openBooking(); }}>
              <CalendarDays size={16} /> Reservar
            </button>
          </nav>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Abrir menú">
            {menu ? <X /> : <Menu />}
          </button>
        </header>
        <main className="about-page"><AboutSection standalone /></main>
        <SiteFooter />
        <BookingModal room={bookingRoom} onClose={() => setBookingRoom(null)} />
      </>
    );
  }
  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <a className="brand" href="#inicio">
          <img src={hotelLogo} alt="Hotel Plaza San Gaban" />
        </a>
        <nav className={menu ? "nav open" : "nav"}>
          {links.map(([name, id]) => (
            <a
              key={id}
              href={id === "nosotros" ? "/nosotros" : `#${id}`}
              onClick={() => setMenu(false)}
            >
              {name}
            </a>
          ))}
          <button
            className="primary nav-book"
            onClick={() => {
              setMenu(false);
              openBooking();
            }}
          >
            <CalendarDays size={16} /> Reservar
          </button>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenu(!menu)}
          aria-label="Abrir menú"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section id="inicio" className="hero">
          <img
            key={slide}
            className="hero-image hero-fade"
            src={heroSlides[slide]}
            alt="Paisaje de San Gabán"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="kicker">SAN GABÁN · PUNO · PERÚ</p>
            <p className="hotel-name">Hotel Plaza San Gaban</p>
            <h1>
              Descansa
              <br />
              rodeado de <em>naturaleza</em>
            </h1>
            <p className="hero-copy">
              Confort, tranquilidad y naturaleza en el corazón de San Gabán,
              Puno.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => openBooking()}>
                Reservar ahora
              </button>
              <a className="secondary" href="#habitaciones">
                Ver habitaciones
              </a>
            </div>
          </div>
          <div className="hero-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                aria-label={`Imagen ${index + 1}`}
                className={slide === index ? "active" : ""}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
          <a className="explore" href="#habitaciones">
            ↓ EXPLORAR
          </a>
        </section>
        {false && <section id="nosotros" className="section about">
          <div className="about-intro">
            <p className="kicker">NOSOTROS</p>
            <h2>Hospitalidad que se siente como hogar</h2>
            <p>
              En Hotel Plaza San Gaban recibimos a cada viajero con calidez,
              tranquilidad y el encanto natural de nuestra tierra.
            </p>
          </div>
          <div className="about-cards">
            <article>
              <span>01</span>
              <h3>Quiénes somos</h3>
              <p>
                Somos un hotel local comprometido con brindarte una estadía
                cómoda, cercana y memorable en San Gabán.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Misión</h3>
              <p>
                Ofrecer un descanso confiable y acogedor, con atención amable
                y espacios pensados para cada huésped.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Visión</h3>
              <p>
                Ser el hotel referente de San Gabán para quienes buscan
                comodidad, servicio y conexión con la naturaleza.
              </p>
            </article>
          </div>
        </section>}
        <section id="habitaciones" className="section rooms">
          <p className="kicker">HABITACIONES</p>
          <h2>
            Espacios pensados
            <br />
            para descansar
          </h2>
          <p className="lead">
            Elige la habitación que mejor acompaña tu viaje.
          </p>
          <div className="rooms-grid">
            {rooms.map((room) => (
              <RoomCard key={room.name} room={room} onBook={openBooking} />
            ))}
          </div>
        </section>
        <section id="experiencias" className="section experiences">
          <div className="section-heading">
            <div>
              <p className="kicker">EXPERIENCIAS</p>
              <h2>Momentos para recordar</h2>
            </div>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={galleryAlt[index] || `Experiencia ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </section>
        <section id="ubicacion" className="location">
          <div className="location-copy">
            <p className="kicker">UBICACIÓN</p>
            <h2>Encuéntranos en San Gabán</h2>
            <p>{hotel.location}</p>
            {(hotel.phone || hotel.email) && <p>{hotel.phone}{hotel.phone && hotel.email && <br />}{hotel.email}</p>}
            <a
              className="secondary"
              href="https://www.google.com/maps/search/San+Gaban+Puno+Peru"
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
            </a>
          </div>
          <iframe
            title="Mapa de San Gabán, Puno"
            src="https://www.google.com/maps?q=San+Gaban,+Puno,+Peru&z=12&output=embed"
            loading="lazy"
          />
        </section>
      </main>
      <footer>
        <div>
          <img src={hotelLogo} alt="Hotel Plaza San Gaban" />
          <p>Descansa rodeado de naturaleza en San Gabán, Puno.</p>
        </div>
        <div>
          <b>Explora</b>
          {links.map(([name, id]) => (
            <a
              key={id}
              href={id === "nosotros" ? "/nosotros" : `#${id}`}
            >
              {name}
            </a>
          ))}
        </div>
        <div>
          <b>Contacto</b>
          <span>{hotel.location}</span>
          {hotel.phone && <span>{hotel.phone}</span>}
          {hotel.email && <span>{hotel.email}</span>}
        </div>
        <small>© {new Date().getFullYear()} Hotel Plaza San Gaban.</small>
      </footer>
      <BookingModal room={bookingRoom} onClose={() => setBookingRoom(null)} />
    </>
  );
}
