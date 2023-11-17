"use client"
import dashboard from "./dashboard";
import utilities from "./utilities";
import other from "./other";
import foodmenu from "./foodMenu";

const user = JSON.parse(localStorage && localStorage?.getItem('user'));
let menuItems = ''
if(user?.role === 'restaurant') {
  menuItems = {
    items: [dashboard, foodmenu]
  }
} else {
 menuItems = {
  items: [dashboard, utilities, other],
};
}

export default menuItems;
