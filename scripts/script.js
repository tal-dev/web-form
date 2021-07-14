var data

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

loadJSON(function (json) {
    data = json
});

$("#inputState").change(function () {
    var StateSelected = $(this).val();
    var optionsList;
    var htmlString = "";

    switch (StateSelected) {
        case "AL":
            optionsList = data["Alabama"]
            break;
        case "AK":
            optionsList = data["Alaska"]
            break;
        case "AZ":
            optionsList = data["Arizona"];
            break;
        case "AR":
            optionsList = data["Arkansas"];
            break;
        case "CA":
            optionsList = data["California"];
            break;
        case "CO":
            optionsList = data["Colorado"];
            break;
        case "CT":
            optionsList = data["Connecticut"];
            break;
        case "DE":
            optionsList = data["Delaware"];
            break;
        case "DC":
            optionsList = data["District of Columbia"];
            break;
        case "FL":
            optionsList = data["Florida"];
            break;
        case "GA":
            optionsList = data["Georgia"];
            break;
        case "ID":
            optionsList = data["Idaho"];
            break;
        case "IL":
            optionsList = data["Illinois"];
            break;
        case "IN":
            optionsList = data["Indiana"];
            break;
        case "IA":
            optionsList = data["Iowa"];
            break;
        case "KS":
            optionsList = data["Kansas"];
            break;
        case "KY":
            optionsList = data["Kentucky"];
            break;
        case "LA":
            optionsList = data["Louisiana"];
            break;
        case "ME":
            optionsList = data["Maine"];
            break;
        case "MD":
            optionsList = data["Maryland"];
            break;
        case "MA":
            optionsList = data["Massachusets"];
            break;
        case "MI":
            optionsList = data["Michigan"];
            break;
        case "MN":
            optionsList = data["Minnesota"];
            break;
        case "MS":
            optionsList = data["Missisipi"];
            break;
        case "MO":
            optionsList = data["Missoury"];
            break;
        case "MT":
            optionsList = data["Montana"];
            break;
        case "NE":
            optionsList = data["Nebraska"];
            break;
        case "NV":
            optionsList = data["Nevada"];
            break;
        case "NH":
            optionsList = data["New Hampshire"];
            break;
        case "NJ":
            optionsList = data["New Jersey"];
            break;
        case "NM":
            optionsList = data["New Mexico"];
            break;
        case "NY":
            optionsList = data["New York"];
            break;
        case "NC":
            optionsList = data["North Carolina"];
            break;
        case "ND":
            optionsList = data["North Dakota"];
            break;
        case "OH":
            optionsList = data["Ohio"];
            break;
        case "OK":
            optionsList = data["Oklahoma"];
            break;
        case "OR":
            optionsList = data["Oregon"];
            break;
        case "PA":
            optionsList = data["Pennsylvania"];
            break;
        case "RI":
            optionsList = data["Rhode Island"];
            break;
        case "SC":
            optionsList = data["South Carolina"];
            break;
        case "SD":
            optionsList = data["South Dakota"];
            break;
        case "TN":
            optionsList = data["Tennessee"];
            break;
        case "TX":
            optionsList = data["Texas"];
            break;
        case "UT":
            optionsList = data["Utah"];
            break;
        case "VT":
            optionsList = data["Vermont"];
            break;
        case "VA":
            optionsList = data["Virginia"];
            break;
        case "WA":
            optionsList = data["Washington"];
            break;
        case "WV":
            optionsList = data["West Virginia"];
            break;
        case "WI":
            optionsList = data["Wisconsin"];
            break;
        case "WY":
            optionsList = data["Wyoming"];
            break;
        default:
            optionsList = ["Select City"]
    }


    for (var i = 0; i < optionsList.length; i++) {
        htmlString = htmlString + "<option value='" + optionsList[i] + "'>" + optionsList[i] + "</option>";
    }
    $("#inputCity").html(htmlString);

});