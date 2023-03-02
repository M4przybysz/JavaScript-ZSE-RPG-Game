const DefaultMaps = {
    Empty : {
        name : "Empty",

        background_map : [
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'],
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'],
        ],
        walls_map : [
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'],
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'],
        ],
        collision_map : [
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'],
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'],
        ],
        objects : null,
        items : null,
        creatures : null,
    },

    Empty2 : {
        name : "Empty",

        background_map : [
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'],
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'], 
            ['x10/f'],
        ],
        walls_map : [
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/w'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'],
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'], 
            ['x10/n'],
        ],
        collision_map : [
            ['x10/r'], 
            ['x10/l'], 
            ['x10/u'], 
            ['x10/d'], 
            ['x10/a'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'],
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'], 
            ['x10/.'],
        ],
        objects : null,
        items : null,
        creatures : null,
    },

    Test1 : {
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
        objects : null,
        items : null,
        creatures : null,
    },

    Test2 : {
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
        objects : null,
        items : null,
        creatures : null,
    },
}

class ActiveMap {
    name = ""

    background = []
    walls = []
    collision = []
    objects = []
    items = []
    creatures = []

    bg_rows = []
    breakMap(location) {
        let multinode_regex = new RegExp(/^[x]\d+\/[a-zA-Z\.]+(-s:\d+:\d+:[a-zA-Z0-9=+<>()\[\]{}_\-]+)?$/)
        let x_multiplier = 0
        let id = ''

        this.bg_rows = []
        location["background_map"].map((row, y) => {
            this.bg_rows.push(0)
            this.background.push([])
            row.map((node, x) => {
                if(multinode_regex.test(node)) {
                    this.bg_rows[y] += parseInt(node.split('/')[0].replace('x', ''))
                    
                    x_multiplier = parseInt(node.split('/')[0].replace('x', ''))
                    id = node.split('/')[1]
                    for(let i = 0; i < x_multiplier; i++) { this.background[y].push(id) }
                }
                else {
                    this.bg_rows[y] += 1 

                    this.background[y].push(location['background_map'][y][x].replace(/ /g, ''))
                }
            })
        })

        x_multiplier = 0
        id = ''
        location["walls_map"].map((row, y) => {
            this.walls.push([])
            row.map((node, x) => {
                if(multinode_regex.test(node)) {
                    x_multiplier = parseInt(node.split('/')[0].replace('x', ''))
                    id = node.split('/')[1]
                    for(let i = 0; i < x_multiplier; i++) { this.walls[y].push(id) }
                }
                else {
                    this.walls[y].push(location['walls_map'][y][x].replace(/ /g, ''))
                }
            })
        })

        x_multiplier = 0
        id = ''
        location["collision_map"].map((row, y) => {
            this.collision.push([])
            row.map((node, x) => {
                if(multinode_regex.test(node)) {
                    x_multiplier = parseInt(node.split('/')[0].replace('x', ''))
                    id = node.split('/')[1]
                    for(let i = 0; i < x_multiplier; i++) { this.collision[y].push(id) }
                }
                else {
                    this.collision[y].push(location['collision_map'][y][x].replace(/ /g, ''))
                }
            })
        })

    }

    constructor(name, location) {
        this.name = name

        this.objects = location.objects
        this.items = location.items
        this.creatures = location.items

        this.breakMap(location)
    }

    addRow() {
        MapContainer.nodes = []
        document.getElementById('map_view').innerHTML = ''
        
        this.bg_rows.push(this.bg_rows[0])
        this.background.push([])
        for(let i = 0; i < this.bg_rows[0]; i++) { this.background[this.bg_rows.length-1].push('.') }

        this.walls.push([])
        for(let i = 0; i < this.bg_rows[0]; i++) { this.walls[this.bg_rows.length-1].push('n') }

        this.collision.push([])
        for(let i = 0; i < this.bg_rows[0]; i++) { this.collision[this.bg_rows.length-1].push('.') }

        MapContainer.showMap(EditedMap)
        
        checkCheckbox()
    }

    addColumn() {
        MapContainer.nodes = []
        document.getElementById('map_view').innerHTML = ''

        this.bg_rows.map((row, y) => { this.bg_rows[y] += 1 })

        this.background.map((row, y) => { this.background[y].push('.') })
        this.walls.map((row, y) => { this.walls[y].push('n') })
        this.collision.map((row, y) => { this.collision[y].push('.') })

        MapContainer.showMap(EditedMap)

        checkCheckbox()
    }
    
    deleteRow(checkbox) {
        let drawT = document.getElementById('draw_textures_checkbox')
        let addIOC = document.getElementById('add_ioc_checkbox')

        let delete_column = document.getElementById('delete_column_checkbox')

        if(checkbox.checked) {
            drawT.checked = false
            addIOC.checked = false
            delete_column.checked = false

            MapContainer.nodes.map((row, y) => {
                row.map(node => {
                    node.div.setAttribute('onclick', `removeRow(${y})`)
                })
            })
        }
        else if(!checkbox.checked) {
            MapContainer.nodes.map(row => {
                row.map((node, x) => {
                    node.div.setAttribute('onclick', '')
                })
            })
        }
        else { return }
    }

    deleteColumn(checkbox) {
        let drawT = document.getElementById('draw_textures_checkbox')
        let addIOC = document.getElementById('add_ioc_checkbox')

        let delete_row = document.getElementById('delete_row_checkbox')

        if(checkbox.checked) {
            drawT.checked = false
            addIOC.checked = false
            delete_row.checked = false

            MapContainer.nodes.map(row => {
                row.map((node, x) => {
                    node.div.setAttribute('onclick', `removeColumn(${x})`)
                })
            })
        }
        else if(!checkbox.checked) {
            MapContainer.nodes.map(row => {
                row.map((node, x) => {
                    node.div.setAttribute('onclick', '')
                })
            })
        }
        else { return }
    }
}