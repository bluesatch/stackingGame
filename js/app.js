
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
        //     if (rollCount % this.tradeValue != 0) {
        //         let remainder = rollCount % this.tradeValue

        //         for (let i = 1; i <= remainder; i++){
        //             cube.classList.add('redCube') 
        //             this.redCubes.push(cube)
        //         }
        //         this.displayCube(this.redCubes, this.redSection)

        //         if(Math.floor(rollCount % this.tradeValue == 1)) {
        //             cube.classList.add('blueCube')

        //         } else if (Math.floor(rollCount % this.tradeValue == 2)) {

        //         }
                
        //         this.displayCube(this.blueCubes, this.blueSection)
        //     } 


        // }
        
        // if (rollCount > this.tradeValue) {
        //     let remainder = rollCount % this.tradeValue
        //     console.log(remainder)
        //     cube.classList.add('blueCube')
        //     let blueCube = document.getElementsByClassName('blueCube')
        //     console.log(blueCube)
        //     this.blueCubes.push(blueCube)
        //     this.blueSection.appendChild(cube)

        //     for (let i = 1; i <= remainder; i++) {
        //         cube.classList.remove('blueCube')
        //         cube.classList.add('redCube')
        //         let redCube = document.getElementsByClassName('redCube')
        //         this.redCubes.push(redCube)
        //         this.redSection.appendChild(cube)
        //     }
        // }
        // console.log(`red cubes: ${this.redCubes}, blue cubes ${this.blueCubes}`)
    }

}
displayCube(arr, section){
    for (let i = 0; i < arr.length; i++) {
        section.appendChild(arr[i])
    }
}
}
let action = new Game();

const gameBtn = document.getElementById('gameBtn')

gameBtn.addEventListener('click', ()=> {
    if (gameBtn.innerText == 'START GAME') {
        action.init()
    }
})

// test 

