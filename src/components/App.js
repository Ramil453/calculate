import './App.css'

function App() {
	let numbers = []
	// let resultRow = document.querySelector('.result-row');

	const eventTarget = e => {
		numbers.push(e.target.value)
		console.log(numbers)
		document.querySelector('.result-row').innerHTML = numbers.join('')
	}

	const clear = () => {
		document.querySelector('.result-row').innerHTML = 0
		numbers = []
	}

	function equally() {
		numbers.find(item => {
			if (item === '+') {
				let plusIndex = numbers.indexOf('+')
				if (plusIndex !== -1) {
					let beforePlus = numbers.slice(0, plusIndex)
					let sumBeforePlus = beforePlus.reduce((acum, num) => acum + num)

					let afterPlus = numbers.slice(plusIndex + 1)
					let sumAfterPlus = afterPlus.reduce((acum, num) => acum + num)

					let plusResult = parseFloat(sumBeforePlus) + parseFloat(sumAfterPlus)
					document.querySelector('.result-row').innerHTML = plusResult
					numbers = [plusResult]
				}
			} else if (item === '-') {
				let minusIndex = numbers.indexOf('-')
				if (minusIndex !== -1) {
					let beforeMinus = numbers.slice(0, minusIndex)
					let sumBeforeMinus = beforeMinus.reduce((acum, num) => acum + num)

					let afterMinus = numbers.slice(minusIndex + 1)
					let sumAfterMinus = afterMinus.reduce((acum, num) => acum + num)

					let minusResult =
						parseFloat(sumBeforeMinus) - parseFloat(sumAfterMinus)
					document.querySelector('.result-row').innerHTML = minusResult
					numbers = [minusResult]
				}
			} else if (item === '&times;') {
				let multiplyIndex = numbers.indexOf('&times;')
				if (multiplyIndex !== -1) {
					let beforeMultiply = numbers.slice(0, multiplyIndex)
					let sumBeforeMultiply = beforeMultiply.reduce(
						(acum, num) => acum + num
					)

					let afterMultiply = numbers.slice(multiplyIndex + 1)
					let sumAfterMultiply = afterMultiply.reduce((acum, num) => acum + num)

					let multiplyResult =
						parseFloat(sumBeforeMultiply) * parseFloat(sumAfterMultiply)
					document.querySelector('.result-row').innerHTML = multiplyResult
					numbers = [multiplyResult]
				}
			} else if (item === '÷') {
				let divisionIndex = numbers.indexOf('÷')
				if (divisionIndex !== -1) {
					let beforeDivision = numbers.slice(0, divisionIndex)
					let sumBeforeDivision = beforeDivision.reduce(
						(acum, num) => acum + num
					)

					let afterDivision = numbers.slice(divisionIndex + 1)
					let sumAfterDivision = afterDivision.reduce((acum, num) => acum + num)

					let divisionResult =
						parseFloat(sumBeforeDivision) / parseFloat(sumAfterDivision)
					document.querySelector('.result-row').innerHTML = divisionResult
					numbers = [divisionResult]
				}
			} 
			// else if (item === '–/+') {
			// 	let divisionIndex = numbers.indexOf('–/+')
			// 	if (divisionIndex !== -1) {
			// 		// if(parseFloat(numbers) > 0)
			// 		let beforeDivision = numbers.slice(0, divisionIndex)
			// 		let sumBeforeDivision = beforeDivision.reduce(
			// 			(acum, num) => acum + num
			// 		)

			// 		let afterDivision = numbers.slice(divisionIndex + 1)
			// 		let sumAfterDivision = afterDivision.reduce((acum, num) => acum + num)

			// 		let divisionResult =
			// 			parseFloat(sumBeforeDivision) / parseFloat(sumAfterDivision)
			// 		document.querySelector('.result-row').innerHTML = divisionResult
			// 		numbers = [divisionResult]
			// 	}

			// }
		})
	}

	return (
		<div className='App'>
			<div className='buttons'>
				<div className='result-row' onClick={eventTarget}>
					0
				</div>
				<div className='first-row'>
					<button className='light-gray btn' value={'AC'} onClick={clear}>
						AC
					</button>
					<button
						className='light-gray btn'
						value={'–/+'}
						onClick={eventTarget}
					>
						–/+
					</button>
					<button className='light-gray btn' value={'%'} onClick={eventTarget}>
						%
					</button>
					<button className='orange btn' value={'÷'} onClick={eventTarget}>
						÷
					</button>
				</div>
				<div className='second-row'>
					<button className='dark-gray btn' value={7} onClick={eventTarget}>
						7
					</button>
					<button className='dark-gray btn' value={8} onClick={eventTarget}>
						8
					</button>
					<button className='dark-gray btn' value={9} onClick={eventTarget}>
						9
					</button>
					<button
						className='orange btn'
						value={'&times;'}
						onClick={eventTarget}
					>
						&times;
					</button>
				</div>
				<div className='third-row'>
					<button className='dark-gray btn' value={4} onClick={eventTarget}>
						4
					</button>
					<button className='dark-gray btn' value={5} onClick={eventTarget}>
						5
					</button>
					<button className='dark-gray btn' value={6} onClick={eventTarget}>
						6
					</button>
					<button
						className='orange btn minus'
						value={'-'}
						onClick={eventTarget}
					>
						–
					</button>
				</div>
				<div className='fourth-row'>
					<button className='dark-gray btn' value={1} onClick={eventTarget}>
						1
					</button>
					<button className='dark-gray btn' value={2} onClick={eventTarget}>
						2
					</button>
					<button className='dark-gray btn' value={3} onClick={eventTarget}>
						3
					</button>
					<button className='orange btn' value={'+'} onClick={eventTarget}>
						+
					</button>
				</div>
				<div className='fifth-row'>
					<button
						className='dark-gray bigger btn'
						value={0}
						onClick={eventTarget}
					>
						0
					</button>
					<button className='dark-gray btn' value={'.'} onClick={eventTarget}>
						.
					</button>
					<button className='orange btn' onClick={equally}>
						=
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
