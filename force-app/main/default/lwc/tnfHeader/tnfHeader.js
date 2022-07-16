import { LightningElement, api} from 'lwc';
import TnfDesignSystem from '@salesforce/resourceUrl/tnfdesignsystem';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import { addElementDynamically } from "c/utils"
export default class TnfHeader extends LightningElement {
	@api avatar_actions = [];
	@api actions = [];
	@api user = {};
	@api account_url = "";
	@api login_url = "";
	@api logout_url = "";
	@api logo_url = "";
	@api search = false;

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
				addElementDynamically(this.template, "div[data-id=tnf-header]", "tnf-header", 
				{
					logo_url:this.logo_url,
					search:this.search,
					actions:this.actions,
					user: this.user,
					account_url:this.account_url,
					logout_url:this.logout_url,
					login_url:this.login_url,
					avatar_actions:this.avatarActions,
				})

			}).catch((e) => {
					console.log(e)
				})
		}
 }
