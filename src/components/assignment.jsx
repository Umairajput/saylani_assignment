import React from 'react'
import { posts } from './object';

function Assignment() {
    const name = "Hello World";
    const obj = { name: "Hello World Object" }
    const data = ['We', 'are', 'United']
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]
    const complex = [
        {
            company: 'XYZ',
            jobs: ['Javascript', 'React']
        },
        { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }
    ]
    return (
        <div>
            <div>
                <h1>(Q1) Render these into component:</h1>
                <h1>{name}</h1>
                <h2>{obj.name}</h2>
                <h3>{data[0]}</h3>
                <h3>{data[1]}</h3>
                <h3>{data[2]}</h3>
                <h3>{list[0].name}</h3>
                <h3>{list[1].name}</h3>
                <h3>{list[2].name}</h3>
                <h3>{complex[0].company}</h3>
                <h3>{complex[0].jobs[0]}</h3>
                <h3>{complex[0].jobs[1]}</h3>
                <h3>{complex[1].company}</h3>
                <h3>{complex[1].jobs[0]}</h3>
                <h3>{complex[1].jobs[1]}</h3>
            </div>
            <div>
                <h1>(Q3) Just copy and paste the data from these links and store them into a variable:</h1>
                {
                    posts.map((v, i) => {
                        return (
                            <div>
                                <h3>{v.userId}</h3>
                                <h3>{v.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Assignment
