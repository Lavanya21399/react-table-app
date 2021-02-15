import React from 'react';
import ReactDom from 'react-dom';
import ApiUrl from '../configs/ApiUrl';
import { isTSAnyKeyword } from '@babel/types';


it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(baseurl,div)
})