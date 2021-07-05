const getAttributeNamesake = ( url ) => {
	if( url.includes("films"))
		return "title";
	else
		return "name";
}

export {
	getAttributeNamesake
}