import React, { Component } from 'react';
import APIURL from '../../helpers/environment';
import { TextField, Button } from '@material-ui/core';

type FetchCoursesState = {
    fetched: Array<FetchedArray>,
    courseState: string,
    courseNumber: number,
    courseTitle: string,
    courseDate: string,
    courseCategory: string,
    courseHours: number,
    coursePrice: number,
    courseExpiration: string,
    id: number //
}

type FetchedArray = {
    courseState: string;
    courseNumber: number;
    courseTitle: string;
    courseDate: string;
    courseCategory: string;
    courseHours: number;
    coursePrice: number;
    courseExpiration: string;
    id: number;
}

interface EmployeeCourseProps {
    token: string | null;
}


export default class EmployeeViewCC extends Component <EmployeeCourseProps, FetchCoursesState> {
    constructor(props: EmployeeCourseProps) {
        super(props)
        console.log('Props: ', props);
        this.state = {
            fetched: [],
            courseState: '',
            courseNumber: 0,
            courseTitle: '',
            courseDate: '',
            courseCategory: '',
            courseHours: 0,
            coursePrice: 0,
            courseExpiration: '',
            id: 0
        }
        // this.deleteCourse = this.deleteCourse.bind(this)
    }


    // Show ALL Courses
    
    fetchAllCourses(){
    // event.preventDefault();
        fetch(`${APIURL}/courses/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': `${this.props.token}`,
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
        
        componentDidMount () {
            this.fetchAllCourses();
        }

        
        // Method which will post input values into database
        
        createCourse (e: React.FormEvent<HTMLFormElement>) {
            // e.preventDefault();
            fetch(`${APIURL}/courses/create`, {
                method: 'POST',
                body: JSON.stringify({
                    course:
                    {
                        courseState: this.state.courseState,
                        courseNumber: this.state.courseNumber,
                        courseTitle: this.state.courseTitle,
                        courseDate: this.state.courseDate,
                        courseCategory: this.state.courseCategory,
                        courseHours: this.state.courseHours,
                        coursePrice: this.state.coursePrice,
                        courseExpiration: this.state.courseExpiration
                    }
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `${this.props.token}`
                })
            }) .then((res) => res.json())
            .then(() =>
            {
                console.log('Course Created');
                
            })
        }
        
                
        // Edit A course
                
            editCourse() {
                fetch(`${APIURL}/courses/edit/${this.state.id}`, {
                    method: 'PUT',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': `${this.props.token}`,
                    })
                            
            }) .then((res) => res.json())
            .then((data) =>
            {
            console.log(data);
            // this.setState({
                // fetched is the variable name of our returned arrays
                // fetched: data
            })
        }
        
        // Delete A course
                
            deleteCourse() {
                fetch(`${APIURL}/courses/delete/${this.state.id}`, {
                    method: 'DELETE',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': `${this.props.token}`,
                    })
                            
            }) .then((res) => res.json())
            .then((data) =>
            {
            console.log(data);
            // this.setState({
                // fetched is the variable name of our returned arrays
                // fetched: data
            })
        }
        
        
        // On-Screen Display

            render() {
                    return (
                        
                        <div style={{marginTop: '10px', marginLeft: '20%'}}>

            <h3>Create a Course</h3>    

            <div>

            <form onSubmit={(e)=>this.createCourse(e)} >
                    
                <br />
                <TextField id="outlined-basic" label="Course State" variant="outlined" onChange={(e)=>this.setState({courseState: e.target.value})} />
                <TextField id="outlined-basic" label="Course Number" variant="outlined" onChange={(e)=>this.setState({courseNumber: parseInt(e.target.value)})} />
                <TextField id="outlined-basic" label="Course Title" variant="outlined" onChange={(e)=>this.setState({courseTitle: e.target.value})} />
                <TextField id="outlined-basic" label="Course Date" variant="outlined" onChange={(e)=>this.setState({courseDate: e.target.value})} />
                <br />
                <br />
                <TextField id="outlined-basic" label="Course Category" variant="outlined" onChange={(e)=>this.setState({courseCategory: e.target.value})} />
                <TextField id="outlined-basic" label="Course Hours" variant="outlined" onChange={(e)=>this.setState({courseHours: parseInt(e.target.value)})} />
                <TextField id="outlined-basic" label="Course Price" variant="outlined" onChange={(e)=>this.setState({coursePrice: parseInt(e.target.value)})} />
                <TextField id="outlined-basic" label="Course Expiration" variant="outlined" onChange={(e)=>this.setState({courseExpiration: e.target.value})} />
                <br />
                <br />
                <Button type="submit" color='primary' size='large' variant="contained">Create this Course!</Button>
                <br />


            </form>
            </div>


            <table>
                <tbody>

                <tr><h3>Upcoming Online Courses</h3></tr>

                {
                    this.state.fetched.map((course, index) =>
                    <div>
                        <tr key={index}>Course State: <td>{course.courseState}</td></tr>
                        <tr key={index}>Course Number: <td>{course.courseNumber}</td></tr>
                        <tr key={index}>Course Title: <td>{course.courseTitle}</td></tr>
                        <tr key={index}>Date of Class: <td>{course.courseDate}</td></tr>
                        <tr key={index}>Course Category: <td>{course.courseCategory}</td></tr>
                        <tr key={index}>Credits: <td>{course.courseHours + ' CE Hours'}</td></tr>
                        <tr key={index}>Price: <td>{'$ ' + course.coursePrice +'.00'}</td></tr>
                        <tr key={index}>Expiration Date: <td>{course.courseExpiration}</td></tr>
                        <Button variant="outlined" color="primary" onClick={this.editCourse}>EDIT</Button>
                        <Button variant="outlined" color="secondary" key={index} onClick={this.deleteCourse}>DELETE</Button>

                    </div>
                    )
                }
                </tbody>
            </table>
        </div>
    )}}
    
    
    // In Progress
    
    // Create Course Functionality
    
    // enterCourseState = (e: string) => {
        //     this.setState({ courseState: e });
        // }
        // enterCourseNumber = (e: string) => {
        //     this.setState({ courseNumber: e });
        // }
        // enterCourseTitle = (e: string) => {
            //     this.setState({ courseTitle: e });
            // }
            // enterCourseDate = (e: string) => {
                //     this.setState({ courseDate: e });
                // }
                // enterCourseCategory = (e: string) => {
                    //     this.setState({ courseCategory: e });
                    // }
                    // enterCourseHours = (e: string) => {
                        //     this.setState({ courseHours: e });
                        // }
                        // enterCoursePrice = (e: string) => {
                            //     this.setState({ coursePrice: e });
                            // }
                            // enterExpiration = (e: string) => {
                                //     this.setState({ courseExpiration: e });
                                // }
                                
                                // createCourse (e: React.FormEvent<HTMLFormElement>) {
                                    //     e.preventDefault();
                                    //     fetch(`${APIURL}/courses/create`, {
                                        //         method: 'POST',
                                        //         body: JSON.stringify({
                                            //             course:
                                            //             {
                                                //             courseState: this.state.courseState,
                                                //             courseNumber: this.state.courseNumber,
                                                //             courseTitle: this.state.courseTitle,
                                                //             courseDate: this.state.courseDate,
                                                //             courseCategory: this.state.courseCategory,
                                                //             courseHours: this.state.courseHours,
                                                //             coursePrice: this.state.coursePrice,
                                                //             courseExpiration: this.state.courseExpiration
                                                //             }
                                                //         }),
                                                //         headers: new Headers({
                                                    //             'Content-Type': 'application/json'
                                                    //         })
                                                    //     }) .then((res) => res.json())
                                                    //     .then((data) =>
                                                    //     {
                                                        //         console.log(data);
                                                        //         this.setState({
                                                            //             courseState: data.courseState,
                                                            //             courseNumber: data.courseNumber,
                                                            //             courseTitle: data.courseTitle,
                                                            //             courseDate: data.courseDate,
                                                            //             courseCategory: data.courseCategory,
                                                            //             courseHours: data.CourseHours,
                                                            //             coursePrice: data.coursePrice,
                                                            //             courseExpiration: data.courseExpiration
                                                            //         })
        //     })
        // }
        
        // // Delete A course
        
        // deleteCourse() {
            //     fetch(`${APIURL}/courses/${this.state.id}`, {
                //         method: 'DELETE',
                //         headers: new Headers({
                    //             'Content-Type': 'application/json',
                    //             'Authorization': `${this.props.token}`,
                    //         })
                    
                    //     }) .catch(err => console.log(err))
                    // }



                    // In Progress
                
                    // Create Course Functionality
                
                    // Input Boxes setting new state of values
                
                    // enterCourseState = (e: string) => {
                    //     this.setState({ courseState: e });
                    // }
                    // enterCourseNumber = (e: number) => {
                    //     this.setState({ courseNumber: e });
                    // }
                    // enterCourseTitle = (e: string) => {
                    //     this.setState({ courseTitle: e });
                    // }
                    // enterCourseDate = (e: string) => {
                    //     this.setState({ courseDate: e });
                    // }
                    // enterCourseCategory = (e: string) => {
                    //     this.setState({ courseCategory: e });
                    // }
                    // enterCourseHours = (e: number) => {
                    //     this.setState({ courseHours: e });
                    // }
                    // enterCoursePrice = (e: number) => {
                    //     this.setState({ coursePrice: e });
                    // }
                    // enterExpiration = (e: string) => {
                    //     this.setState({ courseExpiration: e });
                    // }