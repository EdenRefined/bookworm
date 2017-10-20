var bookwormApp = {
    nextId: 0,
    bookwormObject: {
        0 : {
            name: "Hannah",
            age: 25,
            sex: "female",
            location: ["Maryland"],
            favAuthor: "Dr. Seuss",
            favBook: "The Cat in the Hat",
            track: true
        }
    },
    incrementId: function(){
        this.nextId++;
    },
    getProfileById: function(id){
        return this.bookwormObject[id];
    },
    getAll: function(){
        var bookworms =[];
        for (key in this.bookwormObject){
            bookworms.push(this.bookwormObject[key]);
        }
        return bookworms;
    },
    addNew: function(bookworms){
        var message = "Success";
        var keys = Object.keys(this.bookwormObject);
        this.bookwormObject[keys.length] = bookworm;
        console.log(this.bookwormObject);
        return message;
    },
    addLocation: function(bookwormObj, location){
        var message = "Success";
        this.bookwormObject["1"].location.push("place");

        return message;
    },
    tracking: function(bookwormObj){
        var message = "Toggled tracking";
        this.bookwormObject["1"].track = !this.bookwormObject["1"].track;
        return message;
    }
}