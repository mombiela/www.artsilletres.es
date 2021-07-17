// ------------------------------
// Al iniciar realizamos cabecera
// ------------------------------

$().ready(function() {
    makeHeader();
});

// -------------------
// Edicion de cabecera
// -------------------

function makeHeader()
{
	var uri = window.location.href;
	
	var i1 = uri.lastIndexOf(".html");
	var i2 = uri.lastIndexOf("/");
	if (i2 == -1) i2 = 0;
	if (i1 == -1)	uri = "index";
	else			uri = uri.substring(i1,i2);
	
	// Cambiamos estilos
	jQuery("#menu li").removeClass("current_page_item");
	jQuery("#menu li:first").addClass("first");
	
	// Añadimos current
	var list = jQuery("#menu li a");
	for (var i = 0; i<list.length; i++)
	{
		if (list[i].href.indexOf(uri)!=-1)
		{
			jQuery(list[i]).parent().addClass("current_page_item");
		}
	}
}
