const Player = {
    name : null,
    class : null,
    
    direction : 'S', // W - north, D - east, S - south, A - west 

    // Player location and position
    location : Start_save.Player.location,
    position_x : Start_save.Player.position_x,
    position_y : Start_save.Player.position_y,

    // player level values
    lvl : 1,
    exp : 0,
    exp_to_next_lvl : 100,

    // Basic statistics
    max_hp : 100,
    max_mana : 100,

    hp : 100,
    mana : 100,
    defense : 0,
    attack_power : 0,

    // Plaer inventory
    equiped_item : null,
    equiped_healing : null,

    head_armor : null,
    torso_armor : null,
    legs_armor : null,

    backpack : [],
    backpack_max_capacity : 18,

    updateStats() {
        this.defense = 0 + Active_save.Item_list[this.head_armor] ? Active_save.Item_list[this.head_armor].def_value : 0
            + Active_save.Item_list[this.torso_armor] ? Active_save.Item_list[this.torso_armor].def_value : 0
            + Active_save.Item_list[this.legs_armor] ? Active_save.Item_list[this.legs_armor].def_value : 0

        this.attack_power = 0 + Active_save.Item_list[this.equiped_item] ? Active_save.Item_list[this.equiped_item].attack_power_value ?? 0 : 0
    },

    refreshBackpack(pickup = true) {
        let item_containers = document.getElementsByClassName('item_container')

        for(let container of item_containers) { 
            container.innerHTML = '' 
            container.setAttribute('onclick', '')
        }
        
        for(let i = 0; i < this.backpack.length; i++) {
            let item = Active_save.Item_list[this.backpack[i]]
            item_containers[i].innerHTML = `<img src="${Texture_dict[item.texture]}">
                                            <div class="item_functions">
                                                <input type="button" value="Equip" onclick="Player.equipItem('${(item.constructor.name == 'Armor' && item.armor_place == 'head') ? "head_armor" : 
                                                                                                                (((item.constructor.name == 'Armor' && item.armor_place == 'torso') ? "troso_armor" : 
                                                                                                                ((item.constructor.name == 'Armor' && item.armor_place == 'legs') ? "legs_armor" : 
                                                                                                                (item.constructor.name == 'Healing' || item.constructor.name == 'Food') ? "equiped_healing" : "equiped_item")))}', '${this.backpack[i]}')">
                                                <input type="button" value="Use" onclick="Active_save.Item_list['${this.backpack[i]}'].use()">
                                                <input type="button" value="Info" onclick="Active_save.Item_list['${this.backpack[i]}'].showInfo()">
                                                <input type="button" value="Drop" onclick="itemDrop('${this.backpack[i]}')">
                                            </div>`
            item_containers[i].setAttribute('onclick', `showItemFunctions(${i})`)

            if(pickup == true) item_containers[i].click() // First clicked item sometimes needs double click (idk why) so all items are automaticaly clicked
        }
    },

    pickUpItem(item_id) {
        if(this.backpack.length < this.backpack_max_capacity) {
            this.backpack.push(item_id) // Add new item
            this.refreshBackpack()
        }
        else {
            console.log(`backpack max capacity (${this.backpack_max_capacity}) reached. Can't pick up more items`)
        }
    },

    dropItem(item_id) {
        // Delete item from bacpack 
        this.backpack.splice(this.backpack.indexOf(item_id), 1)

        this.refreshBackpack(false)
    },

    dropEqItem(eq_place) {
        // Remove item from equipment
        document.getElementById(eq_place).setAttribute('onclick', '')
        document.getElementById(eq_place).innerHTML = ''
        this[eq_place] = null

        // Update player stats
        this.updateStats()

        // Refresh backpack
        this.refreshBackpack()
    },

    equipItem(eq_place, item_id) {
        let item = Active_save.Item_list[item_id]
        let take_off = null

        openMenuTab(2)

        // Check if item can be placed
        if(eq_place == 'head_armor' && (item.constructor.name != 'Armor' || item.armor_place != 'head')) return
        if(eq_place == 'torso_armor' && (item.constructor.name != 'Armor' || item.armor_place != 'torso')) return
        if(eq_place == 'legs_armor' && (item.constructor.name != 'Armor' || item.armor_place != 'legs')) return
        if(eq_place == 'equiped_healing' && (item.constructor.name != 'Healing' || item.constructor.name != 'Food')) return

        // Check if equipment place is free
        if(this[eq_place] != null) { take_off = this[eq_place] }

        // Place item
        this[eq_place] = item_id
        document.getElementById(eq_place).innerHTML = `<img src="${Texture_dict[item.texture]}">
                                                        <div class="eq_item_functions">
                                                            <input type="button" value="Unequip" onclick="Player.unequipItem('${eq_place}', '${item_id}')">
                                                            <input type="button" value="Use" onclick="Active_save.Item_list['${item_id}'].use()">
                                                            <input type="button" value="Info" onclick="Active_save.Item_list['${item_id}'].showInfo()">
                                                            <input type="button" value="Drop" onclick="itemDrop('${item_id}', true, '${eq_place}')">
                                                        </div>`
        document.getElementById(eq_place).setAttribute('onclick', `showEqItemFunctions('${eq_place}')`)

        // Update player stats
        this.updateStats()

        // Refresh backpack
        this.backpack.splice(this.backpack.indexOf(item_id), 1)
        if(take_off != null) { this.backpack.push(take_off) }
        this.refreshBackpack(false)

        // Click equipment
        document.getElementById(eq_place).click()
    },

    unequipItem(eq_place, item_id) {
        if(this.backpack.length < this.backpack_max_capacity) {
            // Remove item from equipment
            document.getElementById(eq_place).setAttribute('onclick', '')
            document.getElementById(eq_place).innerHTML = ''
            this[eq_place] = null

            // Update player stats
            this.updateStats()

            // Refresh backpack
            this.backpack.push(item_id)
            this.refreshBackpack()
        }
        else {
            console.log(`backpack max capacity (${this.backpack_max_capacity}) reached. Can't unequip this item`)
        }
    },
}

function showItemFunctions(item_number) {
    let item_functions = document.getElementsByClassName('item_functions')
    if(item_functions[item_number].style.display == 'none') { 
        for(let i = 0; i < item_functions.length; i++) {
            item_functions[i].style.display = 'none'
        }
        item_functions[item_number].style.display = 'block'
    } 
    else { 
        item_functions[item_number].style.display = 'none' 
    }
}

function showEqItemFunctions(eq_place) {
    let eq_item_functions = document.getElementById(eq_place).getElementsByClassName('eq_item_functions')[0]
    if(eq_item_functions.style.display == 'none') {
        eq_item_functions.style.display = 'block'
    } 
    else { 
        eq_item_functions.style.display = 'none' 
    }
}