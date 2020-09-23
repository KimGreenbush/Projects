document.addEventListener("DOMContentLoaded", () => {
	const squares = document.querySelectorAll(".grid div");
	const scoreDisplay = document.querySelector("span");
	const startBtn = document.querySelector(".start");

	const width = 10;
	let currentIndex = 0; //first div in grid
	let appleIndex = 0;
	let currentSnake = [2, 1, 0]; //2 is the head, 1 is body, 0 is tail
	let direction = 1;
	let score = 0;
	let speed = 0.9;
	let intervalTime = 0;
	let interval = 0;

	//start and restart
	function startGame() {
		currentSnake.forEach((index) => squares[index].classList.remove("snake"));
		squares[appleIndex].classList.remove("apple");
		clearInterval(interval);
		score = 0;
		direction = 1;
		scoreDisplay.innerText = score;
		intervalTime = 1000;
		currentSnake = [2, 1, 0];
		currentIndex = 0;
		currentSnake.forEach((index) => squares[index].classList.add("snake"));
		randomApple()
		interval = setInterval(moveOutcomes, intervalTime);
	}

	//function for all move outcomes
	function moveOutcomes() {
		//hitting border or itself
		if (
			(currentSnake[0] + width >= width * width && direction === width) || // bottom
			(currentSnake[0] % width === width - 1 && direction === 1) || // right
			(currentSnake[0] % width === 0 && direction === -1) || // left
			(currentSnake[0] - width < 0 && direction === -width) || // top
			squares[currentSnake[0] + direction].classList.contains("snake")
		) {
			return clearInterval(interval); //clear interval
		}

		const tail = currentSnake.pop();
		squares[tail].classList.remove("snake"); // remove tail from end
		currentSnake.unshift(currentSnake[0] + direction); //gives direction to head of snake/array

		//snake eating apple
		if (squares[currentSnake[0]].classList.contains("apple")) {
			squares[currentSnake[0]].classList.remove("apple");
			squares[tail].classList.add("snake");
			currentSnake.push(tail);
			randomApple();
			score++;
			scoreDisplay.textContent = score;
			clearInterval(interval);
			intervalTime = intervalTime * speed;
			interval = setInterval(moveOutcomes, intervalTime);
		}
		squares[currentSnake[0]].classList.add("snake");
	}

	function randomApple() {
		appleIndex = Math.floor(Math.random() * squares.length)
		if (squares[appleIndex].classList.contains("snake") !== true) {
			squares[appleIndex].classList.add("apple");
		} else {
			randomApple();
		}
	}

	//controls
	function control(e) {
		squares[currentIndex].classList.remove("snake");

		if (e.keyCode === 39) { //right
			direction = 1;
		} else if (e.keyCode === 38) { //up
			direction = -width;
		} else if (e.keyCode === 40) { //down
			direction = +width;
		} else if (e.keyCode === 37) { //left
			direction = -1;
		}
	}

	document.addEventListener("keydown", control);
	startBtn.addEventListener("click", startGame);
});
