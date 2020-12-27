
var new_element_body = document.getElementById('newElement');

const elements = [];

function handler(element) {

	

	if (elements[elements.length - 1] === undefined) {
		elements.push(element);
	}
	else if (elements[elements.length - 1] === 'AIR' & element === 'WATER') {
		elements.push('RAIN');
	}
	else if (elements[elements.length - 1] === 'WATER'& element === 'AIR') {
		elements.push('RAIN');
	}
	else if (elements[elements.length - 1] === 'WATER' & elements[elements.length - 1] === 'AIR', element === 'FIRE') {
		elements.push('FIRE');
	}
	else if (elements[elements.length - 1] === 'FIRE' & element === 'EARTH') {
		elements.push('LAVA');
	}
	else if (elements[elements.length - 1] === 'EARTH' & element === 'FIRE') {
		elements.push('LAVA');
	}
	else if (elements[elements.length - 1] === 'EARTH' & elements[elements.length - 1] === 'FIRE' & element === 'AIR' & element === 'WATER') {
		elements.push('LAVA');
	}
	new_element_body.innerHTML = elements[elements.length - 1];
}

window.elements=elements;