import Courses from "../course/courses";
import styles from './courseslist.module.scss';
import data from '../../data.json';

const courseslist = () => {
    // console.log(data)
    return(
        <div className ={styles.courseslist}>
            {/* <h2></h2> */}
            {/* <p>flsalfasl</p> */}
            {data.map((item) => 
                <div key= {item.id}>
                <Courses course={item} />
                </div>
)}
        </div>
    )
}
export default courseslist;