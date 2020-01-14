import React, { Component } from 'react';
import ProfilePic from './profilepic.jpg'

class profile extends Component {
    render() {
        return (
            <div>
                <div className="contacts"> <a href="https://www.linkedin.com/in/cassandra-cowens-3284a2189"
                    target='blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                        width={40} height={35} alt="linkedinlogo"></img></a></div>
                <div className="profile">
                    <img src={ProfilePic} alt="profile pic" width={250} height={300}></img>
                </div>

                <h1>Cassandra Cowens</h1>
                <p>Software Engineer</p>
            </div>
        )
    }
}

export default profile