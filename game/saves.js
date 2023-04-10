var Active_save = {}
var Imported_save = {}

const Texture_dict = { // Dictionary containing texture corresponding to its id
    // Test textures
    undefined : './assets/null.png',
    null :      './assets/null.png',
    'n' :       './assets/null.png',
    '.' :       './assets/void.png',
    'f' :       './assets/test_textures/floor.png',
    'w' :       './assets/test_textures/wall.png',
    'ls' :      './assets/test_textures/location_switch.png',

    // Map textures

    // Map objects
    'fire' :    './assets/objects/fire.png',

    // Items
    'stick' : './assets/items/stick.png',
    'coin' : './assets/items/coin.png',

    // Creature textures
    'c_friendly' : './assets/creatures/green.png',  //---v
    'c_neutral' : './assets/creatures/yellow.png',  //-> test textures
    'c_hostile' : './assets/creatures/red.png',     //---^
}

const Start_save = {
    Player : {
        name : null,
        class : null,
        direction : 'S',
        location : 'Test2',
        position_x : 3,
        position_y : 3,

        lvl : 0,
        exp : 0,

        max_hp : 100,
        max_mana : 100,

        hp : 100,
        mana : 100,
        defense : 0,
        attack_power : 0,

        equiped_item : null,
        equiped_healing : null,

        head_armor : null,
        torso_armor : null,
        legs_armor : null,

        backpack : [],
        backpack_max_capacity : 18,
    },
    Item_list : {
        test_item : new Weapon('test_item', 'test_stick', 4, 4, 'stick', 10),
        test_item2 : new Armor('test_item2', 'test_coin', 3, 4, 'coin', 'head', 20),
        test_healing : new Healing('test_healing', 'test_healing', 5, 5, 'coin', 20),
    },
    MapObj_list : {
        test_map_object : new MapObj('test_map_object', 2, 2, 'fire'),
    },
    Creature_list : {
        test_friendly : new Person('test_friendly', 'test_friendly', 1, 13, 'c_friendly', 1, 100, 100),
        test_neutral : new Animal('test_neutral', 'test_neutral', 2, 13, 'c_neutral', 1, 20),
        test_hostile : new Monster('test_hostile', 'test_hostile', 3, 13, 'c_hostile', 1, 20, 50),
    },
    Locations : {
        Test1 : { // Simple room
            name : 'Test1',

            background_map : [  ['.', 'x10/f', '.'],
                                ['x12/f'],
                                ['x12/f'],
                                ['x12/f'],
                                ['x12/f'],
                                ['.', 'x10/f', '.'],
            ],
            walls_map : [       ['n', 'x10/w', 'n'],
                                ['w', 'x10/n', 'w'],
                                ['w', 'x5/n', 'w', 'x4/n', 'w'],
                                ['w', 'x10/n', 'ls'],
                                ['w', 'x10/n', 'w'],
                                ['n', 'x10/w', 'n'],
            ],
            collision_map : [   ['.', 'x10/a', '.'],
                                ['a', 'x10/.', 'a'],
                                ['a', 'x5/.', 'url', 'x4/.', 'a'],
                                ['a', 'x10/.', '.-s:1:3:Test2'],
                                ['a', 'x10/.', 'a'],
                                ['.', 'x10/a', '.'],
            ],
            items : ['test_item', 'test_item2'],
            objects : ['test_map_object'],
            creatures : null,
        },
        Test2 : { // Big test room
            name : 'Test2',

            background_map : [  ['x20/f'], 
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'], 
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
                                ['x20/f'],
            ],
            walls_map : [       ['x3/w', 'x3/ls', 'x14/w'],
                                ['w', 'x6/n', 'x6/w', 'x6/n', 'w'],
                                ['ls', 'x7/n', 'x4/w', 'x7/n', 'w'],
                                ['ls', 'x8/n', 'x2/w', 'x8/n', 'w'],
                                ['ls', 'x18/n', 'w'],
                                ['w', 'x8/n', 'x3/w', 'x2/n', 'x3/w', 'x2/n', 'w'],
                                ['w', 'x2/n', 'w', 'x2/n', 'w', 'x2/n', 'w', 'x6/n', 'w', 'x2/n', 'w'],
                                ['w', 'x8/n', 'x3/w', 'x2/n', 'x3/w', 'x2/n', 'w'],
                                ['w', 'x2/n', 'w', 'x2/n', 'w', 'x2/n', 'w', 'x6/n', 'w', 'x2/n', 'w'],
                                ['w', 'x8/n', 'x3/w', 'x2/n', 'x3/w', 'x2/n', 'w'],
                                ['w', 'x2/n', 'w', 'x2/n', 'w', 'x2/n', 'w', 'x6/n', 'w', 'x2/n', 'w'],
                                ['w', 'x8/n', 'x3/w', 'x2/n', 'x3/w', 'x2/n', 'w'],
                                ['w', 'x18/n', 'w'],
                                ['w', 'x18/n', 'w'],
                                ['w', 'x10/n', 'x6/w', 'n', 'x2/w'],
                                ['w', 'x6/n', 'x5/w', 'x4/n', 'w', 'n', 'x2/w'],
                                ['x2/w', 'n', 'x5/w', 'x5/n', 'w', 'x2/n', 'w', 'x2/n', 'w'],
                                ['x2/w', 'n', 'w', 'x3/n', 'w', 'n', 'x2/w', 'n', 'x2/w', 'n', 'x3/w', 'n', 'w'],
                                ['x2/w', 'x3/n', 'w', 'x4/n', 'w', 'n', 'x2/w', 'x5/n', 'w'],
                                ['x20/w'],
            ],
            collision_map : [   ['x3/a', 'x3/.-s:10:3:Test1', 'x14/a'],
                                ['a', 'x6/.', 'x6/a', 'x6/.', 'a'],
                                ['.-s:10:3:Test1', 'x7/.', 'x4/a', 'x7/.', 'a'],
                                ['.-s:10:3:Test1', 'x8/.', 'x2/a', 'x8/.', 'a'],
                                ['.-s:10:3:Test1', 'x18/.', 'a'],
                                ['a', 'x8/.', 'x3/a', 'x2/.', 'x3/a', 'x2/.', 'a'],
                                ['a', 'x2/.', 'a', 'x2/.', 'a', 'x2/.', 'a', 'x6/.', 'a', 'x2/.', 'a'],
                                ['a', 'x8/.', 'x3/a', 'x2/.', 'x3/a', 'x2/.', 'a'],
                                ['a', 'x2/.', 'a', 'x2/.', 'a', 'x2/.', 'a', 'x6/.', 'a', 'x2/.', 'a'],
                                ['a', 'x8/.', 'x3/a', 'x2/.', 'x3/a', 'x2/.', 'a'],
                                ['a', 'x2/.', 'a', 'x2/.', 'a', 'x2/.', 'a', 'x6/.', 'a', 'x2/.', 'a'],
                                ['a', 'x8/.', 'x3/a', 'x2/.', 'x3/a', 'x2/.', 'a'],
                                ['a', 'x18/.', 'a'],
                                ['a', 'x18/.', 'a'],
                                ['a', 'x10/.', 'x6/a', '.', 'x2/a'],
                                ['a', 'x6/.', 'x5/a', 'x4/.', 'a', '.', 'x2/a'],
                                ['x2/a', '.', 'x5/a', 'x5/.', 'a', 'x2/.', 'a', 'x2/.', 'a'],
                                ['x2/a', '.', 'a', 'x3/.', 'a', '.', 'x2/a', '.', 'x2/a', '.', 'x3/a', '.', 'a'],
                                ['x2/a', 'x3/.', 'a', 'x4/.', 'a', '.', 'x2/a', 'x5/.', 'a'],
                                ['x20/a'],
            ],
            items : ['test_healing'],
            objects : null,
            creatures : ['test_friendly', 'test_neutral', 'test_hostile'],
        },
    }
}