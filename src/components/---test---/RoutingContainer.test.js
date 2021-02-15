import React from 'react';
import ReactDom from 'raect-dom';
import RoutingContainer from  '../../components/RoutingContainer';
import { isTSAnyKeyword } from '@babel/types';
import { render} from '@testing-library/react'
import 'jest-dom/extend-expect';
it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Route></Route>,div)
})
it("renders rote correctly",() =>{
render (<Route path ='/'component={login}></Route>)
expect().toHaveTextContent("Route path")
})
