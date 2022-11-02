import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import "../styles/Experience.css";

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2010 - 2014"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        High School
                    </h3>
                    <p>
                        High School Diploma
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2010 - 2014"
                    iconStyle={{ background: "#b8d01d", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        English
                    </h3>
                    <p>
                        English diploma 1,2
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2010 - 2014"
                    iconStyle={{ background: "#f3d08d", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        University
                    </h3>
                    <p>
                        University Diploma
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2010 - 2014"
                    iconStyle={{ background: "#f9d12c", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Work
                    </h3>
                    <p>
                        Work Experience
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2010 - 2014"
                    iconStyle={{ background: "#f9d12c", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Work
                    </h3>
                    <p>
                        Work Experience
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;