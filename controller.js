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
    addProfile: function(name, age, sex, location) { 
        var profile = {
            name: name,
            age: age,
            sex: sex,
            location: [],
            track: true
        }
        if (location !== undefined){
            profile.location.push(location);
        }
        console.log(profile);
        bookwormApp.addNew(profile);
        this.displayProfile();
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