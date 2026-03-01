import type { Attraction, MetroStation, MetroLine, Hotel } from '@/types';

export const attractions: Attraction[] = [
  // ==================== TOKYO ====================
  // Templi e Spiritualità
  {
  id: 'kagurazaka',
  name: 'Kagurazaka',
  nameJp: '神楽坂',
  city: 'tokyo',
  type: 'culture',
  duration: '2-3 ore',
  price: 0,
  coordinates: [35.7023, 139.7384],
  description: 'Quartiere collinare chiamato “la piccola Parigi” di Tokyo, con vicoli lastricati, ristoranti francesi e piccole izakaya.',
  image: 'https://images.unsplash.com/photo-1517335454264-0eeb3613b9a5?w=800'
},
{
  id: 'kiyosumi-garden',
  name: 'Kiyosumi Garden',
  nameJp: '清澄庭園',
  city: 'tokyo',
  type: 'park',
  duration: '1-2 ore',
  price: 150,
  coordinates: [35.6793, 139.8005],
  description: 'Giardino giapponese in stile passeggiata attorno al lago, perfetto per una pausa tranquilla nel quartiere di Kiyosumi-Shirakawa.',
  image: 'https://www.japan-guide.com/g18/3054_001.jpg'
},
{
  id: 'kiyosumi-shirakawa',
  name: 'Kiyosumi-Shirakawa',
  nameJp: '清澄白河',
  city: 'tokyo',
  type: 'culture',
  duration: '2-3 ore',
  price: 0,
  coordinates: [35.6806, 139.8062],
  description: 'Zona residenziale diventata famosa per le torrefazioni di caffè, gallerie d’arte e atmosfera rilassata lungo i canali.',
  image: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=800'
},
{
  id: 'gotokuji',
  name: 'Gotoku-ji',
  nameJp: '豪徳寺',
  city: 'tokyo',
  type: 'temple',
  duration: '1-2 ore',
  price: 0,
  coordinates: [35.6533, 139.6427],
  description: 'Tempio buddhista noto per le centinaia di statuette maneki-neko, il gatto portafortuna bianco con zampa alzata.',
  image: 'https://www.japan-guide.com/g18/3079_001.jpg'
},
{
  id: 'jinbocho',
  name: 'Jinbōchō',
  nameJp: '神保町',
  city: 'tokyo',
  type: 'culture',
  duration: '2-3 ore',
  price: 0,
  coordinates: [35.6958, 139.7574],
  description: 'Quartiere delle librerie dell’usato e dei manga d’epoca, pieno di caffè vecchio stile e ristoranti economici.',
  image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=800'
},
  {
  id: 'murin-an',
  name: 'Murin-an',
  nameJp: '無鄰菴',
  city: 'kyoto',
  type: 'garden',
  duration: '1-2 ore',
  price: 600,
  coordinates: [35.0123, 135.7917],
  description: 'Giardino paesaggistico di fine Ottocento, nascosto ai piedi delle Higashiyama, con casa da tè e piccoli corsi d’acqua.',
  image: 'https://www.japan-guide.com/g18/3940_001.jpg'
},
{
  id: 'shoseien',
  name: 'Shoseien Garden',
  nameJp: '渉成園',
  city: 'kyoto',
  type: 'garden',
  duration: '1-2 ore',
  price: 500,
  coordinates: [34.9893, 135.7679],
  description: 'Giardino segreto dietro al tempio Higashi Hongan-ji, con stagni, ponti e padiglioni tradizionali lontani dalla folla.',
  image: 'https://www.japan-guide.com/g18/3925_001.jpg'
},
{
  id: 'otagi-nenbutsuji',
  name: 'Otagi Nenbutsu-ji',
  nameJp: '愛宕念仏寺',
  city: 'kyoto',
  type: 'temple',
  duration: '1-2 ore',
  price: 300,
  coordinates: [35.0244, 135.6601],
  description: 'Piccolo tempio ad Arashiyama con oltre 1.000 statue di rakan scolpite, ciascuna con espressione buffa diversa.',
  image: 'https://www.japan-guide.com/g18/3999_001.jpg'
},
{
  id: 'kenninji',
  name: 'Kennin-ji',
  nameJp: '建仁寺',
  city: 'kyoto',
  type: 'temple',
  duration: '1-2 ore',
  price: 600,
  coordinates: [35.0009, 135.7742],
  description: 'Uno dei templi zen più antichi di Kyoto, famoso per i dipinti dei draghi gemelli sul soffitto e i giardini interni.',
  image: 'https://www.japan-guide.com/g18/3928_001.jpg'
},
{
  id: 'matsuo-taisha',
  name: 'Matsuo Taisha',
  nameJp: '松尾大社',
  city: 'kyoto',
  type: 'shrine',
  duration: '1-2 ore',
  price: 0,
  coordinates: [34.9942, 135.6867],
  description: 'Santuario dedicato al dio del sake, con lanterne in pietra e piccoli giardini, poco frequentato dai turisti.',
  image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'
},
  {
  id: 'nakazakicho',
  name: 'Nakazakichō',
  nameJp: '中崎町',
  city: 'osaka',
  type: 'culture',
  duration: '2-3 ore',
  price: 0,
  coordinates: [34.7074, 135.5084],
  description: 'Quartiere di vicoli stretti vicino a Umeda, pieno di caffè vintage, piccole gallerie e negozi di artigianato.',
  image: 'https://images.unsplash.com/photo-1538998073820-4b2cddc4fc89?w=800'
},
{
  id: 'tenjinbashisuji',
  name: 'Tenjinbashisuji Shopping Street',
  nameJp: '天神橋筋商店街',
  city: 'osaka',
  type: 'shopping',
  duration: '2-3 ore',
  price: 0,
  coordinates: [34.7041, 135.5120],
  description: 'Una delle gallerie commerciali coperte più lunghe del Giappone, piena di negozi locali e ristorantini economici.',
  image: 'https://www.japan-guide.com/g18/4065_001.jpg'
},
{
  id: 'hozenji-yokocho',
  name: 'Hozenji Yokocho',
  nameJp: '法善寺横丁',
  city: 'osaka',
  type: 'culture',
  duration: '1-2 ore',
  price: 0,
  coordinates: [34.6683, 135.5031],
  description: 'Vicolo di pietra illuminato da lanterne, con il piccolo tempio Hozen-ji e ristorantini intimi vicino a Dotonbori.',
  image: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-10/dotonbori-guide_6.jpg?itok=MNg2Rx7p'
},
{
  id: 'sumiyoshi-park',
  name: 'Sumiyoshi Park',
  nameJp: '住吉公園',
  city: 'osaka',
  type: 'park',
  duration: '1-2 ore',
  price: 0,
  coordinates: [34.6110, 135.4924],
  description: 'Parco tranquillo vicino al santuario Sumiyoshi Taisha, con stagni e sentieri alberati ideali per una passeggiata.',
  image: 'https://www.japan-guide.com/g18/4007_top.jpg'
},
{
  id: 'uemachi-plateau',
  name: 'Uemachi Plateau Walk',
  nameJp: '上町台地散策',
  city: 'osaka',
  type: 'viewpoint',
  duration: '2-3 ore',
  price: 0,
  coordinates: [34.6765, 135.5210],
  description: 'Passeggiata sulle lievi alture di Uemachi, tra piccoli templi, santuari e scorci silenziosi sopra la città moderna.',
  image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800'
},
  {
  id: 'jiyugaoka',
  name: 'Jiyugaoka',
  nameJp: '自由が丘',
  city: 'tokyo',
  type: 'shopping',
  duration: '2-3 ore',
  price: 0,
  coordinates: [35.6075, 139.6681],
  description: 'Quartiere residenziale elegante con caffè, pasticcerie europee e boutique di design, perfetto per un pomeriggio tranquillo.',
  image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800'
},
{
  id: 'oimachi',
  name: 'Ōimachi',
  nameJp: '大井町',
  city: 'tokyo',
  type: 'culture',
  duration: '2 ore',
  price: 0,
  coordinates: [35.6072, 139.7344],
  description: 'Zona di Tokyo meno turistica con izakaya locali, bagni pubblici e un’atmosfera quotidiana autentica.',
  image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800'
},
{
  id: 'monzen-nakacho',
  name: 'Monzen-Nakachō',
  nameJp: '門前仲町',
  city: 'tokyo',
  type: 'culture',
  duration: '2-3 ore',
  price: 0,
  coordinates: [35.6715, 139.8007],
  description: 'Quartiere tradizionale con il tempio Fukagawa Fudō-dō e il santuario Tomioka Hachimangū, pieno di piccole izakaya.',
  image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800'
},
{
  id: 'fukagawa-edo-museum',
  name: 'Fukagawa Edo Museum',
  nameJp: '深川江戸資料館',
  city: 'tokyo',
  type: 'museum',
  duration: '1-2 ore',
  price: 400,
  coordinates: [35.6787, 139.8029],
  description: 'Museo che ricostruisce un quartiere di Edo in scala reale, con case, vicoli e atmosfera del periodo.',
  image: 'https://www.japan-guide.com/g18/3070_001.jpg'
},
{
  id: 'sumida-park',
  name: 'Sumida Park',
  nameJp: '隅田公園',
  city: 'tokyo',
  type: 'park',
  duration: '1-2 ore',
  price: 0,
  coordinates: [35.7105, 139.8039],
  description: 'Parco lungo il fiume Sumida con vista sulla Tokyo Skytree, molto suggestivo durante la fioritura dei ciliegi.',
  image: 'https://www.japan-guide.com/g18/3057_001.jpg'
},
{
  id: 'hama-rikyu',
  name: 'Hama-rikyū Gardens',
  nameJp: '浜離宮恩賜庭園',
  city: 'tokyo',
  type: 'park',
  duration: '1-2 ore',
  price: 300,
  coordinates: [35.6590, 139.7635],
  description: 'Giardino feudale sul mare con laghetti d’acqua salata e casa da tè, oasi verde accanto ai grattacieli di Shiodome.',
  image: 'https://www.japan-guide.com/g18/3009_002.jpg'
},
{
  id: 'odaiba-onsen',
  name: 'Oedo Onsen Monogatari (area ex)',
  nameJp: '大江戸温泉物語エリア',
  city: 'tokyo',
  type: 'entertainment',
  duration: '2-3 ore',
  price: 0,
  coordinates: [35.6190, 139.7753],
  description: 'Zona onsen/ricreativa di Odaiba, con bagni termali artificiali, ristoranti e atmosfera da matsuri serale.',
  image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800'
},
{
  id: 'odaiba-beach',
  name: 'Odaiba Seaside Park',
  nameJp: 'お台場海浜公園',
  city: 'tokyo',
  type: 'park',
  duration: '1-2 ore',
  price: 0,
  coordinates: [35.6311, 139.7765],
  description: 'Spiaggia artificiale con passeggiata sul mare, vista sul Rainbow Bridge e skyline di Tokyo.',
  image: 'https://www.japan-guide.com/g18/3008_001.jpg'
},
{
  id: 'happoen',
  name: 'Happō-en',
  nameJp: '八芳園',
  city: 'tokyo',
  type: 'garden',
  duration: '1-2 ore',
  price: 0,
  coordinates: [35.6377, 139.7273],
  description: 'Giardino giapponese curatissimo usato per matrimoni, con stagni, bonsai secolari e casa da tè.',
  image: 'https://www.japan-guide.com/g18/3007_001.jpg'
},
{
  id: 'odaiba-museum-science',
  name: 'Miraikan – National Museum of Emerging Science',
  nameJp: '日本科学未来館',
  city: 'tokyo',
  type: 'museum',
  duration: '2-3 ore',
  price: 630,
  coordinates: [35.6199, 139.7769],
  description: 'Museo della scienza interattivo a Odaiba, con robotica, spazio, ambiente e il famoso robot Asimo.',
  image: 'https://www.japan-guide.com/g18/3023_001.jpg'
},
  {
  id: 'higashi-honganji',
  name: 'Higashi Hongan-ji',
  nameJp: '東本願寺',
  city: 'kyoto',
  type: 'temple',
  duration: '1 ora',
  price: 0,
  coordinates: [34.9899, 135.7608],
  description: 'Grande tempio vicino alla stazione di Kyoto, con enormi sale in legno e atmosfera raccolta.',
  image: 'https://www.japan-guide.com/g18/3911_001.jpg'
},
{
  id: 'nishi-honganji',
  name: 'Nishi Hongan-ji',
  nameJp: '西本願寺',
  city: 'kyoto',
  type: 'temple',
  duration: '1 ora',
  price: 0,
  coordinates: [34.9916, 135.7526],
  description: 'Tempio patrimonio UNESCO con splendide decorazioni in legno e giardini interni.',
  image: 'https://www.japan-guide.com/g18/3912_001.jpg'
},
{
  id: 'to-ji',
  name: 'Tō-ji',
  nameJp: '東寺',
  city: 'kyoto',
  type: 'temple',
  duration: '1-2 ore',
  price: 500,
  coordinates: [34.9803, 135.7478],
  description: 'Tempio con pagoda a cinque piani, mercato delle pulci mensile e importanti statue buddhiste.',
  image: 'https://www.japan-guide.com/g18/3907_001.jpg'
},
{
  id: 'ohara-sanzenin',
  name: 'Sanzen-in (Ōhara)',
  nameJp: '三千院',
  city: 'kyoto',
  type: 'temple',
  duration: '2-3 ore',
  price: 700,
  coordinates: [35.1125, 135.8304],
  description: 'Tempio nella valle di Ōhara, circondato da muschio e piccoli jizō, ideale per una mezza giornata fuori dal centro.',
  image: 'https://www.japan-guide.com/g18/3998_001.jpg'
},
{
  id: 'ohara-town',
  name: 'Villaggio di Ōhara',
  nameJp: '大原',
  city: 'kyoto',
  type: 'nature',
  duration: '3-4 ore',
  price: 0,
  coordinates: [35.1100, 135.8300],
  description: 'Area rurale a nord-est di Kyoto, con risaie, templi di montagna e cucina locale tradizionale.',
  image: 'https://images.unsplash.com/photo-1570774425267-f2e1da7981e9?w=800'
},
{
  id: 'takao-jingoji',
  name: 'Jingo-ji (Takao)',
  nameJp: '神護寺',
  city: 'kyoto',
  type: 'temple',
  duration: '2-3 ore',
  price: 600,
  coordinates: [35.0514, 135.6770],
  description: 'Tempio di montagna a Takao, famoso per i colori autunnali e le viste sulla valle.',
  image: 'https://www.japan-guide.com/g18/3997_001.jpg'
},
{
  id: 'takao-town',
  name: 'Takao',
  nameJp: '高雄',
  city: 'kyoto',
  type: 'nature',
  duration: '3-4 ore',
  price: 0,
  coordinates: [35.0500, 135.6800],
  description: 'Zona montuosa a ovest di Kyoto con fiume, ponti e sentieri, perfetta per una giornata fuori città.',
  image: 'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=800'
},
{
  id: 'kitano-tenmangu',
  name: 'Kitano Tenmangū',
  nameJp: '北野天満宮',
  city: 'kyoto',
  type: 'shrine',
  duration: '1-2 ore',
  price: 0,
  coordinates: [35.0300, 135.7355],
  description: 'Santuario dedicato al dio degli studi, famoso per i prugni in fiore e il mercato delle pulci mensile.',
  image: 'https://www.japan-guide.com/g18/3920_001.jpg'
},
{
  id: 'kamigamo-jinja',
  name: 'Kamigamo-jinja',
  nameJp: '上賀茂神社',
  city: 'kyoto',
  type: 'shrine',
  duration: '1-2 ore',
  price: 0,
  coordinates: [35.0604, 135.7479],
  description: 'Antico santuario patrimonio UNESCO a nord di Kyoto, con ampi spazi erbosi e corsi d’acqua.',
  image: 'https://www.japan-guide.com/g18/3921_001.jpg'
},
{
  id: 'shimogamo-jinja',
  name: 'Shimogamo-jinja',
  nameJp: '下鴨神社',
  city: 'kyoto',
  type: 'shrine',
  duration: '1-2 ore',
  price: 0,
  coordinates: [35.0393, 135.7727],
  description: 'Santuario immerso in una foresta sacra alle porte del fiume Kamogawa, ideale per una passeggiata nel verde.',
  image: 'https://www.japan-guide.com/g18/3922_001.jpg'
},
  {
  id: 'osaka-tenmangu',
  name: 'Osaka Tenmangū',
  nameJp: '大阪天満宮',
  city: 'osaka',
  type: 'shrine',
  duration: '1-2 ore',
  price: 0,
  coordinates: [34.6975, 135.5125],
  description: 'Santuario nel quartiere Tenma, famoso per il festival Tenjin Matsuri e le vie piene di izakaya.',
  image: 'https://www.japan-guide.com/g18/4010_001.jpg'
},
{
  id: 'tenma-market',
  name: 'Tenma Market Area',
  nameJp: '天満市場エリア',
  city: 'osaka',
  type: 'food',
  duration: '2-3 ore',
  price: 0,
  coordinates: [34.7000, 135.5125],
  description: 'Zona di piccoli ristoranti e bar sotto i binari, perfetta per provare piatti locali lontano dalle zone turistiche.',
  image: 'https://images.unsplash.com/photo-1534448311378-1e193fb2570e?w=800'
},
{
  id: 'sennichimae-dori',
  name: 'Sennichimae-dori',
  nameJp: '千日前通り',
  city: 'osaka',
  type: 'food',
  duration: '1-2 ore',
  price: 0,
  coordinates: [34.6669, 135.5025],
  description: 'Via piena di ristoranti, sale giochi e piccoli teatri, parallela a Dotonbori ma meno caotica.',
  image: 'https://images.unsplash.com/photo-1582503073935-f8b9a900a46c?w=800'
},
{
  id: 'nakano-shima-park',
  name: 'Nakanoshima Park',
  nameJp: '中之島公園',
  city: 'osaka',
  type: 'park',
  duration: '1-2 ore',
  price: 0,
  coordinates: [34.6917, 135.5076],
  description: 'Parco sull’isola di Nakanoshima tra due fiumi, con roseto, edifici storici e vista sul centro moderno.',
  image: 'https://www.japan-guide.com/g18/4050_001.jpg'
},
{
  id: 'osaka-city-central-hall',
  name: 'Osaka City Central Public Hall',
  nameJp: '大阪市中央公会堂',
  city: 'osaka',
  type: 'culture',
  duration: '1 ora',
  price: 0,
  coordinates: [34.6924, 135.5066],
  description: 'Edificio storico in stile europeo a Nakanoshima, spesso illuminato di sera.',
  image: 'https://www.japan-guide.com/g18/4051_001.jpg'
},
{
  id: 'abeno-harukas',
  name: 'Abeno Harukas',
  nameJp: 'あべのハルカス',
  city: 'osaka',
  type: 'viewpoint',
  duration: '1-2 ore',
  price: 1500,
  coordinates: [34.6457, 135.5138],
  description: 'Grattacielo più alto del Giappone, con osservatorio panoramico Harukas 300 e grande centro commerciale.',
  image: 'https://www.japan-guide.com/g18/4006_001.jpg'
},
{
  id: 'abeno-town',
  name: 'Abeno District',
  nameJp: '阿倍野',
  city: 'osaka',
  type: 'shopping',
  duration: '2-3 ore',
  price: 0,
  coordinates: [34.6450, 135.5130],
  description: 'Zona moderna attorno alla stazione Tennoji/Abeno, con grandi magazzini, ristoranti e accesso a Spa World.',
  image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800'
},
{
  id: 'suminoe-park',
  name: 'Suminoe Park',
  nameJp: '住之江公園',
  city: 'osaka',
  type: 'park',
  duration: '1-2 ore',
  price: 0,
  coordinates: [34.6034, 135.4827],
  description: 'Grande parco nel sud di Osaka con laghi, campi sportivi e percorsi nel verde.',
  image: 'https://www.japan-guide.com/g18/4008_001.jpg'
},
{
  id: 'maishima-island',
  name: 'Maishima Island',
  nameJp: '舞洲',
  city: 'osaka',
  type: 'nature',
  duration: '3-4 ore',
  price: 0,
  coordinates: [34.6660, 135.4150],
  description: 'Isola nella baia di Osaka con parchi, strutture sportive e vista sul tramonto sul mare interno.',
  image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
},
{
  id: 'tempozan-ferris-wheel',
  name: 'Tempozan Giant Ferris Wheel',
  nameJp: '天保山大観覧車',
  city: 'osaka',
  type: 'viewpoint',
  duration: '1 ora',
  price: 800,
  coordinates: [34.6553, 135.4304],
  description: 'Grande ruota panoramica vicino all’acquario Kaiyukan, con vista sulla baia e sul porto di Osaka.',
  image: 'https://www.japan-guide.com/g18/4005_001.jpg'
},
  // ==================== DAY TRIPS DA TOKYO (treno A/R in giornata) ====================

{
  id: 'kamakura-daibutsu',
  name: 'Kamakura Daibutsu (Kotoku-in)',
  nameJp: '鎌倉大仏（高徳院）',
  city: 'kamakura',
  type: 'temple',
  duration: '1-2 ore',
  price: 300,
  coordinates: [35.3167, 139.5353],
  description: 'Grande statua in bronzo del Buddha, simbolo di Kamakura e tappa classica in giornata da Tokyo.',
  image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800'
},
{
  id: 'kamakura-hasedera',
  name: 'Hase-dera',
  nameJp: '長谷寺',
  city: 'kamakura',
  type: 'temple',
  duration: '1-2 ore',
  price: 400,
  coordinates: [35.3125, 139.5342],
  description: 'Tempio con terrazze panoramiche, giardini e atmosfera molto suggestiva (soprattutto in primavera).',
  image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800'
},
{
  id: 'kamakura-tsurugaoka-hachimangu',
  name: 'Tsurugaoka Hachimangu',
  nameJp: '鶴岡八幡宮',
  city: 'kamakura',
  type: 'shrine',
  duration: '1-2 ore',
  price: 0,
  coordinates: [35.3252, 139.5567],
  description: 'Santuario principale di Kamakura, al centro dell’antica città dei samurai, con viali e scalinate scenografiche.',
  image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800'
},
{
  id: 'enoshima-island',
  name: 'Enoshima',
  nameJp: '江の島',
  city: 'enoshima',
  type: 'nature',
  duration: '3-4 ore',
  price: 0,
  coordinates: [35.2999, 139.4803],
  description: 'Isola sul mare spesso abbinata a Kamakura: passeggiata costiera, santuari, grotte e tramonto sul Pacifico.',
  image: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=800'
},
{
  id: 'yokohama-minatomirai',
  name: 'Minato Mirai 21',
  nameJp: 'みなとみらい21',
  city: 'yokohama',
  type: 'entertainment',
  duration: '3-4 ore',
  price: 0,
  coordinates: [35.4586, 139.6329],
  description: 'Waterfront moderno di Yokohama con skyline, shopping, passeggiate sul porto e tante opzioni per la sera.',
  image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'
},
{
  id: 'yokohama-chinatown',
  name: 'Yokohama Chinatown',
  nameJp: '横浜中華街',
  city: 'yokohama',
  type: 'food',
  duration: '2-3 ore',
  price: 0,
  coordinates: [35.4437, 139.6449],
  description: 'Uno dei quartieri cinesi più grandi del Giappone, perfetto per street food e cena prima del rientro.',
  image: 'https://images.unsplash.com/photo-1534448311378-1e193fb2570e?w=800'
},
{
  id: 'hakone-open-air-museum',
  name: 'Hakone Open-Air Museum',
  nameJp: '彫刻の森美術館',
  city: 'hakone',
  type: 'museum',
  duration: '2-3 ore',
  price: 2000,
  coordinates: [35.2433, 139.0506],
  description: 'Museo all’aperto tra montagne e sculture, una delle tappe migliori per una giornata a Hakone.',
  image: 'https://www.japan-guide.com/g18/3023_001.jpg'
},
{
  id: 'hakone-lake-ashi',
  name: 'Lake Ashi (Ashi-no-ko)',
  nameJp: '芦ノ湖',
  city: 'hakone',
  type: 'nature',
  duration: '2-3 ore',
  price: 0,
  coordinates: [35.2048, 139.0210],
  description: 'Lago panoramico di Hakone con viste sul Fuji nelle giornate limpide e possibilità di mini-crociera.',
  image: 'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=800'
},
{
  id: 'nikko-toshogu',
  name: 'Nikko Toshogu',
  nameJp: '日光東照宮',
  city: 'nikko',
  type: 'temple',
  duration: '2-3 ore',
  price: 1600,
  coordinates: [36.7570, 139.5986],
  description: 'Santuario riccamente decorato tra i boschi, uno dei siti più famosi di Nikko per una gita culturale da Tokyo.',
  image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800'
},
{
  id: 'nikko-shinkyo-bridge',
  name: 'Shinkyo Bridge',
  nameJp: '神橋',
  city: 'nikko',
  type: 'culture',
  duration: '30-60 min',
  price: 300,
  coordinates: [36.7486, 139.5997],
  description: 'Ponte rosso iconico all’ingresso dell’area dei santuari di Nikko, perfetto per foto e passeggiata.',
  image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'
},
{
  id: 'kawaguchiko-lake',
  name: 'Lake Kawaguchi (Fuji Five Lakes)',
  nameJp: '河口湖',
  city: 'fujikawaguchiko',
  type: 'nature',
  duration: '4-6 ore',
  price: 0,
  coordinates: [35.5171, 138.7514],
  description: 'Uno dei “Fuji Five Lakes”, ottimo per vedere il Monte Fuji e fare una giornata nella natura fuori Tokyo.',
  image: 'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=800'
},
{
  id: 'mt-takao',
  name: 'Mount Takao',
  nameJp: '高尾山',
  city: 'hachioji',
  type: 'nature',
  duration: '4-6 ore',
  price: 0,
  coordinates: [35.6250, 139.2431],
  description: 'Montagna facile da raggiungere da Tokyo con sentieri, punti panoramici e atmosfera da “escape” nel verde.',
  image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800'
},
{
  id: 'kawagoe-edo-town',
  name: 'Kawagoe (Little Edo)',
  nameJp: '川越',
  city: 'kawagoe',
  type: 'culture',
  duration: '3-4 ore',
  price: 0,
  coordinates: [35.9251, 139.4858],
  description: 'Cittadina storica vicino Tokyo famosa per magazzini in stile Edo, dolci tradizionali e strade fotogeniche.',
  image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'
},

// ==================== DAY TRIPS DA KYOTO/OSAKA (treno A/R in giornata) ====================

{
  id: 'uji-byodoin',
  name: 'Byodo-in',
  nameJp: '平等院',
  city: 'uji',
  type: 'temple',
  duration: '1-2 ore',
  price: 600,
  coordinates: [34.8893, 135.8070],
  description: 'Tempio famoso per il Phoenix Hall, perfetto per una mezza giornata da Kyoto con treno locale.',
  image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'
},
{
  id: 'uji-tea-streets',
  name: 'Uji Tea Streets',
  nameJp: '宇治茶の町並み',
  city: 'uji',
  type: 'food',
  duration: '2-3 ore',
  price: 0,
  coordinates: [34.8899, 135.8066],
  description: 'Passeggiata tra negozi e case del tè: matcha, dolci e piccole botteghe tradizionali.',
  image: 'https://images.unsplash.com/photo-1534448311378-1e193fb2570e?w=800'
},
{
  id: 'himeji-castle',
  name: 'Himeji Castle',
  nameJp: '姫路城',
  city: 'himeji',
  type: 'castle',
  duration: '3-4 ore',
  price: 1000,
  coordinates: [34.8394, 134.6939],
  description: 'Il castello più famoso e meglio conservato del Giappone, ottima gita in giornata con treni veloci da Kyoto/Osaka.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Himeji_Castle_The_Keep_Towers.jpg'
},
{
  id: 'kobe-harborland',
  name: 'Kobe Harborland',
  nameJp: '神戸ハーバーランド',
  city: 'kobe',
  type: 'entertainment',
  duration: '2-3 ore',
  price: 0,
  coordinates: [34.6795, 135.1855],
  description: 'Waterfront di Kobe con passeggiate sul porto, shopping e cena facile prima del rientro in serata.',
  image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800'
},
{
  id: 'kobe-nunobiki-ropeway',
  name: 'Kobe Nunobiki Herb Gardens (Ropeway)',
  nameJp: '神戸布引ハーブ園（ロープウェイ）',
  city: 'kobe',
  type: 'viewpoint',
  duration: '2-3 ore',
  price: 1800,
  coordinates: [34.7130, 135.1951],
  description: 'Salita panoramica in funivia sopra Kobe, giardini e viste sulla baia.',
  image: 'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=800'
},
{
  id: 'otsu-lake-biwa',
  name: 'Lake Biwa (Otsu)',
  nameJp: '琵琶湖（大津）',
  city: 'otsu',
  type: 'nature',
  duration: '2-4 ore',
  price: 0,
  coordinates: [35.0170, 135.8549],
  description: 'Gita facile da Kyoto: lungolago, atmosfera rilassata e tramonti molto belli sul lago più grande del Giappone.',
  image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800'
},
{
  id: 'hikone-castle',
  name: 'Hikone Castle',
  nameJp: '彦根城',
  city: 'hikone',
  type: 'castle',
  duration: '2-3 ore',
  price: 1000,
  coordinates: [35.2766, 136.2518],
  description: 'Castello storico sul lago Biwa, perfetto come day trip “castello + passeggiata” da Kyoto.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Hikone_Castle_Keep.jpg'
},
{
  id: 'amanohashidate-sandbar',
  name: 'Amanohashidate',
  nameJp: '天橋立',
  city: 'amanohashidate',
  type: 'nature',
  duration: '5-7 ore',
  price: 0,
  coordinates: [35.5645, 135.1881],
  description: 'Lingua di sabbia tra mare e baia: una delle “tre vedute” del Giappone, raggiungibile in giornata con treni da Kyoto/Osaka.',
  image: 'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=800'
},
{
  id: 'hiroshima-peace-park',
  name: 'Hiroshima Peace Memorial Park',
  nameJp: '広島平和記念公園',
  city: 'hiroshima',
  type: 'culture',
  duration: '2-4 ore',
  price: 0,
  coordinates: [34.3955, 132.4536],
  description: 'Parco della memoria nel centro di Hiroshima, visita intensa ma molto significativa in un day trip in shinkansen.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Hiroshima_Peace_Memorial_Park_01.jpg'
},
{
  id: 'hiroshima-atomic-dome',
  name: 'Atomic Bomb Dome',
  nameJp: '原爆ドーム',
  city: 'hiroshima',
  type: 'culture',
  duration: '30-60 min',
  price: 0,
  coordinates: [34.3955, 132.4536],
  description: 'Edificio simbolo e sito UNESCO, vicino al Peace Memorial Park, tappa centrale della visita.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Genbaku_Dome04-r.jpg'
},
{
  id: 'kanazawa-kenrokuen',
  name: 'Kenroku-en',
  nameJp: '兼六園',
  city: 'kanazawa',
  type: 'park',
  duration: '2-3 ore',
  price: 320,
  coordinates: [36.5621, 136.6623],
  description: 'Uno dei giardini paesaggistici più celebri del Giappone, ottimo per una giornata a Kanazawa.',
  image: 'https://www.japan-guide.com/g18/3909_01.jpg'
},
{
  id: 'kanazawa-higashi-chaya',
  name: 'Higashi Chaya District',
  nameJp: 'ひがし茶屋街',
  city: 'kanazawa',
  type: 'culture',
  duration: '2-3 ore',
  price: 0,
  coordinates: [36.5713, 136.6706],
  description: 'Quartiere storico con case da tè, stradine tradizionali e locali dove provare dolci e tè.',
  image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'
},
  
  {
    id: 'sensoji',
    name: 'Senso-ji',
    nameJp: '浅草寺',
    city: 'tokyo',
    type: 'temple',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.7148, 139.7967],
    description: 'Tempio buddista più antico di Tokyo, situato nel quartiere di Asakusa.',
    image: 'https://www.japan365days.com/img/tokyo/sensoji_temple/sensoji-temple-asakusa-tokyo.jpg'
  },
  {
    id: 'meiji-jingu',
    name: 'Meiji Jingu',
    nameJp: '明治神宮',
    city: 'tokyo',
    type: 'temple',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.6764, 139.6993],
    description: 'Santuario shintoista dedicato all\'imperatore Meiji.',
    image: 'https://www.meijijingu.or.jp/en/about/images/about_img01.jpg'
  },
  {
    id: 'nezu-shrine',
    name: 'Nezu Shrine',
    nameJp: '根津神社',
    city: 'tokyo',
    type: 'temple',
    duration: '1 ora',
    price: 0,
    coordinates: [35.7203, 139.7595],
    description: 'Santuario storico con tunnel di torii gates e giardino di azalee.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800'
  },
  
  // Icone e Panorami
  {
    id: 'tokyo-tower',
    name: 'Tokyo Tower',
    nameJp: '東京タワー',
    city: 'tokyo',
    type: 'entertainment',
    duration: '1-2 ore',
    price: 1200,
    coordinates: [35.6586, 139.7454],
    description: 'Iconica torre di comunicazione e punto panoramico.',
    image: 'https://www.japanistry.com/wp-content/uploads/2017/09/Tokyo-Tower-from-Chuo-Dori-v02.jpg'
  },
  {
    id: 'tokyo-skytree',
    name: 'Tokyo Skytree',
    nameJp: '東京スカイツリー',
    city: 'tokyo',
    type: 'entertainment',
    duration: '2 ore',
    price: 2100,
    coordinates: [35.7100, 139.8107],
    description: 'Torre di trasmissione più alta del mondo con vista panoramica.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg'
  },
  {
    id: 'roppongi-hills',
    name: 'Roppongi Hills',
    nameJp: '六本木ヒルズ',
    city: 'tokyo',
    type: 'entertainment',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.6604, 139.7292],
    description: 'Complesso con osservatorio Sky Deck, musei e ristoranti.',
    image: 'https://www.japan-guide.com/g18/3031_hills_01.jpg'
  },
  {
    id: 'odaiba-gundam',
    name: 'Odaiba Gundam',
    nameJp: 'お台場ガンダム',
    city: 'tokyo',
    type: 'entertainment',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.6259, 139.7764],
    description: 'Statua gigante del Gundam e zona divertimenti sull\'isola artificiale.',
    image: 'https://www.japan-experience.com/sites/default/files/images/content_images/odaiba20193.jpg'
  },
  
  // Strade Iconiche e Quartieri
  {
    id: 'shibuya-crossing',
    name: 'Shibuya Crossing',
    nameJp: '渋谷スクランブル交差点',
    city: 'tokyo',
    type: 'entertainment',
    duration: '30 min',
    price: 0,
    coordinates: [35.6595, 139.7004],
    description: 'Incrocio pedonale più famoso del mondo.',
    image: 'https://static.wixstatic.com/media/nsplsh_36554c7933707875784c38~mv2_d_4997_3084_s_4_2.jpg/v1/fill/w_1000,h_617,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_36554c7933707875784c38~mv2_d_4997_3084_s_4_2.jpg'
  },
  {
    id: 'takeshita-street',
    name: 'Takeshita Street',
    nameJp: '竹下通り',
    city: 'tokyo',
    type: 'shopping',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.6715, 139.7031],
    description: 'Strada iconica di Harajuku con moda giovanile e street food.',
    image: 'https://cdn.prod.rexby.com/image/3bc2c8a7dafe4c2187183ebf6e1b84ff?format=webp&width=1080&height=1350'
  },
  {
    id: 'shinjuku-golden-gai',
    name: 'Shinjuku Golden Gai',
    nameJp: '新宿ゴールデン街',
    city: 'tokyo',
    type: 'food',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.6940, 139.7040],
    description: 'Labirinto di vicoli con oltre 200 micro-bar tradizionali.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ee/c0/d7/img-20191104-181904-largejpg.jpg?w=900&h=500&s=1'
  },
  {
    id: 'yanaka-ginza',
    name: 'Yanaka Ginza',
    nameJp: '谷中銀座',
    city: 'tokyo',
    type: 'shopping',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.7275, 139.7693],
    description: 'Quartiere tradizionale con negozi vintage e atmosfera Showa.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'
  },
  
  // Shopping
  {
    id: 'ginza',
    name: 'Ginza',
    nameJp: '銀座',
    city: 'tokyo',
    type: 'shopping',
    duration: '3-4 ore',
    price: 0,
    coordinates: [35.6717, 139.7650],
    description: 'Quartiere dello shopping di lusso.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800'
  },
  {
    id: 'akihabara',
    name: 'Akihabara',
    nameJp: '秋葉原',
    city: 'tokyo',
    type: 'shopping',
    duration: '3-4 ore',
    price: 0,
    coordinates: [35.6984, 139.7731],
    description: 'Quartiere dell\'elettronica, manga, anime e cultura otaku.',
    image: 'https://thumbs.dreamstime.com/b/tokyo-japan-november-neon-lights-billboard-advertisements-buildings-akihabara-rainy-night-shopping-district-138032918.jpg'
  },
  {
    id: 'nakano-broadway',
    name: 'Nakano Broadway',
    nameJp: '中野ブロードウェイ',
    city: 'tokyo',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.7061, 139.6656],
    description: 'Paradiso per collezionisti di manga, anime e oggetti vintage.',
    image: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800'
  },
  
  // Parchi e Natura
  {
    id: 'ueno-park',
    name: 'Ueno Park',
    nameJp: '上野公園',
    city: 'tokyo',
    type: 'park',
    duration: '3-4 ore',
    price: 0,
    coordinates: [35.7155, 139.7740],
    description: 'Grande parco con musei, zoo e laghi.',
    image: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2014/11/ueno-cherry-blossom-GettyImages-1996449432.jpeg'
  },
  {
    id: 'shinjuku-gyoen',
    name: 'Shinjuku Gyoen',
    nameJp: '新宿御苑',
    city: 'tokyo',
    type: 'park',
    duration: '2-3 ore',
    price: 500,
    coordinates: [35.6852, 139.7100],
    description: 'Bellissimo parco con giardini tradizionali.',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800'
  },
  {
    id: 'koishikawa-korakuen',
    name: 'Koishikawa Korakuen',
    nameJp: '小石川後楽園',
    city: 'tokyo',
    type: 'park',
    duration: '1-2 ore',
    price: 300,
    coordinates: [35.7055, 139.7486],
    description: 'Giardino paesaggistico giapponese con laghi e ponti.',
    image: 'https://www.japan-guide.com/g18/3034_003_02.jpg'
  },
  
  // Cultura e Musei
  {
    id: 'imperial-palace',
    name: 'Imperial Palace',
    nameJp: '皇居',
    city: 'tokyo',
    type: 'culture',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.6852, 139.7528],
    description: 'Residenza ufficiale della famiglia imperiale.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800'
  },
  {
    id: 'teamLab-planets',
    name: 'teamLab Planets',
    nameJp: 'チームラボプラネッツ',
    city: 'tokyo',
    type: 'museum',
    duration: '2-3 ore',
    price: 3800,
    coordinates: [35.6492, 139.7887],
    description: 'Museo digitale immersivo con installazioni interattive.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
  },
  
  // Mercati del Pesce e Cibo
  {
    id: 'tsukiji-outer-market',
    name: 'Tsukiji Outer Market',
    nameJp: '築地場外市場',
    city: 'tokyo',
    type: 'food',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.6654, 139.7707],
    description: 'Mercato del pesce e street food giapponese.',
    image: 'https://www.jrailpass.com/blog/wp-content/uploads/2019/03/tsukiji-outer-market.jpg'
  },
  {
    id: 'toyosu-market',
    name: 'Toyosu Market',
    nameJp: '豊洲市場',
    city: 'tokyo',
    type: 'food',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.6556, 139.7877],
    description: 'Nuovo mercato del pesce con asta del tonno all\'alba.',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800'
  },

  // ==================== KYOTO ====================
  // Templi
  {
    id: 'fushimi-inari',
    name: 'Fushimi Inari Taisha',
    nameJp: '伏見稲荷大社',
    city: 'kyoto',
    type: 'temple',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.9671, 135.7727],
    description: 'Famoso santuario con migliaia di torii gates rossi.',
    image: 'https://www.japan-guide.com/g18/3915_top.jpg'
  },
  {
    id: 'kinkakuji',
    name: 'Kinkaku-ji',
    nameJp: '金閣寺',
    city: 'kyoto',
    type: 'temple',
    duration: '1 ora',
    price: 400,
    coordinates: [35.0394, 135.7292],
    description: 'Il Padiglione d\'Oro, tempio buddista iconico.',
    image: 'https://cdn.gaijinpot.com/app/uploads/sites/6/2016/05/kinkakuji-kyoto-golden-pavilion-1024x576.jpg'
  },
  {
    id: 'kiyomizudera',
    name: 'Kiyomizu-dera',
    nameJp: '清水寺',
    city: 'kyoto',
    type: 'temple',
    duration: '2 ore',
    price: 400,
    coordinates: [34.9949, 135.7850],
    description: 'Tempio con famosa terrazza di legno e vista sulla città.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Kiyomizu.jpg'
  },
  {
    id: 'yasaka-shrine',
    name: 'Yasaka Shrine',
    nameJp: '八坂神社',
    city: 'kyoto',
    type: 'temple',
    duration: '1 ora',
    price: 0,
    coordinates: [35.0037, 135.7786],
    description: 'Santuario shintoista nel cuore di Gion.',
    image: 'https://dskyoto.s3.amazonaws.com/gallery/full/4714/5559/1992/01-20140218_Gion_Mainspot-488.jpg'
  },
  {
    id: 'tofukuji',
    name: 'Tofuku-ji',
    nameJp: '東福寺',
    city: 'kyoto',
    type: 'temple',
    duration: '1-2 ore',
    price: 400,
    coordinates: [34.9762, 135.9817],
    description: 'Tempio zen famoso per i colori autunnali.',
    image: 'https://www.japan-guide.com/g18/3930_top.jpg'
  },
  {
    id: 'daigoji',
    name: 'Daigo-ji',
    nameJp: '醍醐寺',
    city: 'kyoto',
    type: 'temple',
    duration: '2-3 ore',
    price: 600,
    coordinates: [34.9514, 135.8214],
    description: 'Tempio patrimonio UNESCO con giardini e pagoda.',
    image: 'https://www.japan-guide.com/g18/3916_top.jpg'
  },
  
  // Natura
  {
    id: 'arashiyama-bamboo',
    name: 'Arashiyama Bamboo Grove',
    nameJp: '嵐山竹林',
    city: 'kyoto',
    type: 'nature',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.0170, 135.6710],
    description: 'Sentiero attraverso una foresta di bambù.',
    image: 'https://photos.smugmug.com/i-hFcX6RC/0/1c58ee68/L/famous-bamboo-grove-arashiyama-L.jpg'
  },
  {
    id: 'philosopher-path',
    name: 'Philosopher\'s Path',
    nameJp: '哲学の道',
    city: 'kyoto',
    type: 'nature',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.0265, 135.7955],
    description: 'Pittoresco sentiero lungo il canale con ciliegi.',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800'
  },
  {
    id: 'kurama-onsen',
    name: 'Kurama Onsen',
    nameJp: '鞍馬温泉',
    city: 'kyoto',
    type: 'nature',
    duration: '2-3 ore',
    price: 1200,
    coordinates: [35.1184, 135.7706],
    description: 'Terme naturali immersi nella montagna.',
    image: 'https://www.japan-experience.com/sites/default/files/legacy/japan_experience/1368606190275.jpg.webp'
  },
  
  // Quartieri e Strade
  {
    id: 'gion',
    name: 'Quartiere Gion',
    nameJp: '祇園',
    city: 'kyoto',
    type: 'culture',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.0037, 135.7786],
    description: 'Quartiere tradizionale con geisha e tea house.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'
  },
  {
    id: 'pontocho',
    name: 'Pontocho Alley',
    nameJp: '先斗町',
    city: 'kyoto',
    type: 'food',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.0055, 135.7711],
    description: 'Vicolo stretto con ristoranti tradizionali lungo il fiume.',
    image: 'https://deepjapan.org/wp-content/uploads/2024/10/dreamstime_l_171722516-scaled.jpg'
  },
  {
    id: 'nijo-castle',
    name: 'Castello Nijo',
    nameJp: '二条城',
    city: 'kyoto',
    type: 'culture',
    duration: '1-2 ore',
    price: 620,
    coordinates: [35.0142, 135.7482],
    description: 'Castello storico con pavimenti che cigolano.',
    image: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800'
  },
  
  // Mercati e Shopping
  {
    id: 'nishiki-market',
    name: 'Nishiki Market',
    nameJp: '錦市場',
    city: 'kyoto',
    type: 'food',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.0050, 135.7649],
    description: 'Mercato tradizionale con cibo locale e specialità.',
    image: 'https://byfood.b-cdn.net/api/public/assets/9563/content'
  },

  // ==================== OSAKA ====================
  // Icone
  {
    id: 'osaka-castle',
    name: 'Castello di Osaka',
    nameJp: '大阪城',
    city: 'osaka',
    type: 'culture',
    duration: '2-3 ore',
    price: 600,
    coordinates: [34.6873, 135.5262],
    description: 'Castello storico simbolo di Osaka.',
    image: 'https://www.japan-guide.com/g18/4000_top.jpg'
  },
  {
    id: 'tsutenkaku',
    name: 'Tsutenkaku Tower',
    nameJp: '通天閣',
    city: 'osaka',
    type: 'entertainment',
    duration: '1 ora',
    price: 800,
    coordinates: [34.6525, 135.5063],
    description: 'Torre iconica nel quartiere retrò Shinsekai.',
    image: 'https://onb-cdn.b-cdn.net/images-stn-osaka/146-Shinsekai-Osaka1.jpg'
  },
  {
    id: 'usj',
    name: 'Universal Studios Japan',
    nameJp: 'ユニバーサル・スタジオ・ジャパン',
    city: 'osaka',
    type: 'entertainment',
    duration: '1 giorno',
    price: 8600,
    coordinates: [34.6654, 135.4323],
    description: 'Parco divertimenti con attrazioni di film famosi.',
    image: 'https://media.tacdn.com/media/attractions-splice-spp-360x240/17/13/af/fc.jpg'
  },
  
  // Quartieri
  {
    id: 'dotonbori',
    name: 'Dotonbori',
    nameJp: '道頓堀',
    city: 'osaka',
    type: 'food',
    duration: '3-4 ore',
    price: 0,
    coordinates: [34.6687, 135.5013],
    description: 'Quartiere del divertimento con insegne al neon e street food.',
    image: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2016/12/Dotombori-iStock-javarman3.jpg'
  },
  {
    id: 'shinsekai',
    name: 'Shinsekai',
    nameJp: '新世界',
    city: 'osaka',
    type: 'entertainment',
    duration: '2 ore',
    price: 0,
    coordinates: [34.6525, 135.5063],
    description: 'Quartiere retrò con atmosfera vintage e kushikatsu.',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800'
  },
  {
    id: 'amerikamura',
    name: 'Amerikamura',
    nameJp: 'アメリカ村',
    city: 'osaka',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.6732, 135.4985],
    description: 'Quartiere giovanile con moda vintage e cultura americana.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Amerikamura.jpg'
  },
  {
    id: 'shinsaibashi',
    name: 'Shinsaibashi',
    nameJp: '心斎橋',
    city: 'osaka',
    type: 'shopping',
    duration: '3-4 ore',
    price: 0,
    coordinates: [35.0030, 135.7596],
    description: 'Strada commerciale coperta con negozi di moda.',
    image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000456/img/basic/a2000456_main.jpg'
  },
  
  // Shopping e Tecnologia
  {
    id: 'den-den-town',
    name: 'Den Den Town',
    nameJp: 'でんでんタウン',
    city: 'osaka',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.6642, 135.5036],
    description: 'Quartiere dell\'elettronica e anime, rivale di Akihabara.',
    image: 'https://photos.smugmug.com/Osaka/Den-Den-Town-Guide/i-35CdRnV/0/840040b3/L/DenDen1-L.jpg'
  },
  {
    id: 'namba-parks',
    name: 'Namba Parks',
    nameJp: 'なんばパークス',
    city: 'osaka',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.6618, 135.5017],
    description: 'Centro commerciale con giardini pensili.',
    image: 'https://cdn.osaka-info.jp/page_translation/content/dd498958-04bd-11e8-971b-06326e701dd4.jpeg'
  },
  
  // Templi
  {
    id: 'shitennoji',
    name: 'Shitenno-ji',
    nameJp: '四天王寺',
    city: 'osaka',
    type: 'temple',
    duration: '1 ora',
    price: 300,
    coordinates: [34.6533, 135.5164],
    description: 'Uno dei templi buddisti più antichi del Giappone.',
    image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800'
  },
  {
    id: 'sumiyoshi-taisha',
    name: 'Sumiyoshi Taisha',
    nameJp: '住吉大社',
    city: 'osaka',
    type: 'temple',
    duration: '1-2 ore',
    price: 0,
    coordinates: [34.6123, 135.4914],
    description: 'Santuario shintoista con ponti a schiena d\'asino.',
    image: 'https://www.japan-guide.com/g18/4007_top.jpg'
  },
  
  // Mercati
  {
    id: 'kuromon-market',
    name: 'Kuromon Market',
    nameJp: '黒門市場',
    city: 'osaka',
    type: 'food',
    duration: '1-2 ore',
    price: 0,
    coordinates: [34.6654, 135.5060],
    description: 'Mercato del pesce e della frutta fresca.',
    image: 'https://www.japan-guide.com/g19/4031_11.jpg'
  },
  
  // Panorami
  {
    id: 'umeda-sky',
    name: 'Umeda Sky Building',
    nameJp: '梅田スカイビル',
    city: 'osaka',
    type: 'entertainment',
    duration: '1-2 ore',
    price: 1500,
    coordinates: [34.7055, 135.4896],
    description: 'Edificio con osservatorio panoramico Floating Garden.',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800'
  },

  // ==================== NARA ====================
  // Templi
  {
    id: 'todaiji',
    name: 'Todai-ji',
    nameJp: '東大寺',
    city: 'nara',
    type: 'temple',
    duration: '2 ore',
    price: 600,
    coordinates: [34.6890, 135.8398],
    description: 'Tempio con il grande Buddha di bronzo.',
    image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800'
  },
  {
    id: 'kasuga-taisha',
    name: 'Kasuga Taisha',
    nameJp: '春日大社',
    city: 'nara',
    type: 'temple',
    duration: '1-2 ore',
    price: 500,
    coordinates: [34.6814, 135.8486],
    description: 'Santuario shintoista con lanterne di pietra.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800'
  },
  {
    id: 'horyuji',
    name: 'Horyu-ji',
    nameJp: '法隆寺',
    city: 'nara',
    type: 'temple',
    duration: '2 ore',
    price: 700,
    coordinates: [34.6142, 135.7344],
    description: 'Tempio patrimonio UNESCO con pagoda più antica del Giappone.',
    image: 'https://www.japan-guide.com/g19/4104_02.jpg'
  },
  {
    id: 'yakushiji',
    name: 'Yakushi-ji',
    nameJp: '薬師寺',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 500,
    coordinates: [34.6689, 135.7847],
    description: 'Tempio con due pagode gemelle.',
    image: 'https://www.japan-guide.com/g19/4105_top.jpg'
  },
  {
    id: 'toshodaiji',
    name: 'Toshodai-ji',
    nameJp: '唐招提寺',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 400,
    coordinates: [34.6756, 135.7847],
    description: 'Tempio fondato dal monaco cinese Ganjin.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/81/cb/12/caption.jpg?w=900&h=500&s=1'
  },
  {
    id: 'saidaiji',
    name: 'Saidai-ji',
    nameJp: '西大寺',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 300,
    coordinates: [34.6933, 135.8121],
    description: 'Tempio con famosa cerimonia del fuoco.',
    image: 'https://www.japan-experience.com/sites/default/files/images/content_images/saidaiji-temple-1.jpg'
  },
  
  // Natura
  {
    id: 'nara-park',
    name: 'Nara Park',
    nameJp: '奈良公園',
    city: 'nara',
    type: 'park',
    duration: '3 ore',
    price: 0,
    coordinates: [34.6851, 135.8430],
    description: 'Parco con cervi sacri liberi.',
    image: 'https://narashikanko.or.jp/lsc/upfile/article/0000/0022/22_1_l.jpg'
  },
  {
    id: 'isuien-garden',
    name: 'Isuien Garden',
    nameJp: '依水園',
    city: 'nara',
    type: 'park',
    duration: '1 ora',
    price: 650,
    coordinates: [34.6906, 135.8356],
    description: 'Bellissimo giardino giapponese con vista su Todai-ji.',
    image: 'https://www.his-usa.com/destination-japan/up_img/article/fs_1468509016_0.jpg'
  },
  {
    id: 'mount-yoshino',
    name: 'Mount Yoshino',
    nameJp: '吉野山',
    city: 'nara',
    type: 'nature',
    duration: '1 giorno',
    price: 0,
    coordinates: [34.3564, 135.8583],
    description: 'Montagna famosa per i ciliegi in fiore.',
    image: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-03/yoshino-guide_1.jpg?itok=ajMNaQ7b'
  },
  
  // Quartieri
  {
    id: 'naramachi',
    name: 'Naramachi',
    nameJp: 'ならまち',
    city: 'nara',
    type: 'culture',
    duration: '2 ore',
    price: 0,
    coordinates: [34.6789, 135.8289],
    description: 'Quartiere storico con case tradizionali e negozi.',
    image: 'https://content.fun-japan.jp/renewal-prod/cms/articles/content/091cad93896c0e10471d3dbd2a73378047144d9d.jpg'
  },

  // ==================== NUOVE ATTRAZIONI TOKYO ====================
  // Musei
  {
    id: 'tokyo-national-museum',
    name: 'Tokyo National Museum',
    nameJp: '東京国立博物館',
    city: 'tokyo',
    type: 'museum',
    duration: '3 ore',
    price: 1000,
    coordinates: [35.7188, 139.7765],
    description: 'Il museo più antico e grande del Giappone con arte e archeologia giapponese.',
    image: 'https://www.tripsavvy.com/thmb/5V2vfrojwmCzg8cYoTotZzHBsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tokyonationalmuseum-da510dbea7d648c190c66390eb9a651f.jpg'
  },
  {
    id: 'edo-tokyo-museum',
    name: 'Edo-Tokyo Museum',
    nameJp: '江戸東京博物館',
    city: 'tokyo',
    type: 'museum',
    duration: '2-3 ore',
    price: 600,
    coordinates: [35.6960, 139.7925],
    description: 'Museo dedicato alla storia di Tokyo dall\'epoca Edo ai giorni nostri.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Edo-Tokyo_Museum.jpg'
  },
  {
    id: 'national-art-center-tokyo',
    name: 'National Art Center Tokyo',
    nameJp: '国立新美術館',
    city: 'tokyo',
    type: 'museum',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.6652, 139.7264],
    description: 'Il più grande museo d\'arte del Giappone con mostre temporanee.',
    image: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2012/06/national-art-center-tokyo-iStock-1061510744-1024x600.jpg'
  },
  {
    id: 'mori-art-museum',
    name: 'Mori Art Museum',
    nameJp: '森美術館',
    city: 'tokyo',
    type: 'museum',
    duration: '2 ore',
    price: 1800,
    coordinates: [35.6606, 139.7292],
    description: 'Museo d\'arte contemporanea con vista panoramica dalla Roppongi Hills.',
    image: 'https://www.kanpai-japan.com/sites/default/files/uploads/2021/10/mori-art-museum-tokyo-1.jpg'
  },
  {
    id: 'tokyo-metropolitan-art-museum',
    name: 'Tokyo Metropolitan Art Museum',
    nameJp: '東京都美術館',
    city: 'tokyo',
    type: 'museum',
    duration: '2 ore',
    price: 0,
    coordinates: [35.7172, 139.7736],
    description: 'Museo municipale nel parco di Ueno con mostre diverse.',
    image: 'https://cdn.gaijinpot.com/app/uploads/sites/6/2019/02/Tokyo-Metropolitan-Museum-of-Art-2.jpg'
  },
  // Parchi e Natura
  {
    id: 'yoyogi-park',
    name: 'Yoyogi Park',
    nameJp: '代々木公園',
    city: 'tokyo',
    type: 'park',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.6717, 139.6956],
    description: 'Ampio parco popolare per picnic e attività all\'aperto.',
    image: 'https://www.japan-guide.com/g18/3034_002_11.jpg'
  },
  {
    id: 'inokashira-park',
    name: 'Inokashira Park',
    nameJp: '井の頭公園',
    city: 'tokyo',
    type: 'park',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.7000, 139.5736],
    description: 'Parco con lago, barche a remi e ciliegi in fiore a Kichijoji.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/43/98/30/sakura-season-2017.jpg?w=1200&h=1200&s=1'
  },
  {
    id: 'meiji-jingu-gaien',
    name: 'Meiji Jingu Gaien',
    nameJp: '明治神宮外苑',
    city: 'tokyo',
    type: 'park',
    duration: '1 ora',
    price: 0,
    coordinates: [35.6800, 139.7200],
    description: 'Giardino commemorativo con il famoso viale di ginkgo.',
    image: 'https://static.gltjp.com/glt/data/directory/12000/11026/20210817_231700_ca43fc4e_w1920.webp'
  },
  // Quartieri
  {
    id: 'kichijoji',
    name: 'Kichijoji',
    nameJp: '吉祥寺',
    city: 'tokyo',
    type: 'shopping',
    duration: '3-4 ore',
    price: 0,
    coordinates: [35.7036, 139.5796],
    description: 'Quartiere vivace con negozi, ristoranti e il parco Inokashira.',
    image: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2025-04/kichijoji_8.jpg?itok=VvxzD2Tm'
  },
  {
    id: 'shimokitazawa',
    name: 'Shimokitazawa',
    nameJp: '下北沢',
    city: 'tokyo',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.6614, 139.6683],
    description: 'Quartiere bohemien con negozi vintage, teatri e caffè.',
    image: 'https://www.gotokyo.org/en/destinations/western-tokyo/shimokitazawa/images/area033_1010_19.webp'
  },
  {
    id: 'nakameguro',
    name: 'Nakameguro',
    nameJp: '中目黒',
    city: 'tokyo',
    type: 'culture',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.6415, 139.6982],
    description: 'Quartiere alla moda lungo il fiume Meguro, famoso per i ciliegi.',
    image: 'https://www.gotokyo.org/en/destinations/southern-tokyo/nakameguro/images/103_0016_4.jpg'
  },
  {
    id: 'daikanyama',
    name: 'Daikanyama',
    nameJp: '代官山',
    city: 'tokyo',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.6489, 139.7033],
    description: 'Quartiere elegante con boutique di lusso e caffè alla moda.',
    image: 'https://www.gotokyo.org/en/destinations/western-tokyo/daikanyama/images/area034_1005_27.jpg'
  },
  {
    id: 'koenji',
    name: 'Koenji',
    nameJp: '高円寺',
    city: 'tokyo',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.7055, 139.6499],
    description: 'Quartiere alternativo con negozi vintage e vita notturna.',
    image: 'https://i0.wp.com/donnykimball.com/wp-content/uploads/2021/07/A-Street-in-Koenji.webp?resize=800%2C534&ssl=1'
  },
  // Divertimenti
  {
    id: 'tokyo-disneyland',
    name: 'Tokyo Disneyland',
    nameJp: '東京ディズニーランド',
    city: 'tokyo',
    type: 'entertainment',
    duration: '1 giorno',
    price: 7900,
    coordinates: [35.6329, 139.8804],
    description: 'Parco divertimenti Disney con castello della Bella Addormentata.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tokyo_Disneyland_Cinderella_Castle_2023-07-02.jpg'
  },
  {
    id: 'tokyo-disneysea',
    name: 'Tokyo DisneySea',
    nameJp: '東京ディズニーシー',
    city: 'tokyo',
    type: 'entertainment',
    duration: '1 giorno',
    price: 7900,
    coordinates: [35.6266, 139.8853],
    description: 'Parco a tema marittimo unico al mondo con Monte Prometeo.',
    image: 'https://www.japan-guide.com/g22/3016_04.jpg'
  },
  {
    id: 'rainbow-bridge',
    name: 'Rainbow Bridge',
    nameJp: 'レインボーブリッジ',
    city: 'tokyo',
    type: 'entertainment',
    duration: '30 min',
    price: 0,
    coordinates: [35.6366, 139.7633],
    description: 'Ponte sospeso illuminato che collega Odaiba a Shibaura.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Rainbow_Bridge_%28Tokyo%29_at_night_8.jpg'
  },
  {
    id: 'tokyo-metropolitan-gov',
    name: 'Tokyo Metropolitan Government Building',
    nameJp: '東京都庁',
    city: 'tokyo',
    type: 'entertainment',
    duration: '1 ora',
    price: 0,
    coordinates: [35.6896, 139.6917],
    description: 'Osservatorio gratuito al 45° piano con vista su Tokyo.',
    image: 'https://www.japan-guide.com/g18/3011_21.jpg'
  },
  {
    id: 'sunshine-city',
    name: 'Sunshine City',
    nameJp: 'サンシャインシティ',
    city: 'tokyo',
    type: 'entertainment',
    duration: '3-4 ore',
    price: 0,
    coordinates: [35.7290, 139.7186],
    description: 'Complesso commerciale con acquario, planetario e osservatorio.',
    image: 'https://res-1.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1647834380/tokyo/M_01108_001'
  },
  {
    id: 'aqua-park-shinagawa',
    name: 'Aqua Park Shinagawa',
    nameJp: 'アクアパーク品川',
    city: 'tokyo',
    type: 'entertainment',
    duration: '2 ore',
    price: 2500,
    coordinates: [35.6274, 139.7340],
    description: 'Acquario moderno con spettacoli di delfini e illuminazioni.',
    image: 'https://cdn.savvytokyo.com/app/uploads/2013/06/epson.stadium3.jpg'
  },
  {
    id: 'sumida-aquarium',
    name: 'Sumida Aquarium',
    nameJp: 'すみだ水族館',
    city: 'tokyo',
    type: 'entertainment',
    duration: '1-2 ore',
    price: 2500,
    coordinates: [35.7155, 139.8010],
    description: 'Acquario moderno a Tokyo Skytree Town con pinguini e meduse.',
    image: 'https://www.gotokyo.org/en/spot/67/images/main.webp'
  },
  {
    id: 'suntory-museum-art',
    name: 'Suntory Museum of Art',
    nameJp: 'サントリー美術館',
    city: 'tokyo',
    type: 'museum',
    duration: '1-2 ore',
    price: 1500,
    coordinates: [35.6664, 139.7306],
    description: 'Museo d\'arte tradizionale giapponese a Tokyo Midtown.',
    image: 'https://www.suntory.com/sma/common2020/img/top/img_concept.jpg'
  },

  // ==================== NUOVE ATTRAZIONI KYOTO ====================
  {
    id: 'ryoanji',
    name: 'Ryoan-ji',
    nameJp: '龍安寺',
    city: 'kyoto',
    type: 'temple',
    duration: '1 ora',
    price: 500,
    coordinates: [35.0345, 135.7183],
    description: 'Tempio zen famoso per il suo giardino di rocce.',
    image: 'https://www.japan-guide.com/g18/3909_01.jpg'
  },
  {
    id: 'sanjusangendo',
    name: 'Sanjusangen-do',
    nameJp: '三十三間堂',
    city: 'kyoto',
    type: 'temple',
    duration: '1 ora',
    price: 600,
    coordinates: [34.9879, 135.7717],
    description: 'Tempio con 1001 statue dorate di Kannon.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg/1280px-Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg'
  },
  {
    id: 'ginkakuji',
    name: 'Ginkaku-ji',
    nameJp: '銀閣寺',
    city: 'kyoto',
    type: 'temple',
    duration: '1 ora',
    price: 500,
    coordinates: [35.0270, 135.7982],
    description: 'Il Padiglione d\'Argento con giardino di muschio e sabbia.',
    image: 'https://cdn.gaijinpot.com/app/uploads/sites/6/2016/05/kinkakuji-kyoto-golden-pavilion-1024x576.jpg'
  },
  {
    id: 'nanzenji',
    name: 'Nanzen-ji',
    nameJp: '南禅寺',
    city: 'kyoto',
    type: 'temple',
    duration: '1-2 ore',
    price: 500,
    coordinates: [35.0116, 135.7935],
    description: 'Importante tempio zen con acquedotto in mattoni rossi.',
    image: 'https://photos.smugmug.com/i-hFcX6RC/0/1c58ee68/L/famous-bamboo-grove-arashiyama-L.jpg'
  },
  {
    id: 'kodaiji',
    name: 'Kodai-ji',
    nameJp: '高台寺',
    city: 'kyoto',
    type: 'temple',
    duration: '1 ora',
    price: 600,
    coordinates: [35.0006, 135.7819],
    description: 'Tempio con giardini illuminati di notte nel quartiere di Higashiyama.',
    image: 'https://cdn.gaijinpot.com/app/uploads/sites/6/2017/07/Kiyomizudera-Temple-Kyoto.jpg'
  },
  {
    id: 'kurama-dera',
    name: 'Kurama-dera',
    nameJp: '鞍馬寺',
    city: 'kyoto',
    type: 'temple',
    duration: '2-3 ore',
    price: 300,
    coordinates: [35.1184, 135.7706],
    description: 'Tempio di montagna con funivia e sentieri nella foresta.',
    image: 'https://www.japan-guide.com/g18/3915_top.jpg'
  },
  {
    id: 'mount-kurama',
    name: 'Mount Kurama',
    nameJp: '鞍馬山',
    city: 'kyoto',
    type: 'nature',
    duration: '3-4 ore',
    price: 0,
    coordinates: [35.1184, 135.7706],
    description: 'Montagna sacra con templi e sentieri escursionistici.',
    image: 'https://www.japan-guide.com/g18/3930_top.jpg'
  },
  {
    id: 'maruyama-park',
    name: 'Maruyama Park',
    nameJp: '円山公園',
    city: 'kyoto',
    type: 'park',
    duration: '1-2 ore',
    price: 0,
    coordinates: [35.0037, 135.7786],
    description: 'Parco con ciliegi secolari e vista su Yasaka Shrine.',
    image: 'https://www.japan-guide.com/g18/3916_top.jpg'
  },
  {
    id: 'kiyomizu-sannenzaka',
    name: 'Sannenzaka & Ninenzaka',
    nameJp: '三年坂・二年坂',
    city: 'kyoto',
    type: 'culture',
    duration: '1-2 ore',
    price: 0,
    coordinates: [34.9980, 135.7800],
    description: 'Vicoli storici lastricati con negozi tradizionali.',
    image: 'https://www.japan-guide.com/g18/3908_top.jpg'
  },
  {
    id: 'pontocho-alley',
    name: 'Pontocho Alley',
    nameJp: '先斗町',
    city: 'kyoto',
    type: 'food',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.0055, 135.7711],
    description: 'Vicolo stretto con ristoranti tradizionali lungo il fiume.',
    image: 'https://deepjapan.org/wp-content/uploads/2024/10/dreamstime_l_171722516-scaled.jpg'
  },
  {
    id: 'teramachi-street',
    name: 'Teramachi Street',
    nameJp: '寺町通',
    city: 'kyoto',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [35.0070, 135.7650],
    description: 'Strada commerciale coperta con templi e negozi.',
    image: 'https://cdn.gaijinpot.com/app/uploads/sites/6/2016/05/kinkakuji-kyoto-golden-pavilion-1024x576.jpg'
  },
  {
    id: 'shinkyogoku',
    name: 'Shinkyogoku',
    nameJp: '新京極',
    city: 'kyoto',
    type: 'shopping',
    duration: '2 ore',
    price: 0,
    coordinates: [35.0060, 135.7660],
    description: 'Strada commerciale pedonale con negozi e ristoranti.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Kiyomizu.jpg'
  },
  {
    id: 'kyoto-manga-museum',
    name: 'Kyoto International Manga Museum',
    nameJp: '京都国際マンガミュージアム',
    city: 'kyoto',
    type: 'museum',
    duration: '2-3 ore',
    price: 900,
    coordinates: [35.0116, 135.7590],
    description: 'Museo dedicato ai manga con oltre 300,000 volumi.',
    image: 'https://www.japan-guide.com/g18/3909_01.jpg'
  },
  {
    id: 'toei-kyoto-studio',
    name: 'Toei Kyoto Studio Park',
    nameJp: '東映太秦映画村',
    city: 'kyoto',
    type: 'entertainment',
    duration: '3-4 ore',
    price: 2400,
    coordinates: [35.0120, 135.7100],
    description: 'Parco a tema con set cinematografici di film samurai.',
    image: 'https://www.japan-guide.com/g18/3930_top.jpg'
  },
  {
    id: 'sagano-scenic-railway',
    name: 'Sagano Scenic Railway',
    nameJp: '嵯峨野観光鉄道',
    city: 'kyoto',
    type: 'entertainment',
    duration: '1 ora',
    price: 880,
    coordinates: [35.0170, 135.6710],
    description: 'Treno turistico con vista sul fiume Hozu.',
    image: 'https://photos.smugmug.com/i-hFcX6RC/0/1c58ee68/L/famous-bamboo-grove-arashiyama-L.jpg'
  },
  {
    id: 'arashiyama-monkey-park',
    name: 'Arashiyama Monkey Park',
    nameJp: '嵐山モンキーパーク',
    city: 'kyoto',
    type: 'nature',
    duration: '1-2 ore',
    price: 550,
    coordinates: [35.0090, 135.6770],
    description: 'Parco con scimmie selvatiche e vista panoramica su Kyoto.',
    image: 'https://www.japan-guide.com/g18/3915_top.jpg'
  },
  {
    id: 'tenryuji',
    name: 'Tenryu-ji',
    nameJp: '天龍寺',
    city: 'kyoto',
    type: 'temple',
    duration: '1 ora',
    price: 500,
    coordinates: [35.0156, 135.6738],
    description: 'Tempio zen patrimonio UNESCO con giardino e vista sulle montagne.',
    image: 'https://www.japan-guide.com/g18/3916_top.jpg'
  },
  {
    id: 'jojakkoji',
    name: 'Jojakko-ji',
    nameJp: '常寂光寺',
    city: 'kyoto',
    type: 'temple',
    duration: '30 min',
    price: 400,
    coordinates: [35.0230, 135.6650],
    description: 'Tempio con vista panoramica e colori autunnali.',
    image: 'https://cdn.gaijinpot.com/app/uploads/sites/6/2017/07/Kiyomizudera-Temple-Kyoto.jpg'
  },

  // ==================== NUOVE ATTRAZIONI OSAKA ====================
  {
    id: 'osaka-aquarium-kaiyukan',
    name: 'Osaka Aquarium Kaiyukan',
    nameJp: '海遊館',
    city: 'osaka',
    type: 'entertainment',
    duration: '2-3 ore',
    price: 2700,
    coordinates: [34.6545, 135.4288],
    description: 'Uno dei più grandi acquari del mondo con balene e squali.',
    image: 'https://res-1.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1648205341/osaka/H_00496_001'
  },
  {
    id: 'osaka-castle-park',
    name: 'Osaka Castle Park',
    nameJp: '大阪城公園',
    city: 'osaka',
    type: 'park',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.6873, 135.5262],
    description: 'Parco con il castello, mura storiche e ciliegi.',
    image: 'https://www.japan-guide.com/g18/4000_top.jpg'
  },
  {
    id: 'shinsekai',
    name: 'Shinsekai',
    nameJp: '新世界',
    city: 'osaka',
    type: 'food',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.6525, 135.5063],
    description: 'Quartiere retrò con atmosfera vintage e kushikatsu.',
    image: 'https://s3.voyapon.com/wp-content/uploads/2020/04/22172053/Osaka_Shinsekai_86.jpg'
  },
  {
    id: 'amerikamura',
    name: 'Amerikamura',
    nameJp: 'アメリカ村',
    city: 'osaka',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.6732, 135.4985],
    description: 'Quartiere giovanile con moda vintage e cultura americana.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Amerikamura.jpg'
  },
  {
    id: 'den-den-town',
    name: 'Den Den Town',
    nameJp: 'でんでんタウン',
    city: 'osaka',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.6642, 135.5036],
    description: 'Quartiere dell\'elettronica e anime, rivale di Akihabara.',
    image: 'https://photos.smugmug.com/Osaka/Den-Den-Town-Guide/i-35CdRnV/0/840040b3/L/DenDen1-L.jpg'
  },
  {
    id: 'namba-parks',
    name: 'Namba Parks',
    nameJp: 'なんばパークス',
    city: 'osaka',
    type: 'shopping',
    duration: '2-3 ore',
    price: 0,
    coordinates: [34.6618, 135.5017],
    description: 'Centro commerciale con giardini pensili.',
    image: 'https://cdn.osaka-info.jp/page_translation/content/dd498958-04bd-11e8-971b-06326e701dd4.jpeg'
  },
  {
    id: 'shinsaibashi-suji',
    name: 'Shinsaibashi-suji',
    nameJp: '心斎橋筋',
    city: 'osaka',
    type: 'shopping',
    duration: '3-4 ore',
    price: 0,
    coordinates: [34.6785, 135.5002],
    description: 'Strada commerciale coperta con negozi di moda.',
    image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/20/00/a2000456/img/basic/a2000456_main.jpg'
  },
  {
    id: 'expo-city',
    name: 'Expo City',
    nameJp: 'EXPOCITY',
    city: 'osaka',
    type: 'entertainment',
    duration: '1 giorno',
    price: 0,
    coordinates: [34.8040, 135.5350],
    description: 'Complesso di intrattenimento con ruota panoramica e negozi.',
    image: 'https://www.japan-guide.com/g18/4007_top.jpg'
  },
  {
    id: 'shitennoji-honbo',
    name: 'Shitenno-ji Honbo Garden',
    nameJp: '四天王寺本坊庭園',
    city: 'osaka',
    type: 'temple',
    duration: '1 ora',
    price: 300,
    coordinates: [34.6533, 135.5164],
    description: 'Giardino del tempio più antico del Giappone.',
    image: 'https://cdn.gaijinpot.com/app/uploads/sites/6/2018/10/sumiyoshi-shrine-bridge-2.jpg'
  },
  {
    id: 'namba-yasaka',
    name: 'Namba Yasaka Shrine',
    nameJp: '難波八阪神社',
    city: 'osaka',
    type: 'temple',
    duration: '30 min',
    price: 0,
    coordinates: [34.6600, 135.5000],
    description: 'Santuario con la famosa testa di leone gigante.',
    image: 'https://www.japan-guide.com/g18/4007_top.jpg'
  },
  {
    id: 'osaka-museum-history',
    name: 'Osaka Museum of History',
    nameJp: '大阪歴史博物館',
    city: 'osaka',
    type: 'museum',
    duration: '2 ore',
    price: 600,
    coordinates: [34.6820, 135.5200],
    description: 'Museo con ricostruzioni della storia di Osaka.',
    image: 'https://www.japan-guide.com/g18/4000_top.jpg'
  },
  {
    id: 'kamigata-ukiyo-e',
    name: 'Kamigata Ukiyo-e Museum',
    nameJp: '上方浮世絵館',
    city: 'osaka',
    type: 'museum',
    duration: '1 ora',
    price: 500,
    coordinates: [34.6687, 135.5013],
    description: 'Museo dedicato alle stampe ukiyo-e di Osaka.',
    image: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2016/12/umeda-sky-building-GettyImages-804747028.jpg'
  },
  {
    id: 'tempozan-harbor',
    name: 'Tempozan Harbor Village',
    nameJp: '天保山ハーバービレッジ',
    city: 'osaka',
    type: 'entertainment',
    duration: '3-4 ore',
    price: 0,
    coordinates: [34.6545, 135.4288],
    description: 'Area portuale con acquario, ruota panoramica e negozi.',
    image: 'https://res-1.cloudinary.com/jnto/image/upload/w_2064,h_1300,c_fill,f_auto,fl_lossy,q_auto/v1648205341/osaka/H_00496_001'
  },
  {
    id: 'spa-world',
    name: 'Spa World',
    nameJp: 'スパワールド',
    city: 'osaka',
    type: 'entertainment',
    duration: '3-4 ore',
    price: 1300,
    coordinates: [34.6489, 135.5050],
    description: 'Centro termale con bagni tematici da tutto il mondo.',
    image: 'https://s3.voyapon.com/wp-content/uploads/2020/04/22172053/Osaka_Shinsekai_86.jpg'
  },
  {
    id: 'tsurumi-ryokuchi',
    name: 'Tsurumi Ryokuchi Park',
    nameJp: '鶴見緑地公園',
    city: 'osaka',
    type: 'park',
    duration: '2 ore',
    price: 0,
    coordinates: [34.6814, 135.5345],
    description: 'Parco con giardini, laghi e area per barbecue.',
    image: 'https://www.japan-guide.com/g18/4007_top.jpg'
  },
  {
    id: 'kema-sakuranomiya',
    name: 'Kema Sakuranomiya Park',
    nameJp: '毛馬桜之宮公園',
    city: 'osaka',
    type: 'park',
    duration: '1-2 ore',
    price: 0,
    coordinates: [34.6969, 135.5282],
    description: 'Parco lungo il fiume con oltre 4000 ciliegi.',
    image: 'https://www.japan-guide.com/g18/4000_top.jpg'
  },
  {
    id: 'instant-ramen-museum',
    name: 'Momofuku Ando Instant Ramen Museum',
    nameJp: 'インスタントラーメン発明記念館',
    city: 'osaka',
    type: 'museum',
    duration: '1-2 ore',
    price: 500,
    coordinates: [34.7752, 135.5106],
    description: 'Museo dedicato all\'inventore del ramen istantaneo.',
    image: 'https://www.japan-guide.com/g18/4007_top.jpg'
  },
  {
    id: 'takoyaki-museum',
    name: 'Takoyaki Museum',
    nameJp: 'たこ焼きミュージアム',
    city: 'osaka',
    type: 'food',
    duration: '1 ora',
    price: 0,
    coordinates: [34.6545, 135.4288],
    description: 'Museo dedicato al takoyaki con negozi e ristoranti.',
    image: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-10/dotonbori-guide_6.jpg?itok=MNg2Rx7p'
  },
  {
    id: 'janjan-yokocho',
    name: 'Janjan Yokocho',
    nameJp: 'ジャンジャン横丁',
    city: 'osaka',
    type: 'food',
    duration: '1-2 ore',
    price: 0,
    coordinates: [34.6525, 135.5063],
    description: 'Vicolo tradizionale con ristoranti di kushikatsu.',
    image: 'https://s3.voyapon.com/wp-content/uploads/2020/04/22172053/Osaka_Shinsekai_86.jpg'
  },
  {
    id: 'hozenji',
    name: 'Hozen-ji Temple',
    nameJp: '法善寺',
    city: 'osaka',
    type: 'temple',
    duration: '30 min',
    price: 0,
    coordinates: [34.6687, 135.5013],
    description: 'Piccolo tempio nel cuore di Dotonbori con statua coperta di muschio.',
    image: 'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-10/dotonbori-guide_6.jpg?itok=MNg2Rx7p'
  },

  // ==================== NUOVE ATTRAZIONI NARA ====================
  {
    id: 'kofukuji',
    name: 'Kofuku-ji',
    nameJp: '興福寺',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 0,
    coordinates: [34.6833, 135.8333],
    description: 'Tempio con la famosa pagoda a cinque piani.',
    image: 'https://www.japan-guide.com/g18/4101_03.jpg'
  },
  {
    id: 'kasuga-taisha',
    name: 'Kasuga Taisha',
    nameJp: '春日大社',
    city: 'nara',
    type: 'temple',
    duration: '1-2 ore',
    price: 500,
    coordinates: [34.6814, 135.8486],
    description: 'Santuario shintoista con migliaia di lanterne di pietra.',
    image: 'https://www.kasugataisha.or.jp/wp-content/uploads/2020/01/%E6%98%A5%E6%97%A5%E5%A4%A7%E7%A4%BE%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.jpg'
  },
  {
    id: 'todaiji-daibutsu',
    name: 'Todai-ji Daibutsu-den',
    nameJp: '東大寺大仏殿',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 600,
    coordinates: [34.6890, 135.8398],
    description: 'Il più grande edificio di legno del mondo con il Grande Buddha.',
    image: 'https://www.japan-guide.com/g18/4101_01.jpg'
  },
  {
    id: 'nigatsudo',
    name: 'Nigatsu-do',
    nameJp: '二月堂',
    city: 'nara',
    type: 'temple',
    duration: '30 min',
    price: 0,
    coordinates: [34.6890, 135.8400],
    description: 'Padiglione con vista panoramica su Nara.',
    image: 'https://www.japan-guide.com/g19/4104_02.jpg'
  },
  {
    id: 'horyuji',
    name: 'Horyu-ji',
    nameJp: '法隆寺',
    city: 'nara',
    type: 'temple',
    duration: '2 ore',
    price: 700,
    coordinates: [34.6142, 135.7344],
    description: 'Tempio patrimonio UNESCO con la pagoda più antica del Giappone.',
    image: 'https://www.japan-guide.com/g19/4104_11.jpg'
  },
  {
    id: 'yakushiji',
    name: 'Yakushi-ji',
    nameJp: '薬師寺',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 500,
    coordinates: [34.6689, 135.7847],
    description: 'Tempio con due pagode gemelle.',
    image: 'https://www.japan-guide.com/g19/4105_top.jpg'
  },
  {
    id: 'toshodaiji',
    name: 'Toshodai-ji',
    nameJp: '唐招提寺',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 400,
    coordinates: [34.6756, 135.7847],
    description: 'Tempio fondato dal monaco cinese Ganjin.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/81/cb/12/caption.jpg?w=900&h=500&s=1'
  },
  {
    id: 'saidaiji',
    name: 'Saidai-ji',
    nameJp: '西大寺',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 300,
    coordinates: [34.6933, 135.8121],
    description: 'Tempio con famosa cerimonia del fuoco.',
    image: 'https://www.japan-experience.com/sites/default/files/images/content_images/saidaiji-temple-1.jpg'
  },
  {
    id: 'nara-deer-park',
    name: 'Nara Deer Park',
    nameJp: '奈良公園',
    city: 'nara',
    type: 'park',
    duration: '3 ore',
    price: 0,
    coordinates: [34.6851, 135.8430],
    description: 'Parco con oltre 1000 cervi sacri liberi.',
    image: 'https://narashikanko.or.jp/lsc/upfile/article/0000/0022/22_1_l.jpg'
  },
  {
    id: 'isuien-garden',
    name: 'Isuien Garden',
    nameJp: '依水園',
    city: 'nara',
    type: 'park',
    duration: '1 ora',
    price: 650,
    coordinates: [34.6906, 135.8356],
    description: 'Bellissimo giardino giapponese con vista su Todai-ji.',
    image: 'https://www.his-usa.com/destination-japan/up_img/article/fs_1468509016_0.jpg'
  },
  {
    id: 'yoshino-mountain',
    name: 'Mount Yoshino',
    nameJp: '吉野山',
    city: 'nara',
    type: 'nature',
    duration: '1 giorno',
    price: 0,
    coordinates: [34.3564, 135.8583],
    description: 'Montagna famosa per i ciliegi in fiore.',
    image: 'https://www.japan-guide.com/g21/4152_11.jpg'
  },
  {
    id: 'naramachi-district',
    name: 'Naramachi District',
    nameJp: 'ならまち',
    city: 'nara',
    type: 'culture',
    duration: '2 ore',
    price: 0,
    coordinates: [34.6789, 135.8289],
    description: 'Quartiere storico con case tradizionali di mercanti.',
    image: 'https://www.japan-guide.com/g19/4108_02.jpg'
  },
  {
    id: 'nara-national-museum',
    name: 'Nara National Museum',
    nameJp: '奈良国立博物館',
    city: 'nara',
    type: 'museum',
    duration: '2 ore',
    price: 700,
    coordinates: [34.6833, 135.8333],
    description: 'Museo con arte buddista e tesori nazionali.',
    image: 'https://www.japan-guide.com/g18/4101_01.jpg'
  },
  {
    id: 'asuka-village',
    name: 'Asuka Village',
    nameJp: '飛鳥',
    city: 'nara',
    type: 'culture',
    duration: '1 giorno',
    price: 0,
    coordinates: [34.5178, 135.8475],
    description: 'Antico villaggio imperiale con tombe e templi.',
    image: 'https://www.japan-guide.com/g19/4104_02.jpg'
  },
  {
    id: 'heijo-palace',
    name: 'Heijo Palace',
    nameJp: '平城宮跡',
    city: 'nara',
    type: 'culture',
    duration: '2 ore',
    price: 0,
    coordinates: [34.6933, 135.7950],
    description: 'Rovine del palazzo imperiale dell\'antica Nara.',
    image: 'https://www.japan-guide.com/g18/4101_03.jpg'
  },
  {
    id: 'miwa',
    name: 'Mount Miwa',
    nameJp: '三輪山',
    city: 'nara',
    type: 'nature',
    duration: '3-4 ore',
    price: 0,
    coordinates: [34.5178, 135.8475],
    description: 'Montagna sacra con santuario Omiwa.',
    image: 'https://www.japan-guide.com/g21/4152_11.jpg'
  },
  {
    id: 'kashihara-jingu',
    name: 'Kashihara Jingu',
    nameJp: '橿原神宮',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 0,
    coordinates: [34.4841, 135.7936],
    description: 'Santuario dedicato al primo imperatore del Giappone.',
    image: 'https://www.japan-guide.com/g19/4104_11.jpg'
  },
  {
    id: 'oharano',
    name: 'Oharano Shrine',
    nameJp: '大原野神社',
    city: 'nara',
    type: 'temple',
    duration: '1 ora',
    price: 0,
    coordinates: [34.3564, 135.8583],
    description: 'Santuario con ciliegi e aceri in un\'atmosfera tranquilla.',
    image: 'https://www.japan-guide.com/g18/4101_01.jpg'
  },
];

// Tokyo Metro
export const tokyoMetroStations: MetroStation[] = [
  // Ginza Line (Orange)
  { id: 'shibuya-g', name: 'Shibuya', nameJp: '渋谷', line: 'ginza', lineColor: '#FF9500', coordinates: [35.6595, 139.7004], connections: ['hachiko', 'yamanote'] },
  { id: 'omotesando-g', name: 'Omotesando', nameJp: '表参道', line: 'ginza', lineColor: '#FF9500', coordinates: [35.6652, 139.7123], connections: ['chiyoda', 'hanzomon'] },
  { id: 'ginza-g', name: 'Ginza', nameJp: '銀座', line: 'ginza', lineColor: '#FF9500', coordinates: [35.6717, 139.7650], connections: ['marunouchi', 'hibiya'] },
  { id: 'tokyo-g', name: 'Tokyo', nameJp: '東京', line: 'ginza', lineColor: '#FF9500', coordinates: [35.6812, 139.7671], connections: ['marunouchi', 'yamanote', 'chuo', 'shinkansen'] },
  { id: 'ueno-g', name: 'Ueno', nameJp: '上野', line: 'ginza', lineColor: '#FF9500', coordinates: [35.7148, 139.7737], connections: ['yamanote', 'keisei', 'hibiya'] },
  { id: 'asakusa-g', name: 'Asakusa', nameJp: '浅草', line: 'ginza', lineColor: '#FF9500', coordinates: [35.7148, 139.7967], connections: ['tobu'] },
  
  // Marunouchi Line (Red)
  { id: 'shinjuku-m', name: 'Shinjuku', nameJp: '新宿', line: 'marunouchi', lineColor: '#E60012', coordinates: [35.6906, 139.6999], connections: ['yamanote', 'shinjuku-line', 'odakyu'] },
  { id: 'tokyo-m', name: 'Tokyo', nameJp: '東京', line: 'marunouchi', lineColor: '#E60012', coordinates: [35.6812, 139.7671], connections: ['ginza', 'yamanote', 'chuo', 'shinkansen'] },
  { id: 'ginza-m', name: 'Ginza', nameJp: '銀座', line: 'marunouchi', lineColor: '#E60012', coordinates: [35.6717, 139.7650], connections: ['ginza-line', 'hibiya'] },
  { id: 'ikebukuro-m', name: 'Ikebukuro', nameJp: '池袋', line: 'marunouchi', lineColor: '#E60012', coordinates: [35.7295, 139.7109], connections: ['yamanote', 'seibu'] },
  
  // Hibiya Line (Silver)
  { id: 'roppongi-h', name: 'Roppongi', nameJp: '六本木', line: 'hibiya', lineColor: '#C9C9C9', coordinates: [35.6628, 139.7314], connections: ['oedo'] },
  { id: 'ginza-h', name: 'Ginza', nameJp: '銀座', line: 'hibiya', lineColor: '#C9C9C9', coordinates: [35.6717, 139.7650], connections: ['ginza', 'marunouchi'] },
  { id: 'akihabara-h', name: 'Akihabara', nameJp: '秋葉原', line: 'hibiya', lineColor: '#C9C9C9', coordinates: [35.6984, 139.7731], connections: ['yamanote', 'keihin'] },
  { id: 'ueno-h', name: 'Ueno', nameJp: '上野', line: 'hibiya', lineColor: '#C9C9C9', coordinates: [35.7148, 139.7737], connections: ['ginza', 'yamanote'] },
  
  // Oedo Line (Magenta)
  { id: 'shinjuku-o', name: 'Shinjuku', nameJp: '新宿', line: 'oedo', lineColor: '#B6007A', coordinates: [35.6906, 139.6999], connections: ['marunouchi', 'yamanote'] },
  { id: 'roppongi-o', name: 'Roppongi', nameJp: '六本木', line: 'oedo', lineColor: '#B6007A', coordinates: [35.6628, 139.7314], connections: ['hibiya'] },
  { id: 'tsukiji-o', name: 'Tsukiji', nameJp: '築地', line: 'oedo', lineColor: '#B6007A', coordinates: [35.6654, 139.7707], connections: ['hibiya'] },
  
  // Chiyoda Line (Green)
  { id: 'omotesando-c', name: 'Omotesando', nameJp: '表参道', line: 'chiyoda', lineColor: '#00BB85', coordinates: [35.6652, 139.7123], connections: ['ginza', 'hanzomon'] },
  { id: 'meijijingumae-c', name: 'Meiji-Jingumae', nameJp: '明治神宮前', line: 'chiyoda', lineColor: '#00BB85', coordinates: [35.6764, 139.6993], connections: ['fukutoshin'] },
  { id: 'akihabara-c', name: 'Akihabara', nameJp: '秋葉原', line: 'chiyoda', lineColor: '#00BB85', coordinates: [35.6984, 139.7731], connections: ['yamanote', 'hibiya'] },
  
  // Yamanote Line (Light Green - JR)
  { id: 'shibuya-y', name: 'Shibuya', nameJp: '渋谷', line: 'yamanote', lineColor: '#9ACD32', coordinates: [35.6595, 139.7004], connections: ['ginza', 'hachiko'] },
  { id: 'shinjuku-y', name: 'Shinjuku', nameJp: '新宿', line: 'yamanote', lineColor: '#9ACD32', coordinates: [35.6906, 139.6999], connections: ['marunouchi', 'shinjuku-line'] },
  { id: 'harajuku-y', name: 'Harajuku', nameJp: '原宿', line: 'yamanote', lineColor: '#9ACD32', coordinates: [35.6702, 139.7027], connections: [] },
  { id: 'tokyo-y', name: 'Tokyo', nameJp: '東京', line: 'yamanote', lineColor: '#9ACD32', coordinates: [35.6812, 139.7671], connections: ['ginza', 'marunouchi', 'chuo'] },
  { id: 'akihabara-y', name: 'Akihabara', nameJp: '秋葉原', line: 'yamanote', lineColor: '#9ACD32', coordinates: [35.6984, 139.7731], connections: ['hibiya'] },
  { id: 'ueno-y', name: 'Ueno', nameJp: '上野', line: 'yamanote', lineColor: '#9ACD32', coordinates: [35.7148, 139.7737], connections: ['ginza', 'hibiya'] },
  { id: 'ikebukuro-y', name: 'Ikebukuro', nameJp: '池袋', line: 'yamanote', lineColor: '#9ACD32', coordinates: [35.7295, 139.7109], connections: ['marunouchi'] },
  
  // Hanzomon Line (Purple)
  { id: 'omotesando-hz', name: 'Omotesando', nameJp: '表参道', line: 'hanzomon', lineColor: '#8F76D6', coordinates: [35.6652, 139.7123], connections: ['ginza', 'chiyoda'] },
  { id: 'shibuya-hz', name: 'Shibuya', nameJp: '渋谷', line: 'hanzomon', lineColor: '#8F76D6', coordinates: [35.6595, 139.7004], connections: ['ginza', 'yamanote'] },
  
  // Asakusa Line (Rose)
  { id: 'asakusa-a', name: 'Asakusa', nameJp: '浅草', line: 'asakusa', lineColor: '#EC6E65', coordinates: [35.7148, 139.7967], connections: ['ginza'] },
  { id: 'nihonbashi-a', name: 'Nihonbashi', nameJp: '日本橋', line: 'asakusa', lineColor: '#EC6E65', coordinates: [35.6840, 139.7745], connections: ['ginza', 'tozai'] },
  
  // Mita Line (Blue)
  { id: 'tokyo-mita', name: 'Tokyo', nameJp: '東京', line: 'mita', lineColor: '#0078C2', coordinates: [35.6812, 139.7671], connections: ['ginza', 'marunouchi', 'yamanote'] },
  { id: 'roppongi-mita', name: 'Roppongi', nameJp: '六本木一丁目', line: 'mita', lineColor: '#0078C2', coordinates: [35.6656, 139.7390], connections: [] },
  
  // Fukutoshin Line (Brown)
  { id: 'shibuya-f', name: 'Shibuya', nameJp: '渋谷', line: 'fukutoshin', lineColor: '#8B4513', coordinates: [35.6595, 139.7004], connections: ['ginza', 'yamanote'] },
  { id: 'ikebukuro-f', name: 'Ikebukuro', nameJp: '池袋', line: 'fukutoshin', lineColor: '#8B4513', coordinates: [35.7295, 139.7109], connections: ['yamanote', 'marunouchi'] },
  
  // Tozai Line (Cyan)
  { id: 'nakano-t', name: 'Nakano', nameJp: '中野', line: 'tozai', lineColor: '#00BFFF', coordinates: [35.7061, 139.6656], connections: ['jr'] },
  { id: 'takadanobaba-t', name: 'Takadanobaba', nameJp: '高田馬場', line: 'tozai', lineColor: '#00BFFF', coordinates: [35.7126, 139.7039], connections: ['yamanote'] },
  { id: 'nihonbashi-t', name: 'Nihonbashi', nameJp: '日本橋', line: 'tozai', lineColor: '#00BFFF', coordinates: [35.6840, 139.7745], connections: ['ginza', 'asakusa'] },
  { id: 'toyosu-t', name: 'Toyosu', nameJp: '豊洲', line: 'tozai', lineColor: '#00BFFF', coordinates: [35.6556, 139.7877], connections: ['yurikamome'] },
  
  // Yurikamome Line (Rainbow)
  { id: 'toyosu-y', name: 'Toyosu', nameJp: '豊洲', line: 'yurikamome', lineColor: '#FF69B4', coordinates: [35.6556, 139.7877], connections: ['tozai'] },
  { id: 'odaiba-y', name: 'Odaiba', nameJp: 'お台場', line: 'yurikamome', lineColor: '#FF69B4', coordinates: [35.6259, 139.7764], connections: [] },
  { id: 'tokyo-teleport-y', name: 'Tokyo Teleport', nameJp: '東京テレポート', line: 'yurikamome', lineColor: '#FF69B4', coordinates: [35.6274, 139.7835], connections: ['rinkai'] },
  
  // Rinkai Line (Navy)
  { id: 'tokyo-teleport-r', name: 'Tokyo Teleport', nameJp: '東京テレポート', line: 'rinkai', lineColor: '#000080', coordinates: [35.6274, 139.7835], connections: ['yurikamome'] },
  { id: 'shin-kiba-r', name: 'Shin-Kiba', nameJp: '新木場', line: 'rinkai', lineColor: '#000080', coordinates: [35.6458, 139.8267], connections: ['yurakucho'] },
];

export const tokyoMetroLines: MetroLine[] = [
  { id: 'ginza', name: 'Ginza Line', color: '#FF9500', stations: ['shibuya-g', 'omotesando-g', 'ginza-g', 'tokyo-g', 'ueno-g', 'asakusa-g'] },
  { id: 'marunouchi', name: 'Marunouchi Line', color: '#E60012', stations: ['shinjuku-m', 'tokyo-m', 'ginza-m', 'ikebukuro-m'] },
  { id: 'hibiya', name: 'Hibiya Line', color: '#C9C9C9', stations: ['roppongi-h', 'ginza-h', 'akihabara-h', 'ueno-h'] },
  { id: 'oedo', name: 'Oedo Line', color: '#B6007A', stations: ['shinjuku-o', 'roppongi-o', 'tsukiji-o'] },
  { id: 'chiyoda', name: 'Chiyoda Line', color: '#00BB85', stations: ['omotesando-c', 'meijijingumae-c', 'akihabara-c'] },
  { id: 'yamanote', name: 'Yamanote Line (JR)', color: '#9ACD32', stations: ['shibuya-y', 'harajuku-y', 'shinjuku-y', 'tokyo-y', 'akihabara-y', 'ueno-y', 'ikebukuro-y'] },
  { id: 'hanzomon', name: 'Hanzomon Line', color: '#8F76D6', stations: ['omotesando-hz', 'shibuya-hz'] },
  { id: 'asakusa', name: 'Asakusa Line', color: '#EC6E65', stations: ['asakusa-a', 'nihonbashi-a'] },
  { id: 'mita', name: 'Mita Line', color: '#0078C2', stations: ['tokyo-mita', 'roppongi-mita'] },
  { id: 'fukutoshin', name: 'Fukutoshin Line', color: '#8B4513', stations: ['shibuya-f', 'ikebukuro-f'] },
  { id: 'tozai', name: 'Tozai Line', color: '#00BFFF', stations: ['nakano-t', 'takadanobaba-t', 'nihonbashi-t', 'toyosu-t'] },
  { id: 'yurikamome', name: 'Yurikamome Line', color: '#FF69B4', stations: ['toyosu-y', 'odaiba-y', 'tokyo-teleport-y'] },
  { id: 'rinkai', name: 'Rinkai Line', color: '#000080', stations: ['tokyo-teleport-r', 'shin-kiba-r'] },
];

// Kyoto Metro
export const kyotoMetroStations: MetroStation[] = [
  // Karasuma Line (Green)
  { id: 'kokusai-kaikan', name: 'Kokusai Kaikan', nameJp: '国際会館', line: 'karasuma', lineColor: '#00A040', coordinates: [35.0612, 135.7851], connections: [] },
  { id: 'kitaoji', name: 'Kitaoji', nameJp: '北大路', line: 'karasuma', lineColor: '#00A040', coordinates: [35.0448, 135.7589], connections: [] },
  { id: 'imadegawa', name: 'Imadegawa', nameJp: '今出川', line: 'karasuma', lineColor: '#00A040', coordinates: [35.0301, 135.7593], connections: [] },
  { id: 'karasuma-oike', name: 'Karasuma Oike', nameJp: '烏丸御池', line: 'karasuma', lineColor: '#00A040', coordinates: [35.0102, 135.7598], connections: ['tozai'] },
  { id: 'shijo', name: 'Shijo', nameJp: '四条', line: 'karasuma', lineColor: '#00A040', coordinates: [35.0030, 135.7596], connections: ['hankyu'] },
  { id: 'kyoto-station', name: 'Kyoto', nameJp: '京都', line: 'karasuma', lineColor: '#00A040', coordinates: [34.9858, 135.7588], connections: ['shinkansen', 'jr'] },
  
  // Tozai Line (Red)
  { id: 'uzumasa-tenjingawa', name: 'Uzumasa Tenjingawa', nameJp: '太秦天神川', line: 'tozai', lineColor: '#E60012', coordinates: [35.0130, 135.7106], connections: [] },
  { id: 'nijo', name: 'Nijo', nameJp: '二条', line: 'tozai', lineColor: '#E60012', coordinates: [35.0102, 135.7598], connections: ['karasuma', 'jr'] },
  { id: 'kyoto-shiyakusho-mae', name: 'Kyoto Shiyakusho-mae', nameJp: '京都市役所前', line: 'tozai', lineColor: '#E60012', coordinates: [35.0210, 135.7596], connections: [] },
  { id: 'sanjo-keihan', name: 'Sanjo Keihan', nameJp: '三条京阪', line: 'tozai', lineColor: '#E60012', coordinates: [35.0094, 135.7716], connections: ['keihan'] },
  { id: 'higashiyama', name: 'Higashiyama', nameJp: '東山', line: 'tozai', lineColor: '#E60012', coordinates: [35.0037, 135.7786], connections: [] },
  { id: 'misasagi', name: 'Misasagi', nameJp: '御陵', line: 'tozai', lineColor: '#E60012', coordinates: [34.9968, 135.8014], connections: ['keihan'] },
  
  // Keihan Line (Olive)
  { id: 'sanjo-keihan-k', name: 'Sanjo', nameJp: '三条', line: 'keihan', lineColor: '#6B8E23', coordinates: [35.0094, 135.7716], connections: ['tozai'] },
  { id: 'gion-shijo-k', name: 'Gion-Shijo', nameJp: '祇園四条', line: 'keihan', lineColor: '#6B8E23', coordinates: [35.0037, 135.7786], connections: ['hankyu'] },
  { id: 'fushimi-inari-k', name: 'Fushimi-Inari', nameJp: '伏見稲荷', line: 'keihan', lineColor: '#6B8E23', coordinates: [34.9671, 135.7727], connections: ['jr'] },
  
  // Hankyu Line (Maroon)
  { id: 'karasuma-h', name: 'Karasuma', nameJp: '烏丸', line: 'hankyu', lineColor: '#800000', coordinates: [35.0030, 135.7596], connections: ['karasuma-line'] },
  { id: 'omiya-h', name: 'Omiya', nameJp: '大宮', line: 'hankyu', lineColor: '#800000', coordinates: [35.0034, 135.7489], connections: [] },
  { id: 'kawaramachi-h', name: 'Kawaramachi', nameJp: '河原町', line: 'hankyu', lineColor: '#800000', coordinates: [35.0037, 135.7786], connections: ['keihan'] },
  
  // JR Nara Line (Green)
  { id: 'kyoto-jr', name: 'Kyoto', nameJp: '京都', line: 'jr-nara', lineColor: '#228B22', coordinates: [34.9858, 135.7588], connections: ['shinkansen', 'karasuma'] },
  { id: 'inari-jr', name: 'Inari', nameJp: '稲荷', line: 'jr-nara', lineColor: '#228B22', coordinates: [34.9671, 135.7727], connections: ['keihan'] },
  { id: 'nara-jr', name: 'Nara', nameJp: '奈良', line: 'jr-nara', lineColor: '#228B22', coordinates: [34.6851, 135.8175], connections: ['kintetsu'] },
  
  // JR Sagano Line (Blue)
  { id: 'kyoto-sagano', name: 'Kyoto', nameJp: '京都', line: 'jr-sagano', lineColor: '#4169E1', coordinates: [34.9858, 135.7588], connections: ['shinkansen', 'karasuma'] },
  { id: 'umekoji-kyotonishi', name: 'Umekoji-Kyotonishi', nameJp: '梅小路京都西', line: 'jr-sagano', lineColor: '#4169E1', coordinates: [34.9898, 135.7413], connections: [] },
  { id: 'sagaarashiyama', name: 'Saga-Arashiyama', nameJp: '嵯峨嵐山', line: 'jr-sagano', lineColor: '#4169E1', coordinates: [35.0170, 135.6710], connections: [] },
];

export const kyotoMetroLines: MetroLine[] = [
  { id: 'karasuma', name: 'Karasuma Line', color: '#00A040', stations: ['kokusai-kaikan', 'kitaoji', 'imadegawa', 'karasuma-oike', 'shijo', 'kyoto-station'] },
  { id: 'tozai', name: 'Tozai Line', color: '#E60012', stations: ['uzumasa-tenjingawa', 'nijo', 'kyoto-shiyakusho-mae', 'sanjo-keihan', 'higashiyama', 'misasagi'] },
  { id: 'keihan', name: 'Keihan Line', color: '#6B8E23', stations: ['sanjo-keihan-k', 'gion-shijo-k', 'fushimi-inari-k'] },
  { id: 'hankyu', name: 'Hankyu Line', color: '#800000', stations: ['karasuma-h', 'omiya-h', 'kawaramachi-h'] },
  { id: 'jr-nara', name: 'JR Nara Line', color: '#228B22', stations: ['kyoto-jr', 'inari-jr', 'nara-jr'] },
  { id: 'jr-sagano', name: 'JR Sagano Line', color: '#4169E1', stations: ['kyoto-sagano', 'umekoji-kyotonishi', 'sagaarashiyama'] },
];

// Osaka Metro
export const osakaMetroStations: MetroStation[] = [
  // Midosuji Line (Red)
  { id: 'esaka', name: 'Esaka', nameJp: '江坂', line: 'midosuji', lineColor: '#E60012', coordinates: [34.7587, 135.4968], connections: [] },
  { id: 'senri-chuo', name: 'Senri-Chuo', nameJp: '千里中央', line: 'midosuji', lineColor: '#E60012', coordinates: [34.8086, 135.4965], connections: [] },
  { id: 'umeda', name: 'Umeda', nameJp: '梅田', line: 'midosuji', lineColor: '#E60012', coordinates: [34.7008, 135.4990], connections: ['jr', 'hankyu', 'hanshin'] },
  { id: 'shinsaibashi', name: 'Shinsaibashi', nameJp: '心斎橋', line: 'midosuji', lineColor: '#E60012', coordinates: [34.6785, 135.5002], connections: ['nagahori'] },
  { id: 'namba', name: 'Namba', nameJp: '難波', line: 'midosuji', lineColor: '#E60012', coordinates: [34.6664, 135.5013], connections: ['nankai', 'kintetsu', 'hanshin'] },
  { id: 'tennoji', name: 'Tennoji', nameJp: '天王寺', line: 'midosuji', lineColor: '#E60012', coordinates: [34.6472, 135.5140], connections: ['jr', 'kintetsu'] },
  
  // Chuo Line (Green)
  { id: 'cosmo-square', name: 'Cosmo Square', nameJp: 'コスモスクエア', line: 'chuo', lineColor: '#00A040', coordinates: [34.6425, 135.4122], connections: [] },
  { id: 'osakako', name: 'Osakako', nameJp: '大阪港', line: 'chuo', lineColor: '#00A040', coordinates: [34.6536, 135.4324], connections: [] },
  { id: 'hommachi', name: 'Hommachi', nameJp: '本町', line: 'chuo', lineColor: '#00A040', coordinates: [34.6819, 135.4972], connections: ['midosuji', 'yotsubashi'] },
  { id: 'morinomiya', name: 'Morinomiya', nameJp: '森ノ宮', line: 'chuo', lineColor: '#00A040', coordinates: [34.6814, 135.5345], connections: ['nagahori'] },
  { id: 'nagata', name: 'Nagata', nameJp: '長田', line: 'chuo', lineColor: '#00A040', coordinates: [34.6796, 135.5766], connections: [] },
  
  // Sakaisuji Line (Brown)
  { id: 'tenjimbashisuji-rokuchome', name: 'Tenjimbashisuji 6-chome', nameJp: '天神橋筋六丁目', line: 'sakaisuji', lineColor: '#8B4513', coordinates: [34.7108, 135.5116], connections: ['tanimachi'] },
  { id: 'kita-senri', name: 'Kita-Senri', nameJp: '北千里', line: 'sakaisuji', lineColor: '#8B4513', coordinates: [34.7752, 135.5106], connections: [] },
  { id: 'sakaisuji-hommachi', name: 'Sakaisuji-Hommachi', nameJp: '堺筋本町', line: 'sakaisuji', lineColor: '#8B4513', coordinates: [34.6819, 135.5056], connections: ['chuo'] },
  { id: 'nipponbashi', name: 'Nipponbashi', nameJp: '日本橋', line: 'sakaisuji', lineColor: '#8B4513', coordinates: [34.6659, 135.5063], connections: ['sennichimae'] },
  { id: 'dobutsuen-mae', name: 'Dobutsuen-mae', nameJp: '動物園前', line: 'sakaisuji', lineColor: '#8B4513', coordinates: [34.6489, 135.5050], connections: ['midosuji'] },
  
  // Nagahori Tsurumi-ryokuchi Line (Gold)
  { id: 'shinsaibashi-n', name: 'Shinsaibashi', nameJp: '心斎橋', line: 'nagahori', lineColor: '#FFD700', coordinates: [34.6785, 135.5002], connections: ['midosuji'] },
  { id: 'namba-n', name: 'Namba', nameJp: '難波', line: 'nagahori', lineColor: '#FFD700', coordinates: [34.6664, 135.5013], connections: ['midosuji', 'nankai'] },
  { id: 'morinomiya-n', name: 'Morinomiya', nameJp: '森ノ宮', line: 'nagahori', lineColor: '#FFD700', coordinates: [34.6814, 135.5345], connections: ['chuo', 'jr'] },
  { id: 'kyocera-dome', name: 'Kyocera Dome', nameJp: 'ドーム前', line: 'nagahori', lineColor: '#FFD700', coordinates: [34.6693, 135.4763], connections: [] },
  
  // Yotsubashi Line (Blue)
  { id: 'nishiumeda-y', name: 'Nishi-Umeda', nameJp: '西梅田', line: 'yotsubashi', lineColor: '#0078C2', coordinates: [34.6989, 135.4957], connections: ['umeda'] },
  { id: 'hommachi-y', name: 'Hommachi', nameJp: '本町', line: 'yotsubashi', lineColor: '#0078C2', coordinates: [34.6819, 135.4972], connections: ['midosuji', 'chuo'] },
  { id: 'namba-y', name: 'Namba', nameJp: '難波', line: 'yotsubashi', lineColor: '#0078C2', coordinates: [34.6664, 135.5013], connections: ['midosuji', 'nankai'] },
  
  // JR Osaka Loop Line (Red)
  { id: 'osaka-jr', name: 'Osaka', nameJp: '大阪', line: 'jr-loop', lineColor: '#E60012', coordinates: [34.7025, 135.4959], connections: ['midosuji', 'shinkansen'] },
  { id: 'tennoji-jr', name: 'Tennoji', nameJp: '天王寺', line: 'jr-loop', lineColor: '#E60012', coordinates: [34.6472, 135.5140], connections: ['midosuji', 'kintetsu'] },
  { id: 'kyobashi-jr', name: 'Kyobashi', nameJp: '京橋', line: 'jr-loop', lineColor: '#E60012', coordinates: [34.6969, 135.5282], connections: ['keihan'] },
  
  // JR Kobe Line (Blue)
  { id: 'osaka-kobe', name: 'Osaka', nameJp: '大阪', line: 'jr-kobe', lineColor: '#4169E1', coordinates: [34.7025, 135.4959], connections: ['shinkansen'] },
  { id: 'umeda-kobe', name: 'Umeda', nameJp: '梅田', line: 'jr-kobe', lineColor: '#4169E1', coordinates: [34.7008, 135.4990], connections: ['midosuji'] },
  
  // JR Kyoto Line (Navy)
  { id: 'osaka-kyoto', name: 'Osaka', nameJp: '大阪', line: 'jr-kyoto', lineColor: '#000080', coordinates: [34.7025, 135.4959], connections: ['shinkansen'] },
  { id: 'shin-osaka', name: 'Shin-Osaka', nameJp: '新大阪', line: 'jr-kyoto', lineColor: '#000080', coordinates: [34.7335, 135.5000], connections: ['shinkansen', 'midosuji'] },
  
  // JR Nara Line (Green)
  { id: 'tennoji-nara', name: 'Tennoji', nameJp: '天王寺', line: 'jr-nara', lineColor: '#228B22', coordinates: [34.6472, 135.5140], connections: ['midosuji'] },
  { id: 'sakai-nara', name: 'Sakai', nameJp: '堺', line: 'jr-nara', lineColor: '#228B22', coordinates: [34.5823, 135.4679], connections: [] },
  
  // Hankyu Kobe Line (Maroon)
  { id: 'umeda-hankyu', name: 'Umeda', nameJp: '梅田', line: 'hankyu-kobe', lineColor: '#800000', coordinates: [34.7008, 135.4990], connections: ['midosuji'] },
  { id: 'sannomiya-hankyu', name: 'Sannomiya', nameJp: '三宮', line: 'hankyu-kobe', lineColor: '#800000', coordinates: [34.6937, 135.1955], connections: ['jr', 'port-liner'] },
  
  // Nankai Line (Orange)
  { id: 'namba-nankai', name: 'Namba', nameJp: '難波', line: 'nankai', lineColor: '#FF8C00', coordinates: [34.6664, 135.5013], connections: ['midosuji'] },
  { id: 'kansai-airport', name: 'Kansai Airport', nameJp: '関西空港', line: 'nankai', lineColor: '#FF8C00', coordinates: [34.4358, 135.2441], connections: ['jr'] },
  
  // Kintetsu Line (Pink)
  { id: 'namba-kintetsu', name: 'Namba', nameJp: '難波', line: 'kintetsu', lineColor: '#FF69B4', coordinates: [34.6664, 135.5013], connections: ['midosuji'] },
  { id: 'nara-kintetsu', name: 'Kintetsu Nara', nameJp: '近鉄奈良', line: 'kintetsu', lineColor: '#FF69B4', coordinates: [34.6842, 135.8274], connections: ['jr'] },
  
  // Hanshin Line (Navy)
  { id: 'umeda-hanshin', name: 'Umeda', nameJp: '梅田', line: 'hanshin', lineColor: '#191970', coordinates: [34.7008, 135.4990], connections: ['midosuji'] },
  { id: 'sannomiya-hanshin', name: 'Sannomiya', nameJp: '三宮', line: 'hanshin', lineColor: '#191970', coordinates: [34.6937, 135.1955], connections: ['hankyu'] },
];

export const osakaMetroLines: MetroLine[] = [
  { id: 'midosuji', name: 'Midosuji Line', color: '#E60012', stations: ['esaka', 'senri-chuo', 'umeda', 'shinsaibashi', 'namba', 'tennoji'] },
  { id: 'chuo', name: 'Chuo Line', color: '#00A040', stations: ['cosmo-square', 'osakako', 'hommachi', 'morinomiya', 'nagata'] },
  { id: 'sakaisuji', name: 'Sakaisuji Line', color: '#8B4513', stations: ['tenjimbashisuji-rokuchome', 'kita-senri', 'sakaisuji-hommachi', 'nipponbashi', 'dobutsuen-mae'] },
  { id: 'nagahori', name: 'Nagahori Line', color: '#FFD700', stations: ['shinsaibashi-n', 'namba-n', 'morinomiya-n', 'kyocera-dome'] },
  { id: 'yotsubashi', name: 'Yotsubashi Line', color: '#0078C2', stations: ['nishiumeda-y', 'hommachi-y', 'namba-y'] },
  { id: 'jr-loop', name: 'JR Osaka Loop Line', color: '#E60012', stations: ['osaka-jr', 'tennoji-jr', 'kyobashi-jr'] },
  { id: 'jr-kobe', name: 'JR Kobe Line', color: '#4169E1', stations: ['osaka-kobe', 'umeda-kobe'] },
  { id: 'jr-kyoto', name: 'JR Kyoto Line', color: '#000080', stations: ['osaka-kyoto', 'shin-osaka'] },
  { id: 'jr-nara', name: 'JR Nara Line', color: '#228B22', stations: ['tennoji-nara', 'sakai-nara'] },
  { id: 'hankyu-kobe', name: 'Hankyu Kobe Line', color: '#800000', stations: ['umeda-hankyu', 'sannomiya-hankyu'] },
  { id: 'nankai', name: 'Nankai Line', color: '#FF8C00', stations: ['namba-nankai', 'kansai-airport'] },
  { id: 'kintetsu', name: 'Kintetsu Line', color: '#FF69B4', stations: ['namba-kintetsu', 'nara-kintetsu'] },
  { id: 'hanshin', name: 'Hanshin Line', color: '#191970', stations: ['umeda-hanshin', 'sannomiya-hanshin'] },
];

// Nara - linee JR e Kintetsu
export const naraStations: MetroStation[] = [
  { id: 'nara-station', name: 'Nara', nameJp: '奈良', line: 'jr', lineColor: '#0078C2', coordinates: [34.6851, 135.8175], connections: ['kintetsu'] },
  { id: 'kintetsu-nara', name: 'Kintetsu Nara', nameJp: '近鉄奈良', line: 'kintetsu', lineColor: '#E60012', coordinates: [34.6842, 135.8274], connections: ['jr'] },
  { id: 'shin-omiya', name: 'Shin-Omiya', nameJp: '新大宮', line: 'kintetsu', lineColor: '#E60012', coordinates: [34.6933, 135.8121], connections: [] },
  { id: 'ikoma', name: 'Ikoma', nameJp: '生駒', line: 'kintetsu', lineColor: '#E60012', coordinates: [34.6932, 135.6997], connections: [] },
  { id: 'kashihara-jingu-mae', name: 'Kashihara-Jingu-mae', nameJp: '橿原神宮前', line: 'kintetsu', lineColor: '#E60012', coordinates: [34.4841, 135.7936], connections: [] },
  { id: 'horyuji', name: 'Horyuji', nameJp: '法隆寺', line: 'jr', lineColor: '#0078C2', coordinates: [34.6142, 135.7344], connections: [] },
  { id: 'sakurai', name: 'Sakurai', nameJp: '桜井', line: 'jr', lineColor: '#0078C2', coordinates: [34.5178, 135.8475], connections: ['kintetsu'] },
  { id: 'yoshino', name: 'Yoshino', nameJp: '吉野', line: 'kintetsu', lineColor: '#E60012', coordinates: [34.3564, 135.8583], connections: [] },
];

export const naraLines: MetroLine[] = [
  { id: 'jr', name: 'JR Line', color: '#0078C2', stations: ['nara-station', 'horyuji', 'sakurai'] },
  { id: 'kintetsu', name: 'Kintetsu Line', color: '#E60012', stations: ['kintetsu-nara', 'shin-omiya', 'ikoma', 'kashihara-jingu-mae', 'yoshino'] },
];

// All metro stations combined
export const metroStations: MetroStation[] = [
  ...tokyoMetroStations,
  ...kyotoMetroStations,
  ...osakaMetroStations,
  ...naraStations,
];

// Bus Stations for Tokyo - Linee bus con fermate reali alle attrazioni
export const tokyoBusStations: MetroStation[] = [
  // Toei Bus 01 - Shibuya-Ginza-Asakusa (Linea Turistica Centro)
  { id: 'bus-shibuya-01', name: 'Shibuya Bus', nameJp: '渋谷バス', line: 'toei-01', lineColor: '#0066CC', coordinates: [35.6595, 139.7004], connections: [] },
  { id: 'bus-harajuku-01', name: 'Harajuku Bus', nameJp: '原宿バス', line: 'toei-01', lineColor: '#0066CC', coordinates: [35.6702, 139.7027], connections: [] },
  { id: 'bus-omotesando-01', name: 'Omotesando Bus', nameJp: '表参道バス', line: 'toei-01', lineColor: '#0066CC', coordinates: [35.6652, 139.7123], connections: [] },
  { id: 'bus-ginza-01', name: 'Ginza Bus', nameJp: '銀座バス', line: 'toei-01', lineColor: '#0066CC', coordinates: [35.6717, 139.7650], connections: [] },
  { id: 'bus-tokyo-01', name: 'Tokyo Station Bus', nameJp: '東京駅バス', line: 'toei-01', lineColor: '#0066CC', coordinates: [35.6812, 139.7671], connections: [] },
  { id: 'bus-asakusa-01', name: 'Asakusa Bus', nameJp: '浅草バス', line: 'toei-01', lineColor: '#0066CC', coordinates: [35.7148, 139.7967], connections: [] },
  
  // Toei Bus 02 - Shinjuku-Ueno-Akihabara (Linea Nord)
  { id: 'bus-shinjuku-02', name: 'Shinjuku Bus', nameJp: '新宿バス', line: 'toei-02', lineColor: '#009944', coordinates: [35.6906, 139.6999], connections: [] },
  { id: 'bus-yoyogi-02', name: 'Yoyogi Bus', nameJp: '代々木バス', line: 'toei-02', lineColor: '#009944', coordinates: [35.6717, 139.6956], connections: [] },
  { id: 'bus-ikebukuro-02', name: 'Ikebukuro Bus', nameJp: '池袋バス', line: 'toei-02', lineColor: '#009944', coordinates: [35.7295, 139.7109], connections: [] },
  { id: 'bus-ueno-02', name: 'Ueno Bus', nameJp: '上野バス', line: 'toei-02', lineColor: '#009944', coordinates: [35.7148, 139.7737], connections: [] },
  { id: 'bus-akihabara-02', name: 'Akihabara Bus', nameJp: '秋葉原バス', line: 'toei-02', lineColor: '#009944', coordinates: [35.6984, 139.7731], connections: [] },
  
  // Toei Bus 03 - Asakusa-Roppongi-Odaiba (Linea Est-Sud)
  { id: 'bus-asakusa-03', name: 'Asakusa Bus', nameJp: '浅草バス', line: 'toei-03', lineColor: '#FF6600', coordinates: [35.7148, 139.7967], connections: [] },
  { id: 'bus-ueno-03', name: 'Ueno Bus', nameJp: '上野バス', line: 'toei-03', lineColor: '#FF6600', coordinates: [35.7148, 139.7737], connections: [] },
  { id: 'bus-ginza-03', name: 'Ginza Bus', nameJp: '銀座バス', line: 'toei-03', lineColor: '#FF6600', coordinates: [35.6717, 139.7650], connections: [] },
  { id: 'bus-roppongi-03', name: 'Roppongi Bus', nameJp: '六本木バス', line: 'toei-03', lineColor: '#FF6600', coordinates: [35.6628, 139.7314], connections: [] },
  { id: 'bus-odaiba-03', name: 'Odaiba Bus', nameJp: 'お台場バス', line: 'toei-03', lineColor: '#FF6600', coordinates: [35.6259, 139.7764], connections: [] },
  
  // Toei Bus 04 - Tokyo-Odaiba-Toyosu (Linea Baia)
  { id: 'bus-tokyo-04', name: 'Tokyo Station Bus', nameJp: '東京駅バス', line: 'toei-04', lineColor: '#CC0066', coordinates: [35.6812, 139.7671], connections: [] },
  { id: 'bus-tsukiji-04', name: 'Tsukiji Bus', nameJp: '築地バス', line: 'toei-04', lineColor: '#CC0066', coordinates: [35.6654, 139.7707], connections: [] },
  { id: 'bus-toyosu-04', name: 'Toyosu Bus', nameJp: '豊洲バス', line: 'toei-04', lineColor: '#CC0066', coordinates: [35.6556, 139.7877], connections: [] },
  { id: 'bus-odaiba-04', name: 'Odaiba Bus', nameJp: 'お台場バス', line: 'toei-04', lineColor: '#CC0066', coordinates: [35.6259, 139.7764], connections: [] },
  { id: 'bus-skytree-04', name: 'Skytree Bus', nameJp: 'スカイツリーバス', line: 'toei-04', lineColor: '#CC0066', coordinates: [35.7100, 139.8107], connections: [] },
  
  // Toei Bus 05 - Ikebukuro-Shibuya-Nakano (Linea Ovest)
  { id: 'bus-ikebukuro-05', name: 'Ikebukuro Bus', nameJp: '池袋バス', line: 'toei-05', lineColor: '#9900CC', coordinates: [35.7295, 139.7109], connections: [] },
  { id: 'bus-shibuya-05', name: 'Shibuya Bus', nameJp: '渋谷バス', line: 'toei-05', lineColor: '#9900CC', coordinates: [35.6595, 139.7004], connections: [] },
  { id: 'bus-nakano-05', name: 'Nakano Bus', nameJp: '中野バス', line: 'toei-05', lineColor: '#9900CC', coordinates: [35.7061, 139.6656], connections: [] },
  { id: 'bus-kichijoji-05', name: 'Kichijoji Bus', nameJp: '吉祥寺バス', line: 'toei-05', lineColor: '#9900CC', coordinates: [35.7036, 139.5796], connections: [] },
  
  // Toei Bus 06 - Sensoji-Skytree (Linea Asakusa)
  { id: 'bus-sensoji-06', name: 'Sensoji Bus', nameJp: '浅草寺バス', line: 'toei-06', lineColor: '#FF1493', coordinates: [35.7148, 139.7967], connections: [] },
  { id: 'bus-asakusa-06', name: 'Asakusa Bus', nameJp: '浅草バス', line: 'toei-06', lineColor: '#FF1493', coordinates: [35.7148, 139.7967], connections: [] },
  { id: 'bus-skytree-06', name: 'Skytree Bus', nameJp: 'スカイツリーバス', line: 'toei-06', lineColor: '#FF1493', coordinates: [35.7100, 139.8107], connections: [] },
  
  // Toei Bus 07 - Meiji Jingu-Shibuya-Harajuku (Linea Turistica Ovest)
  { id: 'bus-meiji-07', name: 'Meiji Jingu Bus', nameJp: '明治神宮バス', line: 'toei-07', lineColor: '#20B2AA', coordinates: [35.6764, 139.6993], connections: [] },
  { id: 'bus-shibuya-07', name: 'Shibuya Bus', nameJp: '渋谷バス', line: 'toei-07', lineColor: '#20B2AA', coordinates: [35.6595, 139.7004], connections: [] },
  { id: 'bus-harajuku-07', name: 'Harajuku Bus', nameJp: '原宿バス', line: 'toei-07', lineColor: '#20B2AA', coordinates: [35.6702, 139.7027], connections: [] },
  { id: 'bus-takeshita-07', name: 'Takeshita Bus', nameJp: '竹下通りバス', line: 'toei-07', lineColor: '#20B2AA', coordinates: [35.6715, 139.7031], connections: [] },
  
  // Toei Bus 08 - Ueno Park-Zoo-Museums (Linea Musei)
  { id: 'bus-ueno-park-08', name: 'Ueno Park Bus', nameJp: '上野公園バス', line: 'toei-08', lineColor: '#DC143C', coordinates: [35.7155, 139.7740], connections: [] },
  { id: 'bus-ueno-zoo-08', name: 'Ueno Zoo Bus', nameJp: '上野動物園バス', line: 'toei-08', lineColor: '#DC143C', coordinates: [35.7165, 139.7730], connections: [] },
  { id: 'bus-tokyo-museum-08', name: 'Tokyo Museum Bus', nameJp: '東京博物館バス', line: 'toei-08', lineColor: '#DC143C', coordinates: [35.7188, 139.7765], connections: [] },
  
  // Toei Bus 09 - Imperial Palace-Ginza-Tsukiji (Linea Centro)
  { id: 'bus-imperial-09', name: 'Imperial Palace Bus', nameJp: '皇居バス', line: 'toei-09', lineColor: '#4169E1', coordinates: [35.6852, 139.7528], connections: [] },
  { id: 'bus-ginza-09', name: 'Ginza Bus', nameJp: '銀座バス', line: 'toei-09', lineColor: '#4169E1', coordinates: [35.6717, 139.7650], connections: [] },
  { id: 'bus-tsukiji-09', name: 'Tsukiji Bus', nameJp: '築地バス', line: 'toei-09', lineColor: '#4169E1', coordinates: [35.6654, 139.7707], connections: [] },
  
  // Toei Bus 10 - Shinjuku Golden Gai-Kabukicho (Linea Notturna)
  { id: 'bus-shinjuku-golden-10', name: 'Golden Gai Bus', nameJp: 'ゴールデン街バス', line: 'toei-10', lineColor: '#8B008B', coordinates: [35.6940, 139.7040], connections: [] },
  { id: 'bus-kabukicho-10', name: 'Kabukicho Bus', nameJp: '歌舞伎町バス', line: 'toei-10', lineColor: '#8B008B', coordinates: [35.6950, 139.7020], connections: [] },
  { id: 'bus-shinjuku-10', name: 'Shinjuku Bus', nameJp: '新宿バス', line: 'toei-10', lineColor: '#8B008B', coordinates: [35.6906, 139.6999], connections: [] },
];

// Kyoto Bus Stations - Linee bus che servono le attrazioni turistiche
export const kyotoBusStations: MetroStation[] = [
  // Bus 100 - Templi del Centro (Linea Rossa)
  { id: 'kyoto-bus-kyoto-st-100', name: 'Kyoto Station Bus', nameJp: '京都駅バス', line: 'kyoto-100', lineColor: '#E60012', coordinates: [34.9858, 135.7588], connections: [] },
  { id: 'kyoto-bus-tofukuji-100', name: 'Tofuku-ji Bus', nameJp: '東福寺バス', line: 'kyoto-100', lineColor: '#E60012', coordinates: [34.9762, 135.9817], connections: [] },
  { id: 'kyoto-bus-fushimi-100', name: 'Fushimi Inari Bus', nameJp: '伏見稲荷バス', line: 'kyoto-100', lineColor: '#E60012', coordinates: [34.9671, 135.7727], connections: [] },
  { id: 'kyoto-bus-gion-100', name: 'Gion Bus', nameJp: '祇園バス', line: 'kyoto-100', lineColor: '#E60012', coordinates: [35.0037, 135.7786], connections: [] },
  { id: 'kyoto-bus-kiyomizu-100', name: 'Kiyomizu-dera Bus', nameJp: '清水寺バス', line: 'kyoto-100', lineColor: '#E60012', coordinates: [34.9949, 135.7850], connections: [] },
  { id: 'kyoto-bus-yasaka-100', name: 'Yasaka Shrine Bus', nameJp: '八坂神社バス', line: 'kyoto-100', lineColor: '#E60012', coordinates: [35.0037, 135.7786], connections: [] },
  
  // Bus 101 - Gion-Kiyomizu-Nishiki (Linea Verde)
  { id: 'kyoto-bus-gion-101', name: 'Gion Bus', nameJp: '祇園バス', line: 'kyoto-101', lineColor: '#00A040', coordinates: [35.0037, 135.7786], connections: [] },
  { id: 'kyoto-bus-kiyomizu-101', name: 'Kiyomizu-dera Bus', nameJp: '清水寺バス', line: 'kyoto-101', lineColor: '#00A040', coordinates: [34.9949, 135.7850], connections: [] },
  { id: 'kyoto-bus-nishiki-101', name: 'Nishiki Market Bus', nameJp: '錦市場バス', line: 'kyoto-101', lineColor: '#00A040', coordinates: [35.0050, 135.7649], connections: [] },
  { id: 'kyoto-bus-pontocho-101', name: 'Pontocho Bus', nameJp: '先斗町バス', line: 'kyoto-101', lineColor: '#00A040', coordinates: [35.0055, 135.7711], connections: [] },
  { id: 'kyoto-bus-shijo-101', name: 'Shijo Bus', nameJp: '四条バス', line: 'kyoto-101', lineColor: '#00A040', coordinates: [35.0030, 135.7596], connections: [] },
  
  // Bus 102 - Arashiyama (Linea Blu)
  { id: 'kyoto-bus-arashiyama-102', name: 'Arashiyama Bus', nameJp: '嵐山バス', line: 'kyoto-102', lineColor: '#4169E1', coordinates: [35.0170, 135.6710], connections: [] },
  { id: 'kyoto-bus-bamboo-102', name: 'Bamboo Grove Bus', nameJp: '竹林バス', line: 'kyoto-102', lineColor: '#4169E1', coordinates: [35.0170, 135.6710], connections: [] },
  { id: 'kyoto-bus-tenryuji-102', name: 'Tenryu-ji Bus', nameJp: '天龍寺バス', line: 'kyoto-102', lineColor: '#4169E1', coordinates: [35.0156, 135.6738], connections: [] },
  { id: 'kyoto-bus-monkey-park-102', name: 'Monkey Park Bus', nameJp: 'モンキーパークバス', line: 'kyoto-102', lineColor: '#4169E1', coordinates: [35.0090, 135.6770], connections: [] },
  { id: 'kyoto-bus-sagano-102', name: 'Sagano Bus', nameJp: '嵯峨野バス', line: 'kyoto-102', lineColor: '#4169E1', coordinates: [35.0170, 135.6710], connections: [] },
  
  // Bus 204 - Kurama-Kibune (Linea Arancione)
  { id: 'kyoto-bus-kurama-204', name: 'Kurama Bus', nameJp: '鞍馬バス', line: 'kyoto-204', lineColor: '#FF8C00', coordinates: [35.1184, 135.7706], connections: [] },
  { id: 'kyoto-bus-kurama-onsen-204', name: 'Kurama Onsen Bus', nameJp: '鞍馬温泉バス', line: 'kyoto-204', lineColor: '#FF8C00', coordinates: [35.1184, 135.7706], connections: [] },
  { id: 'kyoto-bus-kibune-204', name: 'Kibune Bus', nameJp: '貴船バス', line: 'kyoto-204', lineColor: '#FF8C00', coordinates: [35.1210, 135.7630], connections: [] },
  
  // Bus 206 - Kinkakuji-Ginkakuji (Linea Marrone - Templi d'Oro e d'Argento)
  { id: 'kyoto-bus-kinkakuji-206', name: 'Kinkaku-ji Bus', nameJp: '金閣寺バス', line: 'kyoto-206', lineColor: '#8B4513', coordinates: [35.0394, 135.7292], connections: [] },
  { id: 'kyoto-bus-ryoanji-206', name: 'Ryoan-ji Bus', nameJp: '龍安寺バス', line: 'kyoto-206', lineColor: '#8B4513', coordinates: [35.0345, 135.7183], connections: [] },
  { id: 'kyoto-bus-kitano-206', name: 'Kitano Bus', nameJp: '北野バス', line: 'kyoto-206', lineColor: '#8B4513', coordinates: [35.0300, 135.7350], connections: [] },
  { id: 'kyoto-bus-kyoto-st-206', name: 'Kyoto Station Bus', nameJp: '京都駅バス', line: 'kyoto-206', lineColor: '#8B4513', coordinates: [34.9858, 135.7588], connections: [] },
  { id: 'kyoto-bus-ginkakuji-206', name: 'Ginkaku-ji Bus', nameJp: '銀閣寺バス', line: 'kyoto-206', lineColor: '#8B4513', coordinates: [35.0270, 135.7982], connections: [] },
  { id: 'kyoto-bus-philosopher-206', name: 'Philosopher Path Bus', nameJp: '哲学の道バス', line: 'kyoto-206', lineColor: '#8B4513', coordinates: [35.0265, 135.7955], connections: [] },
  
  // Bus 205 - Nijo Castle-Palazzo Imperiale (Linea Viola)
  { id: 'kyoto-bus-nijo-205', name: 'Nijo Castle Bus', nameJp: '二条城バス', line: 'kyoto-205', lineColor: '#800080', coordinates: [35.0142, 135.7482], connections: [] },
  { id: 'kyoto-bus-imperial-205', name: 'Imperial Palace Bus', nameJp: '御所バス', line: 'kyoto-205', lineColor: '#800080', coordinates: [35.0250, 135.7620], connections: [] },
  { id: 'kyoto-bus-karasuma-205', name: 'Karasuma Bus', nameJp: '烏丸バス', line: 'kyoto-205', lineColor: '#800080', coordinates: [35.0030, 135.7596], connections: [] },
  
  // Bus 208 - Daigoji (Linea Rosa)
  { id: 'kyoto-bus-daigoji-208', name: 'Daigo-ji Bus', nameJp: '醍醐寺バス', line: 'kyoto-208', lineColor: '#FF69B4', coordinates: [34.9514, 135.8214], connections: [] },
  { id: 'kyoto-bus-kyoto-st-208', name: 'Kyoto Station Bus', nameJp: '京都駅バス', line: 'kyoto-208', lineColor: '#FF69B4', coordinates: [34.9858, 135.7588], connections: [] },
];

// Osaka Bus Stations
export const osakaBusStations: MetroStation[] = [
  // Bus 1 - Umeda-Namba-Dotonbori (Linea Rossa)
  { id: 'osaka-bus-umeda-1', name: 'Umeda Bus', nameJp: '梅田バス', line: 'osaka-1', lineColor: '#E60012', coordinates: [34.7008, 135.4990], connections: [] },
  { id: 'osaka-bus-osaka-st-1', name: 'Osaka Station Bus', nameJp: '大阪駅バス', line: 'osaka-1', lineColor: '#E60012', coordinates: [34.7025, 135.4959], connections: [] },
  { id: 'osaka-bus-shinsaibashi-1', name: 'Shinsaibashi Bus', nameJp: '心斎橋バス', line: 'osaka-1', lineColor: '#E60012', coordinates: [34.6785, 135.5002], connections: [] },
  { id: 'osaka-bus-namba-1', name: 'Namba Bus', nameJp: '難波バス', line: 'osaka-1', lineColor: '#E60012', coordinates: [34.6664, 135.5013], connections: [] },
  { id: 'osaka-bus-dotonbori-1', name: 'Dotonbori Bus', nameJp: '道頓堀バス', line: 'osaka-1', lineColor: '#E60012', coordinates: [34.6687, 135.5013], connections: [] },
  
  // Bus 2 - Tennoji-Shinsekai (Linea Verde)
  { id: 'osaka-bus-tennoji-2', name: 'Tennoji Bus', nameJp: '天王寺バス', line: 'osaka-2', lineColor: '#00A040', coordinates: [34.6472, 135.5140], connections: [] },
  { id: 'osaka-bus-shinsekai-2', name: 'Shinsekai Bus', nameJp: '新世界バス', line: 'osaka-2', lineColor: '#00A040', coordinates: [34.6525, 135.5063], connections: [] },
  { id: 'osaka-bus-tsutenkaku-2', name: 'Tsutenkaku Bus', nameJp: '通天閣バス', line: 'osaka-2', lineColor: '#00A040', coordinates: [34.6525, 135.5063], connections: [] },
  { id: 'osaka-bus-shitennoji-2', name: 'Shitenno-ji Bus', nameJp: '四天王寺バス', line: 'osaka-2', lineColor: '#00A040', coordinates: [34.6533, 135.5164], connections: [] },
  { id: 'osaka-bus-tennoji-zoo-2', name: 'Tennoji Zoo Bus', nameJp: '天王寺動物園バス', line: 'osaka-2', lineColor: '#00A040', coordinates: [34.6489, 135.5050], connections: [] },
  
  // Bus 3 - Osaka Castle-Kyobashi (Linea Blu)
  { id: 'osaka-bus-castle-3', name: 'Osaka Castle Bus', nameJp: '大阪城バス', line: 'osaka-3', lineColor: '#4169E1', coordinates: [34.6873, 135.5262], connections: [] },
  { id: 'osaka-bus-kyobashi-3', name: 'Kyobashi Bus', nameJp: '京橋バス', line: 'osaka-3', lineColor: '#4169E1', coordinates: [34.6969, 135.5282], connections: [] },
  { id: 'osaka-bus-morinomiya-3', name: 'Morinomiya Bus', nameJp: '森ノ宮バス', line: 'osaka-3', lineColor: '#4169E1', coordinates: [34.6814, 135.5345], connections: [] },
  { id: 'osaka-bus-osaka-park-3', name: 'Osaka Castle Park Bus', nameJp: '大阪城公園バス', line: 'osaka-3', lineColor: '#4169E1', coordinates: [34.6873, 135.5262], connections: [] },
  
  // Bus 4 - USJ-Tempozan (Linea Arancione)
  { id: 'osaka-bus-usj-4', name: 'USJ Bus', nameJp: 'USJバス', line: 'osaka-4', lineColor: '#FF8C00', coordinates: [34.6654, 135.4323], connections: [] },
  { id: 'osaka-bus-tempozan-4', name: 'Tempozan Bus', nameJp: '天保山バス', line: 'osaka-4', lineColor: '#FF8C00', coordinates: [34.6545, 135.4288], connections: [] },
  { id: 'osaka-bus-aquarium-4', name: 'Aquarium Bus', nameJp: '海遊館バス', line: 'osaka-4', lineColor: '#FF8C00', coordinates: [34.6545, 135.4288], connections: [] },
  { id: 'osaka-bus-harbor-4', name: 'Harbor Village Bus', nameJp: 'ハーバービレッジバス', line: 'osaka-4', lineColor: '#FF8C00', coordinates: [34.6545, 135.4288], connections: [] },
  
  // Bus 5 - Shinsekai-Dotonbori-Kuromon (Linea Marrone)
  { id: 'osaka-bus-shinsekai-5', name: 'Shinsekai Bus', nameJp: '新世界バス', line: 'osaka-5', lineColor: '#8B4513', coordinates: [34.6525, 135.5063], connections: [] },
  { id: 'osaka-bus-dotonbori-5', name: 'Dotonbori Bus', nameJp: '道頓堀バス', line: 'osaka-5', lineColor: '#8B4513', coordinates: [34.6687, 135.5013], connections: [] },
  { id: 'osaka-bus-kuromon-5', name: 'Kuromon Market Bus', nameJp: '黒門市場バス', line: 'osaka-5', lineColor: '#8B4513', coordinates: [34.6654, 135.5060], connections: [] },
  { id: 'osaka-bus-namba-yasaka-5', name: 'Namba Yasaka Bus', nameJp: '難波八阪バス', line: 'osaka-5', lineColor: '#8B4513', coordinates: [34.6600, 135.5000], connections: [] },
  
  // Bus 6 - Sumiyoshi Taisha (Linea Viola)
  { id: 'osaka-bus-sumiyoshi-6', name: 'Sumiyoshi Taisha Bus', nameJp: '住吉大社バス', line: 'osaka-6', lineColor: '#800080', coordinates: [34.6123, 135.4914], connections: [] },
  { id: 'osaka-bus-tennoji-6', name: 'Tennoji Bus', nameJp: '天王寺バス', line: 'osaka-6', lineColor: '#800080', coordinates: [34.6472, 135.5140], connections: [] },
  
  // Bus 7 - Umeda Sky Building (Linea Rosa)
  { id: 'osaka-bus-umeda-sky-7', name: 'Umeda Sky Bus', nameJp: '梅田スカイバス', line: 'osaka-7', lineColor: '#FF69B4', coordinates: [34.7055, 135.4896], connections: [] },
  { id: 'osaka-bus-umeda-7', name: 'Umeda Bus', nameJp: '梅田バス', line: 'osaka-7', lineColor: '#FF69B4', coordinates: [34.7008, 135.4990], connections: [] },
  
  // Bus 8 - Expo City (Linea Ciano)
  { id: 'osaka-bus-expo-8', name: 'Expo City Bus', nameJp: 'エキスポシティバス', line: 'osaka-8', lineColor: '#00CED1', coordinates: [34.8040, 135.5350], connections: [] },
  { id: 'osaka-bus-suita-8', name: 'Suita Bus', nameJp: '吹田バス', line: 'osaka-8', lineColor: '#00CED1', coordinates: [34.7600, 135.5200], connections: [] },
];

// Nara Bus Stations
export const naraBusStations: MetroStation[] = [
  // Bus 1 - Stazione-Todaiji-Kasuga (Linea Rossa)
  { id: 'nara-bus-station-1', name: 'Nara Station Bus', nameJp: '奈良駅バス', line: 'nara-1', lineColor: '#E60012', coordinates: [34.6851, 135.8175], connections: [] },
  { id: 'nara-bus-kintetsu-1', name: 'Kintetsu Nara Bus', nameJp: '近鉄奈良バス', line: 'nara-1', lineColor: '#E60012', coordinates: [34.6842, 135.8274], connections: [] },
  { id: 'nara-bus-todaiji-1', name: 'Todai-ji Bus', nameJp: '東大寺バス', line: 'nara-1', lineColor: '#E60012', coordinates: [34.6890, 135.8398], connections: [] },
  { id: 'nara-bus-nara-park-1', name: 'Nara Park Bus', nameJp: '奈良公園バス', line: 'nara-1', lineColor: '#E60012', coordinates: [34.6851, 135.8430], connections: [] },
  { id: 'nara-bus-kofukuji-1', name: 'Kofuku-ji Bus', nameJp: '興福寺バス', line: 'nara-1', lineColor: '#E60012', coordinates: [34.6833, 135.8333], connections: [] },
  
  // Bus 2 - Nara Park-Kasuga-Himuro (Linea Verde)
  { id: 'nara-bus-nara-park-2', name: 'Nara Park Bus', nameJp: '奈良公園バス', line: 'nara-2', lineColor: '#00A040', coordinates: [34.6851, 135.8430], connections: [] },
  { id: 'nara-bus-kasuga-2', name: 'Kasuga Taisha Bus', nameJp: '春日大社バス', line: 'nara-2', lineColor: '#00A040', coordinates: [34.6814, 135.8486], connections: [] },
  { id: 'nara-bus-nigatsudo-2', name: 'Nigatsu-do Bus', nameJp: '二月堂バス', line: 'nara-2', lineColor: '#00A040', coordinates: [34.6890, 135.8400], connections: [] },
  { id: 'nara-bus-isuien-2', name: 'Isuien Garden Bus', nameJp: '依水園バス', line: 'nara-2', lineColor: '#00A040', coordinates: [34.6906, 135.8356], connections: [] },
  
  // Bus 70 - Yoshino (Linea Arancione)
  { id: 'nara-bus-yoshino-70', name: 'Yoshino Bus', nameJp: '吉野バス', line: 'nara-70', lineColor: '#FF8C00', coordinates: [34.3564, 135.8583], connections: [] },
  { id: 'nara-bus-kashihara-70', name: 'Kashihara Bus', nameJp: '橿原バス', line: 'nara-70', lineColor: '#FF8C00', coordinates: [34.4841, 135.7936], connections: [] },
  { id: 'nara-bus-station-70', name: 'Nara Station Bus', nameJp: '奈良駅バス', line: 'nara-70', lineColor: '#FF8C00', coordinates: [34.6851, 135.8175], connections: [] },
  
  // Bus 72 - Horyuji (Linea Blu)
  { id: 'nara-bus-horyuji-72', name: 'Horyu-ji Bus', nameJp: '法隆寺バス', line: 'nara-72', lineColor: '#4169E1', coordinates: [34.6142, 135.7344], connections: [] },
  { id: 'nara-bus-station-72', name: 'Nara Station Bus', nameJp: '奈良駅バス', line: 'nara-72', lineColor: '#4169E1', coordinates: [34.6851, 135.8175], connections: [] },
  { id: 'nara-bus-yakushiji-72', name: 'Yakushi-ji Bus', nameJp: '薬師寺バス', line: 'nara-72', lineColor: '#4169E1', coordinates: [34.6689, 135.7847], connections: [] },
  { id: 'nara-bus-toshodaiji-72', name: 'Toshodai-ji Bus', nameJp: '唐招提寺バス', line: 'nara-72', lineColor: '#4169E1', coordinates: [34.6756, 135.7847], connections: [] },
  
  // Bus 97 - Asuka (Linea Marrone)
  { id: 'nara-bus-asuka-97', name: 'Asuka Bus', nameJp: '飛鳥バス', line: 'nara-97', lineColor: '#8B4513', coordinates: [34.5178, 135.8475], connections: [] },
  { id: 'nara-bus-sakurai-97', name: 'Sakurai Bus', nameJp: '桜井バス', line: 'nara-97', lineColor: '#8B4513', coordinates: [34.5178, 135.8475], connections: [] },
  { id: 'nara-bus-kashihara-97', name: 'Kashihara Bus', nameJp: '橿原バス', line: 'nara-97', lineColor: '#8B4513', coordinates: [34.4841, 135.7936], connections: [] },
  
  // Bus 10 - Naramachi (Linea Viola)
  { id: 'nara-bus-naramachi-10', name: 'Naramachi Bus', nameJp: 'ならまちバス', line: 'nara-10', lineColor: '#800080', coordinates: [34.6789, 135.8289], connections: [] },
  { id: 'nara-bus-station-10', name: 'Nara Station Bus', nameJp: '奈良駅バス', line: 'nara-10', lineColor: '#800080', coordinates: [34.6851, 135.8175], connections: [] },
  { id: 'nara-bus-museum-10', name: 'Nara Museum Bus', nameJp: '奈良博物館バス', line: 'nara-10', lineColor: '#800080', coordinates: [34.6833, 135.8333], connections: [] },
];

// Bus Lines for each city - con stazioni complete
export const tokyoBusLines: MetroLine[] = [
  { id: 'toei-01', name: 'Toei Bus 01 (Shibuya-Ginza-Asakusa)', color: '#0066CC', stations: ['bus-shibuya-01', 'bus-harajuku-01', 'bus-omotesando-01', 'bus-ginza-01', 'bus-tokyo-01', 'bus-asakusa-01'] },
  { id: 'toei-02', name: 'Toei Bus 02 (Shinjuku-Ueno-Akihabara)', color: '#009944', stations: ['bus-shinjuku-02', 'bus-yoyogi-02', 'bus-ikebukuro-02', 'bus-ueno-02', 'bus-akihabara-02'] },
  { id: 'toei-03', name: 'Toei Bus 03 (Asakusa-Roppongi-Odaiba)', color: '#FF6600', stations: ['bus-asakusa-03', 'bus-ueno-03', 'bus-ginza-03', 'bus-roppongi-03', 'bus-odaiba-03'] },
  { id: 'toei-04', name: 'Toei Bus 04 (Tokyo-Odaiba-Skytree)', color: '#CC0066', stations: ['bus-tokyo-04', 'bus-tsukiji-04', 'bus-toyosu-04', 'bus-odaiba-04', 'bus-skytree-04'] },
  { id: 'toei-05', name: 'Toei Bus 05 (Ikebukuro-Shibuya-Nakano)', color: '#9900CC', stations: ['bus-ikebukuro-05', 'bus-shibuya-05', 'bus-nakano-05', 'bus-kichijoji-05'] },
  { id: 'toei-06', name: 'Toei Bus 06 (Sensoji-Skytree)', color: '#FF1493', stations: ['bus-sensoji-06', 'bus-asakusa-06', 'bus-skytree-06'] },
  { id: 'toei-07', name: 'Toei Bus 07 (Meiji Jingu-Harajuku)', color: '#20B2AA', stations: ['bus-meiji-07', 'bus-shibuya-07', 'bus-harajuku-07', 'bus-takeshita-07'] },
  { id: 'toei-08', name: 'Toei Bus 08 (Ueno Park-Museums)', color: '#DC143C', stations: ['bus-ueno-park-08', 'bus-ueno-zoo-08', 'bus-tokyo-museum-08'] },
  { id: 'toei-09', name: 'Toei Bus 09 (Imperial Palace-Ginza)', color: '#4169E1', stations: ['bus-imperial-09', 'bus-ginza-09', 'bus-tsukiji-09'] },
  { id: 'toei-10', name: 'Toei Bus 10 (Shinjuku Golden Gai)', color: '#8B008B', stations: ['bus-shinjuku-golden-10', 'bus-kabukicho-10', 'bus-shinjuku-10'] },
];

export const kyotoBusLines: MetroLine[] = [
  { id: 'kyoto-100', name: 'Bus 100 (Templi del Centro)', color: '#E60012', stations: ['kyoto-bus-kyoto-st-100', 'kyoto-bus-tofukuji-100', 'kyoto-bus-fushimi-100', 'kyoto-bus-gion-100', 'kyoto-bus-kiyomizu-100', 'kyoto-bus-yasaka-100'] },
  { id: 'kyoto-101', name: 'Bus 101 (Gion-Kiyomizu-Nishiki)', color: '#00A040', stations: ['kyoto-bus-gion-101', 'kyoto-bus-kiyomizu-101', 'kyoto-bus-nishiki-101', 'kyoto-bus-pontocho-101', 'kyoto-bus-shijo-101'] },
  { id: 'kyoto-102', name: 'Bus 102 (Arashiyama)', color: '#4169E1', stations: ['kyoto-bus-arashiyama-102', 'kyoto-bus-bamboo-102', 'kyoto-bus-tenryuji-102', 'kyoto-bus-monkey-park-102', 'kyoto-bus-sagano-102'] },
  { id: 'kyoto-204', name: 'Bus 204 (Kurama-Kibune)', color: '#FF8C00', stations: ['kyoto-bus-kurama-204', 'kyoto-bus-kurama-onsen-204', 'kyoto-bus-kibune-204'] },
  { id: 'kyoto-206', name: 'Bus 206 (Kinkakuji-Ginkakuji)', color: '#8B4513', stations: ['kyoto-bus-kinkakuji-206', 'kyoto-bus-ryoanji-206', 'kyoto-bus-kitano-206', 'kyoto-bus-kyoto-st-206', 'kyoto-bus-ginkakuji-206', 'kyoto-bus-philosopher-206'] },
  { id: 'kyoto-205', name: 'Bus 205 (Nijo Castle-Palazzo)', color: '#800080', stations: ['kyoto-bus-nijo-205', 'kyoto-bus-imperial-205', 'kyoto-bus-karasuma-205'] },
  { id: 'kyoto-208', name: 'Bus 208 (Daigoji)', color: '#FF69B4', stations: ['kyoto-bus-daigoji-208', 'kyoto-bus-kyoto-st-208'] },
];

export const osakaBusLines: MetroLine[] = [
  { id: 'osaka-1', name: 'Bus 1 (Umeda-Namba-Dotonbori)', color: '#E60012', stations: ['osaka-bus-umeda-1', 'osaka-bus-osaka-st-1', 'osaka-bus-shinsaibashi-1', 'osaka-bus-namba-1', 'osaka-bus-dotonbori-1'] },
  { id: 'osaka-2', name: 'Bus 2 (Tennoji-Shinsekai)', color: '#00A040', stations: ['osaka-bus-tennoji-2', 'osaka-bus-shinsekai-2', 'osaka-bus-tsutenkaku-2', 'osaka-bus-shitennoji-2', 'osaka-bus-tennoji-zoo-2'] },
  { id: 'osaka-3', name: 'Bus 3 (Osaka Castle-Kyobashi)', color: '#4169E1', stations: ['osaka-bus-castle-3', 'osaka-bus-kyobashi-3', 'osaka-bus-morinomiya-3', 'osaka-bus-osaka-park-3'] },
  { id: 'osaka-4', name: 'Bus 4 (USJ-Tempozan)', color: '#FF8C00', stations: ['osaka-bus-usj-4', 'osaka-bus-tempozan-4', 'osaka-bus-aquarium-4', 'osaka-bus-harbor-4'] },
  { id: 'osaka-5', name: 'Bus 5 (Shinsekai-Dotonbori)', color: '#8B4513', stations: ['osaka-bus-shinsekai-5', 'osaka-bus-dotonbori-5', 'osaka-bus-kuromon-5', 'osaka-bus-namba-yasaka-5'] },
  { id: 'osaka-6', name: 'Bus 6 (Sumiyoshi Taisha)', color: '#800080', stations: ['osaka-bus-sumiyoshi-6', 'osaka-bus-tennoji-6'] },
  { id: 'osaka-7', name: 'Bus 7 (Umeda Sky)', color: '#FF69B4', stations: ['osaka-bus-umeda-sky-7', 'osaka-bus-umeda-7'] },
  { id: 'osaka-8', name: 'Bus 8 (Expo City)', color: '#00CED1', stations: ['osaka-bus-expo-8', 'osaka-bus-suita-8'] },
];

export const naraBusLines: MetroLine[] = [
  { id: 'nara-1', name: 'Bus 1 (Stazione-Todaiji)', color: '#E60012', stations: ['nara-bus-station-1', 'nara-bus-kintetsu-1', 'nara-bus-todaiji-1', 'nara-bus-nara-park-1', 'nara-bus-kofukuji-1'] },
  { id: 'nara-2', name: 'Bus 2 (Nara Park-Kasuga)', color: '#00A040', stations: ['nara-bus-nara-park-2', 'nara-bus-kasuga-2', 'nara-bus-nigatsudo-2', 'nara-bus-isuien-2'] },
  { id: 'nara-70', name: 'Bus 70 (Yoshino)', color: '#FF8C00', stations: ['nara-bus-yoshino-70', 'nara-bus-kashihara-70', 'nara-bus-station-70'] },
  { id: 'nara-72', name: 'Bus 72 (Horyuji)', color: '#4169E1', stations: ['nara-bus-horyuji-72', 'nara-bus-station-72', 'nara-bus-yakushiji-72', 'nara-bus-toshodaiji-72'] },
  { id: 'nara-97', name: 'Bus 97 (Asuka)', color: '#8B4513', stations: ['nara-bus-asuka-97', 'nara-bus-sakurai-97', 'nara-bus-kashihara-97'] },
  { id: 'nara-10', name: 'Bus 10 (Naramachi)', color: '#800080', stations: ['nara-bus-naramachi-10', 'nara-bus-station-10', 'nara-bus-museum-10'] },
];

// All metro lines combined
export const metroLines: MetroLine[] = [
  ...tokyoMetroLines,
  ...kyotoMetroLines,
  ...osakaMetroLines,
  ...naraLines,
];

// All bus lines combined
export const busLines: MetroLine[] = [
  ...tokyoBusLines,
  ...kyotoBusLines,
  ...osakaBusLines,
  ...naraBusLines,
];

// Get bus lines for a specific city
export function getBusLinesForCity(city: string): MetroLine[] {
  switch (city) {
    case 'tokyo': return tokyoBusLines;
    case 'kyoto': return kyotoBusLines;
    case 'osaka': return osakaBusLines;
    case 'nara': return naraBusLines;
    default: return [];
  }
}

// Get bus stations for a specific city
export function getBusStationsForCity(city: string): MetroStation[] {
  switch (city) {
    case 'tokyo': return tokyoBusStations;
    case 'kyoto': return kyotoBusStations;
    case 'osaka': return osakaBusStations;
    case 'nara': return naraBusStations;
    default: return [];
  }
}

// Get all stations (metro + bus) for a city
export function getAllStationsForCity(city: string): MetroStation[] {
  let metroStations: MetroStation[] = [];
  switch (city) {
    case 'tokyo': metroStations = tokyoMetroStations; break;
    case 'kyoto': metroStations = kyotoMetroStations; break;
    case 'osaka': metroStations = osakaMetroStations; break;
    case 'nara': metroStations = naraStations; break;
  }
  return [...metroStations, ...getBusStationsForCity(city)];
}

// Get all lines (metro + bus) for a city
export function getAllLinesForCity(city: string): MetroLine[] {
  let metroLines: MetroLine[] = [];
  switch (city) {
    case 'tokyo': metroLines = tokyoMetroLines; break;
    case 'kyoto': metroLines = kyotoMetroLines; break;
    case 'osaka': metroLines = osakaMetroLines; break;
    case 'nara': metroLines = naraLines; break;
  }
  return [...metroLines, ...getBusLinesForCity(city)];
}

export const cityCoordinates: Record<string, [number, number]> = {
  tokyo: [35.6762, 139.6503],
  kyoto: [35.0116, 135.7681],
  osaka: [34.6937, 135.5023],
  nara: [34.6851, 135.8048],
  hiroshima: [34.3853, 132.4553],
  kanazawa: [36.5611, 136.6566],
  hakone: [35.2324, 139.0269],
  nikko: [36.7194, 139.6980],
};

export const cityNames: Record<string, { name: string; nameJp: string }> = {
  tokyo: { name: 'Tokyo', nameJp: '東京' },
  kyoto: { name: 'Kyoto', nameJp: '京都' },
  osaka: { name: 'Osaka', nameJp: '大阪' },
  nara: { name: 'Nara', nameJp: '奈良' },
  hiroshima: { name: 'Hiroshima', nameJp: '広島' },
  kanazawa: { name: 'Kanazawa', nameJp: '金沢' },
  hakone: { name: 'Hakone', nameJp: '箱根' },
  nikko: { name: 'Nikko', nameJp: '日光' },
};

// Sample hotels data
export const sampleHotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'Shibuya Excel Hotel Tokyu',
    nameJp: '渋谷エクセルホテル東急',
    city: 'tokyo',
    coordinates: [35.6595, 139.7004],
    address: '1-12-2 Dogenzaka, Shibuya-ku, Tokyo',
    price: 18000,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    bookingUrl: 'https://www.booking.com/hotel/jp/shibuya-excel-tokyu.html',
  },
  {
    id: 'hotel-2',
    name: 'Hotel Granvia Kyoto',
    nameJp: 'ホテルグランヴィア京都',
    city: 'kyoto',
    coordinates: [34.9858, 135.7588],
    address: 'Shimogyo-ku, Kyoto',
    price: 25000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    bookingUrl: 'https://www.booking.com/hotel/jp/granvia-kyoto.html',
  },
  {
    id: 'hotel-3',
    name: 'Swissotel Nankai Osaka',
    nameJp: 'スイスホテル南海大阪',
    city: 'osaka',
    coordinates: [34.6664, 135.5013],
    address: '5-1-60 Namba, Chuo-ku, Osaka',
    price: 22000,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    bookingUrl: 'https://www.booking.com/hotel/jp/swissotel-nankai-osaka.html',
  },
  {
    id: 'hotel-4',
    name: 'Nara Hotel',
    nameJp: '奈良ホテル',
    city: 'nara',
    coordinates: [34.6851, 135.8430],
    address: '1096 Takabatake-cho, Nara',
    price: 35000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    bookingUrl: 'https://www.booking.com/hotel/jp/nara.html',
  },
  {
    id: 'hotel-5',
    name: 'Park Hyatt Tokyo',
    nameJp: 'パークハイアット東京',
    city: 'tokyo',
    coordinates: [35.6856, 139.6907],
    address: '3-7-1-2 Nishi Shinjuku, Shinjuku-ku, Tokyo',
    price: 65000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    bookingUrl: 'https://www.booking.com/hotel/jp/park-hyatt-tokyo.html',
  },
  {
    id: 'hotel-6',
    name: 'The Ritz-Carlton Kyoto',
    nameJp: 'ザ・リッツ・カールトン京都',
    city: 'kyoto',
    coordinates: [35.0116, 135.7681],
    address: 'Kamogawa Nijo-Ohashi Hotori, Nakagyo-ku, Kyoto',
    price: 85000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    bookingUrl: 'https://www.booking.com/hotel/jp/the-ritz-carlton-kyoto.html',
  },
];

// Helper function to find nearest metro station to coordinates
export function findNearestStation(coordinates: [number, number], city: string): MetroStation | null {
  let cityStations: MetroStation[] = [];
  
  switch (city) {
    case 'tokyo':
      cityStations = tokyoMetroStations;
      break;
    case 'kyoto':
      cityStations = kyotoMetroStations;
      break;
    case 'osaka':
      cityStations = osakaMetroStations;
      break;
    case 'nara':
      cityStations = naraStations;
      break;
    default:
      return null;
  }
  
  let nearest: MetroStation | null = null;
  let minDistance = Infinity;
  
  for (const station of cityStations) {
    const R = 6371;
    const dLat = (station.coordinates[0] - coordinates[0]) * Math.PI / 180;
    const dLon = (station.coordinates[1] - coordinates[1]) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coordinates[0] * Math.PI / 180) * Math.cos(station.coordinates[0] * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    if (distance < minDistance) {
      minDistance = distance;
      nearest = station;
    }
  }
  
  return nearest;
}

// Transport segment types
export interface TransportSegment {
  type: 'metro' | 'bus' | 'walk';
  name: string;
  color?: string;
  distance: number; // km
  duration: number; // minutes
  fromStation?: {
    id: string;
    name: string;
    lineColor: string;
  };
  toStation?: {
    id: string;
    name: string;
    lineColor: string;
  };
  transferStation?: {
    id: string;
    name: string;
  };
}

export interface CompleteRoute {
  segments: TransportSegment[];
  totalDistance: number;
  totalDuration: number;
  fromStation?: MetroStation;
  toStation?: MetroStation;
}

// Helper function to find best metro route between two points
export function findMetroRoute(fromCoords: [number, number], toCoords: [number, number], city: string): { fromStation: MetroStation; toStation: MetroStation; line: string } | null {
  const fromStation = findNearestStation(fromCoords, city);
  const toStation = findNearestStation(toCoords, city);
  
  if (!fromStation || !toStation) return null;
  
  // Check if they're on the same line
  const fromLines = metroLines.filter(l => l.stations.includes(fromStation.id));
  const toLines = metroLines.filter(l => l.stations.includes(toStation.id));
  
  const commonLine = fromLines.find(fl => toLines.some(tl => tl.id === fl.id));
  
  if (commonLine) {
    return { fromStation, toStation, line: commonLine.name };
  }
  
  // If no direct line, return the nearest stations anyway
  return { fromStation, toStation, line: fromStation.line };
}

// Find route with transfers between stations
function findRouteWithTransfers(
  fromStation: MetroStation, 
  toStation: MetroStation, 
  city: string
): { segments: TransportSegment[]; hasTransfer: boolean } {
  const segments: TransportSegment[] = [];
  
  // Get all lines for the city
  const allLines = getAllLinesForCity(city);
  
  // Find lines for each station
  const fromLines = allLines.filter(l => l.stations.includes(fromStation.id));
  const toLines = allLines.filter(l => l.stations.includes(toStation.id));
  
  // Check if same line
  const commonLine = fromLines.find(fl => toLines.some(tl => tl.id === fl.id));
  
  if (commonLine) {
    // Direct route - same line
    const metroDistance = calculateDistance(fromStation.coordinates, toStation.coordinates);
    segments.push({
      type: fromStation.line.startsWith('bus') || fromStation.line.startsWith('toei') || 
            fromStation.line.startsWith('kyoto-') || fromStation.line.startsWith('osaka-') ||
            fromStation.line.startsWith('nara-') ? 'bus' : 'metro',
      name: commonLine.name,
      color: commonLine.color,
      distance: metroDistance,
      duration: Math.round(metroDistance * 3 + 3),
      fromStation: {
        id: fromStation.id,
        name: fromStation.name,
        lineColor: fromStation.lineColor
      },
      toStation: {
        id: toStation.id,
        name: toStation.name,
        lineColor: toStation.lineColor
      }
    });
    return { segments, hasTransfer: false };
  }
  
  // Need transfer - find a common station
  const transferStation = findTransferStation(fromStation, toStation, city);
  
  if (transferStation) {
    // First leg: fromStation to transferStation
    const firstLine = fromLines[0];
    const leg1Distance = calculateDistance(fromStation.coordinates, transferStation.coordinates);
    segments.push({
      type: fromStation.line.startsWith('bus') || fromStation.line.startsWith('toei') ? 'bus' : 'metro',
      name: firstLine?.name || fromStation.line,
      color: firstLine?.color || fromStation.lineColor,
      distance: leg1Distance,
      duration: Math.round(leg1Distance * 3 + 3),
      fromStation: {
        id: fromStation.id,
        name: fromStation.name,
        lineColor: fromStation.lineColor
      },
      toStation: {
        id: transferStation.id,
        name: transferStation.name,
        lineColor: transferStation.lineColor
      }
    });
    
    // Walk between stations at transfer point
    const walkDistance = 0.2;
    segments.push({
      type: 'walk',
      name: `Cambio a ${transferStation.name}`,
      distance: walkDistance,
      duration: 5,
      transferStation: {
        id: transferStation.id,
        name: transferStation.name
      }
    });
    
    // Second leg: transferStation to toStation
    const secondLine = toLines[0];
    const leg2Distance = calculateDistance(transferStation.coordinates, toStation.coordinates);
    segments.push({
      type: toStation.line.startsWith('bus') || toStation.line.startsWith('toei') ? 'bus' : 'metro',
      name: secondLine?.name || toStation.line,
      color: secondLine?.color || toStation.lineColor,
      distance: leg2Distance,
      duration: Math.round(leg2Distance * 3 + 3),
      fromStation: {
        id: transferStation.id,
        name: transferStation.name,
        lineColor: transferStation.lineColor
      },
      toStation: {
        id: toStation.id,
        name: toStation.name,
        lineColor: toStation.lineColor
      }
    });
    
    return { segments, hasTransfer: true };
  }
  
  // Fallback: direct route even if different lines
  const metroDistance = calculateDistance(fromStation.coordinates, toStation.coordinates);
  segments.push({
    type: 'metro',
    name: `${fromLines[0]?.name || 'Linea'} → ${toLines[0]?.name || 'Linea'}`,
    color: fromStation.lineColor,
    distance: metroDistance,
    duration: Math.round(metroDistance * 4 + 8),
    fromStation: {
      id: fromStation.id,
      name: fromStation.name,
      lineColor: fromStation.lineColor
    },
    toStation: {
      id: toStation.id,
      name: toStation.name,
      lineColor: toStation.lineColor
    }
  });
  
  return { segments, hasTransfer: true };
}

// Find a transfer station between two stations
function findTransferStation(fromStation: MetroStation, toStation: MetroStation, city: string): MetroStation | null {
  const allStations = getAllStationsForCity(city);
  const allLines = getAllLinesForCity(city);
  
  // Get lines for each station
  const fromLines = allLines.filter(l => l.stations.includes(fromStation.id));
  const toLines = allLines.filter(l => l.stations.includes(toStation.id));
  
  // Find a station that is on a line from fromStation AND connects to toStation's lines
  for (const fromLine of fromLines) {
    for (const stationId of fromLine.stations) {
      const station = allStations.find(s => s.id === stationId);
      if (!station || station.id === fromStation.id) continue;
      
      // Check if this station connects to any of toStation's lines
      for (const toLine of toLines) {
        if (toLine.stations.includes(station.id) || 
            station.connections.some(c => toLine.name.toLowerCase().includes(c.toLowerCase()))) {
          return station;
        }
      }
    }
  }
  
  // Fallback: return a major station
  const majorStations = allStations.filter(s => 
    s.connections.length > 0 && 
    (fromLines.some(l => l.stations.includes(s.id)) || toLines.some(l => l.stations.includes(s.id)))
  );
  
  return majorStations.length > 0 ? majorStations[0] : null;
}

// Calculate complete route with metro, bus, and walking segments
export function calculateCompleteRoute(
  fromCoords: [number, number], 
  toCoords: [number, number], 
  city: string
): CompleteRoute {
  const segments: TransportSegment[] = [];
  
  // Calculate direct distance
  const R = 6371;
  const dLat = (toCoords[0] - fromCoords[0]) * Math.PI / 180;
  const dLon = (toCoords[1] - fromCoords[1]) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(fromCoords[0] * Math.PI / 180) * Math.cos(toCoords[0] * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const directDistance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  // Find nearest stations (using all stations including bus)
  const fromStation = findNearestStation(fromCoords, city) || 
    findNearestBusStation(fromCoords, city);
  const toStation = findNearestStation(toCoords, city) || 
    findNearestBusStation(toCoords, city);
  
  // Walking only for short distances (less than 1.2km)
  if (directDistance < 1.2) {
    segments.push({
      type: 'walk',
      name: 'A piedi',
      distance: directDistance,
      duration: Math.round(directDistance * 12)
    });
    
    return {
      segments,
      totalDistance: directDistance,
      totalDuration: Math.round(directDistance * 12),
      fromStation: undefined,
      toStation: undefined
    };
  }
  
  // Calculate walking distances
  const walkToStation = fromStation ? calculateDistance(fromCoords, fromStation.coordinates) : 0;
  const walkFromStation = toStation ? calculateDistance(toCoords, toStation.coordinates) : 0;
  
  // Step 1: Walk from attraction to departure station
  if (walkToStation > 0.1) {
    segments.push({
      type: 'walk',
      name: `A piedi fino a ${fromStation?.name || 'stazione'}`,
      distance: walkToStation,
      duration: Math.round(walkToStation * 12)
    });
  }
  
  // Step 2: Take transport (with possible transfers)
  if (fromStation && toStation) {
    const routeResult = findRouteWithTransfers(fromStation, toStation, city);
    segments.push(...routeResult.segments);
  }
  
  // Step 3: Walk from arrival station to destination attraction
  if (walkFromStation > 0.1) {
    segments.push({
      type: 'walk',
      name: `A piedi da ${toStation?.name || 'stazione'} fino a destinazione`,
      distance: walkFromStation,
      duration: Math.round(walkFromStation * 12)
    });
  }
  
  const totalDistance = segments.reduce((sum, s) => sum + s.distance, 0);
  const totalDuration = segments.reduce((sum, s) => sum + s.duration, 0);
  
  return {
    segments,
    totalDistance,
    totalDuration,
    fromStation: fromStation || undefined,
    toStation: toStation || undefined
  };
}

// Find nearest bus station
function findNearestBusStation(coordinates: [number, number], city: string): MetroStation | null {
  const busStations = getBusStationsForCity(city);
  
  let nearest: MetroStation | null = null;
  let minDistance = Infinity;
  
  for (const station of busStations) {
    const R = 6371;
    const dLat = (station.coordinates[0] - coordinates[0]) * Math.PI / 180;
    const dLon = (station.coordinates[1] - coordinates[1]) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coordinates[0] * Math.PI / 180) * Math.cos(station.coordinates[0] * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    if (distance < minDistance) {
      minDistance = distance;
      nearest = station;
    }
  }
  
  return nearest;
}

// Helper function to calculate distance between two coordinates
function calculateDistance(coord1: [number, number], coord2: [number, number]): number {
  const R = 6371;
  const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
  const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
