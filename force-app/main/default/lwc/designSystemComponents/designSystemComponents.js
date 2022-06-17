import { LightningElement, api } from 'lwc';
// import TnfDesignSystem from '@salesforce/resourceUrl/tnfdesignsystem';
// import { loadScript } from 'lightning/platformResourceLoader';
import "./tnf-design-system.js"
export default class DesignSystemComponents extends LightningElement {
   @api 
	 label = "Primary"
	 @api
	 variant = "primary"
	 
	 addElementDynamically = (containerXref, elementType, props, events) => {
		const container = this.template.querySelector(containerXref);
		const element = document.createElement(elementType);
		for(const key in props){
			element[key] = props[key]
		}
		for(const key in events){
			element.addEventListener(key, events[key])
		}
		container.appendChild(element)
	 }
	 btnClicked = () => {
		 alert("hello")
	 }
	 scriptLoaded = false;
	 renderedCallback(){
		 if(this.scriptLoaded){
			 return
		 }

		this.addElementDynamically("div[data-id=tnf-btn]", "tnf-button", {variant: "secondary", label: "Secondary Button"},
		{
			"clicked": this.btnClicked
		})
			
				// = `<tnf-button label={label}/></tnf-button>`
	// 	Promise.all(
	// 		[
	// 			loadScript(this, "./tnf-design-system.js")
	// 		]).then(() => {
	// 	this.scriptLoaded = true;
	// 	const tnfBtn =this.template.querySelector('div[data-id=tnf-btn]');
	// 	tnfBtn.innerHTML = `<tnf-button label={label}/></tnf-button>`
	// }).catch((e) => {
	// 		console.log(e)
	// 	})
	//  }
		}
 }