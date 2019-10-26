import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';




const Graph = props => {

    const [countData, setCountData] = useState({})

    useEffect(  () => {

        setCountData({
            data: {
                labels: [""],
                datasets: [
                    {
                        label: "Current",
                        backgroundColor: "rgba(225, 0, 225, 0.75)",
                        data: [props.count]
                    },
                    {
                        label: "HighScore",
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: [props.highScore]
                    },
                ]
            },
        });
        
        
        }, [props.count])

        console.log(countData)


        return(
            <div className="graph-styling" style={{ position: "relative", width: 450, height: 450}}>
                <h3 style={{ textAlign: "center"}}>ScoreBoard</h3>
                <Bar
                    options={{
                        responsive: true,
                        scales: {
                            yAxes: [{
                                ticks: {
                                  beginAtZero: true,
                                  min: 0,
                                  max: props.highScore + 10,
                                  stepSize: 1
                              }
                          }]
                      }

                    }}
                    data={countData.data}
                    />
            </div>
        )
}

export default Graph;

