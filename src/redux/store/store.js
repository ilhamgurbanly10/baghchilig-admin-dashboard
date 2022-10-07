import {createStore , combineReducers , applyMiddleware } from 'redux'
import {CartProductsReducer, HeadSlidesReducer, OffersReducer, FeaturedWorkReducer, WhyChooseUsReducer } from '../reducers'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    cartProducts: CartProductsReducer,
    headSlides: HeadSlidesReducer,
    offers: OffersReducer,
    featuredWork: FeaturedWorkReducer,
    whyChooseUs: WhyChooseUsReducer
})


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)