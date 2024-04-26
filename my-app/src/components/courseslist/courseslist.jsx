import Course from "../course/courses";
import styles from './courseslist.module.scss';
import data from '../../data.json';
import { useEffect, useState } from "react";

const Courseslist = () => {
    const [datacourses, setDataCourses] = useState([]);
    useEffect(()=> {
        setDataCourses(data);
},[])
    const [visibleCount, setVisiblecount]= useState(3);
    const deleteCourse = (id) =>{
        const updateCourses = datacourses.filter((item)=> item.id!==id);
        setDataCourses(updateCourses);
    }
    // const changeLike = (id) => {
    //     const updateLike = datacourses.
    // }
    const handleVisiblecount =() =>{
        setVisiblecount(visibleCount+3);}
    return(
        
        <div className ={styles.courseslist}>
            {/* <h2></h2> */}
            {/* <p>flsalfasl</p> */}
            {datacourses.slice(0,visibleCount).map((item) => 
                <div key= {item.id}>
                <Course course={item} deleteCourse = {deleteCourse} />
                </div>
)}
{visibleCount < datacourses.length && (
    <button onClick= {handleVisiblecount}className={styles.btn}>Еще</button>
)}
{/* <button onClick={handleCounter}> click {counter}</button> */}
        </div>
    )
}

export default Courseslist;