/**
 * @typedef {Object} Wrestler
 * @property {number} id
 * @property {string} name
 * @property {string} nickname
 * @property {string} initials
 * @property {string} gradientFrom
 * @property {string} gradientTo
 * @property {number} championships
 * @property {string} hometown
 * @property {string} height
 * @property {string} weight
 * @property {string[]} signatureMoves
 * @property {string} era
 * @property {string} bio
 * @property {boolean} active
 */

/** @type {Wrestler[]} */
export const WRESTLERS = [
  {
    id: 1,
    name: 'John Cena',
    nickname: 'The Champ',
    initials: 'JC',
    gradientFrom: '#d4af37',
    gradientTo: '#8b6914',
    championships: 16,
    hometown: 'West Newbury, MA',
    height: "6'1\"",
    weight: '251 lbs',
    signatureMoves: ['Attitude Adjustment', 'STF'],
    era: 'PG Era',
    bio: 'John Cena is a 16-time world champion and one of the most decorated superstars in WWE history. Known for his "Never Give Up" motto, he transcended wrestling to become a Hollywood star.',
    active: false,
  },
  {
    id: 2,
    name: 'The Rock',
    nickname: 'The Great One',
    initials: 'TR',
    gradientFrom: '#c0392b',
    gradientTo: '#7b241c',
    championships: 10,
    hometown: 'Hayward, CA',
    height: "6'5\"",
    weight: '260 lbs',
    signatureMoves: ['Rock Bottom', "People's Elbow"],
    era: 'Attitude Era',
    bio: "Dwayne 'The Rock' Johnson electrified audiences with his charisma and mic skills. A 10-time champion who became the most electrifying man in sports entertainment.",
    active: false,
  },
  {
    id: 3,
    name: 'Stone Cold Steve Austin',
    nickname: 'The Rattlesnake',
    initials: 'SC',
    gradientFrom: '#7f8c8d',
    gradientTo: '#2c3e50',
    championships: 6,
    hometown: 'Victoria, TX',
    height: "6'2\"",
    weight: '252 lbs',
    signatureMoves: ['Stone Cold Stunner', 'Million Dollar Dream'],
    era: 'Attitude Era',
    bio: "Stone Cold Steve Austin defined the Attitude Era with his rebellious anti-hero persona. A 6-time WWE Champion whose rivalry with Mr. McMahon is legendary.",
    active: false,
  },
  {
    id: 4,
    name: 'Roman Reigns',
    nickname: 'The Tribal Chief',
    initials: 'RR',
    gradientFrom: '#1a237e',
    gradientTo: '#0d1117',
    championships: 4,
    hometown: 'Pensacola, FL',
    height: "6'3\"",
    weight: '265 lbs',
    signatureMoves: ['Spear', 'Guillotine'],
    era: 'Modern Era',
    bio: "Roman Reigns evolved from 'The Big Dog' to 'The Tribal Chief,' becoming the undisputed head of the table. His Undisputed WWE Universal Championship reign lasted over 1,300 days.",
    active: true,
  },
  {
    id: 5,
    name: 'CM Punk',
    nickname: 'The Best in the World',
    initials: 'CP',
    gradientFrom: '#1b1b1b',
    gradientTo: '#2e7d32',
    championships: 2,
    hometown: 'Chicago, IL',
    height: "6'2\"",
    weight: '218 lbs',
    signatureMoves: ['Go To Sleep', 'Anaconda Vise'],
    era: 'PG Era',
    bio: "CM Punk's legendary 434-day WWE Championship reign cemented his legacy as one of the greatest. His pipe bomb promo changed the industry forever.",
    active: true,
  },
  {
    id: 6,
    name: 'Seth Rollins',
    nickname: 'The Visionary',
    initials: 'SR',
    gradientFrom: '#9e9e9e',
    gradientTo: '#424242',
    championships: 4,
    hometown: 'Davenport, IA',
    height: "6'1\"",
    weight: '217 lbs',
    signatureMoves: ['Curb Stomp', 'Pedigree'],
    era: 'Modern Era',
    bio: "Seth Rollins reinvented himself multiple times, from The Shield architect to Monday Night Messiah to the flamboyant Visionary. A versatile champion who can do it all.",
    active: true,
  },
  {
    id: 7,
    name: 'Becky Lynch',
    nickname: 'The Man',
    initials: 'BL',
    gradientFrom: '#e65100',
    gradientTo: '#bf360c',
    championships: 4,
    hometown: 'Limerick, Ireland',
    height: "5'6\"",
    weight: '135 lbs',
    signatureMoves: ['Dis-Arm-Her', 'Manhandle Slam'],
    era: 'Modern Era',
    bio: "Becky Lynch rose from underdog to 'The Man,' headlining WrestleMania 35 in the first women's main event. A 4-time champion who revolutionized women's wrestling.",
    active: true,
  },
  {
    id: 8,
    name: 'Randy Orton',
    nickname: 'The Viper',
    initials: 'RO',
    gradientFrom: '#6a1b9a',
    gradientTo: '#1a0a2e',
    championships: 14,
    hometown: 'Knoxville, TN',
    height: "6'5\"",
    weight: '247 lbs',
    signatureMoves: ['RKO', 'Punt Kick'],
    era: 'Modern Era',
    bio: "Randy Orton is a 14-time world champion known for striking out of nowhere. The Legend Killer turned Legend, his RKO is the most iconic finisher in WWE history.",
    active: true,
  },
];
