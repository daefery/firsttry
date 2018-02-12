export class Navigation {
	menu_id:string;
    text_menu: string;
    url: string;
    child: Navigation[];

    constructor(menu_id:string, text_menu: string, url: string, child:Navigation[]) {
    this.menu_id = menu_id;
    this.text_menu = text_menu;
    this.url = url;
    this.child = child;
  }
}
