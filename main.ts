// Function to select any NFL team
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
        case "washington commanders":
            return league.washingtonRedskins
        default:
            return league.chicagoBears
    }
}
game.showLongText("Welcome back, folks! Today we have...", DialogLayout.Center)
// Ask the player to choose teams
game.showLongText("Choose your teams and jerseys!", DialogLayout.Center)
let playerChoice = game.askForString("Your team? Type a team name or nickname.", 30)
let computerChoice = game.askForString("Opponent? Type a team name or nickname.", 30)
// Set team objects
let playerTeam = chooseTeam(playerChoice)
let computerTeam = chooseTeam(computerChoice)
let playerName = playerChoice.trim()
let computerName = computerChoice.trim()
// Correct the names for the announcer
if (playerName.toLowerCase() == "bears") {
    playerName = "Chicago Bears"
} else if (playerName.toLowerCase() == "packers") {
    playerName = "Green Bay Packers"
}
if (computerName.toLowerCase() == "bears") {
    computerName = "Chicago Bears"
} else if (computerName.toLowerCase() == "packers") {
    computerName = "Green Bay Packers"
}
// Choose jerseys
let playerJersey = game.askForString("Your jersey: normal or alternate?", 10)
let computerJersey = game.askForString("Opponent jersey: normal or alternate?", 10)
// Announcer introductions
game.showLongText("Welcome to NFL Arcade!", DialogLayout.Center)
game.showLongText("" + playerName + " vs. " + computerName + "!", DialogLayout.Center)
game.showLongText("Today's matchup is about to begin!", DialogLayout.Center)
game.showLongText("This is NFL Arcade, brought to you by Gabe Joseph!", DialogLayout.Center)
football.createGame(playerTeam, computerTeam, 60)
// Set jersey styles
football.setTeamAlternateColors(TeamId.Player, playerJersey.toLowerCase().trim() == "alternate")
football.setTeamAlternateColors(TeamId.Computer, computerJersey.toLowerCase().trim() == "alternate")
// Game settings
football.setHardMode(true)
scene.cameraShake(5, 500)
