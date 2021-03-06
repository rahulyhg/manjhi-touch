var adminurl = "http://www.auraart.in/";
// var adminurl = "http://192.168.1.129:83/";
var imgUploadUrl = adminurl + "user/uploadfile";

angular.module('starter.services', [])

.factory('MyServices', function($http) {

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        registeruser: function(register, callback) {
            delete register.confirmpassword
            $http({
                url: adminurl + "user/save",
                method: "POST",
                data: register
            }).success(callback);
        },
        registerArtist: function(register, callback) {
            delete register.confirmpassword
            $http({
                url: adminurl + "user/saveArtist",
                method: "POST",
                data: register
            }).success(callback);
        },
        changePassword: function(register, callback) {
            $http({
                url: adminurl + "user/changepassword",
                method: "POST",
                data: register
            }).success(callback);
        },
        userlogin: function(login, callback) {
            $http({
                url: adminurl + "user/login",
                method: "POST",
                data: login
            }).success(callback);
        },
        forgotpassword: function(forgot, callback) {
            $http({
                url: adminurl + "user/forgotpassword",
                method: "POST",
                data: forgot
            }).success(callback);
        },
        artworktype: function(filterdata, callback) {
            //            delete pagedata.minbreadth;
            //            delete pagedata.maxbreadth;
            $http({
                url: adminurl + "artwork/artworktype",
                method: "POST",
                data: filterdata
            }).success(callback);
        },
        getartworkdetail: function(artid, callback) {
            $http({
                url: adminurl + "artwork/findbyid",
                method: "POST",
                data: {
                    "_id": artid
                }
            }).success(callback);
        },
        getallartist: function(pagedata, callback) {
            $http({
                url: adminurl + "user/findbyletter",
                method: "POST",
                data: pagedata
            }).success(callback);
        },
        getListView: function(callback) {
            $http({
                url: adminurl + "user/findbyletter",
                method: "POST",
                data: {
                    "pagenumber": 1,
                    "pagesize": 10000000000000
                }
            }).success(callback);
        },
        getoneartist: function(artistid, callback) {
            $http({
                url: adminurl + "user/findone",
                method: "POST"
            }).success(callback);
        },
        getLastArtwork: function(callback) {
            $http({
                url: adminurl + "artwork/lastsr",
                method: "POST"
            }).success(callback);
        },
        getArtistDetail: function(artistid, callback) {
            $http({
                url: adminurl + "user/findoneArtist",
                method: "POST",
                data: {
                    "_id": artistid
                }
            }).success(callback);
        },
        reachOutArtist: function(reachout, callback) {
            $http({
                url: adminurl + "reachout/save",
                method: "POST",
                data: reachout
            }).success(callback);
        },
        getpresentevents: function(callback) {
            $http({
                url: adminurl + "event/findevents",
                method: "POST",
                data: {
                    "year": "present"
                }
            }).success(callback);
        },
        getpastevents: function(callback) {
            $http({
                url: adminurl + "event/findevents",
                method: "POST",
                data: {
                    "year": "past"
                }
            }).success(callback);
        },
        addToFav: function(obj, callback) {
            $http({
                url: adminurl + "wishlist/save",
                method: "POST",
                data: obj
            }).success(callback);
        },
        deleteFromFav: function(userid, artid, callback) {
            $http({
                url: adminurl + "wishlist/delete",
                method: "POST",
                data: {
                    "artwork": artid
                }
            }).success(callback);
        },
        getMyFavourites: function(userid, callback) {
            $http({
                url: adminurl + "wishlist/find",
                method: "POST"
            }).success(callback);
        },
        addToCart: function(artid, callback) {
            $http({
                url: adminurl + "cart/save",
                method: "POST",
                data: {
                    "artwork": artid
                }
            }).success(callback);
        },
        removeFromCart: function(artid, callback) {
            $http({
                url: adminurl + "cart/delete",
                method: "POST",
                data: {
                    "artwork": artid
                }
            }).success(callback);
        },
        checkout: function(order, callback) {
            console.log(order);
            $http({
                url: adminurl + "order/save",
                method: "POST",
                data: order
            }).success(callback);
        },
        getCartItems: function(callback) {
            $http({
                url: adminurl + "cart/find",
                method: "POST"
            }).success(callback);
        },
        getuserprofile: function(callback) {
            $http({
                url: adminurl + "user/profile",
                method: "POST",

            }).success(callback);
        },
        logout: function(callback) {
            $http({
                url: adminurl + "user/logout",
                method: "POST",

            }).success(callback);
        },
        getAllEvents: function(callback) {
            $http({
                url: adminurl + "event/find",
                method: "POST",

            }).success(callback);
        },
        getOneEvents: function(id, callback) {
            $http({
                url: adminurl + "event/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        },

        getupcomingevents: function(callback) {
            $http({
                url: adminurl + "event/findevents",
                method: "POST"
            }).success(callback);
        },
        pressFind: function(callback) {
            $http({
                url: adminurl + "press/find",
                method: "POST",
            }).success(callback);
        },
        getAllFavouritesData: function(artarray, callback) {
            $http({
                url: adminurl + "artwork/favoriteartwork",
                method: "POST",
                data: {
                    "artwork": artarray
                }
            }).success(callback);
        },
        getAllArtistDrop: function(searchtext, n, callback) {
            $http({
                url: adminurl + "user/findUser",
                method: "POST",
                data: searchtext
            }).success(function(data, status) {
                callback(data, n);
            });
        },
        getAllArtistDropArtist: function(searchtext, callback) {
            $http({
                url: adminurl + "user/findforart",
                method: "POST",
                data: searchtext
            }).success(callback);
        },
        getallmedium: function(data, n, callback) {
            $http({
                url: adminurl + "artmedium/getmedium",
                method: "POST",
                data: data
            }).success(function(data, status) {
                callback(data, n);
            });
        },
        userbytype: function(searchtext, n, callback) {
            $http({
                url: adminurl + "user/userbytype",
                method: "POST",
                data: {
                    "type": searchtext
                }
            }).success(function(data, status) {
                callback(data, status, n);
            });
        },
        getAllArtistByAccess: function(n, callback) {
            $http({
                url: adminurl + "user/findForList",
                method: "POST",
                data: {
                    "search": "",
                    "searchname": ""
                }
            }).success(function(data, status) {
                callback(data, status, n);
            });
        },
        getArtworkbySearch: function(pagedata, callback) {
            $http({
                url: adminurl + "artwork/searchartwork",
                method: "POST",
                data: {
                    "search": pagedata.search,
                    "type": pagedata.type,
                    "pagenumber": pagedata.pagenumber,
                    "pagesize": pagedata.pagesize
                }
            }).success(callback);
        },
        getSlider: function(callback) {
            $http({
                url: adminurl + "slider/find",
                method: "POST"
            }).success(callback)
        },
        getSearchDrop: function(search, n, callback) {
            $http({
                url: adminurl + "artwork/searchdrop",
                method: "POST",
                data: {
                    "search": search
                }
            }).success(function(data) {
                callback(data, n);
            })
        },
        nextPrev: function(srno, type, callback) {
            $http({
                url: adminurl + "artwork/nextartwork",
                method: "POST",
                data: {
                    "srno": srno,
                    "type": type
                }
            }).success(callback);
        },
        tagSearchType: function(type, search, n, callback) {
            $http({
                url: adminurl + "tag/gettag",
                method: "POST",
                data: {
                    "type": type,
                    "search": search
                }
            }).success(function(data) {
                callback(data, n);
            });
        },
        placeOrder: function(order, callback) {
            $http({
                url: adminurl + "order/save",
                method: "POST",
                data: order
            }).success(callback);
        },
        getMyOrders: function(callback) {
            $http({
                url: adminurl + "order/findOrders",
                method: "POST"
            }).success(callback);
        },
        getCountryJson: function(callback) {
            $http.get('js/countries.json').success(callback);
        },
        getAllThoughts: function(callback) {
            $http({
                url: adminurl + "thought/find",
                method: "POST"
            }).success(callback);
        },
        getOneThought: function(id, callback) {
            $http({
                url: adminurl + 'thought/findone',
                method: 'POST',
                data: {
                    '_id': id
                }
            }).success(callback);
        },
        getDollarPrice: function(callback) {
            $http({
                url: adminurl + 'dollar/find',
                method: 'POST'
            }).success(callback);
        },
        lastSr: function(callback) {
            $http({
                url: adminurl + "artwork/lastsr",
                method: "POST"
            }).success(callback);
        },
        getAllResellerDrop: function(searchtext, callback) {
            $http({
                url: adminurl + "user/findCust",
                method: "POST",
                data: {
                    "search": searchtext
                }
            }).success(callback);
        },
        findArtMedium: function(data, artmedium, category, callback) {
            $http({
                url: adminurl + "artmedium/find",
                method: "POST",
                data: {
                    search: data,
                    category: category,
                    artmedium: artmedium
                }
            }).success(callback);
        },
        findTag: function(data, tag, category, callback) {
            $http({
                url: adminurl + "tag/find",
                method: "POST",
                data: {
                    search: data,
                    category: category,
                    tag: tag
                }
            }).success(callback);
        },
        saveArtwork: function(data, callback) {
            $http({
                url: adminurl + "artwork/saveFront",
                method: "POST",
                data: data
            }).success(callback);
        },
        getOneemail: function(myemail, callback) {
            $http({
                url: adminurl + "user/searchmail",
                method: "POST",
                data: {
                    "email": myemail
                }
            }).success(callback);
        },
        findTheme: function(data, theme, callback) {
            $http({
                url: adminurl + "theme/find",
                method: "POST",
                data: {
                    search: data,
                    theme: theme
                }
            }).success(callback);
        },
        findMedium: function(data, medium, callback) {
            $http({
                url: adminurl + "medium/find",
                method: "POST",
                data: {
                    search: data,
                    medium: medium
                }
            }).success(callback);
        },
        findMyArtwork: function(callback) {
            $http({
                url: adminurl + "artwork/findMyArtwork",
                method: "POST"
            }).success(callback);
        },
        saveartMedium: function(data, callback) {
            $http({
                url: adminurl + "artmedium/save",
                method: "POST",
                data: {
                    "name": data.name,
                    "category": data.category,
                }
            }).success(callback);
        },
        saveTag: function(data, callback) {
            $http({
                url: adminurl + "tag/save",
                method: "POST",
                data: {
                    "name": data.name,
                    "category": data.category,
                }
            }).success(callback);
        },
        saveMedium: function(data, callback) {
            $http({
                url: adminurl + "medium/save",
                method: "POST",
                data: {
                    "name": data.name
                }
            }).success(callback);
        },
        saveTheme: function(data, callback) {
            $http({
                url: adminurl + "theme/save",
                method: "POST",
                data: {
                    "name": data.name
                }
            }).success(callback);
        },
        createwishlistfolder: function(name, callback) {
            $http({
                url: adminurl + "wishlistfolder/save",
                method: "POST",
                data: {
                    "name": name
                }
            }).success(callback);
        },
        getMyFolders: function(callback) {
            $http({
                url: adminurl + "wishlistfolder/find",
                method: "POST",
            }).success(callback);
        },
        shareFolder: function(shareobj, callback) {
            $http({
                url: adminurl + "wishlistfolder/shareFolder",
                method: "POST",
                data: {
                    "name": shareobj.name,
                    "wishlistfolder": shareobj._id,
                    "email": shareobj.emailid
                }
            }).success(callback);
        },
        createImage: function(obj, callback) {
            $http({
                url: adminurl + "slider/createImage",
                method: "POST",
                data: {
                    "image": obj.html,
                    "rotate": obj.rotate
                }
            }).success(callback);
        },
        saveToProfile: function(obj, callback) {
            $http({
                url: adminurl + "slider/saveToProfile",
                method: "POST",
                data: {
                    "image": obj.html,
                    "rotate": obj.rotate
                }
            }).success(callback);
        },
        newcreateImage: function(id, callback) {
            $http({
                url: adminurl + "shot/createImage",
                method: "POST",
                data: {
                    "url": id
                }
            }).success(callback);
        },
        newsaveToProfile: function(id, callback) {
            $http({
                url: adminurl + "shot/saveToProfile",
                method: "POST",
                data: {
                    "url": id
                }
            }).success(callback);
        },
        saveShot: function(obj, callback) {
            $http({
                url: adminurl + "shot/save",
                method: "POST",
                data: obj
            }).success(callback);
        },
        getOneShot: function(id, callback) {
            $http({
                url: adminurl + "shot/findone",
                method: "POST",
                data: {
                    _id: id
                }
            }).success(callback);
        },
        getAllActivities: function(callback) {
            $http({
                url: adminurl + "activities/find",
                method: "POST",
            }).success(callback);
        },
        getAllPartners: function(callback) {
            $http({
                url: adminurl + "partners/find",
                method: "POST",
            }).success(callback);
        },
        getAllProjects: function(callback) {
            $http({
                url: adminurl + "projects/find",
                method: "POST",
            }).success(callback);
        },
        getAllTestimonials: function(callback) {
            $http({
                url: adminurl + "testimonials/find",
                method: "POST",
            }).success(callback);
        },
        getTeam: function(callback) {
            $http({
                url: adminurl + "team/find",
                method: "POST",
            }).success(callback);
        },
    };
});
