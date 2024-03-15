import React from 'react'
import {Menu, MenuProps} from'antd'
import {RetweetOutlined,DoubleRightOutlined,OrderedListOutlined} from '@ant-design/icons'
function getItem(label, key, icon, children, type) {
    return {
        label,
        key,
        icon,
        children,
        type
    };
};

const items = [
    getItem('Sorting Menu','sub1', <OrderedListOutlined/>,[
        getItem('Item1','g1',null,[getItem('Bubble Sort','1'),getItem('Insert Sort','2')],'group'),
        getItem('Item2','g2',null,[getItem('Quick Sort','3'),getItem('Bucket Sort','4')],'group')
    ]),
    getItem('Direction Menu','sub2',<DoubleRightOutlined/>,[
        getItem('Depth-First Search','5'),
        getItem('Breadth-First Search','6'),
        getItem('Submenu','sub3',null,[getItem('Option7','7'),getItem('Option8','8')])
    ]),
    {
        type:'divider'
    },
    getItem('Reduction Menu','sub4',<RetweetOutlined/>),
    getItem('Data Structure Menu','grp',null,[
        getItem('Binary Tree','12'),
        getItem('Stack & Heap','13')
    ])
];
export default function MenuCourse() {

    const onClick = () => {
        console.log("click menu.")
    };
    return (
        <Menu 
        onClick={onClick}
        style={{width:256}}
        defaultselectedkeys = {['1']}
        defaultopenedkeys = {['sub1']}
        mode = 'inline'
        items = {items}>
        </Menu>
    );
};