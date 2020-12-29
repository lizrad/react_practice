import React, {Suspense, lazy} from "react"
import ReactDOM from "react-dom"
import {HashRouter, Route, hashHistory} from 'react-router-dom'
import {connect} from "react-redux"
const Home = lazy(() => 
        import(/*webpackChunkName:"Home"*/ './components/pagebox/home.jsx'))
const HeadBanner = lazy(() => 
        import(/*webpackChunkName:"HeadBanner"*/'./components/sidebar/SideBar.jsx'))
const MapCountDown = lazy(() => 
        import(/*webpackChunkName:"CountDown"*/'./components/CountDown/CountDown.jsx'))
const StockMain = lazy(()=>
        import(/*webpackChunkName:"Stock"*/'./components/StockPage/StockMain.jsx'))
import './index.css'
const ShowIp = lazy(()=>
        import(/*webpackChunkName:"ShowIp"*/"./components/ShowIp/ShowIp.jsx"))
const ScriptDl = lazy(()=>
        import(/*webpackChunkName:"ScriptDL"*/"./components/ScriptDownload/ScriptDownload.jsx"))

class MainWindow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: [],
            value: []
        }
    }

    render(){
        const Styles = {
            StyleContainer: {
                width:      '100%',
                height:     'auto',
                background: 'rgb(47, 49, 54)',
                margin:     '0',
                boxSizing:  'border-box'
            }
        }
        const {StyleContainer} = Styles
        return (
            <HashRouter>
                <div style={StyleContainer}>
                    {/* <div style={Styles.headerContainer}>
                        <h1 style={Styles.h1Container}>
                            Hello Everyone!
                        </h1>
                    </div> */}
                    {/* Use route to switch pages */}
                    <Suspense fallback={<div>Loading</div>}>
                        <HeadBanner/>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/StockSearch' component={ StockMain }/>
                        <Route exact path='/CountDown' component={ MapCountDown }/>
                        <Route exact path='/CheckIP' render={() => {return <ShowIp/>}}/>
                        <Route exact path='/Scripts' component={ ScriptDl } />
                    </Suspense>
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<MainWindow />, document.getElementById("root"))

export { MainWindow }