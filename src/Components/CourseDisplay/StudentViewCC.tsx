import React, { Component } from 'react';
import APIURL from '../../helpers/environment';
import { Button, Container } from '@material-ui/core'


type FetchCoursesState = {
    fetched: Array<FetchedArray>
}

type FetchedArray = {
    courseTitle: string;
    courseDate: string;
    courseCategory: string;
    courseHours: string;
    coursePrice: string;
}

interface StudentCourseProps {
    token: string | null,
}


export default class StudentViewCC extends Component<StudentCourseProps, FetchCoursesState>{

    constructor(props: StudentCourseProps) {
        super(props)
        console.log('Props: ', props);
        this.state = {
            fetched: []
        };
    }

    fetchAllCourses(){

    // event.preventDefault();
        fetch(`${APIURL}/courses/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`,
            })
            
        }) .then((res) => res.json())
            .then((data) =>
            {
                console.log(data);
                this.setState({
                    // fetched is the variable name of our returned arrays
                    fetched: data
                })
            })
        }


    // binding our methods to 'this' class component
    componentDidMount () {
        this.fetchAllCourses()
    }

    clickEnrollButton () {
        console.log('Course added to shopping cart!')
    }


    render() {
        return (
            <Container>

                <h2>Upcoming Online Courses</h2>

                <div>
                {
                    this.state.fetched.map((course, index) =>
                    <div>
                        <tr key={index}>Course Title: <td>{course.courseTitle}</td></tr>
                        <tr key={index}>Date of Class: <td>{course.courseDate}</td></tr>
                        <tr key={index}>Course Category: <td>{course.courseCategory}</td></tr>
                        <tr key={index}>Credits: <td>{course.courseHours + ' CE Hours'}</td></tr>
                        <tr key={index}>Price: <td>{'$' + course.coursePrice +'.00'}</td></tr>
                        <br />
                        <Button onClick={this.clickEnrollButton} type='submit' color='primary' size='large' variant="contained">CLICK TO ENROLL</Button>
                        <br />
                        <br />
                    </div>
                    )
                }
                </div>

            </Container>
        )}} 
