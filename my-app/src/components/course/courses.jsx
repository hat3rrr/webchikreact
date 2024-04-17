import styles from './courses.module.scss';
const courses = ({course}) => {
    // const {courses} = props;
    return (
        <div className ={styles.courses}>
            <h3>Название курса: {course.title}</h3>
            <p>Описание: {course.description}</p>
            <p>Кол-во часов: {course.hours}</p>
            <img src={course.img} alt="University" />



        </div>
    )
}
export default courses;