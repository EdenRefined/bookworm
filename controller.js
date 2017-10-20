var controller = {
    viewState:{},
    modelState: {},
    getViewState: function(view){
        this.viewState[view.name] = view;
    },
    addModel: function(model){
        this.modelState = model;
    },
    displayProfile: function() {
        //retrieve right entry from model and calls view
        var arr = bookwormApp.getAll();
        appView.displayProfile(arr);
    },
    addProfile: function(name, age, sex, location, favAuthor, favBook) { 
        var profile = {
            name: name,
            age: age,
            sex: sex,
            location: [],
            favAuthor: favAuthor,
            favBook: favBook,
            track: true
        }
        if (location !== undefined){
            profile.location.push(location);
        }
        console.log(profile);
        bookwormApp.addNew(profile);
        this.displayProfile();
    },
    updateProfile: function(id, [key]){
        get.bookwormObj[id].push([key]);
        appView.displayProfile();
    },
    deleteProfile: function(id){
        get.bookwormObj[id].delete[id];
        appView.displayProfile();
    },
    addLocation: function(bookwormObj, location){

        console.log(bookwormApp.tracking(bookwormObj));
    },
    toggleTracking: function(bookwormObj){

        console.log(bookwormApp.tracking(bookwormObj));
    },
    untrackAll: function() {
        
        console.log("All untracked");
    },
    trackAll: function() {
        
        console.log("Tracking");
    }
}

module.exports = controller;