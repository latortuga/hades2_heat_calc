var data = [
    {
        "name": "Vow of Pain",
        "levels": [
            "All foes deal +0% damage",
            "All foes deal +20% damage",
            "All foes deal +60% damage",
            "All foes deal +100% damage"
        ],
        "fear": [0, 1, 3, 5]
    },
    {
        "name": "Vow of Grit",
        "levels": [
            "All foes have +0% health",
            "All foes have +10% health",
            "All foes have +20% health",
            "All foes have +30% health"
        ],
        fear: [0, 1, 2, 3]
    },
    {
        "name": "Vow of Wards",
        "levels": [
            "All foes have 0 barriers",
            "All foes have 1 barrier",
            "All foes have 2 barriers"
        ],
        fear: [0, 1, 2]
    },
    {
        "name": "Vow of Frenzy",
        "levels": [
            "All foes are +0% faster",
            "All foes are +20% faster",
            "All foes are +40% faster"
        ],
        fear: [0, 3, 6]
    },
    {
        "name": "Vow of Hordes",
        "levels": [
            "Most encounters have +0% more foes",
            "Most encounters have +20% more foes",
            "Most encounters have +40% more foes",
            "Most encounters have +60% more foes"
        ],
        fear: [0, 1, 2, 3],
    },
    {
        "name": "Vow of Menace",
        "levels": [
            "Most foes have 0% chance to be from the next Region (if there is one.)",
            "Most foes have 10% chance to be from the next Region (if there is one.)",
            "Most foes have 25% chance to be from the next Region (if there is one.)",
        ],
        fear: [0, 1, 3],
    },
    {
        "name": "Vow of Return",
        "levels": [
            "Most slain foes have +0% chance to become a Revenant",
            "Most slain foes have +25% chance to become a Revenant",
            "Most slain foes have +50% chance to become a Revenant"
        ],
        fear: [0, 1, 2],
    },
    {
        "name": "Vow of Fangs",
        "levels": [
            "Most foes with Armor also have 0 random Perks.",
            "Most foes with Armor also have 1 random Perk.",
            "Most foes with Armor also have 2 random Perks.",
        ],
        fear: [0, 2, 5],
    },
    {
        "name": "Vow of Scars",
        "levels": [
            "Any healing effects are 100% effective",
            "Any healing effects are 75% effective",
            "Any healing effects are 50% effective",
            "Any healing effects are 0% effective"
        ],
        fear: [0, 1, 2, 4],
    },
    {
        "name": "Vow of Debt",
        "levels": [
            "All items that cost gold are 0% more expensive",
            "All items that cost gold are 40% more expensive",
            "All items that cost gold are 80% more expensive"
        ],
        fear: [0, 1, 2],
    },
    {
        "name": "Vow of Shadow",
        "levels": [
            "All Encounters with Wardens contain no Shadow Servants.",
            "All Encounters with Wardens contain no fewer than 1 Shadow Servant.",
        ],
        fear: [0, 2],
    },
    {
        "name": "Vow of Forfeit",
        "levels": [
            "The first 0 Boons in each Region become Red Onions instead",
            "The first 1 Boons in each Region become Red Onions instead",
        ],
        fear: [0, 3],
    },
    {
        "name": "Vow of Time",
        "levels": [
            "You have infinite time to fight through each Region (or else...)",
            "You have 9:00 to fight through each Region (or else...)",
            "You have 7:00 to fight through each Region (or else...)",
            "You have 5:00 to fight through each Region (or else...)",
        ],
        fear: [0, 1, 3, 6],
    },
    {
        "name": "Vow of Void",
        "levels": [
            "You have access to 100% of your Grasp for your Arcana.",
            "You have access to 60% of your Grasp for your Arcana.",
            "You have access to 40% of your Grasp for your Arcana.",
            "You have access to 20% of your Grasp for your Arcana.",
            "You have access to 0% of your Grasp for your Arcana.",
        ],
        fear: [0, 1, 2, 3, 5],
    },
    {
        "name": "Vow of Hubris",
        "levels": [
            "After you choose a Boon, Prime 0 Magick for each Rarity greater than Common.",
            "After you choose a Boon, Prime 3 Magick for each Rarity greater than Common.",
            "After you choose a Boon, Prime 6 Magick for each Rarity greater than Common.",
        ],
        fear: [0, 1, 2],
    },
    {
        "name": "Vow of Denial",
        "levels": [
            "After you choose a Boon, 0 unpicked blessings will not appear again this night",
            "After you choose a Boon, 2 unpicked blessings will not appear again this night",
        ],
        fear: [0, 2],
    },
    {
        "name": "Vow of Rivals",
        "levels": [
            "The Guardians of the first 0 Regions shall be stronger in various ways.",
            "The Guardians of the first 1 Region shall be stronger in various ways.",
            "The Guardians of the first 2 Regions shall be stronger in various ways.",
            "The Guardians of the first 3 Regions shall be stronger in various ways.",
            "The Guardians of the first 4 Regions shall be stronger in various ways.",
        ],
        fear: [0, 2, 5, 8, 12],
    },
]
var elements = {}
var emojis = {
    "unlock": String.fromCodePoint(0x1F513),
    "lock": String.fromCodePoint(0x1F512),
    "fire": String.fromCodePoint(0x1F525),
}

function addTh(tr, el) {
    let th = document.createElement("th")
    tr.appendChild(th)
    th.appendChild(el)
}

function setup() {
    let params = new URLSearchParams(location.search);
    let values = decodeValues(params.get("values"));
    let locks = decodeLocks(params.get("locks"));
    let target = decodeTarget(params.get("target"));
    let inputs = document.getElementById("inputs")
    let max_fear = 0
    for (let i = 0; i < data.length; i++) {
        let datum = data[i]
        let fear = datum["fear"]
        let levels = datum["levels"]
        max_fear += fear[fear.length - 1]

        let row = document.createElement("tr")
        inputs.appendChild(row)

        let el_name_wrapper = document.createElement("span")
        datum["el_name_wrapper"] = el_name_wrapper
        addTh(row, el_name_wrapper)

        let el_name = document.createElement("span")
        el_name.innerText = datum["name"]
        datum["el_name"] = el_name
        el_name_wrapper.appendChild(el_name)

        let el_flavor = document.createElement("span")
        el_flavor.innerText = levels[0]
        el_flavor.setAttribute("class", "flavor_long")
        datum["el_flavor"] = el_flavor
        el_name_wrapper.appendChild(document.createElement("br"))
        el_name_wrapper.appendChild(el_flavor)

        let el_input = document.createElement("input")
        el_input.type = "range"
        el_input.min = 0
        el_input.max = levels.length - 1
        el_input.value = values[i]
        el_input.setAttribute("onChange", "refresh()")
        datum["el_input"] = el_input
        addTh(row, el_input)

        let el_fear_flavor = document.createElement("span")
        datum["el_fear_flavor"] = el_fear_flavor
        addTh(row, el_fear_flavor)

        let el_lock_wrapper = document.createElement("span")
        addTh(row, el_lock_wrapper)

        let el_lock = document.createElement("input")
        el_lock.type = "checkbox"
        el_lock.checked = locks[i]
        el_lock.setAttribute("onChange", "refresh()")
        datum["el_lock"] = el_lock
        el_lock_wrapper.appendChild(el_lock)

        let el_lock_flavor = document.createElement("span")
        datum["el_lock_flavor"] = el_lock_flavor
        el_lock_wrapper.appendChild(el_lock_flavor)
    }
    elements["total_fear"] = document.getElementById("total_fear")
    elements["target_fear"] = document.getElementById("target_fear")
    elements["target_fear"].value = target
    elements["target_fear"].max = max_fear
    elements["target_flavor"] = document.getElementById("target_flavor")
    elements["randomize"] = document.getElementById("randomize")
    refresh()
}

function refresh() {
    let total_fear = 0
    for (let i = 0; i < data.length; i++) {
        let datum = data[i]
        let value = parseInt(datum["el_input"].value, 10)
        let level = datum["levels"][value]
        let fear = datum["fear"][value]
        let locked = datum["el_lock"].checked
        datum["el_flavor"].innerText = level
        datum["el_fear_flavor"].innerText = fear + emojis["fire"]
        datum["el_lock_flavor"].innerText = emojis[locked ? "lock" : "unlock"]
        datum["el_name_wrapper"].setAttribute("class", locked ? "locked" : "")
        total_fear += fear
    }
    elements["total_fear"].innerText = total_fear
    elements["target_flavor"].innerText = elements["target_fear"].value
}

function randomize() {
    target_fear = parseInt(elements["target_fear"].value, 10)
    max_fear = parseInt(elements["target_fear"].max, 10)
    let solns = randomizeHelper(0, target_fear, 0, max_fear)
    if (solns.length == 0) {
        alert("Target fear cannot be achieved with current locked values.")
    } else {
        let soln = solns[Math.floor(Math.random() * solns.length)].reverse()
        for (let i = 0; i < data.length; i++) {
            data[i]["el_input"].value = soln[i]
        }
    }
    refresh()
}

function randomizeHelper(i, target, current, max) {
    if ((current + max < target) || (current > target)) {
        return []
    }
    if (i >= data.length) {
        return current == target ? [[]] : []
    }
    let datum = data[i]
    let fear = datum["fear"]
    let solns = []
    for (let j = 0; j < fear.length; j++) {
        let locked_value = parseInt(datum["el_input"].value, 10)
        if (datum["el_lock"].checked && j != locked_value) {
            continue
        }
        let new_fear = current + fear[j]
        let new_max = max - fear[fear.length - 1]
        let recursive_solns = randomizeHelper(i + 1, target, new_fear, new_max)
        for (let k = 0; k < recursive_solns.length; k++) {
            let soln = recursive_solns[k]
            soln.push(j)
            solns.push(soln)
        }
    }
    return solns
}

function getUrl() {
    let url = window.location.href.split("?")[0]
    let values = []
    let locks = []
    let target = parseInt(elements["target_fear"].value, 10)
    for (let i = 0; i < data.length; i++) {
        let datum = data[i]
        values.push(parseInt(datum["el_input"].value, 10))
        locks.push(datum["el_lock"].checked)
    }
    url += "?values=" + encodeValues(values)
    url += "&locks=" + encodeLocks(locks)
    url += "&target=" + target
    navigator.clipboard.writeText(url)
}

function encodeValues(values) {
    let encoded = 0
    for (let i = 0; i < values.length; i++) {
        encoded = encoded * 10 + values[i]
    }
    return encoded
}

function decodeValues(encoded) {
    if (encoded == null) {
        encoded = 0
    }
    let values = []
    for (let i = 0; i < data.length; i++) {
        values.push(encoded % 10)
        encoded = Math.floor(encoded / 10)
    }
    return values.reverse()
}

function encodeLocks(locks) {
    let encoded = 0
    for (let i = 0; i < locks.length; i++) {
        encoded = encoded * 2 + (locks[i] ? 1 : 0)
    }
    return encoded
}

function decodeLocks(encoded) {
    if (encoded == null) {
        encoded = 0
    }
    let locks = []
    for (let i = 0; i < data.length; i++) {
        locks.push((encoded % 2 == 1) ? true : false)
        encoded = Math.floor(encoded / 2)
    }
    return locks
}

function decodeTarget(encoded) {
    if (encoded == null) {
        return 8;
    }
    return parseInt(encoded, 10);
}
