const forenames = [
    "Aarão",
    "Abel",
    "Abelardo",
    "Abraão",
    "Adalberto",
    "Adão",
    "Adelino",
    "Ademar",
    "Adilmar",
    "Adolfo",
    "Adriano",
    "Afonso",
    "Agostinho",
    "Aguinaldo",
    "Alarico",
    "Alberto",
    "Aldo",
    "Aleixandre",
    "Aleixo",
    "Alexandre",
    "Alfonso",
    "Alfredo",
    "Alírio",
    "Aloísio",
    "Álvaro",
    "Amadeu",
    "Américo",
    "Amílcar",
    "Anacleto",
    "André",
    "Ângelo",
    "Aníbal",
    "Antão",
    "Antero",
    "António",
    "Antônio",
    "Armando",
    "Arnaldo",
    "Artur",
    "Augusto",
    "Aurélio",
    "Balduíno",
    "Baltasar",
    "Baltazar",
    "Barnabé",
    "Bartolomeu",
    "Belarmino",
    "Belmiro",
    "Benedito",
    "Benjamim",
    "Bento",
    "Bernardo",
    "Bernardim",
    "Bernardino",
    "Boaventura",
    "Bráulio",
    "Breno",
    "Brites",
    "Bruno",
    "Caetano",
    "Caim",
    "Caio",
    "Calisto",
    "Camilo",
    "Cândido",
    "Carlos",
    "Casimiro",
    "Cássio",
    "Celestino",
    "Cecilio",
    "César",
    "Cláudio",
    "Clemente",
    "Conrado",
    "Constantino",
    "Cristiano",
    "Cristóvão",
    "Damião",
    "Daniel",
    "Danilo",
    "David",
    "Davi",
    "Diego",
    "Diogo",
    "Dionísio",
    "Dinis",
    "Dirce",
    "Dirceu",
    "Domingos",
    "Donato",
    "Duarte",
    "Edelberto",
    "Edgar",
    "Edmundo",
    "Eduardo",
    "Elias",
    "Eliseu",
    "Emanuel",
    "Emílio",
    "Epaminondas",
    "Érico",
    "Ernesto",
    "Estanislau",
    "Estêvão",
    "Eugénio",
    "Eugênio",
    "Eurico",
    "Eusébio",
    "Evandro",
    "Evaristo",
    "Everaldo",
    "Ezequiel",
    "Fabiano",
    "Fábio",
    "Fabrício",
    "Faustino",
    "Fausto",
    "Feliciano",
    "Felício",
    "Felipe",
    "Félix",
    "Fernando",
    "Fernão",
    "Filipe",
    "Firmino",
    "Flávio",
    "Flor",
    "Florêncio",
    "Floriano",
    "Florípes",
    "Fradique",
    "Francisco",
    "Frederico",
    "Gabriel",
    "Gaspar",
    "Gastão",
    "Gaudêncio",
    "George",
    "Georgio",
    "Geraldo",
    "Gerard",
    "Germano",
    "GianFrancesco",
    "GianLuca",
    "Gil",
    "Gilberto",
    "Giorgio",
    "Gonçalo",
    "Graciano",
    "Graciliano",
    "Gregório",
    "Guido",
    "Guilherme",
    "Guiomar",
    "Gustavo",
    "Heitor",
    "Hélio",
    "Hélder",
    "Henrique",
    "Herculano",
    "Hermínio",
    "Hermenegildo",
    "Higino",
    "Hilário",
    "Hipólito",
    "Honório",
    "Horácio",
    "Hugo",
    "Humberto",
    "Inácio",
    "Ivo",
    "Jacinto",
    "Jaime",
    "Jean",
    "Jeremias",
    "João",
    "Joaquim",
    "Joel",
    "Jonas",
    "Jorge",
    "José",
    "Júlio",
    "Juliano",
    "Justino",
    "Juvenal",
    "Karl",
    "Lauro",
    "Laurus",
    "Lázaro",
    "Leandro",
    "Leonardo",
    "Leonel",
    "Leopoldo",
    "Lineu",
    "Lino",
    "Lourenço",
    "Lucas",
    "Lúcio",
    "Luciano",
    "Ludovico",
    "Luís",
    "Luiz",
    "Manuel",
    "Manoel",
    "Marco",
    "Marcos",
    "Marcelino",
    "Marcelo",
    "Mário",
    "Martim",
    "Martinho",
    "Mateus",
    "Matheus",
    "Matias",
    "Maurício",
    "Maurílio",
    "Mauro",
    "Máximo",
    "Maximiliano",
    "Mécia",
    "Mendo",
    "Miguel",
    "Murilo",
    "Narciso",
    "Natalino",
    "Nelson",
    "Nestor",
    "Nicolau",
    "Norberto",
    "Nuno",
    "Octávio",
    "Otávio",
    "Odílio",
    "Olavo",
    "Olegário",
    "Olímpio",
    "Olívio",
    "Onofre",
    "Orestes",
    "Orlando",
    "Óscar",
    "Oscar",
    "Osório",
    "Otelo",
    "Ovídio",
    "Palmiro",
    "Pascoal",
    "Patrício",
    "Paulino",
    "Paulo",
    "Pedro",
    "Petronio",
    "Plácido",
    "Plínio",
    "Políbio",
    "Prazeres",
    "Prímio",
    "Querubim",
    "Quintiliano",
    "Quirino",
    "Quitério",
    "Rafael",
    "Ramiro",
    "Raimundo",
    "Raul",
    "Reginaldo",
    "Reinaldo",
    "Renato",
    "Ricardo",
    "Rivelino",
    "Roberto",
    "Rodolfo",
    "Rodrigo",
    "Rogério",
    "Romão",
    "Romeu",
    "Rómulo",
    "Rômulo",
    "Ronaldo",
    "Roque",
    "Rúben",
    "Rúbem",
    "Rui",
    "Salomão",
    "Salvador",
    "Samuel",
    "Sancho",
    "Sandoval",
    "Sandro",
    "Sebastião",
    "Serafim",
    "Sérgio",
    "Severino",
    "Silvano",
    "Silvério",
    "Sílvio",
    "Silvino",
    "Simão",
    "Simeão",
    "Solano",
    "Tadeu",
    "Telmo",
    "Teobaldo",
    "Teodoro",
    "Tiago",
    "Thiago",
    "Timóteo",
    "Tobias",
    "Tomás",
    "Thomaz",
    "Trajano",
    "Ubaldo",
    "Ulisses",
    "Umbelino",
    "Urbano",
    "Valentim",
    "Valério",
    "Vasco",
    "Venâncio",
    "Ventura",
    "Vicente",
    "Victor",
    "Vinicius",
    "Violante",
    "Virgílio",
    "Viriato",
    "Vítor",
    "Xavier",
    "Xisto",
    "Zacarias",
    "Adelaide",
    "Adélia",
    "Adelina",
    "Adriana",
    "Ágata",
    "Alberta",
    "Alda",
    "Aldina",
    "Alexandra",
    "Aidinha",
    "Alice",
    "Alzira",
    "Amália",
    "Amanda",
    "Amélia",
    "Ana",
    "Andreia",
    "Andréia",
    "Ângela",
    "Angélica",
    "Angelina",
    "Anita",
    "Antónia",
    "Antônia",
    "Ava",
    "Augusta",
    "Augustina",
    "Aurélia",
    "Aurora",
    "Bárbara",
    "Beatriz",
    "Belarmina",
    "Belém",
    "Benedita",
    "Berengária",
    "Bernardete",
    "Bernarda",
    "Bernardina",
    "Branca",
    "Brígida",
    "Brízida",
    "Bruna",
    "Caetana",
    "Camila",
    "Cândida",
    "Capitolina",
    "Carina",
    "Carla",
    "Carlota",
    "Carmen",
    "Carmem",
    "Carolina",
    "Catarina",
    "Cássia",
    "Cátia",
    "Cecília",
    "Celeste",
    "Célia",
    "Celina",
    "Cesária",
    "Cidália",
    "Clara",
    "Cláudia",
    "Clementina",
    "Clotilde",
    "Conceição",
    "Constança",
    "Constantina",
    "Corina",
    "Cristiana",
    "Cristina",
    "Custódia",
    "Daniela",
    "Débora",
    "Denilde",
    "Denise",
    "Diana",
    "Dina",
    "Diná",
    "Donata",
    "Doroteia",
    "Dorotéia",
    "Edite",
    "Edna",
    "Eduarda",
    "Elia",
    "Elisa",
    "Elisabete",
    "Elizabete",
    "Elsa",
    "Elvira",
    "Elza",
    "Ema",
    "Emerenciana",
    "Emília",
    "Epifânia",
    "Érica",
    "Ermelinda",
    "Esmeralda",
    "Estefânia",
    "Estela",
    "Estrela",
    "Eugénia",
    "Eugênia",
    "Eulália",
    "Eunice",
    "Eva",
    "Fábia",
    "Fabiana",
    "Fátima",
    "Fausta",
    "Faustina",
    "Felícia",
    "Feliciana",
    "Felismina",
    "Fernanda",
    "Fernandina",
    "Filipa",
    "Filomena",
    "Firmina",
    "Flávia",
    "Flora",
    "Florbela",
    "Florência",
    "Florinda",
    "Florípes",
    "Francisca",
    "Frederica",
    "Gabriela",
    "Genoveva",
    "Georgette",
    "Georgina",
    "Geraldina",
    "Germana",
    "Gertrudes",
    "Gisela",
    "Giselda",
    "Gisele",
    "Glória",
    "Graça",
    "Guilhermina",
    "Helena",
    "Hélia",
    "Heloísa",
    "Henriqueta",
    "Hermínia",
    "Honorina",
    "Ilzamar",
    "Inês",
    "Inácia",
    "Iolanda",
    "Irene",
    "Irina",
    "Isabel",
    "Isaura",
    "Isilda",
    "Isulina",
    "Iva",
    "Ivete",
    "Ivone",
    "Jacinta",
    "Janete",
    "Joana",
    "Joaquina",
    "Jorgina",
    "Josefa",
    "Josefina",
    "Judite",
    "Júlia",
    "Juliana",
    "Julieta",
    "Justina",
    "Juvina",
    "Laila",
    "Lara",
    "Laura",
    "Laurea",
    "Laurel",
    "Lauren",
    "Laureana",
    "Laurinda",
    "Leandra",
    "Leila",
    "Leonor",
    "Leonilde",
    "Leopoldina",
    "Letícia",
    "Lídia",
    "Lígia",
    "Lila",
    "Lília",
    "Lilian",
    "Liliane",
    "Lilih",
    "Lívia",
    "Liana",
    "Liliana",
    "Lina",
    "Lourdes",
    "Lúcia",
    "Luciana",
    "Lucinda",
    "Lucrécia",
    "Ludovica",
    "Ludovina",
    "Luisa",
    "Luiza",
    "Lurdes",
    "Luzia",
    "Luz",
    "Madalena",
    "Mafalda",
    "Magali",
    "Magda",
    "Manuela",
    "Manoela",
    "Márcia",
    "Marcela",
    "Marcelina",
    "Margarida",
    "Maria",
    "Maria João",
    "Maria José",
    "Mariana",
    "Mariane",
    "Marilda",
    "Marília",
    "Marina",
    "Marisa",
    "Marise",
    "Marta",
    "Maurícia",
    "Máxima",
    "Maximiliana",
    "Mercedes",
    "Merciana",
    "Micaela",
    "Milene",
    "Miquelina",
    "Miriam",
    "Mónica",
    "Mônica",
    "Nádia",
    "Natália",
    "Natalina",
    "Natividade",
    "Nicole",
    "Octávia",
    "Otávia",
    "Odete",
    "Odília",
    "Olga",
    "Olímpia",
    "Olívia",
    "Otília",
    "Palmira",
    "Pandora",
    "Patrícia",
    "Paula",
    "Paulina",
    "Penélope",
    "Piedade",
    "Prantelhana",
    "Priscila",
    "Querubina",
    "Quintiliana",
    "Quirina",
    "Quitéria",
    "Rafaela",
    "Ramira",
    "Raimunda",
    "Raquel",
    "Rebeca",
    "Regina",
    "Renata",
    "Ricardina",
    "Rita",
    "Roberta",
    "Rosa",
    "Rosália",
    "Rosalina",
    "Rosalinda",
    "Rosana",
    "Rosaura",
    "Rute",
    "Sabrina",
    "Salomé",
    "Sancha",
    "Sandra",
    "Sara",
    "Sebastiana",
    "Selma",
    "Serafina",
    "Silvana",
    "Silvéria",
    "Sílvia",
    "Silvina",
    "Simone",
    "Sofia",
    "Solange",
    "Sónia",
    "Sônia",
    "Susana",
    "Tânia",
    "Tatiana",
    "Telma",
    "Teodora",
    "Teresa",
    "Thereza",
    "Tomásia",
    "Umbelina",
    "Úrsula",
    "Valentina",
    "Valéria",
    "Vanda",
    "Vanésa",
    "Vera",
    "Verónica",
    "Verônica",
    "Violeta",
    "Virgília",
    "Virgínia",
    "Vitória",
    "Viviana",
    "Xénia",
    "Ximena",
    "Zara",
    "Zélia",
    "Zelinda",
    "Zilá",
    "Zínia",
    "Zita",
    "Zoraide",
    "Zuleica",
    "Zuleide",
    "Zulina",
    "Zulmira"
];

var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// index
app.get('/', (req, res) => {
    res.render('index');
});

// d3 playground
app.get('/d3', (req, res) => {
    res.render('d3');
});

// graph
app.get('/graph', (req, res) => {
    res.render('graph');
});

// population graph
app.get('/population-graph', (req, res) => {
    res.render('population-graph');
});

// 404
app.get('*', (req, res) => {
    res.send('404! :(');
});

// Run the server
app.listen(5000, () => console.log('The server is running on port 5000.'));