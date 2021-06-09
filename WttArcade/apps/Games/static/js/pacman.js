document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
	const startBtn = document.querySelector(".btn")
	const scoreInput = document.querySelector("#input-score")
	const scoreForm = document.querySelector("#submit-score")
	const scoreDisplay = document.getElementById("score")

	let pacmanCurrentIndex = 490;
	let score = 0;
	const width = 28;
=======
	const scoreDisplay = document.getElementById("score");
	const width = 28;
	let score = 0;
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
	const grid = document.querySelector(".grid");
    const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
<<<<<<< HEAD
    1,1,1,1,1,1,0,1,1,4,1,1,2,2,2,2,1,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,1,2,2,2,2,1,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,1,2,2,2,2,1,1,4,1,1,0,1,1,1,1,1,1,
=======
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]
	// 0 - pac-dots
	// 1 - wall
	// 2 - ghost-lair
	// 3 - power-pellet
	// 4 - empty

	const squares = [];

	//create your board
	function createBoard() {
		for (let i = 0; i < layout.length; i++) {
			const square = document.createElement("div");
			grid.appendChild(square);
			squares.push(square);

			//add layout to the board
			if (layout[i] === 0) {
				squares[i].classList.add("pac-dot");
			} else if (layout[i] === 1) {
				squares[i].classList.add("wall");
			} else if (layout[i] === 2) {
				squares[i].classList.add("ghost-lair");
			} else if (layout[i] === 3) {
				squares[i].classList.add("power-pellet");
<<<<<<< HEAD
			} else {
				squares[i].classList.add("empty");
=======
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
			}
		}
	}
	createBoard();

<<<<<<< HEAD
	//create ghosts using Constructors
	class Ghost {
		constructor(className, startIndex, speed) {
			this.className = className;
			this.startIndex = startIndex;
			this.speed = speed;
			this.currentIndex = startIndex;
			this.isScared = false;
			this.timerId = NaN;
		}
	}

	//all my ghosts
	ghosts = [new Ghost("blinky", 348, 250), new Ghost("pinky", 376, 400), new Ghost("inky", 351, 300), new Ghost("clyde", 379, 500)];

	//start and restart
	function startGame() {
		// remove previous characters
		squares[pacmanCurrentIndex].classList.remove("pac-man")

		ghosts.forEach((ghost) => clearInterval(ghost.timerId));
		ghosts.forEach((ghost) => {
			squares[ghost.currentIndex].classList.remove(ghost.className);
			squares[ghost.currentIndex].classList.remove("ghost");
		});

		//create new characters
		//draw pacman onto the board
		pacmanCurrentIndex = 490;
		squares[pacmanCurrentIndex].classList.add("pac-man");

		//draw my ghosts onto the grid
		ghosts.forEach((ghost) => {
			ghost.currentIndex = ghost.startIndex;
		})
		ghosts.forEach((ghost) => {
			squares[ghost.currentIndex].classList.add(ghost.className);
			squares[ghost.currentIndex].classList.add("ghost");
		})

		//move the Ghosts randomly
		ghosts.forEach((ghost) => moveGhost(ghost));
	}
=======
	//create Characters
	//draw pacman onto the board
	let pacmanCurrentIndex = 490;
	squares[pacmanCurrentIndex].classList.add("pac-man");
	//get the coordinates of pacman on the grid with X and Y axis
	// function getCoordinates(index) {
	//   return [index % width, Math.floor(index / width)]
	// }

	// console.log(getCoordinates(pacmanCurrentIndex))
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190

	//move pacman
	function movePacman(e) {
		squares[pacmanCurrentIndex].classList.remove("pac-man");
		switch (e.keyCode) {
<<<<<<< HEAD
			case 37: // left
                if (pacmanCurrentIndex % width !== 0 && // left border
=======
			case 37:
                if (pacmanCurrentIndex % width !== 0 &&
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
                    !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
                )
                    pacmanCurrentIndex -= 1;
				if (squares[pacmanCurrentIndex - 1] === squares[363]) {
					pacmanCurrentIndex = 391;
				}
				break;
<<<<<<< HEAD
			case 38: // up
				if (pacmanCurrentIndex - width >= 0 && // top border
=======
			case 38:
				if (pacmanCurrentIndex - width >= 0 &&
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
					!squares[pacmanCurrentIndex - width].classList.contains("wall") &&
					!squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
				)
					pacmanCurrentIndex -= width;
				break;
<<<<<<< HEAD
			case 39: // right
				if (
					pacmanCurrentIndex % width < width - 1 && // right border
=======
			case 39:
				if (
					pacmanCurrentIndex % width < width - 1 &&
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
					!squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
					!squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
				)
					pacmanCurrentIndex += 1;
				if (squares[pacmanCurrentIndex + 1] === squares[392]) {
					pacmanCurrentIndex = 364;
				}
				break;
<<<<<<< HEAD
			case 40: // down
				if (
					pacmanCurrentIndex + width < width * width && // bottom border
=======
			case 40:
				if (
					pacmanCurrentIndex + width < width * width &&
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
					!squares[pacmanCurrentIndex + width].classList.contains("wall") &&
					!squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
				)
					pacmanCurrentIndex += width;
				break;
		}
		squares[pacmanCurrentIndex].classList.add("pac-man");
		pacDotEaten();
		powerPelletEaten();
		checkForGameOver();
		checkForWin();
	}
<<<<<<< HEAD
	document.addEventListener("keydown", movePacman);
=======
	document.addEventListener("keyup", movePacman);
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190

	// what happens when you eat a pac-dot
	function pacDotEaten() {
		if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
<<<<<<< HEAD
			score += 10;
=======
			score++;
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
			scoreDisplay.innerHTML = score;
			squares[pacmanCurrentIndex].classList.remove("pac-dot");
		}
	}

	//what happens when you eat a power-pellet
	function powerPelletEaten() {
		if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
<<<<<<< HEAD
			score += 50;
=======
			score += 10;
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
			ghosts.forEach((ghost) => (ghost.isScared = true));
			setTimeout(unScareGhosts, 10000);
			squares[pacmanCurrentIndex].classList.remove("power-pellet");
		}
	}

	//make the ghosts stop flashing
	function unScareGhosts() {
		ghosts.forEach((ghost) => (ghost.isScared = false));
	}

<<<<<<< HEAD
=======
	//create ghosts using Constructors
	class Ghost {
		constructor(className, startIndex, speed) {
			this.className = className;
			this.startIndex = startIndex;
			this.speed = speed;
			this.currentIndex = startIndex;
			this.isScared = false;
			this.timerId = NaN;
		}
	}

	//all my ghosts
	ghosts = [new Ghost("blinky", 348, 250), new Ghost("pinky", 376, 400), new Ghost("inky", 351, 300), new Ghost("clyde", 379, 500)];

	//draw my ghosts onto the grid
	ghosts.forEach((ghost) => {
		squares[ghost.currentIndex].classList.add(ghost.className);
		squares[ghost.currentIndex].classList.add("ghost");
	});

	//move the Ghosts randomly
	ghosts.forEach((ghost) => moveGhost(ghost));

>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
	function moveGhost(ghost) {
		const directions = [-1, +1, width, -width];
		let direction = directions[Math.floor(Math.random() * directions.length)];

		ghost.timerId = setInterval(function () {
			//if the next squre your ghost is going to go to does not have a ghost and does not have a wall
			if (
				!squares[ghost.currentIndex + direction].classList.contains("ghost") &&
				!squares[ghost.currentIndex + direction].classList.contains("wall")
			) {
				//remove the ghosts classes
				squares[ghost.currentIndex].classList.remove(ghost.className);
				squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
				//move into that space
				ghost.currentIndex += direction;
				squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
				//else find a new random direction ot go in
			} else direction = directions[Math.floor(Math.random() * directions.length)];

			//if the ghost is currently scared
			if (ghost.isScared) {
				squares[ghost.currentIndex].classList.add("scared-ghost");
			}

			//if the ghost is currently scared and pacman is on it
			if (ghost.isScared && squares[ghost.currentIndex].classList.contains("pac-man")) {
				squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost");
				ghost.currentIndex = ghost.startIndex;
				score += 100;
				squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
			}
			checkForGameOver();
		}, ghost.speed);
	}

	//check for a game over
	function checkForGameOver() {
		if (squares[pacmanCurrentIndex].classList.contains("ghost") && !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));
<<<<<<< HEAD
			document.removeEventListener("keydown", movePacman);
			scoreInput.value = score;
			setTimeout(function () {
				alert("Game Over. \nYou LOST!");
				scoreForm.submit();
=======
			document.removeEventListener("keyup", movePacman);
			setTimeout(function () {
				alert("Game Over");
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
			}, 500);
		}
	}

	//check for a win - more is when this score is reached
	function checkForWin() {
<<<<<<< HEAD
		if (score === 2000) {
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));
			document.removeEventListener("keydown", movePacman);
			scoreInput.value = score;
			setTimeout(function () {
				alert("You WON!");
				scoreForm.submit();
			}, 500);
		}
	}

	startBtn.addEventListener("click", startGame);
=======
		if (score === 274) {
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));
			document.removeEventListener("keyup", movePacman);
			setTimeout(function () {
				alert("You have WON!");
			}, 500);
		}
	}
>>>>>>> 83b09d62497218615cf4a6f1834f51b36723e190
});
