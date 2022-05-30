const res = require("express/lib/response");

const myGoals = [];
let id = 1;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Take the high road.", "Success is a journey, not destination.", "You can't steal second base and keep your foot on first.", "To the world you may be one person, but to one person you may be the world.", "Long life is in store for you."]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getMotivation: (req, res) => {
        const catPics = [];
        catPics.push('https://m.media-amazon.com/images/I/61irQrNjgnL._AC_SY741_.jpg');
        catPics.push('https://i5.walmartimages.com/asr/49e68d73-3b6c-41ba-aed0-d8895c02f0d2.ed9128fa868f3ccc1aeb92ec389601b7.jpeg');
        catPics.push('https://ih1.redbubble.net/image.609623624.7729/fposter,small,wall_texture,product,750x1000.jpg');

        let randomIndex = Math.floor(Math.random() * catPics.length);
        let randomCatPic = catPics[randomIndex];

        // console.log(catPics);

        res.status(200).send(randomCatPic);
    },

    postGoals: (req, res) => {
        const { goal } = req.body;
        myGoals.push({ id, text: goal });
        res.status(200).send(myGoals);
    },

    deleteGoal: (req, res) => {
        const { id } = req.params;
        const deleteIndex = myGoals.findIndex((goal) => +goal.id === +id);
        myGoals.splice(deleteIndex, 1);
        res.status(200).send(myGoals);
    }

}