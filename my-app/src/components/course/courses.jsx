import styles from './Course.module.scss';
// import { useState } from "react";
const Course = (props) => {
    const {course, deleteCourse} = props;
    const handleDelete = (id) => {
        deleteCourse(id);
    }
    
    // const {courses} = props;
    return (
        <div className ={styles.Course}>
            <h3>Название курса: {course.title}</h3>
            <p>Описание: {course.description}</p>
            {course.hours < 101 ? <p className ={styles.item__hard}> Кол-во часов: {course.hours}</p>: <p> Кол-во часов: {course.hours}</p> }
            <img src={course.img} alt="University" />
            <button onClick ={()=> handleDelete(course.id)}>Удалить</button>
            <button>Лайкнуть</button>



        </div>
    )
}
export default Course;