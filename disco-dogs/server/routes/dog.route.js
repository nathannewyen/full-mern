const DogController = require('../controllers/dog.controller')

module.exports = (app) => {
    // Get all dogs
    app.get("/api/dogs", DogController.index)

    // Create a dog
    app.post("/api/dogs", DogController.create)

    // Get Random Dog (Have to be above get a specific dog)
    app.get("/api/dogs/random", DogController.random)

    // Get one dog
    app.get("/api/dogs/:id", DogController.show)

    // Delete a dog
    app.delete("/api/dogs/:id", DogController.adopt)

    // Edit a dog
    app.put("/api/dogs/:id", DogController.update)

    // Add Move to a dog
    app.post("/api/dance/:id", DogController.boogie)
}