import { LightningElement, api } from 'lwc';
import TnfDesignSystem from '@salesforce/resourceUrl/tnfdesignsystem';
import { loadScript } from 'lightning/platformResourceLoader';
import { addElementDynamically } from "c/utils"
export default class DesignSystemComponents extends LightningElement {
   @api 
	 label = "Primary"
	 @api
	 variant = "primary"
	 
	 btnClicked = () => {
		 alert("hello")
	 }
	 scriptLoaded = false;
	 renderedCallback(){
		 if(this.scriptLoaded){
			 return
		 }
			
		Promise.all(
			[
				loadScript(this, TnfDesignSystem)
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
