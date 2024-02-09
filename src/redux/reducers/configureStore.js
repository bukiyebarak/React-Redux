import { legacy_createStore as createStore } from 'redux'
import rootRecuder from "./index";

export default function configureStore() {
    return createStore(rootRecuder);
}