$().ready(function() {
    makeHeader();
});

// -------------------
// Edicion de cabecera
// -------------------

function makeHeader()
{
	var uri = "$!doc_name";
	jQuery("#menu li").removeClass("current_page_item");
	jQuery("#menu li:first").addClass("first");
	
	var list = jQuery("#menu li a");
	for (var i = 0; i<list.length; i++)
	{
		if (list[i].href.indexOf("$doc_name")!=-1)
		{
			console.log("Encontrado: " + list[i].href);
			jQuery(list[i]).parent().addClass("current_page_item");
		}
	}
}
