const addElementDynamically = (template, containerXref, elementType, props, events) => {
	const container = template.querySelector(containerXref);
	const element = document.createElement(elementType);
	for(const key in props){
		element[key] = props[key]
	}
	for(const key in events){
		element.addEventListener(key, events[key])
	}
	container.appendChild(element)
 }

 export { addElementDynamically }