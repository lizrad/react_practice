import React from 'react'
import "./info.css"

class Experience extends React.Component    {
    constructor(props){
        super(props)
        this.state = {
            opacity: 1
        }
        this.scrollHandler = this.scrollHandler.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scrollHandler)
    }

    scrollHandler(){
        let pos = window.pageYOffset
        if(pos > 250 && pos < 485){
            let diff = (pos - 250) / (485 - 250)
            this.setState({opacity: diff})
        }
    }

    render(){
        const Styles = {
            StyleContainer:{
                color:          'white',
                fontSize:       '3vmin',
                background:     'rgb(64, 68, 75)',
                height:         'auto',
                overflow:       'auto',
                opacity:        this.state.opacity
            },
            overallTitle:{
                display:        'block',
                textAlign:      'center',
                borderBottom:   '1px solid grey'
            },
            leftElement:{
                float:  'left',
                width:  '50%'

            },
            rightElement:{
                float:  'right',
                width:  '50%'
            }
        }
        return(
            <div style={Styles.StyleContainer} id={this.props.id}>
                <span style={Styles.overallTitle}>簡歷</span>
                {/* <ul>
                    <li className="li">偉祺電機 (Famax) 3 years as Software engineer</li>
                </ul> */}
                <div style={Styles.leftElement}>
                    工作經歷:
                    <ul>
                        <li className="li">
                            偉祺電機 2017/11 ~ 現在<br/>
                            擔任軟體工程師
                        </li>
                    </ul>
                </div>
                <div style={Styles.rightElement}>
                    學歷:
                    <ul>
                        <li className="li">
                            元智大學<br/>
                            電機工程學系
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export { Experience }