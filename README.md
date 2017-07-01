## SPA-modular
*a simple javascript rooter for SPA*

How to use ?
============

First, you have to put on your server the `spaRooter.js` file. Now you can use the SPA-modular html class.
create view :

    <seciton class="spaRooter-view view-name-index">
	    //YOUR HTML HERE ..
    </section>
use the `spaRooter-view` className to signify to the API there is an view of the SPA.

use the `view-name-XXXXXXX` className to signify to the API there is a name of this view. Yu can replace the XXXXXX for youre view name. WARNING ! Your application can content view-name-index view to use because if you don't have this view the system can't working. The view-name-index class il the main view of youre Single Page application.

to make a link : 

    <a href="page1" class="spaRooter-link">LABEL</a>

all `<a>` there have the spaRooter-link class are used by the API to change view curent. the href attribute if the name of the linked view. 
for an exemple :

    <a href="myFuturView" class="spaRooter-link">MYFURUTVIEW</a>

This code load the view : view-name-myFuturView