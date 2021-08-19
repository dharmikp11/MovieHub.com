var Obj_Movie = ["A_Quiet_Place_Part_II", "Artemis_Fowl", "Avengers_Endgame", "Avengers_Infinity_War", "Black_Widow", "Bloodshot", "Dolittle", "Enola_Holmes", "Extraction", "F9", "Fantasy_Island", "Free_Guy", "Godzilla_vs_Kong", "Harley_Quinn_Birds_of_Prey", "Hitman_s_Wife_s_Bodyguard", "Hotel_Transylvania_4", "Inception", "Joker", "Jungle_Cruise", "Jurassic_World", "Love_and_Monsters", "Man_of_steel", "Minions", "Monster_Hunter", "Mortal_Kombat", "Mulan", "No_Time_to_Die", "Onward", "Shang_Chi_and_the_Legend_of_the_Ten_Rings", "Space_Jam_A_New_Legacy", "Spider_Man_Homecoming", "Spider_Man_Into_the_Spider_Verse", "Spider_Man_No_Way_Home", "Tenet", "The_Avengers", "The_Conjuring_The_Devil_Made_Me_Do_It", "The_Dark_Knight", "The_Invisible_Man", "The_King_s_Man", "The_Lord_of_the_Rings_The_Fellowship_of_the_Ring", "The_Man_from_U_N_C_L_E", "The_Matrix", "The_New_Mutants", "The_Suicide_Squad", "The_Tomorrow_War", "Tom_and_Jerry", "Underwater", "Venom_Let_There_Be_Carnage", "Wonder_Woman_1984", "Zack_Snyder_s_Justice_League"]
var movies = {
    A_Quiet_Place_Part_II: {
        name: "A Quiet Place Part II",
        folder: "AQuietPlacePartII",
        images: ["1.jpg", "2.jpg"],
        director: ["John Krasinski"],
        genres: ["Drama", "Horror", "Sci-Fi", "Thriller"],
        writer: ["John Krasinski"],
        producer: ["Michael Bay", "Andrew Form", "Brad Fuller", "John Krasinski"],
        starring: ["Emily Blunt", "Cillian Murphy", "Millicent Simmonds", "Noah Jupe", "Djimon Hounsou", "John Krasinski"],
        distributedBy: ["Paramount Pictures"],
        releadeDate: "May 28, 2021",
        runningTime: "97 minutes",
        country: "United States",
        language: "English",
        budget: "61",
        boxOffice: "280.6",
        rating: "7.6",
        mpaa: "PG-13",
        description: "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },

    Artemis_Fowl: {
        name: "Artemis Fowl",
        folder: "ArtemisFowl",
        images: ["1.jpg,2.jpg"],
        director: ["Kenneth Branagh"],
        writer: ["Hamish McColl", "Conor McPherson", "Eoin Colfer"],
        producer: ["Kenneth Branagh", "Judy Hofflund"],
        starring: ["Ferdia Shaw", "Lara McDonnell", "Josh Gad", "Tamara Smart", "Nonso Anozie", "Colin Farrell", "Judi Dench"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "June 12, 2020",
        runningTime: "95 minutes",
        country: "United States",
        language: "English",
        budget: "125",
        boxOffice: "300",
        rating: "5",
        mpaa: "PG",
        genres: ["Adventure", "Family", "Fantasy", "Sci-Fi"],
        description: "Artemis Fowl, a young criminal prodigy, hunts down a secret society of fairies to find his missing father.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },

    Avengers_Endgame: {
        name: "Avengers:Endgame",
        folder: "AvengersEndgame",
        images: ["1.jpg,2.jpg"],
        director: ["Anthony Russo", "Joe Russo"],
        writer: ["Christopher Markus", "Stephen McFeely", "Stan Lee"],
        producer: ["Kevin Feige"],
        starring: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Don Cheadle", "Paul Rudd", "Brie Larson", "Karen Gillan", "Danai Gurira", "Benedict Wong", "Jon Favreau", "Bradley Cooper"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "April 26, 2019",
        runningTime: "181 minutes",
        country: "United States",
        language: "English",
        budget: "400",
        boxOffice: "2798",
        rating: "8.4",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
        description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        src: "https://www.youtube.com/embed/",
        release_year: "2019"
    },

    Avengers_Infinity_War: {
        name: "Avengers:Infinity War",
        folder: "AvengersInfinityWar",
        images: ["1.jpg,2.jpg"],
        director: ["Anthony Russo", "Anthony Russo"],
        writer: ["Christopher Markus", "Stephen McFeely", "Stan Lee"],
        producer: ["Kevin Feige"],
        starring: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Don Cheadle", "Paul Rudd", "Brie Larson", "Karen Gillan", "Danai Gurira", "Benedict Wong", "Jon Favreau", "Bradley Cooper"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "April 26, 2019",
        runningTime: "181 minutes",
        country: "United States",
        language: "English",
        budget: "400",
        boxOffice: "2798",
        rating: "8.4",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
        description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        src: "https://www.youtube.com/embed/",
        release_year: "2019"
    },

    Black_Widow: {
        name: "Black Widow",
        folder: "BlackWidow",
        images: ["1.jpg,2.jpg"],
        director: ["Cate Shortland"],
        writer: ["Eric Pearson", "Jac Schaeffer", "Ned Benson"],
        producer: ["Kevin Feige"],
        starring: ["Scarlett Johansson", "Florence Pugh", "David Harbour", "O-T Fagbenle", "Olga Kurylenko", "William Hurt", "Ray Winstone", "Rachel Weisz"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "June 29, 2021",
        runningTime: "134 minutes",
        country: "United States",
        language: "English",
        budget: "200",
        boxOffice: "300",
        rating: "7",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Sci-Fi"],
        description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },

    Bloodshot: {
        name: "Bloodshot",
        folder: "Bloodshot",
        images: ["1.jpg,2.jpg"],
        director: ["David S. F. Wilson"],
        writer: ["Jeff Wadlow"],
        producer: ["Neal H. Moritz", "Vin Diesel"],
        starring: ["Vin Diesel", "Eiza González", "Sam Heughan", "Toby Kebbell", "Guy Pearce"],
        distributedBy: ["Sony Pictures"],
        releadeDate: "March 13, 2020",
        runningTime: "	109 minutes",
        country: "United States",
        language: "English",
        budget: "45",
        boxOffice: "70",
        rating: "5.7",
        mpaa: "PG-13",
        genres: ["Action", "Drama", "Sci-Fi"],
        description: "Ray Garrison, a slain soldier, is re-animated with superpowers.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },

    Dolittle: {
        name: "Dolittle",
        folder: "Dolittle",
        images: ["1.jpg,2.jpg"],
        director: ["Stephen Gaghan"],
        writer: ["Thomas Shepherd"],
        producer: ["Joe Roth", "Jeff Kirschenbaum", "Susan Downey"],
        starring: ["Robert Downey Jr.", "Antonio Banderas", "Michael Sheen", "Harry Collett", "Emma Thompson", "Rami Malek", "John Cena", "Kumail Nanjiani", "Octavia Spencer", "Tom Holland", "Ralph Fiennes"],
        distributedBy: ["Universal Pictures"],
        releadeDate: "January 17, 2020",
        runningTime: "101 minutes",
        country: "United States",
        language: "English",
        budget: "175",
        boxOffice: "251.4",
        rating: "6.6",
        mpaa: "PG",
        genres: ["Adventure", "Comedy", "Family", "Fantasy"],
        description: "A physician who can talk to animals embarks on an adventure to find a legendary island with a young apprentice and a crew of strange pets.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },

    Enola_Holmes: {
        name: "Enola Holmes",
        folder: "EnolaHolmes",
        images: ["1.jpg,2.jpg"],
        director: ["Harry Bradbeer"],
        writer: ["Jack Thorne"],
        producer: ["Mary Parent", "Alex Garcia", "Millie Bobby Brown", "Paige Brown"],
        starring: ["Millie Bobby Brown", "Sam Claflin", "Henry Cavill", "Helena Bonham Carter"],
        distributedBy: ["Netflix"],
        releadeDate: "September 23, 2020",
        runningTime: "123 minutes",
        country: "United States",
        language: "English",
        budget: "70",
        boxOffice: "200",
        rating: "6.6",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Crime", "Drama", "Mystery"],
        description: "When Enola Holmes-Sherlock's teen sister-discovers her mother missing, she sets off to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy around a mysterious young Lord.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },

    Extraction: {
        name: "Extraction",
        folder: "Extraction",
        images: ["1.jpg,2.jpg"],
        director: ["Sam Hargrave"],
        writer: ["Ande Parks", "Joe Russo", "Anthony Russo"],
        producer: ["Joe Russo", "Anthony Russo", "Mike Larocca", "Chris Hemsworth", "Eric Gitter", "Peter Schwern"],
        starring: ["Chris Hemsworth", "Rudhraksh Jaiswal", "Randeep Hooda", "Golshifteh Farahani", "Pankaj Tripathi", "David Harbour"],
        distributedBy: ["Netflix"],
        releadeDate: "April 24, 2020",
        runningTime: "117 minutes",
        country: "United States",
        language: "English",
        budget: "65",
        boxOffice: "100",
        rating: "6.6",
        mpaa: "R-Rated",
        genres: ["Action", "Thriller"],
        description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },

    F9: {
        name: "F9",
        folder: "F9",
        images: ["1.jpg,2.jpg"],
        director: ["Justin Lin"],
        writer: ["Justin Lin", "Alfredo Botello", "Daniel Casey"],
        producer: ["Neal H. Moritz", "Vin Diesel", "Justin Lin", "Jeffrey Kirschenbaum", "Joe Roth"],
        starring: ["Vin Diesel", "Michelle Rodriguez", "Tyrese Gibson", "Chris 'Ludacris' Bridges", "John Cena", "Nathalie Emmanuel", "Jordana Brewster", "Sung Kang", "Michael Rooker", "Helen Mirren", "Kurt Russell", "Charlize Theron"],
        distributedBy: ["Universal Pictures"],
        releadeDate: "June 25, 2021",
        runningTime: "143 minutes",
        country: "United States",
        language: "English",
        budget: "200",
        boxOffice: "700",
        rating: "5.5",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Crime", "Thriller"],
        description: "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },

    Fantasy_Island: {
        name: "Fantasy Island",
        folder: "FantasyIsland",
        images: ["1.jpg,2.jpg"],
        director: ["Jeff Wadlow"],
        writer: ["Jeff Wadlow", "Chris Roach", "Jillian Jacobs"],
        producer: ["Jason Blum", "Marc Toberoff", "Jeff Wadlow"],
        starring: ["Michael Peña", "Maggie Q", "Lucy Hale", "Austin Stowell", "Jimmy O. Yang", "Ryan Hansen", "Portia Doubleday", "Michael Rooker"],
        distributedBy: ["Sony Pictures"],
        releadeDate: "February 14, 2020",
        runningTime: "109 minutes",
        country: "United States",
        language: "English",
        budget: "7",
        boxOffice: "48.5",
        rating: "4.9",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Fantasy", "Horror", "Mystery", "Thriller"],
        description: "When the owner and operator of a luxurious island invites a collection of guests to live out their most elaborate fantasies in relative seclusion, chaos quickly descends.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    Free_Guy: {
        name: "Free Guy",
        folder: "FreeGuy",
        images: ["1.jpg,2.jpg"],
        director: ["Shawn Levy"],
        writer: ["Matt Lieberman"],
        producer: ["Ryan Reynolds", "Shawn Levy", "Sarah Schechter", "Greg Berlanti", "Adam Kolbrenner"],
        starring: ["Ryan Reynolds", "Jodie Comer", "Lil Rel Howery", "Lil Rel Howery", "Joe Keery", "Taika Waititi"],
        distributedBy: ["20th Century Studios"],
        releadeDate: "August 13, 2021",
        runningTime: "115 minutes",
        country: "United States",
        language: "English",
        budget: "100",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "PG-13",
        genres: ["Action", "Comedy", "Sci-Fi"],
        description: "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Godzilla_vs_Kong: {
        name: "Godzilla vs Kong",
        folder: "GodzillavsKong",
        images: ["1.jpg,2.jpg"],
        director: ["Adam Wingard"],
        writer: ["Terry Rossio", "Michael Dougherty", "Zach Shields"],
        producer: ["Thomas Tull", "Jon Jashni", "Brian Rogers", "Mary Parent", "Mary Parent"],
        starring: ["Alexander Skarsgård", "Millie Bobby Brown", "Rebecca Hall", "Brian Tyree Henry", "Shun Oguri", "Eiza González", "Julian Dennison", "Lance Reddick", "Kyle Chandler", "Demián Bichir"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "March 24, 2021",
        runningTime: "113 minutes",
        country: "United States",
        language: "English",
        budget: "200",
        boxOffice: "459.4",
        rating: "6.4",
        mpaa: "PG-13",
        genres: ["Action", "Sci-Fi", "Thriller"],
        description: "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Harley_Quinn_Birds_of_Prey: {
        name: "Harley Quinn Birds of Prey",
        folder: "HarleyQuinn BirdsofPrey",
        images: ["1.jpg,2.jpg"],
        director: ["Cathy Yan"],
        writer: ["Christina Hodson"],
        producer: ["Margot Robbie", "Bryan Unkeless", "Sue Kroll"],
        starring: ["Margot Robbie", "Mary Elizabeth Winstead", "Jurnee Smollett-Bell", "Rosie Perez", "Chris Messina", "Ella Jay Basco", "Ali Wong", "Ewan McGregor"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "February 7, 2020",
        runningTime: "109 minutes",
        country: "United States",
        language: "English",
        budget: "100",
        boxOffice: "201",
        rating: "6.1",
        mpaa: "R-Rated",
        genres: ["Action", "Adventure", "Comedy", "Crime"],
        description: "After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    Hitman_s_Wife_s_Bodyguard: {
        name: "Hitman's Wife’s Bodyguard",
        folder: "Hitman'sWife’sBodyguard",
        images: ["1.jpg,2.jpg"],
        director: ["Patrick Hughes"],
        writer: ["Tom O'Connor"],
        producer: ["Matt O'Toole", "Les Weldon", "Yariv Lerner"],
        starring: ["Ryan Reynolds", "Samuel L. Jackson", "Salma Hayek", "Frank Grillo", "Richard E. Grant", "Antonio Banderas", "Morgan Freeman"],
        distributedBy: ["Lionsgate"],
        releadeDate: "June 16, 2021",
        runningTime: "100 minutes",
        country: "United States",
        language: "English",
        budget: "70",
        boxOffice: "61.3",
        rating: "6.3",
        mpaa: "R-Rated",
        genres: ["Action", "Comedy", "Crime", "Thriller"],
        description: "The bodyguard Michael Bryce continues his friendship with assassin Darius Kincaid as they try to save Darius' wife Sonia.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Hotel_Transylvania_4: {
        name: "Hotel Transylvania 4",
        folder: "HotelTransylvania4",
        images: ["1.jpg,2.jpg"],
        director: ["Jennifer Kluska"],
        writer: ["Genndy Tartakovsky"],
        producer: ["Alice Dewey Goldstone"],
        starring: ["Brian Hull", "Andy Samberg", "Selena Gomez", "Kathryn Hahn", "Steve Buscemi", "David Spade", "Keegan-Michael Key", "Asher Blinkoff", "Brad Abrell", "Fran Drescher", "Jim Gaffigan", "Molly Shannon"],
        distributedBy: ["Sony Pictures"],
        releadeDate: "October 1, 2021",
        runningTime: "N/A",
        country: "United States",
        language: "English",
        budget: "N/A",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "PG",
        genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Horror"],
        description: "Drac's Pack is back, like you've never seen them before in the final chapter of 'Hotel Transylvania'.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Inception: {
        name: "Inception",
        folder: "Inception",
        images: ["1.jpg,2.jpg"],
        director: ["Christopher Nolan"],
        writer: ["Christopher Nolan"],
        producer: ["Emma Thomas", "Christopher Nolan"],
        starring: ["Leonardo DiCaprio", "Ken Watanabe", "Joseph Gordon-Levitt", "Marion Cotillard", "Elliot Page", "Tom Hardy", "Cillian Murphy", "Tom Berenger", "Michael Caine"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "July 16, 2010",
        runningTime: "148 minutes",
        country: "United States",
        language: "English",
        budget: "160",
        boxOffice: "836.8",
        rating: "8.8",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        src: "https://www.youtube.com/embed/",
        release_year: "2010"
    },


    Joker: {
        name: "Joker",
        folder: "Joker",
        images: ["1.jpg,2.jpg"],
        director: ["Todd Phillips"],
        writer: ["Todd Phillips", "Scott Silver"],
        producer: ["Todd Phillips", "Bradley Cooper", "Emma Tillinger Koskoff"],
        starring: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "October 4, 2019",
        runningTime: "122 minutes",
        country: "United States",
        language: "English",
        budget: "70",
        boxOffice: "1074",
        rating: "8.4",
        mpaa: "R-Rated",
        genres: ["Crime", "Drama", "Thriller"],
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        src: "https://www.youtube.com/embed/",
        release_year: "2019"
    },


    Jungle_Cruise: {
        name: "Jungle Cruise",
        folder: "JungleCruise",
        images: ["1.jpg,2.jpg"],
        director: ["Jaume Collet-Serra"],
        writer: ["John Norville", "Josh Goldstein", "Glenn Ficarra", "John Requa"],
        producer: ["John Davis", "John Fox", "Beau Flynn", "Dwayne Johnson", "Dany Garcia", "Hiram Garcia"],
        starring: ["Dwayne Johnson", "Emily Blunt", "Édgar Ramírez", "Jack Whitehall", "Jesse Plemons", "Paul Giamatti"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "July 30, 2021",
        runningTime: "127 minutes",
        country: "United States",
        language: "English",
        budget: "N/A",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Comedy", "Fantasy"],
        description: "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Jurassic_World: {
        name: "Jurassic World",
        folder: "JurassicWorld",
        images: ["1.jpg,2.jpg"],
        director: ["Colin Trevorrow"],
        writer: ["Rick Jaffa", "Amanda Silver"],
        producer: ["Frank Marshall", "Patrick Crowley"],
        starring: ["Chris Pratt", "Bryce Dallas Howard", "Vincent D'Onofrio", "Ty Simpkins", "Nick Robinson", "Omar Sy", "BD Wong", "Irrfan Khan"],
        distributedBy: ["Universal Pictures"],
        releadeDate: "June 12, 2015",
        runningTime: "124 minutes",
        country: "United States",
        language: "English",
        budget: "150",
        boxOffice: "1610",
        rating: "7",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Sci-Fi"],
        description: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
        src: "https://www.youtube.com/embed/",
        release_year: "2015"
    },


    Love_and_Monsters: {
        name: "Love and Monsters",
        folder: "LoveandMonsters",
        images: ["1.jpg,2.jpg"],
        director: ["Michael Matthews"],
        writer: ["Brian Duffield"],
        producer: ["Shawn Levy", "Dan Cohen"],
        starring: ["Dylan O'Brien", "Jessica Henwick", "Dan Ewing", "Ariana Greenblatt", "Michael Rooker"],
        distributedBy: ["Paramount Pictures", "Netflix"],
        releadeDate: "April 14, 2021",
        runningTime: "109 minutes",
        country: "United States",
        language: "English",
        budget: "30",
        boxOffice: "1.1",
        rating: "7",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Comedy", "Fantasy", "Sci-Fi"],
        description: "Seven years after he survived the monster apocalypse, lovably hapless Joel leaves his cozy underground bunker behind on a quest to reunite with his ex.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Man_of_steel: {
        name: "Man of Steel",
        folder: "Manofsteel",
        images: ["1.jpg,2.jpg"],
        director: ["Zack Snyder"],
        writer: ["David S. Goyer", "David S. Goyer"],
        producer: ["Charles Roven", "Christopher Nolan", "Emma Thomas", "Deborah Snyder"],
        starring: ["Henry Cavill", "Amy Adams", "Michael Shannon", "Kevin Costner", "Diane Lane", "Laurence Fishburne", "Antje Traue", "Ayelet Zurer", "Christopher Meloni", "Russell Crowe"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "June 14, 2013",
        runningTime: "143 minutes",
        country: "United States",
        language: "English",
        budget: "225",
        boxOffice: "668",
        rating: "7",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Sci-Fi"],
        description: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.",
        src: "https://www.youtube.com/embed/",
        release_year: "2013"
    },


    Minions: {
        name: "Minions",
        folder: "Minions",
        images: ["1.jpg,2.jpg"],
        director: ["Pierre Coffin", "Kyle Balda"],
        writer: ["Brian Lynch"],
        producer: ["Chris Meledandri", "Janet Healy"],
        starring: ["Pierre Coffin", "Sandra Bullock", "Jon Hamm", "Michael Keaton", "Allison Janney", "Steve Coogan", "Jennifer Saunders"],
        distributedBy: ["Universal Pictures"],
        releadeDate: "July 10, 2015",
        runningTime: "91 minutes",
        country: "United States",
        language: "English",
        budget: "74",
        boxOffice: "1159",
        rating: "6.4",
        mpaa: "PG",
        genres: ["Animation", "Adventure", "Comedy", "Family", "Sci-Fi"],
        description: "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
        src: "https://www.youtube.com/embed/",
        release_year: "2015"
    },


    Monster_Hunter: {
        name: "Monster Hunter",
        folder: "MonsterHunter",
        images: ["1.jpg,2.jpg"],
        director: ["Paul W. S. Anderson"],
        writer: ["Paul W. S. Anderson"],
        producer: ["Jeremy Bolt", "Paul W. S. Anderson", "Dennis Berardi", "Robert Kulzer", "Martin Moszkowicz"],
        starring: ["Milla Jovovich", "Tony Jaa", "Tip 'T. I.' Harris", "Meagan Good", "Diego Boneta", "Josh Helman", "Jin Au-Yeung", "Ron Perlman"],
        distributedBy: ["Sony Pictures"],
        releadeDate: "December 18, 2020",
        runningTime: "103 minutes",
        country: "United States",
        language: "English",
        budget: "60",
        boxOffice: "44.4",
        rating: "5.3",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Fantasy"],
        description: "When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers. Feature film based on the video game by Capcom.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    Mortal_Kombat: {
        name: "Mortal Kombat",
        folder: "MortalKombat",
        images: ["1.jpg,2.jpg"],
        director: ["Simon McQuoid"],
        writer: ["Oren Uziel", "Greg Russo"],
        producer: ["James Wan", "Todd Garner", "Simon McQuoid", "E. Bennett Walsh"],
        starring: ["Lewis Tan", "Jessica McNamee", "Josh Lawson", "Tadanobu Asano", "Mehcad Brooks", "Ludi Lin", "Chin Han", "Joe Taslim", "Hiroyuki Sanada"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "April 23, 2021",
        runningTime: "110 minutes",
        country: "United States",
        language: "English",
        budget: "55",
        boxOffice: "83.6",
        rating: "6.1",
        mpaa: "R-Rated",
        genres: ["Action", "Adventure", "Fantasy", "Sci-Fi", "Thriller"],
        description: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Mulan: {
        name: "Mulan",
        folder: "Mulan",
        images: ["1.jpg,2.jpg"],
        director: ["Niki Caro"],
        writer: ["Rick Jaffa"],
        producer: ["Chris Bender", "Jake Weiner", "Jason T. Reed"],
        starring: ["Yifei Liu", "Donnie Yen", "Tzi Ma", "Jason Scott Lee", "Yoson An", "Ron Yuan", "Gong Li", "Jet Li"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "September 4, 2020",
        runningTime: "115 minutes",
        country: "United States",
        language: "English",
        budget: "200",
        boxOffice: "500",
        rating: "5.7",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Drama", "Family", "Fantasy"],
        description: "A young Chinese maiden disguises herself as a male warrior in order to save her father.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    No_Time_to_Die: {
        name: "No Time to Die",
        folder: "NoTimetoDie",
        images: ["1.jpg,2.jpg"],
        director: ["Cary Joji Fukunaga"],
        writer: ["Neal Purvis", "Robert Wade", "Cary Joji Fukunaga"],
        producer: ["Michael G. Wilson", "Barbara Broccoli"],
        starring: ["Daniel Craig", "Rami Malek", "Léa Seydoux", "Lashana Lynch", "Ben Whishaw", "Naomie Harris", "Jeffrey Wright", "Christoph Waltz", "Ralph Fiennes"],
        distributedBy: ["Universal Pictures"],
        releadeDate: "8 October 2021",
        runningTime: "163 minutes",
        country: "United States",
        language: "English",
        budget: "250",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Thriller"],
        description: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Onward: {
        name: "Onward",
        folder: "Onward",
        images: ["1.jpg,2.jpg"],
        director: ["Dan Scanlon"],
        writer: ["Dan Scanlon", "Jason Headley", "Keith Bunin"],
        producer: ["Kori Rae"],
        starring: ["Tom Holland", "Chris Pratt", "Julia Louis-Dreyfus", "Octavia Spencer"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "March 6, 2020",
        runningTime: "102 minutes",
        country: "United States",
        language: "English",
        budget: "200",
        boxOffice: "150",
        rating: "7.4",
        mpaa: "PG",
        genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
        description: "Two elven brothers embark on a quest to bring their father back for one day.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    Shang_Chi_and_the_Legend_of_the_Ten_Rings: {
        name: "Shang-Chi and the Legend of the Ten Rings",
        folder: "Shang-ChiandtheLegendoftheTenRings",
        images: ["1.jpg,2.jpg"],
        director: ["Destin Daniel Cretton"],
        writer: ["David Callaham", "Destin Daniel Cretton", "Andrew Lanham"],
        producer: ["Kevin Feige", "Jonathan Schwartz"],
        starring: ["Simu Liu", "Awkwafina", "Tony Leung", "Michelle Yeoh", "Fala Chen", "Meng'er Zhang", "Florian Munteanu", "Ronny Chieng"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "September 3, 2021",
        runningTime: "N/A",
        country: "United States",
        language: "English",
        budget: "N/A",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        description: "Shang-Chi, the master of unarmed weaponry based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organisation.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Space_Jam_A_New_Legacy: {
        name: "Space Jam:A New Legacy",
        folder: "SpaceJamANewLegacy",
        images: ["1.jpg,2.jpg"],
        director: ["Malcolm D. Lee"],
        writer: ["Juel Taylor", "Tony Rettenmaier", "Keenan Coogler", "Terence Nance"],
        producer: ["Ryan Coogler", "LeBron James", "Maverick Carter", "Duncan Henderson"],
        starring: ["LeBron James", "Don Cheadle", "Khris Davis", "Sonequa Martin-Green", "Jeff Bergman", "Eric Bauza", "Zendaya"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "July 16, 2021",
        runningTime: "115 minutes",
        country: "United States",
        language: "English",
        budget: "150",
        boxOffice: "Not Released Yet",
        rating: "4",
        mpaa: "PG",
        genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Sci-Fi", "Sport"],
        description: "A rogue artificial intelligence kidnaps the son of famed basketball player LeBron James, who then has to work with Bugs Bunny to win a basketball game.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Spider_Man_Homecoming: {
        name: "Spider-Man:Homecoming",
        folder: "Spider-ManHomecoming",
        images: ["1.jpg,2.jpg"],
        director: ["Jon Watts"],
        writer: ["Jonathan Goldstein", "John Francis Daley"],
        producer: ["Kevin Feige", "Amy Pascal"],
        starring: ["Tom Holland", "Michael Keaton", "Jon Favreau", "Gwyneth Paltrow", "Zendaya", "Donald Glover", "Jacob Batalon", "Laura Harrier", "Tony Revolori", "Bokeem Woodbine", "Tyne Daly", "Marisa Tomei", "Robert Downey Jr."],
        distributedBy: ["Sony Pictures"],
        releadeDate: "July 7, 2017",
        runningTime: "133 minutes",
        country: "United States",
        language: "English",
        budget: "175",
        boxOffice: "880.2",
        rating: "7.4",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Sci-Fi"],
        description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
        src: "https://www.youtube.com/embed/",
        release_year: "2017"
    },


    Spider_Man_Into_the_Spider_Verse: {
        name: "Spider-Man:Into the Spider-Verse",
        folder: "Spider-ManIntotheSpider-Verse",
        images: ["1.jpg,2.jpg"],
        director: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
        writer: ["Phil Lord"],
        producer: ["Avi Arad", "Amy Pascal", "Phil Lord", "Christopher Miller", "Christina Steinberg"],
        starring: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld", "Mahershala Ali", "Brian Tyree Henry", "Lily Tomlin", "Luna Lauren Velez", "John Mulaney", "Kimiko Glenn", "Nicolas Cage", "Liev Schreiber"],
        distributedBy: ["Sony Pictures"],
        releadeDate: "December 14, 2018",
        runningTime: "117 minutes",
        country: "United States",
        language: "English",
        budget: "90",
        boxOffice: "375.5",
        rating: "8.4",
        mpaa: "PG",
        genres: ["Animation", "Action", "Adventure", "Family", "Sci-Fi"],
        description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        src: "https://www.youtube.com/embed/",
        release_year: "2018"
    },


    Spider_Man_No_Way_Home: {
        name: "Spider-Man:No Way Home",
        folder: "Spider-ManNoWayHome",
        images: ["1.jpg,2.jpg"],
        director: ["Jon Watts"],
        writer: ["Chris McKenna", "Erik Sommers"],
        producer: ["Kevin Feige", "Amy Pascal"],
        starring: ["Tom Holland", "Zendaya", "J. B. Smoove", "Jacob Batalon", "Marisa Tomei", "Jamie Foxx", "Benedict Cumberbatch", "Alfred Molina"],
        distributedBy: ["Sony Pictures"],
        releadeDate: "December 17, 2021",
        runningTime: "N/A",
        country: "United States",
        language: "English",
        budget: "N/A",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Sci-Fi"],
        description: "A continuation of Spider-Man: Far From Home.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Tenet: {
        name: "Tenet",
        folder: "Tenet",
        images: ["1.jpg,2.jpg"],
        director: ["Christopher Nolan"],
        writer: ["Christopher Nolan"],
        producer: ["Emma Thomas", "Christopher Nolan"],
        starring: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki", "Dimple Kapadia", "Michael Caine", "Kenneth Branagh"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "August 26, 2020",
        runningTime: "150 minutes",
        country: "United States",
        language: "English",
        budget: "200",
        boxOffice: "363.7",
        rating: "7.4",
        mpaa: "PG-13",
        genres: ["Action", "Sci-Fi", "Thriller"],
        description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    The_Avengers: {
        name: "The Avengers",
        folder: "The Avengers",
        images: ["1.jpg,2.jpg"],
        director: ["Joss Whedon"],
        writer: ["Zak Penn", "Joss Whedon"],
        producer: ["Kevin Feige"],
        starring: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner", "Tom Hiddleston", "Clark Gregg", "Cobie Smulders", "Stellan Skarsgård", "Samuel L. Jackson"],
        distributedBy: ["Walt Disney Studios", "Motion Pictures"],
        releadeDate: "May 4, 2012",
        runningTime: "143 minutes",
        country: "United States",
        language: "English",
        budget: "220",
        boxOffice: "1519",
        rating: "8",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Sci-Fi"],
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        src: "https://www.youtube.com/embed/",
        release_year: "2012"
    },


    The_Conjuring_The_Devil_Made_Me_Do_It: {
        name: "The Conjuring:The Devil Made Me Do It",
        folder: "TheConjuringTheDevilMadeMeDoIt",
        images: ["1.jpg,2.jpg"],
        director: ["Michael Chaves"],
        writer: ["James Wan"],
        producer: ["James Wan", "Peter Safran"],
        starring: ["Patrick Wilson", "Vera Farmiga", "Ruairi O'Connor", "Sarah Catherine Hook", "Julian Hilliard"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "June 4, 2021",
        runningTime: "112 minutes",
        country: "United States",
        language: "English",
        budget: "39",
        boxOffice: "183.8",
        rating: "6.3",
        mpaa: "R-Rated",
        genres: ["Horror", "Mystery", "Thriller"],
        description: "The Warrens investigate a murder that may be linked to a demonic possession.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    The_Dark_Knight: {
        name: "The Dark Knight",
        folder: "TheDarkKnight",
        images: ["1.jpg,2.jpg"],
        director: ["Christopher Nolan"],
        writer: ["Christopher Nolan", "David S. Goyer"],
        producer: ["Emma Thomas", "Charles Roven", "Christopher Nolan"],
        starring: ["Christian Bale", "Michael Caine", "Heath Ledger", "Gary Oldman", "Aaron Eckhart", "Maggie Gyllenhaal", "Morgan Freeman"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "July 25, 2008",
        runningTime: "152 minutes",
        country: "United States",
        language: "English",
        budget: "185",
        boxOffice: "1.005",
        rating: "8",
        mpaa: "PG-13",
        genres: ["Action", "Crime", "Drama", "Thriller"],
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        src: "https://www.youtube.com/embed/",
        release_year: "2008"
    },


    The_Invisible_Man: {
        name: "The Invisible Man",
        folder: "TheInvisibleMan",
        images: ["1.jpg,2.jpg"],
        director: ["Leigh Whannell"],
        writer: ["Leigh Whannell"],
        producer: ["Jason Blum", "Kylie du Fresne"],
        starring: ["Elisabeth Moss", "Aldis Hodge", "Storm Reid", "Harriet Dyer", "Michael Dorman", "Oliver Jackson-Cohen"],
        distributedBy: ["Universal Pictures"],
        releadeDate: "February 28, 2020",
        runningTime: "124 minutes",
        country: "United States",
        language: "English",
        budget: "7",
        boxOffice: "143.2",
        rating: "7.1",
        mpaa: "R-Rated",
        genres: ["Drama", "Horror", "Mystery", "Sci-Fi", "Thriller"],
        description: "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    The_King_s_Man: {
        name: "The King's Man",
        folder: "TheKing'sMan",
        images: ["1.jpg,2.jpg"],
        director: ["Matthew Vaughn"],
        writer: ["Matthew Vaughn"],
        producer: ["Matthew Vaughn", "David Reid", "Adam Bohling"],
        starring: ["Ralph Fiennes", "Gemma Arterton", "Rhys Ifans", "Matthew Goode", "Tom Hollander", "Harris Dickinson", "Daniel Brühl", "Djimon Hounsou", "Charles Dance"],
        distributedBy: ["20th Century Studios"],
        releadeDate: "December 22, 2021",
        runningTime: "N/A",
        country: "United States",
        language: "English",
        budget: "N/A",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "R-Rated",
        genres: ["Action", "Adventure", "Comedy", "Crime", "Thriller"],
        description: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    The_Lord_of_the_Rings_The_Fellowship_of_the_Ring: {
        name: "The Lord of the Rings The Fellowship of the Ring",
        folder: "TheLordoftheRingsTheFellowshipoftheRing",
        images: ["1.jpg,2.jpg"],
        director: ["Peter Jackson"],
        writer: ["J.R.R. Tolkien", "Fran Walsh"],
        producer: ["Barrie M. Osborne", "Peter Jackson", "Fran Walsh", "Tim Sanders"],
        starring: ["Elijah Wood", "Ian McKellen", "Liv Tyler", "Viggo Mortensen", "Sean Astin", "Cate Blanchett", "John Rhys-Davies", "Billy Boyd", "Dominic Monaghan", "Orlando Bloom", "Christopher Lee", "Hugo Weaving", "Sean Bean", "Ian Holm", "Andy Serkis"],
        distributedBy: ["New Line Cinema"],
        releadeDate: "19 December 2001",
        runningTime: "178 minutes",
        country: "United States",
        language: "English",
        budget: "93",
        boxOffice: "897.7",
        rating: "8.8",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        src: "https://www.youtube.com/embed/",
        release_year: "2001"
    },


    The_Man_from_U_N_C_L_E: {
        name: "The Man from U.N.C.L.E",
        folder: "TheManfromU.N.C.L.E",
        images: ["1.jpg,2.jpg"],
        director: ["Guy Ritchie"],
        writer: ["Jeff Kleeman", "David C. Wilson", "Guy Ritchie", "Lionel Wigram"],
        producer: ["John Davis", "Steve Clark-Hall", "Lionel Wigram", "Guy Ritchie"],
        starring: ["Armie Hammer", "Henry Cavill", "Alicia Vikander", "Elizabeth Debicki", "Jared Harris", "Hugh Grant"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "August 14, 2015",
        runningTime: "116 minutes",
        country: "United States",
        language: "English",
        budget: "84",
        boxOffice: "107",
        rating: "7.3",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Comedy"],
        description: "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
        src: "https://www.youtube.com/embed/",
        release_year: "2015"
    },


    The_Matrix: {
        name: "The Matrix",
        folder: "TheMatrix",
        images: ["1.jpg,2.jpg"],
        director: ["The Wachowskis"],
        writer: ["The Wachowskis"],
        producer: ["Joel Silver"],
        starring: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "March 31, 1999",
        runningTime: "136 minutes",
        country: "United States",
        language: "English",
        budget: "63",
        boxOffice: "465.3",
        rating: "8.7",
        mpaa: "R-Rated",
        genres: ["Action", "Sci-Fi"],
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        src: "https://www.youtube.com/embed/",
        release_year: "1999"
    },


    The_New_Mutants: {
        name: "The New Mutants",
        folder: "TheNewMutants",
        images: ["1.jpg,2.jpg"],
        director: ["Josh Boone"],
        writer: ["Josh Boone", "Knate Lee"],
        producer: ["Karen Rosenfelt", "Lauren Shuler Donner", "Simon Kinberg"],
        starring: ["Maisie Williams", "Anya Taylor-Joy", "Charlie Heaton", "Alice Braga", "Blu Hunt", "Henry Zaga"],
        distributedBy: ["20th Century Studios"],
        releadeDate: "August 28, 2020",
        runningTime: "94 minutes",
        country: "United States",
        language: "English",
        budget: "80",
        boxOffice: "48.1",
        rating: "5.3",
        mpaa: "PG-13",
        genres: ["Action", "Horror", "Mystery", "Sci-Fi"],
        description: "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    The_Suicide_Squad: {
        name: "The Suicide Squad",
        folder: "TheSuicideSquad",
        images: ["1.jpg,2.jpg"],
        director: ["James Gunn"],
        writer: ["James Gunn"],
        producer: ["Charles Roven", "Peter Safran"],
        starring: ["Margot Robbie", "Idris Elba", "John Cena", "Joel Kinnaman", "Sylvester Stallone", "Viola Davis", "Jai Courtney", "Peter Capaldi"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "August 5, 2021",
        runningTime: "132 minutes",
        country: "United States",
        language: "English",
        budget: "N/A",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "R-Rated",
        genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
        description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    The_Tomorrow_War: {
        name: "The Tomorrow War",
        folder: "TheTomorrowWar",
        images: ["1.jpg,2.jpg"],
        director: ["Chris McKay"],
        writer: ["Zach Dean"],
        producer: ["David Ellison", "Dana Goldberg", "Don Granger", "Jules Daly", "David S. Goyer", "Adam Kolbrenner"],
        starring: ["Chris Pratt", "Yvonne Strahovski", "J. K. Simmons", "Betty Gilpin", "Sam Richardson", "Edwin Hodge"],
        distributedBy: ["Amazon Studios"],
        releadeDate: "July 2, 2021",
        runningTime: "138 minutes",
        country: "United States",
        language: "English",
        budget: "200",
        boxOffice: "400",
        rating: "6.6",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Drama", "Sci-Fi", "Thriller"],
        description: "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Tom_and_Jerry: {
        name: "Tom And Jerry",
        folder: "Tom&Jerry",
        images: ["1.jpg,2.jpg"],
        director: ["Tim Story"],
        writer: ["Kevin Costello"],
        producer: ["Chris DeFaria"],
        starring: ["Chloë Grace Moretz", "Michael Peña", "Colin Jost", "Rob Delaney", "Pallavi Sharda", "Jordan Bolger", "Patsy Ferran", "Ken Jeong"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "February 26, 2021",
        runningTime: "101 minutes",
        country: "United States",
        language: "English",
        budget: "79",
        boxOffice: "124.3",
        rating: "5.3",
        mpaa: "PG",
        genres: ["Animation", "Comedy", "Family"],
        description: "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Underwater: {
        name: "Underwater",
        folder: "Underwater",
        images: ["1.jpg,2.jpg"],
        director: ["William Eubank"],
        writer: ["Brian Duffield"],
        producer: ["Peter Chernin", "Tonia Davis", "Jenno Topping"],
        starring: ["Kristen Stewart", "Vincent Cassel", "Jessica Henwick", "John Gallagher Jr.", "Mamoudou Athie", "T.J. Miller"],
        distributedBy: ["20th Century Studios"],
        releadeDate: "January 10, 2020",
        runningTime: "95 minutes",
        country: "United States",
        language: "English",
        budget: "80",
        boxOffice: "50",
        rating: "5.6",
        mpaa: "PG-13",
        genres: ["Action", "Horror", "Sci-Fi", "Thriller"],
        description: "A crew of oceanic researchers working for a deep sea drilling company try to get to safety after a mysterious earthquake devastates their deepwater research and drilling facility located at the bottom of the Mariana Trench.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    Venom_Let_There_Be_Carnage: {
        name: "Venom Let There Be Carnage",
        folder: "VenomLetThereBeCarnage",
        images: ["1.jpg,2.jpg"],
        director: ["Andy Serkis"],
        writer: ["Tom Hardy", "Kelly Marcel"],
        producer: ["Avi Arad", "Matt Tolmach", "Amy Pascal", "Kelly Marcel", "Tom Hardy", "Hutch Parker"],
        starring: ["Tom Hardy", "Michelle Williams", "Naomie Harris", "Reid Scott", "Stephen Graham", "Woody Harrelson"],
        distributedBy: ["Sony Pictures"],
        releadeDate: "September 24, 2021",
        runningTime: "N/A",
        country: "United States",
        language: "English",
        budget: "N/A",
        boxOffice: "Not Released Yet",
        rating: "N/A",
        mpaa: "PG-13",
        genres: ["Action", "Sci-Fi", "Thriller"],
        description: "Plot unknown. Sequel to the 2018 film 'Venom'.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    },


    Wonder_Woman_1984: {
        name: "Wonder Woman 1984",
        folder: "WonderWoman1984",
        images: ["1.jpg,2.jpg"],
        director: ["Patty Jenkins"],
        writer: ["Patty Jenkins", "Geoff Johns"],
        producer: ["Charles Roven", "Deborah Snyder", "Zack Snyder", "Patty Jenkins", "Gal Gadot"],
        starring: ["Gal Gadot", "Chris Pine", "Kristen Wiig", "Pedro Pascal", "Robin Wright", "Connie Nielsen"],
        distributedBy: ["Warner Bros. Pictures"],
        releadeDate: "December 25, 2020",
        runningTime: "151 minutes",
        country: "United States",
        language: "English",
        budget: "200",
        boxOffice: "166.5",
        rating: "5.4",
        mpaa: "PG-13",
        genres: ["Action", "Adventure", "Fantasy"],
        description: "Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.",
        src: "https://www.youtube.com/embed/",
        release_year: "2020"
    },


    Zack_Snyder_s_Justice_League: {
        name: "Zack Snyder's:Justice League",
        folder: "ZackSnyder'sJusticeLeague",
        images: ["1.jpg,2.jpg"],
        director: ["Zack Snyder"],
        writer: ["Chris Terrio", "Zack Snyder", "Will Beall"],
        producer: ["Charles Roven", "Deborah Snyder"],
        starring: ["Ben Affleck", "Henry Cavill", "Amy Adams", "Gal Gadot", "Ray Fisher", "Ray Fisher", "Ezra Miller", "Willem Dafoe", "Jesse Eisenberg", "Jeremy Irons", "Diane Lane"],
        distributedBy: ["HBO Max"],
        releadeDate: "March 18, 2021",
        runningTime: "242 minutes",
        country: "United States",
        language: "English",
        budget: "70",
        boxOffice: "100",
        rating: "8.1",
        mpaa: "R-Rated",
        genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        description: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
        src: "https://www.youtube.com/embed/",
        release_year: "2021"
    }
}



/*function getUnique(array_1) {
    var NewArray = [];

    for (i = 0; i < array_1.length; i++) {
        if (NewArray.indexOf(array_1[i]) === -1) {
            NewArray.push(array_1[i]);
        }
    }
    return NewArray;
}


function Unique_MPAA_Array() {
    var txt = "",
        coma;
    for (var i = 0; i < Obj_Movie.length; i++) {
        if (i == Obj_Movie.length - 1) {
            coma = "";
        } else {
            coma = ",";
        }
        txt += movies[Obj_Movie[i]].mpaa + coma;
    }
    txt = txt.split(",");

    var q = getUnique(txt);
    q.sort();

    return q;
}

function Unique_DestributedBy_Array() {
    var txt = "";
    for (var i = 0; i < Obj_Movie.length; i++) {
        if (i == Obj_Movie.length - 1) {
            coma = "";
        } else {
            coma = ",";
        }
        txt += movies[Obj_Movie[i]].distributedBy + coma;
    }
    txt = txt.split(",");

    var q = getUnique(txt);
    q.sort();

    return q;
}

function Unique_Release_Year_Array() {
    var txt = "";
    for (var i = 0; i < Obj_Movie.length; i++) {
        if (i == Obj_Movie.length - 1) {
            coma = "";
        } else {
            coma = ",";
        }
        txt += movies[Obj_Movie[i]].release_year + coma;
    }
    txt = txt.split(",");

    var q = getUnique(txt);
    q.sort();

    return q;
}

function Unique_Geners_Array() {
    var txt = "";
    for (var i = 0; i < Obj_Movie.length; i++) {
        if (i == Obj_Movie.length - 1) {
            coma = "";
        } else {
            coma = ",";
        }
        txt += movies[Obj_Movie[i]].genres + coma;
    }
    txt = txt.split(",");

    var q = getUnique(txt);
    q.sort();

    return q;
}
var DestributerSort = Unique_DestributedBy_Array();
var MAPPSort = Unique_MPAA_Array();
var ReleaseDateSort = Unique_Release_Year_Array();
var GenersSort = Unique_Geners_Array();

qwe()

function qwe() {
    var tt = document.getElementsByClassName("cat");
    var yy = "",
        com, pp, kk;

    for (var w = 0; w < tt.length; w++) {
        if (tt[w].checked == true) {
            yy += tt[w].value + ",";
        }
    }

    if (yy.length != 0) {
        if (yy[yy.length - 1] == ",") {
            pp = yy.slice(0, yy.length - 1)
        }
        if (pp.indexOf(",") != -1) {
            pp = pp.split(",");
            com = pp;
        } else {
            com = pp;
        }
    } else {
        com = "404 Not Found"
    }
    document.getElementById("txt").innerHTML = DestributerSort + "\n" + MAPPSort + "\n" + ReleaseDateSort + "\n" + GenersSort;
}*/