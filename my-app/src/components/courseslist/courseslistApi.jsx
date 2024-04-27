import styles from './courseslist.module.scss';
import { useEffect, useState } from "react";

const API_KEY = "6844bc1469dc4e75a12521d13850a2f9"; // замените на свой ключ API

const CourseslistApi = () =>
{
    const [matches, setMatches] = useState([]);

    useEffect (() => {
        fetch(`https://api.football-data.org/v2/matches?status=FINISHED`, {
            headers: {
                "X-Auth-Token": API_KEY
            }
        })
            .then(response => response.json())
            .then((json) =>
            {
                console.log(json);
                setMatches(json.matches);
            });
    }, [])

    return (
        <>
            <h1> Football Matches</h1>
            <div >
            {matches.map((match) => (
                <div key={match.id} >
                <h3> {match.homeTeam.name} - {match.awayTeam.name}</h3>
                <p> {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</p>
                </div>
      ))}  
      </div>
      
      
        
        
        </>
    );
}
export default CourseslistApi;