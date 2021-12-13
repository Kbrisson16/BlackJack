window.onload = function () {
    const Http = new XMLHttpRequest();
    const url='https://localhost:7042/Leaderboard';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        document.getElementById("Slot1Name").innerHTML = "no data loaded";
        document.getElementById("Slot1LName").innerHTML = Http.responseText;
        var jsonData = Http.responseText;
        var data = Http.responseText;
        var objects = JSON.parse(data)

        document.getElementById("Slot1Name").innerHTML = objects[0].firstName;
        document.getElementById("Slot1LName").innerHTML = objects[0].lastName;
        document.getElementById("Slot1Wins").innerHTML = objects[0].wins;
        document.getElementById("Slot2Name").innerHTML = objects[1].firstName;
        document.getElementById("Slot2LName").innerHTML = objects[1].lastName;
        document.getElementById("Slot2Wins").innerHTML = objects[1].wins;
        document.getElementById("Slot3Name").innerHTML = objects[2].firstName;
        document.getElementById("Slot3LName").innerHTML = objects[2].lastName;
        document.getElementById("Slot3Wins").innerHTML = objects[2].wins;
        document.getElementById("Slot4Name").innerHTML = objects[3].firstName;
        document.getElementById("Slot4LName").innerHTML = objects[3].lastName;
        document.getElementById("Slot4Wins").innerHTML = objects[3].wins;
        document.getElementById("Slot5Name").innerHTML = objects[4].firstName;
        document.getElementById("Slot5LName").innerHTML = objects[4].lastName;
        document.getElementById("Slot5Wins").innerHTML = objects[4].wins;





    }




}
