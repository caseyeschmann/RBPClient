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

    // handleSubmit(event: any) {
    //     event.preventDefault()
    //     this.fetchResults(event)
    // }

    // addToCart {

    // }

    componentDidMount () {
        this.fetchAllCourses()
    }


    render() {
        return (
            <Container>
                <h2>Upcoming Online Courses</h2>
                {
                    this.state.fetched.map((course, index) =>
                    <div>
                        <tr key={index}>Course Title: <td>{course.courseTitle}</td></tr>
                        <tr key={index}>Date of Class: <td>{course.courseDate}</td></tr>
                        <tr key={index}>Course Category: <td>{course.courseCategory}</td></tr>
                        <tr key={index}>Credits: <td>{course.courseHours + ' CE Hours'}</td></tr>
                        <tr key={index}>Price: <td>{'$' + course.coursePrice +'.00'}</td></tr>
                        <br />
                        <Button type='submit' color='primary' size='large' variant="contained">CLICK TO ENROLL</Button>
                        <br />
                        <br />
                    </div>
                    )
                }
            </Container>
        )}} 










//         <div>
//             <h1>All Upcoming Courses</h1>
//             {/* {this.fetchResults.map((this.fetchResults, index) => {
//                 return(
//                     <div key={index}>
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <td>Course Title</td>
//                                     <td>Class Date</td>
//                                     <td>Course Category</td>
//                                     <td>Course Hours</td>
//                                     <td>Course Price</td>
//                                     <td>Add to Cart</td>
//                                 </tr>

//                                 <tr>
//                                     <td>{this.fetchResults.courseTitle}</td>
//                                     <td>{this.fetchResults.courseDate}</td>
//                                     <td>{this.fetchResults.courseCategory}</td>
//                                     <td>{this.fetchResults.courseHours}</td>
//                                     <td>{this.fetchResults.coursePrice}</td>
//                                     <td>{this.fetchResults.courseExpiration}</td>
//                                     <td>
//                                         {/* <button onClick={this.addToCart}>ENROLL!</button> */}
//                                         {/* <button>ENROLL!</button>
//                                     </td>
//                                 </tr>

//                             </tbody>
//                         </table>
//                     </div>
//                 )
//             })}


//         </div>
//         );
//     }
// }*/
