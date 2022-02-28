const allPlayers = () => {
    document.getElementById('player-container').innerHTML = "";
    const searchValue = document.getElementById('search-box').value;
    // console.log(searchValue)

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))
};

const showPlayerDetails = (players) => {
    //   console.log(players)
    for (const player of players) {
        const parent = document.getElementById("player-conatainer");
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card border p-5 mb-2">
            <div class="pro-pic">
                <img class="w-75" src="${player.strThumb}" alt="">
            </div>
            <h2>Name: ${player.strPlayer} </h2>
            <h4>Country: ${player.strNationality} </h4>
            <p></p>
            <div class="allbutton">
                <button class="btn btn-danger">Delete</button>
                <button onClick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
            </div>
        </div> `;
        parent.appendChild(div);
        // console.log(player);
    }
};

const details = (id) => {
    // console.log(info);
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]))
};

const setDetails = (info) => {
    // console.log(info)

    if (info.strGender == 'Male') {
        document.getElementById('male').style.display = 'block';
        document.getElementById('female').style.display = 'none';
    }
    else {
        document.getElementById('male').style.display = 'none';
        document.getElementById('female').style.display = 'block';
    }


    document.getElementById("details-container").innerHTML = `
    <div>
    <img sec="${info.strBanner}" alt="">
    <h1> Name: ${info.strPlayer}</h1> 
    </div>
    `
}