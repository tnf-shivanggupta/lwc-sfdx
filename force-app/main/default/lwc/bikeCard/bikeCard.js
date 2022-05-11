import { LightningElement, api } from 'lwc';
import Crud from '@salesforce/resourceUrl/crudapp';
import { loadScript } from 'lightning/platformResourceLoader';
export default class BikeCard extends LightningElement {
   @api 
	 name;
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steels';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
	 attachmentPoint = null
	 scriptLoaded = false;
	 renderedCallback(){
		 if(this.scriptLoaded){
			 return
		 }
		loadScript(this, Crud).then(() => {
			this.scriptLoaded = true;
			const testDiv =this.template.querySelector('div[data-id=crudElement]');
			testDiv.innerHTML = "<crud-element></crud-element>"
		}).catch((e) => {
			console.log(e)
		})
	 }
 }