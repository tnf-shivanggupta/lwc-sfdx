import { LightningElement, api } from 'lwc';
import TnfDesignSystem from '@salesforce/resourceUrl/tnfdesignsystem';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import { addElementDynamically } from "c/utils"
export default class TnfBtn extends LightningElement {
	 @api 
	 label = "Primary"
	 @api
	 variant = "primary"

	 btnClicked = (e) => {
		 console.log("Button Clicked", e)
	 }
	 scriptLoaded = false;
	 renderedCallback(){
		 if(this.scriptLoaded){
			 return
		 }
			
		Promise.all(
			[
				loadScript(this, TnfDesignSystem),
				loadStyle(this, "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0")
			]).then(() => {
				
				this.scriptLoaded = true;
				addElementDynamically(this.template, "div[data-id=tnf-btn]", "tnf-button", {variant: this.variant, label: this.label},
				{
					"clicked": this.btnClicked
				})
			}).catch((e) => {
					console.log(e)
				})
		}
 }
