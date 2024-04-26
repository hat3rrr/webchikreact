import styles from './Course.module.scss';
// import { useState } from "react";
const Course = (props) => {
    const {course, deleteCourse, changeLike} = props;
    const handleDelete = (id) => {
        deleteCourse(id);
    };
    const handleLike = () => {
        changeLike(course.id);
      };
    
    // const {courses} = props;
    const likedClass = course.liked ? styles.item__liked : styles.Course;
    return (
        <div className ={likedClass}>
            <h3>Название курса: {course.title}</h3>
            <p>Описание: {course.description}</p>
            <button onClick ={()=> handleDelete(course.id)}>Удалить</button>
            <button onClick={handleLike}>Лайкнуть</button>
            {course.hours < 101 ? <p className ={styles.item__hard}> Кол-во часов: {course.hours}</p>: <p> Кол-во часов: {course.hours}</p> }
            <img src={course.img} alt="University" />
            



        </div>
    )
}
export default Course;