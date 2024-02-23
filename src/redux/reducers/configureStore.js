import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootRecuder from "./index";
import { thunk } from "redux-thunk";

export default function configureStore() {
    return createStore(rootRecuder, applyMiddleware(thunk));
}