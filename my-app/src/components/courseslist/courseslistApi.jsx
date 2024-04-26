import styles from './courseslist.module.scss';
import { useEffect, useState } from "react";

const CourseslistApi = () =>
{
    const [courses, setCourses] = useState([]);
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json) =>
            {
                console.log(json);
                setCourses(json);
            });
    }, [])

    return (
        <>
            <h1> Data from API</h1>
            <div >
            {courses.map((item) => (
                <div key={item.id} >
                <h3> {item.title}</h3>
                <p> {item.body}</p>
                </div>
      ))}  
      </div>
      
      
        
        
        </>
    );
}
export default CourseslistApi;