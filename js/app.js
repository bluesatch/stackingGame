
class Game {
    constructor() {
        this.gameTitle = document.getElementById('gameTitle')
        this.gameBoard = document.getElementById('gameboard')
        this.tradeValue
        this.die = document.getElementById('die')
        this.redSection = document.getElementById('redSection')
        this.blueSection = document.getElementById('blueSection')
        this.purpleSection = document.getElementById('purpleSection')
        this.yellowSection = document.getElementById('yellowSection')
        this.cube
        this.dieRoll
        this.redCubes = []
        this.blueCubes = []
        this.purpleCubes = []
        this.yellowCubes = []
    }
    
    init() {
        // console.log('init')
        this.startGame()
        this.setTradeValue()
        this.rollDie()
        
    }

    setTradeValue() {
        // set random tradeValue for game
        this.tradeValue = Math.ceil(Math.random() * (6 - 2) + 2) 
        let tradeDisplay = document.getElementById('tradeDisplay')
        return tradeDisplay.innerText = this.tradeValue
    }

    startGame() {
        // change functionality of button
        let roller = document.getElementById('gameBtn')
        return roller.innerText = 'Roll Die'
    }

    rollDie() {
        // rolls dice and makes call on getCubes
        let roller = document.getElementById('gameBtn')
        if (roller.innerText == 'ROLL DIE') {
            roller.addEventListener('click', ()=> {
                this.dieRoll = Math.floor(Math.random() * 6) + 1
                // console.log(this.dieRoll)
                this.die.innerText = this.dieRoll
                return this.getCubes(this.dieRoll)
            })
        }
        else {
            this.die.innerText = null
        }
    }

    getCubes(rollCount) {
        // create red cube for every count in rollCount
        
        /*
        if rollCount is greater than this.tradeValue 
        
        make one blueCube and the rest red cubes
        */
        if (rollCount < this.tradeValue) {
            for (var i = 1; i <= rollCount; i++) {
                let cube = document.createElement('div')
                cube.className = 'cube redCube'
                // cube.classList.add('redCube')
                this.redCubes.push(cube)
                // console.log(this.redCubes)

            }
            console.log(this.redCubes)
            this.displayCube(this.redCubes, this.redSection)
            
        } else if (rollCount == this.tradeValue) {
            let cube = document.createElement('div')
            cube.className ='cube blueCube' 
            this.blueCubes.push(cube)
            
            this.displayCube(this.blueCubes, this.blueSection)
        } else if (rollCount > this.tradeValue) {
            // console.log('roll is greater')
            let remainder = rollCount % this.tradeValue
            let whole = Math.floor(rollCount / this.tradeValue)

            console.log(whole, remainder)

            // make red cubes 
            for (let i = 1; i <= remainder; i++) {
                let cube = document.createElement('div')
                cube.className = 'cube redCube'
                this.redCubes.push(cube)

                this.displayCube(this.redCubes, this.redSection)
            }

            // make blue cubes
            if (whole >= 1) {
                console.log(whole)
                for (let i = 1; i <= whole; i++) {
                    let cube = document.createElement('div')
                    cube.className = 'cube blueCube'
                    this.blueCubes.push(cube)

                    this.displayCube(this.blueCubes, this.blueSection)
                }

            }
        }

    }

    displayCube(arr, section){
        for (let i = 0; i < arr.length; i++) {
            section.appendChild(arr[i])
        }
    }

    // tradeCube(prevArr, newArr, section) {
    //     // if this.redCubes.length is greater than this.tradeValue
    //     console.log(prevArr.length, this.tradeValue)
    //     if (prevArr.length >= this.tradeValue) {
    //         this.displayCube(newArr, section)
    //     }
    // }
    // removeCubes(arr) {

    // }

}

let action = new Game();

const gameBtn = document.getElementById('gameBtn')

gameBtn.addEventListener('click', ()=> {
    if (gameBtn.innerText == 'START GAME') {
        action.init()
    }
})

// test 

