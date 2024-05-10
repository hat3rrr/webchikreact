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
    const changeLike = (id) => {
        const updatedDataCourses = datacourses.map((course) => {
          if (course.id === id) {
            console.log(course);
            return { ...course, liked: !course.liked };
            
          }
          return course;
        });
        setDataCourses(updatedDataCourses);
      };
    const handleVisiblecount =() =>{
        setVisiblecount(visibleCount+3);}
    return(
      
        
        <div className ={styles.courseslist}>
            {/* <h2></h2> */}
            {/* <p>flsalfasl</p> */}
            {datacourses.slice(0, visibleCount).map((item) => (
        <Course
          key={item.id}
          course={item}
          deleteCourse={deleteCourse}
          changeLike={changeLike}
        />
      ))}
      <div className={styles.pagination}>
                {visibleCount < datacourses.length && (
                    <button onClick={handleVisiblecount} className={styles.paginationButton}>
                        Еще
                    </button>
                )}
            </div>
      
        </div>
        
        
    )
}

export default Courseslist;