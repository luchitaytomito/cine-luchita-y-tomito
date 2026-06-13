// ============================================================
//  🎬 Cine de Luchita y Tomito — script.js
// ============================================================

// ============================================================
//  CATÁLOGO PRECARGADO (todos los datos e imágenes)
// ============================================================
const CATALOG = [
  {
    title: 'Patch Adams', year: '1998', rating: '6.8', genre: 'Drama, Comedia',
    director: 'Tom Shadyac', duration: '115 min',
    actors: 'Robin Williams, Daniel London, Monica Potter',
    plot: 'Un médico poco convencional usa el humor y la alegría como herramienta de curación para sus pacientes, desafiando las normas de la medicina tradicional.',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Patch_Adams_1998_movie_poster.jpg'
  },
  {
    title: 'Despertares', year: '1990', rating: '7.8', genre: 'Drama',
    director: 'Penny Marshall', duration: '121 min',
    actors: 'Robin Williams, Robert De Niro, Julie Kavner',
    plot: 'Un médico descubre un tratamiento experimental que despierta a pacientes que llevaban décadas en estado catatónico, pero el éxito tiene un precio devastador.',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Awakenings.jpg'
  },
  {
    title: 'Passengers', year: '2016', rating: '7.0', genre: 'Ciencia Ficción, Romance',
    director: 'Morten Tyldum', duration: '116 min',
    actors: 'Jennifer Lawrence, Chris Pratt, Michael Sheen',
    plot: 'En una nave espacial que viaja a una colonia lejana, dos pasajeros se despiertan 90 años antes de lo planeado y deben enfrentar juntos su destino.',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Passengers_2016_film_poster.jpg'
  },
  {
    title: 'Peter Pan', year: '2003', rating: '6.8', genre: 'Aventura, Fantasía, Familia',
    director: 'P.J. Hogan', duration: '113 min',
    actors: 'Jeremy Sumpter, Jason Isaacs, Rachel Hurd-Wood',
    plot: 'El niño que nunca crece lleva a los hermanos Wendy, Juan y Miguel a la mágica Tierra de Nunca Jamás, donde los piratas del Capitán Garfio los esperan.',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/50/Peter_Pan_2003_film.jpg'
  },
  {
    title: 'El cadáver de la novia', year: '2005', rating: '7.3', genre: 'Animación, Fantasía, Musical',
    director: 'Tim Burton, Mike Johnson', duration: '77 min',
    actors: 'Johnny Depp, Helena Bonham Carter, Emily Watson',
    plot: 'Victor, un joven tímido, practica sus votos de boda en el bosque y accidentalmente se casa con Emily, el cadáver de una novia asesinada.',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Corpse_Bride_film_poster.jpg'
  },
  {
    title: 'Coraline', year: '2009', rating: '7.7', genre: 'Animación, Terror, Fantasía',
    director: 'Henry Selick', duration: '100 min',
    actors: 'Dakota Fanning, Teri Hatcher, Jennifer Saunders',
    plot: 'Una niña descubre una puerta secreta en su nueva casa que la lleva a un mundo paralelo aparentemente perfecto, pero que esconde algo oscuro y siniestro.',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg'
  },
  {
    title: 'Alicia en el país de las maravillas', year: '2010', rating: '6.4', genre: 'Fantasía, Aventura, Familia',
    director: 'Tim Burton', duration: '108 min',
    actors: 'Mia Wasikowska, Johnny Depp, Helena Bonham Carter',
    plot: 'Una Alicia adulta regresa al País de las Maravillas y descubre que es la única que puede salvar ese mundo mágico de la tiranía de la Reina Roja.',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/36/Alice_in_Wonderland_%282010_film%29.png'
  },
  {
    title: 'Miss Peregrine y los niños peculiares', year: '2016', rating: '6.7', genre: 'Fantasía, Aventura',
    director: 'Tim Burton', duration: '127 min',
    actors: 'Eva Green, Asa Butterfield, Samuel L. Jackson',
    plot: 'Un chico descubre el orfanato secreto de Miss Peregrine, donde viven niños con poderes extraordinarios atrapados en un bucle temporal de 1943.',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/74/Miss_Peregrine_Film_Poster.jpg'
  },
  {
    title: 'La odisea de los giles', year: '2019', rating: '7.3', genre: 'Drama, Comedia, Thriller',
    director: 'Sebastián Borensztein', duration: '113 min',
    actors: 'Ricardo Darín, Luis Brandoni, Chino Darín',
    plot: 'En el marco del corralito argentino de 2001, un grupo de vecinos estafados planea una ingeniosa venganza contra los responsables de su ruina.',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Heroic_Losers_poster.jpg'
  },
  {
    title: 'El hijo de la novia', year: '2001', rating: '7.7', genre: 'Drama, Comedia',
    director: 'Juan José Campanella', duration: '123 min',
    actors: 'Ricardo Darín, Héctor Alterio, Norma Aleandro',
    plot: 'Rafael, un empresario agobiado por su trabajo, se reencuentra con lo que realmente importa cuando su padre quiere casarse de nuevo con su madre enferma de Alzheimer.',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Son_of_the_the_bride-1-.jpg'
  },
  {
    title: 'Sin novedad en el frente', year: '2022', rating: '7.8', genre: 'Drama, Guerra',
    director: 'Edward Berger', duration: '148 min',
    actors: 'Felix Kammerer, Albrecht Schuch, Daniel Brühl',
    plot: 'Un joven soldado alemán llega al frente occidental de la Primera Guerra Mundial lleno de entusiasmo, pero pronto descubre el horror real de la guerra.',
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/All_quiet_on_the_western_front_%282022_film%29.jpg'
  },
  {
    title: 'Alas blancas', year: '2024', rating: '7.0', genre: 'Drama, Guerra',
    director: 'Marc Forster', duration: '120 min',
    actors: 'Helen Mirren, Gillian Anderson, Ariella Glaser',
    plot: 'Durante la Segunda Guerra Mundial, una joven judía es rescatada por una familia francesa. Décadas después, su historia inspira a un chico que sufre acoso escolar.',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/da/White_Bird_-_A_Wonder_Story_film_poster.png?_=20240921000610.jpg'
  },
  {
    title: 'Dunkerque', year: '2017', rating: '7.8', genre: 'Drama, Historia, Guerra',
    director: 'Christopher Nolan', duration: '106 min',
    actors: 'Fionn Whitehead, Tom Hardy, Mark Rylance, Cillian Murphy',
    plot: 'La evacuación de Dunkerque durante la Segunda Guerra Mundial, narrada desde tres perspectivas: tierra, mar y aire, en una carrera contra el tiempo.',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg'
  },
  {
    title: 'La teoría del todo', year: '2014', rating: '7.7', genre: 'Drama, Biográfica, Romance',
    director: 'James Marsh', duration: '123 min',
    actors: 'Eddie Redmayne, Felicity Jones, Charlie Cox',
    plot: 'La historia de amor y vida de Stephen Hawking, desde sus años en Cambridge hasta convertirse en el científico más famoso del mundo, desafiando su enfermedad.',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/67/The_Theory_of_Everything_%282014%29.jpg'
  },
  {
    title: 'Rescatando al soldado Ryan', year: '1998', rating: '8.6', genre: 'Drama, Guerra',
    director: 'Steven Spielberg', duration: '169 min',
    actors: 'Tom Hanks, Matt Damon, Tom Sizemore, Edward Burns',
    plot: 'En plena Segunda Guerra Mundial, un capitán lidera una misión para encontrar y repatriar a un soldado cuya madre ya ha perdido a sus otros tres hijos en combate.',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg'
  },
  {
    title: 'Mujercitas', year: '2019', rating: '7.8', genre: 'Drama, Romance',
    director: 'Greta Gerwig', duration: '135 min',
    actors: 'Saoirse Ronan, Florence Pugh, Eliza Scanlen, Emma Watson',
    plot: 'Las cuatro hermanas March — Jo, Meg, Amy y Beth — navegan el amor, la pérdida y la ambición en la América pos-Guerra Civil, cada una en busca de su propio camino.',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Little_Women_%282019_film%29.jpeg'
  },
  {
    title: 'La sociedad literaria y del pastel de cáscara de papa de Guernsey', year: '2018', rating: '7.3', genre: 'Drama, Romance, Historia',
    director: 'Mike Newell', duration: '124 min',
    actors: 'Lily James, Michiel Huisman, Tom Courtenay, Penelope Wilton',
    plot: 'Una escritora londinense descubre a través de cartas un club literario fundado en Guernsey durante la ocupación nazi, y viaja a la isla donde encuentra amor e historia.',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/28/The_Guernsey_Literary_and_Potato_Peel_Pie_Society.png'
  },
  {
    title: 'Un camino a casa', year: '2016', rating: '7.4', genre: 'Drama, Biográfica',
    director: 'Garth Davis', duration: '118 min',
    actors: 'Dev Patel, Nicole Kidman, Rooney Mara, Sunny Pawar',
    plot: 'Un niño indio se pierde y es adoptado por una familia australiana. 25 años después, usa Google Earth para encontrar su pueblo natal y a su madre biológica.',
    image: 'https://image.tmdb.org/t/p/w500/z8onk7LV9D36a8D93K11075fC0.jpg'
  },
  {
    title: 'Papá por siempre', year: '1993', rating: '7.1', genre: 'Comedia, Drama, Familia',
    director: 'Chris Columbus', duration: '125 min',
    actors: 'Robin Williams, Sally Field, Pierce Brosnan',
    plot: 'Un padre divorciado se disfraza de niñera anciana para poder pasar tiempo con sus hijos, creando una situación de comedia llena de ternura y amor paternal.',
    image: 'https://image.tmdb.org/t/p/w500/o1W6jI2jM9h911q6i5H7a4r9Q8a.jpg'
  },
  {
    title: 'Nacho Libre', year: '2006', rating: '5.9', genre: 'Comedia, Familia, Deportes',
    director: 'Jared Hess', duration: '92 min',
    actors: 'Jack Black, Ana de la Reguera, Héctor Jiménez',
    plot: 'Un fraile cocinero en México sueña en secreto con ser luchador de lucha libre para ganar dinero y mejorar la calidad de vida de los niños del orfanato.',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Nacho_Libre_poster.jpg'
  },
  {
    title: 'Super cool', year: '2007', rating: '7.6', genre: 'Comedia',
    director: 'Greg Mottola', duration: '113 min',
    actors: 'Jonah Hill, Michael Cera, Christopher Mintz-Plasse',
    plot: 'Dos amigos del secundario con pocas habilidades sociales intentan desesperadamente conseguir alcohol para una fiesta y quedar bien con las chicas que les gustan.',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png'
  },
  {
    title: 'En busca del destino', year: '1997', rating: '8.3', genre: 'Drama',
    director: 'Gus Van Sant', duration: '126 min',
    actors: 'Matt Damon, Robin Williams, Ben Affleck, Minnie Driver',
    plot: 'Will Hunting, un joven con genialidad matemática pero heridas emocionales profundas, trabaja como conserje en el MIT hasta que un psicólogo lo ayuda a encontrar su camino.',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/52/Good_Will_Hunting.png'
  },
  {
    title: 'Buenos días, Vietnam', year: '1987', rating: '7.7', genre: 'Comedia, Drama, Guerra',
    director: 'Barry Levinson', duration: '121 min',
    actors: 'Robin Williams, Forest Whitaker, Tung Thanh Tran',
    plot: 'Un irreverente locutor de radio llega a Vietnam en 1965 y revoluciona las ondas radiales de las tropas americanas con su humor, mientras la guerra lo rodea.',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/07/Good_morning_vietnam.png'
  },
  {
    title: '¿Conoces a Joe Black?', year: '1998', rating: '7.2', genre: 'Drama, Romance, Fantasía',
    director: 'Martin Brest', duration: '181 min',
    actors: 'Brad Pitt, Anthony Hopkins, Claire Forlani',
    plot: 'La Muerte toma forma humana y se hospeda en la mansión de un magnate de los medios, enamorándose de su hija mientras acompaña al hombre en sus últimos días.',
    image: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg'
  },
  {
    title: 'La bella y la bestia', year: '1991', rating: '8.0', genre: 'Animación, Musical, Romance, Fantasía',
    director: 'Gary Trousdale, Kirk Wise', duration: '91 min',
    actors: 'Paige O\'Hara, Robby Benson, Jerry Orbach',
    plot: 'Bella, una joven inteligente y soñadora, queda prisionera en el castillo de una bestia maldita y descubre que bajo esa apariencia aterradora hay un corazón noble.',
    image: 'https://image.tmdb.org/t/p/w500/61b2G628V3kY7h46H0s0R2o583n.jpg'
  },
  {
    title: 'Anastasia', year: '1997', rating: '7.0', genre: 'Animación, Aventura, Musical',
    director: 'Don Bluth, Gary Goldman', duration: '94 min',
    actors: 'Meg Ryan, John Cusack, Kelsey Grammer, Christopher Lloyd',
    plot: 'Una joven sin memoria llamada Anya descubre que podría ser la legendaria Gran Duquesa Anastasia Romanov, la única que sobrevivió a la revolución rusa.',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/36/Anastasia-don-bluth.jpg'
  },
  {
    title: 'La Dama y el vagabundo', year: '1955', rating: '7.3', genre: 'Animación, Aventura, Romance',
    director: 'Clyde Geronimi, Wilfred Jackson, Hamilton Luske', duration: '76 min',
    actors: 'Peggy Lee, Barbara Luddy, Larry Roberts',
    plot: 'Lady, una elegante perrita de alta sociedad, se enamora de Golfo, un encantador perro callejero, en una aventura llena de magia, peligro y la famosa escena de los espaguetis.',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/39/Lady-and-tramp-1955-poster.jpg'
  },
  {
    title: 'El zorro y el sabueso', year: '1981', rating: '7.2', genre: 'Animación, Drama, Aventura',
    director: 'Ted Berman, Richard Rich, Art Stevens', duration: '83 min',
    actors: 'Mickey Rooney, Kurt Russell, Pearl Bailey',
    plot: 'Tod, un cachorro de zorro, y Cobre, un perrito sabueso, forman una amistad inseparable. Pero al crecer, la sociedad los convierte en enemigos naturales.',
    image: 'https://image.tmdb.org/t/p/w500/i46X15J8v3p577Mv7r5J4eJ9m4o.jpg'
  },
  {
    title: 'Robin Hood', year: '1973', rating: '7.5', genre: 'Animación, Aventura, Comedia',
    director: 'Wolfgang Reitherman', duration: '83 min',
    actors: 'Brian Bedford, Peter Ustinov, Terry-Thomas, Phil Harris',
    plot: 'La leyenda de Robin Hood reimaginada con animales: un astuto zorro roba a los ricos para dar a los pobres, mientras escapa del Príncipe Juan y el Sheriff de Nottingham.',
    image: 'https://image.tmdb.org/t/p/w500/f7l4y69RjJp1Xyv59tM1V8mF83V.jpg'
  },
  {
    title: 'La espada en la piedra', year: '1963', rating: '7.2', genre: 'Animación, Aventura, Familia',
    director: 'Wolfgang Reitherman', duration: '79 min',
    actors: 'Rickie Sorensen, Sebastian Cabot, Karl Swenson',
    plot: 'El mago Merlín toma al joven Wart como su aprendiz y lo prepara para su destino: convertirse en el rey Arturo al sacar la legendaria espada Excalibur de la piedra.',
    image: 'https://image.tmdb.org/t/p/w500/q54t51aHj9i2mHqS83J4N6Y1K6R.jpg'
  },
  {
    title: 'La bella durmiente', year: '1959', rating: '7.2', genre: 'Animación, Romance, Fantasía',
    director: 'Clyde Geronimi', duration: '75 min',
    actors: 'Mary Costa, Bill Shirley, Eleanor Audley',
    plot: 'La princesa Aurora es maldecida al nacer por la bruja Maléfica. Criada en secreto por tres hadas buenas, su destino la llevará a un sueño eterno del que solo el amor verdadero puede salvarla.',
    image: 'https://image.tmdb.org/t/p/w500/e31pL4y2125nO7v6nQ7t75tE64V.jpg'
  },
  {
    title: 'Cruella', year: '2021', rating: '7.3', genre: 'Comedia, Crimen, Drama',
    director: 'Craig Gillespie', duration: '134 min',
    actors: 'Emma Stone, Emma Thompson, Joel Fry, Paul Walter Hauser',
    plot: 'El origen de la icónica villana Cruella de Vil: una joven diseñadora de moda brillante y rebelde en el Londres de los años 70 que encuentra su destino oscuro en la industria de la moda.',
    image: 'https://image.tmdb.org/t/p/w500/wupx8S50e2Y9qQj8P85TjZ3Wn1p.jpg'
  },
  {
    title: 'El jinete sin cabeza', year: '1999', rating: '7.4', genre: 'Terror, Misterio, Fantasía',
    director: 'Tim Burton', duration: '105 min',
    actors: 'Johnny Depp, Christina Ricci, Miranda Richardson, Christopher Walken',
    plot: 'El detective Ichabod Crane viaja al pueblo de Sleepy Hollow para investigar una serie de misteriosas decapitaciones atribuidas al legendario Jinete Sin Cabeza.',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/09/Sleepy_hollow_ver2.jpg'
  },
  {
    title: 'El extraño mundo de Jack', year: '1993', rating: '8.0', genre: 'Animación, Musical, Fantasía',
    director: 'Henry Selick', duration: '76 min',
    actors: 'Chris Sarandon, Catherine O\'Hara, Danny Elfman',
    plot: 'Jack Skellington, el Rey de Halloween, descubre la Navidad y queda obsesionado con ella. Su intento de apoderarse de las festividades navideñas tiene consecuencias inesperadas.',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9a/The_nightmare_before_christmas_poster.jpg'
  },
  {
    title: 'Abracadabra', year: '1993', rating: '6.8', genre: 'Comedia, Terror, Familia',
    director: 'Kenny Ortega', duration: '96 min',
    actors: 'Bette Midler, Sarah Jessica Parker, Kathy Najimy',
    plot: 'En Salem, tres brujas del siglo XVII son resucitadas accidentalmente la noche de Halloween. Para sobrevivir, deben robar la energía vital de los niños del pueblo.',
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Hocuspocusposter.jpg'
  },
  {
    title: 'Ratatouille', year: '2007', rating: '8.1', genre: 'Animación, Comedia, Familia',
    director: 'Brad Bird', duration: '111 min',
    actors: 'Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy',
    plot: 'Remy, una rata con talento culinario extraordinario, sueña con ser chef en París. Su amistad con Linguini, un torpe ayudante de cocina, hace ese sueño posible.',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg'
  },
  {
    title: 'El teléfono del señor Harrigan', year: '2022', rating: '5.8', genre: 'Drama, Terror, Misterio',
    director: 'John Lee Hancock', duration: '104 min',
    actors: 'Jaeden Martell, Donald Sutherland, Joe Tippett',
    plot: 'Un chico de pueblo entabla amistad con un hombre solitario y millonario. Cuando este muere, el chico descubre que puede comunicarse con él a través del teléfono enterrado en su féretro.',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Mr_harrigans_phone_%28film%29.jpg'
  },
  {
    title: 'Los otros', year: '2001', rating: '7.6', genre: 'Terror, Misterio, Drama',
    director: 'Alejandro Amenábar', duration: '104 min',
    actors: 'Nicole Kidman, Fionnula Flanagan, Christopher Eccleston',
    plot: 'Una mujer vive aislada con sus dos hijos en una mansión oscura de la posguerra. La llegada de nuevos sirvientes desencadena una serie de hechos sobrenaturales aterradores.',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/TheOthers.jpg'
  },
  {
    title: 'El joven manos de tijera', year: '1990', rating: '7.9', genre: 'Fantasía, Romance, Drama',
    director: 'Tim Burton', duration: '105 min',
    actors: 'Johnny Depp, Winona Ryder, Dianne Wiest',
    plot: 'Un inventor muere antes de terminar su creación, un joven amable que queda con tijeras en lugar de manos. Cuando una vendedora lo lleva a su casa, él intenta adaptarse al colorido mundo suburbano.',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Edwardscissorhandsposter.JPG'
  },
  {
    title: 'Un cuento chino', year: '2011', rating: '7.3', genre: 'Comedia, Drama',
    director: 'Sebastián Borensztein', duration: '93 min',
    actors: 'Ricardo Darín, Ignacio Huang, Muriel Santa Ana',
    plot: 'Roberto, un ferretero solitario y maniático de Buenos Aires, termina hospedando a regañadientes a Jun, un joven chino que no habla una palabra de español y busca a su tío perdido.',
    image: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Chinese_Take_Away_movie_poster.jpg'
  },
  {
    title: 'Diario de una pasión', year: '2004', rating: '7.8', genre: 'Romance, Drama',
    director: 'Nick Cassavetes', duration: '123 min',
    actors: 'Ryan Gosling, Rachel McAdams, James Garner, Gena Rowlands',
    plot: 'Un anciano lee a una compañera de asilo la historia escrita en un viejo diario: un romance apasionado entre dos jóvenes de diferentes clases sociales en los años 40.',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg'
  },
  // ── SAGA HARRY POTTER ──────────────────────────────────────
  {
    title: 'Harry Potter y la piedra filosofal', year: '2001', rating: '7.6', genre: 'Fantasía, Aventura, Familia',
    director: 'Chris Columbus', duration: '152 min',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Richard Harris',
    plot: 'Harry Potter descubre en su undécimo cumpleaños que es un mago y es admitido en Hogwarts, donde encontrará amigos, enemigos y un oscuro secreto sobre sus padres.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/330px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg'
  },
  {
    title: 'Harry Potter y la cámara secreta', year: '2002', rating: '7.4', genre: 'Fantasía, Aventura, Misterio',
    director: 'Chris Columbus', duration: '161 min',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Kenneth Branagh',
    plot: 'Una misteriosa voz guía a Harry por los pasillos de Hogwarts mientras alumnos son petrificados. La Cámara de los Secretos ha sido abierta y el heredero de Slytherin ha regresado.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg/330px-Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg'
  },
  {
    title: 'Harry Potter y el prisionero de Azkaban', year: '2004', rating: '7.9', genre: 'Fantasía, Aventura, Misterio',
    director: 'Alfonso Cuarón', duration: '142 min',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Gary Oldman',
    plot: 'El peligroso Sirius Black ha escapado de Azkaban y todos creen que busca a Harry. Un nuevo profesor de defensa y los Dementores complican aún más el año en Hogwarts.',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/18/Harry_Potter_and_the_Prisoner_of_Azkaban_film_poster.jpg'
  },
  {
    title: 'Harry Potter y el cáliz de fuego', year: '2005', rating: '7.7', genre: 'Fantasía, Aventura, Acción',
    director: 'Mike Newell', duration: '157 min',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Ralph Fiennes',
    plot: 'Harry es misteriosamente inscripto en el Torneo de los Tres Magos, una peligrosa competencia que lo enfrentará con campeones mayores y con el regreso de Lord Voldemort.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg/330px-Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg'
  },
  {
    title: 'Harry Potter y la Orden del Fénix', year: '2007', rating: '7.5', genre: 'Fantasía, Aventura, Drama',
    director: 'David Yates', duration: '138 min',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Imelda Staunton',
    plot: 'Harry regresa a Hogwarts y nadie cree que Voldemort ha vuelto. Forma el Ejército de Dumbledore para combatir a la Umbridge y al Ministerio de Magia, que niega la realidad.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg/330px-Harry_Potter_and_the_Order_of_the_Phoenix_poster.jpg'
  },
  {
    title: 'Harry Potter y el misterio del príncipe', year: '2009', rating: '7.5', genre: 'Fantasía, Aventura, Drama',
    director: 'David Yates', duration: '153 min',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Jim Broadbent',
    plot: 'Harry descubre el pasado de Voldemort a través de los recuerdos guardados por Dumbledore. Mientras tanto, el amor y los celos sacuden los pasillos de Hogwarts.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Harry_Potter_and_the_Half-Blood_Prince_poster.jpg/330px-Harry_Potter_and_the_Half-Blood_Prince_poster.jpg'
  },
  {
    title: 'Harry Potter y las Reliquias de la Muerte — Parte 1', year: '2010', rating: '7.7', genre: 'Fantasía, Aventura, Drama',
    director: 'David Yates', duration: '146 min',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Helena Bonham Carter',
    plot: 'Harry, Ron y Hermione abandonan Hogwarts para destruir los Horrocruxes de Voldemort. Su peligrosa búsqueda los lleva por toda Gran Bretaña mientras el mundo mágico cae en la oscuridad.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg/330px-Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg'
  },
  {
    title: 'Harry Potter y las Reliquias de la Muerte — Parte 2', year: '2011', rating: '8.1', genre: 'Fantasía, Aventura, Acción',
    director: 'David Yates', duration: '130 min',
    actors: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Ralph Fiennes',
    plot: 'La batalla final entre el bien y el mal en Hogwarts. Harry debe enfrentarse a Voldemort por última vez y descubrir el secreto de las Reliquias de la Muerte.',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg'
  }
];

// ============================================================
//  YA LA VIMOS (Desde Card Principal y Ruleta)
// ============================================================
function markWinnerAsWatched() {
    if (currentWinnerIndex === null) return;
    const winner = movies[currentWinnerIndex];
    winner.watched = true;
    if (!winner.ratings) winner.ratings = { tomy: 0, luchi: 0 };
    saveMovies();
    renderMoviesList();
    document.getElementById('winnerDisplay').classList.add('hidden');
    currentWinnerIndex = null;
    showToast(`🍿 ¡"${winner.title}" movida a Vistas!`);
    openSidebar();
}

function markRouletteAsWatched() {
    if (currentWinnerIndex === null) return;
    const winner = movies[currentWinnerIndex];
    winner.watched = true;
    if (!winner.ratings) winner.ratings = { tomy: 0, luchi: 0 };
    saveMovies();
    renderMoviesList();
    document.getElementById('rouletteModal').classList.add('hidden');
    document.getElementById('winnerDisplay').classList.add('hidden');
    currentWinnerIndex = null;
    showToast(`🍿 ¡"${winner.title}" movida a Vistas!`);
    openSidebar();
}

// ============================================================
//  ELIMINAR GANADORA DE LA LISTA
// ============================================================
let movies = [];
let currentWinnerIndex = null;
let editingId          = null;
let pendingImageBase64 = null;

// ============================================================
//  INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    
    if (window.firebaseDB) {
        initFirebaseMovies();
    } else {
        window.addEventListener('firebaseLoaded', initFirebaseMovies);
    }

    document.getElementById('movieName').addEventListener('keydown', e => {
        if (e.key === 'Enter') addMovie();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeWatchedView();
            closeViewModal();
            closeEditModal();
            closeSidebar();
        }
    });
});

// ──────────────────────────────────────────────────────────────
//  Inicializar lista: si ya hay movies en localStorage las usa,
//  si no precarga el catálogo completo.
// ──────────────────────────────────────────────────────────────
const PRECARGADAS_VISTAS = [
    'El joven manos de tijera',
    'Un cuento chino',
    'Diario de una pasión',
    'Harry Potter y la piedra filosofal',
    'Super cool', 'Supercool'
];

function initFirebaseMovies() {
    const { db, onSnapshot, doc, setDoc } = window.firebaseDB;
    const docRef = doc(db, "cine", "moviesList");

    onSnapshot(docRef, (snapshot) => {
        if (snapshot.exists()) {
            movies = snapshot.data().items || [];
            
            renderMoviesList();
            if (document.getElementById('watchedSidebar').classList.contains('open')) {
                renderWatchedSidebar();
            }
            if (document.getElementById('watchedViewModal').classList.contains('active')) {
                const updatedMovie = movies.find(m => m.id === currentWatchedViewId);
                if (updatedMovie) buildWatchedStars(updatedMovie);
            }
        } else {
            // Primera vez: precargar catálogo y subirlo
            movies = CATALOG.map((m, i) => {
                const isWatched = PRECARGADAS_VISTAS.some(v => v.toLowerCase() === m.title.toLowerCase());
                return { ...m, id: Date.now() + i, watched: isWatched, ratings: { tomy: 0, luchi: 0 } };
            });
            setDoc(docRef, { items: movies });
        }
    });
}

// ============================================================
//  ESTRELLAS
// ============================================================
function generateStars() {
    const container = document.getElementById('stars');
    for (let i = 0; i < 80; i++) {
        const s = document.createElement('div');
        s.classList.add('star');
        const size = Math.random() * 2.5 + 0.5;
        s.style.cssText = `width:${size}px;height:${size}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--duration:${(Math.random()*4+2).toFixed(1)}s;--delay:${(Math.random()*5).toFixed(1)}s;`;
        container.appendChild(s);
    }
}

// ============================================================
//  PERSISTENCIA
// ============================================================
function saveMovies() {
    if (!window.firebaseDB) return;
    const { db, setDoc, doc } = window.firebaseDB;
    setDoc(doc(db, "cine", "moviesList"), { items: movies });
}

// ============================================================
//  AGREGAR PELÍCULA MANUAL
// ============================================================
async function addMovie() {
    const input = document.getElementById('movieName');
    const name  = input.value.trim();
    if (!name) { showToast('¡Ponele un nombre a la peli 🎬'); return; }

    const newMovie = {
        id: Date.now(), title: name, year: '', image: null,
        plot: '', rating: '', genre: '', actors: '', director: '', duration: '',
    };

    // Buscar en catálogo local primero
    const match = CATALOG.find(c => c.title.toLowerCase() === name.toLowerCase());
    if (match) Object.assign(newMovie, match);

    movies.push(newMovie);
    saveMovies();
    renderMoviesList();
    input.value = '';
    showToast(`✅ "${newMovie.title}" agregada`);
    openEditModal(newMovie.id);
}

// ============================================================
//  RENDERIZAR LISTA
// ============================================================
function renderMoviesList() {
    const listPending = document.getElementById('moviesList');
    const listWatched = document.getElementById('watchedList');
    const countPending = document.getElementById('movieCount');
    const countWatched = document.getElementById('watchedCount');

    const pendingMovies = movies.filter(m => !m.watched);
    const watchedMovies = movies.filter(m => m.watched);

    countPending.textContent = `${pendingMovies.length} peli${pendingMovies.length !== 1 ? 's' : ''}`;
    countWatched.textContent = `${watchedMovies.length} peli${watchedMovies.length !== 1 ? 's' : ''}`;

    // --- PENDIENTES ---
    if (pendingMovies.length === 0) {
        listPending.innerHTML = `<div class="empty-state"><span class="empty-icon">🍿</span><p>¡Aún no hay películas! Agreguen las que quieren ver juntos 💕</p></div>`;
    } else {
        listPending.innerHTML = '';
        pendingMovies.forEach(movie => {
            const item = document.createElement('div');
            item.classList.add('movie-item');

            const initial = movie.title.charAt(0).toUpperCase();
            const posterHTML = movie.image
                ? `<img class="movie-poster-thumb" src="${movie.image}" alt="${movie.title}"
                       onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                   <div class="movie-poster-placeholder" style="display:none">${initial}</div>`
                : `<div class="movie-poster-placeholder">${initial}</div>`;

            const tags = [];
            if (movie.rating) tags.push(`⭐ ${movie.rating}`);
            if (movie.genre)  tags.push(movie.genre.split(',')[0].trim());
            const tagsHTML = tags.map(t => `<span class="movie-item-tag">${t}</span>`).join('');

            item.innerHTML = `
                ${posterHTML}
                <div class="movie-item-info">
                    <div class="movie-item-title">${movie.title}</div>
                    ${movie.year ? `<div class="movie-item-year">📅 ${movie.year}</div>` : ''}
                    ${tagsHTML   ? `<div class="movie-item-meta">${tagsHTML}</div>` : ''}
                </div>
                <div class="item-actions">
                    <button class="movie-item-view"   onclick="openViewModal(${movie.id})" title="Ver detalles">👁️</button>
                    <button class="movie-item-delete" onclick="deleteMovie(${movie.id})"   title="Eliminar">🗑️</button>
                </div>`;
            listPending.appendChild(item);
        });
    }

    // --- VISTAS ---
    if (watchedMovies.length === 0) {
        listWatched.innerHTML = `<div class="empty-state"><span class="empty-icon">🎬</span><p>Todavía no vieron ninguna peli de la lista.</p></div>`;
    } else {
        listWatched.innerHTML = '';
        watchedMovies.forEach(movie => {
            const item = document.createElement('div');
            item.classList.add('watched-item');

            const initial = movie.title.charAt(0).toUpperCase();
            const posterHTML = movie.image
                ? `<img class="watched-poster" src="${movie.image}" alt="${movie.title}"
                       onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                   <div class="movie-poster-placeholder" style="display:none">${initial}</div>`
                : `<div class="movie-poster-placeholder">${initial}</div>`;

            if (!movie.ratings) movie.ratings = { tomy: 0, luchi: 0 };

            // Mini stars for quick glance (average of both)
            const avgRating = Math.round((movie.ratings.tomy + movie.ratings.luchi) / 2);
            const miniStarsHTML = [1,2,3,4,5].map(v =>
                `<span class="mini-star ${avgRating >= v ? 'filled' : ''}">★</span>`
            ).join('');

            item.innerHTML = `
                ${posterHTML}
                <div class="watched-info">
                    <div class="movie-item-title">${movie.title}</div>
                    ${movie.year ? `<span class="watched-year">📅 ${movie.year}</span>` : ''}
                    <div class="watched-mini-stars">${miniStarsHTML}</div>
                </div>
                <div class="watched-actions">
                    <button class="btn-watched-view" onclick="openWatchedView(${movie.id})" title="Ver y valorar">👁️</button>
                    <button class="btn-watched-restore" onclick="unwatchMovie(${movie.id})" title="Devolver a la ruleta">↺</button>
                </div>
            `;
            listWatched.appendChild(item);
        });
    }
}

// ============================================================
//  WATCHED VIEW MODAL (detalle + estrellas interactivas)
// ============================================================
let watchedViewId = null;

function openWatchedView(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    watchedViewId = id;
    if (!movie.ratings) movie.ratings = { tomy: 0, luchi: 0 };

    // Poster
    const img = document.getElementById('wvPosterImg');
    const ph  = document.getElementById('wvPosterPh');
    const bg  = document.getElementById('wvPosterBg');
    if (movie.image) {
        img.src = movie.image;
        img.style.display = 'block';
        ph.classList.add('hidden');
        bg.style.backgroundImage = `url(${movie.image})`;
        img.onerror = () => {
            img.style.display = 'none';
            ph.textContent = movie.title.charAt(0).toUpperCase();
            ph.classList.remove('hidden');
            bg.style.backgroundImage = 'none';
        };
    } else {
        img.style.display = 'none';
        ph.textContent = movie.title.charAt(0).toUpperCase();
        ph.classList.remove('hidden');
        bg.style.backgroundImage = 'none';
    }

    // Title
    document.getElementById('wvTitle').textContent = movie.title;

    // Meta badges
    const metaEl = document.getElementById('wvMeta');
    metaEl.innerHTML = '';
    if (movie.year)     metaEl.innerHTML += `<span class="meta-badge pink">📅 ${movie.year}</span>`;
    if (movie.rating)   metaEl.innerHTML += `<span class="meta-badge gold">⭐ ${movie.rating}/10</span>`;
    if (movie.duration) metaEl.innerHTML += `<span class="meta-badge">⏱️ ${movie.duration}</span>`;
    if (movie.genre)    metaEl.innerHTML += `<span class="meta-badge">🎭 ${movie.genre}</span>`;

    // Fields
    const setField = (wrapId, valId, value) => {
        const wrap = document.getElementById(wrapId);
        if (value) {
            document.getElementById(valId).textContent = value;
            wrap.classList.remove('hidden');
        } else {
            wrap.classList.add('hidden');
        }
    };
    setField('wvActorsWrap',   'wvActors',   movie.actors);
    setField('wvDirectorWrap', 'wvDirector', movie.director);
    setField('wvPlotWrap',     'wvPlot',     movie.plot);

    // Build interactive stars
    buildWatchedStars('wvStarsTomy', movie, 'tomy');
    buildWatchedStars('wvStarsLuchi', movie, 'luchi');

    document.getElementById('watchedViewModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function buildWatchedStars(containerId, movie, user) {
    const container = document.getElementById(containerId);
    container.innerHTML = [1,2,3,4,5].map(v => {
        const isFilled = movie.ratings[user] >= v;
        // ACÁ: cambiamos 'star' por 'wv-star-item'
        return `<span class="wv-star-item ${isFilled ? 'filled' : ''}" data-val="${v}">★</span>`;
    }).join('');

    // ACÁ: cambiamos '.star' por '.wv-star-item'
    const stars = container.querySelectorAll('.wv-star-item');

    stars.forEach(star => {
        star.addEventListener('mouseenter', function() {
            const val = Number(this.getAttribute('data-val'));
            stars.forEach(s => {
                const sVal = Number(s.getAttribute('data-val'));
                if (sVal <= val) {
                    s.classList.add('hover-filled');
                } else {
                    s.classList.remove('hover-filled');
                }
            });
        });

        star.addEventListener('click', function() {
            const val = Number(this.getAttribute('data-val'));
            movie.ratings[user] = val;
            saveMovies();
            // Update visual
            stars.forEach(s => {
                const sVal = Number(s.getAttribute('data-val'));
                if (sVal <= val) {
                    s.classList.add('filled');
                } else {
                    s.classList.remove('filled');
                }
            });
            renderMoviesList(); // Update sidebar mini-stars too
        });
    });

    container.addEventListener('mouseleave', () => {
        stars.forEach(s => {
            s.classList.remove('hover-filled');
        });
    });
}

function closeWatchedView() {
    document.getElementById('watchedViewModal').classList.add('hidden');
    document.body.style.overflow = '';
    watchedViewId = null;
}

function unwatchFromView() {
    if (watchedViewId === null) return;
    closeWatchedView();
    unwatchMovie(watchedViewId);
}

// ============================================================
//  ELIMINAR / DEVOLVER (UNWATCH)
// ============================================================
function deleteMovie(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    movies = movies.filter(m => m.id !== id);
    saveMovies();
    renderMoviesList();
    showToast(`🗑️ "${movie.title}" eliminada`);
}

function unwatchMovie(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    movie.watched = false;
    saveMovies();
    renderMoviesList();
    showToast(`🔄 "${movie.title}" devuelta a la lista`);
}

// ============================================================
//  SIDEBAR DE VISTAS
// ============================================================
function openSidebar() {
    document.getElementById('watchedSidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    document.getElementById('watchedSidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.add('hidden');
    document.body.style.overflow = '';
}

// ============================================================
//  MODAL DE VISTA (solo lectura)
// ============================================================
let viewingId = null;

function openViewModal(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    viewingId = id;

    // Póster
    const poster = document.getElementById('viewPoster');
    const ph     = document.getElementById('viewPosterPlaceholder');
    if (movie.image) {
        poster.src           = movie.image;
        poster.style.display = 'block';
        ph.classList.add('hidden');
        poster.onerror = () => {
            poster.style.display = 'none';
            ph.textContent = movie.title.charAt(0).toUpperCase();
            ph.classList.remove('hidden');
        };
    } else {
        poster.style.display = 'none';
        ph.textContent = movie.title.charAt(0).toUpperCase();
        ph.classList.remove('hidden');
    }

    // Título
    document.getElementById('viewTitle').textContent = movie.title;

    // Meta badges
    const metaEl = document.getElementById('viewMeta');
    metaEl.innerHTML = '';
    if (movie.year)     metaEl.innerHTML += `<span class="meta-badge pink">📅 ${movie.year}</span>`;
    if (movie.rating)   metaEl.innerHTML += `<span class="meta-badge gold">⭐ ${movie.rating}/10</span>`;
    if (movie.duration) metaEl.innerHTML += `<span class="meta-badge">⏱️ ${movie.duration}</span>`;
    if (movie.genre)    metaEl.innerHTML += `<span class="meta-badge">🎭 ${movie.genre}</span>`;

    // Campos opcionales
    const setField = (wrapId, valId, value) => {
        const wrap = document.getElementById(wrapId);
        if (value) {
            document.getElementById(valId).textContent = value;
            wrap.classList.remove('hidden');
        } else {
            wrap.classList.add('hidden');
        }
    };
    setField('viewActorsWrap',   'viewActors',   movie.actors);
    setField('viewDirectorWrap', 'viewDirector', movie.director);
    setField('viewPlotWrap',     'viewPlot',     movie.plot);

    document.getElementById('viewModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeViewModal() {
    document.getElementById('viewModal').classList.add('hidden');
    document.body.style.overflow = '';
    viewingId = null;
}

function handleViewOverlayClick(e) {
    if (e.target === document.getElementById('viewModal')) closeViewModal();
}

// Desde el modal de vista → abrir edición
function switchToEdit() {
    const id = viewingId;
    closeViewModal();
    openEditModal(id);
}

// Desde el modal de vista → eliminar
function deleteFromView() {
    const id = viewingId;
    closeViewModal();
    deleteMovie(id);
}

function toggleWatchedFromView() {
    const id = viewingId;
    closeViewModal();
    
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    
    movie.watched = true;
    if (!movie.ratings) movie.ratings = { tomy: 0, luchi: 0 };
    saveMovies();
    showToast(`🍿 "${movie.title}" movida a Vistas!`);
}

// ============================================================
//  MODAL DE EDICIÓN
// ============================================================
function openEditModal(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    editingId          = id;
    pendingImageBase64 = null;

    document.getElementById('editMovieId').value  = id;
    document.getElementById('editTitle').value     = movie.title    || '';
    document.getElementById('editYear').value      = movie.year     || '';
    document.getElementById('editRating').value    = movie.rating   || '';
    document.getElementById('editGenre').value     = movie.genre    || '';
    document.getElementById('editDuration').value  = movie.duration || '';
    document.getElementById('editDirector').value  = movie.director || '';
    document.getElementById('editActors').value    = movie.actors   || '';
    document.getElementById('editPlot').value      = movie.plot     || '';
    document.getElementById('posterUrl').value     = '';

    updatePosterPreview(movie.image);

    document.getElementById('editModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('editTitle').focus(), 80);
}

function closeEditModal() {
    document.getElementById('editModal').classList.add('hidden');
    document.body.style.overflow = '';
    editingId = pendingImageBase64 = null;
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('editModal')) closeEditModal();
}

// ============================================================
//  PREVIEW PÓSTER EN MODAL
// ============================================================
function updatePosterPreview(src) {
    const img  = document.getElementById('posterPreview');
    const ph   = document.getElementById('posterPreviewPlaceholder');
    if (src) {
        img.src            = src;
        img.style.display  = 'block';
        ph.classList.add('hidden');
        img.onerror = () => { img.style.display = 'none'; ph.classList.remove('hidden'); };
    } else {
        img.style.display = 'none';
        ph.classList.remove('hidden');
    }
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        pendingImageBase64 = e.target.result;
        document.getElementById('posterUrl').value = '';
        updatePosterPreview(pendingImageBase64);
    };
    reader.readAsDataURL(file);
}

function handleUrlInput() {
    const url = document.getElementById('posterUrl').value.trim();
    pendingImageBase64 = null;
    document.getElementById('posterFile').value = '';
    const movie = movies.find(m => m.id === editingId);
    updatePosterPreview(url || (movie ? movie.image : null));
}

function clearPoster() {
    pendingImageBase64 = null;
    document.getElementById('posterUrl').value  = '';
    document.getElementById('posterFile').value = '';
    updatePosterPreview(null);
}

// ============================================================
//  GUARDAR EDICIÓN
// ============================================================
function saveEdit() {
    const movie = movies.find(m => m.id === editingId);
    if (!movie) return;

    movie.title    = document.getElementById('editTitle').value.trim()    || movie.title;
    movie.year     = document.getElementById('editYear').value.trim();
    movie.rating   = document.getElementById('editRating').value.trim();
    movie.genre    = document.getElementById('editGenre').value.trim();
    movie.duration = document.getElementById('editDuration').value.trim();
    movie.director = document.getElementById('editDirector').value.trim();
    movie.actors   = document.getElementById('editActors').value.trim();
    movie.plot     = document.getElementById('editPlot').value.trim();

    if (pendingImageBase64) {
        movie.image = pendingImageBase64;
    } else {
        const urlInput = document.getElementById('posterUrl').value.trim();
        if (urlInput) movie.image = urlInput;
        const previewImg = document.getElementById('posterPreview');
        if (previewImg.style.display === 'none' && !urlInput && !pendingImageBase64) {
            movie.image = null;
        }
    }

    saveMovies();
    renderMoviesList();
    closeEditModal();
    showToast(`💾 "${movie.title}" guardada ✅`);
}

// ============================================================
//  RULETA CINEMATOGRÁFICA
// ============================================================

const CARD_W  = 110; // card width px
const CARD_GAP = 10; // gap between cards

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Construye la cinta de tarjetas y devuelve información de la posición
function buildReel(winnerMovie) {
    const track = document.getElementById('reelTrack');
    track.innerHTML = '';
    track.style.transform = 'translateX(0px)';

    // Repetimos la lista varias veces (mezclada) para dar un giro largo
    const passes = 6;
    const allCards = [];
    for (let p = 0; p < passes; p++) {
        allCards.push(...shuffle(movies));
    }
    
    // Colocamos al ganador cerca del final, pero dejando algunas pelis después
    // para que parezca que la ruleta podría haber seguido
    const winnerCardIndex = allCards.length - 8; 
    allCards[winnerCardIndex] = winnerMovie;

    allCards.forEach(m => {
        const card = document.createElement('div');
        card.classList.add('reel-card');
        // Fondo de color único por peli
        const hue = (m.title.charCodeAt(0) * 37 + m.title.length * 13) % 360;
        card.style.background = `linear-gradient(160deg, hsl(${hue},55%,22%), hsl(${(hue+60)%360},45%,15%))`;

        if (m.image) {
            const img = document.createElement('img');
            img.src = m.image;
            img.loading = 'lazy';
            img.onerror = () => { img.style.display='none'; };
            card.appendChild(img);
        } else {
            const ph = document.createElement('div');
            ph.className = 'reel-card-placeholder';
            ph.textContent = m.title.charAt(0).toUpperCase();
            card.appendChild(ph);
        }
        const overlay = document.createElement('div');
        overlay.className = 'reel-card-overlay';
        const name = document.createElement('div');
        name.className = 'reel-card-name';
        name.textContent = m.title;
        overlay.appendChild(name);
        card.appendChild(overlay);
        track.appendChild(card);
    });

    return { totalCards: allCards.length, winnerCardIndex };
}

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
function easeOutQuint(t) { return 1 - Math.pow(1 - t, 5); }

async function pickRandomMovie() {
    if (movies.length === 0) { showToast('¡Primero agreguen algunas pelis! 🎬'); return; }

    // Elegir ganadora
    const idx    = Math.floor(Math.random() * movies.length);
    const winner = movies[idx];
    currentWinnerIndex = idx;

    // Abrir overlay, mostrar fase 1
    const overlay = document.getElementById('rouletteModal');
    const phase1  = document.getElementById('roulettePhase1');
    const phase2  = document.getElementById('roulettePhase2');
    const status  = document.getElementById('rouletteStatus');

    phase2.classList.add('hidden');
    phase1.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // Construir cinta
    const { totalCards, winnerCardIndex } = buildReel(winner);
    const track = document.getElementById('reelTrack');

    // Queremos que el centro del viewport coincida con el centro de la tarjeta ganadora
    const viewportW    = document.getElementById('reelTrack').parentElement.clientWidth;
    const winnerLeft   = winnerCardIndex * (CARD_W + CARD_GAP);
    const targetOffset = winnerLeft - viewportW / 2 + CARD_W / 2;

    // Arrancamos desde un punto inicial (ya cargado) 
    // Damos un arranque con desplazamiento inicial rápido
    const startOffset = Math.max(0, targetOffset - (CARD_W + CARD_GAP) * 28);
    track.style.transform = `translateX(-${startOffset}px)`;

    // Pequeña pausa para que pinte la cinta antes de animar
    await sleep(80);

    const DURATION = 8500; // ms (aumentado para más suspenso, 8.5s)
    let startTime  = null;

    // Mensajes de estado mientras gira
    const messages = ['Eligiendo...', 'Analizando opciones...', 'Mezclando el catálogo...', '¡Ya casi!', '¡Casi casi!', 'Mmm, difícil decisión...', '¡Ahí va!', '¡Esta es!'];
    let msgIdx = 0;
    const msgInterval = setInterval(() => {
        status.textContent = messages[Math.min(msgIdx++, messages.length - 1)];
    }, DURATION / messages.length);

    await new Promise(resolve => {
        function step(ts) {
            if (!startTime) startTime = ts;
            const elapsed  = ts - startTime;
            const progress = Math.min(elapsed / DURATION, 1);
            const eased    = easeOutQuint(progress);
            const current  = startOffset + (targetOffset - startOffset) * eased;
            track.style.transform = `translateX(-${current}px)`;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                resolve();
            }
        }
        requestAnimationFrame(step);
    });

    clearInterval(msgInterval);
    status.textContent = `¡${winner.title}!`;

    // Resaltar tarjeta ganadora
    const cards = track.querySelectorAll('.reel-card');
    if (cards[winnerCardIndex]) cards[winnerCardIndex].classList.add('active');

    await sleep(700);

    // Transición a fase 2
    showReveal(winner, phase1, phase2);
}

function showReveal(movie, phase1, phase2) {
    // Fondo borroso
    const bg = document.getElementById('revealBg');
    if (movie.image) {
        bg.style.backgroundImage = `url('${movie.image}')`;
    } else {
        const hue = (movie.title.charCodeAt(0) * 37) % 360;
        bg.style.background = `linear-gradient(160deg, hsl(${hue},55%,18%), hsl(${(hue+60)%360},40%,10%))`;
    }

    // Póster
    const poster = document.getElementById('revealPoster');
    const ph     = document.getElementById('revealPosterPh');
    if (movie.image) {
        poster.src = movie.image; poster.style.display = 'block'; ph.classList.add('hidden');
        poster.onerror = () => { poster.style.display='none'; ph.textContent=movie.title.charAt(0).toUpperCase(); ph.classList.remove('hidden'); };
    } else {
        poster.style.display = 'none';
        ph.textContent = movie.title.charAt(0).toUpperCase();
        ph.classList.remove('hidden');
    }

    // Título
    document.getElementById('revealTitle').textContent = movie.title;

    // Meta
    const meta = document.getElementById('revealMeta2');
    meta.innerHTML = '';
    if (movie.year)     meta.innerHTML += `<span class="meta-badge pink">📅 ${movie.year}</span>`;
    if (movie.rating)   meta.innerHTML += `<span class="meta-badge gold">⭐ ${movie.rating}/10</span>`;
    if (movie.duration) meta.innerHTML += `<span class="meta-badge">⏱️ ${movie.duration}</span>`;
    if (movie.genre)    meta.innerHTML += `<span class="meta-badge">🎭 ${movie.genre.split(',')[0]}</span>`;

    // Sinopsis (3 líneas)
    document.getElementById('revealPlot2').textContent = movie.plot || '';

    // Confeti 🎊
    launchConfetti();

    // Mostrar fase 2
    phase1.classList.add('hidden');
    phase2.classList.remove('hidden');
}

function launchConfetti() {
    const wrap   = document.getElementById('confettiWrap');
    wrap.innerHTML = '';
    const colors = ['#ff6b9d','#c77dff','#ffd700','#a0f0a0','#87ceeb','#ff9f6b','#f9f871','#ff6b6b'];
    for (let i = 0; i < 80; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.cssText = `
            left:${Math.random() * 100}%;
            background:${colors[Math.floor(Math.random() * colors.length)]};
            width:${Math.random() * 8 + 5}px;
            height:${Math.random() * 10 + 6}px;
            border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
            animation-duration:${(Math.random() * 2 + 2).toFixed(1)}s;
            animation-delay:${(Math.random() * 0.8).toFixed(2)}s;
        `;
        wrap.appendChild(piece);
    }
}

function closeRoulette() {
    document.getElementById('rouletteModal').classList.add('hidden');
    // Mostrar winner en la card principal también
    if (currentWinnerIndex !== null) {
        displayWinner(movies[currentWinnerIndex]);
    }
}

function removeAndClose() {
    if (currentWinnerIndex === null) return;
    const winner = movies[currentWinnerIndex];
    movies.splice(currentWinnerIndex, 1);
    saveMovies(); renderMoviesList();
    document.getElementById('rouletteModal').classList.add('hidden');
    document.getElementById('winnerDisplay').classList.add('hidden');
    currentWinnerIndex = null;
    showToast(`🗑️ "${winner.title}" sacada de la lista`);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ============================================================
//  MOSTRAR GANADORA (card principal)
// ============================================================
function displayWinner(movie) {
    const display  = document.getElementById('winnerDisplay');
    const imgEl    = document.getElementById('winnerImage');
    const ph       = document.getElementById('winnerPosterPlaceholder');

    document.getElementById('winnerTitle').textContent = movie.title;
    document.getElementById('winnerPlot').textContent  = movie.plot || '';

    if (movie.image) {
        imgEl.src = movie.image; imgEl.style.display = 'block'; ph.classList.add('hidden');
        imgEl.onerror = () => { imgEl.style.display='none'; ph.textContent=movie.title.charAt(0).toUpperCase(); ph.classList.remove('hidden'); };
    } else {
        imgEl.style.display = 'none';
        ph.textContent = movie.title.charAt(0).toUpperCase();
        ph.classList.remove('hidden');
    }

    const metaEl = document.getElementById('winnerMeta');
    metaEl.innerHTML = '';
    if (movie.year)     metaEl.innerHTML += `<span class="meta-badge pink">📅 ${movie.year}</span>`;
    if (movie.rating)   metaEl.innerHTML += `<span class="meta-badge gold">⭐ ${movie.rating}/10</span>`;
    if (movie.duration) metaEl.innerHTML += `<span class="meta-badge">⏱️ ${movie.duration}</span>`;
    if (movie.genre)    metaEl.innerHTML += `<span class="meta-badge">🎭 ${movie.genre.split(',')[0].trim()}</span>`;
    if (movie.director) metaEl.innerHTML += `<span class="meta-badge">🎬 ${movie.director}</span>`;

    let actorsEl = display.querySelector('.winner-actors');
    if (!actorsEl) {
        actorsEl = document.createElement('p');
        actorsEl.className = 'winner-actors';
        document.getElementById('winnerPlot').before(actorsEl);
    }
    actorsEl.textContent = movie.actors ? `🌟 ${movie.actors}` : '';

    display.classList.remove('hidden');
    display.style.animation = 'none';
    display.offsetHeight;
    display.style.animation = '';
    display.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

// ============================================================
//  ELIMINAR GANADORA (botón en card principal)
// ============================================================
function removeWinner() {
    if (currentWinnerIndex === null) return;
    const winner = movies[currentWinnerIndex];
    movies.splice(currentWinnerIndex, 1);
    saveMovies(); renderMoviesList();
    document.getElementById('winnerDisplay').classList.add('hidden');
    currentWinnerIndex = null;
    showToast(`🎬 "${winner.title}" sacada de la lista`);
}

// ============================================================
//  TOAST
// ============================================================
let toastTimeout = null;
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.remove('hidden');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.add('hidden'), 3200);
} 

// ============================================================
//  FOTOS FLOTANTES INTERACTIVAS (Con Anti-Colisión)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const fotosFlotantes = document.querySelectorAll('.float-img');
    
    // Identificamos cuál es el menú central que queremos esquivar
    const menuCentral = document.querySelector('.glass-card'); 

    fotosFlotantes.forEach(foto => {
        foto.addEventListener('click', function() {
            this.style.bottom = 'auto';
            this.style.right = 'auto';

            let nuevoTop, nuevoLeft;
            let colisiona = true;
            let intentos = 0;

            // Buscamos coordenadas hasta encontrar una libre (máximo 50 intentos para no colgar la PC)
            while (colisiona && intentos < 50) {
                nuevoTop = Math.floor(Math.random() * 80) + 5;
                nuevoLeft = Math.floor(Math.random() * 80) + 5;

                if (menuCentral) {
                    const menuRect = menuCentral.getBoundingClientRect();
                    const fotoSize = this.offsetWidth; 
                    
                    // Calculamos dónde caería la foto en píxeles reales
                    const futuroX = (nuevoLeft / 100) * window.innerWidth;
                    const futuroY = (nuevoTop / 100) * window.innerHeight;

                    // ¿Choca contra el rectángulo del menú? (Le sumamos 20px de margen de seguridad)
                    const chocaX = (futuroX + fotoSize) > (menuRect.left - 20) && futuroX < (menuRect.right + 20);
                    const chocaY = (futuroY + fotoSize) > (menuRect.top - 20) && futuroY < (menuRect.bottom + 20);

                    // Si NO choca en X o NO choca en Y, es un lugar seguro
                    if (!chocaX || !chocaY) {
                        colisiona = false; 
                    }
                } else {
                    colisiona = false; // Si no encuentra el menú, que vaya a cualquier lado
                }
                intentos++;
            }

            // Disparamos la foto a la zona segura
            this.style.top = nuevoTop + '%';
            this.style.left = nuevoLeft + '%';
            
            // Efecto visual de click
            this.style.opacity = '1';
            setTimeout(() => { this.style.opacity = ''; }, 800);
        });
    });
});