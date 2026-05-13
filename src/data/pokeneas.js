const BASE_URL = 'https://storage.googleapis.com/pokeneas_alyson_bucket';

const pokeneas = [
  {
    id: 1,
    name: 'Charizard',
    height: '1.7m',
    ability: 'Blaze',
    image: `${BASE_URL}/charizard.png`,
    phrase: 'El fuego que arde con propósito no destruye: transforma.'
  },
  {
    id: 2,
    name: 'Eevee',
    height: '0.3m',
    ability: 'Run Away',
    image: `${BASE_URL}/eevee.png`,
    phrase: 'La mayor libertad es elegir quién quieres llegar a ser.'
  },
  {
    id: 3,
    name: 'Gengar',
    height: '1.5m',
    ability: 'Cursed Body',
    image: `${BASE_URL}/gengar.png`,
    phrase: 'No temas a las sombras; en ellas también vive la luz que las proyecta.'
  },
  {
    id: 4,
    name: 'Jigglypuff',
    height: '0.5m',
    ability: 'Cute Charm',
    image: `${BASE_URL}/jigglypuff.png`,
    phrase: 'A veces la calma más suave puede dormir al ruido del mundo.'
  },
  {
    id: 5,
    name: 'Mewtwo',
    height: '2.0m',
    ability: 'Pressure',
    image: `${BASE_URL}/mewtwo.png`,
    phrase: 'El origen no define el destino; lo que haces con tu existencia, sí.'
  },
  {
    id: 6,
    name: 'Pikachu',
    height: '0.4m',
    ability: 'Static',
    image: `${BASE_URL}/pikachu.png`,
    phrase: 'La chispa más pequeña puede encender el corazón más grande.'
  },
  {
    id: 7,
    name: 'Squirtle',
    height: '0.5m',
    ability: 'Torrent',
    image: `${BASE_URL}/squirtle.png`,
    phrase: 'El agua no pelea con los obstáculos, los rodea y sigue su camino.'
  },
];

module.exports = { pokeneas };
