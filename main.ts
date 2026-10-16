function chooseTeam (choice: string) {
    switch (choice.toLowerCase().trim()) {
        case "cardinals":
        case "arizona cardinals":
            return league.arizonaCardinals
        case "falcons":
        case "atlanta falcons":
            return league.atlantaFalcons
        case "ravens":
        case "baltimore ravens":
            return league.baltimoreRavens
        case "bills":
        case "buffalo bills":
            return league.buffaloBills
        case "panthers":
        case "carolina panthers":
            return league.carolinaPanthers
        case "bears":
        case "chicago bears":
            return league.chicagoBears
        case "bengals":
        case "cincinnati bengals":
            return league.cincinnatiBengals
        case "browns":
        case "cleveland browns":
            return league.clevelandBrowns
        case "cowboys":
        case "dallas cowboys":
            return league.dallasCowboys
        case "broncos":
        case "denver broncos":
            return league.denverBroncos
        case "lions":
        case "detroit lions":
            return league.detroitLions
        case "packers":
        case "green bay packers":
            return league.greenBayPackers
        case "texans":
        case "houston texans":
            return league.houstonTexans
        case "colts":
        case "indianapolis colts":
            return league.indianapolisColts
        case "jaguars":
        case "jacksonville jaguars":
            return league.jacksonvilleJaguars
        case "chiefs":
        case "kansas city chiefs":
            return league.kansasCityChiefs
        case "raiders":
        case "oakland raiders":
        case "las vegas raiders":
            return league.oaklandRaiders
        case "chargers":
        case "los angeles chargers":
            return league.losAngelesChargers
        case "rams":
        case "los angeles rams":
            return league.losAngelesRams
        case "dolphins":
        case "miami dolphins":
            return league.miamiDolphins
        case "vikings":
        case "minnesota vikings":
            return league.minnesotaVikings
        case "patriots":
        case "new england patriots":
            return league.newEnglandPatriots
        case "saints":
        case "new orleans saints":
            return league.newOrleansSaints
        case "giants":
        case "new york giants":
            return league.newYorkGiants
        case "jets":
        case "new york jets":
            return league.newYorkJets
        case "eagles":
        case "philadelphia eagles":
            return league.philadelphiaEagles
        case "steelers":
        case "pittsburgh steelers":
            return league.pittsburghSteelers
        case "49ers":
        case "san francisco 49ers":
            return league.sanFrancisco49ers
        case "seahawks":
        case "seattle seahawks":
            return league.seattleSeahawks
        case "buccaneers":
        case "tampa bay buccaneers":
            return league.tampaBayBuccaneers
        case "titans":
        case "tennessee titans":
            return league.tennesseeTitans
        case "commanders":
        case "redskins":
        case "washington redskins":
        case "washington commanders":
            return league.washingtonRedskins
        default:
            return league.chicagoBears
    }
}
// FIND TEAM INDEX
function findTeamIndex (choice: string) {
    let normalized = choice.toLowerCase().trim()
for (let i = 0; i <= teamNames.length - 1; i++) {
        if (normalized == teamNames[i].toLowerCase()) {
            return i
        }
    }
    nicknames = [
    "cardinals",
    "falcons",
    "ravens",
    "bills",
    "panthers",
    "bears",
    "bengals",
    "browns",
    "cowboys",
    "broncos",
    "lions",
    "packers",
    "texans",
    "colts",
    "jaguars",
    "chiefs",
    "raiders",
    "chargers",
    "rams",
    "dolphins",
    "vikings",
    "patriots",
    "saints",
    "giants",
    "jets",
    "eagles",
    "steelers",
    "49ers",
    "seahawks",
    "buccaneers",
    "titans",
    "commanders"
    ]
    for (let j = 0; j <= nicknames.length - 1; j++) {
        if (normalized == nicknames[j]) {
            return j
        }
    }
    if (normalized == "oakland raiders") {
        return 16
    }
    if (normalized == "las vegas raiders") {
        return 16
    }
    if (normalized == "washington redskins") {
        return 31
    }
    if (normalized == "redskins") {
        return 31
    }
    if (normalized == "washington commanders") {
        return 31
    }
    return -1
}
// RIVALRY INTRODUCTIONS
function showRivalry (team1: string, team2: string) {
    if (team1 == "Chicago Bears" && team2 == "Green Bay Packers" || team1 == "Green Bay Packers" && team2 == "Chicago Bears") {
        game.showLongText("BEARS VS PACKERS!\n\nThe oldest rivalry!", DialogLayout.Center)
    } else if (team1 == "Dallas Cowboys" && team2 == "Philadelphia Eagles" || team1 == "Philadelphia Eagles" && team2 == "Dallas Cowboys") {
        game.showLongText("COWBOYS VS EAGLES!\n\nNFC East showdown!", DialogLayout.Center)
    } else if (team1 == "Kansas City Chiefs" && team2 == "Buffalo Bills" || team1 == "Buffalo Bills" && team2 == "Kansas City Chiefs") {
        game.showLongText("CHIEFS VS BILLS!\n\nA battle of contenders!", DialogLayout.Center)
    } else if (team1 == "Pittsburgh Steelers" && team2 == "Baltimore Ravens" || team1 == "Baltimore Ravens" && team2 == "Pittsburgh Steelers") {
        game.showLongText("STEELERS VS RAVENS!\n\nA hard-hitting rivalry!", DialogLayout.Center)
    } else if (team1 == "New York Giants" && team2 == "Philadelphia Eagles" || team1 == "Philadelphia Eagles" && team2 == "New York Giants") {
        game.showLongText("GIANTS VS EAGLES!\n\nNFC East rivals!", DialogLayout.Center)
    } else if (team1 == "San Francisco 49ers" && team2 == "Seattle Seahawks" || team1 == "Seattle Seahawks" && team2 == "San Francisco 49ers") {
        game.showLongText("49ERS VS SEAHAWKS!\n\nWest Coast battle!", DialogLayout.Center)
    } else if (team1 == "Cincinnati Bengals" && team2 == "Cleveland Browns" || team1 == "Cleveland Browns" && team2 == "Cincinnati Bengals") {
        game.showLongText("BENGALS VS BROWNS!\n\nA battle for Ohio!", DialogLayout.Center)
    } else if (team1 == "New York Giants" && team2 == "Dallas Cowboys" || team1 == "Dallas Cowboys" && team2 == "New York Giants") {
        game.showLongText("GIANTS VS COWBOYS!\n\nNFC East rivals!", DialogLayout.Center)
    } else {
        game.showLongText("" + "RIVALRY GAME!\n\n" + team1 + "\nVS\n" + team2, DialogLayout.Center)
    }
}
let nicknames: string[] = []
let teamNames: string[] = []
// TEAM NAMES AND RATINGS
teamNames = [
"Arizona Cardinals",
"Atlanta Falcons",
"Baltimore Ravens",
"Buffalo Bills",
"Carolina Panthers",
"Chicago Bears",
"Cincinnati Bengals",
"Cleveland Browns",
"Dallas Cowboys",
"Denver Broncos",
"Detroit Lions",
"Green Bay Packers",
"Houston Texans",
"Indianapolis Colts",
"Jacksonville Jaguars",
"Kansas City Chiefs",
"Las Vegas Raiders",
"Los Angeles Chargers",
"Los Angeles Rams",
"Miami Dolphins",
"Minnesota Vikings",
"New England Patriots",
"New Orleans Saints",
"New York Giants",
"New York Jets",
"Philadelphia Eagles",
"Pittsburgh Steelers",
"San Francisco 49ers",
"Seattle Seahawks",
"Tampa Bay Buccaneers",
"Tennessee Titans",
"Washington Commanders"
]
let teamRatings = [
74,
78,
88,
89,
76,
82,
83,
70,
79,
86,
89,
87,
84,
82,
83,
85,
75,
82,
85,
76,
79,
80,
73,
72,
69,
88,
82,
84,
85,
80,
72,
78
]
// TEAM SELECTION
game.showLongText("WELCOME TO NFL ARCADE!", DialogLayout.Center)
game.showLongText("" + "Choose any of the 32 NFL teams!\n\n" + "Examples: Bears, Packers, Chiefs,\n" + "Eagles, Cowboys, 49ers, Raiders.\n\n" + "You can also type the full team name.", DialogLayout.Center)
let playerChoice = game.askForString("Type YOUR team name", 30)
let opponentChoice = game.askForString("Type your OPPONENT's team name", 30)
let playerIndex = findTeamIndex(playerChoice)
let opponentIndex = findTeamIndex(opponentChoice)
if (playerIndex < 0) {
    playerIndex = 5
    game.showLongText("Team not recognized!\nDefaulting to Chicago Bears.", DialogLayout.Center)
}
if (opponentIndex < 0) {
    opponentIndex = 11
    game.showLongText("Opponent not recognized!\nDefaulting to Green Bay Packers.", DialogLayout.Center)
}
let playerTeam = chooseTeam(teamNames[playerIndex])
let computerTeam = chooseTeam(teamNames[opponentIndex])
let playerName = teamNames[playerIndex]
let computerName = teamNames[opponentIndex]
let playerRating = teamRatings[playerIndex]
let opponentRating = teamRatings[opponentIndex]
// DIFFICULTY
game.showLongText("" + "CHOOSE YOUR DIFFICULTY\n\n" + "Easy - Casual\n" + "Normal - Standard\n" + "Hard - Tough\n" + "Extreme - Maximum challenge", DialogLayout.Center)
let difficulty = game.askForString("Type easy, normal, hard, or extreme", 10)
difficulty = difficulty.toLowerCase().trim()
if (difficulty != "easy" && difficulty != "normal" && difficulty != "hard" && difficulty != "extreme") {
    difficulty = "normal"
}
// JERSEYS
let playerJersey = game.askForString("Your jersey: normal or alternate?", 10)
let opponentJersey = game.askForString("Opponent jersey: normal or alternate?", 10)
playerJersey = playerJersey.toLowerCase().trim()
opponentJersey = opponentJersey.toLowerCase().trim()
// BROADCAST INTRO
game.showLongText("NFL ARCADE", DialogLayout.Center)
showRivalry(playerName, computerName)
game.showLongText("" + playerName + " VS " + computerName + "\n\nRatings: " + playerRating + " - " + opponentRating + "\nDifficulty: " + difficulty.toUpperCase(), DialogLayout.Center)
game.showLongText("" + "Presented by Gabe Joseph\n\n" + "3... 2... 1... KICKOFF!", DialogLayout.Center)
football.createGame(playerTeam, computerTeam, 60)
football.setTeamAlternateColors(TeamId.Player, playerJersey == "alternate")
football.setTeamAlternateColors(TeamId.Computer, opponentJersey == "alternate")
football.setHardMode(difficulty == "hard" || difficulty == "extreme")
scene.cameraShake(5, 500)
