'use strict';

const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync();

var users = [{
    name: 'Vinicius Silva',
    email: 'vsilva472@gmail.com',
    password: bcrypt.hashSync( '123456', salt ),
    username: 'vsilva472',
    bio: "culpa minim adipisicing sit cupidatat id voluptate adipisicing esse nisi"
  },
  {
    name: 'Adonai Diofanes',
    email: 'adonai@gmail.com',
    password: bcrypt.hashSync( '123456', salt ),
    username: 'adonai',
    bio: "incididunt amet enim adipisicing irure qui nostrud magna sit qui",
  },
  {
    name: "Mcgee Ryan",
    username: "mcgee0",
    email: "mcgee0@gmail.com",
    bio: "culpa minim adipisicing sit cupidatat id voluptate adipisicing esse nisi",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Flynn Tucker",
    username: "flynn1",
    email: "flynn1@gmail.com",
    bio: "incididunt amet enim adipisicing irure qui nostrud magna sit qui",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Aisha Terrell",
    username: "aisha2",
    email: "aisha2@gmail.com",
    bio: "nostrud id nisi labore et minim ipsum aute sit sunt",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Horn Lawrence",
    username: "horn3",
    email: "horn3@gmail.com",
    bio: "laborum laboris aliquip id consectetur minim sit ex Lorem duis",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Pruitt Saunders",
    username: "pruitt4",
    email: "pruitt4@gmail.com",
    bio: "eu dolore veniam tempor nisi quis nisi voluptate deserunt ipsum",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Tania Hunt",
    username: "tania5",
    email: "tania5@gmail.com",
    bio: "id sit enim ullamco commodo officia incididunt nostrud quis enim",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Coleman Walsh",
    username: "coleman6",
    email: "coleman6@gmail.com",
    bio: "anim non cillum amet enim dolore consequat aliqua non non",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Baker Mendoza",
    username: "baker7",
    email: "baker7@gmail.com",
    bio: "officia do do excepteur fugiat ut velit commodo id cupidatat",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Eleanor Moore",
    username: "eleanor8",
    email: "eleanor8@gmail.com",
    bio: "tempor tempor mollit minim sint tempor non sit eu proident",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Acevedo Chavez",
    username: "acevedo9",
    email: "acevedo9@gmail.com",
    bio: "amet aute duis eiusmod elit voluptate ullamco amet consectetur cillum",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Heather Johnston",
    username: "heather10",
    email: "heather10@gmail.com",
    bio: "pariatur ut anim nostrud eiusmod aliquip sit nisi ullamco pariatur",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Lourdes Hines",
    username: "lourdes11",
    email: "lourdes11@gmail.com",
    bio: "magna velit ex ut eu dolor sunt laboris magna id",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Chapman Kaufman",
    username: "chapman12",
    email: "chapman12@gmail.com",
    bio: "ex aliqua incididunt ad consequat nisi tempor nostrud ad pariatur",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Katina Johnson",
    username: "katina13",
    email: "katina13@gmail.com",
    bio: "nostrud consequat anim amet duis aute labore adipisicing excepteur elit",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Antoinette Gallagher",
    username: "antoinette14",
    email: "antoinette14@gmail.com",
    bio: "exercitation ullamco duis amet sit eu proident quis eiusmod voluptate",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Ruth Wolf",
    username: "ruth15",
    email: "ruth15@gmail.com",
    bio: "Lorem nostrud mollit fugiat eu adipisicing sit irure fugiat tempor",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Castillo Rutledge",
    username: "castillo16",
    email: "castillo16@gmail.com",
    bio: "proident exercitation est laboris nulla sunt non amet non cupidatat",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Robyn Valentine",
    username: "robyn17",
    email: "robyn17@gmail.com",
    bio: "veniam et occaecat deserunt sunt occaecat fugiat proident incididunt in",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Lang Durham",
    username: "lang18",
    email: "lang18@gmail.com",
    bio: "tempor est ea do consequat sint et irure occaecat eu",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Oneil Ferrell",
    username: "oneil19",
    email: "oneil19@gmail.com",
    bio: "velit magna non nulla et ea elit culpa nulla dolor",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Tameka England",
    username: "tameka20",
    email: "tameka20@gmail.com",
    bio: "elit aliqua elit eu sit nisi pariatur laboris consectetur velit",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Joann Byrd",
    username: "joann21",
    email: "joann21@gmail.com",
    bio: "cillum et esse consequat ut est amet nulla ad dolore",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Mabel Mccarthy",
    username: "mabel22",
    email: "mabel22@gmail.com",
    bio: "non aliqua eu commodo labore eiusmod labore adipisicing voluptate non",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Hahn Tyson",
    username: "hahn23",
    email: "hahn23@gmail.com",
    bio: "minim officia do fugiat aute dolor dolor amet qui occaecat",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Lambert Morin",
    username: "lambert24",
    email: "lambert24@gmail.com",
    bio: "aliquip ut elit elit mollit et pariatur magna eu mollit",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Thornton Michael",
    username: "thornton25",
    email: "thornton25@gmail.com",
    bio: "consectetur sit enim et qui mollit dolor aliquip nisi culpa",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Nanette Finch",
    username: "nanette26",
    email: "nanette26@gmail.com",
    bio: "dolore velit anim Lorem non duis excepteur dolore enim incididunt",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Harvey Garrison",
    username: "harvey27",
    email: "harvey27@gmail.com",
    bio: "velit adipisicing et esse tempor minim ullamco exercitation commodo culpa",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Bond Craft",
    username: "bond28",
    email: "bond28@gmail.com",
    bio: "sunt occaecat laborum esse adipisicing ea aliqua sunt deserunt sint",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Maura Cantrell",
    username: "maura29",
    email: "maura29@gmail.com",
    bio: "magna laborum non incididunt non ad deserunt velit cupidatat cupidatat",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Raymond Gordon",
    username: "raymond30",
    email: "raymond30@gmail.com",
    bio: "est in excepteur tempor minim dolor aute amet eu enim",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Burton Hernandez",
    username: "burton31",
    email: "burton31@gmail.com",
    bio: "amet aute pariatur magna commodo reprehenderit ut mollit ea ad",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Ross Rodriquez",
    username: "ross32",
    email: "ross32@gmail.com",
    bio: "adipisicing incididunt occaecat aute cupidatat ex laborum minim nisi aliqua",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Mathews Schroeder",
    username: "mathews33",
    email: "mathews33@gmail.com",
    bio: "nisi in eiusmod commodo elit do aliqua sint elit non",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Gill Gonzales",
    username: "gill34",
    email: "gill34@gmail.com",
    bio: "occaecat culpa fugiat officia magna ut fugiat tempor amet veniam",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Waters Fuentes",
    username: "waters35",
    email: "waters35@gmail.com",
    bio: "sit cillum ex veniam reprehenderit consectetur ad non Lorem laborum",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Tanner Travis",
    username: "tanner36",
    email: "tanner36@gmail.com",
    bio: "esse dolor Lorem mollit quis sint in esse aliquip occaecat",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Ayala Wong",
    username: "ayala37",
    email: "ayala37@gmail.com",
    bio: "Lorem sint mollit reprehenderit proident ullamco laborum duis amet quis",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Beasley Waller",
    username: "beasley38",
    email: "beasley38@gmail.com",
    bio: "tempor nostrud dolore quis exercitation ex Lorem enim sunt veniam",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Mays Stanley",
    username: "mays39",
    email: "mays39@gmail.com",
    bio: "duis pariatur velit et reprehenderit cupidatat non eu consequat cillum",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Phyllis Perez",
    username: "phyllis40",
    email: "phyllis40@gmail.com",
    bio: "ea laborum nostrud in fugiat aliquip amet exercitation excepteur ipsum",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Rivas Shepard",
    username: "rivas41",
    email: "rivas41@gmail.com",
    bio: "in irure dolor non sit sunt id in cillum aliqua",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Oneal Buckley",
    username: "oneal42",
    email: "oneal42@gmail.com",
    bio: "eu non mollit mollit ea nostrud et in excepteur qui",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Elliott Mejia",
    username: "elliott43",
    email: "elliott43@gmail.com",
    bio: "occaecat deserunt nulla ut officia duis tempor reprehenderit do do",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Booker Lucas",
    username: "booker44",
    email: "booker44@gmail.com",
    bio: "qui eiusmod veniam elit deserunt Lorem eu duis aliqua voluptate",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Campos Mullins",
    username: "campos45",
    email: "campos45@gmail.com",
    bio: "et eu aute ex eu ullamco amet fugiat quis dolor",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Moon Blanchard",
    username: "moon46",
    email: "moon46@gmail.com",
    bio: "incididunt est nostrud nisi officia duis tempor enim id Lorem",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Brenda Ingram",
    username: "brenda47",
    email: "brenda47@gmail.com",
    bio: "deserunt enim eiusmod ad sunt aliqua amet Lorem velit commodo",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Ward Merritt",
    username: "ward48",
    email: "ward48@gmail.com",
    bio: "dolor culpa velit quis pariatur eiusmod commodo ea occaecat ea",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Wendy Flynn",
    username: "wendy49",
    email: "wendy49@gmail.com",
    bio: "cillum laborum officia sit cupidatat proident anim duis laboris eu",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Sybil Dixon",
    username: "sybil50",
    email: "sybil50@gmail.com",
    bio: "ea laborum Lorem aliquip magna sunt ullamco non adipisicing commodo",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Hewitt Weiss",
    username: "hewitt51",
    email: "hewitt51@gmail.com",
    bio: "consectetur consectetur ipsum occaecat fugiat est dolor sint ea ullamco",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Latoya Hopper",
    username: "latoya52",
    email: "latoya52@gmail.com",
    bio: "ad minim enim elit ea dolore consectetur sunt nulla voluptate",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Kline Salinas",
    username: "kline53",
    email: "kline53@gmail.com",
    bio: "nostrud laboris non duis eiusmod aliquip eiusmod ipsum nisi aliquip",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "April Delgado",
    username: "april54",
    email: "april54@gmail.com",
    bio: "ipsum ex qui cupidatat laborum non non aliqua mollit pariatur",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Tami Matthews",
    username: "tami55",
    email: "tami55@gmail.com",
    bio: "velit exercitation labore in nisi enim duis ad aute ut",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Mercedes Griffin",
    username: "mercedes56",
    email: "mercedes56@gmail.com",
    bio: "elit sit minim ut dolore tempor sunt Lorem veniam aliqua",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Harmon Curtis",
    username: "harmon57",
    email: "harmon57@gmail.com",
    bio: "consectetur ex anim qui nisi anim ex pariatur ea adipisicing",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Wilson Morton",
    username: "wilson58",
    email: "wilson58@gmail.com",
    bio: "pariatur occaecat quis ipsum tempor occaecat cupidatat tempor ea culpa",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Karin Wolfe",
    username: "karin59",
    email: "karin59@gmail.com",
    bio: "velit sunt tempor quis culpa amet in in amet est",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Duke Phillips",
    username: "duke60",
    email: "duke60@gmail.com",
    bio: "fugiat fugiat aliqua officia et anim mollit pariatur anim consectetur",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Levine Fuller",
    username: "levine61",
    email: "levine61@gmail.com",
    bio: "dolore ut labore irure cillum consectetur exercitation aliquip voluptate ea",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Henson Ferguson",
    username: "henson62",
    email: "henson62@gmail.com",
    bio: "proident eu in aliqua quis do enim incididunt cillum non",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Christie Steele",
    username: "christie63",
    email: "christie63@gmail.com",
    bio: "do minim sit do irure ad irure pariatur anim Lorem",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Helena Bell",
    username: "helena64",
    email: "helena64@gmail.com",
    bio: "laboris exercitation minim nulla nisi aliquip do ipsum nostrud qui",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Olive Hooper",
    username: "olive65",
    email: "olive65@gmail.com",
    bio: "nulla enim quis consequat reprehenderit aliqua ipsum sit ipsum reprehenderit",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Eileen Goodwin",
    username: "eileen66",
    email: "eileen66@gmail.com",
    bio: "non nostrud ullamco voluptate cillum labore irure consectetur occaecat pariatur",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Edna Phelps",
    username: "edna67",
    email: "edna67@gmail.com",
    bio: "ex magna excepteur est mollit minim dolor magna laborum sint",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Harrington Bowers",
    username: "harrington68",
    email: "harrington68@gmail.com",
    bio: "dolore magna voluptate ex commodo tempor ipsum dolor aliqua nisi",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Greer Mcgowan",
    username: "greer69",
    email: "greer69@gmail.com",
    bio: "proident nostrud minim voluptate id Lorem minim commodo exercitation voluptate",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Tammy Casey",
    username: "tammy70",
    email: "tammy70@gmail.com",
    bio: "ut enim commodo in ex aliquip veniam quis et ullamco",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Amy Burke",
    username: "amy71",
    email: "amy71@gmail.com",
    bio: "proident enim commodo dolor quis irure occaecat enim dolore id",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Reva Humphrey",
    username: "reva72",
    email: "reva72@gmail.com",
    bio: "nisi non nisi adipisicing tempor eu pariatur sunt exercitation nulla",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Lewis Leonard",
    username: "lewis73",
    email: "lewis73@gmail.com",
    bio: "consequat incididunt dolor do pariatur aliquip ullamco ea culpa ullamco",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Leta Winters",
    username: "leta74",
    email: "leta74@gmail.com",
    bio: "fugiat non ipsum mollit labore aliquip ex consectetur deserunt fugiat",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Whitney Austin",
    username: "whitney75",
    email: "whitney75@gmail.com",
    bio: "labore reprehenderit proident nisi excepteur qui quis velit esse voluptate",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Christian Mcdaniel",
    username: "christian76",
    email: "christian76@gmail.com",
    bio: "anim fugiat ea ipsum et velit amet laborum duis ut",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Delacruz Morrison",
    username: "delacruz77",
    email: "delacruz77@gmail.com",
    bio: "quis enim ea irure eiusmod cupidatat pariatur eu excepteur aute",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Ramirez Flores",
    username: "ramirez78",
    email: "ramirez78@gmail.com",
    bio: "adipisicing ipsum dolor velit sint ut excepteur aute sint magna",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Elena Thomas",
    username: "elena79",
    email: "elena79@gmail.com",
    bio: "proident consectetur excepteur veniam minim quis eiusmod officia id qui",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Anastasia Norman",
    username: "anastasia80",
    email: "anastasia80@gmail.com",
    bio: "ullamco velit do eu sit ad dolor nisi aliqua sint",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Randi Colon",
    username: "randi81",
    email: "randi81@gmail.com",
    bio: "magna nulla cillum consequat ea est deserunt eu esse aliqua",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Bernard Hudson",
    username: "bernard82",
    email: "bernard82@gmail.com",
    bio: "sit qui eiusmod aute eiusmod cillum commodo veniam excepteur qui",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Jenny Robles",
    username: "jenny83",
    email: "jenny83@gmail.com",
    bio: "laborum velit eiusmod do voluptate ullamco esse incididunt eiusmod fugiat",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Melinda Stevens",
    username: "melinda84",
    email: "melinda84@gmail.com",
    bio: "ex excepteur dolor esse in adipisicing incididunt excepteur ipsum elit",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Sharlene Robertson",
    username: "sharlene85",
    email: "sharlene85@gmail.com",
    bio: "consectetur nostrud consequat irure velit minim irure sit nisi anim",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Felecia Christian",
    username: "felecia86",
    email: "felecia86@gmail.com",
    bio: "exercitation id exercitation minim proident amet nulla dolor in velit",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Roseann Perry",
    username: "roseann87",
    email: "roseann87@gmail.com",
    bio: "mollit aliqua sit elit id magna proident ex in voluptate",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Lucy Stokes",
    username: "lucy88",
    email: "lucy88@gmail.com",
    bio: "in non aliqua occaecat consectetur quis consequat eu aliquip aliquip",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Marks Gould",
    username: "marks89",
    email: "marks89@gmail.com",
    bio: "sunt sit cillum proident nostrud magna id et non adipisicing",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Nita Riggs",
    username: "nita90",
    email: "nita90@gmail.com",
    bio: "quis aliquip Lorem mollit incididunt non proident elit ex eu",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Rhoda Walton",
    username: "rhoda91",
    email: "rhoda91@gmail.com",
    bio: "do nostrud minim sit labore sunt sint ea eiusmod reprehenderit",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Alma Lang",
    username: "alma92",
    email: "alma92@gmail.com",
    bio: "quis sunt sint consequat mollit sit nisi laborum commodo labore",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Mcdonald Church",
    username: "mcdonald93",
    email: "mcdonald93@gmail.com",
    bio: "deserunt est cupidatat qui laboris aliqua reprehenderit enim deserunt ad",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Castro Crosby",
    username: "castro94",
    email: "castro94@gmail.com",
    bio: "ea commodo laboris ea reprehenderit reprehenderit mollit aliqua eiusmod Lorem",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Rhea Maldonado",
    username: "rhea95",
    email: "rhea95@gmail.com",
    bio: "tempor labore aliquip nisi reprehenderit esse veniam ullamco culpa laboris",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Meredith Strickland",
    username: "meredith96",
    email: "meredith96@gmail.com",
    bio: "officia sit culpa reprehenderit ea laborum dolore mollit ullamco commodo",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Sharp Stone",
    username: "sharp97",
    email: "sharp97@gmail.com",
    bio: "Lorem enim cupidatat aute do eiusmod do ipsum Lorem id",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Boyle Clark",
    username: "boyle98",
    email: "boyle98@gmail.com",
    bio: "commodo enim fugiat duis do irure fugiat laboris officia ipsum",
    password: bcrypt.hashSync( '123456', salt )
  },
  {
    name: "Baldwin Blackwell",
    username: "baldwin99",
    email: "baldwin99@gmail.com",
    bio: "et fugiat dolore incididunt ut dolor sint cillum in sit",
    password: bcrypt.hashSync( '123456', salt )
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

   return queryInterface.bulkDelete('Users', null, {});
  }
};
