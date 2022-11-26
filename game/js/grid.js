class Node {
    constructor(position_x, position_y, bg_texture=null, l0_texture=null, l1_texture=null, l2_texture=null) {
        this.div = document.createElement('div')

        this.position_x = position_x
        this.position_y = position_y

        this.div.textContent = `${position_x} : ${position_y}`
        this.div.classList.add('node')

        this.bg_texture = bg_texture
        this.l0_texture = l0_texture
        this.l1_texture = l1_texture
        this.l2_texture = l2_texture
    }
}

var Grid = {
    grid_width : 19,
    grid_height : 10,
    player_node_x : 9,
    player_node_y : 5,

    bg_map : null,
    l0_map : null,
    l1_map : null,
    l2_map : null,
    nodes : [],

    player_x : 20,
    player_y : 20,

    container : document.getElementById('game_grid_container'),
    grid : document.getElementById('game_grid'),

    loadGrid : function() {
        this.grid.innerHTML = ""

        // Create nodes
        for(let y = 0, py = this.player_y-this.player_node_y; y < this.grid_height; y++, py++) {
            this.nodes.push([])
            for(let x = 0, px = this.player_x-this.player_node_x; x < this.grid_width; x++, px++) {
                this.nodes[y].push(new Node(px, py))
                if(y == this.player_node_y && x == this.player_node_x) { // Create player node
                    this.nodes[y][x].div.id = 'player_node'
                    this.nodes[y][x].div.innerHTML = '<img src="assets/test_arrows/arrow_down.png" alt="Sorry. There is no arrow."></img>'
                }
            }
        }

        // Load nodes to html
        this.nodes.map(row => {
            row.map(node => this.grid.appendChild(node.div))
        })

        console.log(this.nodes)

        return 1
    },

    moveGrid : function(key) {
        let x = 0
        let y = 0

        if(key == 'W') {x = 0; y = -1}
        if(key == 'S') {x = 0; y = 1}
        if(key == 'A') {x = -1; y = 0}
        if(key == 'D') {x = 1; y = 0}

        this.nodes.map(row => {
            row.map(node => {
                node.position_x = node.position_x + x
                node.position_y = node.position_y + y
                node.div.textContent = `${node.position_x} : ${node.position_y}`
            })
        })
    }
}