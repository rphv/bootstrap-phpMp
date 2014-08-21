addToPlaylist = function(song) {
	console.log(song);
	$.get("./index.php", {command: "add", arg: song}, function(data){
		//confirmation
	});
}