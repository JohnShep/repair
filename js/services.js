var tabLinks = new Array();
var contentDivs = new Array();
$(initTabs);

function initTabs(){
	var tabLinksList = document.getElementById('tabs').childNodes;
	for(var i = 0; i < tabLinksList.length; i++){
		if(tabLinksList[i].nodeName == "LI"){
			var tabLink = getFirstChildAndTag(tabLinksList[i], 'A');
			var id = getHash(tabLink.getAttribute('href'));
			tabLinks[id] = tabLink;
			contentDivs[id] = document.getElementById(id);
		}
	}

	var i = 0;
	for(var id in tabLinks){
		tabLinks[id].onclick = showTabContent;
		tabLinks[id].onfocus = function(){ this.blur() };
		if(i == 0){
			tabLinks[id].className = 'selected';
		}
	} i++; 

	var i = 0;
	for(var id in contentDivs){
		if(i != 0){ contentDivs[id].className = 'tabContent hide'; } 
		i++;
	}
}

function showTabContent(){
	var selectedId = getHash(this.getAttribute('href'));
	for(var id in contentDivs){
		if(id == selectedId){
			tabLinks[id].className = 'selected';
			contentDivs[id].className = 'tabContent';
		} else {
			tabLinks[id].className = '';
			contentDivs[id].className = 'tabContent hide';
		}
	} 

	return false;
}

function getFirstChildAndTag(element, tagName){
	for(var i = 0; i < element.childNodes.length; i++){
		if(element.childNodes[i].nodeName = tagName)
			return element.childNodes[i];
	}
}

function getHash(url){
	var hashPosition = url.lastIndexOf('#');
	return url.substring(hashPosition + 1);
}