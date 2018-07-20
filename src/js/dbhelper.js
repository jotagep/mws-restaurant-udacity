/**
 * Common database helper functions.
 */
var dbPromise;

class DBHelper {

    /**
     * Database URL.
     * Change this to restaurants.json file location on your server.
     */
    static get DATABASE_URL() {
        const port = '1337';
        return `http://localhost:${port}/restaurants`;
    }

    static get DATABASE_REVIEWS() {
        const port = '1337';
        return `http://localhost:${port}/reviews`;
    }

    static fetchRestaurants(callback) {
        fetch(DBHelper.DATABASE_URL)
            .then(response => {
                response.json()
                    .then(resp => {
                        dbPromise.then((db) => {
                            if (!db) return;

                            const tx = db.transaction('restaurants', 'readwrite');
                            const store = tx.objectStore('restaurants');

                            resp.forEach(restaurant => {
                                store.put(restaurant);
                            });
                            console.log('Added to IDB');
                        })
                        return callback(null, resp)
                    })
                    .catch(e => callback(e, null))
            })
            .catch(error => {
                dbPromise.then(db => {
                    if (!db) return;
                    const store = db.transaction('restaurants')
                        .objectStore('restaurants');

                    store.getAll().then(function (restaurants) {
                        console.log('** From IDB **');
                        return callback(null, restaurants);
                    });
                });
                console.error(error);
            });
    }


    static fetchRestaurantById(id, callback) {
        // fetch all restaurants with proper error handling.
        fetch(`${DBHelper.DATABASE_URL}/${id}`)
            .then(response => {
                response.json()
                    .then(resp => callback(null, resp))
                    .catch(e => callback('Restaurant does not exist', null));
            })
            .catch(error => {
                dbPromise.then(db => {
                    if (!db) return;
                    const store = db.transaction('restaurants')
                        .objectStore('restaurants');

                    store.get(parseInt(id)).then(function (restaurant) {
                        console.log('** From IDB - ID **');
                        return callback(null, restaurant);
                    });
                });
                console.error(error);
            })

    }

    /**
     * Fetch restaurants by a cuisine type with proper error handling.
     */
    static fetchRestaurantByCuisine(cuisine, callback) {
        // Fetch all restaurants  with proper error handling
        DBHelper.fetchRestaurants((error, restaurants) => {
            if (error) {
                callback(error, null);
            } else {
                // Filter restaurants to have only given cuisine type
                const results = restaurants.filter(r => r.cuisine_type == cuisine);
                callback(null, results);
            }
        });
    }

    /**
     * Fetch restaurants by a neighborhood with proper error handling.
     */
    static fetchRestaurantByNeighborhood(neighborhood, callback) {
        // Fetch all restaurants
        DBHelper.fetchRestaurants((error, restaurants) => {
            if (error) {
                callback(error, null);
            } else {
                // Filter restaurants to have only given neighborhood
                const results = restaurants.filter(r => r.neighborhood == neighborhood);
                callback(null, results);
            }
        });
    }

    /**
     * Fetch restaurants by a cuisine and a neighborhood with proper error handling.
     */
    static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, favorite, callback) {
        // Fetch all restaurants
        DBHelper.fetchRestaurants((error, restaurants) => {
            if (error) {
                callback(error, null);
            } else {
                let results = restaurants
                if (cuisine != 'all') { // filter by cuisine
                    results = results.filter(r => r.cuisine_type == cuisine);
                }
                if (neighborhood != 'all') { // filter by neighborhood
                    results = results.filter(r => r.neighborhood == neighborhood);
                }
                if (favorite) {
                    results = results.filter(r => r.is_favorite === 'true');
                }
                callback(null, results);
            }
        });
    }

    /**
     * Fetch all neighborhoods with proper error handling.
     */
    static fetchNeighborhoods(callback) {
        // Fetch all restaurants
        DBHelper.fetchRestaurants((error, restaurants) => {
            if (error) {
                callback(error, null);
            } else {
                // Get all neighborhoods from all restaurants
                const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)
                // Remove duplicates from neighborhoods
                const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
                callback(null, uniqueNeighborhoods);
            }
        });
    }

    /**
     * Fetch all cuisines with proper error handling.
     */
    static fetchCuisines(callback) {
        // Fetch all restaurants
        DBHelper.fetchRestaurants((error, restaurants) => {
            if (error) {
                callback(error, null);
            } else {
                // Get all cuisines from all restaurants
                const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
                // Remove duplicates from cuisines
                const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
                callback(null, uniqueCuisines);
            }
        });
    }


    /**
     * Fetch reviews for a restaurant.
     */

    static fetchReviewsById (id) {
        return fetch(`${this.DATABASE_REVIEWS}/?restaurant_id=${id}`)
            .then(res => res.json());
    }
    
    /**
     * Restaurant page URL.
     */
    static urlForRestaurant(restaurant) {
        return (`./restaurant.html?id=${restaurant.id}`);
    }

    /**
     * Restaurant image URL.
     */
    static imageUrlForRestaurant(restaurant) {
        return (`./assets/img/${restaurant.photograph}`);
    }

    /**
     * Restaurant Favorite Handler.
     */
    static favoriteHandler(restaurant) {
        const toggleFavorite = restaurant.is_favorite === "true" ? false : true;
        return fetch(`${DBHelper.DATABASE_URL}/${restaurant.id}/?is_favorite=${toggleFavorite}`, {
                method: 'PUT'
            })
            .then(res => res.json());
    }

    /**
     * Restaurant responsive image URL.
     */
    static imageRespForRestaurant(restaurant, size = 'original', ext = 'jpg') {
        if (size == 'small' || size == 'medium') {
            return (`./assets/img/${restaurant.id}-${size}.${ext} 1x,
        ./assets/img/${restaurant.id}-${size}@2x.${ext} 2x`);
        } else {
            return (`./assets/img/${restaurant.id}-${size}.${ext} 1x`);
        }
    }

    /**
     * Map marker for a restaurant.
     */
    static mapMarkerForRestaurant(restaurant, map) {
        const marker = new google.maps.Marker({
            position: restaurant.latlng,
            title: restaurant.name,
            url: DBHelper.urlForRestaurant(restaurant),
            map: map,
            animation: google.maps.Animation.DROP
        });
        return marker;
    }

    static openDB() {
        if (!navigator.serviceWorker) {
            return;
        }
        console.log(' == IDB Created ==');
        dbPromise = idb.open('mws', 1, function (upgradeDB) {
            const store = upgradeDB.createObjectStore('restaurants', {
                keyPath: 'id'
            });
        });
    }

}