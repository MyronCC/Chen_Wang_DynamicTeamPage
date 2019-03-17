(() => {
 	console.log('fire');

	let name = ["Chen Boling", "Wang Jianghaonan"];
		job = ["Web Developer", "Web Designer"];

		chen = document.getElementsByClassName('developer');
		wang = document.getElementsByClassName('designer');

		overlay = document.getElementById('overlay');

		overlayName = document.getElementById('name');
		overlayJob = document.getElementById('job');

		for (let i = 0; i < chen.length; i++) {
			chen[i].addEventListener('click', function () {

			overlay.classList.remove('hide'); 

			overlayName.textContent = name[0];
			overlayJob.textContent = job[0];
			}, false)
		}

		for (let i = 0; i < wang.length; i++) {
			wang[i].addEventListener('click', function () {

			overlay.classList.remove('hide'); 

			overlayName.textContent = name[1];
			overlayJob.textContent = job[1];
			}, false)
		}

		let overlayClose = document.getElementById('overlayClose');
	
			overlayClose.addEventListener('click', function() {

			overlay.classList.add('hide');
		}, false);
	
})();