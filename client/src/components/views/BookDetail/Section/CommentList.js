import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Comment, Button, Input} from 'antd';

function CommentList(props) {
    return (
        <div>
            <Comment
        author={props.comment.writer.name}
        content= {<p>{props.comment.content}</p>}
        ></Comment>
        </div>
    )
}

export default CommentList

