import React from 'react';

class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: true
        }

        this.changeMode = this.changeMode.bind(this)
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        return (
            <div>
                <div className="add_word-container">
                    {this.state.isOpen ?
                        <span className="label_title">Add new word</span> : 
                        <div>
                            <input type="text" placeholder="Enter new word" />
                            <button onClick={this.changeMode} className="btn_round check"> ✓</button>
                        </div>
                    } 
                    <button onClick={this.changeMode} className="btn_round add"></button>
                </div>
            </div>
        )
    }
}

export default Page;