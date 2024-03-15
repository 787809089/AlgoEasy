import React from 'react'
import 'antd'
import { Typography } from 'antd';
import Paragraph from 'antd/es/skeleton/Paragraph';
import Title from 'antd/es/skeleton/Title';


export default function InfoBody(){
    return (
            <div>
                <h1>
                    Introduction
                </h1>
                <p >
                    Choose a section from the menu on the left
                    to start your first lesson.
                </p>
            </div>
    );
};