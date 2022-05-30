const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const catMotivationBtn = document.getElementById("cat-motivationButton");
const catPicSection = document.querySelector('.cat-pic-section');
const addGoalBtn = document.getElementById('goal-btn');



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(err => console.log(err))
};

const createCatCard = (cat) => {
    let catCard = document.createElement('div')
    catCard.innerHTML = `
    <h3>Cat Motivation</h3>
    <img src='${data}' height=500>
    `

    catPicSection.appendChild(catCard)
}

const clearCats = () => {
    catPicSection.innerHTML = ``
}

const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
        .then(res => {
            data = res.data
            console.log(data);
            clearCats();
            createCatCard();
        })
        .catch(err => console.log(err))
}

const deleteBtnFunc = (id) => {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', () => {
        axios.delete(`http://localhost:4000/api/goals/${id}`)
            .then(appendGoals)
            .catch(err => console.log(err))
    })
    return deleteButton
}

const appendGoals = ({ data }) => {
    const goalContainer = document.querySelector('.goals-list');
    goalContainer.innerHTML = '';
    data.forEach(({ text, id }) => {
        const goal = document.createElement('li');
        const goalText = document.createElement('span');
        const deleteButton = deleteBtnFunc(id);
        goalText.innerText = text;
        goal.append(goalText, deleteButton);
        goalContainer.appendChild(goal);
    })
}

const addGoalFunc = () => {
    const goal = document.getElementById('goals-input');
    axios.post("http://localhost:4000/api/goals/", { goal: goal.value })
        .then((res) => {
            appendGoals(res)
            goal.value = ''
        })
        .catch(err => console.log(err))
}



complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
catMotivationBtn.addEventListener('click', getMotivation);
addGoalBtn.addEventListener('click', addGoalFunc)
