import { Artist } from './entities/artist';
import { Game } from './entities/game';
export const ARTISTS: Artist[] = [
  {
    id: 0,
    name: 'Lacrimosa',
    albums: [
      {
        id: 0,
        name: 'Lichtgestalt',
        songs: [
          { id: 0, name: 'Sapphire', length: 11, songurl: 'https://www.youtube.com/embed/haKUWZ6jkTI' },
          { id: 1, name: 'Kelch Der Liebe', length: 6, songurl: 'https://www.youtube.com/embed/Sp5aAl8EHmc' },
          { id: 2, name: 'Lichtgestalt', length: 5, songurl: 'https://www.youtube.com/embed/BZygX4fU8G4' }],
        picurl: 'http://www.lacrimosa.ch/cms/upload/bildergalerie/licht_wallp/w_lichtgestalt08.jpg'

      },
      {
        id: 1,
        name: 'Elodia',
        songs: [
          { id: 3, name: 'Am Ende der Stille', length: 6, songurl: 'https://www.youtube.com/embed/h0dDZE8fuoM' },
          { id: 4, name: 'Alleine zu zweit', length: 4, songurl: 'https://www.youtube.com/embed/ujmmLyCeEls' },
          { id: 5, name: 'Halt mich', length: 5, songurl: 'https://www.youtube.com/embed/dz1lhsaSSBI&' }],
        picurl: 'https://images-na.ssl-images-amazon.com/images/I/61nANLDk6bL.jpg'

      },
      {
        id: 2,
        name: 'Fassade',
        songs: [
          { id: 6, name: 'Fassade - 1. Satz', length: 9, songurl: 'https://www.youtube.com/embed/nSeoSw7z6ig' },
          { id: 7, name: 'Der Morgen danach', length: 4, songurl: 'https://www.youtube.com/embed/XCSN-83bktc' },
          { id: 8, name: 'Senses', length: 6, songurl: 'https://www.youtube.com/embed/uA9jkpiFBJI' }],
        picurl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Fassadecover.jpg/220px-Fassadecover.jpg'

      }],
    picurl: 'https://i.ytimg.com/vi/a47FYuAASWc/hqdefault.jpg',
  },


  {
    id: 1,
    name: 'Rammstein',
    albums: [
      {
        id: 3,
        name: 'Völkerball',
        songs: [
          { id: 9, name: 'Reise, Reise', length: 5, songurl: 'https://www.youtube.com/embed/Qs8c6FCwkbk' },
          { id: 10, name: 'Feuer Frei!', length: 3, songurl: 'https://www.youtube.com/embed/ZkW-K5RQdzo' },
          { id: 11, name: 'Los', length: 7, songurl: 'https://www.youtube.com/embed/yEm3RG6zhx0' },
          { id: 12, name: 'Keine Lust', length: 4, songurl: 'https://www.youtube.com/embed/1M4ADcMn3dA' },
          { id: 13, name: 'Du Hast', length: 4, songurl: 'https://www.youtube.com/embed/W3q8Od5qJio' }],
        picurl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg'

      }],
    picurl: 'https://pbs.twimg.com/media/CU65AJLWwAEH26W.jpg'
  },


  {
    id: 2,
    name: 'Scorpions',
    albums: [
      {
        id: 4,
        name: 'Acoustica',
        songs: [
          { id: 14, name: 'Always Somewhere', length: 4, songurl: 'https://www.youtube.com/embed/ssqHxLcsVOY' },
          { id: 15, name: 'You and I', length: 5, songurl: 'https://www.youtube.com/embed/9L_DvS8Tz5g' },
          { id: 16, name: 'Send Me an Angel', length: 5, songurl: 'https://www.youtube.com/embed/1UUYjd2rjsE' }],
        picurl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Record-Album-02.jpg'

      }],
    picurl: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Scorpions-rhythm-of-love-harvest.jpg'
  },
];

export const GAMES: Game[] = [
  {
    id: 0, name: 'World of Warcraft', developer: 'Blizzard', genre: 'MMORPG', fee: '$14.99',
    picurl: 'https://dvsgaming.org/wp-content/uploads/2015/06/World-Of-Warcraft-Logo2.jpg',
    trailerurl: 'https://www.youtube.com/embed/0N2XcaMsmOU'
  },
  {
    id: 1, name: 'Final Fantasy 14: A Realm Reborn', developer: 'Square Enix', genre: 'RPG',
    fee: 'free', picurl: 'http://www.dlcompare.com:8042/upload/cache/game_tetiere/img/final-fantasy-xiv-a-realm-reborn-img-4.jpg',
    trailerurl: 'https://www.youtube.com/embed/WNj4jOyUoNw'
  },
  {
    id: 2, name: 'Guild Wars 2', developer: 'ArenaNet', genre: 'MMORPG', fee: 'free',
    picurl: 'https://assets.nuuvem.com/image/upload/v1/products/565c81cd69702d5ee000058a/sharing_images/aj4yqcxoilzqx80crr5e.jpg',
    trailerurl: 'https://www.youtube.com/embed/Em0Sd60iI2w'
  },
  {
    id: 3, name: 'Star Wars Knights of the Fallen Empire', developer: '	BioWare', genre: 'MMOG', fee: 'Item Mall',
    picurl: 'http://static2.businessinsider.com/image/56ab7d1bdd0895c6798b46cc-1920/lukeskywalker.jpg',
    trailerurl: 'https://www.youtube.com/embed/bkgzXpKbVGE'
  },
];
