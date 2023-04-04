//* This file runs is a game loop
//TODO: Define global game components ======================================================================================
let isFirstRun = true
var game_grid = Grid.grid
var player_node = null
if(game_grid.innerHTML != '') { 
    player_node = document.getElementById('player_node')
}

//TODO: Put game actions to do when window loads ==========================================================================================
window.onload = () => {
    Active_save = Start_save
    
    showPlayerInfo()
    openMenuTab(1)

    Grid.importLocation(Player.location)
    gameGridTicks() // First game ticks loop start
}

//TODO: Put game functions during playthrough ===================================================================================
function pauseOrUnpauseGame(hardpause) {
    let game_pause = document.getElementById('game_pause')
    let buttons_game_pause = document.getElementById('buttons_game_pause')

    if (isFirstRun == true) {
        buttons_game_pause.innerHTML = ""
        isFirstRun = false
    }
    else {
        buttons_game_pause.innerHTML = ""
        let exportSaveButton = document.createElement("input")
        exportSaveButton.setAttribute("type", "button")
        exportSaveButton.setAttribute("value", "Export Save")
        exportSaveButton.addEventListener("click", exportSave)
        buttons_game_pause.appendChild(exportSaveButton)
    
        let importSaveButton = document.createElement("input")
        importSaveButton.setAttribute("type", "button")
        importSaveButton.setAttribute("value", "Import Save")
        importSaveButton.addEventListener("click", importSave)
        buttons_game_pause.appendChild(importSaveButton)
    }

    if(game_pause.style.display === 'none' || hardpause === true) {
        game_pause.style.display = 'block'
        game_pause.style.position = 'absolute'
        game_pause.style.top = '0px'
        game_pause.style.left = '0px'
        game_pause.style.width = '100vw'
        game_pause.style.height = '100vh'
        game_pause.style.zIndex = '9999' 
        game_pause.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'

        buttons_game_pause.style.display = 'block' 
        buttons_game_pause.style.position = 'absolute'
        buttons_game_pause.style.top = '50vh'
        buttons_game_pause.style.left = '50vw'
        buttons_game_pause.style.width = '70vw'
        buttons_game_pause.style.height = '60vh'
        buttons_game_pause.style.zIndex = '10000' 
        buttons_game_pause.style.transform = 'translate(-50%, -50%)'
        buttons_game_pause.style.backgroundColor = 'orange'
        buttons_game_pause.style.padding = 'padding: 20px'
        buttons_game_pause.style.border = '3px solid black'

       
    }
    else {
        game_pause.style.display = 'none'
        buttons_game_pause.style.display = 'none'
    }
}

function startNewGame() {
    // Load player name and chosen class
    playerName = prompt("Enter player name:");
    playerClass = prompt("Choose player class (warrior, mage, rogue):");
    alert("Starting new game...");
    
    // Delete pause menu
    pauseOrUnpauseGame(false)

    // Set Start_save as Active_save
    Active_save = Start_save
}

function importSave() {

}

function exportSave() {

}

function openMenuTab(tab_number) {
    for(let i = 1; i < 5; i++) document.getElementById(`tab${i}`).style.display = 'none'

    document.getElementById(`tab${tab_number}`).style.display = 'block'
}

// Grid ticks handler 
var interval = 250; // Interval in milliseconds
var expected_time_diff = Date.now() + interval // Expected time difference (in milliseconds) between ticks
var time_diff

function gameGridTicks() {
    time_diff = Date.now() - expected_time_diff // Get actual time difference

    if(document.visibilityState === 'hidden') { return } // Time error handling. Errors occur when game tab is not visible to the user

    if(time_diff > interval) {
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ESCAPE'}))
        document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ESCAPE'}))
    }

    //TODO: Put game events that need to run in intervals here ==================================================================
    Grid.moveGrid(active_wsad_key)
    timer()

    // Start next loop ==================================
    expected_time_diff += interval
    setTimeout(gameGridTicks, interval - time_diff)
}

//TODO: Put game loops and event listeners here =================================================================================
document.addEventListener('keydown', keydownActions)


document.onvisibilitychange = () => {
    if(document.visibilityState === 'visible') { // Restart gameGridTicks() every time user is back on the site
        expected_time_diff = Date.now() + interval 
        gameGridTicks()
    }
    if(document.visibilityState === 'hidden') { // Pause game when user is not on the site
        pauseOrUnpauseGame(true)
    }
}