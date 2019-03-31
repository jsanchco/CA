import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IActionMapping, ITreeOptions, KEYS, TREE_ACTIONS} from 'angular-tree-component';

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreePageComponent implements OnInit {
  // Model for basic example
  basicNodes = [
    {
      name: 'root1',
      children: [
        {name: 'child1'},
        {name: 'child2'}
      ]
    },
    {
      name: 'root2',
      children: [
        {name: 'child2.1', children: []},
        {
          name: 'child2.2', children: [
            {name: 'grandchild2.2.1'}
          ]
        }
      ]
    },
    {name: 'root3'},
    {name: 'root4', children: []},
    {name: 'root5', children: null}
  ];
  // Model for custom actions example
  customActionNodes = [
    {
      name: 'root1',
      children: [
        {
          name: 'child1'
        }, {
          name: 'child2'
        }
      ]
    },
    {
      name: 'root2',
      children: [
        {
          name: 'child2.1'
        }, {
          name: 'child2.2',
          children: [
            {
              id: 1001,
              name: 'subsub'
            }
          ]
        }
      ]
    }
  ];
  customActionOptions: ITreeOptions = {
    actionMapping
  };
  // Model for filter example
  filterNodes = [
    {
      name: 'North America',
      children: [
        {
          name: 'United States', children: [
            {name: 'New York'},
            {name: 'California'},
            {name: 'Florida'}
          ]
        },
        {name: 'Canada'}
      ]
    },
    {
      name: 'South America',
      children: [
        {name: 'Argentina', children: []},
        {name: 'Brazil'}
      ]
    },
    {
      name: 'Europe',
      children: [
        {name: 'England'},
        {name: 'Germany'},
        {name: 'France'},
        {name: 'Italy'},
        {name: 'Spain'}
      ]
    }
  ];
  // Model for API methods example
  options: ITreeOptions = {
  };
  nodes = [
    {
      name: 'root1',
      children: [
        {
          name: 'child1'
        }, {
          name: 'child2'
        }
      ]
    },
    {
      name: 'root2',
      children: [
        {
          name: 'child2.1'
        }, {
          name: 'child2.2',
          children: [
            {
              id: 1001,
              name: 'subsub'
            }
          ]
        }
      ]
    }
  ];

  addNode(tree: any) {
    this.nodes[0].children.push({
      name: 'a new child'
    });
    tree.treeModel.update();
  }

  activateSubSub(tree: any) {
    tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
