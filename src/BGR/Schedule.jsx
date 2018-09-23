import React, { Component } from 'react';

import '@progress/kendo-ui';
import { Scheduler } from '@progress/kendo-scheduler-react-wrapper';
import './Schedule.css';
class SchedulerContainer extends Component {

    constructor(props) {
            super(props);
            this.startTime = new Date("2013/6/13 07:00 AM")
            this.resiurces = [
                {
                    field: "ownerId",
                    title: "Owner",
                    dataSource: [
                    ]
                }
            ]
            this.views = [
                "day",
                { type: "workWeek", selected: true },
                "week",
                "month",
                "agenda",
                { type: "timeline", eventHeight: 50 }
            ]

            this.dataSource = {}

    }

    render() {
        return (
            <div>    
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@progress/kendo-theme-default@latest/dist/all.css" crossorigin="anonymous" />
                <Scheduler height={600}
                    views={this.views}
                    dataSource={this.dataSource}
                    date={new Date("2013/6/13")}
                    startTime={this.startTime}
                    resources={this.resources} />
            </div>
        );
     }
}
export default SchedulerContainer;