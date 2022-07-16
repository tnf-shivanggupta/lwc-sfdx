import { LightningElement, api } from 'lwc';

export default class DesignSystem extends LightningElement {
	@api avatarActions = [
		{
			text: "View Profile",
			event: "view_profile"
		},
		{
			text: "Pending Actions",
			event: "pending_notifications"
		},
	];
	@api actions = [
		{
			icon: "notifications",
			alt: "View Notifications",
			event: "view_notifications",
		},
		{
			icon: "shopping_cart_checkout",
			alt: "View Basket",
			event: "view_basket",
		}
	];
	@api user = {
		name: "Shivang Sanghi",
		avatar: "/images/photo.jpeg"
	};
	@api account_url = "/account";
	@api login_url = "/login";
	@api logout_url = "/logout";
	@api logo_url = "https://accounts-uat.taylorfrancis.com/identityv1/assets/img/tfgroup-logo.svg";
	@api search = false;
}